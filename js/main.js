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

    // 主题切换功能
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '切换主题';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '80px';
    themeToggle.style.right = '20px';
    themeToggle.style.padding = '10px';
    themeToggle.style.background = '#3498db';
    themeToggle.style.color = 'white';
    themeToggle.style.border = 'none';
    themeToggle.style.borderRadius = '5px';
    themeToggle.style.cursor = 'pointer';
    
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});