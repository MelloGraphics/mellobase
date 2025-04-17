import Splitting from "splitting";
import "splitting/dist/splitting-cells.css";
import "splitting/dist/splitting.css";

document.addEventListener('DOMContentLoaded', () => {
    const cursorBlock = document.querySelectorAll('.wp-block-block-theme-cursor'); // Updated selector

    // Check if cursorBlock exists
    if (cursorBlock.length > 0) {
        const splitCursor = Splitting({ target: cursorBlock, by: 'chars', whitespace: true });

        const updateCursorPosition = (e) => {
            cursorBlock.forEach(cursor => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            });
        };

        // Initialize cursor position at the center
        updateCursorPosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

        document.addEventListener('mousemove', updateCursorPosition);

        // Function to add the click class when clicking
        document.addEventListener('mousedown', () => {
            cursorBlock.forEach(cursor => cursor.classList.add('cursor__click'));
        });

        document.addEventListener('mouseup', () => {
            cursorBlock.forEach(cursor => cursor.classList.remove('cursor__click'));
        });

        // Function to add the active class when hovering
        const activeStyle = (element) => {
            element.addEventListener('mouseover', () => {
                cursorBlock.forEach(cursor => cursor.classList.add('cursor__active'));
            });
            element.addEventListener('mouseleave', () => {
                cursorBlock.forEach(cursor => cursor.classList.remove('cursor__active'));
            });
        };

        // Function to add the hover class when hovering
        const hoverStyle = (element) => {
            element.addEventListener('mouseover', () => {
                cursorBlock.forEach(cursor => cursor.classList.add('cursor__hover'));
            });
            element.addEventListener('mouseleave', () => {
                cursorBlock.forEach(cursor => cursor.classList.remove('cursor__hover'));
            });
        };

        // Apply active style to targeted elements
        const activeTargets = [
            'is-pattern-clients .wp-block-cover'
        ];

        activeTargets.forEach(selector => {
            const elements = document.querySelectorAll(`.${selector}`);
            if (elements.length > 0) {
                elements.forEach(element => activeStyle(element));
            } else {
                console.warn(`No elements found for selector: .${selector}`);
            }
        });

        // Apply hover style to links
        const links = document.querySelectorAll('a');
        if (links.length > 0) {
            links.forEach(link => hoverStyle(link));
        } else {
            console.warn('No links found to apply hover style.');
        }

        // Apply hover style to additional targets
        const hoverTargets = [
            'wp-block-navigation__responsive-container-close',
            'wp-block-navigation__responsive-container-open',
            'wp-block-details summary',
            'button'
        ];

        hoverTargets.forEach(selector => {
            const elements = document.querySelectorAll(`.${selector}`);
            if (elements.length > 0) {
                elements.forEach(element => hoverStyle(element));
            } else {
                console.warn(`No elements found for selector: .${selector}`);
            }
        });

    } else {
        console.warn('No cursorBlock elements found.');
    }
});
