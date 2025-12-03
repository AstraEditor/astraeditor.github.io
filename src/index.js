// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化多语言功能
    window.scrollTo(0)

    initMultiLanguage();
    
    const currentLang = getCurrentLanguage();
    console.log(translations[currentLang].loadingMessage);
    
    // 添加加载完成标记
    document.body.classList.add('loaded');
    
    // 滚动时的黑色覆盖效果
    const blackOverlay = document.querySelector('.black-overlay');
    const blueprintBackground = document.getElementById('blueprint-background');
    const contentContainer = document.querySelector('.content-container');
    
    // 初始化滚动状态
    function initScrollState() {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrollY > windowHeight * 0.3) {
            const progress = Math.min((scrollY - windowHeight * 0.3) / (windowHeight * 0.7), 1);
            blackOverlay.style.opacity = progress;
            contentContainer.style.opacity = progress;
            blueprintBackground.style.opacity = 1 - (progress * 0.8);
        } else {
            blackOverlay.style.opacity = 0;
            contentContainer.style.opacity = 0;
            blueprintBackground.style.opacity = 1;
        }
    }
    
    // 页面加载时立即初始化滚动状态
    if (blackOverlay && blueprintBackground && contentContainer) {
        initScrollState();
        
        // 添加滚动监听
        window.addEventListener('scroll', function() {
            initScrollState();
        });
    }
    
    // 5秒后自动跳转到内容区域（仅在页面顶部时）
    setTimeout(() => {
        if (window.pageYOffset < 50) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    }, 4000);
    
    // 简单的鼠标移动视差效果
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        if (blueprintBackground) {
            blueprintBackground.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
        }
    });
    
    // Logo悬停效果
    const centerLogo = document.querySelector('.center-logo img');
    if (centerLogo) {
        centerLogo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        centerLogo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // 在线版按钮点击事件
    const onlineVersionBtn = document.getElementById('online-version-btn');
    if (onlineVersionBtn) {
        onlineVersionBtn.addEventListener('click', function() {
            window.location.href = 'build/editor.html';
        });
    }
    
    // 平滑滚动到内容区域
    window.addEventListener('wheel', function(e) {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // 在第一屏时，向下滚动会平滑过渡到内容区域
        if (scrollY < 50 && e.deltaY > 0) {
            e.preventDefault();
            window.scrollTo({
                top: windowHeight,
                behavior: 'smooth'
            });
        }
    }, { passive: false });
    
    // 创建回到顶部按钮
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.id = 'back-to-top';
        button.innerHTML = '↑';
        button.title = '回到顶部';
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            #back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: white;
                font-size: 24px;
                font-weight: bold;
                border-radius: 50%;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            #back-to-top.visible {
                opacity: 1;
                visibility: visible;
            }
            
            #back-to-top:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: scale(1.1);
            }
            
            @media (max-width: 768px) {
                #back-to-top {
                    bottom: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    font-size: 20px;
                }
            }
        `;
        document.head.appendChild(style);
        
        // 添加点击事件
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        return button;
    }
    
    // 添加回到顶部按钮
    const backToTopButton = createBackToTopButton();
    document.body.appendChild(backToTopButton);
    
    // 监听滚动显示/隐藏回到顶部按钮
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // 当滚动超过一屏时显示按钮
        if (scrollY > windowHeight) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
});