document.querySelectorAll('.post-caption').forEach(function(caption) {
    caption.addEventListener('mouseenter', function() {
        const captionRect = this.getBoundingClientRect();
        const imageRect = this.querySelector('.post-caption-image').getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const topOffset = captionRect.top - imageRect.height - 10; // Adjust the '10' value as needed
        const bottomOffset = windowHeight - (captionRect.bottom + imageRect.height + 10); // Adjust the '10' value as needed

        const spaceAbove = topOffset >= 0 ? topOffset : 0;
        const spaceBelow = bottomOffset >= 0 ? bottomOffset : 0;

        if (spaceAbove >= spaceBelow) {
            // If there is more space above, position the image above
            this.querySelector('.post-caption-image').style.top = `${topOffset}px`;
        } else {
            // If there is more space below, position the image below
            this.querySelector('.post-caption-image').style.top = `${captionRect.bottom + 10}px`;
        }
    });
});