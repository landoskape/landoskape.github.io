document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var lastScrollY = window.scrollY;
    var scrollThresholdHide = 7; 
    var scrollThresholdShow = 0; 

    window.addEventListener("scroll", function() {
        if (window.scrollY > lastScrollY + scrollThresholdHide) {
            // Scrolled down decisively
            header.classList.add("hidden");
        } else if (window.scrollY < lastScrollY - scrollThresholdShow) {
            // Scrolled up decisively
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});