// Cookie consent banner — GDPR compliance for international visitors
(function () {
    const KEY = 'fd_cookie_consent';
    if (localStorage.getItem(KEY) === 'accepted') return;

    document.addEventListener('DOMContentLoaded', function () {
        const lang = localStorage.getItem('fd_lang') || 'en';
        const text = {
            en: {
                msg: 'We use cookies to enhance your browsing experience and analyze site traffic. By continuing to visit, you agree to our use of cookies.',
                accept: 'Accept',
                policy: 'Privacy Policy',
            },
            zh: {
                msg: '我们使用 Cookie 以提升您的浏览体验并分析网站访问。继续浏览即表示您同意我们使用 Cookie。',
                accept: '同意',
                policy: '隐私政策',
            }
        }[lang];

        const banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#3B2314;color:#F5F0EB;padding:16px 24px;z-index:200;box-shadow:0 -4px 20px rgba(0,0,0,0.2);font-size:14px;line-height:1.5;';
        banner.innerHTML = `
            <div style="max-width:1152px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:16px;justify-content:space-between;">
                <p style="margin:0;flex:1;min-width:280px;">${text.msg} <a href="privacy.html" style="color:#D4A853;text-decoration:underline;">${text.policy}</a></p>
                <button id="cookieAccept" style="background:#D4A853;color:white;border:none;padding:10px 28px;border-radius:4px;font-weight:600;cursor:pointer;font-size:14px;">${text.accept}</button>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('cookieAccept').onclick = function () {
            localStorage.setItem(KEY, 'accepted');
            banner.remove();
        };
    });
})();
