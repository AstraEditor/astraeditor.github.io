(self["webpackChunkGUI"] = self["webpackChunkGUI"] || []).push([["src_lib_brand_js-src_lib_themes_guiHelpers_js-src_lib_themes_themePersistance_js-src_playgrou-f11971"],{

/***/ "./src/addons/hooks.js"
/*!*****************************!*\
  !*** ./src/addons/hooks.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const AddonHooks = {
  appStateReducer: () => {},
  appStateStore: null,
  blockly: null,
  blocklyWorkspace: null,
  blocklyCallbacks: [],
  recolorCallbacks: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddonHooks);

/***/ },

/***/ "./src/lib/brand.js"
/*!**************************!*\
  !*** ./src/lib/brand.js ***!
  \**************************/
(module) {

// Legacy export format because this is used by some build-time scripts stuck in the past.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  APP_NAME: 'AstraEditor'
};

/***/ },

/***/ "./src/lib/themes/accent/astraeditor.js"
/*!**********************************************!*\
  !*** ./src/lib/themes/accent/astraeditor.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'motion-primary': '#0099ff',
  'motion-primary-transparent': '#0099ffe6',
  'motion-tertiary': '#0066ff',
  'looks-secondary': '#0099ff',
  'looks-transparent': '#0099ff55',
  'looks-light-transparent': '#66ccff33',
  'looks-secondary-dark': '#0066ff',
  'extensions-primary': '#0099ff',
  'extensions-tertiary': '#0066ff',
  'extensions-transparent': '#0099ff55',
  'extensions-light': '#66ccff',
  'drop-highlight': '#8cd3ffff'
};
const blockColors = {
  checkboxActiveBackground: '#0099ff',
  checkboxActiveBorder: '#0066ff'
};


/***/ },

/***/ "./src/lib/themes/accent/blue.js"
/*!***************************************!*\
  !*** ./src/lib/themes/accent/blue.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'looks-secondary': 'hsla(215, 100%, 65%, 1)',
  'looks-transparent': 'hsla(215, 100%, 65%, 0.35)',
  'looks-light-transparent': 'hsla(215, 100%, 65%, 0.15)',
  'looks-secondary-dark': 'hsla(215, 60%, 50%, 1)'
};
const blockColors = {};


/***/ },

/***/ "./src/lib/themes/accent/ce.js"
/*!*************************************!*\
  !*** ./src/lib/themes/accent/ce.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'motion-primary': '#ff9b86',
  'motion-primary-transparent': '#ff9b86e6',
  'motion-tertiary': '#cc7a69',
  'looks-secondary': '#ff9b86',
  'looks-transparent': '#ff9b8659',
  'looks-light-transparent': '#ff9b8626',
  'looks-secondary-dark': '#cc7a69',
  'extensions-primary': '#ff9b86',
  'extensions-tertiary': '#cc7a69',
  'extensions-transparent': '#ff9b8659',
  'extensions-light': '#ffcbbd',
  'drop-highlight': '#ffccb8'
};
const blockColors = {
  checkboxActiveBackground: '#ff9b86',
  checkboxActiveBorder: '#cc7a69'
};


/***/ },

/***/ "./src/lib/themes/accent/miku.js"
/*!***************************************!*\
  !*** ./src/lib/themes/accent/miku.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'motion-primary': '#39c5bb',
  'motion-primary-transparent': '#39c5bbe6',
  'motion-tertiary': '#2c9e96',
  'looks-secondary': '#39c5bb',
  'looks-transparent': '#39c5bb59',
  'looks-light-transparent': '#39c5bb26',
  'looks-secondary-dark': '#2c9e96',
  'extensions-primary': '#39c5bb',
  'extensions-tertiary': '#2c9e96',
  'extensions-transparent': '#39c5bb59',
  'extensions-light': '#8ae3d9',
  'drop-highlight': '#8ae3d9'
};
const blockColors = {
  checkboxActiveBackground: '#39c5bb',
  checkboxActiveBorder: '#2c9e96'
};


/***/ },

/***/ "./src/lib/themes/accent/purple.js"
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/purple.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'motion-primary': 'hsla(260, 60%, 60%, 1)',
  'motion-primary-transparent': 'hsla(260, 60%, 60%, 0.9)',
  'motion-tertiary': 'hsla(260, 42%, 51%, 1)',
  'looks-secondary': 'hsla(260, 60%, 60%, 1)',
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)',
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)',
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)'
};
const blockColors = {};


/***/ },

/***/ "./src/lib/themes/accent/rainbow.js"
/*!******************************************!*\
  !*** ./src/lib/themes/accent/rainbow.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'menu-bar-background': 'var(--looks-secondary)',
  'menu-bar-background-image': 'none',
  'icon-style': 'brightness(1)',
  'menu-bar-feedback': 'white',
  'menu-bar-foreground': '#ffffff',
  'looks-secondary': '#ff4c4c',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c',
  // eslint-disable-next-line max-len
  'menu-bar-background-image': 'linear-gradient(90deg, rgba(255, 0, 0, 0.75) 0%, rgba(255, 154, 0, 0.75) 10%, rgba(208, 222, 33, 0.75) 20%, rgba(79, 220, 74, 0.75) 30%, rgba(63, 218, 216, 0.75) 40%, rgba(47, 201, 226, 0.75) 50%, rgba(28, 127, 238, 0.75) 60%, rgba(95, 21, 242, 0.75) 70%, rgba(186, 12, 248, 0.75) 80%, rgba(251, 7, 217, 0.75) 90%, rgba(255, 0, 0, 0.75) 100%)'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ },

/***/ "./src/lib/themes/accent/red.js"
/*!**************************************!*\
  !*** ./src/lib/themes/accent/red.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'motion-primary': '#ff4c4c',
  'motion-primary-transparent': '#ff4c4ce6',
  'motion-tertiary': '#cc3333',
  'looks-secondary': '#ff4c4c',
  'looks-transparent': '#ff4d4d59',
  'looks-light-transparent': '#ff4d4d26',
  'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
  'extensions-primary': 'hsla(10, 85%, 65%, 1)',
  'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
  'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
  'extensions-light': 'hsla(10, 57%, 85%, 1)',
  'drop-highlight': '#ff8c8c'
};
const blockColors = {
  checkboxActiveBackground: '#ff4c4c',
  checkboxActiveBorder: '#cc3333'
};


/***/ },

/***/ "./src/lib/themes/accent/ty.js"
/*!*************************************!*\
  !*** ./src/lib/themes/accent/ty.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'motion-primary': '#66ccff',
  'motion-primary-transparent': '#66ccffe6',
  'motion-tertiary': '#4da3cc',
  'looks-secondary': '#66ccff',
  'looks-transparent': '#66ccff59',
  'looks-light-transparent': '#66ccff26',
  'looks-secondary-dark': '#4da3cc',
  'extensions-primary': '#66ccff',
  'extensions-tertiary': '#4da3cc',
  'extensions-transparent': '#66ccff59',
  'extensions-light': '#b3e6ff',
  'drop-highlight': '#b3e6ff'
};
const blockColors = {
  checkboxActiveBackground: '#66ccff',
  checkboxActiveBorder: '#4da3cc'
};


/***/ },

/***/ "./src/lib/themes/blocks/dark.js"
/*!***************************************!*\
  !*** ./src/lib/themes/blocks/dark.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   customExtensionColors: () => (/* binding */ customExtensionColors),
/* harmony export */   extensions: () => (/* binding */ extensions)
/* harmony export */ });
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");

