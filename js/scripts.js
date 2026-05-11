document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-2'); // Assuming .cv-element elements are inside .grid-2

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
