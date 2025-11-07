document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    changeActiveLink();

    window.addEventListener('scroll', changeActiveLink);

    const fadeElements = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const fadeInObserver = new IntersectionObserver(observerCallback, observerOptions);

    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });

    var swiper = new Swiper(".mySwiper", {
        loop: true, 
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}); 