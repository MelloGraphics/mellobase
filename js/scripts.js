/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/scripts/index.js":
/*!*********************************!*\
  !*** ./src/js/scripts/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _motion_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./motion/index */ "./src/js/scripts/motion/index.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/js/scripts/navigation.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _testi_load_more_wording__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testi-load-more-wording */ "./src/js/scripts/testi-load-more-wording.js");
/* harmony import */ var _testi_load_more_wording__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testi_load_more_wording__WEBPACK_IMPORTED_MODULE_2__);
// import individual script files





/***/ }),

/***/ "./src/js/scripts/motion/index.js":
/*!****************************************!*\
  !*** ./src/js/scripts/motion/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easeBounce: () => (/* binding */ easeBounce),
/* harmony export */   easeCirc: () => (/* binding */ easeCirc),
/* harmony export */   resetTimeline: () => (/* binding */ resetTimeline),
/* harmony export */   revertSplitting: () => (/* binding */ revertSplitting)
/* harmony export */ });
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! splitting */ "./node_modules/splitting/dist/splitting.js");
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lenis_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lenis-smooth-scroll */ "./src/js/scripts/motion/lenis-smooth-scroll.js");
/* harmony import */ var _motion_approach_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motion-approach-scroll */ "./src/js/scripts/motion/motion-approach-scroll.js");
/* harmony import */ var _motion_heros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./motion-heros */ "./src/js/scripts/motion/motion-heros.js");
/* harmony import */ var _motion_horizontal_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./motion-horizontal-scroll */ "./src/js/scripts/motion/motion-horizontal-scroll.js");
/* harmony import */ var _motion_pattern_offset_columns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motion-pattern-offset-columns */ "./src/js/scripts/motion/motion-pattern-offset-columns.js");
/* harmony import */ var _motion_section_approach_intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./motion-section-approach-intro */ "./src/js/scripts/motion/motion-section-approach-intro.js");
/* harmony import */ var _motion_section_approach_phase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./motion-section-approach-phase */ "./src/js/scripts/motion/motion-section-approach-phase.js");
/* harmony import */ var _motion_section_hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./motion-section-hero */ "./src/js/scripts/motion/motion-section-hero.js");
/* harmony import */ var _motion_section_outcomes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./motion-section-outcomes */ "./src/js/scripts/motion/motion-section-outcomes.js");
/* harmony import */ var _motion_section_resources_intro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./motion-section-resources-intro */ "./src/js/scripts/motion/motion-section-resources-intro.js");
/* harmony import */ var _motion_section_services_intro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./motion-section-services-intro */ "./src/js/scripts/motion/motion-section-services-intro.js");
/* harmony import */ var _motion_section_solutions_intro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./motion-section-solutions-intro */ "./src/js/scripts/motion/motion-section-solutions-intro.js");
/* harmony import */ var _motion_section_testimonial_ticker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./motion-section-testimonial-ticker */ "./src/js/scripts/motion/motion-section-testimonial-ticker.js");
/* harmony import */ var _motion_section_work_archive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./motion-section-work-archive */ "./src/js/scripts/motion/motion-section-work-archive.js");
/* harmony import */ var _motion_single_work__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./motion-single-work */ "./src/js/scripts/motion/motion-single-work.js");
// // Split headings text into characters
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";

// const splittingTarget = document.querySelectorAll('.has-xx-large-font-size, .wp-block-heading.has-x-large-font-size, .is-section-hero__display-heading');
// Splitting({ target: splittingTarget, by: 'chars'});



// Store original text before splitting
document.querySelectorAll('[data-splitting]').forEach(el => {
  el.dataset.originalText = el.innerHTML.trim();
});
splitting__WEBPACK_IMPORTED_MODULE_0___default()();

// Function to revert splitting
function revertSplitting(animatedElement) {
  if (!animatedElement) return; // Exit early if no element is provided

  // Find the nearest element with `data-splitting`, defaulting to the provided element
  const scope = animatedElement.closest('[data-splitting]') || animatedElement;

  // Restore the original text for each split element within the scope
  scope.querySelectorAll('[data-splitting]').forEach(target => {
    if (target.dataset.originalText) {
      target.innerHTML = target.dataset.originalText;
    }
  });
}

// Motion utilities
function resetTimeline(animate) {
  animate.pause();
  animate.currentTime = 0; // Reset to the start
}
const easeBounce = [0.18, 0.89, 0.32, 1.28];
const easeCirc = [0.075, 0.82, 0.165, 1.0];

// import and collate individual script files
















/***/ }),

/***/ "./src/js/scripts/motion/lenis-smooth-scroll.js":
/*!******************************************************!*\
  !*** ./src/js/scripts/motion/lenis-smooth-scroll.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lenis */ "./node_modules/lenis/dist/lenis.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/index.mjs");


