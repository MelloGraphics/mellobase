import Splitting from "splitting";

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const splitCursor = Splitting({ target: cursor, by: 'chars', whitespace: true });

    if (cursor) {
        const updateCursorPosition = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        // Initialize cursor position at the center
        updateCursorPosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

        document.addEventListener('mousemove', updateCursorPosition);

        // Function to add the click class when clicking
        document.addEventListener('mousedown', () => {
            cursor.classList.add('cursor__click');
        });
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor__click');
        });

        // Function to add the active class when hovering
        const activeStyle = (element) => {
            element.addEventListener('mouseover', () => {
                cursor.classList.add('cursor__active');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor__active');
            });
        };

        // Target elements to apply cursor__active to
        const activeTargets = [
            'is-pattern-clients .wp-block-cover'
        ];

        activeTargets.forEach(selector => {
            document.querySelectorAll(`.${selector}`).forEach(element => {
                activeStyle(element);
            });
        });

        // Function to add the hover class when hovering
        const hoverStyle = (element) => {
            element.addEventListener('mouseover', () => {
                cursor.classList.add('cursor__hover');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor__hover');
            });
        };

        // Apply hover style to links
        document.querySelectorAll('a').forEach(link => hoverStyle(link));

        // Target elements to apply cursor__hover to
        const hoverTargets = [
            'wp-block-navigation__responsive-container-close',
            'wp-block-navigation__responsive-container-open',
            'wp-block-details summary',
            'button'
        ];

        hoverTargets.forEach(selector => {
            document.querySelectorAll(`.${selector}`).forEach(element => {
                hoverStyle(element);
            });
        });
    }
});
