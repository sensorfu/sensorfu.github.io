(function () {
    new Splide(".splide", {
        breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
        },
        gap: "2rem",
        pagination: false,
        perPage: 3,
    }).mount();

    var navToggle = document.querySelector(".nav__toggle");
    navToggle.addEventListener("click", function (event) {
        event.preventDefault();
        document.body.classList.toggle("nav-open");
    });

    var refScroller = document.querySelector(".refs__scroller");
    refScroller.appendChild(refScroller.firstElementChild.cloneNode(true));

    var lastScroll = 0;
    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset;
        document.body.classList.toggle("scrolled", currentScroll);
        document.body.classList.toggle("scroll-up", currentScroll < lastScroll);
        document.body.classList.toggle(
            "scroll-down",
            currentScroll > lastScroll
        );
        lastScroll = currentScroll;
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            var headerOffset = 90;
            var element = document.querySelector(anchor.hash || 'body');
            var offsetPosition = element.offsetTop - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        });
    });
})();