document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lenis for smooth scrolling
  const lenis = new lenis__WEBPACK_IMPORTED_MODULE_0__["default"]({
    duration: 0.75,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
    autoResize: true,
    prevent: node => node.closest('.mello-modal') !== null
  });
  window.lenis = lenis;

  // Recalculate Lenis scroll bounds when any <details> element toggles
  document.querySelectorAll('details').forEach(el => {
    el.addEventListener('toggle', () => {
      // Wait for animation (if any), then resize
      setTimeout(() => {
        lenis.resize();
      }, 300); // adjust if your open/close duration is different
    });
  });

  // Function to handle the animation frame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  function initScrollSpeedElements() {
    document.querySelectorAll('[data-scroll-speed]').forEach(el => {
      const speed = parseFloat(el.dataset.scrollSpeed) || 0;
      (0,motion__WEBPACK_IMPORTED_MODULE_1__.scroll)(progress => {
        const offset = speed * 4;
        const translateY = offset * (1 - 2 * progress);
        el.style.transform = `translateY(${translateY}vmin)`;
      }, {
        target: el,
        offset: ['start end', 'end start']
      });
    });
  }
  initScrollSpeedElements();

  // Hook into native fetch to catch AJAX content loading
  const origFetch = window.fetch;
  window.fetch = function (...args) {
    return origFetch.apply(this, args).then(res => {
      res.clone().text().then(() => {
        window.lenis?.resize();
        initScrollSpeedElements();
      });
      return res;
    });
  };

  // Observe DOM changes to catch any content inserted by plugins
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        window.lenis?.resize();
        initScrollSpeedElements();
      }
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Update Lenis on window resize
  window.addEventListener('resize', () => {
    lenis.resize();
  });
  if (window.jQuery) {
    jQuery(document).ajaxComplete(function () {
      window.lenis?.resize();
      initScrollSpeedElements();
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-approach-scroll.js":
/*!*********************************************************!*\
  !*** ./src/js/scripts/motion/motion-approach-scroll.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const approachWrapper = document.querySelector('.is-section-approach-scroll__right-column');
  const approachCards = document.querySelectorAll('.is-section-approach-scroll__phase-card');
  approachCards.forEach(approachCard => {
    const startRotation = (Math.random() * 10 - 5).toFixed(2) + "deg"; // Random -5deg to 5deg
    const endRotation = (Math.random() * 10 - 5).toFixed(2) + "deg"; // Another random -5deg to 5deg

    (0,motion__WEBPACK_IMPORTED_MODULE_1__.scroll)((0,motion__WEBPACK_IMPORTED_MODULE_2__.animate)(approachCard, {
      rotate: [startRotation, startRotation, endRotation],
      scale: [1, 1.1, 1],
      y: ["-50%", "-70%", '-50%']
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__["default"]
    }), {
      target: approachCard,
      offset: ["start 1.5", "start .8", "start .5"] // Triggers animation as it enters and leaves
    });
  });
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-heros.js":
/*!***********************************************!*\
  !*** ./src/js/scripts/motion/motion-heros.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const heroHome = document.querySelector('.is-section-hero__large-centered');
  const heroLrg = document.querySelector('.is-section-hero__large');
  const heroLrgCentered = document.querySelector('.is-section-hero__large-centered');
  const heroContentWrapper = document.querySelector('.is-section-hero__content-wrapper');
  const googleRating = heroContentWrapper.querySelector(':has(> .is-pattern-google-reviews)');
  const intoPara = heroContentWrapper.querySelector('.is-section-hero__intro-para');
  const ctaButton = heroContentWrapper.querySelectorAll('.wp-block-button');
  const imgLeft = heroContentWrapper.querySelector('.wp-block-image.lightening-left');
  const imgRight = heroContentWrapper.querySelector('.wp-block-image.lightening-right');

  // Hero Home
  if (heroHome) {
    const heroContentWrapper = heroHome.querySelector('.is-section-hero__content-wrapper');
    const googleRating = heroContentWrapper?.querySelector('.is-pattern-google-reviews');
    const intoPara = heroContentWrapper?.querySelector('.is-section-hero__intro-para');
    const ctaButton = heroContentWrapper?.querySelector('.wp-block-buttons');
    const imgLeft = heroContentWrapper?.querySelector('.wp-block-image.lightening-left');
    const imgRight = heroContentWrapper?.querySelector('.wp-block-image.lightening-right');
    const heroHomeTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([googleRating ? [googleRating, {
      y: ['1em', '0'],
      opacity: [0, 1]
    }, {
      at: '<',
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }] : null, imgLeft ? [imgLeft, {
      x: ['3em', '0'],
      scale: [0.7, 2.3, 1.7]
    }, {
      at: '<',
      duration: 1.5,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeCirc
    }] : null, imgRight ? [imgRight, {
      x: ['-3em', '0'],
      scale: [0.7, 2.3, 1.7]
    }, {
      at: '<',
      duration: 1.5,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeCirc
    }] : null, intoPara ? [intoPara, {
      y: ['-1em', '0'],
      opacity: [0, 1]
    }, {
      at: '<',
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }] : null, heroHome.querySelector('[data-word="Masters"] .char') ? [heroHome.querySelectorAll('[data-word="Masters"] .char'), {
      scale: [1.5, 1],
      rotate: ['-45deg', '0deg'],
      x: ['.5em', '0'],
      opacity: [0, 1]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      at: '<',
      duration: 0.7,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.05)
    }] : null, heroHome.querySelector('[data-word="of"]') ? [heroHome.querySelectorAll('[data-word="of"]'), {
      opacity: [0, 1]
    }, {
      ease: motion__WEBPACK_IMPORTED_MODULE_3__.easeIn,
      at: '-.6',
      duration: 0.25
    }] : null, heroHome.querySelector('[data-word="creating"]') ? [heroHome.querySelectorAll('[data-word="creating"]'), {
      y: ['-.5em', '0'],
      opacity: [0, 1]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      duration: 0.5
    }] : null, heroHome.querySelector('[data-word="unforgettable"] .char') ? [heroHome.querySelectorAll('[data-word="unforgettable"] .char'), {
      scale: [0.5, 1],
      y: ['.5em', '0'],
      opacity: [0, 1]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      at: '-.2',
      duration: 0.25,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.03)
    }] : null, heroHome.querySelector('[data-word="brands"]') ? [heroHome.querySelectorAll('[data-word="brands"]'), {
      x: ['.5em', '0'],
      opacity: [0, 1]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      at: '-.1',
      duration: 0.45
    }] : null, ctaButton ? [ctaButton, {
      scale: [0.75, 1],
      opacity: [0, 1]
    }, {
      at: '< .5',
      duration: 0.5,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }] : null].filter(Boolean)).then(() => {
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.revertSplitting)(heroHome);
    });
  }

  // Hero Large
  if (heroLrg) {
    const heroLrgTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[googleRating, {
      y: ['1em', '0'],
      opacity: [0, 1]
    }, {
      at: '<',
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }], [intoPara, {
      y: ['-1em', '0'],
      opacity: [0, 1]
    }, {
      at: '<',
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }], [heroLrg.querySelectorAll('.word .char'), {
      scale: [1.2, 1],
      rotate: ['-45deg', '0deg'],
      x: ['.5em', '0'],
      opacity: [0, 1]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      at: '<',
      duration: 0.7,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.05)
    }], [ctaButton, {
      scale: [0.75, 1],
      opacity: [0, 1]
    }, {
      at: '< .5',
      duration: 0.5,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }]]);
  }

  // Hero Large
  if (heroLrgCentered) {
    const heroLrgTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[googleRating, {
      y: ['1em', '0'],
      opacity: [0, 1]
    }, {
      at: '<',
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }], [intoPara, {
      y: ['-1em', '0'],
      opacity: [0, 1]
    }, {
      at: '<',
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }], [heroLrg.querySelectorAll('.word .char'), {
      scale: [1.2, 1],
      rotate: ['-45deg', '0deg'],
      x: ['.5em', '0'],
      opacity: [0, 1]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      at: '<',
      duration: 0.7,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.05)
    }], [ctaButton, {
      scale: [0.75, 1],
      opacity: [0, 1]
    }, {
      at: '< .5',
      duration: 0.5,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }]]);
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-horizontal-scroll.js":
/*!***********************************************************!*\
  !*** ./src/js/scripts/motion/motion-horizontal-scroll.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");

document.addEventListener('DOMContentLoaded', () => {
  const outcomesSection = document.querySelector('.is-section-outcomes');
  if (outcomesSection) {
    const scrollWrapper = outcomesSection.querySelector(".scroll-wrapper");
    const queryWrapper = scrollWrapper.querySelector('.is-style-scrollable ul');
    const cardsOutcomes = queryWrapper.querySelectorAll("li");
    const scrollProgress = scrollWrapper.querySelector(".scroll-progress hr");
    const calculateAndApplyAnimation = () => {
      if (cardsOutcomes.length > 0) {
        // Calculate the full width of queryWrapper including all cards and gaps
        const cardWidth = cardsOutcomes[0].getBoundingClientRect().width;
        const gap = parseInt(getComputedStyle(queryWrapper).gap) || 0;
        const queryWrapperWidth = cardsOutcomes.length * cardWidth + (cardsOutcomes.length - 1) * gap;

        // Ensure the total scroll distance is not negative
        const totalScrollDistance = Math.max(queryWrapperWidth - scrollWrapper.getBoundingClientRect().width, 0);

        // Scroll animation for queryWrapper
        (0,motion__WEBPACK_IMPORTED_MODULE_0__.scroll)((0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(queryWrapper, {
          transform: ["none", `translateX(-${totalScrollDistance}px)`]
        }, {
          ease: motion__WEBPACK_IMPORTED_MODULE_2__.easeInOut
        }), {
          target: scrollWrapper,
          offset: [0, 1]
        });

        // Progress bar representing gallery scroll
        (0,motion__WEBPACK_IMPORTED_MODULE_0__.scroll)((0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(scrollProgress, {
          scaleX: [0, 1]
        }, {
          ease: motion__WEBPACK_IMPORTED_MODULE_2__.easeInOut
        }), {
          target: scrollWrapper,
          offset: [0, 1]
        });
      }
    };

    // Initial calculation and animation
    calculateAndApplyAnimation();

    // Recalculate on window resize to adapt the animation
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateAndApplyAnimation, 200); // Adjust the delay as needed
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-pattern-offset-columns.js":
/*!****************************************************************!*\
  !*** ./src/js/scripts/motion/motion-pattern-offset-columns.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const offsetColumns = document.querySelectorAll('.is-pattern-offset-columns');

  // Loop through each offsetColumns element
  offsetColumns.forEach(column => {
    // Check if the column has the class 'left' or 'right'
    const isLeft = column.classList.contains('left');
    const isRight = column.classList.contains('right');

    // Create animations for left and right columns if they exist
    if (isLeft) {
      const leftColumnTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[column.querySelectorAll('.offset-column > *'), {
        opacity: [0, 1]
      }, {
        delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.25),
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1
      }]], {
        defaultOptions: {
          ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
        }
      });
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(leftColumnTL);
      (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(column, () => {
        leftColumnTL.play(); // Play the timeline for the left column
      }, {
        amount: 0.25
      });
    }
    if (isRight) {
      const rightColumnTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[column.querySelectorAll('.offset-column > *'), {
        opacity: [0, 1]
      }, {
        delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.25),
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1
      }]], {
        defaultOptions: {
          ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
        }
      });
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(rightColumnTL);
      (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(column, () => {
        rightColumnTL.play(); // Play the timeline for the right column
      }, {
        amount: 0.25
      });
    }
  });
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-approach-intro.js":
/*!****************************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-approach-intro.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const approachIntroSection = document.querySelector('.is-section-approach-small');
  if (!approachIntroSection) {
    return; // Exit early if section doesn't exist
  }
  const swiperWrapper = approachIntroSection.querySelector('.swiper-wrapper');
  if (!swiperWrapper) {
    return;
  }
  const heading = approachIntroSection.querySelector(".wp-block-heading");
  const swiperElements = swiperWrapper.querySelectorAll("*");
  if (!heading || swiperElements.length === 0) {
    return;
  }
  const approachIntroSectionTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[heading, {
    opacity: [0, 1],
    x: ["1em", "0"]
  }, {
    ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
    duration: 1
  }], [swiperElements, {
    opacity: [0, 1],
    x: ['50%', '0']
  }, {
    at: "<",
    duration: 1,
    ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
    delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.01)
  }]], {
    defaultOptions: {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(approachIntroSectionTL);
  (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(approachIntroSection, () => {
    approachIntroSectionTL.play(); // Play the timeline when in view
  }, {
    amount: 0.1
  });
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-approach-phase.js":
/*!****************************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-approach-phase.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const approachPhases = document.querySelectorAll('.is-section-approach-main');

  // Loop through each phase and add timeline
  approachPhases.forEach(approachPhase => {
    const elements = {
      line: approachPhase.querySelector('.approach-phase__dotted-line'),
      icon: approachPhase.querySelector('.approach-phase__icon'),
      afterLine: approachPhase.querySelector('.is-style-after-line'),
      title: approachPhase.querySelector('.approach-phase__title'),
      description: approachPhase.querySelector('.approach-phase__description'),
      benefits: approachPhase.querySelectorAll('.approach-phase__benefit'),
      titleSmall: approachPhase.querySelector('.approach-phase__title-small'),
      tags: approachPhase.querySelectorAll('.is-style-tags li')
    };
    const animations = [];
    if (elements.line) {
      animations.push([elements.line, {
        clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0 0)']
      }, {
        ease: motion__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
        duration: 2
      }]);
    }
    if (elements.icon) {
      animations.push([elements.icon, {
        opacity: [0, 1],
        rotate: ['25deg', '0'],
        y: ['50%', '0']
      }, {
        at: 0.25,
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1
      }]);
    }
    if (elements.afterLine) {
      animations.push([elements.afterLine, {
        opacity: [0, 1]
      }, {
        at: "<",
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1
      }]);
    }
    if (elements.title) {
      animations.push([elements.title, {
        opacity: [0, 1],
        x: ["2em", "0"]
      }, {
        at: "<",
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1
      }]);
    }
    if (elements.description) {
      animations.push([elements.description, {
        opacity: [0, 1],
        x: ["2em", "0"]
      }, {
        at: "<",
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1
      }]);
    }
    if (elements.benefits.length) {
      animations.push([elements.benefits, {
        opacity: [0, 1],
        y: ["2em", "0"]
      }, {
        at: "<",
        delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.15),
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 0.5
      }]);
    }
    if (elements.titleSmall) {
      animations.push([elements.titleSmall, {
        opacity: [0, 1],
        y: ["2em", "0"]
      }, {
        at: "<",
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 0.5
      }]);
    }
    if (elements.tags.length) {
      animations.push([elements.tags, {
        opacity: [0, 1],
        y: ["2em", "0"]
      }, {
        at: "<",
        delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.1),
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 0.5
      }]);
    }
    const approachPhaseTL = (0,motion__WEBPACK_IMPORTED_MODULE_3__.animate)(animations);
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(approachPhaseTL);
    (0,motion__WEBPACK_IMPORTED_MODULE_4__.inView)(approachPhase, () => {
      approachPhaseTL.play(); // Play the timeline
    }, {
      amount: 0.25
    });
  });
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-hero.js":
/*!******************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-hero.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  // const heroSection = document.getElementById('hero');
  const heroSectionMed = document.querySelector('.is-section-hero-medium');
  const heroSectionLrg = document.querySelector('.is-section-hero-medium');
  if (heroSectionMed) {
    const heroMedTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([
    // [heroSection.querySelector("h2.wp-block-heading"), { opacity: [ 0 , 1], x: [ "1em" , "0" ] }, { ease: easeBounce, duration: 1 }],
    [heroSection.querySelector("p.has-large-font-size"), {
      opacity: [0, 1]
    }, {
      at: "<",
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      duration: 2
    }], [heroSection.nextElementSibling, {
      opacity: [0, 1],
      y: ["1em", "0"]
    }, {
      at: "<",
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeCirc,
      duration: 1
    }]], {
      defaultOptions: {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
      }
    });

    // heroSectionTL.pause();

    // inView(heroSection, ({ target }) => {
    //     heroSectionTL.play() // Play the timeline
    // }, {amount: 0.1});
  }
  if (heroSectionLrg) {
    const heroMedTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([
    // [heroSection.querySelector("h2.wp-block-heading"), { opacity: [ 0 , 1], x: [ "1em" , "0" ] }, { ease: easeBounce, duration: 1 }],
    [heroSection.querySelector("p.has-large-font-size"), {
      opacity: [0, 1]
    }, {
      at: "<",
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      duration: 2
    }], [heroSection.nextElementSibling, {
      opacity: [0, 1],
      y: ["1em", "0"]
    }, {
      at: "<",
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeCirc,
      duration: 1
    }]], {
      defaultOptions: {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
      }
    });

    // heroSectionTL.pause();

    // inView(heroSection, ({ target }) => {
    //     heroSectionTL.play() // Play the timeline
    // }, {amount: 0.1});
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-outcomes.js":
/*!**********************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-outcomes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");

document.addEventListener('DOMContentLoaded', () => {
  const outcomesSection = document.querySelector('.is-section-outcomes');
  if (outcomesSection) {
    const scrollWrapper = outcomesSection.querySelector('.scroll-wrapper');
    const pinnedWrapper = outcomesSection.querySelector('.pinned-wrapper');
    const queryWrapper = scrollWrapper.querySelector('.is-style-scrollable ul');
    const cardsOutcomes = queryWrapper.querySelectorAll('li');
    const scrollProgress = scrollWrapper.querySelector('.scroll-progress hr');
    const calculateAndApplyAnimation = () => {
      if (cardsOutcomes.length > 0) {
        const cardWidth = cardsOutcomes[0].getBoundingClientRect().width;
        const gap = parseInt(getComputedStyle(queryWrapper).gap) || 0;
        const queryWrapperWidth = cardsOutcomes.length * cardWidth + (cardsOutcomes.length - 1) * gap;
        const totalScrollDistance = Math.max(queryWrapperWidth - scrollWrapper.getBoundingClientRect().width, 0);

        // Horizontal animation for queryWrapper
        (0,motion__WEBPACK_IMPORTED_MODULE_0__.scroll)((0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(queryWrapper, {
          x: ['0', `-${totalScrollDistance}px`]
        }, {
          ease: motion__WEBPACK_IMPORTED_MODULE_2__.easeInOut
        }), {
          target: scrollWrapper,
          offset: [0, 1]
        });

        // Progress bar representing gallery scroll
        (0,motion__WEBPACK_IMPORTED_MODULE_0__.scroll)((0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(scrollProgress, {
          scaleX: [0, 1]
        }, {
          ease: motion__WEBPACK_IMPORTED_MODULE_2__.easeInOut
        }), {
          target: scrollWrapper,
          offset: [0, 1]
        });

        // scroll((progress) => console.log(progress), {
        // 	target: scrollWrapper,
        // });

        // Image title parallax animation
        const segmentLength = 1 / cardsOutcomes.length;
        cardsOutcomes.forEach((card, i) => {
          const queryContent = card.querySelector('.wp-block-column:has(.wp-block-post-title)');
          const queryImage = card.querySelector('.wp-block-post-featured-image img, .wp-block-post-featured-image video');
          if (queryContent) {
            (0,motion__WEBPACK_IMPORTED_MODULE_0__.scroll)((0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(queryContent, {
              x: [50, -50]
            }, {
              ease: motion__WEBPACK_IMPORTED_MODULE_2__.easeInOut
            }), {
              target: scrollWrapper,
              offset: [[i * segmentLength, 1], [(i + 1) * segmentLength, 0]]
            });
          }

          // if (queryImage) {
          // 	scroll(
          // 		animate(
          // 			queryImage,
          // 			{ x: [-100, 100], opacity: [0, 1, 1] },
          // 			{ ease: easeInOut }
          // 		),
          // 		{
          // 			target: scrollWrapper,
          // 			offset: [
          // 				[i * segmentLength, 1],
          // 				[(i + 1) * segmentLength, 0],
          // 			],
          // 		}
          // 	);
          // }
        });
      }
    };

    // Initial calculation and animation
    calculateAndApplyAnimation();

    // Recalculate on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateAndApplyAnimation, 200);
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-resources-intro.js":
/*!*****************************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-resources-intro.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const resourcesIntroSection = document.querySelector('.is-section-resources-intro');
  if (resourcesIntroSection) {
    const resourcesIntroSectionTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[resourcesIntroSection.querySelectorAll(".wp-block-heading .char"), {
      opacity: [0, 1],
      x: ["1em", "0"]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      duration: 1,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(.05)
    }], [resourcesIntroSection.querySelectorAll("li"), {
      opacity: [0, 1],
      x: ['50%', '0']
    }, {
      at: "<",
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(.25)
    }]], {
      defaultOptions: {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
      }
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(resourcesIntroSectionTL);
    (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(resourcesIntroSection, ({
      target
    }) => {
      resourcesIntroSectionTL.play(); // Play the timeline
    }, {
      amount: 0.1
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-services-intro.js":
/*!****************************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-services-intro.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const servicesIntroSection = document.querySelector('.is-section-services-intro');
  if (servicesIntroSection) {
    const servicesIntroSectionTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[servicesIntroSection.querySelector(".wp-block-heading"), {
      opacity: [0, 1],
      x: ["1em", "0"]
    }, {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      duration: 1
    }], [servicesIntroSection.querySelectorAll("li"), {
      opacity: [0, 1],
      x: ['50%', '0']
    }, {
      at: "<",
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(.25)
    }]], {
      defaultOptions: {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
      }
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(servicesIntroSectionTL);
    (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(servicesIntroSection, ({
      target
    }) => {
      servicesIntroSectionTL.play(); // Play the timeline
    }, {
      amount: 0.1
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-solutions-intro.js":
/*!*****************************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-solutions-intro.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const solutionsIntroSection = document.querySelector('.is-section-solutions-overview');
  if (!solutionsIntroSection) {
    return;
  }
  const heading = solutionsIntroSection.querySelector(".wp-block-heading");
  const solutionsCards = solutionsIntroSection.querySelectorAll('.is-section-solutions-overview__card');
  if (!heading) {
    return;
  }
  if (solutionsCards.length === 0) {
    return;
  }
  const solutionsIntroSectionTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[heading, {
    opacity: [0, 1],
    y: ["1em", "0"]
  }, {
    ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
    duration: 1
  }], [solutionsCards, {
    opacity: [0, 1],
    y: ['50%', '0']
  }, {
    at: "<",
    duration: 1,
    ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
    delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(0.25)
  }]], {
    defaultOptions: {
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
    }
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(solutionsIntroSectionTL);
  (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(solutionsIntroSection, () => {
    solutionsIntroSectionTL.play(); // Play the timeline when in view
  }, {
    amount: 0.25
  });
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-testimonial-ticker.js":
/*!********************************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-testimonial-ticker.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  // const heroSection = document.getElementById('hero');
  const testimonialsTickerSection = document.querySelector('.is-section-testimonial-ticker');
  if (testimonialsTickerSection) {
    const testimonialsTickerSectionTL = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)([[testimonialsTickerSection.querySelectorAll(".swiper-wrapper"), {
      opacity: [0, 1]
    }, {
      duration: 1,
      ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeCirc,
      delay: (0,motion__WEBPACK_IMPORTED_MODULE_2__.stagger)(.15)
    }]
    // [testimonialsTickerSection.querySelectorAll(".swiper-wrapper > .wp-block-group"), { opacity: [ 0 , 1 ], x: [ '10em' , '0' ] }, { at: '<', duration: .5, ease: easeBounce, delay: stagger(.01) }],
    ], {
      defaultOptions: {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
      }
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(testimonialsTickerSectionTL);
    (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(testimonialsTickerSection, ({
      target
    }) => {
      testimonialsTickerSectionTL.play(); // Play the timeline
    }, {
      amount: 0.5
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-section-work-archive.js":
/*!**************************************************************!*\
  !*** ./src/js/scripts/motion/motion-section-work-archive.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const workArchiveSection = document.querySelector('.is-section-work-archive');
  if (workArchiveSection) {
    // Animate heading when section is in view
    const headingElement = workArchiveSection.querySelector(".wp-block-heading");
    if (headingElement) {
      // Set initial state for the heading
      headingElement.style.opacity = "0";
      headingElement.style.transform = "translateX(1em)";

      // Create animation instance
      const headingAnimation = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(headingElement, {
        opacity: [0, 1],
        x: ["1em", "0"]
      }, {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1
      });
      headingAnimation.pause();
      (0,motion__WEBPACK_IMPORTED_MODULE_2__.inView)(headingElement, () => {
        headingAnimation.play();
      }, {
        amount: 0.1
      });
    }

    // Get all 'li' elements and set individual animations
    const listItems = workArchiveSection.querySelectorAll("li");
    listItems.forEach((li, index) => {
      // Set initial state for the list item
      li.style.opacity = "0";
      li.style.transform = "translateY(50%)";

      // Create animation instance
      const liAnimation = (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(li, {
        opacity: [0, 1],
        y: ['25%', '0']
      }, {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: 1,
        delay: index * 0.1
      });
      liAnimation.pause();
      (0,motion__WEBPACK_IMPORTED_MODULE_2__.inView)(li, () => {
        liAnimation.play();
      }, {
        amount: 0.1
      });
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/motion/motion-single-work.js":
/*!*****************************************************!*\
  !*** ./src/js/scripts/motion/motion-single-work.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js/scripts/motion/index.js");


document.addEventListener('DOMContentLoaded', () => {
  const workSingle = document.querySelector('body.single-work');
  if (workSingle) {
    // hero image on load
    // const workSingleTL = animate(
    // 	[
    // 		[
    // 			document.querySelector('.wp-block-post-featured-image img'),
    // 			{ scale: [1.2, 1], opacity: [0, 1] },
    // 			{ duration: 1 },
    // 		],
    // 	],
    // 	{ ease: easeBounce }
    // );

    // post media

    const workMedia = workSingle.querySelectorAll('.is-pattern-case-study-media > *, .is-pattern-case-study-section__media-wrapper > *, .is-pattern-case-study-media__gallery > *');
    workMedia.forEach(item => {
      (0,motion__WEBPACK_IMPORTED_MODULE_1__.scroll)((0,motion__WEBPACK_IMPORTED_MODULE_2__.animate)(item, {
        opacity: [0, 1]
      }, {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce
      }), {
        target: item,
        offset: ['start end', 'start .25']
      });
    });

    // section part

    const workParts = workSingle.querySelectorAll('.is-pattern-case-study-section__content-wrapper');
    workParts.forEach(workPart => {
      const workPartTL = (0,motion__WEBPACK_IMPORTED_MODULE_2__.animate)(workPart, {
        opacity: [0, 1],
        y: ['2em', '0']
      }, {
        ease: _index__WEBPACK_IMPORTED_MODULE_0__.easeBounce,
        duration: .5
      });
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetTimeline)(workPartTL);
      (0,motion__WEBPACK_IMPORTED_MODULE_3__.inView)(workPart, () => {
        workPartTL.play(); // Play the timeline when in view
      }, {
        amount: .5
      });
    });
  }
});

/***/ }),

/***/ "./src/js/scripts/navigation.js":
/*!**************************************!*\
  !*** ./src/js/scripts/navigation.js ***!
  \**************************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/js/scripts/testi-load-more-wording.js":
/*!***************************************************!*\
  !*** ./src/js/scripts/testi-load-more-wording.js ***!
  \***************************************************/
/***/ (() => {

// change the working in the load more button

document.addEventListener('DOMContentLoaded', function () {
  const rpiElement = document.querySelector('.rpi .rpi-url');
  if (rpiElement) {
    rpiElement.innerHTML = 'Load more reviews';
  }
});

/***/ }),

/***/ "./node_modules/splitting/dist/splitting.js":
/*!**************************************************!*\
  !*** ./node_modules/splitting/dist/splitting.js ***!
  \**************************************************/
/***/ (function(module) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var root = document;
var createText = root.createTextNode.bind(root);

/**
 * # setProperty
 * Apply a CSS var
 * @param {HTMLElement} el
 * @param {string} varName 
 * @param {string|number} value 
 */
function setProperty(el, varName, value) {
    el.style.setProperty(varName, value);
} 

/**
 * 
 * @param {!HTMLElement} el 
 * @param {!HTMLElement} child 
 */
function appendChild(el, child) {
  return el.appendChild(child);
}

/**
 * 
 * @param {!HTMLElement} parent 
 * @param {string} key 
 * @param {string} text 
 * @param {boolean} whitespace 
 */
function createElement(parent, key, text, whitespace) {
  var el = root.createElement('span');
  key && (el.className = key); 
  if (text) { 
      !whitespace && el.setAttribute("data-" + key, text);
      el.textContent = text; 
  }
  return (parent && appendChild(parent, el)) || el;
}

/**
 * 
 * @param {!HTMLElement} el 
 * @param {string} key 
 */
function getData(el, key) {
  return el.getAttribute("data-" + key)
}

/**
 * 
 * @param {import('../types').Target} e 
 * @param {!HTMLElement} parent
 * @returns {!Array<!HTMLElement>}
 */
function $(e, parent) {
    return !e || e.length == 0
        ? // null or empty string returns empty array
          []
        : e.nodeName
            ? // a single element is wrapped in an array
              [e]
            : // selector and NodeList are converted to Element[]
              [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));
}

/**
 * Creates and fills an array with the value provided
 * @param {number} len
 * @param {() => T} valueProvider
 * @return {T}
 * @template T
 */
function Array2D(len) {
    var a = [];
    for (; len--; ) {
        a[len] = [];
    }
    return a;
}

/**
 * A for loop wrapper used to reduce js minified size.
 * @param {!Array<T>} items 
 * @param {function(T):void} consumer
 * @template T
 */
function each(items, consumer) {
    items && items.some(consumer);
}

/**
 * @param {T} obj 
 * @return {function(string):*}
 * @template T
 */
function selectFrom(obj) {
    return function (key) {
        return obj[key];
    }
}

/**
 * # Splitting.index
 * Index split elements and add them to a Splitting instance.
 *
 * @param {HTMLElement} element
 * @param {string} key 
 * @param {!Array<!HTMLElement> | !Array<!Array<!HTMLElement>>} items 
 */
function index(element, key, items) {
    var prefix = '--' + key;
    var cssVar = prefix + "-index";

    each(items, function (items, i) {
        if (Array.isArray(items)) {
            each(items, function(item) {
                setProperty(item, cssVar, i);
            });
        } else {
            setProperty(items, cssVar, i);
        }
    });

    setProperty(element, prefix + "-total", items.length);
}

/**
 * @type {Record<string, import('./types').ISplittingPlugin>}
 */
var plugins = {};

/**
 * @param {string} by
 * @param {string} parent
 * @param {!Array<string>} deps
 * @return {!Array<string>}
 */
function resolvePlugins(by, parent, deps) {
    // skip if already visited this dependency
    var index = deps.indexOf(by);
    if (index == -1) {
        // if new to dependency array, add to the beginning
        deps.unshift(by);

        // recursively call this function for all dependencies
        var plugin = plugins[by];
        if (!plugin) {
            throw new Error("plugin not loaded: " + by);
        }
        each(plugin.depends, function(p) {
            resolvePlugins(p, by, deps);
        });
    } else {
        // if this dependency was added already move to the left of
        // the parent dependency so it gets loaded in order
        var indexOfParent = deps.indexOf(parent);
        deps.splice(index, 1);
        deps.splice(indexOfParent, 0, by);
    }
    return deps;
}

/**
 * Internal utility for creating plugins... essentially to reduce
 * the size of the library
 * @param {string} by 
 * @param {string} key 
 * @param {string[]} depends 
 * @param {Function} split 
 * @returns {import('./types').ISplittingPlugin}
 */
function createPlugin(by, depends, key, split) {
    return {
        by: by,
        depends: depends,
        key: key,
        split: split
    }
}

/**
 *
 * @param {string} by
 * @returns {import('./types').ISplittingPlugin[]}
 */
function resolve(by) {
    return resolvePlugins(by, 0, []).map(selectFrom(plugins));
}

/**
 * Adds a new plugin to splitting
 * @param {import('./types').ISplittingPlugin} opts
 */
function add(opts) {
    plugins[opts.by] = opts;
}

/**
 * # Splitting.split
 * Split an element's textContent into individual elements
 * @param {!HTMLElement} el  Element to split
 * @param {string} key 
 * @param {string} splitOn 
 * @param {boolean} includePrevious 
 * @param {boolean} preserveWhitespace
 * @return {!Array<!HTMLElement>}
 */
function splitText(el, key, splitOn, includePrevious, preserveWhitespace) {
    // Combine any strange text nodes or empty whitespace.
    el.normalize();

    // Use fragment to prevent unnecessary DOM thrashing.
    var elements = [];
    var F = document.createDocumentFragment();

    if (includePrevious) {
        elements.push(el.previousSibling);
    }

    var allElements = [];
    $(el.childNodes).some(function(next) {
        if (next.tagName && !next.hasChildNodes()) {
            // keep elements without child nodes (no text and no children)
            allElements.push(next);
            return;
        }
        // Recursively run through child nodes
        if (next.childNodes && next.childNodes.length) {
            allElements.push(next);
            elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));
            return;
        }

        // Get the text to split, trimming out the whitespace
        /** @type {string} */
        var wholeText = next.wholeText || '';
        var contents = wholeText.trim();

        // If there's no text left after trimming whitespace, continue the loop
        if (contents.length) {
            // insert leading space if there was one
            if (wholeText[0] === ' ') {
                allElements.push(createText(' '));
            }
            // Concatenate the split text children back into the full array
            var useSegmenter = splitOn === "" && typeof Intl.Segmenter === "function";
            each(useSegmenter ? Array.from(new Intl.Segmenter().segment(contents)).map(function(x){return x.segment}) : contents.split(splitOn), function (splitText, i) {
                if (i && preserveWhitespace) {
                    allElements.push(createElement(F, "whitespace", " ", preserveWhitespace));
                }
                var splitEl = createElement(F, key, splitText);
                elements.push(splitEl);
                allElements.push(splitEl);
            }); 
            // insert trailing space if there was one
            if (wholeText[wholeText.length - 1] === ' ') {
                allElements.push(createText(' '));
            }
        }
    });

    each(allElements, function(el) {
        appendChild(F, el);
    });

    // Clear out the existing element
    el.innerHTML = "";
    appendChild(el, F);
    return elements;
}