const blockColors = {
  motion: {
    primary: '#0F1E33',
    secondary: '#4C4C4C',
    tertiary: '#4C97FF',
    quaternary: '#4C97FF'
  },
  looks: {
    primary: '#1E1433',
    secondary: '#4C4C4C',
    tertiary: '#9966FF',
    quaternary: '#9966FF'
  },
  sounds: {
    primary: '#291329',
    secondary: '#4C4C4C',
    tertiary: '#CF63CF',
    quaternary: '#CF63CF'
  },
  control: {
    primary: '#332205',
    secondary: '#4C4C4C',
    tertiary: '#FFAB19',
    quaternary: '#FFAB19'
  },
  event: {
    primary: '#332600',
    secondary: '#4C4C4C',
    tertiary: '#FFBF00',
    quaternary: '#FFBF00'
  },
  sensing: {
    primary: '#12232A',
    secondary: '#4C4C4C',
    tertiary: '#5CB1D6',
    quaternary: '#5CB1D6'
  },
  pen: {
    primary: '#03251C',
    secondary: '#4C4C4C',
    tertiary: '#0fBD8C',
    quaternary: '#0fBD8C'
  },
  operators: {
    primary: '#112611',
    secondary: '#4C4C4C',
    tertiary: '#59C059',
    quaternary: '#59C059'
  },
  data: {
    primary: '#331C05',
    secondary: '#4C4C4C',
    tertiary: '#FF8C1A',
    quaternary: '#FF8C1A'
  },
  data_lists: {
    primary: '#331405',
    secondary: '#4C4C4C',
    tertiary: '#FF661A',
    quaternary: '#FF661A'
  },
  more: {
    primary: '#331419',
    secondary: '#4C4C4C',
    tertiary: '#FF6680',
    quaternary: '#FF6680'
  },
  addons: {
    primary: '#0b3331',
    secondary: '#4C4C4C',
    tertiary: '#34e4d0',
    quaternary: '#34e4d0'
  },
  text: 'rgba(255, 255, 255, .7)',
  textFieldText: '#E5E5E5',
  textField: '#4C4C4C',
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {};
const customExtensionColors = {
  primary: _primary => {
    const hsv = (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__.hex2hsv)(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__.hsv2hex)(hsv);
  },
  secondary: () => '#4C4C4C',
  tertiary: primary => primary,
  quaternary: primary => primary,
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ },

/***/ "./src/lib/themes/blocks/high-contrast.js"
/*!************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   customExtensionColors: () => (/* binding */ customExtensionColors),
/* harmony export */   extensions: () => (/* binding */ extensions)
/* harmony export */ });
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./high-contrast-media/extensions/musicIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./high-contrast-media/extensions/penIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./high-contrast-media/extensions/text2speechIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./high-contrast-media/extensions/translateIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-contrast-media/extensions/videoSensingIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");






const blockColors = {
  motion: {
    primary: '#80B5FF',
    secondary: '#B3D2FF',
    tertiary: '#3373CC',
    quaternary: '#CCE1FF'
  },
  looks: {
    primary: '#CCB3FF',
    secondary: '#DDCCFF',
    tertiary: '#774DCB',
    quaternary: '#EEE5FF'
  },
  sounds: {
    primary: '#E19DE1',
    secondary: '#FFB3FF',
    tertiary: '#BD42BD',
    quaternary: '#FFCCFF'
  },
  control: {
    primary: '#FFBE4C',
    secondary: '#FFDA99',
    tertiary: '#CF8B17',
    quaternary: '#FFE3B3'
  },
  event: {
    primary: '#FFD966',
    secondary: '#FFECB3',
    tertiary: '#CC9900',
    quaternary: '#FFF2CC'
  },
  sensing: {
    primary: '#85C4E0',
    secondary: '#AED8EA',
    tertiary: '#2E8EB8',
    quaternary: '#C2E2F0'
  },
  pen: {
    primary: '#13ECAF',
    secondary: '#75F0CD',
    tertiary: '#0B8E69',
    quaternary: '#A3F5DE'
  },
  operators: {
    primary: '#7ECE7E',
    secondary: '#B5E3B5',
    tertiary: '#389438',
    quaternary: '#DAF1DA'
  },
  data: {
    primary: '#FFA54C',
    secondary: '#FFCC99',
    tertiary: '#DB6E00',
    quaternary: '#FFE5CC'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF9966',
    secondary: '#FFCAB0',
    // I don't think this is used, b/c we don't have any droppable fields in list blocks
    tertiary: '#E64D00',
    quaternary: '#FFDDCC'
  },
  more: {
    primary: '#FF99AA',
    secondary: '#FFCCD5',
    tertiary: '#FF3355',
    quaternary: '#FFE5EA'
  },
  addons: {
    primary: '#34e4d0',
    secondary: '#71e2d5',
    tertiary: '#29b2a2',
    quaternary: '#9ee2db'
  },
  text: '#000000',
  textFieldText: '#000000',
  // Text inside of inputs e.g. 90 in [point in direction (90)]
  toolboxText: '#000000',
  // Toolbox text, color picker text (used to be #575E75)
  blackText: '#000000',
  // The color that the category menu label (e.g. 'motion', 'looks', etc.) changes to on hover
  toolboxHover: '#3373CC',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dragShadowOpacity: 0.6,
  menuHover: 'rgba(255, 255, 255, 0.3)'
};
const extensions = {
  music: {
    blockIconURI: (_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default())
  },
  pen: {
    blockIconURI: (_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default())
  },
  text2speech: {
    blockIconURI: (_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default())
  },
  translate: {
    blockIconURI: (_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default())
  },
  videoSensing: {
    blockIconURI: (_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default())
  }
};
const clamp = (value, lower, upper) => Math.max(lower, Math.min(upper, value));
const customExtensionColors = {
  primary: _primary => {
    const hsv = (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hex2hsv)(_primary);
    hsv[1] = clamp(hsv[1] - 20, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hsv2hex)(hsv);
  },
  secondary: primary => {
    const hsv = (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hex2hsv)(primary);
    hsv[1] = clamp(hsv[1] - 40, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hsv2hex)(hsv);
  },
  tertiary: primary => {
    const hsv = (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hex2hsv)(primary);
    hsv[2] = clamp(hsv[2] - 20, 0, 100);
    return (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hsv2hex)(hsv);
  },
  quaternary: primary => {
    const hsv = (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hex2hsv)(primary);
    hsv[1] = clamp(hsv[1] - 60, 0, 100);
    hsv[2] = clamp(hsv[2] + 20, 90, 100);
    return (0,_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__.hsv2hex)(hsv);
  },
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ },

/***/ "./src/lib/themes/blocks/three.js"
/*!****************************************!*\
  !*** ./src/lib/themes/blocks/three.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   extensions: () => (/* binding */ extensions)
