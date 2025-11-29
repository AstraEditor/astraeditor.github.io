// 多语言翻译数据
const translations = {
    'zh-CN': {
        title: 'Astra Editor - 基于TurboWarp的二创编辑器',
        startUsing: '开始使用',
        downloadDesktop: '下载桌面版',
        useOnline: '使用在线版',
        footerLinks: {
            github: 'GitHub',
            community: '社区',
            feedback: '反馈'
        },
        copyright: '© 2025 Astra Editor. 基于 TurboWarp 构建。',
        loadingMessage: 'Astra Editor 网站已加载'
    },
    'en-US': {
        title: 'Astra Editor - A TurboWarp-based Editor',
        startUsing: 'Get Started',
        downloadDesktop: 'Download Desktop',
        useOnline: 'Use Online Version',
        footerLinks: {
            github: 'GitHub',
            community: 'Community',
            feedback: 'Feedback'
        },
        copyright: '© 2025 Astra Editor. Built with TurboWarp.',
        loadingMessage: 'Astra Editor website loaded'
    }
};

// 获取当前语言设置
function getCurrentLanguage() {
    // 从localStorage获取，如果没有则使用浏览器语言
    const savedLang = localStorage.getItem('astra-language');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    // 检测浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        return 'zh-CN';
    }
    return 'en-US';
}

// 设置语言
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not supported`);
        return;
    }
    
    localStorage.setItem('astra-language', lang);
    applyTranslations(lang);
    
    // 更新HTML lang属性
    document.documentElement.lang = lang;
    
    // 更新语言切换按钮状态
    updateLanguageButton(lang);
}

// 应用翻译
function applyTranslations(lang) {
    const texts = translations[lang];
    
    // 更新标题
    document.title = texts.title;
    
    // 更新开始使用
    const startUsingEl = document.querySelector('.download-section h2');
    if (startUsingEl) startUsingEl.textContent = texts.startUsing;
    
    // 更新下载按钮
    const downloadBtn = document.querySelector('.download-btn.primary');
    if (downloadBtn) downloadBtn.textContent = texts.downloadDesktop;
    
    // 更新在线版按钮
    const onlineBtn = document.getElementById('online-version-btn');
    if (onlineBtn) onlineBtn.textContent = texts.useOnline;
    
    // 更新页脚链接
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 3) {
        footerLinks[0].textContent = texts.footerLinks.github;
        footerLinks[1].textContent = texts.footerLinks.community;
        footerLinks[2].textContent = texts.footerLinks.feedback;
    }
    
    // 更新版权信息
    const copyrightEl = document.querySelector('.content-footer p');
    if (copyrightEl) copyrightEl.textContent = texts.copyright;
}

// 更新语言切换按钮
function updateLanguageButton(currentLang) {
    const langSwitch = document.getElementById('language-switch');
    if (langSwitch) {
        langSwitch.textContent = currentLang === 'zh-CN' ? 'EN' : '中';
        langSwitch.title = currentLang === 'zh-CN' ? 'Switch to English' : '切换到中文';
    }
}

// 创建语言切换按钮
function createLanguageSwitch() {
    const langSwitch = document.createElement('button');
    langSwitch.id = 'language-switch';
    langSwitch.className = 'language-switch';
    langSwitch.setAttribute('aria-label', 'Language Switch');
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .language-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .language-switch:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
            .language-switch {
                top: 15px;
                right: 15px;
                padding: 6px 12px;
                font-size: 12px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // 添加点击事件
    langSwitch.addEventListener('click', function() {
        const currentLang = getCurrentLanguage();
        const newLang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
        setLanguage(newLang);
    });
    
    return langSwitch;
}

// 初始化多语言功能
function initMultiLanguage() {
    // 创建并添加语言切换按钮
    const langSwitch = createLanguageSwitch();
    document.body.appendChild(langSwitch);
    
    // 应用当前语言
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
}