/** an empty value */
var _ = 0;

function copy(dest, src) {
    for (var k in src) {
        dest[k] = src[k];
    }
    return dest;
}

var WORDS = 'words';

var wordPlugin = createPlugin(
    /* by= */ WORDS,
    /* depends= */ _,
    /* key= */ 'word', 
    /* split= */ function(el) {
        return splitText(el, 'word', /\s+/, 0, 1)
    }
);

var CHARS = "chars";

var charPlugin = createPlugin(
    /* by= */ CHARS,
    /* depends= */ [WORDS],
    /* key= */ "char", 
    /* split= */ function(el, options, ctx) {
        var results = [];

        each(ctx[WORDS], function(word, i) {
            results.push.apply(results, splitText(word, "char", "", options.whitespace && i));
        });

        return results;
    }
);

/**
 * # Splitting
 * 
 * @param {import('./types').ISplittingOptions} opts
 * @return {!Array<*>}
 */
function Splitting (opts) {
  opts = opts || {};
  var key = opts.key;

  return $(opts.target || '[data-splitting]').map(function(el) {
    var ctx = el['🍌'];  
    if (!opts.force && ctx) {
      return ctx;
    }

    ctx = el['🍌'] = { el: el };
    var by = opts.by || getData(el, 'splitting');
    if (!by || by == 'true') {
      by = CHARS;
    }
    var items = resolve(by);
    var opts2 = copy({}, opts);
    each(items, function(plugin) {
      if (plugin.split) {
        var pluginBy = plugin.by;
        var key2 = (key ? '-' + key : '') + plugin.key;
        var results = plugin.split(el, opts2, ctx);
        key2 && index(el, key2, results);
        ctx[pluginBy] = results;
        el.classList.add(pluginBy);
      } 
    });

    el.classList.add('splitting');
    return ctx;
  })
}

/**
 * # Splitting.html
 * 
 * @param {import('./types').ISplittingOptions} opts
 */
function html(opts) {
  opts = opts || {};
  var parent = opts.target =  createElement();
  parent.innerHTML = opts.content;
  Splitting(opts);
  return parent.outerHTML
}

Splitting.html = html;
Splitting.add = add;

/**
 * Detects the grid by measuring which elements align to a side of it.
 * @param {!HTMLElement} el 
 * @param {import('../core/types').ISplittingOptions} options
 * @param {*} side 
 */
function detectGrid(el, options, side) {
    var items = $(options.matching || el.children, el);
    var c = {};

    each(items, function(w) {
        var val = Math.round(w[side]);
        (c[val] || (c[val] = [])).push(w);
    });

    return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));
}

/**
 * Sorting function for numbers.
 * @param {number} a 
 * @param {number} b
 * @return {number} 
 */
function byNumber(a, b) {
    return a - b;
}

var linePlugin = createPlugin(
    /* by= */ 'lines',
    /* depends= */ [WORDS],
    /* key= */ 'line',
    /* split= */ function(el, options, ctx) {
      return detectGrid(el, { matching: ctx[WORDS] }, 'offsetTop')
    }
);

var itemPlugin = createPlugin(
    /* by= */ 'items',
    /* depends= */ _,
    /* key= */ 'item', 
    /* split= */ function(el, options) {
        return $(options.matching || el.children, el)
    }
);

var rowPlugin = createPlugin(
    /* by= */ 'rows',
    /* depends= */ _,
    /* key= */ 'row', 
    /* split= */ function(el, options) {
        return detectGrid(el, options, "offsetTop");
    }
);

var columnPlugin = createPlugin(
    /* by= */ 'cols',
    /* depends= */ _,
    /* key= */ "col", 
    /* split= */ function(el, options) {
        return detectGrid(el, options, "offsetLeft");
    }
);

var gridPlugin = createPlugin(
    /* by= */ 'grid',
    /* depends= */ ['rows', 'cols']
);

var LAYOUT = "layout";

var layoutPlugin = createPlugin(
    /* by= */ LAYOUT,
    /* depends= */ _,
    /* key= */ _,
    /* split= */ function(el, opts) {
        // detect and set options
        var rows =  opts.rows = +(opts.rows || getData(el, 'rows') || 1);
        var columns = opts.columns = +(opts.columns || getData(el, 'columns') || 1);

        // Seek out the first <img> if the value is true 
        opts.image = opts.image || getData(el, 'image') || el.currentSrc || el.src;
        if (opts.image) {
            var img = $("img", el)[0];
            opts.image = img && (img.currentSrc || img.src);
        }

        // add optional image to background
        if (opts.image) {
            setProperty(el, "background-image", "url(" + opts.image + ")");
        }

        var totalCells = rows * columns;
        var elements = [];

        var container = createElement(_, "cell-grid");
        while (totalCells--) {
            // Create a span
            var cell = createElement(container, "cell");
            createElement(cell, "cell-inner");
            elements.push(cell);
        }

        // Append elements back into the parent
        appendChild(el, container);

        return elements;
    }
);

var cellRowPlugin = createPlugin(
    /* by= */ "cellRows",
    /* depends= */ [LAYOUT],
    /* key= */ "row",
    /* split= */ function(el, opts, ctx) {
        var rowCount = opts.rows;
        var result = Array2D(rowCount);

        each(ctx[LAYOUT], function(cell, i, src) {
            result[Math.floor(i / (src.length / rowCount))].push(cell);
        });

        return result;
    }
);

var cellColumnPlugin = createPlugin(
    /* by= */ "cellColumns",
    /* depends= */ [LAYOUT],
    /* key= */ "col",
    /* split= */ function(el, opts, ctx) {
        var columnCount = opts.columns;
        var result = Array2D(columnCount);

        each(ctx[LAYOUT], function(cell, i) {
            result[i % columnCount].push(cell);
        });

        return result;
    }
);

var cellPlugin = createPlugin(
    /* by= */ "cells",
    /* depends= */ ['cellRows', 'cellColumns'],
    /* key= */ "cell", 
    /* split= */ function(el, opt, ctx) { 
        // re-index the layout as the cells
        return ctx[LAYOUT];
    }
);

// install plugins
// word/char plugins
add(wordPlugin);
add(charPlugin);
add(linePlugin);
// grid plugins
add(itemPlugin);
add(rowPlugin);
add(columnPlugin);
add(gridPlugin);
// cell-layout plugins
add(layoutPlugin);
add(cellRowPlugin);
add(cellColumnPlugin);
add(cellPlugin);

return Splitting;

})));


/***/ }),

/***/ "./node_modules/lenis/dist/lenis.mjs":
/*!*******************************************!*\
  !*** ./node_modules/lenis/dist/lenis.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lenis)
/* harmony export */ });
// package.json
var version = "1.1.21";

// packages/core/src/maths.ts
function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max));
}
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}
function damp(x, y, lambda, deltaTime) {
  return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
function modulo(n, d) {
  return (n % d + d) % d;
}

// packages/core/src/animate.ts
var Animate = class {
  isRunning = false;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  // These are instanciated in the fromTo method
  lerp;
  duration;
  easing;
  onUpdate;
  /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */
  advance(deltaTime) {
    if (!this.isRunning) return;
    let completed = false;
    if (this.duration && this.easing) {
      this.currentTime += deltaTime;
      const linearProgress = clamp(0, this.currentTime / this.duration, 1);
      completed = linearProgress >= 1;
      const easedProgress = completed ? 1 : this.easing(linearProgress);
      this.value = this.from + (this.to - this.from) * easedProgress;
    } else if (this.lerp) {
      this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
      if (Math.round(this.value) === this.to) {
        this.value = this.to;
        completed = true;
      }
    } else {
      this.value = this.to;
      completed = true;
    }
    if (completed) {
      this.stop();
    }
    this.onUpdate?.(this.value, completed);
  }
  /** Stop the animation */
  stop() {
    this.isRunning = false;
  }
  /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */
  fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
    this.from = this.value = from;
    this.to = to;
    this.lerp = lerp2;
    this.duration = duration;
    this.easing = easing;
    this.currentTime = 0;
    this.isRunning = true;
    onStart?.();
    this.onUpdate = onUpdate;
  }
};

// packages/core/src/debounce.ts
function debounce(callback, delay) {
  let timer;
  return function(...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = void 0;
      callback.apply(context, args);
    }, delay);
  };
}

// packages/core/src/dimensions.ts
var Dimensions = class {
  constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
    this.wrapper = wrapper;
    this.content = content;
    if (autoResize) {
      this.debouncedResize = debounce(this.resize, debounceValue);
      if (this.wrapper instanceof Window) {
        window.addEventListener("resize", this.debouncedResize, false);
      } else {
        this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
        this.wrapperResizeObserver.observe(this.wrapper);
      }
      this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
      this.contentResizeObserver.observe(this.content);
    }
    this.resize();
  }
  width = 0;
  height = 0;
  scrollHeight = 0;
  scrollWidth = 0;
  // These are instanciated in the constructor as they need information from the options
  debouncedResize;
  wrapperResizeObserver;
  contentResizeObserver;
  destroy() {
    this.wrapperResizeObserver?.disconnect();
    this.contentResizeObserver?.disconnect();
    if (this.wrapper === window && this.debouncedResize) {
      window.removeEventListener("resize", this.debouncedResize, false);
    }
  }
  resize = () => {
    this.onWrapperResize();
    this.onContentResize();
  };
  onWrapperResize = () => {
    if (this.wrapper instanceof Window) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    } else {
      this.width = this.wrapper.clientWidth;
      this.height = this.wrapper.clientHeight;
    }
  };
  onContentResize = () => {
    if (this.wrapper instanceof Window) {
      this.scrollHeight = this.content.scrollHeight;
      this.scrollWidth = this.content.scrollWidth;
    } else {
      this.scrollHeight = this.wrapper.scrollHeight;
      this.scrollWidth = this.wrapper.scrollWidth;
    }
  };
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
};

// packages/core/src/emitter.ts
var Emitter = class {
  events = {};
  /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */
  emit(event, ...args) {
    let callbacks = this.events[event] || [];
    for (let i = 0, length = callbacks.length; i < length; i++) {
      callbacks[i]?.(...args);
    }
  }
  /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */
  on(event, cb) {
    this.events[event]?.push(cb) || (this.events[event] = [cb]);
    return () => {
      this.events[event] = this.events[event]?.filter((i) => cb !== i);
    };
  }
  /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */
  off(event, callback) {
    this.events[event] = this.events[event]?.filter((i) => callback !== i);
  }
  /**
   * Remove all event listeners and clean up
   */
  destroy() {
    this.events = {};
  }
};

// packages/core/src/virtual-scroll.ts
var LINE_HEIGHT = 100 / 6;
var listenerOptions = { passive: false };
var VirtualScroll = class {
  constructor(element, options = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    this.element = element;
    this.options = options;
    window.addEventListener("resize", this.onWindowResize, false);
    this.onWindowResize();
    this.element.addEventListener("wheel", this.onWheel, listenerOptions);
    this.element.addEventListener(
      "touchstart",
      this.onTouchStart,
      listenerOptions
    );
    this.element.addEventListener(
      "touchmove",
      this.onTouchMove,
      listenerOptions
    );
    this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
  }
  touchStart = {
    x: 0,
    y: 0
  };
  lastDelta = {
    x: 0,
    y: 0
  };
  window = {
    width: 0,
    height: 0
  };
  emitter = new Emitter();
  /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */
  on(event, callback) {
    return this.emitter.on(event, callback);
  }
  /** Remove all event listeners and clean up */
  destroy() {
    this.emitter.destroy();
    window.removeEventListener("resize", this.onWindowResize, false);
    this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
    this.element.removeEventListener(
      "touchstart",
      this.onTouchStart,
      listenerOptions
    );
    this.element.removeEventListener(
      "touchmove",
      this.onTouchMove,
      listenerOptions
    );
    this.element.removeEventListener(
      "touchend",
      this.onTouchEnd,
      listenerOptions
    );
  }
  /**
   * Event handler for 'touchstart' event
   *
   * @param event Touch event
   */
  onTouchStart = (event) => {
    const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
    this.touchStart.x = clientX;
    this.touchStart.y = clientY;
    this.lastDelta = {
      x: 0,
      y: 0
    };
    this.emitter.emit("scroll", {
      deltaX: 0,
      deltaY: 0,
      event
    });
  };
  /** Event handler for 'touchmove' event */
  onTouchMove = (event) => {
    const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
    const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
    const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
    this.touchStart.x = clientX;
    this.touchStart.y = clientY;
    this.lastDelta = {
      x: deltaX,
      y: deltaY
    };
    this.emitter.emit("scroll", {
      deltaX,
      deltaY,
      event
    });
  };
  onTouchEnd = (event) => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event
    });
  };
  /** Event handler for 'wheel' event */
  onWheel = (event) => {
    let { deltaX, deltaY, deltaMode } = event;
    const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
    const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
    deltaX *= multiplierX;
    deltaY *= multiplierY;
    deltaX *= this.options.wheelMultiplier;
    deltaY *= this.options.wheelMultiplier;
    this.emitter.emit("scroll", { deltaX, deltaY, event });
  };
  onWindowResize = () => {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };
};