/* harmony export */ });
const blockColors = {
  motion: {
    primary: '#4C97FF',
    secondary: '#4280D7',
    tertiary: '#3373CC',
    quaternary: '#3373CC'
  },
  looks: {
    primary: '#9966FF',
    secondary: '#855CD6',
    tertiary: '#774DCB',
    quaternary: '#774DCB'
  },
  sounds: {
    primary: '#CF63CF',
    secondary: '#C94FC9',
    tertiary: '#BD42BD',
    quaternary: '#BD42BD'
  },
  control: {
    primary: '#FFAB19',
    secondary: '#EC9C13',
    tertiary: '#CF8B17',
    quaternary: '#CF8B17'
  },
  event: {
    primary: '#FFBF00',
    secondary: '#E6AC00',
    tertiary: '#CC9900',
    quaternary: '#CC9900'
  },
  sensing: {
    primary: '#5CB1D6',
    secondary: '#47A8D1',
    tertiary: '#2E8EB8',
    quaternary: '#2E8EB8'
  },
  pen: {
    primary: '#0fBD8C',
    secondary: '#0DA57A',
    tertiary: '#0B8E69',
    quaternary: '#0B8E69'
  },
  operators: {
    primary: '#59C059',
    secondary: '#46B946',
    tertiary: '#389438',
    quaternary: '#389438'
  },
  data: {
    primary: '#FF8C1A',
    secondary: '#FF8000',
    tertiary: '#DB6E00',
    quaternary: '#DB6E00'
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: '#FF661A',
    secondary: '#FF5500',
    tertiary: '#E64D00',
    quaternary: '#E64D00'
  },
  more: {
    primary: '#FF6680',
    secondary: '#FF4D6A',
    tertiary: '#FF3355',
    quaternary: '#FF3355'
  },
  addons: {
    primary: '#29beb8',
    secondary: '#3aa8a4',
    tertiary: '#3aa8a4',
    quaternary: '#3aa8a4'
  },
  text: '#FFFFFF',
  workspace: '#F9F9F9',
  toolboxHover: '#4C97FF',
  toolboxSelected: '#E9EEF2',
  toolboxText: '#575E75',
  toolbox: '#FFFFFF',
  blackText: '#575E75',
  flyout: '#F9F9F9',
  scrollbar: '#CECDCE',
  scrollbarHover: '#CECDCE',
  textField: '#FFFFFF',
  textFieldText: '#575E75',
  insertionMarker: '#000000',
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: '#FFF200',
  stackGlowSize: 4,
  stackGlowOpacity: 1,
  replacementGlow: '#FFFFFF',
  replacementGlowSize: 2,
  replacementGlowOpacity: 1,
  colourPickerStroke: '#FFFFFF',
  // CSS colours: support RGBA
  fieldShadow: 'rgba(255, 255, 255, 0.3)',
  dropDownShadow: 'rgba(0, 0, 0, .3)',
  numPadBackground: '#547AB2',
  numPadBorder: '#435F91',
  numPadActiveBackground: '#435F91',
  numPadText: 'white',
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: '#FFFFFF',
  valueReportBorder: '#AAAAAA',
  valueReportForeground: '#000000',
  menuHover: 'rgba(0, 0, 0, 0.2)',
  contextMenuBackground: '#ffffff',
  contextMenuBorder: '#cccccc',
  contextMenuForeground: '#000000',
  contextMenuActiveBackground: '#d6e9f8',
  contextMenuDisabledForeground: '#cccccc',
  flyoutLabelColor: '#575E75',
  checkboxInactiveBackground: '#ffffff',
  checkboxInactiveBorder: '#c8c8c8',
  checkboxActiveBackground: '#4C97FF',
  checkboxActiveBorder: '#3373CC',
  checkboxCheck: '#ffffff',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#ffffff',
  buttonForeground: '#575E75',
  zoomIconFilter: 'none',
  gridColor: '#dddddd'
};
const extensions = {};


/***/ },

/***/ "./src/lib/themes/custom/custom.js"
/*!*****************************************!*\
  !*** ./src/lib/themes/custom/custom.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   customBlockColors: () => (/* binding */ customBlockColors),
/* harmony export */   customGUITheme: () => (/* binding */ customGUITheme),
/* harmony export */   getAllColor: () => (/* binding */ getAllColor),
/* harmony export */   getColorOf: () => (/* binding */ getColorOf),
/* harmony export */   guiColors: () => (/* binding */ guiColors),
/* harmony export */   saveColors: () => (/* binding */ saveColors),
/* harmony export */   setColorTo: () => (/* binding */ setColorTo)
/* harmony export */ });

let customGUITheme = localStorage.getItem('constomTheme');
if (customGUITheme == null || customGUITheme === 'undefined' || customGUITheme === 'null') {
  customGUITheme = {
    'motion-primary': '#ff4c4c',
    'motion-primary-transparent': '#ff4c4ce6',
    'motion-tertiary': '#cc3333',
    'looks-secondary': '#ff4c4c',
    'looks-transparent': '#ff4d4d59',
    'looks-light-transparent': '#ff4d4d26',
    'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
    'extensions-primary': 'hsla(10, 85%, 65%, 1)',
    'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
    'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
    'extensions-light': 'hsla(10, 57%, 85%, 1)',
    'drop-highlight': '#ff8c8c'
  };
} else {
  try {
    customGUITheme = JSON.parse(customGUITheme);
  } catch (e) {
    console.warn('Failed to parse customGUITheme:', e);
    customGUITheme = {
      'motion-primary': '#ff4c4c',
      'motion-primary-transparent': '#ff4c4ce6',
      'motion-tertiary': '#cc3333',
      'looks-secondary': '#ff4c4c',
      'looks-transparent': '#ff4d4d59',
      'looks-light-transparent': '#ff4d4d26',
      'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',
      'extensions-primary': 'hsla(10, 85%, 65%, 1)',
      'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
      'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
      'extensions-light': 'hsla(10, 57%, 85%, 1)',
      'drop-highlight': '#ff8c8c'
    };
  }
}
let customBlockColors = localStorage.getItem('blockColors');
if (customBlockColors == null || customBlockColors === 'undefined' || customBlockColors === 'null') {
  customBlockColors = {
    checkboxActiveBackground: '#ff4c4c',
    checkboxActiveBorder: '#cc3333'
  };
} else {
  try {
    customBlockColors = JSON.parse(customBlockColors);
  } catch (e) {
    console.warn('Failed to parse customBlockColors:', e);
    customBlockColors = {
      checkboxActiveBackground: '#ff4c4c',
      checkboxActiveBorder: '#cc3333'
    };
  }
}
const guiColors = customGUITheme;
const blockColors = customBlockColors;
const setColorTo = (id, value) => {
  console.log(value);
  if (id == 'checkboxActiveBackground' || id == 'checkboxActiveBorder') customBlockColors[id] = value;else customGUITheme[id] = value;
};
const getColorOf = id => {
  if (id == 'checkboxActiveBackground' || id == 'checkboxActiveBorder') return customBlockColors[id];
  return customGUITheme[id];
};
const saveColors = () => {
  localStorage.setItem('constomTheme', JSON.stringify(customGUITheme));
  localStorage.setItem('blockColors', JSON.stringify(customBlockColors));
};
function getAllColor() {
  return {
    guiColors: customGUITheme,
    blockColors: customBlockColors
  };
}


/***/ },

/***/ "./src/lib/themes/gui/dark.js"
/*!************************************!*\
  !*** ./src/lib/themes/gui/dark.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#111111',
  'ui-secondary': '#1e1e1e',
  'ui-tertiary': '#2e2e2e',
  'ui-modal-overlay': '#333333aa',
  'ui-modal-background': '#111111',
  'ui-modal-foreground': '#eeeeee',
  'ui-modal-header-background': '#333333',
  'ui-modal-header-foreground': '#ffffff',
  'ui-white': '#111111',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': '#333333',
  'menu-bar-feedback': 'white',
  'icon-style': 'brightness(1)',
  'assets-background': '#111111',
  'input-background': '#1e1e1e',
  'popover-background': '#1e1e1e',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'fullscreen-background': '#111111',
  'fullscreen-accent': '#111111',
  'page-background': '#111111',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#ffffff3f',
  'link-color': '#44aaff',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#1e1e1e',
  toolboxSelected: '#1e1e1e',
  toolboxText: '#cccccc',
  toolbox: '#111111',
  flyout: '#111111',
  scrollbar: '#666666',
  valueReportBackground: '#1e1e1e',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#111111',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#484848'
};


/***/ },

