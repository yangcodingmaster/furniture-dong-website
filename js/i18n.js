// Simple bilingual switcher for Furniture Dong website
// Usage: add data-en="..." data-zh="..." attributes to any element with translatable text.
// HTML inside attributes is supported (e.g. <br>).
// For input/textarea placeholders use data-en-placeholder / data-zh-placeholder.
// For attributes like alt: data-en-alt / data-zh-alt.
// For document title: data-en-title / data-zh-title on <html>.

(function () {
    const STORAGE_KEY = 'fd_lang';
    const DEFAULT_LANG = 'en';

    function getLang() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }

    function applyLang(lang) {
        // Text content
        document.querySelectorAll('[data-en], [data-zh]').forEach(el => {
            const val = el.getAttribute('data-' + lang);
            if (val !== null) el.innerHTML = val;
        });
        // Placeholders
        document.querySelectorAll('[data-en-placeholder], [data-zh-placeholder]').forEach(el => {
            const val = el.getAttribute('data-' + lang + '-placeholder');
            if (val !== null) el.setAttribute('placeholder', val);
        });
        // Alt attributes
        document.querySelectorAll('[data-en-alt], [data-zh-alt]').forEach(el => {
            const val = el.getAttribute('data-' + lang + '-alt');
            if (val !== null) el.setAttribute('alt', val);
        });
        // Document title
        const html = document.documentElement;
        const titleAttr = html.getAttribute('data-' + lang + '-title');
        if (titleAttr) document.title = titleAttr;

        html.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

        // Toggle button visual state
        document.querySelectorAll('[data-lang-btn]').forEach(btn => {
            const target = btn.getAttribute('data-lang-btn');
            if (target === lang) {
                btn.classList.add('bg-gold', 'text-white');
                btn.classList.remove('text-brown-dark');
            } else {
                btn.classList.remove('bg-gold', 'text-white');
                btn.classList.add('text-brown-dark');
            }
        });
    }

    window.setLang = function (lang) {
        if (lang !== 'en' && lang !== 'zh') return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
    };

    // Apply on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => applyLang(getLang()));
    } else {
        applyLang(getLang());
    }
})();