// packages/core/src/lenis.ts
var Lenis = class {
  _isScrolling = false;
  // true when scroll is animating
  _isStopped = false;
  // true if user should not be able to scroll - enable/disable programmatically
  _isLocked = false;
  // same as isStopped but enabled/disabled when scroll reaches target
  _preventNextNativeScrollEvent = false;
  _resetVelocityTimeout = null;
  __rafID = null;
  /**
   * Whether or not the user is touching the screen
   */
  isTouching;
  /**
   * The time in ms since the lenis instance was created
   */
  time = 0;
  /**
   * User data that will be forwarded through the scroll event
   *
   * @example
   * lenis.scrollTo(100, {
   *   userData: {
   *     foo: 'bar'
   *   }
   * })
   */
  userData = {};
  /**
   * The last velocity of the scroll
   */
  lastVelocity = 0;
  /**
   * The current velocity of the scroll
   */
  velocity = 0;
  /**
   * The direction of the scroll
   */
  direction = 0;
  /**
   * The options passed to the lenis instance
   */
  options;
  /**
   * The target scroll value
   */
  targetScroll;
  /**
   * The animated scroll value
   */
  animatedScroll;
  // These are instanciated here as they don't need information from the options
  animate = new Animate();
  emitter = new Emitter();
  // These are instanciated in the constructor as they need information from the options
  dimensions;
  // This is not private because it's used in the Snap class
  virtualScroll;
  constructor({
    wrapper = window,
    content = document.documentElement,
    eventsTarget = wrapper,
    smoothWheel = true,
    syncTouch = false,
    syncTouchLerp = 0.075,
    touchInertiaMultiplier = 35,
    duration,
    // in seconds
    easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    lerp: lerp2 = 0.1,
    infinite = false,
    orientation = "vertical",
    // vertical, horizontal
    gestureOrientation = "vertical",
    // vertical, horizontal, both
    touchMultiplier = 1,
    wheelMultiplier = 1,
    autoResize = true,
    prevent,
    virtualScroll,
    overscroll = true,
    autoRaf = false,
    anchors = false,
    __experimental__naiveDimensions = false
  } = {}) {
    window.lenisVersion = version;
    if (!wrapper || wrapper === document.documentElement) {
      wrapper = window;
    }
    this.options = {
      wrapper,
      content,
      eventsTarget,
      smoothWheel,
      syncTouch,
      syncTouchLerp,
      touchInertiaMultiplier,
      duration,
      easing,
      lerp: lerp2,
      infinite,
      gestureOrientation,
      orientation,
      touchMultiplier,
      wheelMultiplier,
      autoResize,
      prevent,
      virtualScroll,
      overscroll,
      autoRaf,
      anchors,
      __experimental__naiveDimensions
    };
    this.dimensions = new Dimensions(wrapper, content, { autoResize });
    this.updateClassName();
    this.targetScroll = this.animatedScroll = this.actualScroll;
    this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
    this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: true
    });
    if (this.options.anchors && this.options.wrapper === window) {
      this.options.wrapper.addEventListener(
        "click",
        this.onClick,
        false
      );
    }
    this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown,
      false
    );
    this.virtualScroll = new VirtualScroll(eventsTarget, {
      touchMultiplier,
      wheelMultiplier
    });
    this.virtualScroll.on("scroll", this.onVirtualScroll);
    if (this.options.autoRaf) {
      this.__rafID = requestAnimationFrame(this.raf);
    }
  }
  /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */
  destroy() {
    this.emitter.destroy();
    this.options.wrapper.removeEventListener(
      "scroll",
      this.onNativeScroll,
      false
    );
    this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
      capture: true
    });
    this.options.wrapper.removeEventListener(
      "pointerdown",
      this.onPointerDown,
      false
    );
    if (this.options.anchors && this.options.wrapper === window) {
      this.options.wrapper.removeEventListener(
        "click",
        this.onClick,
        false
      );
    }
    this.virtualScroll.destroy();
    this.dimensions.destroy();
    this.cleanUpClassName();
    if (this.__rafID) {
      cancelAnimationFrame(this.__rafID);
    }
  }
  on(event, callback) {
    return this.emitter.on(event, callback);
  }
  off(event, callback) {
    return this.emitter.off(event, callback);
  }
  onScrollEnd = (e) => {
    if (!(e instanceof CustomEvent)) {
      if (this.isScrolling === "smooth" || this.isScrolling === false) {
        e.stopPropagation();
      }
    }
  };
  dispatchScrollendEvent = () => {
    this.options.wrapper.dispatchEvent(
      new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        // cancelable: false,
        detail: {
          lenisScrollEnd: true
        }
      })
    );
  };
  setScroll(scroll) {
    if (this.isHorizontal) {
      this.options.wrapper.scrollTo({ left: scroll, behavior: "instant" });
    } else {
      this.options.wrapper.scrollTo({ top: scroll, behavior: "instant" });
    }
  }
  onClick = (event) => {
    const path = event.composedPath();
    const anchor = path.find(
      (node) => node instanceof HTMLAnchorElement && node.getAttribute("href")?.startsWith("#")
    );
    if (anchor) {
      const id = anchor.getAttribute("href");
      if (id) {
        const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
        this.scrollTo(id, options);
      }
    }
  };
  onPointerDown = (event) => {
    if (event.button === 1) {
      this.reset();
    }
  };
  onVirtualScroll = (data) => {
    if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false)
      return;
    const { deltaX, deltaY, event } = data;
    this.emitter.emit("virtual-scroll", { deltaX, deltaY, event });
    if (event.ctrlKey) return;
    if (event.lenisStopPropagation) return;
    const isTouch = event.type.includes("touch");
    const isWheel = event.type.includes("wheel");
    this.isTouching = event.type === "touchstart" || event.type === "touchmove";
    const isClickOrTap = deltaX === 0 && deltaY === 0;
    const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked;
    if (isTapToStop) {
      this.reset();
      return;
    }
    const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
    if (isClickOrTap || isUnknownGesture) {
      return;
    }
    let composedPath = event.composedPath();
    composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
    const prevent = this.options.prevent;
    if (!!composedPath.find(
      (node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel"))
    ))
      return;
    if (this.isStopped || this.isLocked) {
      event.preventDefault();
      return;
    }
    const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
    if (!isSmooth) {
      this.isScrolling = "native";
      this.animate.stop();
      event.lenisStopPropagation = true;
      return;
    }
    let delta = deltaY;
    if (this.options.gestureOrientation === "both") {
      delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
    } else if (this.options.gestureOrientation === "horizontal") {
      delta = deltaX;
    }
    if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
      event.lenisStopPropagation = true;
    }
    event.preventDefault();
    const isSyncTouch = isTouch && this.options.syncTouch;
    const isTouchEnd = isTouch && event.type === "touchend";
    const hasTouchInertia = isTouchEnd && Math.abs(delta) > 5;
    if (hasTouchInertia) {
      delta = this.velocity * this.options.touchInertiaMultiplier;
    }
    this.scrollTo(this.targetScroll + delta, {
      programmatic: false,
      ...isSyncTouch ? {
        lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
        // immediate: !hasTouchInertia,
      } : {
        lerp: this.options.lerp,
        duration: this.options.duration,
        easing: this.options.easing
      }
    });
  };
  /**
   * Force lenis to recalculate the dimensions
   */
  resize() {
    this.dimensions.resize();
    this.animatedScroll = this.targetScroll = this.actualScroll;
    this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  onNativeScroll = () => {
    if (this._resetVelocityTimeout !== null) {
      clearTimeout(this._resetVelocityTimeout);
      this._resetVelocityTimeout = null;
    }
    if (this._preventNextNativeScrollEvent) {
      this._preventNextNativeScrollEvent = false;
      return;
    }
    if (this.isScrolling === false || this.isScrolling === "native") {
      const lastScroll = this.animatedScroll;
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.lastVelocity = this.velocity;
      this.velocity = this.animatedScroll - lastScroll;
      this.direction = Math.sign(
        this.animatedScroll - lastScroll
      );
      if (!this.isStopped) {
        this.isScrolling = "native";
      }
      this.emit();
      if (this.velocity !== 0) {
        this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity;
          this.velocity = 0;
          this.isScrolling = false;
          this.emit();
        }, 400);
      }
    }
  };
  reset() {
    this.isLocked = false;
    this.isScrolling = false;
    this.animatedScroll = this.targetScroll = this.actualScroll;
    this.lastVelocity = this.velocity = 0;
    this.animate.stop();
  }
  /**
   * Start lenis scroll after it has been stopped
   */
  start() {
    if (!this.isStopped) return;
    this.reset();
    this.isStopped = false;
  }
  /**
   * Stop lenis scroll
   */
  stop() {
    if (this.isStopped) return;
    this.reset();
    this.isStopped = true;
  }
  /**
   * RequestAnimationFrame for lenis
   *
   * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
   */
  raf = (time) => {
    const deltaTime = time - (this.time || time);
    this.time = time;
    this.animate.advance(deltaTime * 1e-3);
    if (this.options.autoRaf) {
      this.__rafID = requestAnimationFrame(this.raf);
    }
  };
  /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */
  scrollTo(target, {
    offset = 0,
    immediate = false,
    lock = false,
    duration = this.options.duration,
    easing = this.options.easing,
    lerp: lerp2 = this.options.lerp,
    onStart,
    onComplete,
    force = false,
    // scroll even if stopped
    programmatic = true,
    // called from outside of the class
    userData
  } = {}) {
    if ((this.isStopped || this.isLocked) && !force) return;
    if (typeof target === "string" && ["top", "left", "start"].includes(target)) {
      target = 0;
    } else if (typeof target === "string" && ["bottom", "right", "end"].includes(target)) {
      target = this.limit;
    } else {
      let node;
      if (typeof target === "string") {
        node = document.querySelector(target);
      } else if (target instanceof HTMLElement && target?.nodeType) {
        node = target;
      }
      if (node) {
        if (this.options.wrapper !== window) {
          const wrapperRect = this.rootElement.getBoundingClientRect();
          offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
        }
        const rect = node.getBoundingClientRect();
        target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
      }
    }
    if (typeof target !== "number") return;
    target += offset;
    target = Math.round(target);
    if (this.options.infinite) {
      if (programmatic) {
        this.targetScroll = this.animatedScroll = this.scroll;
      }
    } else {
      target = clamp(0, target, this.limit);
    }
    if (target === this.targetScroll) {
      onStart?.(this);
      onComplete?.(this);
      return;
    }
    this.userData = userData ?? {};
    if (immediate) {
      this.animatedScroll = this.targetScroll = target;
      this.setScroll(this.scroll);
      this.reset();
      this.preventNextNativeScrollEvent();
      this.emit();
      onComplete?.(this);
      this.userData = {};
      requestAnimationFrame(() => {
        this.dispatchScrollendEvent();
      });
      return;
    }
    if (!programmatic) {
      this.targetScroll = target;
    }
    this.animate.fromTo(this.animatedScroll, target, {
      duration,
      easing,
      lerp: lerp2,
      onStart: () => {
        if (lock) this.isLocked = true;
        this.isScrolling = "smooth";
        onStart?.(this);
      },
      onUpdate: (value, completed) => {
        this.isScrolling = "smooth";
        this.lastVelocity = this.velocity;
        this.velocity = value - this.animatedScroll;
        this.direction = Math.sign(this.velocity);
        this.animatedScroll = value;
        this.setScroll(this.scroll);
        if (programmatic) {
          this.targetScroll = value;
        }
        if (!completed) this.emit();
        if (completed) {
          this.reset();
          this.emit();
          onComplete?.(this);
          this.userData = {};
          requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          this.preventNextNativeScrollEvent();
        }
      }
    });
  }
  preventNextNativeScrollEvent() {
    this._preventNextNativeScrollEvent = true;
    requestAnimationFrame(() => {
      this._preventNextNativeScrollEvent = false;
    });
  }
  /**
   * The root element on which lenis is instanced
   */
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  /**
   * The limit which is the maximum scroll value
   */
  get limit() {
    if (this.options.__experimental__naiveDimensions) {
      if (this.isHorizontal) {
        return this.rootElement.scrollWidth - this.rootElement.clientWidth;
      } else {
        return this.rootElement.scrollHeight - this.rootElement.clientHeight;
      }
    } else {
      return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
  }
  /**
   * Whether or not the scroll is horizontal
   */
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  /**
   * The actual scroll value
   */
  get actualScroll() {
    const wrapper = this.options.wrapper;
    return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
  }
  /**
   * The current scroll value
   */
  get scroll() {
    return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  /**
   * The progress of the scroll relative to the limit
   */
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  /**
   * Current scroll state
   */
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(value) {
    if (this._isScrolling !== value) {
      this._isScrolling = value;
      this.updateClassName();
    }
  }
  /**
   * Check if lenis is stopped
   */
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(value) {
    if (this._isStopped !== value) {
      this._isStopped = value;
      this.updateClassName();
    }
  }
  /**
   * Check if lenis is locked
   */
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(value) {
    if (this._isLocked !== value) {
      this._isLocked = value;
      this.updateClassName();
    }
  }
  /**
   * Check if lenis is smooth scrolling
   */
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  /**
   * The class name applied to the wrapper element
   */
  get className() {
    let className = "lenis";
    if (this.isStopped) className += " lenis-stopped";
    if (this.isLocked) className += " lenis-locked";
    if (this.isScrolling) className += " lenis-scrolling";
    if (this.isScrolling === "smooth") className += " lenis-smooth";
    return className;
  }
  updateClassName() {
    this.cleanUpClassName();
    this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
  }
};

//# sourceMappingURL=lenis.mjs.map

/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animate: () => (/* binding */ animate),
/* harmony export */   createScopedAnimate: () => (/* binding */ createScopedAnimate)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_animation_controls_Group_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/controls/Group.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/Group.mjs");
/* harmony import */ var _sequence_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/sequence.mjs");
/* harmony import */ var _subject_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs");





function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */
function createScopedAnimate(scope) {
    /**
     * Implementation
     */
    function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        if (isSequence(subjectOrSequence)) {
            animations = (0,_sequence_mjs__WEBPACK_IMPORTED_MODULE_0__.animateSequence)(subjectOrSequence, optionsOrKeyframes, scope);
        }
        else {
            animations = (0,_subject_mjs__WEBPACK_IMPORTED_MODULE_1__.animateSubject)(subjectOrSequence, optionsOrKeyframes, options, scope);
        }
        const animation = new _motion_dom_dist_es_animation_controls_Group_mjs__WEBPACK_IMPORTED_MODULE_2__.GroupPlaybackControls(animations);
        if (scope) {
            scope.animations.push(animation);
        }
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveSubjects: () => (/* binding */ resolveSubjects)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/utils/resolve-elements.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs");
/* harmony import */ var _utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-dom-keyframes.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs");




function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (typeof subject === "string" && (0,_utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.isDOMKeyframes)(keyframes)) {
        return (0,_motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveElements)(subject, scope, selectorCache);
    }
    else if (subject instanceof NodeList) {
        return Array.from(subject);
    }
    else if (Array.isArray(subject)) {
        return subject;
    }
    else {
        return [subject];
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/sequence.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/sequence.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSequence: () => (/* binding */ animateSequence)
/* harmony export */ });
/* harmony import */ var _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/spring/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _sequence_create_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sequence/create.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/create.mjs");
/* harmony import */ var _subject_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs");




function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = (0,_sequence_create_mjs__WEBPACK_IMPORTED_MODULE_0__.createAnimationsFromSequence)(sequence, options, scope, { spring: _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_1__.spring });
    animationDefinitions.forEach(({ keyframes, transition }, subject) => {
        animations.push(...(0,_subject_mjs__WEBPACK_IMPORTED_MODULE_2__.animateSubject)(subject, keyframes, transition));
    });
    return animations;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSingleValue: () => (/* binding */ animateSingleValue)
/* harmony export */ });
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs");




function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value : (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)(value);
    motionValue$1.start((0,_interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSubject: () => (/* binding */ animateSubject)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _render_store_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/store.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _interfaces_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interfaces/visual-element-target.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs");
/* harmony import */ var _utils_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/create-visual-element.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/create-visual-element.mjs");
/* harmony import */ var _utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-dom-keyframes.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs");
/* harmony import */ var _resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-subjects.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs");
/* harmony import */ var _single_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs");









function isSingleValue(subject, keyframes) {
    return ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(subject) ||
        typeof subject === "number" ||
        (typeof subject === "string" && !(0,_utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.isDOMKeyframes)(keyframes)));
}
/**
 * Implementation
 */
function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) {
        animations.push((0,_single_value_mjs__WEBPACK_IMPORTED_MODULE_2__.animateSingleValue)(subject, (0,_utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.isDOMKeyframes)(keyframes)
            ? keyframes.default || keyframes
            : keyframes, options ? options.default || options : options));
    }
    else {
        const subjects = (0,_resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveSubjects)(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_4__.invariant)(Boolean(numSubjects), "No valid elements provided.");
        for (let i = 0; i < numSubjects; i++) {
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element
                ? _utils_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__.createDOMVisualElement
                : _utils_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__.createObjectVisualElement;
            if (!_render_store_mjs__WEBPACK_IMPORTED_MODULE_6__.visualElementStore.has(thisSubject)) {
                createVisualElement(thisSubject);
            }
            const visualElement = _render_store_mjs__WEBPACK_IMPORTED_MODULE_6__.visualElementStore.get(thisSubject);
            const transition = { ...options };
            /**
             * Resolve stagger function if provided.
             */
            if ("delay" in transition &&
                typeof transition.delay === "function") {
                transition.delay = transition.delay(i, numSubjects);
            }
            animations.push(...(0,_interfaces_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_7__.animateTarget)(visualElement, { ...keyframes, transition }, {}));
        }
    }
    return animations;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcceleratedAnimation: () => (/* binding */ AcceleratedAnimation)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/time-conversion.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_waapi_utils_easing_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/easing.mjs");
/* harmony import */ var _motion_dom_dist_es_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/utils/supports/linear-easing.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs");
/* harmony import */ var _easing_anticipate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../easing/anticipate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs");
/* harmony import */ var _easing_back_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../easing/back.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs");
/* harmony import */ var _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../easing/circ.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _render_dom_DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/dom/DOMKeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs");
/* harmony import */ var _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs");
/* harmony import */ var _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainThreadAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs");
/* harmony import */ var _utils_accelerated_values_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/accelerated-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs");
/* harmony import */ var _waapi_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./waapi/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _waapi_utils_supports_waapi_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./waapi/utils/supports-waapi.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs");


















/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxDuration = 20000;
/**
 * Check if an animation can run natively via WAAPI or requires pregenerated keyframes.
 * WAAPI doesn't support spring or function easings so we run these as JS animation before
 * handing off.
 */
