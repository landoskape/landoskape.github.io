document.addEventListener("DOMContentLoaded", function() {
    const postBoxes = document.querySelectorAll('.post-box');
  
    postBoxes.forEach(box => {
        box.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-url');
        });
    });
});