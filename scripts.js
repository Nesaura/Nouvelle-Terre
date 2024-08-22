document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".content-section");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            const sectionPosition = section.offsetTop + section.clientHeight / 2;

            if (scrollPosition >= sectionPosition) {
                section.classList.add("active");
            }
        });
    });

    const scrollDown = document.querySelector(".scroll-down");
    scrollDown.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(scrollDown.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});