function requiresPregeneratedKeyframes(options) {
    return ((0,_motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_0__.isGenerator)(options.type) ||
        options.type === "spring" ||
        !(0,_motion_dom_dist_es_animation_waapi_utils_easing_mjs__WEBPACK_IMPORTED_MODULE_1__.isWaapiSupportedEasing)(options.ease));
}
function pregenerateKeyframes(keyframes, options) {
    /**
     * Create a main-thread animation to pregenerate keyframes.
     * We sample this at regular intervals to generate keyframes that we then
     * linearly interpolate between.
     */
    const sampleAnimation = new _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__.MainThreadAnimation({
        ...options,
        keyframes,
        repeat: 0,
        delay: 0,
        isGenerator: true,
    });
    let state = { done: false, value: keyframes[0] };
    const pregeneratedKeyframes = [];
    /**
     * Bail after 20 seconds of pre-generated keyframes as it's likely
     * we're heading for an infinite loop.
     */
    let t = 0;
    while (!state.done && t < maxDuration) {
        state = sampleAnimation.sample(t);
        pregeneratedKeyframes.push(state.value);
        t += sampleDelta;
    }
    return {
        times: undefined,
        keyframes: pregeneratedKeyframes,
        duration: t - sampleDelta,
        ease: "linear",
    };
}
const unsupportedEasingFunctions = {
    anticipate: _easing_anticipate_mjs__WEBPACK_IMPORTED_MODULE_3__.anticipate,
    backInOut: _easing_back_mjs__WEBPACK_IMPORTED_MODULE_4__.backInOut,
    circInOut: _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_5__.circInOut,
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
class AcceleratedAnimation extends _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__.BaseAnimation {
    constructor(options) {
        super(options);
        const { name, motionValue, element, keyframes } = this.options;
        this.resolver = new _render_dom_DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_7__.DOMKeyframesResolver(keyframes, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    initPlayback(keyframes, finalKeyframe) {
        let { duration = 300, times, ease, type, motionValue, name, startTime, } = this.options;
        /**
         * If element has since been unmounted, return false to indicate
         * the animation failed to initialised.
         */
        if (!motionValue.owner || !motionValue.owner.current) {
            return false;
        }
        /**
         * If the user has provided an easing function name that isn't supported
         * by WAAPI (like "anticipate"), we need to provide the corressponding
         * function. This will later get converted to a linear() easing function.
         */
        if (typeof ease === "string" &&
            (0,_motion_dom_dist_es_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_8__.supportsLinearEasing)() &&
            isUnsupportedEase(ease)) {
            ease = unsupportedEasingFunctions[ease];
        }
        /**
         * If this animation needs pre-generated keyframes then generate.
         */
        if (requiresPregeneratedKeyframes(this.options)) {
            const { onComplete, onUpdate, motionValue, element, ...options } = this.options;
            const pregeneratedAnimation = pregenerateKeyframes(keyframes, options);
            keyframes = pregeneratedAnimation.keyframes;
            // If this is a very short animation, ensure we have
            // at least two keyframes to animate between as older browsers
            // can't animate between a single keyframe.
            if (keyframes.length === 1) {
                keyframes[1] = keyframes[0];
            }
            duration = pregeneratedAnimation.duration;
            times = pregeneratedAnimation.times;
            ease = pregeneratedAnimation.ease;
            type = "keyframes";
        }
        const animation = (0,_waapi_index_mjs__WEBPACK_IMPORTED_MODULE_9__.startWaapiAnimation)(motionValue.owner.current, name, keyframes, { ...this.options, duration, times, ease });
        // Override the browser calculated startTime with one synchronised to other JS
        // and WAAPI animations starting this event loop.
        animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        if (this.pendingTimeline) {
            (0,_motion_dom_dist_es_animation_waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__.attachTimeline)(animation, this.pendingTimeline);
            this.pendingTimeline = undefined;
        }
        else {
            /**
             * Prefer the `onfinish` prop as it's more widely supported than
             * the `finished` promise.
             *
             * Here, we synchronously set the provided MotionValue to the end
             * keyframe. If we didn't, when the WAAPI animation is finished it would
             * be removed from the element which would then revert to its old styles.
             */
            animation.onfinish = () => {
                const { onComplete } = this.options;
                motionValue.set((0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete && onComplete();
                this.cancel();
                this.resolveFinishedPromise();
            };
        }
        return {
            animation,
            duration,
            times,
            type,
            ease,
            keyframes: keyframes,
        };
    }
    get duration() {
        const { resolved } = this;
        if (!resolved)
            return 0;
        const { duration } = resolved;
        return (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(duration);
    }
    get time() {
        const { resolved } = this;
        if (!resolved)
            return 0;
        const { animation } = resolved;
        return (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(animation.currentTime || 0);
    }
    set time(newTime) {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.currentTime = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(newTime);
    }
    get speed() {
        const { resolved } = this;
        if (!resolved)
            return 1;
        const { animation } = resolved;
        return animation.playbackRate;
    }
    set speed(newSpeed) {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.playbackRate = newSpeed;
    }
    get state() {
        const { resolved } = this;
        if (!resolved)
            return "idle";
        const { animation } = resolved;
        return animation.playState;
    }
    get startTime() {
        const { resolved } = this;
        if (!resolved)
            return null;
        const { animation } = resolved;
        // Coerce to number as TypeScript incorrectly types this
        // as CSSNumberish
        return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(timeline) {
        if (!this._resolved) {
            this.pendingTimeline = timeline;
        }
        else {
            const { resolved } = this;
            if (!resolved)
                return _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_13__.noop;
            const { animation } = resolved;
            (0,_motion_dom_dist_es_animation_waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__.attachTimeline)(animation, timeline);
        }
        return _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_13__.noop;
    }
    play() {
        if (this.isStopped)
            return;
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        if (animation.playState === "finished") {
            this.updateFinishedPromise();
        }
        animation.play();
    }
    pause() {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.pause();
    }
    stop() {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle")
            return;
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation, keyframes, duration, type, ease, times } = resolved;
        if (animation.playState === "idle" ||
            animation.playState === "finished") {
            return;
        }
        /**
         * WAAPI doesn't natively have any interruption capabilities.
         *
         * Rather than read commited styles back out of the DOM, we can
         * create a renderless JS animation and sample it twice to calculate
         * its current value, "previous" value, and therefore allow
         * Motion to calculate velocity for any subsequent animation.
         */
        if (this.time) {
            const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
            const sampleAnimation = new _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__.MainThreadAnimation({
                ...options,
                keyframes,
                duration,
                type,
                ease,
                times,
                isGenerator: true,
            });
            const sampleTime = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(this.time);
            motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
        }
        const { onStop } = this.options;
        onStop && onStop();
        this.cancel();
    }
    complete() {
        const { resolved } = this;
        if (!resolved)
            return;
        resolved.animation.finish();
    }
    cancel() {
        const { resolved } = this;
        if (!resolved)
            return;
        resolved.animation.cancel();
    }
    static supports(options) {
        const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
        if (!motionValue ||
            !motionValue.owner ||
            !(motionValue.owner.current instanceof HTMLElement)) {
            return false;
        }
        const { onUpdate, transformTemplate } = motionValue.owner.getProps();
        return ((0,_waapi_utils_supports_waapi_mjs__WEBPACK_IMPORTED_MODULE_14__.supportsWaapi)() &&
            name &&
            _utils_accelerated_values_mjs__WEBPACK_IMPORTED_MODULE_15__.acceleratedValues.has(name) &&
            /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */
            !onUpdate &&
            !transformTemplate &&
            !repeatDelay &&
            repeatType !== "mirror" &&
            damping !== 0 &&
            type !== "inertia");
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseAnimation: () => (/* binding */ BaseAnimation)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _utils_can_animate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/can-animate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");






/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */
const MAX_RESOLVE_DELAY = 40;
class BaseAnimation {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }) {
        // Track whether the animation has been stopped. Stopped animations won't restart.
        this.isStopped = false;
        this.hasAttemptedResolve = false;
        this.createdAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        this.options = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            ...options,
        };
        this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */
    calcStartTime() {
        if (!this.resolvedAt)
            return this.createdAt;
        return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY
            ? this.resolvedAt
            : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved() {
        if (!this._resolved && !this.hasAttemptedResolve) {
            (0,_render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__.flushKeyframeResolvers)();
        }
        return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(keyframes, finalKeyframe) {
        this.resolvedAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        this.hasAttemptedResolve = true;
        const { name, type, velocity, delay, onComplete, onUpdate, isGenerator, } = this.options;
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */
        if (!isGenerator && !(0,_utils_can_animate_mjs__WEBPACK_IMPORTED_MODULE_2__.canAnimate)(keyframes, name, type, velocity)) {
            // Finish immediately
            if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_3__.instantAnimationState.current || !delay) {
                onUpdate &&
                    onUpdate((0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_4__.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete && onComplete();
                this.resolveFinishedPromise();
                return;
            }
            // Finish after a delay
            else {
                this.options.duration = 0;
            }
        }
        const resolvedAnimation = this.initPlayback(keyframes, finalKeyframe);
        if (resolvedAnimation === false)
            return;
        this._resolved = {
            keyframes,
            finalKeyframe,
            ...resolvedAnimation,
        };
        this.onPostResolved();
    }
    onPostResolved() { }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
        return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
        this.options.type = "keyframes";
        this.options.ease = "linear";
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((resolve) => {
            this.resolveFinishedPromise = resolve;
        });
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainThreadAnimation: () => (/* binding */ MainThreadAnimation),
/* harmony export */   animateValue: () => (/* binding */ animateValue)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/time-conversion.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_mix_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/mix/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/pipe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/inertia.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs");
/* harmony import */ var _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/keyframes.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs");
/* harmony import */ var _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/spring/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs");
/* harmony import */ var _drivers_driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drivers/driver-frameloop.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");















const generators = {
    decay: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    inertia: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    tween: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    keyframes: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    spring: _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__.spring,
};
const percentToProgress = (percent) => percent / 100;
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */
class MainThreadAnimation extends _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_3__.BaseAnimation {
    constructor(options) {
        super(options);
        /**
         * The time at which the animation was paused.
         */
        this.holdTime = null;
        /**
         * The time at which the animation was cancelled.
         */
        this.cancelTime = null;
        /**
         * The current time of the animation.
         */
        this.currentTime = 0;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */
        this.playbackSpeed = 1;
        /**
         * The state of the animation to apply when the animation is resolved. This
         * allows calls to the public API to control the animation before it is resolved,
         * without us having to resolve it first.
         */
        this.pendingPlayState = "running";
        /**
         * The time at which the animation was started.
         */
        this.startTime = null;
        this.state = "idle";
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */
        this.stop = () => {
            this.resolver.cancel();
            this.isStopped = true;
            if (this.state === "idle")
                return;
            this.teardown();
            const { onStop } = this.options;
            onStop && onStop();
        };
        const { name, motionValue, element, keyframes } = this.options;
        const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_4__.KeyframeResolver;
        const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        this.resolver = new KeyframeResolver$1(keyframes, onResolved, name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten();
        // If we've already resolved the animation, re-initialise it
        if (this._resolved) {
            Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
        }
    }
    initPlayback(keyframes$1) {
        const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0, } = this.options;
        const generatorFactory = (0,_motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_5__.isGenerator)(type)
            ? type
            : generators[type] || _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes;
        /**
         * If our generator doesn't support mixing numbers, we need to replace keyframes with
         * [0, 100] and then make a function that maps that to the actual keyframes.
         *
         * 100 is chosen instead of 1 as it works nicer with spring animations.
         */
        let mapPercentToKeyframes;
        let mirroredGenerator;
        if (generatorFactory !== _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes &&
            typeof keyframes$1[0] !== "number") {
            if (true) {
                (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
            }
            mapPercentToKeyframes = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__.pipe)(percentToProgress, (0,_utils_mix_index_mjs__WEBPACK_IMPORTED_MODULE_8__.mix)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [0, 100];
        }
        const generator = generatorFactory({ ...this.options, keyframes: keyframes$1 });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */
        if (repeatType === "mirror") {
            mirroredGenerator = generatorFactory({
                ...this.options,
                keyframes: [...keyframes$1].reverse(),
                velocity: -velocity,
            });
        }
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */
        if (generator.calculatedDuration === null) {
            generator.calculatedDuration = (0,_motion_dom_dist_es_animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_9__.calcGeneratorDuration)(generator);
        }
        const { calculatedDuration } = generator;
        const resolvedDuration = calculatedDuration + repeatDelay;
        const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
        return {
            generator,
            mirroredGenerator,
            mapPercentToKeyframes,
            calculatedDuration,
            resolvedDuration,
            totalDuration,
        };
    }
    onPostResolved() {
        const { autoplay = true } = this.options;
        this.play();
        if (this.pendingPlayState === "paused" || !autoplay) {
            this.pause();
        }
        else {
            this.state = this.pendingPlayState;
        }
    }
    tick(timestamp, sample = false) {
        const { resolved } = this;
        // If the animations has failed to resolve, return the final keyframe.
        if (!resolved) {
            const { keyframes } = this.options;
            return { done: true, value: keyframes[keyframes.length - 1] };
        }
        const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes, calculatedDuration, totalDuration, resolvedDuration, } = resolved;
        if (this.startTime === null)
            return generator.next(0);
        const { delay, repeat, repeatType, repeatDelay, onUpdate } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (this.speed > 0) {
            this.startTime = Math.min(this.startTime, timestamp);
        }
        else if (this.speed < 0) {
            this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        }
        // Update currentTime
        if (sample) {
            this.currentTime = timestamp;
        }
        else if (this.holdTime !== null) {
            this.currentTime = this.holdTime;
        }
        else {
            // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
            // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
            // example.
            this.currentTime =
                Math.round(timestamp - this.startTime) * this.speed;
        }
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.speed >= 0 ? 1 : -1);
        const isInDelayPhase = this.speed >= 0
            ? timeWithoutDelay < 0
            : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = totalDuration;
        }
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            elapsed = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__.clamp)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes[0] }
            : frameGenerator.next(elapsed);
        if (mapPercentToKeyframes) {
            state.value = mapPercentToKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done =
                this.speed >= 0
                    ? this.currentTime >= totalDuration
                    : this.currentTime <= 0;
        }
        const isAnimationFinished = this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && done));
        if (isAnimationFinished && finalKeyframe !== undefined) {
            state.value = (0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__.getFinalKeyframe)(keyframes, this.options, finalKeyframe);
        }
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            this.finish();
        }
        return state;
    }
    get duration() {
        const { resolved } = this;
        return resolved ? (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(resolved.calculatedDuration) : 0;
    }
    get time() {
        return (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(this.currentTime);
    }
    set time(newTime) {
        newTime = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(newTime);
        this.currentTime = newTime;
        if (this.holdTime !== null || this.speed === 0) {
            this.holdTime = newTime;
        }
        else if (this.driver) {
            this.startTime = this.driver.now() - newTime / this.speed;
        }
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        const hasChanged = this.playbackSpeed !== newSpeed;
        this.playbackSpeed = newSpeed;
        if (hasChanged) {
            this.time = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(this.currentTime);
        }
    }
    play() {
        if (!this.resolver.isScheduled) {
            this.resolver.resume();
        }
        if (!this._resolved) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped)
            return;
        const { driver = _drivers_driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_13__.frameloopDriver, onPlay, startTime } = this.options;
        if (!this.driver) {
            this.driver = driver((timestamp) => this.tick(timestamp));
        }
        onPlay && onPlay();
        const now = this.driver.now();
        if (this.holdTime !== null) {
            this.startTime = now - this.holdTime;
        }
        else if (!this.startTime) {
            this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        }
        else if (this.state === "finished") {
            this.startTime = now;
        }
        if (this.state === "finished") {
            this.updateFinishedPromise();
        }
        this.cancelTime = this.startTime;
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        this.state = "running";
        this.driver.start();
    }
    pause() {
        var _a;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        this.state = "paused";
        this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
    complete() {
        if (this.state !== "running") {
            this.play();
        }
        this.pendingPlayState = this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.teardown();
        this.state = "finished";
        const { onComplete } = this.options;
        onComplete && onComplete();
    }
    cancel() {
        if (this.cancelTime !== null) {
            this.tick(this.cancelTime);
        }
        this.teardown();
        this.updateFinishedPromise();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        this.startTime = this.cancelTime = null;
        this.resolver.cancel();
    }
    stopDriver() {
        if (!this.driver)
            return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(time) {
        this.startTime = 0;
        return this.tick(time, true);
    }
}
// Legacy interface
function animateValue(options) {
    return new MainThreadAnimation(options);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   frameloopDriver: () => (/* binding */ frameloopDriver)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");



const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(passTimestamp, true),
        stop: () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => (_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing ? _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp : _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__.time.now()),
    };
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   acceleratedValues: () => (/* binding */ acceleratedValues)
/* harmony export */ });
/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
]);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canAnimate: () => (/* binding */ canAnimate)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is-animatable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animatable.mjs");




function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1)
        return true;
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] !== current)
            return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */
    const originKeyframe = keyframes[0];
    if (originKeyframe === null)
        return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */
    if (name === "display" || name === "visibility")
        return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimatable)(originKeyframe, name);
    const isTargetAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimatable)(targetKeyframe, name);
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) {
        return false;
    }
    return (hasKeyframesChanged(keyframes) ||
        ((type === "spring" || (0,_motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__.isGenerator)(type)) && velocity));
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startWaapiAnimation: () => (/* binding */ startWaapiAnimation)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_animation_waapi_utils_easing_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/easing.mjs");



function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeInOut", times, } = {}) {
    const keyframeOptions = { [valueName]: keyframes };
    if (times)
        keyframeOptions.offset = times;
    const easing = (0,_motion_dom_dist_es_animation_waapi_utils_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.mapEasingToNativeEasing)(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    });
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFinalKeyframe: () => (/* binding */ getFinalKeyframe)
/* harmony export */ });
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined
        ? resolvedKeyframes[index]
        : finalKeyframe;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsWaapi: () => (/* binding */ supportsWaapi)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../motion-utils/dist/es/memo.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs");



const supportsWaapi = /*@__PURE__*/ (0,_motion_utils_dist_es_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inertia: () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var _spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spring/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/velocity.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs");



function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = (0,_spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__.spring)({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__.calcGeneratorVelocity)(calcLatest, t, state.value), // TODO: This should be passing * 1000
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEasing: () => (/* binding */ defaultEasing),
/* harmony export */   keyframes: () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/ease.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../easing/utils/is-easing-array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs");
/* harmony import */ var _easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../easing/utils/map.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/map.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/interpolate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/offsets/default.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs");
/* harmony import */ var _utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/offsets/time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs");







function defaultEasing(values, easing) {
    return values.map(() => easing || _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__.easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = (0,_easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__.isEasingArray)(ease)
        ? ease.map(_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)
        : (0,_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = (0,_utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__.convertOffsetToTimes)(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   springDefaults: () => (/* binding */ springDefaults)
/* harmony export */ });
const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800, // in ms
    bounce: 0.3,
    visualDuration: 0.3, // in seconds
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2,
    },
    restDelta: {
        granular: 0.005,
        default: 0.5,
    },
    // Limits
    minDuration: 0.01, // in seconds
    maxDuration: 10.0, // in seconds
    minDamping: 0.05,
    maxDamping: 1,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAngularFreq: () => (/* binding */ calcAngularFreq),
/* harmony export */   findSpring: () => (/* binding */ findSpring)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/time-conversion.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs");





const safeMin = 0.001;
function findSpring({ duration = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.duration, bounce = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.bounce, velocity = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.velocity, mass = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass, }) {
    let envelope;
    let derivative;
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.warning)(duration <= (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__.clamp)(_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.minDamping, _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.maxDamping, dampingRatio);
    duration = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__.clamp)(_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.minDuration, _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.maxDuration, (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.stiffness,
            damping: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.damping,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spring: () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/time-conversion.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_waapi_utils_linear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/animation/waapi/utils/linear.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/linear.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/velocity.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs");
/* harmony import */ var _find_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs");









const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.velocity,
        stiffness: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.stiffness,
        damping: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.damping,
        mass: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = (2 * Math.PI) / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 *
                (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__.clamp)(0.05, 1, 1 - (options.bounce || 0)) *
                Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass,
                stiffness,
                damping,
            };
        }
        else {
            const derived = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_2__.findSpring)(options);
            springOptions = {
                ...springOptions,
                ...derived,
                mass: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass,
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.visualDuration, bounce = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object"
        ? {
            visualDuration: optionsOrVisualDuration,
            keyframes: [0, 1],
            bounce,
        }
        : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration, } = getSpringOptions({
        ...options,
        velocity: -(0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsToSeconds)(options.velocity || 0),
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale
        ? _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restSpeed.granular
        : _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale
        ? _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restDelta.granular
        : _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_2__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */
                if (dampingRatio < 1) {
                    currentVelocity =
                        t === 0
                            ? (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.secondsToMilliseconds)(initialVelocity)
                            : (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_4__.calcGeneratorVelocity)(resolveSpring, t, current);
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
        toString: () => {
            const calculatedDuration = Math.min((0,_motion_dom_dist_es_animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__.calcGeneratorDuration)(generator), _motion_dom_dist_es_animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__.maxGeneratorDuration);
            const easing = (0,_motion_dom_dist_es_animation_waapi_utils_linear_mjs__WEBPACK_IMPORTED_MODULE_6__.generateLinearEasing)((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        },
    };
    return generator;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorVelocity: () => (/* binding */ calcGeneratorVelocity)
/* harmony export */ });
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/velocity-per-second.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs");


const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateMotionValue: () => (/* binding */ animateMotionValue)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_animation_controls_Group_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/controls/Group.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/Group.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs");
/* harmony import */ var _motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/time-conversion.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/GlobalConfig.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animators/AcceleratedAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs");
/* harmony import */ var _animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../animators/MainThreadAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs");
/* harmony import */ var _animators_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animators/waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/default-transitions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs");
/* harmony import */ var _utils_is_transition_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-transition-defined.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs");













const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = (0,_motion_dom_dist_es_animation_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition, name) || {};
    /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */
    const delay = valueTransition.delay || transition.delay || 0;
    /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */
    let { elapsed = 0 } = transition;
    elapsed = elapsed - (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(delay);
    let options = {
        keyframes: Array.isArray(target) ? target : [null, target],
        ease: "easeOut",
        velocity: value.getVelocity(),
        ...valueTransition,
        delay: -elapsed,
        onUpdate: (v) => {
            value.set(v);
            valueTransition.onUpdate && valueTransition.onUpdate(v);
        },
        onComplete: () => {
            onComplete();
            valueTransition.onComplete && valueTransition.onComplete();
        },
        name,
        motionValue: value,
        element: isHandoff ? undefined : element,
    };
    /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */
    if (!(0,_utils_is_transition_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.isTransitionDefined)(valueTransition)) {
        options = {
            ...options,
            ...(0,_utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultTransition)(name, options),
        };
    }
    /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */
    if (options.duration) {
        options.duration = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.duration);
    }
    if (options.repeatDelay) {
        options.repeatDelay = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.repeatDelay);
    }
    if (options.from !== undefined) {
        options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false ||
        (options.duration === 0 && !options.repeatDelay)) {
        options.duration = 0;
        if (options.delay === 0) {
            shouldSkip = true;
        }
    }
    if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_4__.instantAnimationState.current ||
        _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_5__.MotionGlobalConfig.skipAnimations) {
        shouldSkip = true;
        options.duration = 0;
        options.delay = 0;
    }
    /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */
    if (shouldSkip && !isHandoff && value.get() !== undefined) {
        const finalKeyframe = (0,_animators_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_6__.getFinalKeyframe)(options.keyframes, valueTransition);
        if (finalKeyframe !== undefined) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_7__.frame.update(() => {
                options.onUpdate(finalKeyframe);
                options.onComplete();
            });
            // We still want to return some animation controls here rather
            // than returning undefined
            return new _motion_dom_dist_es_animation_controls_Group_mjs__WEBPACK_IMPORTED_MODULE_8__.GroupPlaybackControls([]);
        }
    }
    /**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    if (!isHandoff && _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__.AcceleratedAnimation.supports(options)) {
        return new _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__.AcceleratedAnimation(options);
    }
    else {
        return new _animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_10__.MainThreadAnimation(options);
    }
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateTarget: () => (/* binding */ animateTarget)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_animation_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs");
/* harmony import */ var _render_html_utils_keys_position_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/html/utils/keys-position.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-position.mjs");
/* harmony import */ var _render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/utils/setters.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/use-will-change/add-will-change.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs");
/* harmony import */ var _optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../optimized-appear/get-appear-id.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs");
/* harmony import */ var _motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");









/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
        const valueTarget = target[key];
        if (valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = {
            delay,
            ...(0,_motion_dom_dist_es_animation_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition || {}, key),
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = (0,_optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_1__.getOptimisedAppearId)(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame);
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0,_value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_3__.addValueToWillChange)(visualElement, key);
        value.start((0,_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.animateMotionValue)(key, value, valueTarget, visualElement.shouldReduceMotion && _render_html_utils_keys_position_mjs__WEBPACK_IMPORTED_MODULE_5__.positionalKeys.has(key)
            ? { type: false }
            : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) {
            animations.push(animation);
        }
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(() => {
                transitionEnd && (0,_render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__.setTarget)(visualElement, transitionEnd);
            });
        });
    }
    return animations;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/data-id.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/data-id.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optimizedAppearDataAttribute: () => (/* binding */ optimizedAppearDataAttribute),
/* harmony export */   optimizedAppearDataId: () => (/* binding */ optimizedAppearDataId)
/* harmony export */ });
/* harmony import */ var _render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/camel-to-dash.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");


const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0,_render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__.camelToDash)(optimizedAppearDataId);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOptimisedAppearId: () => (/* binding */ getOptimisedAppearId)
/* harmony export */ });
/* harmony import */ var _data_id_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-id.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/data-id.mjs");


