let scrollPosY = 0;
const titleShowPho = document.querySelector('.TitleShowPho');
const titleShow = document.querySelector('.titleShow');
const p3dContainer = document.querySelector('.p3d');
// 跟踪当前显示的图片状态
let currentImageState = 'show'; // 'show' 或 'readme'
let isTransitioning = false;
let transitionTimeout = null;

// 打字效果
const slogan = document.querySelector('.slogan');
const sloganText = '锤子，而不是玫瑰。';

function typeWriter() {
    // 预先创建所有字符
    const chars = sloganText.split('');
    chars.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        slogan.appendChild(span);
    });

    // 计算完整宽度
    const fullWidth = slogan.scrollWidth;

    // 强制重绘
    slogan.offsetHeight;

    // 触发CSS transition
    slogan.style.width = fullWidth + 'px';

    // 监听动画完成，移除光标
    slogan.addEventListener('transitionend', function() {
        slogan.classList.add('typing-done');
    }, { once: true });
}

function getScrollPosition() {
    return {
        x: window.scrollX || window.pageXOffset || document.documentElement.scrollLeft,
        y: window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    };
}

function changeP3dP(name){
    // 如果状态没有变化，直接返回
    if (currentImageState === name) {
        return;
    }

    // 取消之前的过渡操作
    if (transitionTimeout) {
        clearTimeout(transitionTimeout);
    }

    isTransitioning = true;

    // 淡出
    titleShowPho.style.opacity = '0';

    // 等待淡出完成后切换图片
    transitionTimeout = setTimeout(() => {
        titleShowPho.src = `./${name}.jpeg`;
        currentImageState = name;

        // 淡入
        titleShowPho.style.opacity = '1';

        // 允许下一次过渡
        transitionTimeout = setTimeout(() => {
            isTransitioning = false;
            transitionTimeout = null;
        }, 100);
    }, 100);
}

function changeP3d() {
    const shouldShowReadme = scrollPosY >= 600;

    // 如果状态没有变化，直接返回
    if ((shouldShowReadme && currentImageState === 'readme') ||
        (!shouldShowReadme && currentImageState === 'show')) {
        return;
    }

    // 取消之前的过渡操作
    if (transitionTimeout) {
        clearTimeout(transitionTimeout);
    }

    isTransitioning = true;

    // 淡出
    titleShowPho.style.opacity = '0';

    // 等待淡出完成后切换图片
    transitionTimeout = setTimeout(() => {
        if (shouldShowReadme) {
            p3dContainer.style['padding-top'] = '900px';
            titleShowPho.style.left = '-300px';
            titleShowPho.style.width = '80%';
            titleShowPho.src = './readme.jpeg';
            currentImageState = 'readme';
        } else {
            p3dContainer.style['padding-top'] = '0px';
            titleShowPho.style.left = '0';
            titleShowPho.style.width = '70%';
            titleShowPho.src = './show.jpeg';
            currentImageState = 'show';
        }

        titleShowPho.style.opacity = '1';
        isTransitioning = false;
        transitionTimeout = null;

    }, 50);
}

window.addEventListener('scroll', function () {
    scrollPosY = getScrollPosition().y;
    changeP3d()
});

document.addEventListener('DOMContentLoaded', function () {
    // 启动打字效果
    slogan.textContent = '';
    typeWriter();

    // 页面切换功能
    const tabButtons = document.querySelectorAll('.tabButton');
    const pages = document.querySelectorAll('.page');

    function switchPage(pageName) {
        // 更新按钮状态
        tabButtons.forEach(btn => {
            if (btn.dataset.page === pageName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 切换页面
        pages.forEach(page => {
            if (page.dataset.page === pageName) {
                page.style.display = 'block';
                // 重新触发动画
                page.style.animation = 'none';
                page.offsetHeight; // 强制重绘
                page.style.animation = 'fadeIn 0.4s ease-out';
            } else {
                page.style.display = 'none';
            }
        });

        // 滚动到顶部
        window.scrollTo(0, 0);
    }

    // 绑定点击事件
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const pageName = btn.dataset.page;
            if (pageName === 'repository') {
                window.location.href = 'https://github.com/AstraEditor';
            } else {
                switchPage(pageName);
            }
        });
    });

    // 默认激活首页
    switchPage('home');

    if (titleShowPho && p3dContainer) {
        // 设置transform-origin为中心
        titleShowPho.style.transformOrigin = 'center';

        // 用于平滑过渡的变量
        let currentRotateX = 10;
        let currentRotateY = 0;
        let targetRotateX = 10;
        let targetRotateY = 0;

        // 监听鼠标移动
        document.addEventListener('mousemove', (e) => {
            const rect = p3dContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 计算鼠标相对于容器中心的位置 (-1 到 1)
            const xAxis = (y - rect.height / 2) / rect.height;
            const yAxis = (rect.width / 2 - x) / rect.width;

            // 设置目标旋转角度 - 减小角度范围以减少畸变
            targetRotateX = 10 + xAxis * 15; // 基础10度，变化范围±15度
            targetRotateY = yAxis * 15; // 变化范围±15度
        });

        // 使用requestAnimationFrame实现平滑过渡
        function animate() {
            // 线性插值实现平滑过渡
            const lerpFactor = 0.1; // 插值因子，越小越平滑

            currentRotateX += (targetRotateX - currentRotateX) * lerpFactor;
            currentRotateY += (targetRotateY - currentRotateY) * lerpFactor;

            // 应用3D变换
            titleShowPho.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateZ(-20px)`;

            requestAnimationFrame(animate);
        }

        // 启动动画循环
        animate();
    }

    // 为每个特性卡片添加鼠标悬停事件
    const featureCards = document.querySelectorAll('.featureCard');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const cardId = this.id;
            if (cardId) {
                changeP3dP(cardId);
            }
        });
    });
});