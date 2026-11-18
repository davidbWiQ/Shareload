const ACCENTS = {
    blue: {
        accent: "#1B6EC2",
        hover: "#247EDB",
        border: "#3B8CE0",
        glow: "rgba(56, 152, 255, 0.45)",
        soft: "rgba(32, 130, 230, 0.22)"
    },
    purple: {
        accent: "#7C3AED",
        hover: "#8B5CF6",
        border: "#A78BFA",
        glow: "rgba(139, 92, 246, 0.45)",
        soft: "rgba(124, 58, 237, 0.22)"
    },
    emerald: {
        accent: "#059669",
        hover: "#10B981",
        border: "#34D399",
        glow: "rgba(16, 185, 129, 0.45)",
        soft: "rgba(5, 150, 105, 0.22)"
    },
    rose: {
        accent: "#E11D48",
        hover: "#F43F5E",
        border: "#FB7185",
        glow: "rgba(244, 63, 94, 0.45)",
        soft: "rgba(225, 29, 72, 0.22)"
    },
    amber: {
        accent: "#D97706",
        hover: "#F59E0B",
        border: "#FBBF24",
        glow: "rgba(245, 158, 11, 0.45)",
        soft: "rgba(217, 119, 6, 0.22)"
    }
};

const I18N = {
    ru: {
        badge: "10 000+ сайтов",
        navVideo: "Загрузить видео",
        navPlaylist: "Загрузить плейлист",
        navNetwork: "Проверить сеть",
        navSettings: "Настройки",
        greetings: {
            morning: (n) => `Доброе утро, ${n}`,
            day: (n) => `Добрый день, ${n}`,
            evening: (n) => `Добрый вечер, ${n}`,
            night: (n) => `Доброй ночи, ${n}`
        },
        subVideo: "Бесплатно загружайте видео и аудио по одной ссылке",
        subPlaylist: "Загружайте целые плейлисты и подборки одним кликом",
        find: "Найти",
        searching: "Поиск...",
        paste: "Вставить",
        optBest: "Формат и качество: Лучшее (MP4)",
        opt1080: "Full HD 1080p (MP4)",
        opt720: "HD 720p (MP4)",
        optAudio: "Только аудио (MP3)",
        browse: "Обзор",
        titlePlaceholder: "Название видео",
        descPlaceholder: "Описание",
        downloadVideo: "Скачать медиафайл",
        downloadPlaylist: "Скачать весь плейлист",
        openFolder: "Открыть папку",
        connecting: "Подключение к серверу...",
        downloading: (speed, eta) => `Загрузка • ${speed} • Осталось: ${eta}`,
        processing: "Финальная сборка файла...",
        done: "Готово! Загрузка завершена.",
        error: "Ошибка загрузки",
        emptyAlert: "Сначала вставьте ссылку!",
        netTitle: "Проверка соединения",
        netSub: "Диагностика доступа к серверам загрузки медиа",
        netRun: "Запустить проверку",
        netChecking: "Проверка...",
        netOk: (ms) => `Доступно (${ms} мс)`,
        netFail: "Нет доступа",
        setTitle: "Настройки Shareload",
        setSub: "Персонализация и параметры интерфейса",
        lblUsername: "Имя пользователя",
        lblTheme: "Тема оформления",
        themeDark: "Тёмная",
        themeLight: "Светлая",
        lblAccent: "Акцентный цвет",
        lblLang: "Язык интерфейса",
        saveBtn: "Сохранить настройки",
        savedBtn: "Сохранено!",
        copyright: "© 2026 Shareload. Все права защищены. Предназначено исключительно для личного использования и загрузки общедоступного контента."
    },
    uk: {
        badge: "10 000+ сайтів",
        navVideo: "Завантажити відео",
        navPlaylist: "Завантажити плейлист",
        navNetwork: "Перевірити мережу",
        navSettings: "Налаштування",
        greetings: {
            morning: (n) => `Доброго ранку, ${n}`,
            day: (n) => `Добрий день, ${n}`,
            evening: (n) => `Добрий вечір, ${n}`,
            night: (n) => `Доброї ночі, ${n}`
        },
        subVideo: "Безкоштовно завантажуйте відео та аудіо за одним посиланням",
        subPlaylist: "Завантажуйте цілі плейлисти та добірки одним кліком",
        find: "Знайти",
        searching: "Пошук...",
        paste: "Вставити",
        optBest: "Формат і якість: Найкраща (MP4)",
        opt1080: "Full HD 1080p (MP4)",
        opt720: "HD 720p (MP4)",
        optAudio: "Тільки аудіо (MP3)",
        browse: "Огляд",
        titlePlaceholder: "Назва відео",
        descPlaceholder: "Опис",
        downloadVideo: "Завантажити медіафайл",
        downloadPlaylist: "Завантажити весь плейлист",
        openFolder: "Відкрити папку",
        connecting: "Підключення до сервера...",
        downloading: (speed, eta) => `Завантаження • ${speed} • Залишилось: ${eta}`,
        processing: "Фінальна збірка файлу...",
        done: "Готово! Завантаження завершено.",
        error: "Помилка завантаження",
        emptyAlert: "Спочатку вставте посилання!",
        netTitle: "Перевірка з'єднання",
        netSub: "Діагностика доступу до серверів завантаження медіа",
        netRun: "Запустити перевірку",
        netChecking: "Перевірка...",
        netOk: (ms) => `Доступно (${ms} мс)`,
        netFail: "Немає доступу",
        setTitle: "Налаштування Shareload",
        setSub: "Персоналізація та параметри інтерфейсу",
        lblUsername: "Ім'я користувача",
        lblTheme: "Тема оформлення",
        themeDark: "Темна",
        themeLight: "Світла",
        lblAccent: "Акцентний колір",
        lblLang: "Мова інтерфейсу",
        saveBtn: "Зберегти налаштування",
        savedBtn: "Збережено!",
        copyright: "© 2026 Shareload. Усі права захищено. Призначено виключно для особистого використання та завантаження загальнодоступного контенту."
    },
    en: {
        badge: "10,000+ sites",
        navVideo: "Download Video",
        navPlaylist: "Download Playlist",
        navNetwork: "Check Network",
        navSettings: "Settings",
        greetings: {
            morning: (n) => `Good morning, ${n}`,
            day: (n) => `Good afternoon, ${n}`,
            evening: (n) => `Good evening, ${n}`,
            night: (n) => `Good night, ${n}`
        },
        subVideo: "Download video and audio for free with a single link",
        subPlaylist: "Download entire playlists and collections in one click",
        find: "Find",
        searching: "Searching...",
        paste: "Paste",
        optBest: "Format & Quality: Best (MP4)",
        opt1080: "Full HD 1080p (MP4)",
        opt720: "HD 720p (MP4)",
        optAudio: "Audio Only (MP3)",
        browse: "Browse",
        titlePlaceholder: "Video title",
        descPlaceholder: "Description",
        downloadVideo: "Download Media",
        downloadPlaylist: "Download Full Playlist",
        openFolder: "Open Folder",
        connecting: "Connecting to server...",
        downloading: (speed, eta) => `Downloading • ${speed} • ETA: ${eta}`,
        processing: "Finalizing media file...",
        done: "Done! Download complete.",
        error: "Download error",
        emptyAlert: "Please paste a link first!",
        netTitle: "Network Diagnostics",
        netSub: "Check connectivity to media download servers",
        netRun: "Run Check",
        netChecking: "Checking...",
        netOk: (ms) => `Online (${ms} ms)`,
        netFail: "Unreachable",
        setTitle: "Shareload Settings",
        setSub: "Personalization and interface preferences",
        lblUsername: "Username",
        lblTheme: "App Theme",
        themeDark: "Dark",
        themeLight: "Light",
        lblAccent: "Accent Color",
        lblLang: "Interface Language",
        saveBtn: "Save Settings",
        savedBtn: "Saved!",
        copyright: "© 2026 Shareload. All rights reserved. Intended strictly for personal use and downloading publicly available content."
    }
};

