document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var lastScrollY = window.scrollY;
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > lastScrollY) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});