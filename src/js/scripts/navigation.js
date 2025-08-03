document.addEventListener('DOMContentLoaded', function () {

    // Sticky header
    const header = document.querySelector('.wp-site-blocks > header');

    if (!header) {
        return;
    }

    // Scroll thresholds for showing/hiding header
    const scrollThresholdDown = 30;
    const scrollThresholdUp = 40;

    // Initial scroll position
    let lastScrollTop = 0;

    // Function to hide/show header on scroll
    const headerScroll = () => {
        // Current scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // If scrolled down by threshold, hide header
        if (scrollTop > lastScrollTop + scrollThresholdDown) {
            header.classList.add('hidden');
        }
        // If scrolled up by threshold, show header
        else if (lastScrollTop - scrollTop > scrollThresholdUp || scrollTop === 0) {
            header.classList.remove('hidden');
        }

        // Update last scroll position
        lastScrollTop = scrollTop;

        // Check if the scroll position is past 5% of the viewport height
        const scrolled = scrollTop > 0.05 * window.innerHeight;

        // Add or remove the 'scrolled' class based on the scroll position
        header.classList.toggle("scrolled", scrolled);
    };

    // Listen for scroll events
    window.addEventListener('scroll', headerScroll);

});