/***/ "./src/lib/themes/gui/deep_dark.js"
/*!*****************************************!*\
  !*** ./src/lib/themes/gui/deep_dark.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'color-scheme': 'dark',
  'ui-primary': '#050505',
  'ui-secondary': '#101010',
  'ui-tertiary': '#101010',
  'ui-modal-overlay': '#111111aa',
  'ui-modal-background': '#050505',
  'ui-modal-foreground': '#e0e0e0',
  'ui-modal-header-background': '#050505',
  'ui-modal-header-foreground': '#eeeeee',
  'ui-white': '#050505',
  'ui-black-transparent': '#ffffff26',
  'text-primary': '#eeeeee',
  'menu-bar-background': '#050505',
  'menu-bar-feedback': 'white',
  'icon-style': 'brightness(1)',
  'assets-background': '#050505',
  'input-background': '#101010',
  'popover-background': '#101010',
  'badge-background': '#16202c',
  'badge-border': '#203652',
  'fullscreen-background': '#050505',
  'fullscreen-accent': '#050505',
  'page-background': '#050505',
  'page-foreground': '#eeeeee',
  'project-title-inactive': 'var(--ui-secondary)',
  'project-title-hover': '#eeeeee3f',
  'link-color': '#004488',
  'filter-icon-black': 'invert(100%)',
  'filter-icon-gray': 'grayscale(100%) brightness(1.7)',
  'filter-icon-white': 'brightness(0) invert(100%)',
  'paint-filter-icon-gray': 'brightness(1.7)'
};
const blockColors = {
  insertionMarker: '#cccccc',
  workspace: '#101010',
  toolboxSelected: '#101010',
  toolboxText: '#cccccc',
  toolbox: '#050505',
  flyout: '#050505',
  scrollbar: '#666666',
  valueReportBackground: '#101010',
  valueReportBorder: '#333333',
  valueReportForeground: '#eeeeee',
  contextMenuBackground: '#050505',
  contextMenuBorder: '#ffffff26',
  contextMenuForeground: '#eeeeee',
  contextMenuActiveBackground: '#2e2e2e',
  contextMenuDisabledForeground: '#666666',
  flyoutLabelColor: '#cccccc',
  checkboxInactiveBackground: '#222222',
  checkboxInactiveBorder: '#c8c8c8',
  buttonBorder: '#c6c6c6',
  buttonActiveBackground: '#222222',
  buttonForeground: '#cccccc',
  zoomIconFilter: 'invert(100%)',
  gridColor: '#484848'
};


/***/ },

/***/ "./src/lib/themes/gui/light.js"
/*!*************************************!*\
  !*** ./src/lib/themes/gui/light.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'hsla(215, 100%, 95%, 1)' /* #E5F0FF */,
  'ui-secondary': 'hsla(215, 75%, 95%, 1)' /* #E9F1FC */,
  'ui-tertiary': 'hsla(215, 50%, 90%, 1)' /* #D9E3F2 */,

  'ui-modal-overlay': 'var(--motion-primary-transparent)',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)' /* #FFFFFF */,
  'ui-modal-foreground': 'hsla(225, 15%, 40%, 1)' /* #575E75 */,
  'ui-modal-header-background': 'var(--looks-secondary)',
  'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)' /* #FFFFFF */,

  'ui-white': 'hsla(0, 100%, 100%, 1)' /* #FFFFFF */,
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)' /* 25% transparent version of ui-white */,
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)' /* 25% transparent version of ui-white */,
  'ui-transparent': 'hsla(0, 100%, 100%, 0)' /* 25% transparent version of ui-white */,

  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)' /* 15% transparent version of black */,

  'text-primary': 'hsla(225, 15%, 40%, 1)' /* #575E75 */,
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 65%, 1)' /* #4C97FF */,
  'motion-primary-transparent': 'hsla(215, 100%, 65%, 0.9)' /* 90% transparent version of motion-primary */,
  'motion-tertiary': 'hsla(215, 60%, 50%, 1)' /* #3373CC */,

  'looks-secondary': 'hsla(260, 60%, 60%, 1)' /* #855CD6 */,
  'looks-transparent': 'hsla(260, 60%, 60%, 0.35)' /* 35% transparent version of looks-tertiary */,
  'looks-light-transparent': 'hsla(260, 60%, 60%, 0.15)' /* 15% transparent version of looks-tertiary */,
  'looks-secondary-dark': 'hsla(260, 42%, 51%, 1)' /* #714EB6 */,

  'red-primary': 'hsla(20, 100%, 55%, 1)' /* #FF661A */,
  'red-tertiary': 'hsla(20, 100%, 45%, 1)' /* #E64D00 */,

  'sound-primary': 'hsla(300, 53%, 60%, 1)' /* #CF63CF */,
  'sound-tertiary': 'hsla(300, 48%, 50%, 1)' /* #BD42BD */,

  'control-primary': 'hsla(38, 100%, 55%, 1)' /* #FFAB19 */,

  'data-primary': 'hsla(30, 100%, 55%, 1)' /* #FF8C1A */,

  'pen-primary': 'hsla(163, 85%, 40%, 1)' /* #0FBD8C */,
  'pen-transparent': 'hsla(163, 85%, 40%, 0.25)' /* #0FBD8C */,
  'pen-tertiary': 'hsla(163, 86%, 30%, 1)' /* #0B8E69 */,

  'error-primary': 'hsla(30, 100%, 55%, 1)' /* #FF8C1A */,
  'error-light': 'hsla(30, 100%, 70%, 1)' /* #FFB366 */,
  'error-transparent': 'hsla(30, 100%, 55%, 0.25)' /* #FF8C1A */,

  'extensions-primary': 'hsla(163, 85%, 40%, 1)' /* #0FBD8C */,
  'extensions-tertiary': 'hsla(163, 85%, 30%, 1)' /* #0B8E69 */,
  'extensions-transparent': 'hsla(163, 85%, 40%, 0.35)' /* 35% transparent version of extensions-primary */,
  'extensions-light': 'hsla(163, 57%, 85%, 1)' /* opaque version of extensions-transparent, on white bg */,

  'drop-highlight': 'hsla(215, 100%, 77%, 1)' /* lighter than motion-primary */,

  'menu-bar-background': 'var(--looks-secondary)',
  'menu-bar-background-image': 'none',
  'icon-style': 'brightness(1)',
  'menu-bar-feedback': 'white',
  'menu-bar-foreground': '#ffffff',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  shadow: 'hsla(0, 0%, 0%, 0.15)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {};


/***/ },

/***/ "./src/lib/themes/gui/modern_white.js"
/*!********************************************!*\
  !*** ./src/lib/themes/gui/modern_white.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockColors: () => (/* binding */ blockColors),
/* harmony export */   guiColors: () => (/* binding */ guiColors)
/* harmony export */ });
const guiColors = {
  'color-scheme': 'light',
  'ui-primary': 'color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))',
  'ui-secondary': 'color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))',
  'ui-tertiary': 'color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))',
  'ui-modal-overlay': 'color-mix(in srgb, rgba(130, 130, 130, 0.8) 98%, var(--looks-secondary))',
  'ui-modal-background': 'hsla(0, 100%, 100%, 1)',
  'ui-modal-foreground': 'rgb(117, 117, 117)',
  'ui-modal-header-background': '#ffffff',
  'ui-modal-header-foreground': 'rgb(0, 0, 0)',
  'ui-white': 'rgb(255, 255, 255)',
  'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)',
  'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)',
  'ui-transparent': 'hsla(0, 100%, 100%, 0)',
  'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)',
  'text-primary': 'hsla(225, 15%, 40%, 1)',
  'text-primary-transparent': 'hsla(225, 15%, 40%, 0.75)',
  'motion-primary': 'hsla(215, 100%, 75%, 1)',
  'motion-primary-transparent': 'hsla(215, 100%, 75%, 0.9)',
  'motion-tertiary': 'hsla(215, 60%, 65%, 1)',
  'looks-secondary': 'hsla(260, 60%, 72%, 1)',
  'looks-transparent': 'hsla(260, 60%, 72%, 0.35)',
  'looks-light-transparent': 'hsla(260, 60%, 72%, 0.15)',
  'looks-secondary-dark': 'hsla(260, 42%, 62%, 1)',
  'red-primary': 'hsla(20, 100%, 65%, 1)',
  'red-tertiary': 'hsla(20, 100%, 55%, 1)',
  'sound-primary': 'hsla(300, 53%, 72%, 1)',
  'sound-tertiary': 'hsla(300, 48%, 62%, 1)',
  'control-primary': 'hsla(38, 100%, 72%, 1)',
  'data-primary': 'hsla(30, 100%, 70%, 1)',
  'pen-primary': 'hsla(163, 85%, 68%, 1)',
  'pen-transparent': 'hsla(163, 85%, 68%, 0.25)',
  'pen-tertiary': 'hsla(163, 86%, 58%, 1)',
  'error-primary': 'hsla(30, 100%, 68%, 1)',
  'error-light': 'hsla(30, 100%, 78%, 1)',
  'error-transparent': 'hsla(30, 100%, 68%, 0.25)',
  'extensions-primary': 'hsla(163, 85%, 68%, 1)',
  'extensions-tertiary': 'hsla(163, 85%, 58%, 1)',
  'extensions-transparent': 'hsla(163, 85%, 68%, 0.35)',
  'extensions-light': 'hsla(163, 57%, 85%, 1)',
  'drop-highlight': 'hsla(215, 100%, 85%, 1)',
  'menu-bar-background': 'color-mix(in srgb, rgb(255, 255, 255) 98%, var(--looks-secondary))',
  'menu-bar-background-image': 'none',
  'icon-style': 'brightness(0.2)',
  'menu-bar-feedback': '#606060',
  'menu-bar-foreground': '#7d7d7d',
  'assets-background': '#ffffff',
  'input-background': '#ffffff',
  'popover-background': '#ffffff',
  shadow: 'hsla(0, 0%, 0%, 0.05)',
  'badge-background': '#dbebff',
  'badge-border': '#b9d6ff',
  'fullscreen-background': '#ffffff',
  'fullscreen-accent': '#e8edf1',
  'page-background': '#ffffff',
  'page-foreground': '#000000',
  'project-title-inactive': 'var(--ui-white-transparent)',
  'project-title-hover': '#ffffff7f',
  'link-color': '#2255dd',
  'filter-icon-black': 'none',
  'filter-icon-gray': 'grayscale(100%)',
  'filter-icon-white': 'none',
  'paint-ui-pane-border': 'var(--ui-black-transparent)',
  'paint-text-primary': 'var(--text-primary)',
  'paint-form-border': 'var(--ui-black-transparent)',
  'paint-looks-secondary': 'var(--looks-secondary)',
  'paint-looks-transparent': 'var(--looks-transparent)',
  'paint-input-background': 'var(--input-background)',
  'paint-popover-background': 'var(--popover-background)',
  'paint-filter-icon-gray': 'none'
};
const blockColors = {};


