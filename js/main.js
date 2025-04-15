document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Video modal functionality
    const videoLinks = document.querySelectorAll('.video-link');
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    videoLinks.forEach(link => {
        link.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video-src');
            modalVideo.src = videoSrc;
            modal.style.display = 'block';
        });
    });

    // Close modal when clicking outside of the video
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.src = ''; // Stop the video when closing
        }
    });
});