let currentSettings = { username: "User", lang: "ru", download_dir: "" };
let activeMode = "video";
let currentProgress = 0;

let tempLang = "ru";
let tempTheme = "dark";
let tempAccent = "blue";

function getTimeGreeting(t, name) {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return t.greetings.morning(name);
    if (h >= 12 && h < 18) return t.greetings.day(name);
    if (h >= 18 && h < 23) return t.greetings.evening(name);
    return t.greetings.night(name);
}

function applyAppearance(theme, accentKey) {
    document.body.classList.toggle("theme-light", theme === "light");
    const pal = ACCENTS[accentKey] || ACCENTS.blue;
    const root = document.documentElement.style;
    root.setProperty("--accent", pal.accent);
    root.setProperty("--accent-hover", pal.hover);
    root.setProperty("--accent-border", pal.border);
    root.setProperty("--accent-glow", pal.glow);
    root.setProperty("--accent-soft", pal.soft);
}

function syncSettingsControls(lang, theme, accent) {
    tempLang = lang;
    tempTheme = theme;
    tempAccent = accent;

    document.querySelectorAll(".lang-option").forEach(el => {
        el.classList.toggle("active", el.dataset.lang === lang);
    });
    document.querySelectorAll(".theme-btn").forEach(el => {
        el.classList.toggle("active", el.dataset.theme === theme);
    });
    document.querySelectorAll(".swatch").forEach(el => {
        el.classList.toggle("active", el.dataset.accent === accent);
    });
}