/***/ },

/***/ "./src/lib/themes/guiHelpers.js"
/*!**************************************!*\
  !*** ./src/lib/themes/guiHelpers.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyGuiColors: () => (/* binding */ applyGuiColors)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");
/* harmony import */ var _addons_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../addons/hooks */ "./src/addons/hooks.js");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-styles.css */ "./src/lib/themes/global-styles.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



const BLOCK_COLOR_NAMES = [
// Corresponds to the name of the object in blockColors
'motion', 'looks', 'sounds', 'control', 'event', 'sensing', 'pen', 'operators', 'data', 'data_lists', 'more', 'addons'];

/**
 * @param {string} css CSS color or var(--...)
 * @returns {string} evaluated CSS
 */
const evaluateCSS = css => {
  const variableMatch = css.match(/^var\(([\w-]+)\)$/);
  if (variableMatch) {
    return document.documentElement.style.getPropertyValue(variableMatch[1]);
  }
  return css;
};

/**
 * @param {Theme} theme the theme
 */
const applyGuiColors = theme => {
  const doc = document.documentElement;
  const defaultGuiColors = ___WEBPACK_IMPORTED_MODULE_0__.Theme.light.getGuiColors();
  for (const _ref of Object.entries(defaultGuiColors)) {
    var _ref2 = _slicedToArray(_ref, 2);
    const name = _ref2[0];
    const value = _ref2[1];
    doc.style.setProperty("--".concat(name, "-default"), value);
  }
  const guiColors = theme.getGuiColors();
  for (const _ref3 of Object.entries(guiColors)) {
    var _ref4 = _slicedToArray(_ref3, 2);
    const name = _ref4[0];
    const value = _ref4[1];
    doc.style.setProperty("--".concat(name), value);
  }
  const blockColors = theme.getBlockColors();
  doc.style.setProperty('--editorTheme3-blockText', blockColors.text);
  doc.style.setProperty('--editorTheme3-inputColor', blockColors.textField);
  doc.style.setProperty('--editorTheme3-inputColor-text', blockColors.textFieldText);
  for (const color of BLOCK_COLOR_NAMES) {
    doc.style.setProperty("--editorTheme3-".concat(color, "-primary"), blockColors[color].primary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-secondary"), blockColors[color].secondary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-tertiary"), blockColors[color].tertiary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-field-background"), blockColors[color].quaternary);
  }

  // Some browsers will color their interfaces to match theme-color, so if we make it the same color as our
  // menu bar, it'll look pretty cool.
  let metaThemeColor = document.head.querySelector('meta[name=theme-color]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', evaluateCSS(guiColors['menu-bar-background']));

  // a horrible hack for icons...
  window.Recolor = {
    primary: guiColors['looks-secondary']
  };
  _addons_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].recolorCallbacks.forEach(i => i());
};


/***/ },

/***/ "./src/lib/themes/index.js"
/*!*********************************!*\
  !*** ./src/lib/themes/index.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCENT_AE: () => (/* binding */ ACCENT_AE),
/* harmony export */   ACCENT_BLUE: () => (/* binding */ ACCENT_BLUE),
/* harmony export */   ACCENT_CE: () => (/* binding */ ACCENT_CE),
/* harmony export */   ACCENT_COSTOM: () => (/* binding */ ACCENT_COSTOM),
/* harmony export */   ACCENT_MAP: () => (/* binding */ ACCENT_MAP),
/* harmony export */   ACCENT_MIKU: () => (/* binding */ ACCENT_MIKU),
/* harmony export */   ACCENT_PURPLE: () => (/* binding */ ACCENT_PURPLE),
/* harmony export */   ACCENT_RAINBOW: () => (/* binding */ ACCENT_RAINBOW),
/* harmony export */   ACCENT_RED: () => (/* binding */ ACCENT_RED),
/* harmony export */   ACCENT_TY: () => (/* binding */ ACCENT_TY),
/* harmony export */   BLOCKS_CUSTOM: () => (/* binding */ BLOCKS_CUSTOM),
/* harmony export */   BLOCKS_DARK: () => (/* binding */ BLOCKS_DARK),
/* harmony export */   BLOCKS_HIGH_CONTRAST: () => (/* binding */ BLOCKS_HIGH_CONTRAST),
/* harmony export */   BLOCKS_MAP: () => (/* binding */ BLOCKS_MAP),
/* harmony export */   BLOCKS_THREE: () => (/* binding */ BLOCKS_THREE),
/* harmony export */   GUI_DARK: () => (/* binding */ GUI_DARK),
/* harmony export */   GUI_DEEKDARK: () => (/* binding */ GUI_DEEKDARK),
/* harmony export */   GUI_LIGHT: () => (/* binding */ GUI_LIGHT),
/* harmony export */   GUI_MAP: () => (/* binding */ GUI_MAP),
/* harmony export */   GUI_MODERNWHITE: () => (/* binding */ GUI_MODERNWHITE),
/* harmony export */   Theme: () => (/* binding */ Theme),
/* harmony export */   defaultBlockColors: () => (/* binding */ defaultBlockColors)
/* harmony export */ });
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "../../node_modules/.pnpm/lodash.defaultsdeep@4.6.1/node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accent_purple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accent/purple */ "./src/lib/themes/accent/purple.js");
/* harmony import */ var _accent_blue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent/blue */ "./src/lib/themes/accent/blue.js");
/* harmony import */ var _accent_red__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accent/red */ "./src/lib/themes/accent/red.js");
/* harmony import */ var _accent_rainbow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accent/rainbow */ "./src/lib/themes/accent/rainbow.js");
/* harmony import */ var _accent_astraeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accent/astraeditor */ "./src/lib/themes/accent/astraeditor.js");
/* harmony import */ var _custom_custom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom/custom */ "./src/lib/themes/custom/custom.js");
/* harmony import */ var _accent_ce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accent/ce */ "./src/lib/themes/accent/ce.js");
/* harmony import */ var _accent_ty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accent/ty */ "./src/lib/themes/accent/ty.js");
/* harmony import */ var _accent_miku__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accent/miku */ "./src/lib/themes/accent/miku.js");
/* harmony import */ var _gui_light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gui/light */ "./src/lib/themes/gui/light.js");
/* harmony import */ var _gui_dark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gui/dark */ "./src/lib/themes/gui/dark.js");
/* harmony import */ var _gui_deep_dark__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gui/deep_dark */ "./src/lib/themes/gui/deep_dark.js");
/* harmony import */ var _gui_modern_white__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gui/modern_white */ "./src/lib/themes/gui/modern_white.js");
/* harmony import */ var _blocks_three__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/three */ "./src/lib/themes/blocks/three.js");
/* harmony import */ var _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/high-contrast */ "./src/lib/themes/blocks/high-contrast.js");
/* harmony import */ var _blocks_dark__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/dark */ "./src/lib/themes/blocks/dark.js");
var _Theme;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

