function getOptimisedAppearId(visualElement) {
    return visualElement.props[_data_id_mjs__WEBPACK_IMPORTED_MODULE_0__.optimizedAppearDataAttribute];
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/create.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/create.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnimationsFromSequence: () => (/* binding */ createAnimationsFromSequence),
/* harmony export */   getValueTransition: () => (/* binding */ getValueTransition)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/progress.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs");
/* harmony import */ var _motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/time-conversion.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_generators_utils_create_generator_easing_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs");
/* harmony import */ var _motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _easing_utils_get_easing_for_segment_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../easing/utils/get-easing-for-segment.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/offsets/default.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs");
/* harmony import */ var _utils_offsets_fill_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/offsets/fill.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _animate_resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../animate/resolve-subjects.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs");
/* harmony import */ var _utils_calc_repeat_duration_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/calc-repeat-duration.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs");
/* harmony import */ var _utils_calc_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/calc-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs");
/* harmony import */ var _utils_edit_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/edit.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/edit.mjs");
/* harmony import */ var _utils_normalize_times_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/normalize-times.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs");
/* harmony import */ var _utils_sort_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/sort.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/sort.mjs");
















const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */
    for (let i = 0; i < sequence.length; i++) {
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */
        if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        }
        else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0,_utils_calc_time_mjs__WEBPACK_IMPORTED_MODULE_0__.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */
        if (transition.at !== undefined) {
            currentTime = (0,_utils_calc_time_mjs__WEBPACK_IMPORTED_MODULE_0__.calcNextTime)(currentTime, transition.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */
        let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_1__.defaultOffset)(valueKeyframesAsList), type = "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */
            const calculatedDelay = typeof delay === "function"
                ? delay(elementIndex, numSubjects)
                : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */
            const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0,_motion_dom_dist_es_animation_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__.isGenerator)(type)
                ? type
                : generators === null || generators === void 0 ? void 0 : generators[type];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */
                let absoluteDelta = 100;
                if (numKeyframes === 2 &&
                    isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = { ...remainingTransition };
                if (duration !== undefined) {
                    springTransition.duration = (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.secondsToMilliseconds)(duration);
                }
                const springEasing = (0,_motion_dom_dist_es_animation_generators_utils_create_generator_easing_mjs__WEBPACK_IMPORTED_MODULE_4__.createGeneratorEasing)(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration !== null && duration !== void 0 ? duration : (duration = defaultDuration);
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */
            if (times.length === 1 && times[0] === 0) {
                times[1] = 1;
            }
            /**
             * Fill out if offset if fewer offsets than keyframes
             */
            const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0,_utils_offsets_fill_mjs__WEBPACK_IMPORTED_MODULE_5__.fillOffset)(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */
            valueKeyframesAsList.length === 1 &&
                valueKeyframesAsList.unshift(null);
            /**
             * Handle repeat options
             */
            if (repeat) {
                (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20");
                duration = (0,_utils_calc_repeat_duration_mjs__WEBPACK_IMPORTED_MODULE_7__.calculateRepeatDuration)(duration, repeat);
                const originalKeyframes = [...valueKeyframesAsList];
                const originalTimes = [...times];
                ease = Array.isArray(ease) ? [...ease] : [ease];
                const originalEase = [...ease];
                for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
                    valueKeyframesAsList.push(...originalKeyframes);
                    for (let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++) {
                        times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
                        ease.push(keyframeIndex === 0
                            ? "linear"
                            : (0,_easing_utils_get_easing_for_segment_mjs__WEBPACK_IMPORTED_MODULE_8__.getEasingForSegment)(originalEase, keyframeIndex - 1));
                    }
                }
                (0,_utils_normalize_times_mjs__WEBPACK_IMPORTED_MODULE_9__.normalizeTimes)(times, repeat);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */
            (0,_utils_edit_mjs__WEBPACK_IMPORTED_MODULE_10__.addKeyframes)(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_11__.isMotionValue)(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        }
        else {
            const subjects = (0,_animate_resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_12__.resolveSubjects)(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */
            for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
                /**
                 * Cast necessary, but we know these are of this type
                 */
                keyframes = keyframes;
                transition = transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for (const key in keyframes) {
                    resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
                }
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */
    sequences.forEach((valueSequences, element) => {
        for (const key in valueSequences) {
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */
            valueSequence.sort(_utils_sort_mjs__WEBPACK_IMPORTED_MODULE_13__.compareByTime);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */
            for (let i = 0; i < valueSequence.length; i++) {
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0,_motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_14__.progress)(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */
            if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */
            if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) {
                animationDefinitions.set(element, {
                    keyframes: {},
                    transition: {},
                });
            }
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            definition.transition[key] = {
                ...defaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition,
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name])
        sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [keyframes];
}
function getValueTransition(transition, key) {
    return transition && transition[key]
        ? {
            ...transition,
            ...transition[key],
        }
        : { ...transition };
}
const isNumber = (keyframe) => typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes) => keyframes.every(isNumber);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateRepeatDuration: () => (/* binding */ calculateRepeatDuration)
/* harmony export */ });
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
    return duration * (repeat + 1);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcNextTime: () => (/* binding */ calcNextTime)
/* harmony export */ });
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */
function calcNextTime(current, next, prev, labels) {
    var _a;
    if (typeof next === "number") {
        return next;
    }
    else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    }
    else if (next === "<") {
        return prev;
    }
    else {
        return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/edit.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/edit.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addKeyframes: () => (/* binding */ addKeyframes),
/* harmony export */   eraseKeyframes: () => (/* binding */ eraseKeyframes)
/* harmony export */ });
/* harmony import */ var _easing_utils_get_easing_for_segment_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../easing/utils/get-easing-for-segment.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs");
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs");
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/mix/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");




function eraseKeyframes(sequence, startTime, endTime) {
    for (let i = 0; i < sequence.length; i++) {
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */
    eraseKeyframes(sequence, startTime, endTime);
    for (let i = 0; i < keyframes.length; i++) {
        sequence.push({
            value: keyframes[i],
            at: (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(startTime, endTime, offset[i]),
            easing: (0,_easing_utils_get_easing_for_segment_mjs__WEBPACK_IMPORTED_MODULE_2__.getEasingForSegment)(easing, i),
        });
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeTimes: () => (/* binding */ normalizeTimes)
/* harmony export */ });
/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 */
function normalizeTimes(times, repeat) {
    for (let i = 0; i < times.length; i++) {
        times[i] = times[i] / (repeat + 1);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/sort.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/sort.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareByTime: () => (/* binding */ compareByTime)
/* harmony export */ });
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null)
            return 1;
        if (b.value === null)
            return -1;
        return 0;
    }
    else {
        return a.at - b.at;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/create-visual-element.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/create-visual-element.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOMVisualElement: () => (/* binding */ createDOMVisualElement),
/* harmony export */   createObjectVisualElement: () => (/* binding */ createObjectVisualElement)
/* harmony export */ });
/* harmony import */ var _render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/is-svg-element.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs");
/* harmony import */ var _render_svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/svg/SVGVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs");
/* harmony import */ var _render_html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/html/HTMLVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs");
/* harmony import */ var _render_store_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/store.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _render_object_ObjectVisualElement_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/object/ObjectVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/object/ObjectVisualElement.mjs");






function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {},
            },
            latestValues: {},
        },
    };
    const node = (0,_render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGElement)(element)
        ? new _render_svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_1__.SVGVisualElement(options)
        : new _render_html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__.HTMLVisualElement(options);
    node.mount(element);
    _render_store_mjs__WEBPACK_IMPORTED_MODULE_3__.visualElementStore.set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {},
            },
            latestValues: {},
        },
    };
    const node = new _render_object_ObjectVisualElement_mjs__WEBPACK_IMPORTED_MODULE_4__.ObjectVisualElement(options);
    node.mount(subject);
    _render_store_mjs__WEBPACK_IMPORTED_MODULE_3__.visualElementStore.set(subject, node);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultTransition: () => (/* binding */ getDefaultTransition)
/* harmony export */ });
/* harmony import */ var _render_html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");


const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (_render_html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animatable.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animatable.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimatable: () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (value, name) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (name === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimationControls: () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return (v !== null &&
        typeof v === "object" &&
        typeof v.start === "function");
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDOMKeyframes: () => (/* binding */ isDOMKeyframes)
/* harmony export */ });
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isKeyframesTarget: () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNone: () => (/* binding */ isNone)
/* harmony export */ });
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is-zero-value-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs");


function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__.isZeroValueString)(value);
    }
    else {
        return true;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isTransitionDefined: () => (/* binding */ isTransitionDefined)
/* harmony export */ });
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/stagger.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOriginIndex: () => (/* binding */ getOriginIndex),
/* harmony export */   stagger: () => (/* binding */ stagger)
/* harmony export */ });
/* harmony import */ var _easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/utils/map.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/map.mjs");


function getOriginIndex(from, total) {
    if (from === "first") {
        return 0;
    }
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function stagger(duration = 0.1, { startDelay = 0, from = 0, ease } = {}) {
    return (i, total) => {
        const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (ease) {
            const maxDelay = total * duration;
            const easingFunction = (0,_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_0__.easingDefinitionToFunction)(ease);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return startDelay + delay;
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anticipate: () => (/* binding */ anticipate)
/* harmony export */ });
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs");


const anticipate = (p) => (p *= 2) < 1 ? 0.5 * (0,_back_mjs__WEBPACK_IMPORTED_MODULE_0__.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backIn: () => (/* binding */ backIn),
/* harmony export */   backInOut: () => (/* binding */ backInOut),
/* harmony export */   backOut: () => (/* binding */ backOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs");




const backOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__.reverseEasing)(backOut);
const backInOut = /*@__PURE__*/ (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__.mirrorEasing)(backIn);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circIn: () => (/* binding */ circIn),
/* harmony export */   circInOut: () => (/* binding */ circInOut),
/* harmony export */   circOut: () => (/* binding */ circOut)
/* harmony export */ });
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs");



const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
const circInOut = (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__.mirrorEasing)(circIn);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezier: () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");



/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easeIn: () => (/* binding */ easeIn),
/* harmony export */   easeInOut: () => (/* binding */ easeInOut),
/* harmony export */   easeOut: () => (/* binding */ easeOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs");


const easeIn = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 0.58, 1);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mirrorEasing: () => (/* binding */ mirrorEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reverseEasing: () => (/* binding */ reverseEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEasingForSegment: () => (/* binding */ getEasingForSegment)
/* harmony export */ });
/* harmony import */ var _utils_wrap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wrap.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/wrap.mjs");
/* harmony import */ var _is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-easing-array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs");



function getEasingForSegment(easing, i) {
    return (0,_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_0__.isEasingArray)(easing) ? easing[(0,_utils_wrap_mjs__WEBPACK_IMPORTED_MODULE_1__.wrap)(0, easing.length, i)] : easing;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEasingArray: () => (/* binding */ isEasingArray)
/* harmony export */ });
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/map.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/map.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easingDefinitionToFunction: () => (/* binding */ easingDefinitionToFunction)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _motion_dom_dist_es_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/utils/is-bezier-definition.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/is-bezier-definition.mjs");
/* harmony import */ var _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../anticipate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs");
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../back.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs");
/* harmony import */ var _circ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../circ.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cubic-bezier.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _ease_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ease.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");









const easingLookup = {
    linear: _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop,
    easeIn: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circIn,
    circInOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circInOut,
    circOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circOut,
    backIn: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backIn,
    backInOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backInOut,
    backOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backOut,
    anticipate: _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__.anticipate,
};
const easingDefinitionToFunction = (definition) => {
    if ((0,_motion_dom_dist_es_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isBezierDefinition)(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_7__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderBatcher: () => (/* binding */ createRenderBatcher),
/* harmony export */   stepsOrder: () => (/* binding */ stepsOrder)
/* harmony export */ });
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/GlobalConfig.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _render_step_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-step.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs");



const stepsOrder = [
    "read", // Read
    "resolveKeyframes", // Write/Read/Write/Read
    "update", // Compute
    "preRender", // Compute
    "render", // Write
    "postRender", // Compute
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    const flagRunNextFrame = () => (runNextFrame = true);
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = (0,_render_step_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderStep)(flagRunNextFrame);
        return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = () => {
        const timestamp = _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionGlobalConfig.useManualTiming
            ? state.timestamp
            : performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed
            ? 1000 / 60
            : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        read.process(state);
        resolveKeyframes.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => {
        for (let i = 0; i < stepsOrder.length; i++) {
            steps[stepsOrder[i]].cancel(process);
        }
    };
    return { schedule, cancel, state, steps };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelFrame: () => (/* binding */ cancelFrame),
/* harmony export */   frame: () => (/* binding */ frame),
/* harmony export */   frameData: () => (/* binding */ frameData),
/* harmony export */   frameSteps: () => (/* binding */ frameSteps)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _batcher_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batcher.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs");




const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps, } = (0,_batcher_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop, true);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderStep: () => (/* binding */ createRenderStep)
/* harmony export */ });
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (!queue.has(callback))
                queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [nextFrame, thisFrame];
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            // Clear the frame so no callbacks remain. This is to avoid
            // memory leaks should this render step not run for a while.
            thisFrame.clear();
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   time: () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/GlobalConfig.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");



let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */
const time = {
    now: () => {
        if (now === undefined) {
            time.set(_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing || _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionGlobalConfig.useManualTiming
                ? _frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp
                : performance.now());
        }
        return now;
    },
    set: (newTime) => {
        now = newTime;
        queueMicrotask(clearTime);
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureDefinitions: () => (/* binding */ featureDefinitions)
/* harmony export */ });
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isForcedMotionValue: () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/styles/scale-correction.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _render_html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");



function isForcedMotionValue(key, { layout, layoutId }) {
    return (_render_html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__.scaleCorrectors[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertBoundingBoxToBox: () => (/* binding */ convertBoundingBoxToBox),
/* harmony export */   convertBoxToBoundingBox: () => (/* binding */ convertBoxToBoundingBox),
/* harmony export */   transformBoxPoints: () => (/* binding */ transformBoxPoints)
/* harmony export */ });
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAxisDelta: () => (/* binding */ applyAxisDelta),
/* harmony export */   applyBoxDelta: () => (/* binding */ applyBoxDelta),
/* harmony export */   applyPointDelta: () => (/* binding */ applyPointDelta),
/* harmony export */   applyTreeDeltas: () => (/* binding */ applyTreeDeltas),
/* harmony export */   scalePoint: () => (/* binding */ scalePoint),
/* harmony export */   transformAxis: () => (/* binding */ transformAxis),
/* harmony export */   transformBox: () => (/* binding */ transformBox),
/* harmony export */   translateAxis: () => (/* binding */ translateAxis)
/* harmony export */ });
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs");



/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const { visualElement } = node.options;
        if (visualElement &&
            visualElement.props.style &&
            visualElement.props.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.hasTransform)(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    if (treeScale.x < TREE_SCALE_SNAP_MAX &&
        treeScale.x > TREE_SCALE_SNAP_MIN) {
        treeScale.x = 1.0;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX &&
        treeScale.y > TREE_SCALE_SNAP_MIN) {
        treeScale.y = 1.0;
    }
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAxis: () => (/* binding */ createAxis),
/* harmony export */   createAxisDelta: () => (/* binding */ createAxisDelta),
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   createDelta: () => (/* binding */ createDelta)
/* harmony export */ });
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-correction.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-correction.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScaleCorrector: () => (/* binding */ addScaleCorrector),
/* harmony export */   scaleCorrectors: () => (/* binding */ scaleCorrectors)
/* harmony export */ });
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   has2DTranslate: () => (/* binding */ has2DTranslate),
/* harmony export */   hasScale: () => (/* binding */ hasScale),
/* harmony export */   hasTransform: () => (/* binding */ hasTransform)
/* harmony export */ });
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY ||
        values.skewX ||
        values.skewY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   measurePageBox: () => (/* binding */ measurePageBox),
/* harmony export */   measureViewportBox: () => (/* binding */ measureViewportBox)
/* harmony export */ });
/* harmony import */ var _geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs");



function measureViewportBox(instance, transformPoint) {
    return (0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToBox)((0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.x, scroll.offset.x);
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualElement: () => (/* binding */ VisualElement)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../motion/features/definitions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../projection/geometry/models.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/is-numerical-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/is-zero-value-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs");
/* harmony import */ var _utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/reduced-motion/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs");
/* harmony import */ var _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/reduced-motion/state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dom/value-types/animatable-none.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dom/value-types/find.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/find.mjs");
/* harmony import */ var _html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html/utils/keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");
/* harmony import */ var _store_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-controlling-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");
/* harmony import */ var _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs");
/* harmony import */ var _utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/resolve-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");






















const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        this.KeyframeResolver = _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__.KeyframeResolver;
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = () => {
            const now = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__.time.now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.render(this.render, false, true);
            }
        };
        const { latestValues, renderState, onUpdate } = visualState;
        this.onUpdate = onUpdate;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isControllingVariants)(props);
        this.isVariantNode = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantNode)(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
            }
        }
    }
    mount(instance) {
        this.current = instance;
        _store_mjs__WEBPACK_IMPORTED_MODULE_5__.visualElementStore.set(instance, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!_utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__.hasReducedMotionListener.current) {
            (0,_utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__.initPrefersReducedMotion)();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__.prefersReducedMotion.current;
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_8__.warnOnce)(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        }
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        _store_mjs__WEBPACK_IMPORTED_MODULE_5__.visualElementStore.delete(this.current);
        this.projection && this.projection.unmount();
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.notifyUpdate);
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) {
            this.valueSubscriptions.get(key)();
        }
        const valueIsTransform = _html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_9__.transformProps.has(key);
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate && _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        let removeSyncCheck;
        if (window.MotionCheckAppearSync) {
            removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        }
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
            if (removeSyncCheck)
                removeSyncCheck();
            if (value.owner)
                value.stop();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for (key in _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__.featureDefinitions) {
            const featureDefinition = _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__.featureDefinitions[key];
            if (!featureDefinition)
                continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */
            if (!this.features[key] &&
                FeatureConstructor &&
                isEnabled(this.props)) {
                this.features[key] = new FeatureConstructor(this);
            }
            /**
             * If we have a feature, mount or update it.
             */
            if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) {
                    feature.update();
                }
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_11__.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = ("on" + key);
            const listener = props[listenerName];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = (0,_utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_12__.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue)
                this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_13__.motionValue)(defaultValue === null ? undefined : defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
        var _a;
        let value = this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" &&
                ((0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_14__.isNumericalString)(value) || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_15__.isZeroValueString)(value))) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!(0,_dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_16__.findValueType)(value) && _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_17__.complex.test(target)) {
                value = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_18__.getAnimatableNone)(key, target);
            }
            this.setBaseTarget(key, (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value) ? value.get() : value);
        }
        return (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = (0,_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_19__.resolveVariantFromProps)(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
            if (variant) {
                valueFromInitial = variant[key];
            }
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_20__.SubscriptionManager();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMKeyframesResolver: () => (/* binding */ DOMKeyframesResolver)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_none_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/utils/is-none.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs");
/* harmony import */ var _html_utils_keys_position_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/utils/keys-position.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-position.mjs");
/* harmony import */ var _html_utils_make_none_animatable_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html/utils/make-none-animatable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs");
/* harmony import */ var _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/css-variables-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");
/* harmony import */ var _utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/unit-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");
/* harmony import */ var _value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value-types/dimensions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");









class DOMKeyframesResolver extends _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__.KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current)
            return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0,_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableToken)(keyframe)) {
                    const resolved = (0,_utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.getVariableValue)(keyframe, element.current);
                    if (resolved !== undefined) {
                        unresolvedKeyframes[i] = resolved;
                    }
                    if (i === unresolvedKeyframes.length - 1) {
                        this.finalKeyframe = keyframe;
                    }
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */
        this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */
        if (!_html_utils_keys_position_mjs__WEBPACK_IMPORTED_MODULE_3__.positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
            return;
        }
        const [origin, target] = unresolvedKeyframes;
        const originType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__.findDimensionValueType)(origin);
        const targetType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__.findDimensionValueType)(target);
        /**
         * Either we don't recognise these value types or we can animate between them.
         */
        if (originType === targetType)
            return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */
        if ((0,_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_5__.isNumOrPxType)(originType) && (0,_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_5__.isNumOrPxType)(targetType)) {
            for (let i = 0; i < unresolvedKeyframes.length; i++) {
                const value = unresolvedKeyframes[i];
                if (typeof value === "string") {
                    unresolvedKeyframes[i] = parseFloat(value);
                }
            }
        }
        else {
            /**
             * Else, the only way to resolve this is by measuring the element.
             */
            this.needsMeasurement = true;
        }
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if ((0,_animation_utils_is_none_mjs__WEBPACK_IMPORTED_MODULE_6__.isNone)(unresolvedKeyframes[i])) {
                noneKeyframeIndexes.push(i);
            }
        }
        if (noneKeyframeIndexes.length) {
            (0,_html_utils_make_none_animatable_mjs__WEBPACK_IMPORTED_MODULE_7__.makeNoneKeyframesAnimatable)(unresolvedKeyframes, noneKeyframeIndexes, name);
        }
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current)
            return;
        if (name === "height") {
            this.suspendedScrollY = window.pageYOffset;
        }
        this.measuredOrigin = _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_5__.positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) {
            element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
        }
    }
    measureEndState() {
        var _a;
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current)
            return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_5__.positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = finalKeyframe;
        }
        // If we removed transform values, reapply them before the next render
        if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
            this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
                element
                    .getValue(unsetTransformName)
                    .set(unsetTransformValue);
            });
        }
        this.resolveNoneKeyframes();
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMVisualElement: () => (/* binding */ DOMVisualElement)
/* harmony export */ });
/* harmony import */ var _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs");
/* harmony import */ var _DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMKeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");