function applyLocalization() {
    const t = I18N[currentSettings.lang] || I18N.ru;
    document.getElementById("badge-sites").textContent = t.badge;
    document.getElementById("nav-video").textContent = t.navVideo;
    document.getElementById("nav-playlist").textContent = t.navPlaylist;
    document.getElementById("nav-network").textContent = t.navNetwork;
    document.getElementById("nav-settings").textContent = t.navSettings;

    document.getElementById("greeting-title").textContent = getTimeGreeting(t, currentSettings.username);
    document.getElementById("greeting-sub").textContent = activeMode === "playlist" ? t.subPlaylist : t.subVideo;

    document.getElementById("btn-analyze").textContent = t.find;
    document.getElementById("btn-paste").textContent = t.paste;
    document.getElementById("opt-best").textContent = t.optBest;
    document.getElementById("opt-1080").textContent = t.opt1080;
    document.getElementById("opt-720").textContent = t.opt720;
    document.getElementById("opt-audio").textContent = t.optAudio;
    document.getElementById("btn-folder").textContent = t.browse;

    if (!document.getElementById("thumb-img").getAttribute("src")) {
        document.getElementById("video-title").textContent = t.titlePlaceholder;
        document.getElementById("video-desc").textContent = t.descPlaceholder;
    }

    document.getElementById("btn-download").textContent = activeMode === "playlist" ? t.downloadPlaylist : t.downloadVideo;
    document.getElementById("btn-open-folder").textContent = t.openFolder;

    document.getElementById("net-title").textContent = t.netTitle;
    document.getElementById("net-sub").textContent = t.netSub;
    document.getElementById("btn-run-net").textContent = t.netRun;

    document.getElementById("set-title").textContent = t.setTitle;
    document.getElementById("set-sub").textContent = t.setSub;
    document.getElementById("lbl-username").textContent = t.lblUsername;
    document.getElementById("lbl-theme").textContent = t.lblTheme;
    document.getElementById("btn-theme-dark").textContent = t.themeDark;
    document.getElementById("btn-theme-light").textContent = t.themeLight;
    document.getElementById("lbl-accent").textContent = t.lblAccent;
    document.getElementById("lbl-lang").textContent = t.lblLang;
    document.getElementById("btn-save-settings").textContent = t.saveBtn;
    document.getElementById("copyright-text").textContent = t.copyright;
}