const ACCENT_PURPLE = 'purple';
const ACCENT_BLUE = 'blue';
const ACCENT_RED = 'red';
const ACCENT_RAINBOW = 'rainbow';
const ACCENT_AE = 'astraeditor';
const ACCENT_COSTOM = 'custom';
const ACCENT_CE = 'ce';
const ACCENT_TY = 'ty';
const ACCENT_MIKU = 'miku';
const ACCENT_MAP = {
  [ACCENT_PURPLE]: _accent_purple__WEBPACK_IMPORTED_MODULE_1__,
  [ACCENT_BLUE]: _accent_blue__WEBPACK_IMPORTED_MODULE_2__,
  [ACCENT_RED]: _accent_red__WEBPACK_IMPORTED_MODULE_3__,
  [ACCENT_RAINBOW]: _accent_rainbow__WEBPACK_IMPORTED_MODULE_4__,
  [ACCENT_AE]: _accent_astraeditor__WEBPACK_IMPORTED_MODULE_5__,
  [ACCENT_COSTOM]: _custom_custom__WEBPACK_IMPORTED_MODULE_6__.getAllColor(),
  [ACCENT_CE]: _accent_ce__WEBPACK_IMPORTED_MODULE_7__,
  [ACCENT_TY]: _accent_ty__WEBPACK_IMPORTED_MODULE_8__,
  [ACCENT_MIKU]: _accent_miku__WEBPACK_IMPORTED_MODULE_9__
};
const ACCENT_DEFAULT = ACCENT_AE;
const GUI_LIGHT = 'light';
const GUI_DARK = 'dark';
const GUI_DEEKDARK = 'deep_dark';
const GUI_MODERNWHITE = 'modern_white';
const GUI_MAP = {
  [GUI_LIGHT]: _gui_light__WEBPACK_IMPORTED_MODULE_10__,
  [GUI_DARK]: _gui_dark__WEBPACK_IMPORTED_MODULE_11__,
  [GUI_DEEKDARK]: _gui_deep_dark__WEBPACK_IMPORTED_MODULE_12__,
  [GUI_MODERNWHITE]: _gui_modern_white__WEBPACK_IMPORTED_MODULE_13__
};
const GUI_DEFAULT = GUI_DARK;
const BLOCKS_THREE = 'three';
const BLOCKS_DARK = 'dark';
const BLOCKS_HIGH_CONTRAST = 'high-contrast';
const BLOCKS_CUSTOM = 'custom';
const BLOCKS_DEFAULT = BLOCKS_THREE;
const defaultBlockColors = _blocks_three__WEBPACK_IMPORTED_MODULE_14__.blockColors;
const BLOCKS_MAP = {
  [BLOCKS_THREE]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_14__.blockColors,
    extensions: _blocks_three__WEBPACK_IMPORTED_MODULE_14__.extensions,
    customExtensionColors: {},
    useForStage: true
  },
  [BLOCKS_HIGH_CONTRAST]: {
    blocksMediaFolder: 'blocks-media/high-contrast',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_15__.blockColors, defaultBlockColors),
    extensions: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_15__.extensions,
    customExtensionColors: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_15__.customExtensionColors,
    useForStage: true
  },
  [BLOCKS_DARK]: {
    blocksMediaFolder: 'blocks-media/default',
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_dark__WEBPACK_IMPORTED_MODULE_16__.blockColors, defaultBlockColors),
    extensions: _blocks_dark__WEBPACK_IMPORTED_MODULE_16__.extensions,
    customExtensionColors: _blocks_dark__WEBPACK_IMPORTED_MODULE_16__.customExtensionColors,
    useForStage: false
  },
  [BLOCKS_CUSTOM]: {
    // to be filled by editor-theme3 addon
    blocksMediaFolder: 'blocks-media/default',
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_14__.blockColors,
    extensions: {},
    customExtensionColors: {},
    useForStage: false
  }
};
let themeObjectsCreated = 0;
class Theme {
  constructor(accent, gui, blocks) {
    // do not modify these directly
    /** @readonly */
    this.id = ++themeObjectsCreated;
    /** @readonly */
    this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
    /** @readonly */
    this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
    /** @readonly */
    this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
  }
  set(what, to) {
    if (what === 'accent') {
      return new Theme(to, this.gui, this.blocks);
    } else if (what === 'gui') {
      return new Theme(this.accent, to, this.blocks);
    } else if (what === 'blocks') {
      return new Theme(this.accent, this.gui, to);
    }
    throw new Error("Unknown theme property: ".concat(what));
  }
  getBlocksMediaFolder() {
    return BLOCKS_MAP[this.blocks].blocksMediaFolder;
  }
  getGuiColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, ACCENT_MAP[this.accent].guiColors, GUI_MAP[this.gui].guiColors, _gui_light__WEBPACK_IMPORTED_MODULE_10__.guiColors);
  }
  getBlockColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, ACCENT_MAP[this.accent].blockColors, GUI_MAP[this.gui].blockColors, BLOCKS_MAP[this.blocks].colors);
  }
  getExtensions() {
    return BLOCKS_MAP[this.blocks].extensions;
  }
  isDark() {
    return this.getGuiColors()['color-scheme'] === 'dark' || this.getGuiColors()['color-scheme'] === 'deep_dark';
  }
  getStageBlockColors() {
    if (BLOCKS_MAP[this.blocks].useForStage) {
      return this.getBlockColors();
    }
    return Theme.light.getBlockColors();
  }
  getCustomExtensionColors() {
    return BLOCKS_MAP[this.blocks].customExtensionColors;
  }
}
_Theme = Theme;
_defineProperty(Theme, "light", new _Theme(ACCENT_DEFAULT, GUI_LIGHT, BLOCKS_DEFAULT));
_defineProperty(Theme, "dark", new _Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT));
_defineProperty(Theme, "highContrast", new _Theme(ACCENT_DEFAULT, GUI_DEFAULT, BLOCKS_HIGH_CONTRAST));


/***/ },

/***/ "./src/lib/themes/themePersistance.js"
/*!********************************************!*\
  !*** ./src/lib/themes/themePersistance.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectTheme: () => (/* binding */ detectTheme),
/* harmony export */   onSystemPreferenceChange: () => (/* binding */ onSystemPreferenceChange),
/* harmony export */   persistTheme: () => (/* binding */ persistTheme)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");

const matchMedia = query => window.matchMedia ? window.matchMedia(query) : null;
const PREFERS_HIGH_CONTRAST_QUERY = matchMedia('(prefers-contrast: more)');
const PREFERS_DARK_QUERY = matchMedia('(prefers-color-scheme: dark)');
const STORAGE_KEY = 'tw:theme';

/**
 * @returns {Theme} detected theme
 */
const systemPreferencesTheme = () => {
  if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__.Theme.highContrast;
  }
  // 默认使用深色主题 (GUI_DARK)，不再根据系统浅色模式返回 Theme.light
  return ___WEBPACK_IMPORTED_MODULE_0__.Theme.dark;
};

/**
 * @param {function} onChange callback; no guarantees about arguments
 * @returns {function} call to remove event listeners to prevent memory leak
 */
