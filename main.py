import os
import sys
import json
import time
import shutil
import socket
import getpass
import tempfile
import ctypes
import threading
import subprocess
import webview
import yt_dlp


def resource_path(relative_path):
    base_path = getattr(sys, '_MEIPASS', os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(base_path, relative_path)


class ACCENT_POLICY(ctypes.Structure):
    _fields_ = [
        ("AccentState", ctypes.c_uint),
        ("AccentFlags", ctypes.c_uint),
        ("GradientColor", ctypes.c_uint),
        ("AnimationId", ctypes.c_uint),
    ]


class WINDOWCOMPOSITIONATTRIBDATA(ctypes.Structure):
    _fields_ = [
        ("Attribute", ctypes.c_int),
        ("Data", ctypes.POINTER(ACCENT_POLICY)),
        ("SizeOfData", ctypes.c_size_t),
    ]


def apply_acrylic_universal(hwnd):
    try:
        build = sys.getwindowsversion().build
        if build >= 22000:
            dwmapi = ctypes.windll.dwmapi
            dark_mode = ctypes.c_int(1)
            dwmapi.DwmSetWindowAttribute(hwnd, 20, ctypes.byref(dark_mode), ctypes.sizeof(dark_mode))
            backdrop_type = ctypes.c_int(3)
            dwmapi.DwmSetWindowAttribute(hwnd, 38, ctypes.byref(backdrop_type), ctypes.sizeof(backdrop_type))
            corner_pref = ctypes.c_int(1)
            dwmapi.DwmSetWindowAttribute(hwnd, 33, ctypes.byref(corner_pref), ctypes.sizeof(corner_pref))
        else:
            accent = ACCENT_POLICY()
            accent.AccentState = 4
            accent.AccentFlags = 2
            accent.GradientColor = 0xCC1E1C1C
            data = WINDOWCOMPOSITIONATTRIBDATA()
            data.Attribute = 19
            data.Data = ctypes.pointer(accent)
            data.SizeOfData = ctypes.sizeof(accent)
            ctypes.windll.user32.SetWindowCompositionAttribute(hwnd, ctypes.byref(data))
    except Exception:
        pass


def get_base_ydl_opts(noplaylist=True):
    return {
        "quiet": True,
        "no_warnings": True,
        "noplaylist": noplaylist,
        "http_headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        },
        "extractor_args": {
            "tiktok": {
                "api_hostname": ["api22-normal-c-useast2a.tiktokv.com", "api16-normal-c-useast1a.tiktokv.com"],
                "app_version": ["34.1.2"],
                "manifest_app_version": ["2023401020"],
            }
        },
    }


class Api:
    def __init__(self):
        self._window = None
        self.is_downloading = False
        self.is_playlist_mode = False
        self.max_percent = 0.0
        self.stage = 0
        self.last_saved_dir = ""
        self.config_dir = os.path.join(os.getenv("APPDATA", os.path.expanduser("~")), "Shareload")
        os.makedirs(self.config_dir, exist_ok=True)
        self.config_file = os.path.join(self.config_dir, "settings.json")
        self.settings = self._load_settings()

    def _load_settings(self):
        defaults = {
            "username": getpass.getuser(),
            "lang": "ru",
            "download_dir": os.path.join(os.path.expanduser("~"), "Downloads"),
        }
        if os.path.exists(self.config_file):
            try:
                with open(self.config_file, "r", encoding="utf-8") as f:
                    defaults.update(json.load(f))
            except Exception:
                pass
        return defaults

    def _save_settings_file(self):
        try:
            with open(self.config_file, "w", encoding="utf-8") as f:
                json.dump(self.settings, f, ensure_ascii=False, indent=2)
        except Exception:
            pass

    def get_settings(self):
        return self.settings

    def save_settings(self, username, lang):
        clean_name = username.strip() if username and username.strip() else getpass.getuser()
        self.settings["username"] = clean_name
        self.settings["lang"] = lang
        self._save_settings_file()
        return self.settings

    def set_window(self, window):
        self._window = window

    def minimize_window(self):
        if self._window:
            self._window.minimize()

    def close_window(self):
        if self._window:
            self._window.destroy()

    def choose_folder(self):
        if not self._window:
            return self.settings["download_dir"]
        result = self._window.create_file_dialog(webview.FOLDER_DIALOG, directory=self.settings["download_dir"])
        if result and len(result) > 0:
            self.settings["download_dir"] = result[0]
            self._save_settings_file()
        return self.settings["download_dir"]

    def open_download_folder(self):
        target = self.last_saved_dir or self.settings["download_dir"]
        if os.path.exists(target):
            subprocess.Popen(["explorer", target])

    def check_network(self):
        targets = [
            ("internet", "1.1.1.1", 53),
            ("youtube", "www.youtube.com", 443),
            ("tiktok", "www.tiktok.com", 443),
            ("instagram", "www.instagram.com", 443),
        ]
        results = {}
        for name, host, port in targets:
            start = time.time()
            try:
                with socket.create_connection((host, port), timeout=3.0):
                    ping = int((time.time() - start) * 1000)
                    results[name] = {"ok": True, "ping": ping}
            except Exception:
                results[name] = {"ok": False, "ping": -1}
        return results

    def fetch_info(self, url, is_playlist=False):
        if not url or not url.strip():
            return {"status": "error", "message": "Empty URL"}
        ydl_opts = get_base_ydl_opts(noplaylist=not is_playlist)
        if is_playlist:
            ydl_opts["extract_flat"] = "in_playlist"
        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                info = ydl.extract_info(url.strip(), download=False)
                if is_playlist and "entries" in info:
                    entries = list(info.get("entries") or [])
                    first = entries[0] if entries else {}
                    thumb = info.get("thumbnail") or first.get("thumbnail") or ""
                    if not thumb and first.get("thumbnails"):
                        thumb = first["thumbnails"][-1].get("url", "")
                    return {
                        "status": "ok",
                        "title": info.get("title", "Playlist"),
                        "description": f"{info.get('uploader', '')} • {len(entries)} видео",
                        "thumbnail": thumb,
                        "count": len(entries),
                        "extractor": info.get("extractor_key", "Playlist"),
                    }
                desc = (info.get("description") or "").strip()
                if len(desc) > 220:
                    desc = desc[:217] + "..."
                return {
                    "status": "ok",
                    "title": info.get("title", "Video"),
                    "description": desc or f"{info.get('uploader', 'Creator')} • {info.get('duration_string', '')}",
                    "thumbnail": info.get("thumbnail", ""),
                    "extractor": info.get("extractor_key", "Media"),
                }
        except Exception as e:
            return {"status": "error", "message": str(e)}

    def start_download(self, url, quality, is_playlist=False):
        if self.is_downloading:
            return {"status": "error", "message": "Already downloading"}
        self.is_downloading = True
        self.max_percent = 0.0
        self.stage = 0
        thread = threading.Thread(
            target=self._download_worker,
            args=(url.strip(), quality, is_playlist),
            daemon=True,
        )
        thread.start()
        return {"status": "started"}

    def _progress_hook(self, d):
        if not self._window:
            return
        if d["status"] == "downloading":
            total = d.get("total_bytes") or d.get("total_bytes_estimate") or 0
            downloaded = d.get("downloaded_bytes", 0)
            raw_pct = (downloaded / total) * 100.0 if total > 0 else 0.0
            if self.is_playlist_mode:
                idx = d.get("info_dict", {}).get("playlist_index") or 1
                cnt = d.get("info_dict", {}).get("n_entries") or 1
                base = ((idx - 1) / max(cnt, 1)) * 95.0
                span = 95.0 / max(cnt, 1)
                scaled_pct = base + (raw_pct / 100.0) * span
            else:
                if self.stage == 0:
                    scaled_pct = raw_pct * 0.75
                else:
                    scaled_pct = 75.0 + (raw_pct * 0.20)
            if scaled_pct > self.max_percent:
                self.max_percent = round(scaled_pct, 1)
            speed = d.get("_speed_str", "").strip()
            eta = d.get("_eta_str", "").strip()
            self._window.evaluate_js(f"window.onDownloadProgress({self.max_percent}, '{speed}', '{eta}')")
        elif d["status"] == "finished":
            self.stage += 1
            if not self.is_playlist_mode and self.max_percent < 95.0:
                self.max_percent = 95.0
            self._window.evaluate_js(f"window.onDownloadProcessing({self.max_percent})")

    def _download_worker(self, url, quality, is_playlist):
        self.is_playlist_mode = is_playlist
        ffmpeg_dir = resource_path("")
        temp_job_dir = tempfile.mkdtemp(prefix="shareload_")
        if is_playlist:
            out_tmpl = os.path.join(temp_job_dir, "%(playlist_title).60s", "%(playlist_index)02d - %(title).100s.%(ext)s")
        else:
            out_tmpl = os.path.join(temp_job_dir, "%(title).120s.%(ext)s")

        if quality == "audio":
            format_str = "bestaudio/best"
            postprocessors = [{"key": "FFmpegExtractAudio", "preferredcodec": "mp3", "preferredquality": "192"}]
            merge_format = None
        elif quality == "1080":
            format_str = "bestvideo[height<=1080]+bestaudio/best[height<=1080]/best"
            postprocessors = []
            merge_format = "mp4"
        elif quality == "720":
            format_str = "bestvideo[height<=720]+bestaudio/best[height<=720]/best"
            postprocessors = []
            merge_format = "mp4"
        else:
            format_str = "bestvideo+bestaudio/best"
            postprocessors = []
            merge_format = "mp4"

        ydl_opts = get_base_ydl_opts(noplaylist=not is_playlist)
        ydl_opts.update({
            "format": format_str,
            "outtmpl": out_tmpl,
            "ignoreerrors": is_playlist,
            "progress_hooks": [self._progress_hook],
            "ffmpeg_location": ffmpeg_dir,
            "postprocessors": postprocessors,
        })
        if merge_format:
            ydl_opts["merge_output_format"] = merge_format

        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                ydl.download([url])

            target_dir = self.settings["download_dir"]
            os.makedirs(target_dir, exist_ok=True)
            self.last_saved_dir = target_dir

            for item in os.listdir(temp_job_dir):
                src_path = os.path.join(temp_job_dir, item)
                dst_path = os.path.join(target_dir, item)
                if os.path.isdir(src_path):
                    if os.path.exists(dst_path):
                        dst_path = f"{dst_path}_{int(time.time())}"
                    shutil.move(src_path, dst_path)
                    self.last_saved_dir = dst_path
                elif os.path.isfile(src_path):
                    if os.path.exists(dst_path):
                        base, ext = os.path.splitext(item)
                        dst_path = os.path.join(target_dir, f"{base}_new{ext}")
                    shutil.move(src_path, dst_path)

            if self._window:
                self._window.evaluate_js("window.onDownloadComplete(true, '')")
        except Exception as e:
            err_msg = str(e).replace("'", "\\'").replace("\n", " ")
            if self._window:
                self._window.evaluate_js(f"window.onDownloadComplete(false, '{err_msg}')")
        finally:
            shutil.rmtree(temp_job_dir, ignore_errors=True)
            self.is_downloading = False


def on_loaded(window):
    try:
        hwnd = ctypes.windll.user32.GetActiveWindow()
        if hwnd:
            apply_acrylic_universal(hwnd)
    except Exception:
        pass


if __name__ == "__main__":
    api = Api()
    html_file = resource_path(os.path.join("web", "index.html"))
    window = webview.create_window(
        title="Shareload",
        url=html_file,
        js_api=api,
        width=920,
        height=560,
        resizable=False,
        frameless=True,
        background_color="#18191C",
    )
    api.set_window(window)
    webview.start(on_loaded, window, debug=False)