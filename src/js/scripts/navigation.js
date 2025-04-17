document.addEventListener('DOMContentLoaded', function () {

    // Sticky header
    const header = document.querySelector('.wp-site-blocks > header');

    if (!header) {
        return;
    }

    // Define a variable to store header height
    let headerHeight = '90px';

    // Function to calculate and update the header height
    const updateHeaderHeight = () => {
        headerHeight = header.querySelector('nav').offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };

    // Call the function initially to set the height
    updateHeaderHeight();

    // Optional: Recalculate height on window resize
    window.addEventListener('resize', updateHeaderHeight);

    // Scroll thresholds for showing/hiding header
    const scrollThresholdDown = 10;
    const scrollThresholdUp = 30;

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
