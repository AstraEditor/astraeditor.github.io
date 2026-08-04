var GUI;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/playground/credits/ae-users.js"
/*!********************************************!*\
  !*** ./src/playground/credits/ae-users.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const qqAvatar = qq => "http://q.qlogo.cn/headimg_dl?dst_uin=".concat(qq, "&spec=140&img_type=jpg");
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const contributors = [{
  image: qqAvatar('2381068747'),
  text: 'KOSHINO',
  href: 'https://github.com/KOSHINOawa'
}, {
  image: qqAvatar('3091949883'),
  text: 'Cyberexplorer',
  href: 'https://github.com/LanwyWriteXU'
}, {
  image: qqAvatar('2718867769'),
  text: 'A Sean Says',
  href: 'https://github.com/SeanShaoJX'
}, {
  image: qqAvatar('2153585992'),
  text: 'LuoTianyi Arm64',
  href: 'https://github.com/LuoTianyi-arm64'
}, {
  image: qqAvatar('2913335827'),
  text: 'NeuronPulse',
  href: 'https://github.com/NeuronPulse'
}];
const logo = [{
  image: qqAvatar('392824356'),
  text: 'MSW11_BiliUP',
  href: ''
}];
const website = [{
  image: qqAvatar('3669632155'),
  text: '汉堡小猫猫猫猫猫猫',
  href: ''
}, {
  image: qqAvatar('316366347'),
  text: 'Itz_NanGua',
  href: 'https://github.com/NanGua-QWQ'
}];
const icon = [{
  image: qqAvatar('2891607724'),
  text: 'Hypixice',
  href: 'https://www.hypixice.top'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  contributors: shuffle(contributors),
  logo: shuffle(logo),
  website: shuffle(website),
  icon: shuffle(icon)
});

/***/ },

/***/ "./src/playground/credits/credits.jsx"
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credits.css */ "./src/playground/credits/credits.css");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
/* harmony import */ var _ae_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ae-users */ "./src/playground/credits/ae-users.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }









/* eslint-disable react/jsx-no-literals */

(0,_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_5__.applyGuiColors)((0,_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_6__.detectTheme)());
document.documentElement.lang = 'en';
const User = _ref => {
  let image = _ref.image,
    text = _ref.text,
    href = _ref.href;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].user
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    loading: "lazy",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].userImage,
    src: image,
    width: "60",
    height: "60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].userInfo
  }, text));
};
User.propTypes = {
  image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
const UserList = _ref2 => {
  let users = _ref2.users;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].users
  }, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(User, _extends({
    key: index
  }, data))));
};
UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].headerText
}, _lib_brand__WEBPACK_IMPORTED_MODULE_4__.APP_NAME, " Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "The ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__.APP_NAME, " project is made possible by the work of many volunteers.")), _lib_brand__WEBPACK_IMPORTED_MODULE_4__.APP_NAME !== 'TurboWarp' &&
/*#__PURE__*/
// Be kind and considerate. Don't remove this :)
react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__.APP_NAME, " is based on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://turbowarp.org/"
}, "TurboWarp"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "AstraEditor is a modified project based on TurboWarp, but it is not affiliated with other derivative editors or TurboWarp. We extend our sincere gratitude to GarboMuffin, the creator of TurboWarp, and all the volunteers for their outstanding contributions to TurboWarp.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _ae_users__WEBPACK_IMPORTED_MODULE_8__["default"].contributors
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _ae_users__WEBPACK_IMPORTED_MODULE_8__["default"].logo
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _ae_users__WEBPACK_IMPORTED_MODULE_8__["default"].website
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Icon materials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _ae_users__WEBPACK_IMPORTED_MODULE_8__["default"].icon
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
  style: {
    textAlign: 'center'
  }
}, "The creation of some functions also relies on the collaboration of artificial intelligence(AI)!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].headerContainerTurboWarp
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3__["default"].headerText
}, "TurboWarp Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "The TurboWarp project is made possible by the work of many volunteers.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Scratch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "TurboWarp is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), " but is not endorsed by Scratch in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].contributors
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].addonDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "TurboWarp Extension Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].extensionDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Documentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].docs
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Translators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "More than 100 people have helped translate TurboWarp and its addons into many languages \u2014 far more than we could hope to list here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, "Individual contributors are listed in no particular order. The order is randomized each visit."))));
(0,_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Credits, null));

/***/ },

/***/ "./src/playground/credits/users.js"
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const fromHardcoded = _ref => {
  let _ref$userID = _ref.userID,
    userID = _ref$userID === void 0 ? '0' : _ref$userID,
    username = _ref.username;
  const result = {
    image: "https://trampoline.turbowarp.org/avatars/".concat(userID),
    text: username
  };
  if (username && userID !== '0') {
    result.href = "https://scratch.mit.edu/users/".concat(username, "/");
  }
  return result;
};

