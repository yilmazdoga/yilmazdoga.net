document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-2'); // Assuming .cv-element elements are inside .grid-2

    if (!container) return;

    container.addEventListener('mouseover', (event) => {
        const paperDiv = event.target.closest('.cv-element');
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
        const paperDiv = event.target.closest('.cv-element');
        if (paperDiv) {
            const image = paperDiv.querySelector('img');
            if (image && image.dataset.originalSrc) {
                image.src = image.dataset.originalSrc; // Restore the original src
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const root = document.documentElement;
  const images = document.querySelectorAll('img[data-dark][data-light]'); // Select images with data attributes

  // Function to update image sources based on the theme
  const updateImages = (isLightTheme) => {
    images.forEach((img) => {
      img.src = isLightTheme ? img.dataset.light : img.dataset.dark;
    });
  };

  // Check for saved theme in localStorage
  const isLightTheme = localStorage.getItem('theme') === 'light';
  if (isLightTheme) {
    root.classList.add('light-theme');
    themeSwitch.checked = true;
  }
  updateImages(isLightTheme);

  // Add event listener for theme switch
  themeSwitch.addEventListener('change', () => {
    const isLightTheme = themeSwitch.checked;
    root.classList.toggle('light-theme', isLightTheme);
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    updateImages(isLightTheme);
  });
});