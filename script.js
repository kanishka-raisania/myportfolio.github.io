function highlightLink(sectionId) {
    document.querySelectorAll('.nav__links a').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelector(`.nav__links a[href="#${sectionId}"]`).classList.add('active');

    // Prevent the default navigation behavior
    event.preventDefault();
    
    // You can add your own logic here, for example, scrolling to the clicked section using JavaScript
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}
