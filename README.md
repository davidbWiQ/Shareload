# Shareload

**Shareload** is a minimalist desktop application for Windows that allows you to quickly download videos, audio tracks, and entire playlists from YouTube, TikTok, Instagram, and over 10,000 other websites using a single link.

## Key Features

* **10,000+ Supported Sites** — download media from YouTube, TikTok (watermark-free), Instagram, Twitch, Reddit, Twitter/X, and thousands of other platforms powered by `yt-dlp`.
* **Flexible Formats & Quality** — save videos in Best Available Quality (MP4), Full HD 1080p, HD 720p, or extract clean MP3 audio (192 kbps).
* **Playlist Downloads** — automatically download full playlists and collections into dedicated folders while preserving track/video numbering.
* **Modern UI** — frameless window featuring native Windows 10/11 translucency (Acrylic / Mica), **Dark** and **Light** themes, and customizable accent colors.
* **Multi-Language Interface** — full support for English, Ukrainian, and Russian with dynamic time-of-day greetings.
* **Built-in Network Diagnostics** — one-click connectivity and ping check for YouTube, TikTok, Instagram, and DNS servers.
* **Zero-Setup Runtime** — bundled with `FFmpeg`, requiring no external codecs or Python installation for end users.

## Installation (For Users)

1. Go to the **[Releases](../../releases)** section on the right side of the repository page.
2. Download the latest **`Shareload_Setup.exe`** installer.
3. Run the installer and follow the on-screen instructions (Microsoft Edge WebView2 Runtime will be installed automatically if missing).

## Building from Source (For Developers)

### Prerequisites
* Windows 10 / 11 (x64)
* Python 3.12+
* Python packages: `pywebview`, `yt-dlp`, `pyinstaller`
* `ffmpeg.exe` and `ffprobe.exe` binaries placed in the project root
* Inno Setup 6 (to compile the `.exe` installer)

### Run in Development Mode
```bash
pip install pywebview yt-dlp pyinstaller
python main.py