function switchTab(tabName) {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    const dlView = document.getElementById("tab-downloader");
    const netView = document.getElementById("tab-network");
    const setView = document.getElementById("tab-settings");

    dlView.classList.add("hidden");
    netView.classList.add("hidden");
    setView.classList.add("hidden");

    if (tabName === "video" || tabName === "playlist") {
        activeMode = tabName;
        dlView.classList.remove("hidden");
        applyLocalization();
    } else if (tabName === "network") {
        netView.classList.remove("hidden");
    } else if (tabName === "settings") {
        document.getElementById("input-username").value = currentSettings.username;
        const savedTheme = localStorage.getItem("shareload_theme") || "dark";
        const savedAccent = localStorage.getItem("shareload_accent") || "blue";
        syncSettingsControls(currentSettings.lang, savedTheme, savedAccent);
        setView.classList.remove("hidden");
    }
}

window.addEventListener("pywebviewready", async () => {
    currentSettings = await window.pywebview.api.get_settings();
    const folderEl = document.getElementById("folder-display");
    folderEl.textContent = currentSettings.download_dir;
    folderEl.title = currentSettings.download_dir;

    const savedTheme = localStorage.getItem("shareload_theme") || "dark";
    const savedAccent = localStorage.getItem("shareload_accent") || "blue";
    applyAppearance(savedTheme, savedAccent);
    syncSettingsControls(currentSettings.lang, savedTheme, savedAccent);
    applyLocalization();
});

document.getElementById("btn-min").addEventListener("click", () => window.pywebview.api.minimize_window());
document.getElementById("btn-close").addEventListener("click", () => window.pywebview.api.close_window());

document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        tempTheme = btn.dataset.theme;
        syncSettingsControls(tempLang, tempTheme, tempAccent);
        applyAppearance(tempTheme, tempAccent);
    });
});

document.querySelectorAll(".swatch").forEach(btn => {
    btn.addEventListener("click", () => {
        tempAccent = btn.dataset.accent;
        syncSettingsControls(tempLang, tempTheme, tempAccent);
        applyAppearance(tempTheme, tempAccent);
    });
});

document.querySelectorAll(".lang-option").forEach(el => {
    el.addEventListener("click", () => {
        tempLang = el.dataset.lang;
        syncSettingsControls(tempLang, tempTheme, tempAccent);
    });
});

document.getElementById("btn-save-settings").addEventListener("click", async () => {
    const newName = document.getElementById("input-username").value;
    currentSettings = await window.pywebview.api.save_settings(newName, tempLang);
    localStorage.setItem("shareload_theme", tempTheme);
    localStorage.setItem("shareload_accent", tempAccent);
    applyAppearance(tempTheme, tempAccent);
    applyLocalization();

    const t = I18N[currentSettings.lang] || I18N.ru;
    const btn = document.getElementById("btn-save-settings");
    btn.textContent = t.savedBtn;
    setTimeout(() => {
        btn.textContent = t.saveBtn;
    }, 1400);
});

document.getElementById("btn-paste").addEventListener("click", async () => {
    try {
        document.getElementById("url-input").value = await navigator.clipboard.readText();
    } catch (e) { }
});

document.getElementById("btn-folder").addEventListener("click", async () => {
    const newFolder = await window.pywebview.api.choose_folder();
    currentSettings.download_dir = newFolder;
    const folderEl = document.getElementById("folder-display");
    folderEl.textContent = newFolder;
    folderEl.title = newFolder;
});

document.getElementById("btn-open-folder").addEventListener("click", () => {
    window.pywebview.api.open_download_folder();
});

