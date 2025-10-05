// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
        
        // 暗色主题下的导航栏效果
        if (document.body.classList.contains('dark-theme')) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(45, 45, 45, 0.95)';
            } else {
                header.style.background = '#2d2d2d';
            }
        }
    });

    // 文章卡片点击效果
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('h2 a');
            if (link) {
                window.location.href = link.href;
            }
        });
    });

    // 完整的主题切换功能
    function initThemeToggle() {
        // 创建主题切换按钮
        const themeToggle = document.createElement('button');
        themeToggle.textContent = '切换到暗色主题';
        themeToggle.className = 'theme-toggle';
        themeToggle.id = 'themeToggle';
        
        document.body.appendChild(themeToggle);

        // 检查本地存储的主题偏好
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '切换到亮色主题';
        }

        // 主题切换事件
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // 更新按钮文本
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.textContent = '切换到亮色主题';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '切换到暗色主题';
                localStorage.setItem('theme', 'light');
            }
            
            // 更新导航栏背景（立即应用，不等待滚动）
            const header = document.querySelector('.header');
            if (document.body.classList.contains('dark-theme')) {
                header.style.background = '#2d2d2d';
            } else {
                header.style.background = '#fff';
            }
        });
    }

    // 初始化主题切换功能
    initThemeToggle();
});