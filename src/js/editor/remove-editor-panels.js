import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';

/**
 * Remove editor panels
 *
 * @type {Array} Add the names of panels to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-post/#removeeditorpanel
 */
const removeEditorPanels = [
	//"discussion-panel"
];

domReady(() => {
    if (dispatch('core/edit-post') !== null) {
        const { removeEditorPanel } = dispatch('core/edit-post');
        removeEditorPanels.forEach((panel) => {
            removeEditorPanel(panel);
        });
    }
});