// The lists below are in no particular order.

const contributors = [{
  userID: '41219524',
  username: 'CubesterYT'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  userID: '128887584',
  username: 'FurryR'
}, {
  userID: '17340565',
  username: 'GarboMuffin'
}, {
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  userID: '105362329',
  username: 'TrueFantom'
}, {
  userID: '9636514',
  username: 'Tacodiva7729'
}, {
  userID: '141930175',
  username: 'SimonShiki'
}, {
  userID: '34824813',
  username: 'Geotale'
}, {
  username: 'Wowfunhappy'
}].map(fromHardcoded);
const addonDevelopers = [{
  userID: '34018398',
  username: 'Jeffalo'
}, {
  userID: '64184234',
  username: 'ErrorGamer2000'
}, {
  userID: '41616512',
  username: 'pufferfish101007'
}, {
  userID: '61409215',
  username: 'TheColaber'
}, {
  userID: '1882674',
  username: 'griffpatch'
}, {
  userID: '10817178',
  username: 'apple502j'
}, {
  userID: '16947341',
  username: '--Explosion--'
}, {
  userID: '14880401',
  username: 'Sheep_maker'
}, {
  userID: '9981676',
  username: 'NitroCipher'
}, {
  userID: '2561680',
  username: 'lisa_wolfgang'
}, {
  userID: '60000111',
  username: 'GDUcrash'
}, {
  userID: '4648559',
  username: 'World_Languages'
}, {
  userID: '17340565',
  username: 'GarboMuffin'
}, {
  userID: '5354974',
  username: 'Chrome_Cat'
}, {
  userID: '34455896',
  username: 'summerscar'
}, {
  userID: '55742784',
  username: 'RedGuy7'
}, {
  userID: '9636514',
  username: 'Tacodiva7729'
}, {
  userID: '14792872',
  username: '_nix'
}, {
  userID: '30323614',
  username: 'BarelySmooth'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  username: 'DNin01'
}, {
  userID: '16426047',
  username: 'Maximouse'
}, {
  username: 'retronbv'
}, {
  username: 'GrahamSH'
}, {
  userID: '22529928',
  username: 'simiagain'
}, {
  username: 'Secret-chest'
}, {
  userID: '11677378',
  username: 'Mr_MPH'
}, {
  username: 'TheKodeToad'
}].map(fromHardcoded);

// generated by TurboWarp/extensions/scripts/get-credits-for-gui.js
const extensionDevelopers = [{
  username: '-SIPC-'
}, {
  username: '0832'
}, {
  userID: '17235330',
  username: 'aleb2005'
}, {
  userID: '129742989',
  username: 'BludIsAnLemon'
}, {
  username: 'BlueDome77'
}, {
  username: 'clay-rip'
}, {
  userID: '37070511',
  username: 'cs2627883'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  userID: '41219524',
  username: 'CubesterYT'
}, {
  userID: '33988895',
  username: 'D-ScratchNinja'
}, {
  userID: '20632822',
  username: 'dogeiscut'
}, {
  username: 'DT'
}, {
  userID: '54392956',
  username: 'Fath11'
}, {
  userID: '1882674',
  username: 'griffpatch'
}, {
  userID: '41876695',
  username: 'JeremyGamer13'
}, {
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  userID: '29571977',
  username: 'man-o-valor'
}, {
  username: 'MikeDEV'
}, {
  userID: '74246431',
  username: '0znzw'
}, {
  userID: '62325737',
  username: 'mybearworld'
}, {
  userID: '62950341',
  username: 'NamelessCat'
}, {
  username: 'NishiOwO'
}, {
  username: 'NOname-awa'
}, {
  userID: '26959223',
  username: 'pinksheep2917'
}, {
  username: 'Pen-Group'
}, {
  username: 'pumpkinhasapatch'
}, {
  userID: '126715567',
  username: 'PwLDev'
}, {
  userID: '139929771',
  username: 'qxsck'
}, {
  userID: '29118689',
  username: 'RedMan13'
}, {
  userID: '80038021',
  username: 'RixTheTyrunt'
}, {
  userID: '45777723',
  username: 'DemonX5'
}, {
  userID: '14880401',
  username: 'Sheep_maker'
}, {
  userID: '103496265',
  username: 'shreder95ua'
}, {
  userID: '72467731',
  username: 'Skyhigh173'
}, {
  userID: '52066199',
  username: 'softed'
}, {
  userID: '166646203',
  username: 'Staevski_G'
}, {
  username: 'TheShovel'
}, {
  userID: '105362329',
  username: 'TrueFantom'
}, {
  userID: '19133274',
  username: 'Vadik1'
}, {
  username: 'veggiecan0419'
}, {
  userID: '82486672',
  username: 'lolecksdeehaha'
}, {
  userID: '3318598',
  username: 'plant2014'
}, {
  userID: '128778351',
  username: 'XmerOriginals'
}, {
  username: 'ZXMushroom63'
}].map(fromHardcoded);
const docs = [{
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  username: 'DNin01'
}, {
  username: 'Samq64'
}, {
  username: '61080GBA'
}, {
  username: 'adazem009'
}, {
  username: 'sajtosteszta32'
}, {
  username: 'yoyomonem'
}, {
  userID: '55742784',
  username: 'RedGuy7'
}, {
  username: '28klotlucas2'
}, {
  username: 'PPPDUD'
}, {
  username: 'BackThePortal'
}, {
  username: 'Naleksuh'
}].map(fromHardcoded);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  contributors: shuffle(contributors),
  addonDevelopers: shuffle(addonDevelopers),
  extensionDevelopers: shuffle(extensionDevelopers),
  docs: shuffle(docs)
});