const onSystemPreferenceChange = onChange => {
  if (!PREFERS_HIGH_CONTRAST_QUERY || !PREFERS_DARK_QUERY ||
  // Some old browsers don't support addEventListener on media queries
  !PREFERS_HIGH_CONTRAST_QUERY.addEventListener || !PREFERS_DARK_QUERY.addEventListener) {
    return () => {};
  }
  PREFERS_HIGH_CONTRAST_QUERY.addEventListener('change', onChange);
  PREFERS_DARK_QUERY.addEventListener('change', onChange);
  return () => {
    PREFERS_HIGH_CONTRAST_QUERY.removeEventListener('change', onChange);
    PREFERS_DARK_QUERY.removeEventListener('change', onChange);
  };
};

/**
 * @returns {Theme} the theme
 */
const detectTheme = () => {
  const systemPreferences = systemPreferencesTheme();
  try {
    const local = localStorage.getItem(STORAGE_KEY);

    // Migrate legacy preferences
    if (local === 'dark') {
      return ___WEBPACK_IMPORTED_MODULE_0__.Theme.dark;
    }
    if (local === 'light') {
      return ___WEBPACK_IMPORTED_MODULE_0__.Theme.light;
    }
    const parsed = JSON.parse(local);
    // Any invalid values in storage will be handled by Theme itself
    return new ___WEBPACK_IMPORTED_MODULE_0__.Theme(parsed.accent || systemPreferences.accent, parsed.gui || systemPreferences.gui, parsed.blocks || systemPreferences.blocks);
  } catch (e) {
    // ignore
  }
  return systemPreferences;
};

/**
 * @param {Theme} theme the theme
 */
const persistTheme = theme => {
  const systemPreferences = systemPreferencesTheme();
  const nonDefaultSettings = {};
  if (theme.accent !== systemPreferences.accent) {
    nonDefaultSettings.accent = theme.accent;
  }
  if (theme.gui !== systemPreferences.gui) {
    nonDefaultSettings.gui = theme.gui;
  }
  // custom blocks are managed by addon at runtime, don't save here
  if (theme.blocks !== systemPreferences.blocks && theme.blocks !== ___WEBPACK_IMPORTED_MODULE_0__.BLOCKS_CUSTOM) {
    nonDefaultSettings.blocks = theme.blocks;
  }
  if (Object.keys(nonDefaultSettings).length === 0) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  } else {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nonDefaultSettings));
    } catch (e) {
      // ignore
    }
  }

  // 触发自定义事件，通知组件主题已更改
  try {
    window.dispatchEvent(new Event('tw:theme-changed'));
  } catch (e) {
    // ignore
  }
};


/***/ },

/***/ "./src/lib/tw-color-utils.js"
/*!***********************************!*\
  !*** ./src/lib/tw-color-utils.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hex2hsv: () => (/* binding */ hex2hsv),
/* harmony export */   hsv2hex: () => (/* binding */ hsv2hex)
/* harmony export */ });
/*
    Parts of this file are from https://github.com/Qix-/color-convert/blob/6b7dee5a168f76bf42c084fefa7bbe1a0941ad7e/conversions.js

    Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>.
    Copyright (c) 2016-2021 Josh Junon <josh@junon.me>.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param {string} hex hex color code like #abc123
 * @returns {number[]} [r, g, b] in range [0-255]. Alpha channel is ignored.
 */
