/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./src/blocks/quick-actions/view.js ***!
  \******************************************/
document.addEventListener('DOMContentLoaded', function () {
  // Select the toggle button
  const toggleButton = document.querySelector('.wp-block-mellobase-quick-actions__close');
  if (!toggleButton) {
    console.warn('Quick Actions toggle button not found. Check the selector.');
    return;
  }

  // Add initial ARIA attributes
  toggleButton.setAttribute('aria-label', 'Close quick actions');
  toggleButton.setAttribute('aria-expanded', 'true');
  toggleButton.addEventListener('click', function () {
    // Find the parent block
    const actionsBlock = document.querySelector('.wp-block-mellobase-quick-actions');
    if (!actionsBlock) {
      console.warn('Quick Actions block not found.');
      return;
    }

    // Toggle the 'hidden' class
    const isHidden = actionsBlock.classList.toggle('hidden');

    // Update the ARIA attributes for accessibility
    toggleButton.setAttribute('aria-label', isHidden ? 'Open quick actions' : 'Close quick actions');
    toggleButton.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
    console.log('Quick Actions visibility toggled:', isHidden);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map