document.querySelectorAll('.post-caption').forEach(function(caption) {
    caption.addEventListener('mouseenter', function() {
        const captionRect = this.getBoundingClientRect();
        const imageRect = this.querySelector('.post-caption-image').getBoundingClientRect();
        const topOffset = captionRect.top + captionRect.height + 10; // Adjust the '10' value as needed

        this.querySelector('.post-caption-image').style.top = `${topOffset}px`;
    });
});