document.addEventListener('DOMContentLoaded', () => {
    const paperDivs = document.querySelectorAll('.cv-element');

    paperDivs.forEach(paperDiv => {
        const image = paperDiv.querySelector('img');
        const originalSrc = image.src; // Capture the original src

        paperDiv.addEventListener('mouseover', () => {
            const hoverSrc = image.getAttribute('data-hover');
            if (hoverSrc) {
                image.src = hoverSrc;
            }
        });

        paperDiv.addEventListener('mouseout', () => {
            const hoverSrc = image.getAttribute('data-hover');
            if (hoverSrc) {
                image.src = originalSrc; // Revert to the original src
            }
        });
    });
});