class DOMVisualElement extends _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.VisualElement {
    constructor() {
        super(...arguments);
        this.KeyframeResolver = _DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__.DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style
            ? props.style[key]
            : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.isMotionValue)(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current) {
                    this.current.textContent = `${latest}`;
                }
            });
        }
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/handle-element.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/handle-element.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeElement: () => (/* binding */ resizeElement)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs");



const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return { width: inlineSize, height: blockSize };
    }
    else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    }
    else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight,
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize, }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
        handler({
            target,
            contentSize: contentRect,
            get size() {
                return getElementSize(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = (0,_motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveElements)(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/handle-window.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/handle-window.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeWindow: () => (/* binding */ resizeWindow)
/* harmony export */ });
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const size = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const info = {
            target: window,
            size,
            contentSize: size,
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/index.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resize: () => (/* binding */ resize)
/* harmony export */ });
/* harmony import */ var _handle_element_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-element.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/handle-element.mjs");
/* harmony import */ var _handle_window_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle-window.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/handle-window.mjs");



function resize(a, b) {
    return typeof a === "function" ? (0,_handle_window_mjs__WEBPACK_IMPORTED_MODULE_0__.resizeWindow)(a) : (0,_handle_element_mjs__WEBPACK_IMPORTED_MODULE_1__.resizeElement)(a, b);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/index.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_utils_supports_scroll_timeline_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/utils/supports/scroll-timeline.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs");
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _observe_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/observe.mjs");
/* harmony import */ var _track_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/track.mjs");






function scrollTimelineFallback({ source, container, axis = "y", }) {
    // Support legacy source argument. Deprecate later.
    if (source)
        container = source;
    // ScrollTimeline records progress as a percentage CSSUnitValue
    const currentTime = { value: 0 };
    const cancel = (0,_track_mjs__WEBPACK_IMPORTED_MODULE_0__.scrollInfo)((info) => {
        currentTime.value = info[axis].progress * 100;
    }, { container, axis });
    return { currentTime, cancel };
}
const timelineCache = new Map();
function getTimeline({ source, container = document.documentElement, axis = "y", } = {}) {
    // Support legacy source argument. Deprecate later.
    if (source)
        container = source;
    if (!timelineCache.has(container)) {
        timelineCache.set(container, {});
    }
    const elementCache = timelineCache.get(container);
    if (!elementCache[axis]) {
        elementCache[axis] = (0,_motion_dom_dist_es_utils_supports_scroll_timeline_mjs__WEBPACK_IMPORTED_MODULE_1__.supportsScrollTimeline)()
            ? new ScrollTimeline({ source: container, axis })
            : scrollTimelineFallback({ source: container, axis });
    }
    return elementCache[axis];
}
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */
function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
/**
 * Currently, we only support element tracking with `scrollInfo`, though in
 * the future we can also offer ViewTimeline support.
 */
function needsElementTracking(options) {
    return options && (options.target || options.offset);
}
function scrollFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll) || needsElementTracking(options)) {
        return (0,_track_mjs__WEBPACK_IMPORTED_MODULE_0__.scrollInfo)((info) => {
            onScroll(info[options.axis].progress, info);
        }, options);
    }
    else {
        return (0,_observe_mjs__WEBPACK_IMPORTED_MODULE_2__.observeTimeline)(onScroll, getTimeline(options));
    }
}
function scrollAnimation(animation, options) {
    animation.flatten();
    if (needsElementTracking(options)) {
        animation.pause();
        return (0,_track_mjs__WEBPACK_IMPORTED_MODULE_0__.scrollInfo)((info) => {
            animation.time = animation.duration * info[options.axis].progress;
        }, options);
    }
    else {
        const timeline = getTimeline(options);
        if (animation.attachTimeline) {
            return animation.attachTimeline(timeline, (valueAnimation) => {
                valueAnimation.pause();
                return (0,_observe_mjs__WEBPACK_IMPORTED_MODULE_2__.observeTimeline)((progress) => {
                    valueAnimation.time = valueAnimation.duration * progress;
                }, timeline);
            });
        }
        else {
            return _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_3__.noop;
        }
    }
}
function scroll(onScroll, { axis = "y", ...options } = {}) {
    const optionsWithDefaults = { axis, ...options };
    return typeof onScroll === "function"
        ? scrollFunction(onScroll, optionsWithDefaults)
        : scrollAnimation(onScroll, optionsWithDefaults);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/info.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/info.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScrollInfo: () => (/* binding */ createScrollInfo),
/* harmony export */   updateScrollInfo: () => (/* binding */ updateScrollInfo)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/progress.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/velocity-per-second.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs");




/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
});
const createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo(),
});
const keys = {
    x: {
        length: "Width",
        position: "Left",
    },
    y: {
        length: "Height",
        position: "Top",
    },
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element[`scroll${position}`];
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0,_motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity =
        elapsed > maxElapsed
            ? 0
            : (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_1__.velocityPerSecond)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/observe.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/observe.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeTimeline: () => (/* binding */ observeTimeline)
/* harmony export */ });
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");


function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = () => {
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(onFrame, true);
    return () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(onFrame);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namedEdges: () => (/* binding */ namedEdges),
/* harmony export */   resolveEdge: () => (/* binding */ resolveEdge)
/* harmony export */ });
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1,
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */
    if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */
    if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        }
        else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        }
        else if (edge.endsWith("vw")) {
            delta = (asNumber / 100) * document.documentElement.clientWidth;
        }
        else if (edge.endsWith("vh")) {
            delta = (asNumber / 100) * document.documentElement.clientHeight;
        }
        else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */
    if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveOffsets: () => (/* binding */ resolveOffsets)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/interpolate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/offsets/default.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs");
/* harmony import */ var _inset_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inset.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs");
/* harmony import */ var _offset_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs");
/* harmony import */ var _presets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presets.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs");







const point = { x: 0, y: 0 };
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg"
        ? target.getBBox()
        : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = _presets_mjs__WEBPACK_IMPORTED_MODULE_0__.ScrollOffset.All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0,_inset_mjs__WEBPACK_IMPORTED_MODULE_1__.calcInset)(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */
    const targetSize = target === container
        ? { width: container.scrollWidth, height: container.scrollHeight }
        : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight,
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */
    info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
        const offset = (0,_offset_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveOffset)(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */
    if (hasChanged) {
        info[axis].interpolate = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_3__.interpolate)(info[axis].offset, (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultOffset)(offsetDefinition), { clamp: false });
        info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_5__.clamp)(0, 1, info[axis].interpolate(info[axis].current));
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcInset: () => (/* binding */ calcInset)
/* harmony export */ });
function calcInset(element, container) {
    const inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        }
        else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */
            const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        }
        else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while (!svg) {
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        }
        else {
            break;
        }
    }
    return inset;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveOffset: () => (/* binding */ resolveOffset)
/* harmony export */ });
/* harmony import */ var _edge_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edge.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs");


const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */
        offsetDefinition = [offset, offset];
    }
    else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        }
        else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */
            offsetDefinition = [offset, _edge_mjs__WEBPACK_IMPORTED_MODULE_0__.namedEdges[offset] ? offset : `0`];
        }
    }
    targetPoint = (0,_edge_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveEdge)(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0,_edge_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveEdge)(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollOffset: () => (/* binding */ ScrollOffset)
/* harmony export */ });
const ScrollOffset = {
    Enter: [
        [0, 1],
        [1, 1],
    ],
    Exit: [
        [0, 0],
        [1, 0],
    ],
    Any: [
        [1, 0],
        [0, 1],
    ],
    All: [
        [0, 0],
        [1, 1],
    ],
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOnScrollHandler: () => (/* binding */ createOnScrollHandler)
/* harmony export */ });
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/warn-once.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _info_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/info.mjs");
/* harmony import */ var _offsets_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offsets/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs");




function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while (node && node !== container) {
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength =
        target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength =
        target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */
    if (true) {
        if (container && target && target !== container) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_0__.warnOnce)(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
        }
    }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: () => measure(element, options.target, info),
        update: (time) => {
            (0,_info_mjs__WEBPACK_IMPORTED_MODULE_1__.updateScrollInfo)(element, info, time);
            if (options.offset || options.target) {
                (0,_offsets_index_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveOffsets)(element, info, options);
            }
        },
        notify: () => onScroll(info),
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/track.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/track.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollInfo: () => (/* binding */ scrollInfo)
/* harmony export */ });
/* harmony import */ var _resize_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resize/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/resize/index.mjs");
/* harmony import */ var _info_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/info.mjs");
/* harmony import */ var _on_scroll_handler_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-scroll-handler.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");





const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element) => element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */
    if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */
    const info = (0,_info_mjs__WEBPACK_IMPORTED_MODULE_0__.createScrollInfo)();
    const containerHandler = (0,_on_scroll_handler_mjs__WEBPACK_IMPORTED_MODULE_1__.createOnScrollHandler)(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */
    if (!scrollListeners.has(container)) {
        const measureAll = () => {
            for (const handler of containerHandlers)
                handler.measure();
        };
        const updateAll = () => {
            for (const handler of containerHandlers) {
                handler.update(_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frameData.timestamp);
            }
        };
        const notifyAll = () => {
            for (const handler of containerHandlers)
                handler.notify();
        };
        const listener = () => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(measureAll, false, true);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(updateAll, false, true);
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(notifyAll, false, true);
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, { passive: true });
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0,_resize_index_mjs__WEBPACK_IMPORTED_MODULE_3__.resize)(container, listener));
        }
        target.addEventListener("scroll", listener, { passive: true });
    }
    const listener = scrollListeners.get(container);
    _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.read(listener, false, true);
    return () => {
        var _a;
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(listener);
        /**
         * Check if we even have any handlers for this container.
         */
        const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers)
            return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size)
            return;
        /**
         * If no more handlers, remove the scroll listener too.
         */
        const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", scrollListener);
        }
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToDash: () => (/* binding */ camelToDash)
/* harmony export */ });
/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVariableValue: () => (/* binding */ getVariableValue),
/* harmony export */   parseCSSVariable: () => (/* binding */ parseCSSVariable)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/is-numerical-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");




/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = 
// eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0,_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariableToken)(fallback)
        ? getVariableValue(fallback, element, depth + 1)
        : fallback;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCSSVariableName: () => (/* binding */ isCSSVariableName),
/* harmony export */   isCSSVariableToken: () => (/* binding */ isCSSVariableToken)
/* harmony export */ });
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = 
/*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = 
/*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
        return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement)
/* harmony export */ });
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumOrPxType: () => (/* binding */ isNumOrPxType),
/* harmony export */   positionalValues: () => (/* binding */ positionalValues),
/* harmony export */   removeNonTranslationalTransform: () => (/* binding */ removeNonTranslationalTransform)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");




const isNumOrPxType = (v) => v === _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number || v === _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/u);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = _html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnimatableNone: () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs");




function getAnimatableNone(key, value) {
    let defaultValueType = (0,_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValueTypes: () => (/* binding */ defaultValueTypes),
/* harmony export */   getDefaultValueType: () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs");




/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ..._number_mjs__WEBPACK_IMPORTED_MODULE_0__.numberValueTypes,
    // Color props
    color: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    backgroundColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    outlineColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    fill: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    stroke: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    // Border props
    borderColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderTopColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderRightColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderBottomColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderLeftColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    filter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
    WebkitFilter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimensionValueTypes: () => (/* binding */ dimensionValueTypes),
/* harmony export */   findDimensionValueType: () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs");
/* harmony import */ var _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-auto.mjs");





/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [_value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.degrees, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vw, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/find.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/find.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findValueType: () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs");





/**
 * A list of all ValueTypes
 */
const valueTypes = [..._dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__.dimensionValueTypes, _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color, _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueAsType: () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number-browser.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number-browser.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browserNumberValueTypes: () => (/* binding */ browserNumberValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");


const browserNumberValueTypes = {
    // Border props
    borderWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    height: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    top: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    right: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    left: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    backgroundPositionX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    backgroundPositionY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberValueTypes: () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _number_browser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-browser.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number-browser.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/transform.mjs");
/* harmony import */ var _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-int.mjs");






const numberValueTypes = {
    ..._number_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.browserNumberValueTypes,
    ..._transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transformValueTypes,
    zIndex: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
    size: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_3__.px,
    // SVG
    fillOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__.alpha,
    strokeOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__.alpha,
    numOctaves: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testValueType: () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/transform.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/transform.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformValueTypes: () => (/* binding */ transformValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");



const transformValueTypes = {
    rotate: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    x: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    y: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    z: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-auto.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-auto.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auto: () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-int.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-int.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   int: () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");


const int = {
    ..._value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number,
    transform: Math.round,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inView: () => (/* binding */ inView)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs");



const thresholds = {
    some: 0,
    all: 1,
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0,_motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveElements)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries) => {
        entries.forEach((entry) => {
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */
            if (entry.isIntersecting === Boolean(onEnd))
                return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                }
                else {
                    observer.unobserve(entry.target);
                }
            }
            else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount],
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLVisualElement: () => (/* binding */ HTMLVisualElement),
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");









function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "html";
        this.renderInstance = _utils_render_mjs__WEBPACK_IMPORTED_MODULE_1__.renderHTML;
    }
    readValueFromInstance(instance, key) {
        if (_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_4__.isCSSVariableName)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_5__.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.buildHTMLStyles)(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHTMLStyles: () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs");
/* harmony import */ var _build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-transform.mjs");
/* harmony import */ var _keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");






function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        if (_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        }
        else if ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        }
        else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_3__.numberValueTypes[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] =
                    valueAsType;
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransform)(latestValues, state.transform, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-transform.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-transform.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTransform: () => (/* binding */ buildTransform)
/* harmony export */ });
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs");
/* harmony import */ var _keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");




const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = _keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = _keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder[i];
        const value = latestValues[key];
        if (value === undefined)
            continue;
        let valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        }
        else {
            valueIsDefault = parseFloat(value) === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_1__.getValueAsType)(value, _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_2__.numberValueTypes[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) {
                transform[key] = valueAsType;
            }
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-position.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-position.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   positionalKeys: () => (/* binding */ positionalKeys)
/* harmony export */ });
/* harmony import */ var _keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");


const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ..._keys_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder,
]);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformPropOrder: () => (/* binding */ transformPropOrder),
/* harmony export */   transformProps: () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeNoneKeyframesAnimatable: () => (/* binding */ makeNoneKeyframesAnimatable)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/animatable-none.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");



/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */
const invalidTemplates = new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" &&
            !invalidTemplates.has(keyframe) &&
            (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.analyseComplexValue)(keyframe).values.length) {
            animatableTemplate = unresolvedKeyframes[i];
        }
        i++;
    }
    if (animatableTemplate && name) {
        for (const noneIndex of noneKeyframeIndexes) {
            unresolvedKeyframes[noneIndex] = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_1__.getAnimatableNone)(name, animatableTemplate);
        }
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHTML: () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");



function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) ||
            (prevProps.style &&
                (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevProps.style[key])) ||
            (0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props) ||
            ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== undefined) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/object/ObjectVisualElement.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/object/ObjectVisualElement.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectVisualElement: () => (/* binding */ ObjectVisualElement)
/* harmony export */ });
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs");



function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.VisualElement {
    constructor() {
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") {
                return value;
            }
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__.createBox)();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visualElementStore: () => (/* binding */ visualElementStore)
/* harmony export */ });
const visualElementStore = new WeakMap();




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGVisualElement: () => (/* binding */ SVGVisualElement)
/* harmony export */ });
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/utils/keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/camel-case-attrs.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");











class SVGVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__.createBox;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (_html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !_utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_5__.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__.buildSVGAttrs)(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGAttrs: () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var _html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/build-styles.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _path_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs");
/* harmony import */ var _transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-origin.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs");




/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate) {
    (0,_html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__.buildHTMLStyles)(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        (0,_path_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCaseAttributes: () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGTag: () => (/* binding */ isSVGTag)
/* harmony export */ });
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGPath: () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");


const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(-offset);
    // Build the dash array
    const pathLength = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(length);
    const pathSpacing = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSVG: () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");




function renderSVG(element, renderState, _styleProp, projection) {
    (0,_html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/keys-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/keys-transform.mjs");
/* harmony import */ var _html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");




function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = (0,_html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    for (const key in props) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key]) ||
            (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(prevProps[key])) {
            const targetKey = _html_utils_keys_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcSVGTransformOrigin: () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyframeResolver: () => (/* binding */ KeyframeResolver),
/* harmony export */   flushKeyframeResolvers: () => (/* binding */ flushKeyframeResolvers)
/* harmony export */ });
/* harmony import */ var _dom_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/utils/unit-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");



const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */
        elementsToMeasure.forEach((element) => {
            const removedTransforms = (0,_dom_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.removeNonTranslationalTransform)(element);
            if (!removedTransforms.length)
                return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element) => {
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) {
                restore.forEach(([key, value]) => {
                    var _a;
                    (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
                });
            }
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver) => {
            if (resolver.suspendedScrollY !== undefined) {
                window.scrollTo(0, resolver.suspendedScrollY);
            }
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete());
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver) => {
        resolver.readKeyframes();
        if (resolver.needsMeasurement) {
            anyNeedsMeasurement = true;
        }
    });
}
function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
        /**
         * Track whether this resolver has completed. Once complete, it never
         * needs to attempt keyframe resolution again.
         */
        this.isComplete = false;
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */
        this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */
        this.needsMeasurement = false;
        /**
         * Track whether this resolver is currently scheduled to resolve
         * to allow it to be cancelled and resumed externally.
         */
        this.isScheduled = false;
        this.unresolvedKeyframes = [...unresolvedKeyframes];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.isScheduled = true;
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.read(readAllKeyframes);
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.resolveKeyframes(measureAllKeyframes);
            }
        }
        else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        /**
         * If a keyframe is null, we hydrate it either by reading it from
         * the instance, or propagating from previous keyframes.
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if (unresolvedKeyframes[i] === null) {
                /**
                 * If the first keyframe is null, we need to find its value by sampling the element
                 */
                if (i === 0) {
                    const currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
                    const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                    if (currentValue !== undefined) {
                        unresolvedKeyframes[0] = currentValue;
                    }
                    else if (element && name) {
                        const valueAsRead = element.readValue(name, finalKeyframe);
                        if (valueAsRead !== undefined && valueAsRead !== null) {
                            unresolvedKeyframes[0] = valueAsRead;
                        }
                    }
                    if (unresolvedKeyframes[0] === undefined) {
                        unresolvedKeyframes[0] = finalKeyframe;
                    }
                    if (motionValue && currentValue === undefined) {
                        motionValue.set(unresolvedKeyframes[0]);
                    }
                }
                else {
                    unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
                }
            }
        }
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete() {
        this.isComplete = true;
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
        toResolve.delete(this);
    }
    cancel() {
        if (!this.isComplete) {
            this.isScheduled = false;
            toResolve.delete(this);
        }
    }
    resume() {
        if (!this.isComplete)
            this.scheduleResolve();
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isControllingVariants: () => (/* binding */ isControllingVariants),
/* harmony export */   isVariantNode: () => (/* binding */ isVariantNode)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-variant-label.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-props.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs");




function isControllingVariants(props) {
    return ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimationControls)(props.animate) ||
        _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__.variantProps.some((name) => (0,_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__.isVariantLabel)(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVariantLabel: () => (/* binding */ isVariantLabel)
/* harmony export */ });
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateMotionValuesFromProps: () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/warn-once.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");




function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (true) {
                (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(nextValue.version === "11.18.2", `Attempting to mix Motion versions ${nextValue.version} with 11.18.2 may not work as expected.`);
            }
        }
        else if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(nextValue, { owner: element }));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) {
                    existingValue.jump(nextValue);
                }
                else if (!existingValue.hasAnimated) {
                    existingValue.set(nextValue);
                }
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariant: () => (/* binding */ resolveVariant)
/* harmony export */ });
/* harmony import */ var _resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs");