const hex2rgb = hex => {
  const parsed = Number.parseInt(hex.substring(1), 16);
  return [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {string} hex color code like #123abc
 */
const rgb2hex = rgb => {
  const number = rgb[0] << 16 | rgb[1] << 8 | rgb[2];
  return "#".concat(number.toString(16).padStart(6, '0'));
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {number[]} [h, s, v] in range [0-360] for h, [0-100] for s, v
 */
const rgb2hsv = rgb => {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = c => (v - c) / 6 / diff + 1 / 2;
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};

/**
 * @param {number[]} hsv [h, s, v] in range [0-360] for h, [0-100] for s, v
 * @returns {number[]} [r, g, b] in range [0-255]
 */
const hsv2rgb = hsv => {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
const hex2hsv = hex => rgb2hsv(hex2rgb(hex));
const hsv2hex = hsv => rgb2hex(hsv2rgb(hsv));


/***/ },

/***/ "./src/playground/app-target.js"
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../../node_modules/.pnpm/react-dom@16.14.0_react@16.14.0/node_modules/react-dom/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "../../node_modules/.pnpm/react-modal@3.9.1_react-dom@16.14.0_react@16.14.0__react@16.14.0/node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
(0,react_modal__WEBPACK_IMPORTED_MODULE_1__.setAppElement)(appTarget);
const render = children => {
  react_dom__WEBPACK_IMPORTED_MODULE_0__.render(children, appTarget);
  if (window.SplashEnd) {
    window.SplashEnd();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/lib/themes/global-styles.css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/lib/themes/global-styles.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* overridden by src/lib/themes/guiHelpers.js */

/* This is for overriding some styles that don't really "belong" to any existing stylesheets */

/* Try to use this sparingly, otherwise this will become unmaintainable again... */

:root {
  color-scheme: var(--color-scheme);
}

/* popover is used by gui and paint */

/* some of these are duplicated over there too; !important makes sure these win */

.Popover {
  color-scheme: light !important;
}

.Popover-body {
  color: var(--text-primary) !important;
  background: var(--popover-background) !important;
  border: 1px solid var(--ui-black-transparent) !important;
  box-shadow: 0px 0px 8px 1px var(--shadow) !important;
}

.Popover-tipShape {
  fill: var(--popover-background) !important;
  stroke: var(--ui-black-transparent) !important;
}

/* ScratchAdddons editor-dark-mode compatibility */

:root {
  --editorDarkMode-primary: var(--looks-secondary);
  --editorDarkMode-primary-transparent35: var(--looks-transparent);
  --editorDarkMode-primary-variant: var(--looks-secondary-dark);
  --editorDarkMode-border: var(--ui-black-transparent);
  --editorDarkMode-accent: var(--ui-modal-background);
  --editorDarkMode-categoryMenu-text: var(--text-primary);
  --editorDarkMode-accent-text: var(--text-primary);
  --editorDarkMode-page: var(--ui-primary);
  --editorDarkMode-highlightText: var(--looks-secondary);
}

:root {
  --editor-menu-background: var(--menu-bar-background);
}
`, "",{"version":3,"sources":["webpack://./src/lib/themes/global-styles.css"],"names":[],"mappings":"AAAA,+CAA+C;;AAE/C,8FAA8F;;AAE9F,kFAAkF;;AAElF;EACE,iCAAiC;AACnC;;AAEA,qCAAqC;;AAErC,iFAAiF;;AAEjF;EACE,8BAA8B;AAChC;;AAEA;EACE,qCAAqC;EACrC,gDAAgD;EAChD,wDAAwD;EACxD,oDAAoD;AACtD;;AAEA;EACE,0CAA0C;EAC1C,8CAA8C;AAChD;;AAEA,kDAAkD;;AAElD;EACE,gDAAgD;EAChD,gEAAgE;EAChE,6DAA6D;EAC7D,oDAAoD;EACpD,mDAAmD;EACnD,uDAAuD;EACvD,iDAAiD;EACjD,wCAAwC;EACxC,sDAAsD;AACxD;;AAEA;EACE,oDAAoD;AACtD","sourcesContent":["/* overridden by src/lib/themes/guiHelpers.js */\n\n/* This is for overriding some styles that don't really \"belong\" to any existing stylesheets */\n\n/* Try to use this sparingly, otherwise this will become unmaintainable again... */\n\n:root {\n  color-scheme: var(--color-scheme);\n}\n\n/* popover is used by gui and paint */\n\n/* some of these are duplicated over there too; !important makes sure these win */\n\n:global(.Popover) {\n  color-scheme: light !important;\n}\n\n:global(.Popover-body) {\n  color: var(--text-primary) !important;\n  background: var(--popover-background) !important;\n  border: 1px solid var(--ui-black-transparent) !important;\n  box-shadow: 0px 0px 8px 1px var(--shadow) !important;\n}\n\n:global(.Popover-tipShape) {\n  fill: var(--popover-background) !important;\n  stroke: var(--ui-black-transparent) !important;\n}\n\n/* ScratchAdddons editor-dark-mode compatibility */\n\n:root {\n  --editorDarkMode-primary: var(--looks-secondary);\n  --editorDarkMode-primary-transparent35: var(--looks-transparent);\n  --editorDarkMode-primary-variant: var(--looks-secondary-dark);\n  --editorDarkMode-border: var(--ui-black-transparent);\n  --editorDarkMode-accent: var(--ui-modal-background);\n  --editorDarkMode-categoryMenu-text: var(--text-primary);\n  --editorDarkMode-accent-text: var(--text-primary);\n  --editorDarkMode-page: var(--ui-primary);\n  --editorDarkMode-highlightText: var(--looks-secondary);\n}\n\n:root {\n  --editor-menu-background: var(--menu-bar-background);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/lib/themes/global-styles.css"
/*!******************************************!*\
  !*** ./src/lib/themes/global-styles.css ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.106.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_global_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./global-styles.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/lib/themes/global-styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_global_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg"
/*!****************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg ***!
  \****************************************************************************/
(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjQzMzggMzBDMjkuNTEzIDMwIDMxLjYzNjYgMjguMTU2OSAzMS4xNzkgMjUuODc0QzI4LjI5OTQgMTMuMDQzNiAyNy40MjU2IDkuODUxMzQgMjcuOTQ1NCA5LjYwNTQ3QzI4LjMxMjUgOS40MzE4MyAyOS4zNzQ2IDEwLjcyNzYgMzAuOTE2MiAxMS4xMzU5QzM0LjY0MTYgMTIuMTEyNiA0MC4yNzQyIDYuNDA3NTEgMzQuNTY1NSA3LjI5MTg2QzMyLjMyMjQgNy42MzkgMzAuMTU4NyA2LjIzODM2IDI4LjQ4NzkgNS4xNTY3OUMyNS45MDcyIDMuNDg2MiAyNC41MDI0IDIuNTc2ODQgMjUuNzk3NCAxMC4wNDUxQzI2LjQzNDkgMTMuNzAzNSAyNi45Njk3IDE2LjMyMzEgMjcuMzQ3NSAxOC4xNzM5QzI3Ljk5NTcgMjEuMzQ5NCAyOC4xODE5IDIyLjI2MTYgMjcuNjMyNSAyMi4yNzQxQzI3LjMzMjEgMjIuMTUyIDI3LjAzMjcgMjIuMDU3OCAyNi42OTU3IDIxLjk3MjRDMjYuMDg4IDIxLjgyMjUgMjUuNDUxNiAyMS43MzgyIDI0LjgwNTMgMjEuNzM4MkMyMS43MjcxIDIxLjczODIgMTkuNjAzNiAyMy41ODkyIDIwLjA2MjEgMjUuODc0QzIwLjUxMDcgMjguMTU2OSAyMy4zNjQ2IDMwIDI2LjQzMzggMzBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS40Mzg2MSAzNi4wMDAxQzEyLjUwNjUgMzYuMDAwMSAxNC42MzAyIDM0LjE0OCAxNC4xODE3IDMxLjg2NDJDMTEuMzAzMiAxOS4wMzM2IDEwLjQyOTkgMTUuODQxNiAxMC45NDk2IDE1LjU5NThDMTEuMzE2NiAxNS40MjIyIDEyLjM3ODMgMTYuNzE3NyAxMy45MTkgMTcuMTI2QzE3LjY0MjggMTguMTEzNiAyMy4yNzI5IDEyLjM5ODUgMTcuNTY2NyAxMy4yOTE4QzE1LjMyNDggMTMuNjM4NiAxMy4xNjIzIDEyLjIzODIgMTEuNDkyMiAxMS4xNTY5QzguOTEyMzcgOS40ODYzNiA3LjUwNzk3IDguNTc2OTggOC44MDI1MSAxNi4wNDUxQzkuNDQyOTQgMTkuNzI4NiA5Ljk3OTggMjIuMzU5NCAxMC4zNTggMjQuMjEyNUMxMC45OTEyIDI3LjMxNTQgMTEuMTc5NSAyOC4yMzg0IDEwLjY2NDQgMjguMjczMkM5Ljc4NDMyIDI3LjkyNTggOC44MTIzOSAyNy43MjkzIDcuODEwODIgMjcuNzI5M0M0LjczNCAyNy43MjkzIDIuNjExMzQgMjkuNTgwNCAzLjA1OTc4IDMxLjg2NDJDMy41MTgwOSAzNC4xNDggNi4zNzA2OSAzNi4wMDAxIDkuNDM4NjEgMzYuMDAwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ },

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg"
/*!**************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg ***!
  \**************************************************************************/
(module) {

module.exports = "static/assets/b631383707e87a454b479dedaa8ca014.svg";

/***/ },

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg"
/*!**********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg ***!
  \**********************************************************************************/
(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxLjY2OTNWMzQuMjgzNEMxNiAzNS44MTUxIDE0IDM2LjUzNTkgMTIuOCAzNS41NDQ4TDEwLjIgMzMuMzgyNEM5LjIgMzIuNTcxNSA4IDMyLjIxMTEgNi43IDMyLjIxMTFINi4zQzUgMzIuMjExMSA0IDMxLjMxMDEgNCAzMC4xMzg4VjI1LjkwNDFDNCAyNC43MzI4IDUgMjMuODMxOCA2LjMgMjMuODMxOEg2LjdDOCAyMy44MzE4IDkuMiAyMy4zODEzIDEwLjEgMjIuNjYwNEwxMi44IDIwLjQ5OEMxNCAxOS40MTY4IDE2IDIwLjIyNzcgMTYgMjEuNjY5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNCA0QzE5LjU4MTcgNCAxNiA3LjU4MTcyIDE2IDEyQzE2IDE1LjExNDcgMTcuNzc5OSAxNy44MTM2IDIwLjM3ODEgMTkuMTM1MUMyMC4yMDk1IDIwLjkwODcgMTkuNjU2NCAyMS42NjU1IDE5LjMwNDIgMjIuMTQ3M0MxOS4xMjY1IDIyLjM5MDQgMTkgMjIuNTYzNSAxOSAyMi43NjE5QzE5IDIzLjQyODYgMTkuNjY2NyAyMy40Mjg2IDE5LjY2NjcgMjMuNDI4NkMyMC42MTMyIDIzLjQyODYgMjMuNTgxMyAyMi4yNjIzIDI1LjQwOTcgMjBIMjhDMzIuNDE4MyAyMCAzNiAxNi40MTgzIDM2IDEyQzM2IDcuNTgxNzIgMzIuNDE4MyA0IDI4IDRIMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5Ii8+Cjwvc3ZnPgo="

/***/ },

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg"
/*!********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg ***!
  \********************************************************************************/
(module) {

module.exports = "static/assets/ef4a998a82a8567de018baa4607bc6a0.svg";

/***/ },

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg"
/*!***********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg ***!
  \***********************************************************************************/
(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjI1IiBjeD0iMzIiIGN5PSIyNiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzIiIGN5PSIyMiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC43NSIgY3g9IjMyIiBjeT0iMTgiIHI9IjQiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDE3LjVMMjIuNCAxNEMyMi45IDEzLjcgMjMuNSAxMy44IDIzLjggMTQuM0MyMy45IDE0LjUgMjQgMTQuNyAyNCAxNC44VjI1LjFDMjQgMjUuNyAyMy41IDI2LjEgMjMgMjYuMUMyMi44IDI2LjEgMjIuNiAyNiAyMi41IDI1LjlMMTcgMjIuNlYyNEMxNyAyNi4yIDE1LjIgMjguMSAxMyAyOC4xSDQuMUMxLjggMjggMCAyNi4yIDAgMjRWMTYuMUMwIDEzLjggMS44IDEyIDQuMSAxMkgxM0MxNS4yIDEyIDE3IDEzLjggMTcgMTYuMVYxNy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }

}]);
//# sourceMappingURL=src_lib_brand_js-src_lib_themes_guiHelpers_js-src_lib_themes_themePersistance_js-src_playgrou-f11971.js.map