document.addEventListener('DOMContentLoaded', () => {
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