function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0,_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariantFromProps: () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTarget: () => (/* binding */ setTarget)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-dynamic-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");




/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = (0,_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   variantPriorityOrder: () => (/* binding */ variantPriorityOrder),
/* harmony export */   variantProps: () => (/* binding */ variantProps)
/* harmony export */ });
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionGlobalConfig: () => (/* binding */ MotionGlobalConfig)
/* harmony export */ });
const MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUniqueItem: () => (/* binding */ addUniqueItem),
/* harmony export */   moveItem: () => (/* binding */ moveItem),
/* harmony export */   removeItem: () => (/* binding */ removeItem)
/* harmony export */ });
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (min, max, v) => {
    if (v > max)
        return max;
    if (v < min)
        return min;
    return v;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hslaToRgba: () => (/* binding */ hslaToRgba)
/* harmony export */ });
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolate: () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/progress.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs");
/* harmony import */ var _clamp_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _mix_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs");







function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || _mix_index_mjs__WEBPACK_IMPORTED_MODULE_0__.mix;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop : ease;
            mixer = (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
        return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        if (isZeroDeltaRange && v < input[0])
            return output[0];
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = (0,_motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_4__.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator((0,_clamp_mjs__WEBPACK_IMPORTED_MODULE_5__.clamp)(input[0], input[inputLength - 1], v))
        : interpolator;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBrowser: () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof window !== "undefined";




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumericalString: () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isZeroValueString: () => (/* binding */ isZeroValueString)
/* harmony export */ });
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixColor: () => (/* binding */ mixColor),
/* harmony export */   mixLinearColor: () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hsla-to-rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs");
/* harmony import */ var _value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/color/hex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/types/color/rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/types/color/hsla.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs");
/* harmony import */ var _immediate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./immediate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs");








// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [_value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__.hex, _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba, _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__.warning)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type))
        return false;
    let model = type.parse(color);
    if (type === _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla) {
        // TODO Remove this cast - needed since Motion's stricter typing
        model = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
        return (0,_immediate_mjs__WEBPACK_IMPORTED_MODULE_5__.mixImmediate)(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0,_number_mjs__WEBPACK_IMPORTED_MODULE_6__.mixNumber)(fromRGBA.alpha, toRGBA.alpha, v);
        return _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMixer: () => (/* binding */ getMixer),
/* harmony export */   mixArray: () => (/* binding */ mixArray),
/* harmony export */   mixComplex: () => (/* binding */ mixComplex),
/* harmony export */   mixObject: () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _color_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/types/color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/dom/utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _visibility_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visibility.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/visibility.mjs");
/* harmony import */ var _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./immediate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs");










function mixNumber(a, b) {
    return (p) => (0,_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") {
        return mixNumber;
    }
    else if (typeof a === "string") {
        return (0,_render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableToken)(a)
            ? _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate
            : _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.test(a)
                ? _color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor
                : mixComplex;
    }
    else if (Array.isArray(a)) {
        return mixArray;
    }
    else if (typeof a === "object") {
        return _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.test(a) ? _color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor : mixObject;
    }
    return _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate;
}
function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](p);
        }
        return output;
    };
}
function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
        if (a[key] !== undefined && b[key] !== undefined) {
            blendValue[key] = getMixer(a[key])(a[key], b[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
}
function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target) => {
    const template = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.complex.createTransformer(target);
    const originStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.analyseComplexValue)(origin);
    const targetStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.analyseComplexValue)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length &&
        originStats.indexes.color.length === targetStats.indexes.color.length &&
        originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.invisibleValues.has(origin) &&
            !targetStats.values.length) ||
            (_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.invisibleValues.has(target) &&
                !originStats.values.length)) {
            return (0,_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.mixVisibility)(origin, target);
        }
        return (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__.pipe)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    }
    else {
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_8__.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (0,_immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate)(origin, target);
    }
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixImmediate: () => (/* binding */ mixImmediate)
/* harmony export */ });
function mixImmediate(a, b) {
    return (p) => (p > 0 ? b : a);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mix: () => (/* binding */ mix)
/* harmony export */ });
/* harmony import */ var _complex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");



function mix(from, to, p) {
    if (typeof from === "number" &&
        typeof to === "number" &&
        typeof p === "number") {
        return (0,_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(from, to, p);
    }
    const mixer = (0,_complex_mjs__WEBPACK_IMPORTED_MODULE_1__.getMixer)(from);
    return mixer(from, to);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixNumber: () => (/* binding */ mixNumber)
/* harmony export */ });
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mixNumber = (from, to, progress) => {
    return from + (to - from) * progress;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/visibility.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/visibility.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invisibleValues: () => (/* binding */ invisibleValues),
/* harmony export */   mixVisibility: () => (/* binding */ mixVisibility)
/* harmony export */ });
const invisibleValues = new Set(["none", "hidden"]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */
function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
        return (p) => (p <= 0 ? origin : target);
    }
    else {
        return (p) => (p >= 1 ? target : origin);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOffset: () => (/* binding */ defaultOffset)
/* harmony export */ });
/* harmony import */ var _fill_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs");


function defaultOffset(arr) {
    const offset = [0];
    (0,_fill_mjs__WEBPACK_IMPORTED_MODULE_0__.fillOffset)(offset, arr.length - 1);
    return offset;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillOffset: () => (/* binding */ fillOffset)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/progress.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs");
/* harmony import */ var _mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mix/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");




function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = (0,_motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, remaining, i);
        offset.push((0,_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(min, 1, offsetProgress));
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertOffsetToTimes: () => (/* binding */ convertOffsetToTimes)
/* harmony export */ });
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe)
/* harmony export */ });
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPrefersReducedMotion: () => (/* binding */ initPrefersReducedMotion)
/* harmony export */ });
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-browser.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs");



function initPrefersReducedMotion() {
    _state_mjs__WEBPACK_IMPORTED_MODULE_0__.hasReducedMotionListener.current = true;
    if (!_is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (_state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        _state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = false;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasReducedMotionListener: () => (/* binding */ hasReducedMotionListener),
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/resolve-value.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/resolve-value.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCustomValue: () => (/* binding */ isCustomValue),
/* harmony export */   resolveFinalValueInKeyframes: () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");


const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionManager: () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs");


class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return () => (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instantAnimationState: () => (/* binding */ instantAnimationState)
/* harmony export */ });
const instantAnimationState = {
    current: false,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   velocityPerSecond: () => (/* binding */ velocityPerSecond)
/* harmony export */ });
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnOnce: () => (/* binding */ warnOnce)
/* harmony export */ });
const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/wrap.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/wrap.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionValue: () => (/* binding */ MotionValue),
/* harmony export */   collectMotionValues: () => (/* binding */ collectMotionValues),
/* harmony export */   motionValue: () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/velocity-per-second.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");






/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined,
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "11.18.2";
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */
            if (this.updatedAt !== currentTime) {
                this.setPrevFrameValue();
            }
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev && this.events.change) {
                this.events.change.notify(this.current);
            }
            // Update render subscribers
            if (render && this.events.renderRequest) {
                this.events.renderRequest.notify(this.current);
            }
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        if (this.canTrackVelocity === null && current !== undefined) {
            this.canTrackVelocity = isFloat(this.current);
        }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        }
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__.SubscriptionManager();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        if (collectMotionValues.current) {
            collectMotionValues.current.push(this);
        }
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        if (!this.canTrackVelocity ||
            this.prevFrameValue === undefined ||
            currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
            return 0;
        }
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_4__.velocityPerSecond)(parseFloat(this.current) -
            parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hex: () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs");



function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("#"),
    parse: parseHex,
    transform: _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hsla: () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs");





const hsla = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("hsl", "hue"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ", " +
            (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ")");
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs");
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs");




const color = {
    test: (v) => _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v),
    parse: (v) => {
        if (_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: (v) => {
        return typeof v === "string"
            ? v
            : v.hasOwnProperty("red")
                ? _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbUnit: () => (/* binding */ rgbUnit),
/* harmony export */   rgba: () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs");





const clampRgbUnit = (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255, v);
const rgbUnit = {
    ..._numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.isColorString)("rgb", "red"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha.transform(alpha$1)) +
        ")",
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isColorString: () => (/* binding */ isColorString),
/* harmony export */   splitColor: () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs");
/* harmony import */ var _utils_is_nullish_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-nullish.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs");
/* harmony import */ var _utils_single_color_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/single-color-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs");




/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((typeof v === "string" &&
        _utils_single_color_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) &&
        v.startsWith(type)) ||
        (testProp &&
            !(0,_utils_is_nullish_mjs__WEBPACK_IMPORTED_MODULE_1__.isNullish)(v) &&
            Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
        return v;
    const [a, b, c, alpha] = v.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_2__.floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs");



/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ..._index_mjs__WEBPACK_IMPORTED_MODULE_1__.complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyseComplexValue: () => (/* binding */ analyseComplexValue),
/* harmony export */   complex: () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _color_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _utils_color_regex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/color-regex.mjs");
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs");





function test(v) {
    var _a, _b;
    return (isNaN(v) &&
        typeof v === "string" &&
        (((_a = v.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) +
            (((_b = v.match(_utils_color_regex_mjs__WEBPACK_IMPORTED_MODULE_1__.colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) >
            0);
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: [],
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
        if (_color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push(_color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.parse(parsedValue));
        }
        else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        }
        else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v) => {
        let output = "";
        for (let i = 0; i < numSections; i++) {
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) {
                    output += (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__.sanitize)(v[i]);
                }
                else if (type === COLOR_TOKEN) {
                    output += _color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.transform(v[i]);
                }
                else {
                    output += v[i];
                }
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alpha: () => (/* binding */ alpha),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   scale: () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");


const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   degrees: () => (/* binding */ degrees),
/* harmony export */   percent: () => (/* binding */ percent),
/* harmony export */   progressPercentage: () => (/* binding */ progressPercentage),
/* harmony export */   px: () => (/* binding */ px),
/* harmony export */   vh: () => (/* binding */ vh),
/* harmony export */   vw: () => (/* binding */ vw)
/* harmony export */ });
const createUnitType = (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/color-regex.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/color-regex.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorRegex: () => (/* binding */ colorRegex)
/* harmony export */ });
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   floatRegex: () => (/* binding */ floatRegex)
/* harmony export */ });
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNullish: () => (/* binding */ isNullish)
/* harmony export */ });
function isNullish(v) {
    return v == null;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitize: () => (/* binding */ sanitize)
/* harmony export */ });
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   singleColorRegex: () => (/* binding */ singleColorRegex)
/* harmony export */ });
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addValueToWillChange: () => (/* binding */ addValueToWillChange)
/* harmony export */ });
/* harmony import */ var _is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs");


function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */
    if ((0,_is_mjs__WEBPACK_IMPORTED_MODULE_0__.isWillChangeMotionValue)(willChange)) {
        return willChange.add(key);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWillChangeMotionValue: () => (/* binding */ isWillChangeMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");


function isWillChangeMotionValue(value) {
    return Boolean((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) && value.add);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMotionValue: () => (/* binding */ isMotionValue)
/* harmony export */ });
const isMotionValue = (value) => Boolean(value && value.getVelocity);




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/BaseGroup.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/BaseGroup.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseGroupPlaybackControls: () => (/* binding */ BaseGroupPlaybackControls)
/* harmony export */ });
/* harmony import */ var _utils_supports_scroll_timeline_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/supports/scroll-timeline.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs");


class BaseGroupPlaybackControls {
    constructor(animations) {
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = () => this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        // Support for new finished Promise and legacy thennable API
        return Promise.all(this.animations.map((animation) => "finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */
    getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for (let i = 0; i < this.animations.length; i++) {
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation) => {
            if ((0,_utils_supports_scroll_timeline_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsScrollTimeline)() && animation.attachTimeline) {
                return animation.attachTimeline(timeline);
            }
            else if (typeof fallback === "function") {
                return fallback(animation);
            }
        });
        return () => {
            subscriptions.forEach((cancel, i) => {
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for (let i = 0; i < this.animations.length; i++) {
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls) => controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/Group.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/Group.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupPlaybackControls: () => (/* binding */ GroupPlaybackControls)
/* harmony export */ });
/* harmony import */ var _BaseGroup_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseGroup.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/controls/BaseGroup.mjs");


/**
 * TODO: This is a temporary class to support the legacy
 * thennable API
 */
class GroupPlaybackControls extends _BaseGroup_mjs__WEBPACK_IMPORTED_MODULE_0__.BaseGroupPlaybackControls {
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorDuration: () => (/* binding */ calcGeneratorDuration),
/* harmony export */   maxGeneratorDuration: () => (/* binding */ maxGeneratorDuration)
/* harmony export */ });
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGeneratorEasing: () => (/* binding */ createGeneratorEasing)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/time-conversion.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs");
/* harmony import */ var _calc_duration_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-duration.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs");




/**
 * Create a progress => progress easing function from a generator.
 */
function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({ ...options, keyframes: [0, scale] });
    const duration = Math.min((0,_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_0__.calcGeneratorDuration)(generator), _calc_duration_mjs__WEBPACK_IMPORTED_MODULE_0__.maxGeneratorDuration);
    return {
        type: "keyframes",
        ease: (progress) => {
            return generator.next(duration * progress).value / scale;
        },
        duration: (0,_motion_utils_dist_es_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(duration),
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isGenerator: () => (/* binding */ isGenerator)
/* harmony export */ });
function isGenerator(type) {
    return typeof type === "function";
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueTransition: () => (/* binding */ getValueTransition)
/* harmony export */ });
function getValueTransition(transition, key) {
    return transition
        ? transition[key] ||
            transition["default"] ||
            transition
        : undefined;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachTimeline: () => (/* binding */ attachTimeline)
/* harmony export */ });
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/easing.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/easing.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezierAsString: () => (/* binding */ cubicBezierAsString),
/* harmony export */   isWaapiSupportedEasing: () => (/* binding */ isWaapiSupportedEasing),
/* harmony export */   mapEasingToNativeEasing: () => (/* binding */ mapEasingToNativeEasing),
/* harmony export */   supportedWaapiEasing: () => (/* binding */ supportedWaapiEasing)
/* harmony export */ });
/* harmony import */ var _utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/is-bezier-definition.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/is-bezier-definition.mjs");
/* harmony import */ var _utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/supports/linear-easing.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs");
/* harmony import */ var _linear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/linear.mjs");




function isWaapiSupportedEasing(easing) {
    return Boolean((typeof easing === "function" && (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)()) ||
        !easing ||
        (typeof easing === "string" &&
            (easing in supportedWaapiEasing || (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)())) ||
        (0,_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isBezierDefinition)(easing) ||
        (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /*@__PURE__*/ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /*@__PURE__*/ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /*@__PURE__*/ cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    }
    else if (typeof easing === "function" && (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)()) {
        return (0,_linear_mjs__WEBPACK_IMPORTED_MODULE_2__.generateLinearEasing)(easing, duration);
    }
    else if ((0,_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isBezierDefinition)(easing)) {
        return cubicBezierAsString(easing);
    }
    else if (Array.isArray(easing)) {
        return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) ||
            supportedWaapiEasing.easeOut);
    }
    else {
        return supportedWaapiEasing[easing];
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/linear.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/linear.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateLinearEasing: () => (/* binding */ generateLinearEasing)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/progress.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs");



const generateLinearEasing = (easing, duration, // as milliseconds
resolution = 10 // as milliseconds
) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
        points += easing((0,_motion_utils_dist_es_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/is-bezier-definition.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/utils/is-bezier-definition.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBezierDefinition: () => (/* binding */ isBezierDefinition)
/* harmony export */ });
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveElements: () => (/* binding */ resolveElements)
/* harmony export */ });
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) {
        return [elementOrSelector];
    }
    else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            // TODO: Refactor to utils package
            // invariant(
            //     Boolean(scope.current),
            //     "Scope provided, but no element detected."
            // )
            root = scope.current;
        }
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/flags.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/flags.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsFlags: () => (/* binding */ supportsFlags)
/* harmony export */ });
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */
const supportsFlags = {
    linearEasing: undefined,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsLinearEasing: () => (/* binding */ supportsLinearEasing)
/* harmony export */ });
/* harmony import */ var _memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memo.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs");


const supportsLinearEasing = /*@__PURE__*/ (0,_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memoSupports)(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    }
    catch (e) {
        return false;
    }
    return true;
}, "linearEasing");




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoSupports: () => (/* binding */ memoSupports)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/memo.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs");
/* harmony import */ var _flags_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flags.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/flags.mjs");




function memoSupports(callback, supportsFlag) {
    const memoized = (0,_motion_utils_dist_es_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(callback);
    return () => { var _a; return (_a = _flags_mjs__WEBPACK_IMPORTED_MODULE_1__.supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized(); };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsScrollTimeline: () => (/* binding */ supportsScrollTimeline)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/memo.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs");



const supportsScrollTimeline = (0,_motion_utils_dist_es_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(() => window.ScrollTimeline !== undefined);




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   warning: () => (/* binding */ warning)
/* harmony export */ });
/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");


let warning = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
let invariant = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
if (true) {
    warning = (check, message) => {
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message) => {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memo: () => (/* binding */ memo)
/* harmony export */ });
/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
/*#__NO_SIDE_EFFECTS__*/
const noop = (any) => any;




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   progress: () => (/* binding */ progress)
/* harmony export */ });
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
/*#__NO_SIDE_EFFECTS__*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   millisecondsToSeconds: () => (/* binding */ millisecondsToSeconds),
/* harmony export */   secondsToMilliseconds: () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
/*#__NO_SIDE_EFFECTS__*/
const secondsToMilliseconds = (seconds) => seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;




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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/index */ "./src/js/scripts/index.js");
// Import scripts folder


})();

/******/ })()
;
//# sourceMappingURL=scripts.js.map