document.addEventListener('DOMContentLoaded', function () {
    // Select the toggle button
    const toggleButton = document.querySelector('.quick-actions_close');

    if (toggleButton) {
        // Add initial ARIA attributes
        toggleButton.setAttribute('aria-label', 'Close quick actions');
        toggleButton.setAttribute('aria-expanded', 'true');

        toggleButton.addEventListener('click', function () {
            // Find the parent with the specified classes
            const templatePart = toggleButton.closest('.wp-block-template-part');

            if (templatePart && templatePart.querySelector('.is-template-quick-actions')) {
                // Toggle the 'hidden' class
                const isHidden = templatePart.classList.toggle('hidden');

                // Update the ARIA attributes for accessibility
                if (isHidden) {
                    toggleButton.setAttribute('aria-label', 'Open quick actions');
                    toggleButton.setAttribute('aria-expanded', 'false');
                } else {
                    toggleButton.setAttribute('aria-label', 'Close quick actions');
                    toggleButton.setAttribute('aria-expanded', 'true');
                }
            }
        });
    }
});
