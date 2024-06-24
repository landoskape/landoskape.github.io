document.addEventListener('DOMContentLoaded', function() {
    // Get the tag from the URL hash
    const tagFromURL = window.location.hash.slice(1);
    
    if (tagFromURL) {
        // Find the element with the matching id
        const tagElement = document.getElementById(tagFromURL);
        
        if (tagElement) {
            // Scroll to the element
            setTimeout(() => {
                tagElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
            
            // Optionally, add a highlight effect
            tagElement.classList.add('highlight');
            setTimeout(() => {
                tagElement.classList.remove('highlight');
            }, 2000);
        }
    }
});