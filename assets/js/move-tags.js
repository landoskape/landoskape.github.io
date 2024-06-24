document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.querySelectorAll('.tag-posts-list a').forEach(post => {
        post.addEventListener('mouseenter', function (e) {
            const description = this.getAttribute('data-description');
            tooltip.innerText = description;
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;  // Position tooltip slightly to the right
            tooltip.style.top = `${e.pageY + 10}px`;   // Position tooltip slightly below the mouse pointer
        });

        post.addEventListener('mousemove', function (e) {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        post.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });
    });
});