document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, i) => {
        if (i % 2 === 0) {
            section.classList.add('light-theme');
        } else {
            section.classList.add('dark-theme');
        }
    });
});
