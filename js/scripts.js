document.addEventListener('DOMContentLoaded', () => {
    // --- theme toggle (dark <-> light) ---
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    const applyLogos = (theme) => {
        document.querySelectorAll('img[data-light]').forEach((img) => {
            if (!img.dataset.dark) img.dataset.dark = img.getAttribute('src'); // remember the dark-theme (white) logo
            img.src = theme === 'light' ? img.dataset.light : img.dataset.dark;
        });
    };

    const applyTheme = (theme, persist) => {
        if (theme === 'light') root.setAttribute('data-theme', 'light');
        else root.removeAttribute('data-theme');
        applyLogos(theme);
        if (toggle) toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
        if (themeColorMeta) themeColorMeta.setAttribute('content', theme === 'light' ? '#f7f7f8' : '#0a0a0a');
        if (persist) { try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ } }
    };

    // the inline <head> script may have pre-set the attribute to avoid a flash
    let currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(currentTheme, false);

    if (toggle) {
        toggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme, true);
        });
    }

    const newsScroll = document.querySelector('.news-scroll');
    const newsWrapper = document.querySelector('.news-scroll-wrapper');
    if (newsScroll && newsWrapper) {
        const checkBottom = () => {
            const atBottom = newsScroll.scrollHeight - newsScroll.scrollTop <= newsScroll.clientHeight + 2;
            newsWrapper.classList.toggle('at-bottom', atBottom);
        };
        newsScroll.addEventListener('scroll', checkBottom);
        checkBottom();
    }

    const container = document.querySelector('.grid-2');

    if (!container) return;

    container.addEventListener('mouseover', (event) => {
        const paperDiv = event.target.closest('.cv-element, .paper-container');
        if (paperDiv) {
            const image = paperDiv.querySelector('img');
            if (image) {
                const hoverSrc = image.getAttribute('data-hover');
                if (hoverSrc) {
                    image.dataset.originalSrc = image.src; // Store the original src in a dataset
                    image.src = hoverSrc;
                }
            }
        }
    });

    container.addEventListener('mouseout', (event) => {
        const paperDiv = event.target.closest('.cv-element, .paper-container');
        if (paperDiv) {
            const image = paperDiv.querySelector('img');
            if (image && image.dataset.originalSrc) {
                image.src = image.dataset.originalSrc; // Restore the original src
            }
        }
    });
});
