// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化多语言功能
    initMultiLanguage();
    
    const currentLang = getCurrentLanguage();
    console.log(translations[currentLang].loadingMessage);
    
    // 添加加载完成标记
    document.body.classList.add('loaded');
    
    // 5秒后自动跳转到内容区域
    setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }, 5000);
    
    // 滚动时的黑色覆盖效果
    const blackOverlay = document.querySelector('.black-overlay');
    const blueprintBackground = document.getElementById('blueprint-background');
    const contentContainer = document.querySelector('.content-container');
    
    if (blackOverlay && blueprintBackground && contentContainer) {
        window.addEventListener('scroll', function() {
            const scrollY = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            // 当滚动超过第一屏的一半时，开始显示黑色覆盖
            if (scrollY > windowHeight * 0.3) {
                const progress = Math.min((scrollY - windowHeight * 0.3) / (windowHeight * 0.7), 1);
                blackOverlay.style.opacity = progress;
                contentContainer.style.opacity = progress;
                
                // 同时减弱蓝图背景的可见度
                blueprintBackground.style.opacity = 1 - (progress * 0.8);
            } else {
                blackOverlay.style.opacity = 0;
                contentContainer.style.opacity = 0;
                blueprintBackground.style.opacity = 1;
            }
        });
    }
    
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
});