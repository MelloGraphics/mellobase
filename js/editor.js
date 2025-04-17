/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/editor/block-styles.js":
/*!***************************************!*\
  !*** ./src/js/editor/block-styles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
console.log('this is file src/editor/block-styles.js');



/**
 * Register block styles
 *
 * @type {Object} Add the names of blocks and styles to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const registerBlockStyles = {
  'core/button': [{
    name: 'primary',
    label: 'Primary'
  }, {
    name: 'secondary',
    label: 'Secondary'
  }, {
    name: 'tertiary',
    label: 'Tertiary'
  }],
  'core/image': [{
    name: 'rounded-medium',
    label: 'Rounded Medium'
  }],
  'core/details': [{
    name: 'tabbed',
    label: 'Tabbed'
  }, {
    name: 'icon-check',
    label: 'Check'
  }, {
    name: 'icon-star',
    label: 'Star'
  }],
  'core/cover': [{
    name: 'rounded-medium',
    label: 'Rounded Medium'
  }],
  'core/columns': [{
    name: 'offset',
    label: 'OffSet'
  }],
  'core/column': [{
    name: 'mobile-row',
    label: 'Mobile Row'
  }],
  'core/paragraph': [{
    name: 'after-line',
    label: 'After line'
  }, {
    name: 'tag',
    label: 'Tag'
  }],
  'core/list': [{
    name: 'tags',
    label: 'Tags'
  }, {
    name: 'checks',
    label: 'Checks'
  }],
  'core/heading': [{
    name: 'after-line',
    label: 'After line'
  }],
  'core/navigation': [{
    name: 'mega-menu',
    label: 'Mega Menu'
  }],
  'core/navigation-link': [{
    name: 'link-chevron',
    label: 'Chevron'
  }, {
    name: 'link-box',
    label: 'Box'
  }, {
    name: 'link-button',
    label: 'Button'
  }, {
    name: 'link-tag',
    label: 'Tag'
  }],
  'core/navigation-submenu': [{
    name: 'link-icon',
    label: 'Icon only'
  }],
  'core/post-terms': [{
    name: 'tags',
    label: 'Tags'
  }, {
    name: 'after-line',
    label: 'After-line'
  }],
  'core/post-title': [{
    name: 'arrow-after',
    label: 'Arrow after'
  }],
  'core/site-logo': [{
    name: 'reversed',
    label: 'Reversed'
  }],
  'core/read-more': [{
    name: 'secondary',
    label: 'Secondary'
  }, {
    name: 'tertiary',
    label: 'Tertiary'
  }],
  'mellobase/post-type': [{
    name: 'after-line',
    label: 'After line'
  }]
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  Object.entries(registerBlockStyles).forEach(([block, styles]) => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockStyle)(block, styles);
  });
});

/***/ }),

/***/ "./src/js/editor/index.js":
/*!********************************!*\
  !*** ./src/js/editor/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-styles */ "./src/js/editor/block-styles.js");
/* harmony import */ var _remove_editor_panels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-editor-panels */ "./src/js/editor/remove-editor-panels.js");
/* harmony import */ var _unregister_block_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unregister-block-styles */ "./src/js/editor/unregister-block-styles.js");
/* harmony import */ var _unregister_block_variations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unregister-block-variations */ "./src/js/editor/unregister-block-variations.js");
/* harmony import */ var _unregister_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unregister-blocks */ "./src/js/editor/unregister-blocks.js");

// import './block-variations';





/***/ }),

/***/ "./src/js/editor/remove-editor-panels.js":
/*!***********************************************!*\
  !*** ./src/js/editor/remove-editor-panels.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Remove editor panels
 *
 * @type {Array} Add the names of panels to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-post/#removeeditorpanel
 */
const removeEditorPanels = [
  //"discussion-panel"
];
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  if ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post') !== null) {
    const {
      removeEditorPanel
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post');
    removeEditorPanels.forEach(panel => {
      removeEditorPanel(panel);
    });
  }
});

/***/ }),

/***/ "./src/js/editor/unregister-block-styles.js":
/*!**************************************************!*\
  !*** ./src/js/editor/unregister-block-styles.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Remove block styles
 *
 * @type {Object} Add the names of blocks and styles to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const unregisterBlockStyles = {
  "core/button": ["fill", "outline"],
  "core/image": "rounded",
  "core/site-logo": "rounded",
  "core/separator": ["dots", "wide"]
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  Object.entries(unregisterBlockStyles).forEach(([block, style]) => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockStyle)(block, style);
  });
});

/***/ }),

/***/ "./src/js/editor/unregister-block-variations.js":
/*!******************************************************!*\
  !*** ./src/js/editor/unregister-block-variations.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Remove block variations
 *
 * @type {Object} Add the names of blocks and variations to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const unregisterBlockVariations = {
  // "core/columns": "two-columns-two-thirds-one-third",
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  Object.entries(unregisterBlockVariations).forEach(([block, variation]) => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockVariation)(block, variation);
  });
});

/***/ }),

/***/ "./src/js/editor/unregister-blocks.js":
/*!********************************************!*\
  !*** ./src/js/editor/unregister-blocks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Unregister blocks
 *
 * @type {Array} Add the names of blocks to unregister here
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-a-deny-list
 */
const unregisterBlocks = [
  // "core/verse"
];
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  unregisterBlocks.forEach(block => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockType)(block);
  });
});

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/index */ "./src/js/editor/index.js");
// Import editor folder


})();

/******/ })()
;
//# sourceMappingURL=editor.js.map