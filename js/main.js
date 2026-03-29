(function() {
    'use strict';

    // i18n 翻译
    const i18n = {
        'zh-CN': {
            // 标题栏
            'download': '下载',
            'changelog': '更新日志',
            'repo': '仓库',
            'feedback': '反馈',
            // 头部
            'slogan': '锤子, 而不是花束',
            'tryOnline': '在线体验',
            'getDesktop': '获取桌面端',
            'snapshot': '快照版',
            'release': '正式版',
            // 介绍
            'fastAsLightning': '闪电般迅速',
            'introText': 'AstraEditor 加入了更多功能, 使您的编程速度"快如闪电"',
            'betterCostumeEditor': '更好的造型编辑器',
            'moreAddons': '更多插件',
            'customTheme': '自定义主题',
            // 下载
            'bornForYou': '为你而生',
            'downloadNow': '即刻下载 AstraEditor',
            'downloadWindows': '下载 Windows 版本',
            'downloadMacOS': '下载 macOS 版本',
            'downloadLinux': '下载 Linux 版本',
            'otherPlatforms': '其他平台:',
            'selectDistro': '选择您的 Linux 发行版',
            'pacman': 'Arch Linux (.pkg.tar.zst)',
            'debianUbuntu': 'Debian / Ubuntu (.deb)',
            'tarball': '.tar.gz (通用)',
            'appimage': 'Appimage',
            'rpm': 'Cent OS/Fedora (.rpm)',
            // 更新日志
            'changelogTitle': '更新日志',
            'changelogIntro': '查看 AstraEditor 的最新变化',
            'loadFailed': '无法加载更新日志',
            'noLogs': '暂无更新日志',
            // 页脚
            'fromTeam': '来自 AstraEditor 项目组',
            'projectNote': '本项目基于 TurboWarp 构建，但与 TurboWarp 项目组无关系。<br>所有更新的功能均为自制，如有雷同，纯属巧合',
            'moreLinks': '更多链接',
            'copyright': '©2026 AstraEditor项目组。保留所有权利。'
        },
        'en': {
            // Title bar
            'download': 'Download',
            'changelog': 'Changelog',
            'repo': 'Repo',
            'feedback': 'Feedback',
            'release': 'Release',
            // Header
            'slogan': 'Hammer, not bouquet',
            'tryOnline': 'Try Online',
            'getDesktop': 'Get Desktop',
            'snapshot': 'Snapshot',
            // Intro
            'fastAsLightning': 'Lightning Fast',
            'introText': 'AstraEditor includes more features to make your coding speed "Lightning Fast"',
            'betterCostumeEditor': 'Better Costume Editor',
            'moreAddons': 'More Addons',
            'customTheme': 'Custom Theme',
            // Download
            'bornForYou': 'Born for You',
            'downloadNow': 'Download AstraEditor Now',
            'downloadWindows': 'Download for Windows',
            'downloadMacOS': 'Download for macOS',
            'downloadLinux': 'Download for Linux',
            'otherPlatforms': 'Other platforms:',
            'selectDistro': 'Select your Linux distribution',
            'pacman': 'Arch Linux (.pkg.tar.zst)',
            'debianUbuntu': 'Debian / Ubuntu (.deb)',
            'tarball': '.tar.gz (Universal)',
            'appimage': 'Appimage',
            'rpm': 'Cent OS/Fedora (.rpm)',
            // Changelog
            'changelogTitle': 'Changelog',
            'changelogIntro': 'See what\'s new in AstraEditor',
            'loadFailed': 'Failed to load changelog',
            'noLogs': 'No changelog available',
            // Footer
            'fromTeam': 'From AstraEditor Team',
            'projectNote': 'This project is built on TurboWarp but is not affiliated with the TurboWarp team.<br>All new features are homemade, any similarities are purely coincidental',
            'moreLinks': 'More Links',
            'copyright': '©2026 AstraEditor Team. All rights reserved.'
        }
    };

    let currentLang = 'zh-CN';

    function t(key) {
        return i18n[currentLang][key] || i18n['zh-CN'][key] || key;
    }

    function initI18n() {
        // 从 localStorage 读取语言设置
        const savedLang = localStorage.getItem('lang');
        if (savedLang && i18n[savedLang]) {
            currentLang = savedLang;
        } else {
            // 检测浏览器语言
            const browserLang = navigator.language;
            if (browserLang.startsWith('zh')) {
                currentLang = 'zh-CN';
            } else {
                currentLang = 'en';
            }
        }

        updateAllText();
    }

    function updateAllText() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            el.textContent = t(key);
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            el.innerHTML = t(key);
        });
    }

    function setLanguage(lang) {
        if (i18n[lang]) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
            updateAllText();
            // 更新下载按钮
            initDownloadButton();
            // 更新更新日志
            initUpdateLogs();
        }
    }

    function initCollapsibleTabs() {
        const tabsContainer = document.querySelector('.titleBar-Tabs');
        const moreContainer = document.querySelector('.titleBar-MoreContainer');
        const moreButton = document.querySelector('.titleBar-MoreButton');
        const moreDropdown = document.querySelector('.titleBar-MoreDropdown');

        if (!tabsContainer || !moreContainer || !moreButton || !moreDropdown) return;

        const tabButtons = Array.from(tabsContainer.querySelectorAll('.titleBar-TabButton'))
            .filter(btn => !btn.closest('.titleBar-MoreDropdown'));

        const originalTabs = tabButtons.map(btn => ({
            element: btn,
            parent: btn.parentNode,
            nextSibling: btn.nextSibling
        }));

        function getTabWidth(tab) {
            const style = window.getComputedStyle(tab);
            return parseFloat(style.width) + (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);
        }

        function getAvailableWidth() {
            const titleBar = document.querySelector('.titleBar');
            const logo = document.querySelector('.titleBar-Logo');
            if (!titleBar || !logo) return 0;
            return titleBar.clientWidth - logo.offsetWidth - 80;
        }

        function resetTabs() {
            originalTabs.forEach(({ element, parent, nextSibling }) => {
                if (element.parentNode !== parent) {
                    nextSibling && nextSibling.parentNode === parent
                        ? parent.insertBefore(element, nextSibling)
                        : parent.appendChild(element);
                }
                element.style.display = '';
            });
            moreDropdown.innerHTML = '';
            moreButton.style.display = 'none';
        }

        function adjustTabs() {
            resetTabs();
            const availableWidth = getAvailableWidth();
            const moreButtonWidth = 50;
            let totalWidth = 0;
            let visibleCount = 0;

            for (let i = 0; i < tabButtons.length; i++) {
                const tabWidth = getTabWidth(tabButtons[i]);
                if (totalWidth + tabWidth + (i === tabButtons.length - 1 ? 0 : moreButtonWidth) > availableWidth) break;
                totalWidth += tabWidth;
                visibleCount++;
            }

            if (visibleCount < tabButtons.length) {
                for (let i = visibleCount; i < tabButtons.length; i++) {
                    const tab = tabButtons[i];
                    const clonedTab = tab.cloneNode(true);
                    clonedTab.addEventListener('click', () => tab.click());
                    moreDropdown.appendChild(clonedTab);
                    tab.style.display = 'none';
                }
                moreButton.style.display = 'flex';
            }
        }

        adjustTabs();
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(adjustTabs, 150);
        });

        document.addEventListener('click', (e) => {
            if (!moreContainer.contains(e.target)) moreDropdown.style.display = 'none';
        });

        moreButton.addEventListener('click', (e) => {
            e.stopPropagation();
            moreDropdown.style.display = moreDropdown.style.display === 'block' ? 'none' : 'block';
        });

        moreContainer.addEventListener('mouseenter', () => {
            if (moreButton.style.display !== 'none') moreDropdown.style.display = 'block';
        });
        moreContainer.addEventListener('mouseleave', () => moreDropdown.style.display = 'none');
    }

    function init3DEffect() {
        const imagesTitle = document.querySelector('.images-title');
        if (!imagesTitle) return;

        const maxRotate = 5;
        const maxTranslate = 10;

        document.addEventListener('mousemove', (e) => {
            const rect = imagesTitle.getBoundingClientRect();
            const halfWidth = Math.max(rect.width / 2, 50);
            const halfHeight = Math.max(rect.height / 2, 50);
            const centerX = rect.left + halfWidth;
            const centerY = rect.top + halfHeight;

            const deltaX = Math.max(-1, Math.min(1, (e.clientX - centerX) / halfWidth));
            const deltaY = Math.max(-1, Math.min(1, (e.clientY - centerY) / halfHeight));

            imagesTitle.style.transform = `
                perspective(1000px)
                rotateX(${deltaY * maxRotate}deg)
                rotateY(${-deltaX * maxRotate}deg)
                translateX(${deltaX * maxTranslate}px)
                translateY(${deltaY * maxTranslate}px)
            `;
        });
    }

    function initScrollAnimation() {
        const backgroundAE = document.querySelector('.head-BackgroundAE');
        if (!backgroundAE) return;

        const maxScrollDistance = 500;

        backgroundAE.classList.add('transition-ready');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / maxScrollDistance, 1);

            if (progress > 0.6) {
                backgroundAE.classList.add('visible');
            } else {
                backgroundAE.classList.remove('visible');
            }
        });
    }

    function initPerspectiveMenu() {
        const perspectiveSection = document.querySelector('.perspective-section');
        const container = document.querySelector('.perspective-container');
        const items = document.querySelectorAll('.perspective-item');
        
        if (!perspectiveSection || !container || items.length === 0) return;

        let currentIndex = 0;
        let isDragging = false;
        let startY = 0;
        let currentY = 0;
        let offsetY = 0;
        let velocity = 0;
        let lastY = 0;
        let lastTime = 0;
        let animationId = null;
        let targetOffset = 0;
        let currentOffset = 0;

        function updatePerspectivePosition() {
            const itemHeight = perspectiveSection.offsetHeight;
            const baseOffset = -currentIndex * itemHeight;
            targetOffset = baseOffset;
        }

        function animateInertia() {
            const friction = 0.92;
            const snapSpeed = 0.15;
            
            if (!isDragging) {
                const diff = targetOffset - currentOffset;
                
                if (Math.abs(diff) > 0.5 || Math.abs(velocity) > 0.5) {
                    currentOffset += diff * snapSpeed + velocity;
                    velocity *= friction;
                    
                    container.style.transform = `translateY(${currentOffset}px)`;
                    animationId = requestAnimationFrame(animateInertia);
                } else {
                    currentOffset = targetOffset;
                    container.style.transform = `translateY(${currentOffset}px)`;
                }
            }
        }

        function handleDragStart(e) {
            e.preventDefault();
            cancelAnimationFrame(animationId);
            isDragging = true;
            startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
            currentY = startY;
            lastY = startY;
            lastTime = Date.now();
            offsetY = 0;
            velocity = 0;
            perspectiveSection.style.cursor = 'grabbing';
        }

        function handleDragMove(e) {
            if (!isDragging) return;
            e.preventDefault();
            
            const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
            const now = Date.now();
            const dt = now - lastTime;
            
            if (dt > 0) {
                velocity = (clientY - lastY) / dt * 16;
            }
            
            lastY = clientY;
            lastTime = now;
            
            offsetY = clientY - startY;
            currentOffset = targetOffset + offsetY;
            
            const maxOffset = 0;
            const minOffset = -(items.length - 1) * perspectiveSection.offsetHeight;
            currentOffset = Math.max(minOffset - 100, Math.min(maxOffset + 100, currentOffset));
            
            container.style.transform = `translateY(${currentOffset}px)`;
        }

        function handleDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            perspectiveSection.style.cursor = 'grab';
            
            const itemHeight = perspectiveSection.offsetHeight;
            const threshold = itemHeight * 0.2;
            const velocityThreshold = 5;
            
            if (Math.abs(offsetY) > threshold || Math.abs(velocity) > velocityThreshold) {
                if (offsetY < 0 && currentIndex < items.length - 1) {
                    currentIndex++;
                } else if (offsetY > 0 && currentIndex > 0) {
                    currentIndex--;
                } else if (velocity < -velocityThreshold && currentIndex < items.length - 1) {
                    currentIndex++;
                } else if (velocity > velocityThreshold && currentIndex > 0) {
                    currentIndex--;
                }
            }
            
            updatePerspectivePosition();
            animateInertia();
        }

        perspectiveSection.addEventListener('mousedown', handleDragStart);
        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        
        perspectiveSection.addEventListener('touchstart', handleDragStart, { passive: false });
        document.addEventListener('touchmove', handleDragMove, { passive: false });
        document.addEventListener('touchend', handleDragEnd);
        
        perspectiveSection.style.cursor = 'grab';
        perspectiveSection.style.userSelect = 'none';
        
        items.forEach(item => {
            item.style.userSelect = 'none';
            item.style.pointerEvents = 'none';
            const img = item.querySelector('img');
            if (img) {
                img.style.userSelect = 'none';
                img.style.pointerEvents = 'none';
                img.draggable = false;
            }
        });

        updatePerspectivePosition();
    }

    function initIntroTitleAnimation() {
        const introTitle = document.querySelector('.intro-title');
        const introText = document.querySelector('.intro-text');
        const video = document.querySelector('.intro-show-video');
        const introVideoTexts = document.querySelectorAll('.intro-show-text');
        const introVideo = document.querySelectorAll('.intro-show-video');
        const downloadTitles = document.querySelector('.download-title');

        if (!introTitle) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        introTitle.classList.add('animate');
                        if (introText) introText.classList.add('animate');
                        if (introVideoTexts) introVideoTexts.forEach(i => i.classList.add('animate'));
                        if (introVideo) introVideo.forEach(i => i.classList.add('animate'));
                    });
                    video.play().catch((e) => {console.error(e)});
                    observer.unobserve(introTitle);
                }
            });
        }, {
            threshold: 0.5
        });

        const observerAdv = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        if (downloadTitles) downloadTitles.className = "download-title-small";
                    });
                    observerAdv.unobserve(downloadTitles);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(introTitle);
        observerAdv.observe(downloadTitles)
    }

    function initIntroVideoCarousel() {
        const videos = document.querySelectorAll('.intro-show-videos');
        if (videos.length === 0) return;

        let currentIndex = 0;
        let isActive = false;

        function showVideo(index) {
            videos.forEach((video, i) => {
                video.classList.remove('active', 'exit');
                if (i === index) {
                    video.classList.add('active');
                    const vid = video.querySelector('.intro-show-video');
                    if (vid) {
                        vid.currentTime = 0;
                        vid.play().catch(() => {});
                    }
                }
            });
        }

        function nextVideo() {
            if (!isActive) return;
            const prevIndex = currentIndex;
            videos[prevIndex].classList.add('exit');
            currentIndex = (currentIndex + 1) % videos.length;
            showVideo(currentIndex);
        }

        function startCarousel() {
            if (isActive) return;
            isActive = true;
            showVideo(0);
        }

        function stopCarousel() {
            isActive = false;
            videos.forEach(video => {
                video.classList.remove('active', 'exit');
                const vid = video.querySelector('.intro-show-video');
                if (vid) vid.pause();
            });
        }

        // 监听所有视频的 ended 事件
        videos.forEach(video => {
            const vid = video.querySelector('.intro-show-video');
            if (vid) {
                vid.addEventListener('ended', nextVideo);
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCarousel();
                } else {
                    stopCarousel();
                }
            });
        }, {
            threshold: 0.3
        });

        const container = document.querySelector('.intro-show');
        if (container) observer.observe(container);
    }

    async function initDownloadButton() {
        const downloadButton = document.querySelector('.download-button');
        const tabDownloadButton = document.querySelector('.titleBar-TabButton');
        const desktopBtn = document.querySelector('.head-link-desktop');
        const downloadSection = document.querySelector('.download');

        if (!downloadButton) return;

        // 从远程获取版本号
        let VERSION = '1.1.4'; // 默认版本
        try {
            const response = await fetch('https://raw.githubusercontent.com/AstraEditor/Desktop/refs/heads/master/docs/version.json');
            if (response.ok) {
                const versionData = await response.json();
                VERSION = versionData.latest || VERSION;
            }
        } catch (e) {
            console.warn('获取版本信息失败，使用默认版本', e);
        }

        // GitHub releases 基础 URL
        const RELEASES_BASE = 'https://github.com/AstraEditor/Desktop/releases/download';

        // 下载资源映射
        const downloadAssets = {
            windows: {
                x64: 'AstraEditor-Setup-{version}-x64.exe',
                ia32: 'AstraEditor-Setup-{version}-ia32.exe',
                arm64: 'AstraEditor-Setup-{version}-arm64.exe'
            },
            windowsLegacy: {
                x64: 'AstraEditor-Legacy-Setup-{version}-x64.exe',
                ia32: 'AstraEditor-Legacy-Setup-{version}-ia32.exe'
            },
            macos: 'AstraEditor-Setup-{version}.dmg',
            macosLegacy: {
                '11': 'AstraEditor-Legacy-11-Setup-{version}.dmg',
                '10.15': 'AstraEditor-Legacy-10.15-Setup-{version}.dmg',
                '10.13-10.14': 'AstraEditor-Legacy-10.13-10.14-Setup-{version}.dmg'
            },
            linux: {
                deb: {
                    x64: 'AstraEditor-linux-amd64-{version}.deb',
                    arm64: 'AstraEditor-linux-arm64-{version}.deb',
                    armv7l: 'AstraEditor-linux-armv7l-{version}.deb'
                },
                appimage: {
                    x64: 'AstraEditor-linux-x86_64-{version}.AppImage',
                    arm64: 'AstraEditor-linux-arm64-{version}.AppImage',
                    armv7l: 'AstraEditor-linux-armv7l-{version}.AppImage'
                },
                tarball: {
                    x64: 'AstraEditor-linux-x64-{version}.tar.gz',
                    arm64: 'AstraEditor-linux-arm64-{version}.tar.gz',
                    armv7l: 'AstraEditor-linux-armv7l-{version}.tar.gz'
                },
                rpm: {
                    x64: 'AstraEditor-linux-x86_64-{version}.rpm',
                    arm64: 'AstraEditor-linux-aarch64-{version}.rpm',
                    armv7l: 'AstraEditor-linux-armv7l-{version}.rpm'
                },
                pacman: {
                    x64: 'AstraEditor-linux-x64-{version}.pkg.tar.zst',
                    arm64: 'AstraEditor-linux-aarch64-{version}.pkg.tar.zst',
                    armv7l: 'AstraEditor-linux-armv7l-{version}.pkg.tar.zst'
                }
            }
        };

        // 生成下载链接
        function getDownloadUrl(asset) {
            return `${RELEASES_BASE}/v${VERSION}/${asset.replace(/{version}/g, VERSION)}`;
        }

        // 检测平台
        const platform = navigator.platform.toLowerCase();
        const userAgent = navigator.userAgent.toLowerCase();

        // 平台图标映射
        const platformIcons = {
            windows: './images/windows.svg',
            macos: './images/apple.svg',
            linux: './images/linux.svg'
        };

        let detectedPlatform = 'other';
        let platformName = '其他平台';
        let platformIcon = '';

        if (platform.includes('win') || userAgent.includes('windows')) {
            detectedPlatform = 'windows';
            platformName = 'Windows';
            platformIcon = platformIcons.windows;
        } else if (platform.includes('mac') || userAgent.includes('macintosh') || userAgent.includes('mac os x')) {
            detectedPlatform = 'macos';
            platformName = 'macOS';
            platformIcon = platformIcons.macos;
        } else if (platform.includes('linux') || userAgent.includes('linux')) {
            detectedPlatform = 'linux';
            platformName = 'Linux';
            platformIcon = platformIcons.linux;
        }

        // 创建下载按钮 HTML
        const downloadTextMap = {
            windows: t('downloadWindows'),
            macos: t('downloadMacOS'),
            linux: t('downloadLinux')
        };
        downloadButton.innerHTML = `
            <button class="download-btn download-btn-primary" data-platform="${detectedPlatform}">
                <span class="download-btn-text">${downloadTextMap[detectedPlatform] || `${t('downloadLinux')}`}</span>
                <img class="download-btn-icon" src="${platformIcon}" alt="${platformName}">
            </button>
            <div class="download-other-platforms">
                <span class="download-other-label">${t('otherPlatforms')}</span>
                <button class="download-btn download-btn-secondary" data-platform="windows">
                    <img src="./images/windows.svg" alt="Windows"> Windows
                </button>
                <button class="download-btn download-btn-secondary" data-platform="macos">
                    <img src="./images/apple.svg" alt="macOS"> macOS
                </button>
                <button class="download-btn download-btn-secondary" data-platform="linux">
                    <img src="./images/linux.svg" alt="Linux"> Linux
                </button>
            </div>
        `;

        // 点击"获取桌面端"按钮滚动到下载区域
        if (desktopBtn && downloadSection) {
            desktopBtn.addEventListener('click', () => {
                downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            tabDownloadButton.addEventListener('click', () => {
                downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
        }

        // 显示 Linux 发行版选择弹窗
        function showLinuxDistroModal() {
            const existingModal = document.querySelector('.download-modal');
            if (existingModal) existingModal.remove();

            const modal = document.createElement('div');
            modal.className = 'download-modal';
            modal.innerHTML = `
                <div class="download-modal-backdrop"></div>
                <div class="download-modal-content">
                    <div class="download-modal-header">
                        <span>${t('selectDistro')}</span>
                        <button class="download-modal-close">&times;</button>
                    </div>
                    <div class="download-modal-body">
                        <a class="download-distro-btn" href="${getDownloadUrl(downloadAssets.linux.pacman.x64)}" target="_blank">
                            <img src="./images/archlinux.svg" alt="Arch Linux">
                            <span>${t('archLinux')}</span>
                        </a>
                        <a class="download-distro-btn" href="${getDownloadUrl(downloadAssets.linux.deb.x64)}">
                            <img src="./images/debian.svg" alt="Debian">
                            <span>${t('debianUbuntu')}</span>
                        </a>
                        <a class="download-distro-btn" href="${getDownloadUrl(downloadAssets.linux.rpm.x64)}">
                            <img src="./images/linux.svg" alt="rpm">
                            <span>${t('rpm')}</span>
                        </a>
                        <a class="download-distro-btn" href="${getDownloadUrl(downloadAssets.linux.appimage.x64)}">
                            <img src="./images/linux.svg" alt="AppImage">
                            <span>${t('appImage')}</span>
                        </a>
                        <a class="download-distro-btn" href="${getDownloadUrl(downloadAssets.linux.tarball.x64)}">
                            <img src="./images/linux.svg" alt="tarball">
                            <span>${t('tarball')}</span>
                        </a>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = () => modal.remove();
            modal.querySelector('.download-modal-backdrop').addEventListener('click', closeModal);
            modal.querySelector('.download-modal-close').addEventListener('click', closeModal);
        }

        // 执行下载
        function performDownload(platformType) {
            let downloadUrl = '';
            switch (platformType) {
                case 'windows':
                    downloadUrl = getDownloadUrl(downloadAssets.windows.x64);
                    break;
                case 'macos':
                    downloadUrl = getDownloadUrl(downloadAssets.macos);
                    break;
                case 'linux':
                    showLinuxDistroModal();
                    return;
            }
            if (downloadUrl) {
                window.location.href = downloadUrl;
            }
        }

        // 下载按钮点击事件
        downloadButton.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                performDownload(btn.dataset.platform);
            });
        });

        // 下载按钮点击事件
        downloadButton.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const platform = btn.dataset.platform;
                if (platform === 'linux') {
                    showLinuxDistroModal();
                }
            });
        });
    }

    async function initUpdateLogs() {
        const changelogContent = document.querySelector('.changelog-content');
        const changelog = document.querySelector('.changelog');
        const updateButtonJump = document.querySelector('#update');
        if (!changelogContent) return;
        updateButtonJump.addEventListener('click', () => {
            changelog.scrollIntoView({ behavior: 'smooth', block: 'start' });
        })

        let logs = [];
        try {
            const response = await fetch('https://raw.githubusercontent.com/AstraEditor/Desktop/refs/heads/master/docs/changelog.json');
            if (response.ok) {
                logs = await response.json();
            }
        } catch (e) {
            console.warn('获取更新日志失败', e);
            changelogContent.innerHTML = `<div class="changelog-error">${t('loadFailed')}</div>`;
            return;
        }

        if (!logs || logs.length === 0) {
            changelogContent.innerHTML = `<div class="changelog-empty">${t('noLogs')}</div>`;
            return;
        }

        // 渲染更新日志
        changelogContent.innerHTML = logs.map(log => `
            <div class="changelog-item">
                <div class="changelog-header">
                    <code class="changelog-version">v${log.version}</code>
                    <span class="changelog-date">${log.date}</span>
                </div>
                <ul class="changelog-notes">
                    ${log.notes.map(note => `<li>${note}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    function initThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;

        // 从localStorage读取保存的主题
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        // 点击切换主题
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    function initLangToggle() {
        const langToggle = document.querySelector('.lang-toggle');
        const langText = document.querySelector('.lang-text');
        if (!langToggle || !langText) return;

        // 更新按钮文字
        function updateLangText() {
            langText.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
        }

        updateLangText();

        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
            setLanguage(newLang);
            updateLangText();
        });
    }

    // 暴露给全局
    window.setLanguage = setLanguage;
    window.t = t;

    document.addEventListener('DOMContentLoaded', () => {
        initI18n();
        initCollapsibleTabs();
        init3DEffect();
        initScrollAnimation();
        initPerspectiveMenu();
        initIntroTitleAnimation();
        initIntroVideoCarousel();
        initDownloadButton();
        initUpdateLogs();
        initThemeToggle();
        initLangToggle();
    });
})();
