var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});










// modal.js
