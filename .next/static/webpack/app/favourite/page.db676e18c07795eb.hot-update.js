"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/favourite/page",{

/***/ "(app-pages-browser)/./src/components/favourite/teams-view.tsx":
/*!*************************************************!*\
  !*** ./src/components/favourite/teams-view.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TeamsView: function() { return /* binding */ TeamsView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n\n\n\nconst teams = [\n    {\n        id: 1,\n        name: \"THE CRANES\",\n        logo: \"/images/uganda_cranes.png\",\n        color: \"bg-red-600\"\n    },\n    {\n        id: 2,\n        name: \"VIPERS\",\n        logo: \"/images/vipers.jpeg\",\n        color: \"bg-red-600\"\n    },\n    {\n        id: 3,\n        name: \"KCCA\",\n        logo: \"/images/kcca.png\",\n        color: \"bg-yellow-400\"\n    },\n    {\n        id: 4,\n        name: \"URA\",\n        logo: \"/images/\",\n        color: \"bg-blue-700\"\n    },\n    {\n        id: 5,\n        name: \"EXPRESS\",\n        logo: \"/placeholder.svg?height=40&width=40\",\n        color: \"bg-red-600\"\n    },\n    {\n        id: 6,\n        name: \"SC VILLA\",\n        logo: \"/placeholder.svg?height=40&width=40\",\n        color: \"bg-blue-600\"\n    }\n];\nfunction TeamsView() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 gap-4\",\n        children: teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                className: \"\".concat(team.color),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                    className: \"p-4 flex items-center gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-10 h-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: team.logo,\n                                alt: team.name,\n                                fill: true,\n                                className: \"object-contain\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\teams-view.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\teams-view.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold text-white\",\n                            children: team.name\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\teams-view.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\teams-view.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, team.id, false, {\n                fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\teams-view.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"F:\\\\Afrigoals\\\\afrigoals_orig\\\\project\\\\src\\\\components\\\\favourite\\\\teams-view.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = TeamsView;\nvar _c;\n$RefreshReg$(_c, \"TeamsView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Zhdm91cml0ZS90ZWFtcy12aWV3LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFDMEI7QUFFeEQsTUFBTUcsUUFBUTtJQUNaO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtDQUNEO0FBRU0sU0FBU0M7SUFDZCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWlAsTUFBTVEsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDWCxxREFBSUE7Z0JBQWVTLFdBQVcsR0FBYyxPQUFYRSxLQUFLTCxLQUFLOzBCQUMxQyw0RUFBQ0wsNERBQVdBO29CQUFDUSxXQUFVOztzQ0FDckIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDVixtREFBS0E7Z0NBQ0phLEtBQUtELEtBQUtOLElBQUk7Z0NBQ2RRLEtBQUtGLEtBQUtQLElBQUk7Z0NBQ2RVLElBQUk7Z0NBQ0pMLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FBd0JFLEtBQUtQLElBQUk7Ozs7Ozs7Ozs7OztlQVZ4Q08sS0FBS1IsRUFBRTs7Ozs7Ozs7OztBQWdCMUI7S0FwQmdCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mYXZvdXJpdGUvdGVhbXMtdmlldy50c3g/NTlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiXHJcblxyXG5jb25zdCB0ZWFtcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiVEhFIENSQU5FU1wiLFxyXG4gICAgbG9nbzogXCIvaW1hZ2VzL3VnYW5kYV9jcmFuZXMucG5nXCIsXHJcbiAgICBjb2xvcjogXCJiZy1yZWQtNjAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJWSVBFUlNcIixcclxuICAgIGxvZ286IFwiL2ltYWdlcy92aXBlcnMuanBlZ1wiLFxyXG4gICAgY29sb3I6IFwiYmctcmVkLTYwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6IFwiS0NDQVwiLFxyXG4gICAgbG9nbzogXCIvaW1hZ2VzL2tjY2EucG5nXCIsXHJcbiAgICBjb2xvcjogXCJiZy15ZWxsb3ctNDAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogXCJVUkFcIixcclxuICAgIGxvZ286IFwiL2ltYWdlcy9cIixcclxuICAgIGNvbG9yOiBcImJnLWJsdWUtNzAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogXCJFWFBSRVNTXCIsXHJcbiAgICBsb2dvOiBcIi9wbGFjZWhvbGRlci5zdmc/aGVpZ2h0PTQwJndpZHRoPTQwXCIsXHJcbiAgICBjb2xvcjogXCJiZy1yZWQtNjAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogXCJTQyBWSUxMQVwiLFxyXG4gICAgbG9nbzogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD00MCZ3aWR0aD00MFwiLFxyXG4gICAgY29sb3I6IFwiYmctYmx1ZS02MDBcIlxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRlYW1zVmlldygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgIHt0ZWFtcy5tYXAoKHRlYW0pID0+IChcclxuICAgICAgICA8Q2FyZCBrZXk9e3RlYW0uaWR9IGNsYXNzTmFtZT17YCR7dGVhbS5jb2xvcn1gfT5cclxuICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEwIGgtMTBcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17dGVhbS5sb2dvfVxyXG4gICAgICAgICAgICAgICAgYWx0PXt0ZWFtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPnt0ZWFtLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwidGVhbXMiLCJpZCIsIm5hbWUiLCJsb2dvIiwiY29sb3IiLCJUZWFtc1ZpZXciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ0ZWFtIiwic3JjIiwiYWx0IiwiZmlsbCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/favourite/teams-view.tsx\n"));

/***/ })

});