/***/ },

/***/ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/playground/credits/credits.css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/playground/credits/credits.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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

* {
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: var(--page-background);
  color: var(--page-foreground);
}

a {
  color: var(--link-color);
}

.credits_main_I1TU9 section {
  max-width: 900px;
  margin: auto;
  margin-bottom: 30px;
}

.credits_header-container_kOcKv {
  color: white;
  background-color: var(--looks-secondary);
  padding: 20px 0;
  text-align: center;
  margin-bottom: 30px;
}

.credits_header-text_xs9Us {
}

.credits_headerContainerTurboWarp_mbL_e {
  color: white;
  background-color: #ff4c4c;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 30px;
}

.credits_users_mjpsE {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.credits_user-image_qbymz {
  margin-right: 12px;
}

.credits_user_By1fG {
  display: flex;
  align-items: center;
  width: 300px;
  padding: 4px;
  border-radius: 4px;
  font-size: 1.25rem;
  color: inherit !important;
  text-decoration: none;
  transition: background 0.2s;
}

.credits_user_By1fG:link:hover {
  background: var(--ui-black-transparent);
}
`, "",{"version":3,"sources":["webpack://./src/playground/credits/credits.css"],"names":[],"mappings":"AAAA,+CAA+C;;AAE/C;EACE,sBAAsB;AACxB;;AAEA;EACE,2DAA2D;EAC3D,SAAS;EACT,UAAU;EACV,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,wCAAwC;EACxC,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;AACA;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,uCAAuC;AACzC","sourcesContent":["/* overridden by src/lib/themes/guiHelpers.js */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background: var(--page-background);\n  color: var(--page-foreground);\n}\n\na {\n  color: var(--link-color);\n}\n\n.main section {\n  max-width: 900px;\n  margin: auto;\n  margin-bottom: 30px;\n}\n\n.header-container {\n  color: white;\n  background-color: var(--looks-secondary);\n  padding: 20px 0;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.header-text {\n}\n\n.headerContainerTurboWarp {\n  color: white;\n  background-color: #ff4c4c;\n  padding: 20px 0;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.users {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.user-image {\n  margin-right: 12px;\n}\n\n.user {\n  display: flex;\n  align-items: center;\n  width: 300px;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 1.25rem;\n  color: inherit !important;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n\n.user:link:hover {\n  background: var(--ui-black-transparent);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": `credits_main_I1TU9`,
	"header-container": `credits_header-container_kOcKv`,
	"headerContainer": `credits_header-container_kOcKv`,
	"header-text": `credits_header-text_xs9Us`,
	"headerText": `credits_header-text_xs9Us`,
	"headerContainerTurboWarp": `credits_headerContainerTurboWarp_mbL_e`,
	"users": `credits_users_mjpsE`,
	"user-image": `credits_user-image_qbymz`,
	"userImage": `credits_user-image_qbymz`,
	"user": `credits_user_By1fG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/playground/credits/credits.css"
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_credits_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./credits.css */ "../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.106.2/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js??ruleSet[1].rules[1].use[2]!./src/playground/credits/credits.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_106_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_credits_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_credits_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_credits_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_11_0_webpack_5_106_2_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ruleSet_1_rules_1_use_2_credits_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"credits": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkGUI"] = self["webpackChunkGUI"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_pnpm_css-loader_6_11_0_webpack_5_106_2_node_modules_css-loader_dist_runt-760044","src_lib_brand_js-src_lib_themes_guiHelpers_js-src_lib_themes_themePersistance_js-src_playgrou-f11971"], () => (__webpack_require__("./src/playground/credits/credits.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	GUI = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=credits.js.map