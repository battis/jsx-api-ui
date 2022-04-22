(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@battis/jsx-factory"), require("@battis/jsx-lib"), require("@battis/monkey-patches"), require("@battis/jsx-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["@battis/jsx-factory", "@battis/jsx-lib", "@battis/monkey-patches", "@battis/jsx-ui"], factory);
	else if(typeof exports === 'object')
		exports["BattisJsxApiUi"] = factory(require("@battis/jsx-factory"), require("@battis/jsx-lib"), require("@battis/monkey-patches"), require("@battis/jsx-ui"));
	else
		root["BattisJsxApiUi"] = factory(root["@battis/jsx-factory"], root["@battis/jsx-lib"], root["@battis/monkey-patches"], root["@battis/jsx-ui"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__battis_jsx_factory__, __WEBPACK_EXTERNAL_MODULE__battis_jsx_lib__, __WEBPACK_EXTERNAL_MODULE__battis_monkey_patches__, __WEBPACK_EXTERNAL_MODULE__battis_jsx_ui__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/ModalEdit.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/ModalEdit.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* base colors */\n/* semantic shortcuts */\n/* adjustment parameters */\n.white {\n  background: white;\n  color: hsl(180, 0%, 11%);\n  border-color: hsl(0, 0%, 26%);\n}\n\n.white > svg {\n  fill: hsl(180, 0%, 11%);\n  background: unset;\n}\n\nsvg.white {\n  fill: white;\n  background: unset;\n}\n\n.white.foreground {\n  color: white;\n  background: unset;\n}\n\n.white.light {\n  background: hsl(0, 0%, 100%);\n  color: hsl(180, 0%, 11%);\n  border-color: hsl(0, 0%, 26%);\n}\n\n.white.light > svg {\n  fill: hsl(180, 0%, 11%);\n  background: unset;\n}\n\nsvg.white.light {\n  fill: hsl(0, 0%, 100%);\n  background: unset;\n}\n\n.white.light.foreground {\n  color: hsl(0, 0%, 100%);\n  background: unset;\n}\n\n.white.dark {\n  background: hsl(0, 0%, 26%);\n  color: hsl(180, 0%, 52%);\n  border-color: hsl(0, 0%, 6.76%);\n}\n\n.white.dark > svg {\n  fill: hsl(180, 0%, 52%);\n  background: unset;\n}\n\nsvg.white.dark {\n  fill: hsl(0, 0%, 26%);\n  background: unset;\n}\n\n.white.dark.foreground {\n  color: hsl(0, 0%, 26%);\n  background: unset;\n}\n\n.white.transparent {\n  background: hsla(0deg, 0%, 100%, 0.5);\n  color: hsla(180deg, 0%, 11%, 0.5);\n  border-color: hsla(0deg, 0%, 26%, 0.5);\n}\n\n.white.transparent > svg {\n  fill: hsla(180deg, 0%, 11%, 0.5);\n  background: unset;\n}\n\nsvg.white.transparent {\n  fill: hsla(0deg, 0%, 100%, 0.5);\n  background: unset;\n}\n\n.white.transparent.foreground {\n  color: hsla(0deg, 0%, 100%, 0.5);\n  background: unset;\n}\n\n.white.transparent.light {\n  background: hsla(0deg, 0%, 100%, 0.5);\n  color: hsla(180deg, 0%, 11%, 0.5);\n  border-color: hsla(0deg, 0%, 26%, 0.5);\n}\n\n.white.transparent.light > svg {\n  fill: hsla(180deg, 0%, 11%, 0.5);\n  background: unset;\n}\n\nsvg.white.transparent.light {\n  fill: hsla(0deg, 0%, 100%, 0.5);\n  background: unset;\n}\n\n.white.transparent.light.foreground {\n  color: hsla(0deg, 0%, 100%, 0.5);\n  background: unset;\n}\n\n.white.transparent.dark {\n  background: hsla(0deg, 0%, 26%, 0.5);\n  color: hsla(180deg, 0%, 52%, 0.5);\n  border-color: hsla(0deg, 0%, 6.76%, 0.5);\n}\n\n.white.transparent.dark > svg {\n  fill: hsla(180deg, 0%, 52%, 0.5);\n  background: unset;\n}\n\nsvg.white.transparent.dark {\n  fill: hsla(0deg, 0%, 26%, 0.5);\n  background: unset;\n}\n\n.white.transparent.dark.foreground {\n  color: hsla(0deg, 0%, 26%, 0.5);\n  background: unset;\n}\n\n.gray {\n  background: hsl(0, 0%, 75%);\n  color: hsl(180, 0%, 8.25%);\n  border-color: hsl(0, 0%, 19.5%);\n}\n\n.gray > svg {\n  fill: hsl(180, 0%, 8.25%);\n  background: unset;\n}\n\nsvg.gray {\n  fill: hsl(0, 0%, 75%);\n  background: unset;\n}\n\n.gray.foreground {\n  color: hsl(0, 0%, 75%);\n  background: unset;\n}\n\n.gray.light {\n  background: hsl(0, 0%, 93.75%);\n  color: hsl(180, 0%, 10.3125%);\n  border-color: hsl(0, 0%, 24.375%);\n}\n\n.gray.light > svg {\n  fill: hsl(180, 0%, 10.3125%);\n  background: unset;\n}\n\nsvg.gray.light {\n  fill: hsl(0, 0%, 93.75%);\n  background: unset;\n}\n\n.gray.light.foreground {\n  color: hsl(0, 0%, 93.75%);\n  background: unset;\n}\n\n.gray.dark {\n  background: hsl(0, 0%, 19.5%);\n  color: hsl(180, 0%, 39%);\n  border-color: hsl(0, 0%, 5.07%);\n}\n\n.gray.dark > svg {\n  fill: hsl(180, 0%, 39%);\n  background: unset;\n}\n\nsvg.gray.dark {\n  fill: hsl(0, 0%, 19.5%);\n  background: unset;\n}\n\n.gray.dark.foreground {\n  color: hsl(0, 0%, 19.5%);\n  background: unset;\n}\n\n.gray.transparent {\n  background: hsla(0deg, 0%, 75%, 0.5);\n  color: hsla(180deg, 0%, 8.25%, 0.5);\n  border-color: hsla(0deg, 0%, 19.5%, 0.5);\n}\n\n.gray.transparent > svg {\n  fill: hsla(180deg, 0%, 8.25%, 0.5);\n  background: unset;\n}\n\nsvg.gray.transparent {\n  fill: hsla(0deg, 0%, 75%, 0.5);\n  background: unset;\n}\n\n.gray.transparent.foreground {\n  color: hsla(0deg, 0%, 75%, 0.5);\n  background: unset;\n}\n\n.gray.transparent.light {\n  background: hsla(0deg, 0%, 93.75%, 0.5);\n  color: hsla(180deg, 0%, 10.3125%, 0.5);\n  border-color: hsla(0deg, 0%, 24.375%, 0.5);\n}\n\n.gray.transparent.light > svg {\n  fill: hsla(180deg, 0%, 10.3125%, 0.5);\n  background: unset;\n}\n\nsvg.gray.transparent.light {\n  fill: hsla(0deg, 0%, 93.75%, 0.5);\n  background: unset;\n}\n\n.gray.transparent.light.foreground {\n  color: hsla(0deg, 0%, 93.75%, 0.5);\n  background: unset;\n}\n\n.gray.transparent.dark {\n  background: hsla(0deg, 0%, 19.5%, 0.5);\n  color: hsla(180deg, 0%, 39%, 0.5);\n  border-color: hsla(0deg, 0%, 5.07%, 0.5);\n}\n\n.gray.transparent.dark > svg {\n  fill: hsla(180deg, 0%, 39%, 0.5);\n  background: unset;\n}\n\nsvg.gray.transparent.dark {\n  fill: hsla(0deg, 0%, 19.5%, 0.5);\n  background: unset;\n}\n\n.gray.transparent.dark.foreground {\n  color: hsla(0deg, 0%, 19.5%, 0.5);\n  background: unset;\n}\n\n.black {\n  background: black;\n  color: hsl(180, 0%, 0%);\n  border-color: hsl(0, 0%, 0%);\n}\n\n.black > svg {\n  fill: hsl(180, 0%, 0%);\n  background: unset;\n}\n\nsvg.black {\n  fill: black;\n  background: unset;\n}\n\n.black.foreground {\n  color: black;\n  background: unset;\n}\n\n.black.light {\n  background: hsl(0, 0%, 0%);\n  color: hsl(180, 0%, 0%);\n  border-color: hsl(0, 0%, 0%);\n}\n\n.black.light > svg {\n  fill: hsl(180, 0%, 0%);\n  background: unset;\n}\n\nsvg.black.light {\n  fill: hsl(0, 0%, 0%);\n  background: unset;\n}\n\n.black.light.foreground {\n  color: hsl(0, 0%, 0%);\n  background: unset;\n}\n\n.black.dark {\n  background: hsl(0, 0%, 0%);\n  color: hsl(180, 0%, 0%);\n  border-color: hsl(0, 0%, 0%);\n}\n\n.black.dark > svg {\n  fill: hsl(180, 0%, 0%);\n  background: unset;\n}\n\nsvg.black.dark {\n  fill: hsl(0, 0%, 0%);\n  background: unset;\n}\n\n.black.dark.foreground {\n  color: hsl(0, 0%, 0%);\n  background: unset;\n}\n\n.black.transparent {\n  background: hsla(0deg, 0%, 0%, 0.5);\n  color: hsla(180deg, 0%, 0%, 0.5);\n  border-color: hsla(0deg, 0%, 0%, 0.5);\n}\n\n.black.transparent > svg {\n  fill: hsla(180deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\nsvg.black.transparent {\n  fill: hsla(0deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\n.black.transparent.foreground {\n  color: hsla(0deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\n.black.transparent.light {\n  background: hsla(0deg, 0%, 0%, 0.5);\n  color: hsla(180deg, 0%, 0%, 0.5);\n  border-color: hsla(0deg, 0%, 0%, 0.5);\n}\n\n.black.transparent.light > svg {\n  fill: hsla(180deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\nsvg.black.transparent.light {\n  fill: hsla(0deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\n.black.transparent.light.foreground {\n  color: hsla(0deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\n.black.transparent.dark {\n  background: hsla(0deg, 0%, 0%, 0.5);\n  color: hsla(180deg, 0%, 0%, 0.5);\n  border-color: hsla(0deg, 0%, 0%, 0.5);\n}\n\n.black.transparent.dark > svg {\n  fill: hsla(180deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\nsvg.black.transparent.dark {\n  fill: hsla(0deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\n.black.transparent.dark.foreground {\n  color: hsla(0deg, 0%, 0%, 0.5);\n  background: unset;\n}\n\n.focus {\n  background: hsl(205, 100%, 50%);\n  color: hsl(25, 100%, 100%);\n  border-color: hsl(205, 100%, 13%);\n}\n\n.focus > svg {\n  fill: hsl(25, 100%, 100%);\n  background: unset;\n}\n\nsvg.focus {\n  fill: hsl(205, 100%, 50%);\n  background: unset;\n}\n\n.focus.foreground {\n  color: hsl(205, 100%, 50%);\n  background: unset;\n}\n\n.focus.light {\n  background: hsl(205, 100%, 62.5%);\n  color: hsl(25, 100%, 6.875%);\n  border-color: hsl(205, 100%, 16.25%);\n}\n\n.focus.light > svg {\n  fill: hsl(25, 100%, 6.875%);\n  background: unset;\n}\n\nsvg.focus.light {\n  fill: hsl(205, 100%, 62.5%);\n  background: unset;\n}\n\n.focus.light.foreground {\n  color: hsl(205, 100%, 62.5%);\n  background: unset;\n}\n\n.focus.dark {\n  background: hsl(205, 100%, 13%);\n  color: hsl(25, 100%, 26%);\n  border-color: hsl(205, 100%, 3.38%);\n}\n\n.focus.dark > svg {\n  fill: hsl(25, 100%, 26%);\n  background: unset;\n}\n\nsvg.focus.dark {\n  fill: hsl(205, 100%, 13%);\n  background: unset;\n}\n\n.focus.dark.foreground {\n  color: hsl(205, 100%, 13%);\n  background: unset;\n}\n\n.focus.transparent {\n  background: hsla(205deg, 100%, 50%, 0.5);\n  color: hsla(25deg, 100%, 100%, 0.5);\n  border-color: hsla(205deg, 100%, 13%, 0.5);\n}\n\n.focus.transparent > svg {\n  fill: hsla(25deg, 100%, 100%, 0.5);\n  background: unset;\n}\n\nsvg.focus.transparent {\n  fill: hsla(205deg, 100%, 50%, 0.5);\n  background: unset;\n}\n\n.focus.transparent.foreground {\n  color: hsla(205deg, 100%, 50%, 0.5);\n  background: unset;\n}\n\n.focus.transparent.light {\n  background: hsla(205deg, 100%, 62.5%, 0.5);\n  color: hsla(25deg, 100%, 6.875%, 0.5);\n  border-color: hsla(205deg, 100%, 16.25%, 0.5);\n}\n\n.focus.transparent.light > svg {\n  fill: hsla(25deg, 100%, 6.875%, 0.5);\n  background: unset;\n}\n\nsvg.focus.transparent.light {\n  fill: hsla(205deg, 100%, 62.5%, 0.5);\n  background: unset;\n}\n\n.focus.transparent.light.foreground {\n  color: hsla(205deg, 100%, 62.5%, 0.5);\n  background: unset;\n}\n\n.focus.transparent.dark {\n  background: hsla(205deg, 100%, 13%, 0.5);\n  color: hsla(25deg, 100%, 26%, 0.5);\n  border-color: hsla(205deg, 100%, 3.38%, 0.5);\n}\n\n.focus.transparent.dark > svg {\n  fill: hsla(25deg, 100%, 26%, 0.5);\n  background: unset;\n}\n\nsvg.focus.transparent.dark {\n  fill: hsla(205deg, 100%, 13%, 0.5);\n  background: unset;\n}\n\n.focus.transparent.dark.foreground {\n  color: hsla(205deg, 100%, 13%, 0.5);\n  background: unset;\n}\n\n.danger {\n  background: hsl(7, 80%, 50%);\n  color: hsl(187, 80%, 100%);\n  border-color: hsl(7, 80%, 13%);\n}\n\n.danger > svg {\n  fill: hsl(187, 80%, 100%);\n  background: unset;\n}\n\nsvg.danger {\n  fill: hsl(7, 80%, 50%);\n  background: unset;\n}\n\n.danger.foreground {\n  color: hsl(7, 80%, 50%);\n  background: unset;\n}\n\n.danger.light {\n  background: hsl(7, 80%, 62.5%);\n  color: hsl(187, 80%, 6.875%);\n  border-color: hsl(7, 80%, 16.25%);\n}\n\n.danger.light > svg {\n  fill: hsl(187, 80%, 6.875%);\n  background: unset;\n}\n\nsvg.danger.light {\n  fill: hsl(7, 80%, 62.5%);\n  background: unset;\n}\n\n.danger.light.foreground {\n  color: hsl(7, 80%, 62.5%);\n  background: unset;\n}\n\n.danger.dark {\n  background: hsl(7, 80%, 13%);\n  color: hsl(187, 80%, 26%);\n  border-color: hsl(7, 80%, 3.38%);\n}\n\n.danger.dark > svg {\n  fill: hsl(187, 80%, 26%);\n  background: unset;\n}\n\nsvg.danger.dark {\n  fill: hsl(7, 80%, 13%);\n  background: unset;\n}\n\n.danger.dark.foreground {\n  color: hsl(7, 80%, 13%);\n  background: unset;\n}\n\n.danger.transparent {\n  background: hsla(7deg, 80%, 50%, 0.5);\n  color: hsla(187deg, 80%, 100%, 0.5);\n  border-color: hsla(7deg, 80%, 13%, 0.5);\n}\n\n.danger.transparent > svg {\n  fill: hsla(187deg, 80%, 100%, 0.5);\n  background: unset;\n}\n\nsvg.danger.transparent {\n  fill: hsla(7deg, 80%, 50%, 0.5);\n  background: unset;\n}\n\n.danger.transparent.foreground {\n  color: hsla(7deg, 80%, 50%, 0.5);\n  background: unset;\n}\n\n.danger.transparent.light {\n  background: hsla(7deg, 80%, 62.5%, 0.5);\n  color: hsla(187deg, 80%, 6.875%, 0.5);\n  border-color: hsla(7deg, 80%, 16.25%, 0.5);\n}\n\n.danger.transparent.light > svg {\n  fill: hsla(187deg, 80%, 6.875%, 0.5);\n  background: unset;\n}\n\nsvg.danger.transparent.light {\n  fill: hsla(7deg, 80%, 62.5%, 0.5);\n  background: unset;\n}\n\n.danger.transparent.light.foreground {\n  color: hsla(7deg, 80%, 62.5%, 0.5);\n  background: unset;\n}\n\n.danger.transparent.dark {\n  background: hsla(7deg, 80%, 13%, 0.5);\n  color: hsla(187deg, 80%, 26%, 0.5);\n  border-color: hsla(7deg, 80%, 3.38%, 0.5);\n}\n\n.danger.transparent.dark > svg {\n  fill: hsla(187deg, 80%, 26%, 0.5);\n  background: unset;\n}\n\nsvg.danger.transparent.dark {\n  fill: hsla(7deg, 80%, 13%, 0.5);\n  background: unset;\n}\n\n.danger.transparent.dark.foreground {\n  color: hsla(7deg, 80%, 13%, 0.5);\n  background: unset;\n}\n\n/* Chrome renders an extra pixel inside 1px borders, because... bug? */\n/* it sure would be keen to be able to layout around the scrollbar... if it's there! */\n:root {\n  /* https://stackoverflow.com/a/64902604 */\n  --scrollbar-width: max(1em, calc(100vw - 100%));\n  --scrollbar-height: max(1em, calc(100vh - 100%));\n}\n\nform .form-controls, .form .form-controls {\n  display: grid;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\nform .form-controls > *, .form .form-controls > * {\n  grid-column: 1/3;\n}\nform .form-controls > label,\nform dt, .form .form-controls > label,\n.form dt {\n  margin: 0;\n  grid-column: 1/2;\n  font-size: smaller;\n  font-weight: bold;\n  color: gray;\n  text-align: right;\n}\nform .input, .form .input {\n  min-height: 1em;\n  background-color: white;\n}\nform .form-controls > input,\nform .form-controls > .input,\nform .form-controls > select,\nform .form-controls .input-group,\nform dd, .form .form-controls > input,\n.form .form-controls > .input,\n.form .form-controls > select,\n.form .form-controls .input-group,\n.form dd {\n  grid-column: 2/3;\n}\nform .form-controls > input,\nform .form-controls > .input,\nform .form-controls > select,\nform .form-controls .input-group,\nform dd, .form .form-controls > input,\n.form .form-controls > .input,\n.form .form-controls > select,\n.form .form-controls .input-group,\n.form dd {\n  grid-column: 2/3;\n}\nform .form-controls input,\nform .form-controls .input,\nform .form-controls select,\nform .form-controls button,\nform .form-controls .input-group, .form .form-controls input,\n.form .form-controls .input,\n.form .form-controls select,\n.form .form-controls button,\n.form .form-controls .input-group {\n  min-width: 0;\n  text-overflow: ellipsis;\n}\nform .form-controls .input-group, .form .form-controls .input-group {\n  display: inline-flex;\n}\nform .form-controls .input-group button,\nform .form-controls .input-group input,\nform .form-controls .input-group select, .form .form-controls .input-group button,\n.form .form-controls .input-group input,\n.form .form-controls .input-group select {\n  border-radius: 0;\n}\nform .form-controls .input-group button, .form .form-controls .input-group button {\n  padding-left: 0.666em;\n  padding-right: 0.666em;\n}\nform .form-controls .input-group *:last-child, .form .form-controls .input-group *:last-child {\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em;\n}\nform .form-controls .input-group button:last-child, .form .form-controls .input-group button:last-child {\n  padding-left: 0.5em;\n}\nform .form-controls .input-group *:first-child, .form .form-controls .input-group *:first-child {\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em;\n}\nform .form-controls .input-group button:first-child, .form .form-controls .input-group button:first-child {\n  padding-right: 0.5em;\n}\nform input,\nform .input,\nform select, .form input,\n.form .input,\n.form select {\n  font-size: larger;\n  padding: 0.333em;\n  border: solid 0.99px hsl(0, 0%, 19.5%);\n  border-radius: 0.3em;\n}\nform .buttons, .form .buttons {\n  margin-top: 1em;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n  gap: 1em;\n}\nform button, .form button {\n  background: hsl(0, 0%, 93.75%);\n  color: hsl(180, 0%, 10.3125%);\n  border-color: hsl(0, 0%, 24.375%);\n  border: solid 0.25pt hsl(0, 0%, 19.5%);\n  font-size: larger;\n  padding: 0.333em 0.666em;\n  border-radius: 0.3em;\n  flex-grow: 1;\n  flex-basis: 0;\n}\nform button.default, .form button.default {\n  background: hsl(205, 100%, 50%);\n  color: hsl(25, 100%, 100%);\n  border-color: hsl(205, 100%, 13%);\n  border-color: hsl(205, 100%, 13%);\n}\nform button.danger, .form button.danger {\n  background: hsl(7, 80%, 50%);\n  color: hsl(187, 80%, 100%);\n  border-color: hsl(7, 80%, 13%);\n  border-collapse: hsl(7, 80%, 13%);\n}\nform :focus, .form :focus {\n  outline: none;\n  box-shadow: 0 0 0.5em hsla(205deg, 100%, 50%, 0.5);\n}\nform dl, .form dl {\n  display: grid;\n  grid-template-columns: 1em auto auto 1fr;\n  grid-column-gap: 1rem;\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n  grid-row-gap: 0.5rem;\n  row-gap: 0.5rem;\n}\nform dd, .form dd {\n  font-size: larger;\n  padding: 0.333em;\n}\n\n.modal-edit {\n  display: flex;\n  flex-direction: column;\n}\n.modal-edit .buttons {\n  margin-top: 1em;\n}\n.modal-edit .input-group .icon {\n  height: 0.75em;\n}\n.modal-edit .timestamp {\n  text-align: right;\n  font-size: smaller;\n  color: hsl(0, 0%, 19.5%);\n}", "",{"version":3,"sources":["webpack://./node_modules/@battis/jsx-ui/dist/sass/_colors.scss","webpack://./src/ModalEdit.scss","webpack://./node_modules/@battis/jsx-ui/dist/sass/_css_tricks.scss","webpack://./node_modules/@battis/jsx-ui/dist/sass/_form.scss","webpack://./node_modules/@battis/jsx-ui/dist/sass/_spacing.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:color\";\n@use \"sass:meta\";\n\n/* base colors */\n$white: white;\n$gray: hsl(0, 0%, 75%);\n$black: black;\n$focus: hsl(205, 100%, 50%);\n$danger: hsl(7, 80%, 50%);\n$transparent: hsla(0, 0%, 0%, 0%);\n\n$colors: (white: $white, gray: $gray, black: $black, focus: $focus, danger: $danger);\n\n/* semantic shortcuts */\n$foreground: $black;\n$background: $white;\n\n/* adjustment parameters */\n$-transparent: 0.5;\n$-lighter: 1.25;\n$-darker: 0.26;\n$-text-darker: $-darker - 0.15;\n$-text-lighter: $-lighter + 0.75;\n$-text-cutoff: 60%;\n\n@function hslaReplace($color, $hue: false, $saturation: false, $lightness: false, $alpha: false) {\n    @if $hue == false {\n        $hue: color.hue(($color));\n    }\n    @if $saturation == false {\n        $saturation: color.saturation($color);\n    }\n    @if $lightness == false {\n        $lightness: color.lightness($color);\n    }\n    @if $alpha == false {\n        $alpha: color.alpha($color);\n    }\n    @return hsla($hue, $saturation, $lightness, $alpha);\n}\n\n@function textOn($c, $adjustment: null) {\n    $computed: null;\n    @if $adjustment == $-lighter {\n        $computed: $-text-lighter;\n    } @else if $adjustment == $-darker {\n        $computed: $-text-darker;\n    } @else if (color.lightness($c) <= $-text-cutoff) {\n        $computed: $-text-lighter;\n    } @else {\n        $computed: $-text-darker;\n    }\n\n    @return hslaReplace(color.complement($c), $lightness: $computed * color.lightness($c));\n}\n\n@function identity($c) {\n    @return $c;\n}\n\n@function lighter($c) {\n    @return hslaReplace($c, $lightness: $-lighter * color.lightness($c));\n}\n\n@function darker($c) {\n    @return hslaReplace($c, $lightness: $-darker * color.lightness($c));\n}\n\n@function transparent($c) {\n    @return hslaReplace($c, $alpha: $-transparent);\n}\n\n@mixin background($c) {\n    background: $c;\n    color: textOn($c);\n    border-color: darker($c);\n}\n\n@mixin fill($c) {\n    fill: $c;\n    background: unset;\n}\n\n@mixin -all-colors-mixin($selector, $color) {\n    #{$selector} {\n        @include background($color);\n    }\n\n    #{$selector} > svg {\n        @include fill(textOn($color));\n    }\n\n    svg#{$selector} {\n        @include fill($color);\n    }\n\n    #{$selector}.foreground {\n        color: $color;\n        background: unset;\n    }\n}\n\n// TODO when dynamic mixins are available, this should be private (since it wouldn't be needed externally)\n$null: \"`null`\"; // a string to use as a key when what I really want is a null value\n\n@each $name, $color in $colors {\n    @each $opacity, $opacityTransformation in (#{$null}: meta.get-function(\"identity\"), transparent: meta.get-function(\"transparent\")) {\n        $opacitySelector: if($opacity == $null, \".#{$name}\", \".#{$name}.#{$opacity}\");\n\n        @each $lightness, $lightnessTransformation in (#{$null}: meta.get-function(\"identity\"), light: meta.get-function(\"lighter\"), dark: meta.get-function(\"darker\")) {\n            $selector: if($lightness == $null, $opacitySelector, \"#{$opacitySelector}.#{$lightness}\");\n\n            // TODO someday there will be dynamic mixins! https://github.com/sass/sass/issues/626\n            @include -all-colors-mixin($selector, meta.call($lightnessTransformation, meta.call($opacityTransformation, $color)));\n        }\n    }\n}\n","@use \"~@battis/jsx-ui/dist/sass/colors\";\n@use \"~@battis/jsx-ui/dist/sass/form\";\n\n.modal-edit {\n  display: flex;\n  flex-direction: column;\n\n  .buttons {\n    margin-top: 1em;\n  }\n\n  .input-group {\n    .icon {\n      height: 0.75em;\n    }\n  }\n\n  .timestamp {\n    text-align: right;\n    font-size: smaller;\n    color: colors.darker(colors.$gray);\n  }\n}\n","/* Chrome renders an extra pixel inside 1px borders, because... bug? */\n$one-px: 0.99px;\n\n/* it sure would be keen to be able to layout around the scrollbar... if it's there! */\n:root {\n    /* https://stackoverflow.com/a/64902604 */\n    --scrollbar-width: max(1em, calc(100vw - 100%)); // FIXME stupid thing doesn't stupid work, so we'll throw in a 1em default just in case\n    --scrollbar-height: max(1em, calc(100vh - 100%));\n}\n$scrollbar-width: var(--scrollbar-width);\n$scrollbar-height: var(--scrollbar-height);\n\n","@use \"colors\";\n@use \"spacing\";\n@use \"css_tricks\";\n\nform, .form {\n    .form-controls {\n        display: grid;\n        gap: 0.5rem;\n\n        > * {\n            grid-column: 1 / 3;\n        }\n    }\n\n    .form-controls > label,\n    dt {\n        margin: 0;\n        grid-column: 1 / 2;\n        font-size: smaller;\n        font-weight: bold;\n        color: gray;\n        text-align: right;\n    }\n\n    .input {\n        min-height: 1em;\n        background-color: white;\n    }\n\n    .form-controls > input,\n    .form-controls > .input,\n    .form-controls > select,\n    .form-controls .input-group,\n    dd {\n        grid-column: 2 / 3;\n    }\n\n    .form-controls > input,\n    .form-controls > .input,\n    .form-controls > select,\n    .form-controls .input-group,\n    dd {\n        grid-column: 2 / 3;\n    }\n\n    .form-controls {\n        input,\n        .input,\n        select,\n        button,\n        .input-group {\n            min-width: 0;\n            text-overflow: ellipsis;\n        }\n\n        .input-group {\n            display: inline-flex;\n\n            button,\n            input,\n            select {\n                border-radius: 0;\n            }\n\n            button {\n                padding-left: spacing.$padding-major;\n                padding-right: spacing.$padding-major;\n            }\n\n            *:last-child {\n                border-top-right-radius: spacing.$border-radius-minor;\n                border-bottom-right-radius: spacing.$border-radius-minor;\n            }\n\n            button:last-child {\n                padding-left: 0.5em;\n            }\n\n            *:first-child {\n                border-top-left-radius: spacing.$border-radius-minor;\n                border-bottom-left-radius: spacing.$border-radius-minor;\n            }\n\n            button:first-child {\n                padding-right: 0.5em;\n            }\n\n        }\n    }\n\n    input,\n    .input,\n    select {\n        font-size: larger;\n        padding: spacing.$padding-minor;\n        border: solid css_tricks.$one-px colors.darker(colors.$gray);\n        border-radius: spacing.$border-radius-minor;\n    }\n\n    .buttons {\n        margin-top: 1em;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: space-evenly;\n        gap: 1em;\n    }\n\n    button {\n        @include colors.background(colors.lighter(colors.$gray));\n        border: solid 0.25pt colors.darker(colors.$gray);\n        font-size: larger;\n        padding: spacing.$padding-minor spacing.$padding-major;\n        border-radius: spacing.$border-radius-minor;\n        flex-grow: 1;\n        flex-basis: 0;\n    }\n\n    button.default {\n        @include colors.background(colors.$focus);\n        border-color: colors.darker(colors.$focus);\n    }\n\n    button.danger {\n        @include colors.background(colors.$danger);\n        border-collapse: colors.darker(colors.$danger);\n    }\n\n    :focus {\n        outline: none;\n        box-shadow: 0 0 0.5em colors.transparent(colors.$focus);\n    }\n\n    dl {\n        display: grid;\n        grid-template-columns: 1em auto auto 1fr;\n        column-gap: 1rem;\n        row-gap: 0.5rem;\n    }\n\n    dd {\n        font-size: larger;\n        padding: spacing.$padding-minor;\n    }\n}\n\n\n","$phi: 1.61803398875;\n\n$border-radius-major: 1em;\n$border-radius-minor: 0.3em;\n\n$padding-major: 0.666em;\n$padding-minor: 0.333em;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/ModalEdit.scss":
/*!****************************!*\
  !*** ./src/ModalEdit.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ModalEdit_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./ModalEdit.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/ModalEdit.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ModalEdit_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ModalEdit_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ModalEdit_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_ModalEdit_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModalEdit = void 0;
const ModalEdit_1 = __importDefault(__webpack_require__(/*! ./src/ModalEdit */ "./src/ModalEdit.tsx"));
exports.ModalEdit = ModalEdit_1.default;


/***/ }),

/***/ "./src/ModalEdit.tsx":
/*!***************************!*\
  !*** ./src/ModalEdit.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_factory_1 = __importDefault(__webpack_require__(/*! @battis/jsx-factory */ "@battis/jsx-factory"));
const jsx_lib_1 = __webpack_require__(/*! @battis/jsx-lib */ "@battis/jsx-lib");
const monkey_patches_1 = __webpack_require__(/*! @battis/monkey-patches */ "@battis/monkey-patches");
const jsx_ui_1 = __webpack_require__(/*! @battis/jsx-ui */ "@battis/jsx-ui");
__webpack_require__(/*! ./ModalEdit.scss */ "./src/ModalEdit.scss");
const foreignKeyGeneric = () => {
    return null;
};
class ModalEdit extends jsx_ui_1.Modal {
    constructor(_a) {
        var { target, title, views = {}, callback = null, foreignKeyLookup = foreignKeyGeneric } = _a, params = __rest(_a, ["target", "title", "views", "callback", "foreignKeyLookup"]);
        // TODO add cancel button
        super(Object.assign(Object.assign({}, params), { title: title || `Edit ${jsx_lib_1.Text.titleCase(target.constructor.name)}`, body: jsx_factory_1.default.createElement("div", null) }));
        this._body.element = (jsx_factory_1.default.createElement("form", { class: "modal-edit form", onsubmit: this.handleSubmit.bind(this, callback || target.editCallback.bind(target)) },
            jsx_factory_1.default.createElement("div", { class: "form-controls" }, this.formatPropertyControls(target, views, foreignKeyLookup)),
            jsx_factory_1.default.createElement("div", { class: "buttons" },
                jsx_factory_1.default.createElement("button", { type: "submit", class: "default" }, "Save"))));
    }
    handleSubmit(callback, event) {
        event.preventDefault();
        const edits = {};
        for (const control of event.target.elements) {
            control.name &&
                (edits[control.name] = control.value.length ? control.value : null);
        }
        callback(edits);
        this.close(undefined, false);
    }
    formatPropertyControls(target, views, foreignKeyLookup) {
        const props = target.editableProperties();
        return Object.getOwnPropertyNames(props).map((key) => {
            if (key in views) {
                return views[key]();
            }
            const componentType = foreignKeyLookup(key);
            if (componentType) {
                return (jsx_factory_1.default.createElement(jsx_factory_1.default.createFragment, null,
                    jsx_factory_1.default.createElement("label", null, jsx_lib_1.Text.unCamelCase((componentType.label && componentType.label) ||
                        componentType.name).toLowerCase()),
                    monkey_patches_1._HTML.asyncSelectControl({
                        name: key,
                        value: target[key],
                        loader: () => ((componentType.type && componentType.type) || componentType)
                            .list()
                            .then((options) => options.map((option) => {
                            return {
                                id: option.id,
                                name: option.inline().innerText,
                            };
                        })),
                    })));
            }
            else {
                return (jsx_factory_1.default.createElement(jsx_factory_1.default.createFragment, null,
                    jsx_factory_1.default.createElement("label", null,
                        jsx_lib_1.Text.unCamelCase(key).toLowerCase(),
                        " "),
                    jsx_factory_1.default.createElement("input", { type: "text", name: key, value: props[key] || "" })));
            }
        });
    }
}
exports["default"] = ModalEdit;


/***/ }),

/***/ "@battis/jsx-factory":
/*!**************************************!*\
  !*** external "@battis/jsx-factory" ***!
  \**************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__battis_jsx_factory__;

/***/ }),

/***/ "@battis/jsx-lib":
/*!**********************************!*\
  !*** external "@battis/jsx-lib" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__battis_jsx_lib__;

/***/ }),

/***/ "@battis/jsx-ui":
/*!*********************************!*\
  !*** external "@battis/jsx-ui" ***!
  \*********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__battis_jsx_ui__;

/***/ }),

/***/ "@battis/monkey-patches":
/*!*****************************************!*\
  !*** external "@battis/monkey-patches" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__battis_monkey_patches__;

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw0SEFBNEgsc0JBQXNCLDZCQUE2QixrQ0FBa0MsR0FBRyxrQkFBa0IsNEJBQTRCLHNCQUFzQixHQUFHLGVBQWUsZ0JBQWdCLHNCQUFzQixHQUFHLHVCQUF1QixpQkFBaUIsc0JBQXNCLEdBQUcsa0JBQWtCLGlDQUFpQyw2QkFBNkIsa0NBQWtDLEdBQUcsd0JBQXdCLDRCQUE0QixzQkFBc0IsR0FBRyxxQkFBcUIsMkJBQTJCLHNCQUFzQixHQUFHLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLEdBQUcsaUJBQWlCLGdDQUFnQyw2QkFBNkIsb0NBQW9DLEdBQUcsdUJBQXVCLDRCQUE0QixzQkFBc0IsR0FBRyxvQkFBb0IsMEJBQTBCLHNCQUFzQixHQUFHLDRCQUE0QiwyQkFBMkIsc0JBQXNCLEdBQUcsd0JBQXdCLDBDQUEwQyxzQ0FBc0MsMkNBQTJDLEdBQUcsOEJBQThCLHFDQUFxQyxzQkFBc0IsR0FBRywyQkFBMkIsb0NBQW9DLHNCQUFzQixHQUFHLG1DQUFtQyxxQ0FBcUMsc0JBQXNCLEdBQUcsOEJBQThCLDBDQUEwQyxzQ0FBc0MsMkNBQTJDLEdBQUcsb0NBQW9DLHFDQUFxQyxzQkFBc0IsR0FBRyxpQ0FBaUMsb0NBQW9DLHNCQUFzQixHQUFHLHlDQUF5QyxxQ0FBcUMsc0JBQXNCLEdBQUcsNkJBQTZCLHlDQUF5QyxzQ0FBc0MsNkNBQTZDLEdBQUcsbUNBQW1DLHFDQUFxQyxzQkFBc0IsR0FBRyxnQ0FBZ0MsbUNBQW1DLHNCQUFzQixHQUFHLHdDQUF3QyxvQ0FBb0Msc0JBQXNCLEdBQUcsV0FBVyxnQ0FBZ0MsK0JBQStCLG9DQUFvQyxHQUFHLGlCQUFpQiw4QkFBOEIsc0JBQXNCLEdBQUcsY0FBYywwQkFBMEIsc0JBQXNCLEdBQUcsc0JBQXNCLDJCQUEyQixzQkFBc0IsR0FBRyxpQkFBaUIsbUNBQW1DLGtDQUFrQyxzQ0FBc0MsR0FBRyx1QkFBdUIsaUNBQWlDLHNCQUFzQixHQUFHLG9CQUFvQiw2QkFBNkIsc0JBQXNCLEdBQUcsNEJBQTRCLDhCQUE4QixzQkFBc0IsR0FBRyxnQkFBZ0Isa0NBQWtDLDZCQUE2QixvQ0FBb0MsR0FBRyxzQkFBc0IsNEJBQTRCLHNCQUFzQixHQUFHLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEdBQUcsMkJBQTJCLDZCQUE2QixzQkFBc0IsR0FBRyx1QkFBdUIseUNBQXlDLHdDQUF3Qyw2Q0FBNkMsR0FBRyw2QkFBNkIsdUNBQXVDLHNCQUFzQixHQUFHLDBCQUEwQixtQ0FBbUMsc0JBQXNCLEdBQUcsa0NBQWtDLG9DQUFvQyxzQkFBc0IsR0FBRyw2QkFBNkIsNENBQTRDLDJDQUEyQywrQ0FBK0MsR0FBRyxtQ0FBbUMsMENBQTBDLHNCQUFzQixHQUFHLGdDQUFnQyxzQ0FBc0Msc0JBQXNCLEdBQUcsd0NBQXdDLHVDQUF1QyxzQkFBc0IsR0FBRyw0QkFBNEIsMkNBQTJDLHNDQUFzQyw2Q0FBNkMsR0FBRyxrQ0FBa0MscUNBQXFDLHNCQUFzQixHQUFHLCtCQUErQixxQ0FBcUMsc0JBQXNCLEdBQUcsdUNBQXVDLHNDQUFzQyxzQkFBc0IsR0FBRyxZQUFZLHNCQUFzQiw0QkFBNEIsaUNBQWlDLEdBQUcsa0JBQWtCLDJCQUEyQixzQkFBc0IsR0FBRyxlQUFlLGdCQUFnQixzQkFBc0IsR0FBRyx1QkFBdUIsaUJBQWlCLHNCQUFzQixHQUFHLGtCQUFrQiwrQkFBK0IsNEJBQTRCLGlDQUFpQyxHQUFHLHdCQUF3QiwyQkFBMkIsc0JBQXNCLEdBQUcscUJBQXFCLHlCQUF5QixzQkFBc0IsR0FBRyw2QkFBNkIsMEJBQTBCLHNCQUFzQixHQUFHLGlCQUFpQiwrQkFBK0IsNEJBQTRCLGlDQUFpQyxHQUFHLHVCQUF1QiwyQkFBMkIsc0JBQXNCLEdBQUcsb0JBQW9CLHlCQUF5QixzQkFBc0IsR0FBRyw0QkFBNEIsMEJBQTBCLHNCQUFzQixHQUFHLHdCQUF3Qix3Q0FBd0MscUNBQXFDLDBDQUEwQyxHQUFHLDhCQUE4QixvQ0FBb0Msc0JBQXNCLEdBQUcsMkJBQTJCLGtDQUFrQyxzQkFBc0IsR0FBRyxtQ0FBbUMsbUNBQW1DLHNCQUFzQixHQUFHLDhCQUE4Qix3Q0FBd0MscUNBQXFDLDBDQUEwQyxHQUFHLG9DQUFvQyxvQ0FBb0Msc0JBQXNCLEdBQUcsaUNBQWlDLGtDQUFrQyxzQkFBc0IsR0FBRyx5Q0FBeUMsbUNBQW1DLHNCQUFzQixHQUFHLDZCQUE2Qix3Q0FBd0MscUNBQXFDLDBDQUEwQyxHQUFHLG1DQUFtQyxvQ0FBb0Msc0JBQXNCLEdBQUcsZ0NBQWdDLGtDQUFrQyxzQkFBc0IsR0FBRyx3Q0FBd0MsbUNBQW1DLHNCQUFzQixHQUFHLFlBQVksb0NBQW9DLCtCQUErQixzQ0FBc0MsR0FBRyxrQkFBa0IsOEJBQThCLHNCQUFzQixHQUFHLGVBQWUsOEJBQThCLHNCQUFzQixHQUFHLHVCQUF1QiwrQkFBK0Isc0JBQXNCLEdBQUcsa0JBQWtCLHNDQUFzQyxpQ0FBaUMseUNBQXlDLEdBQUcsd0JBQXdCLGdDQUFnQyxzQkFBc0IsR0FBRyxxQkFBcUIsZ0NBQWdDLHNCQUFzQixHQUFHLDZCQUE2QixpQ0FBaUMsc0JBQXNCLEdBQUcsaUJBQWlCLG9DQUFvQyw4QkFBOEIsd0NBQXdDLEdBQUcsdUJBQXVCLDZCQUE2QixzQkFBc0IsR0FBRyxvQkFBb0IsOEJBQThCLHNCQUFzQixHQUFHLDRCQUE0QiwrQkFBK0Isc0JBQXNCLEdBQUcsd0JBQXdCLDZDQUE2Qyx3Q0FBd0MsK0NBQStDLEdBQUcsOEJBQThCLHVDQUF1QyxzQkFBc0IsR0FBRywyQkFBMkIsdUNBQXVDLHNCQUFzQixHQUFHLG1DQUFtQyx3Q0FBd0Msc0JBQXNCLEdBQUcsOEJBQThCLCtDQUErQywwQ0FBMEMsa0RBQWtELEdBQUcsb0NBQW9DLHlDQUF5QyxzQkFBc0IsR0FBRyxpQ0FBaUMseUNBQXlDLHNCQUFzQixHQUFHLHlDQUF5QywwQ0FBMEMsc0JBQXNCLEdBQUcsNkJBQTZCLDZDQUE2Qyx1Q0FBdUMsaURBQWlELEdBQUcsbUNBQW1DLHNDQUFzQyxzQkFBc0IsR0FBRyxnQ0FBZ0MsdUNBQXVDLHNCQUFzQixHQUFHLHdDQUF3Qyx3Q0FBd0Msc0JBQXNCLEdBQUcsYUFBYSxpQ0FBaUMsK0JBQStCLG1DQUFtQyxHQUFHLG1CQUFtQiw4QkFBOEIsc0JBQXNCLEdBQUcsZ0JBQWdCLDJCQUEyQixzQkFBc0IsR0FBRyx3QkFBd0IsNEJBQTRCLHNCQUFzQixHQUFHLG1CQUFtQixtQ0FBbUMsaUNBQWlDLHNDQUFzQyxHQUFHLHlCQUF5QixnQ0FBZ0Msc0JBQXNCLEdBQUcsc0JBQXNCLDZCQUE2QixzQkFBc0IsR0FBRyw4QkFBOEIsOEJBQThCLHNCQUFzQixHQUFHLGtCQUFrQixpQ0FBaUMsOEJBQThCLHFDQUFxQyxHQUFHLHdCQUF3Qiw2QkFBNkIsc0JBQXNCLEdBQUcscUJBQXFCLDJCQUEyQixzQkFBc0IsR0FBRyw2QkFBNkIsNEJBQTRCLHNCQUFzQixHQUFHLHlCQUF5QiwwQ0FBMEMsd0NBQXdDLDRDQUE0QyxHQUFHLCtCQUErQix1Q0FBdUMsc0JBQXNCLEdBQUcsNEJBQTRCLG9DQUFvQyxzQkFBc0IsR0FBRyxvQ0FBb0MscUNBQXFDLHNCQUFzQixHQUFHLCtCQUErQiw0Q0FBNEMsMENBQTBDLCtDQUErQyxHQUFHLHFDQUFxQyx5Q0FBeUMsc0JBQXNCLEdBQUcsa0NBQWtDLHNDQUFzQyxzQkFBc0IsR0FBRywwQ0FBMEMsdUNBQXVDLHNCQUFzQixHQUFHLDhCQUE4QiwwQ0FBMEMsdUNBQXVDLDhDQUE4QyxHQUFHLG9DQUFvQyxzQ0FBc0Msc0JBQXNCLEdBQUcsaUNBQWlDLG9DQUFvQyxzQkFBc0IsR0FBRyx5Q0FBeUMscUNBQXFDLHNCQUFzQixHQUFHLDZLQUE2SyxrR0FBa0cscURBQXFELEdBQUcsK0NBQStDLGtCQUFrQixxQkFBcUIsZ0JBQWdCLEdBQUcscURBQXFELHFCQUFxQixHQUFHLGtGQUFrRixjQUFjLHFCQUFxQix1QkFBdUIsc0JBQXNCLGdCQUFnQixzQkFBc0IsR0FBRyw2QkFBNkIsb0JBQW9CLDRCQUE0QixHQUFHLHVSQUF1UixxQkFBcUIsR0FBRyx1UkFBdVIscUJBQXFCLEdBQUcsaVRBQWlULGlCQUFpQiw0QkFBNEIsR0FBRyx1RUFBdUUseUJBQXlCLEdBQUcsNlBBQTZQLHFCQUFxQixHQUFHLHFGQUFxRiwwQkFBMEIsMkJBQTJCLEdBQUcsaUdBQWlHLG1DQUFtQyxzQ0FBc0MsR0FBRywyR0FBMkcsd0JBQXdCLEdBQUcsbUdBQW1HLGtDQUFrQyxxQ0FBcUMsR0FBRyw2R0FBNkcseUJBQXlCLEdBQUcscUZBQXFGLHNCQUFzQixxQkFBcUIsMkNBQTJDLHlCQUF5QixHQUFHLGlDQUFpQyxvQkFBb0Isa0JBQWtCLHdCQUF3QixzQkFBc0Isa0NBQWtDLGFBQWEsR0FBRyw2QkFBNkIsbUNBQW1DLGtDQUFrQyxzQ0FBc0MsMkNBQTJDLHNCQUFzQiw2QkFBNkIseUJBQXlCLGlCQUFpQixrQkFBa0IsR0FBRyw2Q0FBNkMsb0NBQW9DLCtCQUErQixzQ0FBc0Msc0NBQXNDLEdBQUcsMkNBQTJDLGlDQUFpQywrQkFBK0IsbUNBQW1DLHNDQUFzQyxHQUFHLDZCQUE2QixrQkFBa0IsdURBQXVELEdBQUcscUJBQXFCLGtCQUFrQiw2Q0FBNkMsMEJBQTBCLDBCQUEwQiwwQkFBMEIseUJBQXlCLG9CQUFvQixHQUFHLHFCQUFxQixzQkFBc0IscUJBQXFCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLDBCQUEwQixzQkFBc0IsdUJBQXVCLDZCQUE2QixHQUFHLE9BQU8sa1dBQWtXLFdBQVcsV0FBVyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLGFBQWEsYUFBYSxNQUFNLE1BQU0sYUFBYSxZQUFZLE1BQU0sS0FBSyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxZQUFZLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsWUFBWSxNQUFNLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsT0FBTyxNQUFNLGFBQWEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxRQUFRLE1BQU0sWUFBWSxZQUFZLFFBQVEsTUFBTSxhQUFhLGFBQWEsUUFBUSxNQUFNLGFBQWEsWUFBWSxRQUFRLE9BQU8sYUFBYSxhQUFhLFdBQVcsUUFBUSxPQUFPLFlBQVksWUFBWSxRQUFRLE9BQU8sYUFBYSxhQUFhLFFBQVEsT0FBTyxhQUFhLFlBQVksUUFBUSxhQUFhLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxTQUFTLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxlQUFlLFdBQVcsT0FBTyxlQUFlLFdBQVcsT0FBTyxlQUFlLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLFFBQVEsT0FBTyxZQUFZLGFBQWEsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksYUFBYSxRQUFRLE9BQU8sV0FBVyxR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O1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvLi9zcmMvTW9kYWxFZGl0LnNjc3MiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0JhdHRpc0pzeEFwaVVpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvLi9zcmMvTW9kYWxFZGl0LnNjc3M/YjJkZiIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0JhdHRpc0pzeEFwaVVpLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvLi9zcmMvTW9kYWxFZGl0LnRzeCIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS9leHRlcm5hbCB1bWQgXCJAYmF0dGlzL2pzeC1mYWN0b3J5XCIiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvZXh0ZXJuYWwgdW1kIFwiQGJhdHRpcy9qc3gtbGliXCIiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvZXh0ZXJuYWwgdW1kIFwiQGJhdHRpcy9qc3gtdWlcIiIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS9leHRlcm5hbCB1bWQgXCJAYmF0dGlzL21vbmtleS1wYXRjaGVzXCIiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0JhdHRpc0pzeEFwaVVpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQmF0dGlzSnN4QXBpVWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0JhdHRpc0pzeEFwaVVpL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9CYXR0aXNKc3hBcGlVaS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGJhdHRpcy9qc3gtZmFjdG9yeVwiKSwgcmVxdWlyZShcIkBiYXR0aXMvanN4LWxpYlwiKSwgcmVxdWlyZShcIkBiYXR0aXMvbW9ua2V5LXBhdGNoZXNcIiksIHJlcXVpcmUoXCJAYmF0dGlzL2pzeC11aVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYmF0dGlzL2pzeC1mYWN0b3J5XCIsIFwiQGJhdHRpcy9qc3gtbGliXCIsIFwiQGJhdHRpcy9tb25rZXktcGF0Y2hlc1wiLCBcIkBiYXR0aXMvanN4LXVpXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJhdHRpc0pzeEFwaVVpXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGJhdHRpcy9qc3gtZmFjdG9yeVwiKSwgcmVxdWlyZShcIkBiYXR0aXMvanN4LWxpYlwiKSwgcmVxdWlyZShcIkBiYXR0aXMvbW9ua2V5LXBhdGNoZXNcIiksIHJlcXVpcmUoXCJAYmF0dGlzL2pzeC11aVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQmF0dGlzSnN4QXBpVWlcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYmF0dGlzL2pzeC1mYWN0b3J5XCJdLCByb290W1wiQGJhdHRpcy9qc3gtbGliXCJdLCByb290W1wiQGJhdHRpcy9tb25rZXktcGF0Y2hlc1wiXSwgcm9vdFtcIkBiYXR0aXMvanN4LXVpXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19iYXR0aXNfanN4X2ZhY3RvcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX2pzeF9saWJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX21vbmtleV9wYXRjaGVzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2JhdHRpc19qc3hfdWlfXykgPT4ge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogYmFzZSBjb2xvcnMgKi9cXG4vKiBzZW1hbnRpYyBzaG9ydGN1dHMgKi9cXG4vKiBhZGp1c3RtZW50IHBhcmFtZXRlcnMgKi9cXG4ud2hpdGUge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogaHNsKDE4MCwgMCUsIDExJSk7XFxuICBib3JkZXItY29sb3I6IGhzbCgwLCAwJSwgMjYlKTtcXG59XFxuXFxuLndoaXRlID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgxODAsIDAlLCAxMSUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy53aGl0ZSB7XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4ud2hpdGUuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLndoaXRlLmxpZ2h0IHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBjb2xvcjogaHNsKDE4MCwgMCUsIDExJSk7XFxuICBib3JkZXItY29sb3I6IGhzbCgwLCAwJSwgMjYlKTtcXG59XFxuXFxuLndoaXRlLmxpZ2h0ID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgxODAsIDAlLCAxMSUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy53aGl0ZS5saWdodCB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi53aGl0ZS5saWdodC5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi53aGl0ZS5kYXJrIHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMjYlKTtcXG4gIGNvbG9yOiBoc2woMTgwLCAwJSwgNTIlKTtcXG4gIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCA2Ljc2JSk7XFxufVxcblxcbi53aGl0ZS5kYXJrID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgxODAsIDAlLCA1MiUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy53aGl0ZS5kYXJrIHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgMjYlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4ud2hpdGUuZGFyay5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDI2JSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLndoaXRlLnRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMGRlZywgMCUsIDEwMCUsIDAuNSk7XFxuICBjb2xvcjogaHNsYSgxODBkZWcsIDAlLCAxMSUsIDAuNSk7XFxuICBib3JkZXItY29sb3I6IGhzbGEoMGRlZywgMCUsIDI2JSwgMC41KTtcXG59XFxuXFxuLndoaXRlLnRyYW5zcGFyZW50ID4gc3ZnIHtcXG4gIGZpbGw6IGhzbGEoMTgwZGVnLCAwJSwgMTElLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy53aGl0ZS50cmFuc3BhcmVudCB7XFxuICBmaWxsOiBoc2xhKDBkZWcsIDAlLCAxMDAlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi53aGl0ZS50cmFuc3BhcmVudC5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2xhKDBkZWcsIDAlLCAxMDAlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi53aGl0ZS50cmFuc3BhcmVudC5saWdodCB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDBkZWcsIDAlLCAxMDAlLCAwLjUpO1xcbiAgY29sb3I6IGhzbGEoMTgwZGVnLCAwJSwgMTElLCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKDBkZWcsIDAlLCAyNiUsIDAuNSk7XFxufVxcblxcbi53aGl0ZS50cmFuc3BhcmVudC5saWdodCA+IHN2ZyB7XFxuICBmaWxsOiBoc2xhKDE4MGRlZywgMCUsIDExJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcud2hpdGUudHJhbnNwYXJlbnQubGlnaHQge1xcbiAgZmlsbDogaHNsYSgwZGVnLCAwJSwgMTAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4ud2hpdGUudHJhbnNwYXJlbnQubGlnaHQuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsYSgwZGVnLCAwJSwgMTAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4ud2hpdGUudHJhbnNwYXJlbnQuZGFyayB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDBkZWcsIDAlLCAyNiUsIDAuNSk7XFxuICBjb2xvcjogaHNsYSgxODBkZWcsIDAlLCA1MiUsIDAuNSk7XFxuICBib3JkZXItY29sb3I6IGhzbGEoMGRlZywgMCUsIDYuNzYlLCAwLjUpO1xcbn1cXG5cXG4ud2hpdGUudHJhbnNwYXJlbnQuZGFyayA+IHN2ZyB7XFxuICBmaWxsOiBoc2xhKDE4MGRlZywgMCUsIDUyJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcud2hpdGUudHJhbnNwYXJlbnQuZGFyayB7XFxuICBmaWxsOiBoc2xhKDBkZWcsIDAlLCAyNiUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLndoaXRlLnRyYW5zcGFyZW50LmRhcmsuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsYSgwZGVnLCAwJSwgMjYlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ncmF5IHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgNzUlKTtcXG4gIGNvbG9yOiBoc2woMTgwLCAwJSwgOC4yNSUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDE5LjUlKTtcXG59XFxuXFxuLmdyYXkgPiBzdmcge1xcbiAgZmlsbDogaHNsKDE4MCwgMCUsIDguMjUlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZ3JheSB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDc1JSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmdyYXkuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA3NSUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ncmF5LmxpZ2h0IHtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTMuNzUlKTtcXG4gIGNvbG9yOiBoc2woMTgwLCAwJSwgMTAuMzEyNSUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDI0LjM3NSUpO1xcbn1cXG5cXG4uZ3JheS5saWdodCA+IHN2ZyB7XFxuICBmaWxsOiBoc2woMTgwLCAwJSwgMTAuMzEyNSUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy5ncmF5LmxpZ2h0IHtcXG4gIGZpbGw6IGhzbCgwLCAwJSwgOTMuNzUlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZ3JheS5saWdodC5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDkzLjc1JSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmdyYXkuZGFyayB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDE5LjUlKTtcXG4gIGNvbG9yOiBoc2woMTgwLCAwJSwgMzklKTtcXG4gIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCA1LjA3JSk7XFxufVxcblxcbi5ncmF5LmRhcmsgPiBzdmcge1xcbiAgZmlsbDogaHNsKDE4MCwgMCUsIDM5JSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuc3ZnLmdyYXkuZGFyayB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDE5LjUlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZ3JheS5kYXJrLmZvcmVncm91bmQge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTkuNSUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ncmF5LnRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMGRlZywgMCUsIDc1JSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDE4MGRlZywgMCUsIDguMjUlLCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKDBkZWcsIDAlLCAxOS41JSwgMC41KTtcXG59XFxuXFxuLmdyYXkudHJhbnNwYXJlbnQgPiBzdmcge1xcbiAgZmlsbDogaHNsYSgxODBkZWcsIDAlLCA4LjI1JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZ3JheS50cmFuc3BhcmVudCB7XFxuICBmaWxsOiBoc2xhKDBkZWcsIDAlLCA3NSUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmdyYXkudHJhbnNwYXJlbnQuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsYSgwZGVnLCAwJSwgNzUlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ncmF5LnRyYW5zcGFyZW50LmxpZ2h0IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMGRlZywgMCUsIDkzLjc1JSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDE4MGRlZywgMCUsIDEwLjMxMjUlLCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKDBkZWcsIDAlLCAyNC4zNzUlLCAwLjUpO1xcbn1cXG5cXG4uZ3JheS50cmFuc3BhcmVudC5saWdodCA+IHN2ZyB7XFxuICBmaWxsOiBoc2xhKDE4MGRlZywgMCUsIDEwLjMxMjUlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy5ncmF5LnRyYW5zcGFyZW50LmxpZ2h0IHtcXG4gIGZpbGw6IGhzbGEoMGRlZywgMCUsIDkzLjc1JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZ3JheS50cmFuc3BhcmVudC5saWdodC5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2xhKDBkZWcsIDAlLCA5My43NSUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmdyYXkudHJhbnNwYXJlbnQuZGFyayB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDBkZWcsIDAlLCAxOS41JSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDE4MGRlZywgMCUsIDM5JSwgMC41KTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSgwZGVnLCAwJSwgNS4wNyUsIDAuNSk7XFxufVxcblxcbi5ncmF5LnRyYW5zcGFyZW50LmRhcmsgPiBzdmcge1xcbiAgZmlsbDogaHNsYSgxODBkZWcsIDAlLCAzOSUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuc3ZnLmdyYXkudHJhbnNwYXJlbnQuZGFyayB7XFxuICBmaWxsOiBoc2xhKDBkZWcsIDAlLCAxOS41JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZ3JheS50cmFuc3BhcmVudC5kYXJrLmZvcmVncm91bmQge1xcbiAgY29sb3I6IGhzbGEoMGRlZywgMCUsIDE5LjUlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ibGFjayB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiBoc2woMTgwLCAwJSwgMCUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG59XFxuXFxuLmJsYWNrID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgxODAsIDAlLCAwJSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuc3ZnLmJsYWNrIHtcXG4gIGZpbGw6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ibGFjay5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uYmxhY2subGlnaHQge1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAwJSk7XFxuICBjb2xvcjogaHNsKDE4MCwgMCUsIDAlKTtcXG4gIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxufVxcblxcbi5ibGFjay5saWdodCA+IHN2ZyB7XFxuICBmaWxsOiBoc2woMTgwLCAwJSwgMCUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy5ibGFjay5saWdodCB7XFxuICBmaWxsOiBoc2woMCwgMCUsIDAlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uYmxhY2subGlnaHQuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmJsYWNrLmRhcmsge1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAwJSk7XFxuICBjb2xvcjogaHNsKDE4MCwgMCUsIDAlKTtcXG4gIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxufVxcblxcbi5ibGFjay5kYXJrID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgxODAsIDAlLCAwJSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuc3ZnLmJsYWNrLmRhcmsge1xcbiAgZmlsbDogaHNsKDAsIDAlLCAwJSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmJsYWNrLmRhcmsuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmJsYWNrLnRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMGRlZywgMCUsIDAlLCAwLjUpO1xcbiAgY29sb3I6IGhzbGEoMTgwZGVnLCAwJSwgMCUsIDAuNSk7XFxuICBib3JkZXItY29sb3I6IGhzbGEoMGRlZywgMCUsIDAlLCAwLjUpO1xcbn1cXG5cXG4uYmxhY2sudHJhbnNwYXJlbnQgPiBzdmcge1xcbiAgZmlsbDogaHNsYSgxODBkZWcsIDAlLCAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuYmxhY2sudHJhbnNwYXJlbnQge1xcbiAgZmlsbDogaHNsYSgwZGVnLCAwJSwgMCUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmJsYWNrLnRyYW5zcGFyZW50LmZvcmVncm91bmQge1xcbiAgY29sb3I6IGhzbGEoMGRlZywgMCUsIDAlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ibGFjay50cmFuc3BhcmVudC5saWdodCB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDE4MGRlZywgMCUsIDAlLCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41KTtcXG59XFxuXFxuLmJsYWNrLnRyYW5zcGFyZW50LmxpZ2h0ID4gc3ZnIHtcXG4gIGZpbGw6IGhzbGEoMTgwZGVnLCAwJSwgMCUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuc3ZnLmJsYWNrLnRyYW5zcGFyZW50LmxpZ2h0IHtcXG4gIGZpbGw6IGhzbGEoMGRlZywgMCUsIDAlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5ibGFjay50cmFuc3BhcmVudC5saWdodC5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uYmxhY2sudHJhbnNwYXJlbnQuZGFyayB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDE4MGRlZywgMCUsIDAlLCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41KTtcXG59XFxuXFxuLmJsYWNrLnRyYW5zcGFyZW50LmRhcmsgPiBzdmcge1xcbiAgZmlsbDogaHNsYSgxODBkZWcsIDAlLCAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuYmxhY2sudHJhbnNwYXJlbnQuZGFyayB7XFxuICBmaWxsOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uYmxhY2sudHJhbnNwYXJlbnQuZGFyay5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2xhKDBkZWcsIDAlLCAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZm9jdXMge1xcbiAgYmFja2dyb3VuZDogaHNsKDIwNSwgMTAwJSwgNTAlKTtcXG4gIGNvbG9yOiBoc2woMjUsIDEwMCUsIDEwMCUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2woMjA1LCAxMDAlLCAxMyUpO1xcbn1cXG5cXG4uZm9jdXMgPiBzdmcge1xcbiAgZmlsbDogaHNsKDI1LCAxMDAlLCAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZm9jdXMge1xcbiAgZmlsbDogaHNsKDIwNSwgMTAwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZm9jdXMuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsKDIwNSwgMTAwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZm9jdXMubGlnaHQge1xcbiAgYmFja2dyb3VuZDogaHNsKDIwNSwgMTAwJSwgNjIuNSUpO1xcbiAgY29sb3I6IGhzbCgyNSwgMTAwJSwgNi44NzUlKTtcXG4gIGJvcmRlci1jb2xvcjogaHNsKDIwNSwgMTAwJSwgMTYuMjUlKTtcXG59XFxuXFxuLmZvY3VzLmxpZ2h0ID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgyNSwgMTAwJSwgNi44NzUlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZm9jdXMubGlnaHQge1xcbiAgZmlsbDogaHNsKDIwNSwgMTAwJSwgNjIuNSUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5mb2N1cy5saWdodC5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2woMjA1LCAxMDAlLCA2Mi41JSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmZvY3VzLmRhcmsge1xcbiAgYmFja2dyb3VuZDogaHNsKDIwNSwgMTAwJSwgMTMlKTtcXG4gIGNvbG9yOiBoc2woMjUsIDEwMCUsIDI2JSk7XFxuICBib3JkZXItY29sb3I6IGhzbCgyMDUsIDEwMCUsIDMuMzglKTtcXG59XFxuXFxuLmZvY3VzLmRhcmsgPiBzdmcge1xcbiAgZmlsbDogaHNsKDI1LCAxMDAlLCAyNiUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy5mb2N1cy5kYXJrIHtcXG4gIGZpbGw6IGhzbCgyMDUsIDEwMCUsIDEzJSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmZvY3VzLmRhcmsuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsKDIwNSwgMTAwJSwgMTMlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZm9jdXMudHJhbnNwYXJlbnQge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyMDVkZWcsIDEwMCUsIDUwJSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDI1ZGVnLCAxMDAlLCAxMDAlLCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKDIwNWRlZywgMTAwJSwgMTMlLCAwLjUpO1xcbn1cXG5cXG4uZm9jdXMudHJhbnNwYXJlbnQgPiBzdmcge1xcbiAgZmlsbDogaHNsYSgyNWRlZywgMTAwJSwgMTAwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZm9jdXMudHJhbnNwYXJlbnQge1xcbiAgZmlsbDogaHNsYSgyMDVkZWcsIDEwMCUsIDUwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZm9jdXMudHJhbnNwYXJlbnQuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsYSgyMDVkZWcsIDEwMCUsIDUwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZm9jdXMudHJhbnNwYXJlbnQubGlnaHQge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyMDVkZWcsIDEwMCUsIDYyLjUlLCAwLjUpO1xcbiAgY29sb3I6IGhzbGEoMjVkZWcsIDEwMCUsIDYuODc1JSwgMC41KTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSgyMDVkZWcsIDEwMCUsIDE2LjI1JSwgMC41KTtcXG59XFxuXFxuLmZvY3VzLnRyYW5zcGFyZW50LmxpZ2h0ID4gc3ZnIHtcXG4gIGZpbGw6IGhzbGEoMjVkZWcsIDEwMCUsIDYuODc1JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZm9jdXMudHJhbnNwYXJlbnQubGlnaHQge1xcbiAgZmlsbDogaHNsYSgyMDVkZWcsIDEwMCUsIDYyLjUlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbi5mb2N1cy50cmFuc3BhcmVudC5saWdodC5mb3JlZ3JvdW5kIHtcXG4gIGNvbG9yOiBoc2xhKDIwNWRlZywgMTAwJSwgNjIuNSUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmZvY3VzLnRyYW5zcGFyZW50LmRhcmsge1xcbiAgYmFja2dyb3VuZDogaHNsYSgyMDVkZWcsIDEwMCUsIDEzJSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDI1ZGVnLCAxMDAlLCAyNiUsIDAuNSk7XFxuICBib3JkZXItY29sb3I6IGhzbGEoMjA1ZGVnLCAxMDAlLCAzLjM4JSwgMC41KTtcXG59XFxuXFxuLmZvY3VzLnRyYW5zcGFyZW50LmRhcmsgPiBzdmcge1xcbiAgZmlsbDogaHNsYSgyNWRlZywgMTAwJSwgMjYlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy5mb2N1cy50cmFuc3BhcmVudC5kYXJrIHtcXG4gIGZpbGw6IGhzbGEoMjA1ZGVnLCAxMDAlLCAxMyUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmZvY3VzLnRyYW5zcGFyZW50LmRhcmsuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsYSgyMDVkZWcsIDEwMCUsIDEzJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQ6IGhzbCg3LCA4MCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDE4NywgODAlLCAxMDAlKTtcXG4gIGJvcmRlci1jb2xvcjogaHNsKDcsIDgwJSwgMTMlKTtcXG59XFxuXFxuLmRhbmdlciA+IHN2ZyB7XFxuICBmaWxsOiBoc2woMTg3LCA4MCUsIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy5kYW5nZXIge1xcbiAgZmlsbDogaHNsKDcsIDgwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLmZvcmVncm91bmQge1xcbiAgY29sb3I6IGhzbCg3LCA4MCUsIDUwJSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmRhbmdlci5saWdodCB7XFxuICBiYWNrZ3JvdW5kOiBoc2woNywgODAlLCA2Mi41JSk7XFxuICBjb2xvcjogaHNsKDE4NywgODAlLCA2Ljg3NSUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2woNywgODAlLCAxNi4yNSUpO1xcbn1cXG5cXG4uZGFuZ2VyLmxpZ2h0ID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgxODcsIDgwJSwgNi44NzUlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZGFuZ2VyLmxpZ2h0IHtcXG4gIGZpbGw6IGhzbCg3LCA4MCUsIDYyLjUlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLmxpZ2h0LmZvcmVncm91bmQge1xcbiAgY29sb3I6IGhzbCg3LCA4MCUsIDYyLjUlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLmRhcmsge1xcbiAgYmFja2dyb3VuZDogaHNsKDcsIDgwJSwgMTMlKTtcXG4gIGNvbG9yOiBoc2woMTg3LCA4MCUsIDI2JSk7XFxuICBib3JkZXItY29sb3I6IGhzbCg3LCA4MCUsIDMuMzglKTtcXG59XFxuXFxuLmRhbmdlci5kYXJrID4gc3ZnIHtcXG4gIGZpbGw6IGhzbCgxODcsIDgwJSwgMjYlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZGFuZ2VyLmRhcmsge1xcbiAgZmlsbDogaHNsKDcsIDgwJSwgMTMlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLmRhcmsuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsKDcsIDgwJSwgMTMlKTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLnRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoN2RlZywgODAlLCA1MCUsIDAuNSk7XFxuICBjb2xvcjogaHNsYSgxODdkZWcsIDgwJSwgMTAwJSwgMC41KTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSg3ZGVnLCA4MCUsIDEzJSwgMC41KTtcXG59XFxuXFxuLmRhbmdlci50cmFuc3BhcmVudCA+IHN2ZyB7XFxuICBmaWxsOiBoc2xhKDE4N2RlZywgODAlLCAxMDAlLCAwLjUpO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbnN2Zy5kYW5nZXIudHJhbnNwYXJlbnQge1xcbiAgZmlsbDogaHNsYSg3ZGVnLCA4MCUsIDUwJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLnRyYW5zcGFyZW50LmZvcmVncm91bmQge1xcbiAgY29sb3I6IGhzbGEoN2RlZywgODAlLCA1MCUsIDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLmRhbmdlci50cmFuc3BhcmVudC5saWdodCB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDdkZWcsIDgwJSwgNjIuNSUsIDAuNSk7XFxuICBjb2xvcjogaHNsYSgxODdkZWcsIDgwJSwgNi44NzUlLCAwLjUpO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKDdkZWcsIDgwJSwgMTYuMjUlLCAwLjUpO1xcbn1cXG5cXG4uZGFuZ2VyLnRyYW5zcGFyZW50LmxpZ2h0ID4gc3ZnIHtcXG4gIGZpbGw6IGhzbGEoMTg3ZGVnLCA4MCUsIDYuODc1JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZGFuZ2VyLnRyYW5zcGFyZW50LmxpZ2h0IHtcXG4gIGZpbGw6IGhzbGEoN2RlZywgODAlLCA2Mi41JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLnRyYW5zcGFyZW50LmxpZ2h0LmZvcmVncm91bmQge1xcbiAgY29sb3I6IGhzbGEoN2RlZywgODAlLCA2Mi41JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLnRyYW5zcGFyZW50LmRhcmsge1xcbiAgYmFja2dyb3VuZDogaHNsYSg3ZGVnLCA4MCUsIDEzJSwgMC41KTtcXG4gIGNvbG9yOiBoc2xhKDE4N2RlZywgODAlLCAyNiUsIDAuNSk7XFxuICBib3JkZXItY29sb3I6IGhzbGEoN2RlZywgODAlLCAzLjM4JSwgMC41KTtcXG59XFxuXFxuLmRhbmdlci50cmFuc3BhcmVudC5kYXJrID4gc3ZnIHtcXG4gIGZpbGw6IGhzbGEoMTg3ZGVnLCA4MCUsIDI2JSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG5zdmcuZGFuZ2VyLnRyYW5zcGFyZW50LmRhcmsge1xcbiAgZmlsbDogaHNsYSg3ZGVnLCA4MCUsIDEzJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4uZGFuZ2VyLnRyYW5zcGFyZW50LmRhcmsuZm9yZWdyb3VuZCB7XFxuICBjb2xvcjogaHNsYSg3ZGVnLCA4MCUsIDEzJSwgMC41KTtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4vKiBDaHJvbWUgcmVuZGVycyBhbiBleHRyYSBwaXhlbCBpbnNpZGUgMXB4IGJvcmRlcnMsIGJlY2F1c2UuLi4gYnVnPyAqL1xcbi8qIGl0IHN1cmUgd291bGQgYmUga2VlbiB0byBiZSBhYmxlIHRvIGxheW91dCBhcm91bmQgdGhlIHNjcm9sbGJhci4uLiBpZiBpdCdzIHRoZXJlISAqL1xcbjpyb290IHtcXG4gIC8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82NDkwMjYwNCAqL1xcbiAgLS1zY3JvbGxiYXItd2lkdGg6IG1heCgxZW0sIGNhbGMoMTAwdncgLSAxMDAlKSk7XFxuICAtLXNjcm9sbGJhci1oZWlnaHQ6IG1heCgxZW0sIGNhbGMoMTAwdmggLSAxMDAlKSk7XFxufVxcblxcbmZvcm0gLmZvcm0tY29udHJvbHMsIC5mb3JtIC5mb3JtLWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbmZvcm0gLmZvcm0tY29udHJvbHMgPiAqLCAuZm9ybSAuZm9ybS1jb250cm9scyA+ICoge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuZm9ybSAuZm9ybS1jb250cm9scyA+IGxhYmVsLFxcbmZvcm0gZHQsIC5mb3JtIC5mb3JtLWNvbnRyb2xzID4gbGFiZWwsXFxuLmZvcm0gZHQge1xcbiAgbWFyZ2luOiAwO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGdyYXk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuZm9ybSAuaW5wdXQsIC5mb3JtIC5pbnB1dCB7XFxuICBtaW4taGVpZ2h0OiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuZm9ybSAuZm9ybS1jb250cm9scyA+IGlucHV0LFxcbmZvcm0gLmZvcm0tY29udHJvbHMgPiAuaW5wdXQsXFxuZm9ybSAuZm9ybS1jb250cm9scyA+IHNlbGVjdCxcXG5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCxcXG5mb3JtIGRkLCAuZm9ybSAuZm9ybS1jb250cm9scyA+IGlucHV0LFxcbi5mb3JtIC5mb3JtLWNvbnRyb2xzID4gLmlucHV0LFxcbi5mb3JtIC5mb3JtLWNvbnRyb2xzID4gc2VsZWN0LFxcbi5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCxcXG4uZm9ybSBkZCB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5mb3JtIC5mb3JtLWNvbnRyb2xzID4gaW5wdXQsXFxuZm9ybSAuZm9ybS1jb250cm9scyA+IC5pbnB1dCxcXG5mb3JtIC5mb3JtLWNvbnRyb2xzID4gc2VsZWN0LFxcbmZvcm0gLmZvcm0tY29udHJvbHMgLmlucHV0LWdyb3VwLFxcbmZvcm0gZGQsIC5mb3JtIC5mb3JtLWNvbnRyb2xzID4gaW5wdXQsXFxuLmZvcm0gLmZvcm0tY29udHJvbHMgPiAuaW5wdXQsXFxuLmZvcm0gLmZvcm0tY29udHJvbHMgPiBzZWxlY3QsXFxuLmZvcm0gLmZvcm0tY29udHJvbHMgLmlucHV0LWdyb3VwLFxcbi5mb3JtIGRkIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbmZvcm0gLmZvcm0tY29udHJvbHMgaW5wdXQsXFxuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQsXFxuZm9ybSAuZm9ybS1jb250cm9scyBzZWxlY3QsXFxuZm9ybSAuZm9ybS1jb250cm9scyBidXR0b24sXFxuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAsIC5mb3JtIC5mb3JtLWNvbnRyb2xzIGlucHV0LFxcbi5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dCxcXG4uZm9ybSAuZm9ybS1jb250cm9scyBzZWxlY3QsXFxuLmZvcm0gLmZvcm0tY29udHJvbHMgYnV0dG9uLFxcbi5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCB7XFxuICBtaW4td2lkdGg6IDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAsIC5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAgYnV0dG9uLFxcbmZvcm0gLmZvcm0tY29udHJvbHMgLmlucHV0LWdyb3VwIGlucHV0LFxcbmZvcm0gLmZvcm0tY29udHJvbHMgLmlucHV0LWdyb3VwIHNlbGVjdCwgLmZvcm0gLmZvcm0tY29udHJvbHMgLmlucHV0LWdyb3VwIGJ1dHRvbixcXG4uZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAgaW5wdXQsXFxuLmZvcm0gLmZvcm0tY29udHJvbHMgLmlucHV0LWdyb3VwIHNlbGVjdCB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCBidXR0b24sIC5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCBidXR0b24ge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjY2NmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC42NjZlbTtcXG59XFxuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAgKjpsYXN0LWNoaWxkLCAuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAgKjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNlbTtcXG59XFxuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAgYnV0dG9uOmxhc3QtY2hpbGQsIC5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCBidXR0b246bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCAqOmZpcnN0LWNoaWxkLCAuZm9ybSAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAgKjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM2VtO1xcbn1cXG5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCBidXR0b246Zmlyc3QtY2hpbGQsIC5mb3JtIC5mb3JtLWNvbnRyb2xzIC5pbnB1dC1ncm91cCBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XFxufVxcbmZvcm0gaW5wdXQsXFxuZm9ybSAuaW5wdXQsXFxuZm9ybSBzZWxlY3QsIC5mb3JtIGlucHV0LFxcbi5mb3JtIC5pbnB1dCxcXG4uZm9ybSBzZWxlY3Qge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiAwLjMzM2VtO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjk5cHggaHNsKDAsIDAlLCAxOS41JSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG59XFxuZm9ybSAuYnV0dG9ucywgLmZvcm0gLmJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiAxZW07XFxufVxcbmZvcm0gYnV0dG9uLCAuZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5My43NSUpO1xcbiAgY29sb3I6IGhzbCgxODAsIDAlLCAxMC4zMTI1JSk7XFxuICBib3JkZXItY29sb3I6IGhzbCgwLCAwJSwgMjQuMzc1JSk7XFxuICBib3JkZXI6IHNvbGlkIDAuMjVwdCBoc2woMCwgMCUsIDE5LjUlKTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgcGFkZGluZzogMC4zMzNlbSAwLjY2NmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LWJhc2lzOiAwO1xcbn1cXG5mb3JtIGJ1dHRvbi5kZWZhdWx0LCAuZm9ybSBidXR0b24uZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMjA1LCAxMDAlLCA1MCUpO1xcbiAgY29sb3I6IGhzbCgyNSwgMTAwJSwgMTAwJSk7XFxuICBib3JkZXItY29sb3I6IGhzbCgyMDUsIDEwMCUsIDEzJSk7XFxuICBib3JkZXItY29sb3I6IGhzbCgyMDUsIDEwMCUsIDEzJSk7XFxufVxcbmZvcm0gYnV0dG9uLmRhbmdlciwgLmZvcm0gYnV0dG9uLmRhbmdlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woNywgODAlLCA1MCUpO1xcbiAgY29sb3I6IGhzbCgxODcsIDgwJSwgMTAwJSk7XFxuICBib3JkZXItY29sb3I6IGhzbCg3LCA4MCUsIDEzJSk7XFxuICBib3JkZXItY29sbGFwc2U6IGhzbCg3LCA4MCUsIDEzJSk7XFxufVxcbmZvcm0gOmZvY3VzLCAuZm9ybSA6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBoc2xhKDIwNWRlZywgMTAwJSwgNTAlLCAwLjUpO1xcbn1cXG5mb3JtIGRsLCAuZm9ybSBkbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZW0gYXV0byBhdXRvIDFmcjtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG4gIC1tb3otY29sdW1uLWdhcDogMXJlbTtcXG4gICAgICAgY29sdW1uLWdhcDogMXJlbTtcXG4gIGdyaWQtcm93LWdhcDogMC41cmVtO1xcbiAgcm93LWdhcDogMC41cmVtO1xcbn1cXG5mb3JtIGRkLCAuZm9ybSBkZCB7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIHBhZGRpbmc6IDAuMzMzZW07XFxufVxcblxcbi5tb2RhbC1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwtZWRpdCAuYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5tb2RhbC1lZGl0IC5pbnB1dC1ncm91cCAuaWNvbiB7XFxuICBoZWlnaHQ6IDAuNzVlbTtcXG59XFxuLm1vZGFsLWVkaXQgLnRpbWVzdGFtcCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDE5LjUlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BiYXR0aXMvanN4LXVpL2Rpc3Qvc2Fzcy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9Nb2RhbEVkaXQuc2Nzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BiYXR0aXMvanN4LXVpL2Rpc3Qvc2Fzcy9fY3NzX3RyaWNrcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGJhdHRpcy9qc3gtdWkvZGlzdC9zYXNzL19mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYmF0dGlzL2pzeC11aS9kaXN0L3Nhc3MvX3NwYWNpbmcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQSxnQkFBQTtBQVVBLHVCQUFBO0FBSUEsMEJBQUE7QUFtRUk7RUFYQSxpQkF3QzhDO0VBdkM5Qyx3QkFBQTtFQUNBLDZCQUFBO0FDcEVKOztBRGlGSTtFQVRBLHVCQVVrQjtFQVRsQixpQkFBQTtBQ3BFSjs7QURnRkk7RUFiQSxXQWtDOEM7RUFqQzlDLGlCQUFBO0FDL0RKOztBRCtFSTtFQUNJLFlBZ0IwQztFQWYxQyxpQkFBQTtBQzVFUjs7QUQ4REk7RUFYQSw0QkF3QzhDO0VBdkM5Qyx3QkFBQTtFQUNBLDZCQUFBO0FDL0NKOztBRDRESTtFQVRBLHVCQVVrQjtFQVRsQixpQkFBQTtBQy9DSjs7QUQyREk7RUFiQSxzQkFrQzhDO0VBakM5QyxpQkFBQTtBQzFDSjs7QUQwREk7RUFDSSx1QkFnQjBDO0VBZjFDLGlCQUFBO0FDdkRSOztBRHlDSTtFQVhBLDJCQXdDOEM7RUF2QzlDLHdCQUFBO0VBQ0EsK0JBQUE7QUMxQko7O0FEdUNJO0VBVEEsdUJBVWtCO0VBVGxCLGlCQUFBO0FDMUJKOztBRHNDSTtFQWJBLHFCQWtDOEM7RUFqQzlDLGlCQUFBO0FDckJKOztBRHFDSTtFQUNJLHNCQWdCMEM7RUFmMUMsaUJBQUE7QUNsQ1I7O0FEb0JJO0VBWEEscUNBd0M4QztFQXZDOUMsaUNBQUE7RUFDQSxzQ0FBQTtBQ0xKOztBRGtCSTtFQVRBLGdDQVVrQjtFQVRsQixpQkFBQTtBQ0xKOztBRGlCSTtFQWJBLCtCQWtDOEM7RUFqQzlDLGlCQUFBO0FDQUo7O0FEZ0JJO0VBQ0ksZ0NBZ0IwQztFQWYxQyxpQkFBQTtBQ2JSOztBRERJO0VBWEEscUNBd0M4QztFQXZDOUMsaUNBQUE7RUFDQSxzQ0FB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d0JGO0FBeHdCRTtFQUNFLGVBQUE7QUEwd0JKO0FBdHdCSTtFQUNFLGNBQUE7QUF3d0JOO0FBcHdCRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQXN3QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2Fzczpjb2xvclxcXCI7XFxuQHVzZSBcXFwic2FzczptZXRhXFxcIjtcXG5cXG4vKiBiYXNlIGNvbG9ycyAqL1xcbiR3aGl0ZTogd2hpdGU7XFxuJGdyYXk6IGhzbCgwLCAwJSwgNzUlKTtcXG4kYmxhY2s6IGJsYWNrO1xcbiRmb2N1czogaHNsKDIwNSwgMTAwJSwgNTAlKTtcXG4kZGFuZ2VyOiBoc2woNywgODAlLCA1MCUpO1xcbiR0cmFuc3BhcmVudDogaHNsYSgwLCAwJSwgMCUsIDAlKTtcXG5cXG4kY29sb3JzOiAod2hpdGU6ICR3aGl0ZSwgZ3JheTogJGdyYXksIGJsYWNrOiAkYmxhY2ssIGZvY3VzOiAkZm9jdXMsIGRhbmdlcjogJGRhbmdlcik7XFxuXFxuLyogc2VtYW50aWMgc2hvcnRjdXRzICovXFxuJGZvcmVncm91bmQ6ICRibGFjaztcXG4kYmFja2dyb3VuZDogJHdoaXRlO1xcblxcbi8qIGFkanVzdG1lbnQgcGFyYW1ldGVycyAqL1xcbiQtdHJhbnNwYXJlbnQ6IDAuNTtcXG4kLWxpZ2h0ZXI6IDEuMjU7XFxuJC1kYXJrZXI6IDAuMjY7XFxuJC10ZXh0LWRhcmtlcjogJC1kYXJrZXIgLSAwLjE1O1xcbiQtdGV4dC1saWdodGVyOiAkLWxpZ2h0ZXIgKyAwLjc1O1xcbiQtdGV4dC1jdXRvZmY6IDYwJTtcXG5cXG5AZnVuY3Rpb24gaHNsYVJlcGxhY2UoJGNvbG9yLCAkaHVlOiBmYWxzZSwgJHNhdHVyYXRpb246IGZhbHNlLCAkbGlnaHRuZXNzOiBmYWxzZSwgJGFscGhhOiBmYWxzZSkge1xcbiAgICBAaWYgJGh1ZSA9PSBmYWxzZSB7XFxuICAgICAgICAkaHVlOiBjb2xvci5odWUoKCRjb2xvcikpO1xcbiAgICB9XFxuICAgIEBpZiAkc2F0dXJhdGlvbiA9PSBmYWxzZSB7XFxuICAgICAgICAkc2F0dXJhdGlvbjogY29sb3Iuc2F0dXJhdGlvbigkY29sb3IpO1xcbiAgICB9XFxuICAgIEBpZiAkbGlnaHRuZXNzID09IGZhbHNlIHtcXG4gICAgICAgICRsaWdodG5lc3M6IGNvbG9yLmxpZ2h0bmVzcygkY29sb3IpO1xcbiAgICB9XFxuICAgIEBpZiAkYWxwaGEgPT0gZmFsc2Uge1xcbiAgICAgICAgJGFscGhhOiBjb2xvci5hbHBoYSgkY29sb3IpO1xcbiAgICB9XFxuICAgIEByZXR1cm4gaHNsYSgkaHVlLCAkc2F0dXJhdGlvbiwgJGxpZ2h0bmVzcywgJGFscGhhKTtcXG59XFxuXFxuQGZ1bmN0aW9uIHRleHRPbigkYywgJGFkanVzdG1lbnQ6IG51bGwpIHtcXG4gICAgJGNvbXB1dGVkOiBudWxsO1xcbiAgICBAaWYgJGFkanVzdG1lbnQgPT0gJC1saWdodGVyIHtcXG4gICAgICAgICRjb21wdXRlZDogJC10ZXh0LWxpZ2h0ZXI7XFxuICAgIH0gQGVsc2UgaWYgJGFkanVzdG1lbnQgPT0gJC1kYXJrZXIge1xcbiAgICAgICAgJGNvbXB1dGVkOiAkLXRleHQtZGFya2VyO1xcbiAgICB9IEBlbHNlIGlmIChjb2xvci5saWdodG5lc3MoJGMpIDw9ICQtdGV4dC1jdXRvZmYpIHtcXG4gICAgICAgICRjb21wdXRlZDogJC10ZXh0LWxpZ2h0ZXI7XFxuICAgIH0gQGVsc2Uge1xcbiAgICAgICAgJGNvbXB1dGVkOiAkLXRleHQtZGFya2VyO1xcbiAgICB9XFxuXFxuICAgIEByZXR1cm4gaHNsYVJlcGxhY2UoY29sb3IuY29tcGxlbWVudCgkYyksICRsaWdodG5lc3M6ICRjb21wdXRlZCAqIGNvbG9yLmxpZ2h0bmVzcygkYykpO1xcbn1cXG5cXG5AZnVuY3Rpb24gaWRlbnRpdHkoJGMpIHtcXG4gICAgQHJldHVybiAkYztcXG59XFxuXFxuQGZ1bmN0aW9uIGxpZ2h0ZXIoJGMpIHtcXG4gICAgQHJldHVybiBoc2xhUmVwbGFjZSgkYywgJGxpZ2h0bmVzczogJC1saWdodGVyICogY29sb3IubGlnaHRuZXNzKCRjKSk7XFxufVxcblxcbkBmdW5jdGlvbiBkYXJrZXIoJGMpIHtcXG4gICAgQHJldHVybiBoc2xhUmVwbGFjZSgkYywgJGxpZ2h0bmVzczogJC1kYXJrZXIgKiBjb2xvci5saWdodG5lc3MoJGMpKTtcXG59XFxuXFxuQGZ1bmN0aW9uIHRyYW5zcGFyZW50KCRjKSB7XFxuICAgIEByZXR1cm4gaHNsYVJlcGxhY2UoJGMsICRhbHBoYTogJC10cmFuc3BhcmVudCk7XFxufVxcblxcbkBtaXhpbiBiYWNrZ3JvdW5kKCRjKSB7XFxuICAgIGJhY2tncm91bmQ6ICRjO1xcbiAgICBjb2xvcjogdGV4dE9uKCRjKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZXIoJGMpO1xcbn1cXG5cXG5AbWl4aW4gZmlsbCgkYykge1xcbiAgICBmaWxsOiAkYztcXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XFxufVxcblxcbkBtaXhpbiAtYWxsLWNvbG9ycy1taXhpbigkc2VsZWN0b3IsICRjb2xvcikge1xcbiAgICAjeyRzZWxlY3Rvcn0ge1xcbiAgICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZCgkY29sb3IpO1xcbiAgICB9XFxuXFxuICAgICN7JHNlbGVjdG9yfSA+IHN2ZyB7XFxuICAgICAgICBAaW5jbHVkZSBmaWxsKHRleHRPbigkY29sb3IpKTtcXG4gICAgfVxcblxcbiAgICBzdmcjeyRzZWxlY3Rvcn0ge1xcbiAgICAgICAgQGluY2x1ZGUgZmlsbCgkY29sb3IpO1xcbiAgICB9XFxuXFxuICAgICN7JHNlbGVjdG9yfS5mb3JlZ3JvdW5kIHtcXG4gICAgICAgIGNvbG9yOiAkY29sb3I7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcXG4gICAgfVxcbn1cXG5cXG4vLyBUT0RPIHdoZW4gZHluYW1pYyBtaXhpbnMgYXJlIGF2YWlsYWJsZSwgdGhpcyBzaG91bGQgYmUgcHJpdmF0ZSAoc2luY2UgaXQgd291bGRuJ3QgYmUgbmVlZGVkIGV4dGVybmFsbHkpXFxuJG51bGw6IFxcXCJgbnVsbGBcXFwiOyAvLyBhIHN0cmluZyB0byB1c2UgYXMgYSBrZXkgd2hlbiB3aGF0IEkgcmVhbGx5IHdhbnQgaXMgYSBudWxsIHZhbHVlXFxuXFxuQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkY29sb3JzIHtcXG4gICAgQGVhY2ggJG9wYWNpdHksICRvcGFjaXR5VHJhbnNmb3JtYXRpb24gaW4gKCN7JG51bGx9OiBtZXRhLmdldC1mdW5jdGlvbihcXFwiaWRlbnRpdHlcXFwiKSwgdHJhbnNwYXJlbnQ6IG1ldGEuZ2V0LWZ1bmN0aW9uKFxcXCJ0cmFuc3BhcmVudFxcXCIpKSB7XFxuICAgICAgICAkb3BhY2l0eVNlbGVjdG9yOiBpZigkb3BhY2l0eSA9PSAkbnVsbCwgXFxcIi4jeyRuYW1lfVxcXCIsIFxcXCIuI3skbmFtZX0uI3skb3BhY2l0eX1cXFwiKTtcXG5cXG4gICAgICAgIEBlYWNoICRsaWdodG5lc3MsICRsaWdodG5lc3NUcmFuc2Zvcm1hdGlvbiBpbiAoI3skbnVsbH06IG1ldGEuZ2V0LWZ1bmN0aW9uKFxcXCJpZGVudGl0eVxcXCIpLCBsaWdodDogbWV0YS5nZXQtZnVuY3Rpb24oXFxcImxpZ2h0ZXJcXFwiKSwgZGFyazogbWV0YS5nZXQtZnVuY3Rpb24oXFxcImRhcmtlclxcXCIpKSB7XFxuICAgICAgICAgICAgJHNlbGVjdG9yOiBpZigkbGlnaHRuZXNzID09ICRudWxsLCAkb3BhY2l0eVNlbGVjdG9yLCBcXFwiI3skb3BhY2l0eVNlbGVjdG9yfS4jeyRsaWdodG5lc3N9XFxcIik7XFxuXFxuICAgICAgICAgICAgLy8gVE9ETyBzb21lZGF5IHRoZXJlIHdpbGwgYmUgZHluYW1pYyBtaXhpbnMhIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL3Nhc3MvaXNzdWVzLzYyNlxcbiAgICAgICAgICAgIEBpbmNsdWRlIC1hbGwtY29sb3JzLW1peGluKCRzZWxlY3RvciwgbWV0YS5jYWxsKCRsaWdodG5lc3NUcmFuc2Zvcm1hdGlvbiwgbWV0YS5jYWxsKCRvcGFjaXR5VHJhbnNmb3JtYXRpb24sICRjb2xvcikpKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIkB1c2UgXFxcIn5AYmF0dGlzL2pzeC11aS9kaXN0L3Nhc3MvY29sb3JzXFxcIjtcXG5AdXNlIFxcXCJ+QGJhdHRpcy9qc3gtdWkvZGlzdC9zYXNzL2Zvcm1cXFwiO1xcblxcbi5tb2RhbC1lZGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLmJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICB9XFxuXFxuICAuaW5wdXQtZ3JvdXAge1xcbiAgICAuaWNvbiB7XFxuICAgICAgaGVpZ2h0OiAwLjc1ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50aW1lc3RhbXAge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgICBjb2xvcjogY29sb3JzLmRhcmtlcihjb2xvcnMuJGdyYXkpO1xcbiAgfVxcbn1cXG5cIixcIi8qIENocm9tZSByZW5kZXJzIGFuIGV4dHJhIHBpeGVsIGluc2lkZSAxcHggYm9yZGVycywgYmVjYXVzZS4uLiBidWc/ICovXFxuJG9uZS1weDogMC45OXB4O1xcblxcbi8qIGl0IHN1cmUgd291bGQgYmUga2VlbiB0byBiZSBhYmxlIHRvIGxheW91dCBhcm91bmQgdGhlIHNjcm9sbGJhci4uLiBpZiBpdCdzIHRoZXJlISAqL1xcbjpyb290IHtcXG4gICAgLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY0OTAyNjA0ICovXFxuICAgIC0tc2Nyb2xsYmFyLXdpZHRoOiBtYXgoMWVtLCBjYWxjKDEwMHZ3IC0gMTAwJSkpOyAvLyBGSVhNRSBzdHVwaWQgdGhpbmcgZG9lc24ndCBzdHVwaWQgd29yaywgc28gd2UnbGwgdGhyb3cgaW4gYSAxZW0gZGVmYXVsdCBqdXN0IGluIGNhc2VcXG4gICAgLS1zY3JvbGxiYXItaGVpZ2h0OiBtYXgoMWVtLCBjYWxjKDEwMHZoIC0gMTAwJSkpO1xcbn1cXG4kc2Nyb2xsYmFyLXdpZHRoOiB2YXIoLS1zY3JvbGxiYXItd2lkdGgpO1xcbiRzY3JvbGxiYXItaGVpZ2h0OiB2YXIoLS1zY3JvbGxiYXItaGVpZ2h0KTtcXG5cXG5cIixcIkB1c2UgXFxcImNvbG9yc1xcXCI7XFxuQHVzZSBcXFwic3BhY2luZ1xcXCI7XFxuQHVzZSBcXFwiY3NzX3RyaWNrc1xcXCI7XFxuXFxuZm9ybSwgLmZvcm0ge1xcbiAgICAuZm9ybS1jb250cm9scyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgICAgICA+ICoge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZm9ybS1jb250cm9scyA+IGxhYmVsLFxcbiAgICBkdCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGNvbG9yOiBncmF5O1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5mb3JtLWNvbnRyb2xzID4gaW5wdXQsXFxuICAgIC5mb3JtLWNvbnRyb2xzID4gLmlucHV0LFxcbiAgICAuZm9ybS1jb250cm9scyA+IHNlbGVjdCxcXG4gICAgLmZvcm0tY29udHJvbHMgLmlucHV0LWdyb3VwLFxcbiAgICBkZCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgLmZvcm0tY29udHJvbHMgPiBpbnB1dCxcXG4gICAgLmZvcm0tY29udHJvbHMgPiAuaW5wdXQsXFxuICAgIC5mb3JtLWNvbnRyb2xzID4gc2VsZWN0LFxcbiAgICAuZm9ybS1jb250cm9scyAuaW5wdXQtZ3JvdXAsXFxuICAgIGRkIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbiAgICAuZm9ybS1jb250cm9scyB7XFxuICAgICAgICBpbnB1dCxcXG4gICAgICAgIC5pbnB1dCxcXG4gICAgICAgIHNlbGVjdCxcXG4gICAgICAgIGJ1dHRvbixcXG4gICAgICAgIC5pbnB1dC1ncm91cCB7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmlucHV0LWdyb3VwIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG5cXG4gICAgICAgICAgICBidXR0b24sXFxuICAgICAgICAgICAgaW5wdXQsXFxuICAgICAgICAgICAgc2VsZWN0IHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBzcGFjaW5nLiRwYWRkaW5nLW1ham9yO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBzcGFjaW5nLiRwYWRkaW5nLW1ham9yO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAqOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogc3BhY2luZy4kYm9yZGVyLXJhZGl1cy1taW5vcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHNwYWNpbmcuJGJvcmRlci1yYWRpdXMtbWlub3I7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgKjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHNwYWNpbmcuJGJvcmRlci1yYWRpdXMtbWlub3I7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHNwYWNpbmcuJGJvcmRlci1yYWRpdXMtbWlub3I7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBpbnB1dCxcXG4gICAgLmlucHV0LFxcbiAgICBzZWxlY3Qge1xcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgICAgICBwYWRkaW5nOiBzcGFjaW5nLiRwYWRkaW5nLW1pbm9yO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBjc3NfdHJpY2tzLiRvbmUtcHggY29sb3JzLmRhcmtlcihjb2xvcnMuJGdyYXkpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogc3BhY2luZy4kYm9yZGVyLXJhZGl1cy1taW5vcjtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9ucyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBnYXA6IDFlbTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgQGluY2x1ZGUgY29sb3JzLmJhY2tncm91bmQoY29sb3JzLmxpZ2h0ZXIoY29sb3JzLiRncmF5KSk7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDAuMjVwdCBjb2xvcnMuZGFya2VyKGNvbG9ycy4kZ3JheSk7XFxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgICAgIHBhZGRpbmc6IHNwYWNpbmcuJHBhZGRpbmctbWlub3Igc3BhY2luZy4kcGFkZGluZy1tYWpvcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHNwYWNpbmcuJGJvcmRlci1yYWRpdXMtbWlub3I7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5kZWZhdWx0IHtcXG4gICAgICAgIEBpbmNsdWRlIGNvbG9ycy5iYWNrZ3JvdW5kKGNvbG9ycy4kZm9jdXMpO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBjb2xvcnMuZGFya2VyKGNvbG9ycy4kZm9jdXMpO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5kYW5nZXIge1xcbiAgICAgICAgQGluY2x1ZGUgY29sb3JzLmJhY2tncm91bmQoY29sb3JzLiRkYW5nZXIpO1xcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xvcnMuZGFya2VyKGNvbG9ycy4kZGFuZ2VyKTtcXG4gICAgfVxcblxcbiAgICA6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBjb2xvcnMudHJhbnNwYXJlbnQoY29sb3JzLiRmb2N1cyk7XFxuICAgIH1cXG5cXG4gICAgZGwge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWVtIGF1dG8gYXV0byAxZnI7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICAgICAgcm93LWdhcDogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIGRkIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICAgICAgcGFkZGluZzogc3BhY2luZy4kcGFkZGluZy1taW5vcjtcXG4gICAgfVxcbn1cXG5cXG5cXG5cIixcIiRwaGk6IDEuNjE4MDMzOTg4NzU7XFxuXFxuJGJvcmRlci1yYWRpdXMtbWFqb3I6IDFlbTtcXG4kYm9yZGVyLXJhZGl1cy1taW5vcjogMC4zZW07XFxuXFxuJHBhZGRpbmctbWFqb3I6IDAuNjY2ZW07XFxuJHBhZGRpbmctbWlub3I6IDAuMzMzZW07XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL01vZGFsRWRpdC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL01vZGFsRWRpdC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Nb2RhbEVkaXQgPSB2b2lkIDA7XG5jb25zdCBNb2RhbEVkaXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvTW9kYWxFZGl0XCIpKTtcbmV4cG9ydHMuTW9kYWxFZGl0ID0gTW9kYWxFZGl0XzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QganN4X2ZhY3RvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQGJhdHRpcy9qc3gtZmFjdG9yeVwiKSk7XG5jb25zdCBqc3hfbGliXzEgPSByZXF1aXJlKFwiQGJhdHRpcy9qc3gtbGliXCIpO1xuY29uc3QgbW9ua2V5X3BhdGNoZXNfMSA9IHJlcXVpcmUoXCJAYmF0dGlzL21vbmtleS1wYXRjaGVzXCIpO1xuY29uc3QganN4X3VpXzEgPSByZXF1aXJlKFwiQGJhdHRpcy9qc3gtdWlcIik7XG5yZXF1aXJlKFwiLi9Nb2RhbEVkaXQuc2Nzc1wiKTtcbmNvbnN0IGZvcmVpZ25LZXlHZW5lcmljID0gKCkgPT4ge1xuICAgIHJldHVybiBudWxsO1xufTtcbmNsYXNzIE1vZGFsRWRpdCBleHRlbmRzIGpzeF91aV8xLk1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcihfYSkge1xuICAgICAgICB2YXIgeyB0YXJnZXQsIHRpdGxlLCB2aWV3cyA9IHt9LCBjYWxsYmFjayA9IG51bGwsIGZvcmVpZ25LZXlMb29rdXAgPSBmb3JlaWduS2V5R2VuZXJpYyB9ID0gX2EsIHBhcmFtcyA9IF9fcmVzdChfYSwgW1widGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ2aWV3c1wiLCBcImNhbGxiYWNrXCIsIFwiZm9yZWlnbktleUxvb2t1cFwiXSk7XG4gICAgICAgIC8vIFRPRE8gYWRkIGNhbmNlbCBidXR0b25cbiAgICAgICAgc3VwZXIoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpLCB7IHRpdGxlOiB0aXRsZSB8fCBgRWRpdCAke2pzeF9saWJfMS5UZXh0LnRpdGxlQ2FzZSh0YXJnZXQuY29uc3RydWN0b3IubmFtZSl9YCwgYm9keToganN4X2ZhY3RvcnlfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCkgfSkpO1xuICAgICAgICB0aGlzLl9ib2R5LmVsZW1lbnQgPSAoanN4X2ZhY3RvcnlfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgY2xhc3M6IFwibW9kYWwtZWRpdCBmb3JtXCIsIG9uc3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsIGNhbGxiYWNrIHx8IHRhcmdldC5lZGl0Q2FsbGJhY2suYmluZCh0YXJnZXQpKSB9LFxuICAgICAgICAgICAganN4X2ZhY3RvcnlfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJmb3JtLWNvbnRyb2xzXCIgfSwgdGhpcy5mb3JtYXRQcm9wZXJ0eUNvbnRyb2xzKHRhcmdldCwgdmlld3MsIGZvcmVpZ25LZXlMb29rdXApKSxcbiAgICAgICAgICAgIGpzeF9mYWN0b3J5XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICAgICAganN4X2ZhY3RvcnlfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzczogXCJkZWZhdWx0XCIgfSwgXCJTYXZlXCIpKSkpO1xuICAgIH1cbiAgICBoYW5kbGVTdWJtaXQoY2FsbGJhY2ssIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVkaXRzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgY29udHJvbCBvZiBldmVudC50YXJnZXQuZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnRyb2wubmFtZSAmJlxuICAgICAgICAgICAgICAgIChlZGl0c1tjb250cm9sLm5hbWVdID0gY29udHJvbC52YWx1ZS5sZW5ndGggPyBjb250cm9sLnZhbHVlIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soZWRpdHMpO1xuICAgICAgICB0aGlzLmNsb3NlKHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgIH1cbiAgICBmb3JtYXRQcm9wZXJ0eUNvbnRyb2xzKHRhcmdldCwgdmlld3MsIGZvcmVpZ25LZXlMb29rdXApIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0YXJnZXQuZWRpdGFibGVQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdmlld3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlld3Nba2V5XSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50VHlwZSA9IGZvcmVpZ25LZXlMb29rdXAoa2V5KTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChqc3hfZmFjdG9yeV8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChqc3hfZmFjdG9yeV8xLmRlZmF1bHQuY3JlYXRlRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGpzeF9mYWN0b3J5XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwganN4X2xpYl8xLlRleHQudW5DYW1lbENhc2UoKGNvbXBvbmVudFR5cGUubGFiZWwgJiYgY29tcG9uZW50VHlwZS5sYWJlbCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUubmFtZSkudG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgICAgICAgICAgIG1vbmtleV9wYXRjaGVzXzEuX0hUTUwuYXN5bmNTZWxlY3RDb250cm9sKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YXJnZXRba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjogKCkgPT4gKChjb21wb25lbnRUeXBlLnR5cGUgJiYgY29tcG9uZW50VHlwZS50eXBlKSB8fCBjb21wb25lbnRUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigob3B0aW9ucykgPT4gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5pbmxpbmUoKS5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoanN4X2ZhY3RvcnlfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoanN4X2ZhY3RvcnlfMS5kZWZhdWx0LmNyZWF0ZUZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBqc3hfZmFjdG9yeV8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBqc3hfbGliXzEuVGV4dC51bkNhbWVsQ2FzZShrZXkpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGpzeF9mYWN0b3J5XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgbmFtZToga2V5LCB2YWx1ZTogcHJvcHNba2V5XSB8fCBcIlwiIH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsRWRpdDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX2pzeF9mYWN0b3J5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19iYXR0aXNfanN4X2xpYl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX2pzeF91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYmF0dGlzX21vbmtleV9wYXRjaGVzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=