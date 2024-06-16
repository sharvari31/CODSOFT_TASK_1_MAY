document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOptions = document.querySelector('.menu-options');

    menuToggle.addEventListener('click', function() {
        menuOptions.classList.toggle('active');
    });

    const slides = document.querySelectorAll('.video-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the first slide
    showSlide(currentSlide);

    // Automatically switch to the next slide every few seconds
    setInterval(nextSlide, 5000); // Adjust the interval as needed
});