document.getElementById("btn-analyze").addEventListener("click", async () => {
    const url = document.getElementById("url-input").value;
    const btn = document.getElementById("btn-analyze");
    const t = I18N[currentSettings.lang] || I18N.ru;
    if (!url.trim()) return;

    btn.disabled = true;
    btn.textContent = t.searching;
    const isPlaylist = activeMode === "playlist";
    const res = await window.pywebview.api.fetch_info(url, isPlaylist);
    btn.disabled = false;
    btn.textContent = t.find;

    if (res.status === "ok") {
        const img = document.getElementById("thumb-img");
        const ph = document.getElementById("thumb-placeholder");
        if (res.thumbnail) {
            img.src = res.thumbnail;
            img.classList.remove("hidden");
            ph.classList.add("hidden");
        } else {
            img.removeAttribute("src");
            img.classList.add("hidden");
            ph.classList.remove("hidden");
        }
        document.getElementById("video-title").textContent = res.title;
        document.getElementById("video-desc").textContent = res.description;
    } else {
        alert(res.message);
    }
});

document.getElementById("btn-download").addEventListener("click", async () => {
    const url = document.getElementById("url-input").value;
    const quality = document.getElementById("quality-select").value;
    const btnDownload = document.getElementById("btn-download");
    const btnOpenFolder = document.getElementById("btn-open-folder");
    const t = I18N[currentSettings.lang] || I18N.ru;

    if (!url.trim()) {
        alert(t.emptyAlert);
        return;
    }

    btnDownload.disabled = true;
    btnOpenFolder.classList.add("hidden");
    currentProgress = 0;

    const fill = document.getElementById("progress-fill");
    fill.style.transition = "none";
    fill.style.width = "0%";
    void fill.offsetWidth;
    fill.style.transition = "width 0.35s cubic-bezier(0.22, 1, 0.36, 1)";

    document.getElementById("progress-area").classList.remove("hidden");
    document.getElementById("status-text").textContent = t.connecting;
    document.getElementById("percent-text").textContent = "0%";

    const isPlaylist = activeMode === "playlist";
    const res = await window.pywebview.api.start_download(url, quality, isPlaylist);
    if (res.status === "error") {
        alert(res.message);
        btnDownload.disabled = false;
    }
});

window.onDownloadProgress = (percent, speed, eta) => {
    const t = I18N[currentSettings.lang] || I18N.ru;
    if (percent > currentProgress) {
        currentProgress = percent;
        document.getElementById("progress-fill").style.width = `${currentProgress}%`;
        document.getElementById("percent-text").textContent = `${currentProgress}%`;
    }
    document.getElementById("status-text").textContent = t.downloading(speed, eta);
};

window.onDownloadProcessing = (percent) => {
    const t = I18N[currentSettings.lang] || I18N.ru;
    if (percent > currentProgress) {
        currentProgress = percent;
        document.getElementById("progress-fill").style.width = `${currentProgress}%`;
        document.getElementById("percent-text").textContent = `${currentProgress}%`;
    }
    document.getElementById("status-text").textContent = t.processing;
};

window.onDownloadComplete = (success, message) => {
    const t = I18N[currentSettings.lang] || I18N.ru;
    document.getElementById("btn-download").disabled = false;
    if (success) {
        currentProgress = 100;
        document.getElementById("progress-fill").style.width = "100%";
        document.getElementById("percent-text").textContent = "100%";
        document.getElementById("status-text").textContent = t.done;
        document.getElementById("btn-open-folder").classList.remove("hidden");
    } else {
        document.getElementById("status-text").textContent = t.error;
        alert(message);
    }
};

document.getElementById("btn-run-net").addEventListener("click", async () => {
    const btn = document.getElementById("btn-run-net");
    const t = I18N[currentSettings.lang] || I18N.ru;
    const keys = ["internet", "youtube", "tiktok", "instagram"];

    btn.disabled = true;
    btn.textContent = t.netChecking;
    keys.forEach(k => {
        const el = document.getElementById(`net-${k}`);
        el.textContent = "...";
        el.className = "net-status";
    });

    const res = await window.pywebview.api.check_network();
    keys.forEach(k => {
        const el = document.getElementById(`net-${k}`);
        if (res[k] && res[k].ok) {
            el.textContent = t.netOk(res[k].ping);
            el.className = "net-status ok";
        } else {
            el.textContent = t.netFail;
            el.className = "net-status fail";
        }
    });

    btn.disabled = false;
    btn.textContent = t.netRun;
});