"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/RecipesList.tsx":
/*!************************************!*\
  !*** ./components/RecipesList.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Recipe */ \"./components/Recipe.tsx\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Spinner */ \"./components/Spinner.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar RecipesList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), IsLoading = ref[0], setIsLoading = ref[1];\n    var Recipes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.recipeReducer;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (Recipes.length) setIsLoading(false);\n    }, [\n        Recipes\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"rounded row bg-white p-20 justify-content-md-center\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"row text-center m-bottom-20\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            className: \"signika color-secondary\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"Les recettes les plus r\\xe9centes\"\n                        })\n                    }),\n                    Recipes.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: \"row recipe-list\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: Object.keys(Recipes).map(function(key) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                className: Recipes.length > 2 ? 'col-4' : 'col',\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 37\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Recipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: Recipes[key].title,\n                                    desc: Recipes[key].desc,\n                                    img: Recipes[key].imageUrl,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 42\n                                    },\n                                    __self: _this1\n                                })\n                            }, 'recipe-' + Recipes[key].userId + '-' + Recipes[key].createdAt.seconds);\n                        })\n                    }),\n                    IsLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        CssClass: \"color-secondary\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        },\n                        __self: _this\n                    }),\n                    !IsLoading && !Recipes.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        className: \"signika text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\RecipesList.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: \"D\\xe9sol\\xe9s ! Il semblerait qu'aucune recette n'ait encore \\xe9t\\xe9 cr\\xe9\\xe9e...\"\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(RecipesList, \"bc3e7asmIX0cuW/KUKEQMJaCaU0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = RecipesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipesList);\nvar _c;\n$RefreshReg$(_c, \"RecipesList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY2lwZXNMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlEO0FBQ2hCO0FBQ0E7QUFDRTs7O0FBRTNDLEdBQUssQ0FBQ00sV0FBVyxHQUFNLFFBQ3ZCLEdBRDRCLENBQUM7OztJQUN6QixHQUFLLENBQTZCSixHQUF1QixHQUF2QkEsK0NBQVEsQ0FBVSxJQUFJLEdBQWpESyxTQUFTLEdBQWtCTCxHQUF1QixLQUF2Q00sWUFBWSxHQUFJTixHQUF1QjtJQUN6RCxHQUFLLENBQUNPLE9BQU8sR0FBR04sd0RBQVcsQ0FBQyxRQUFRLENBQVBPLEtBQVM7UUFBS0EsTUFBTUMsQ0FBTkQsS0FBSyxDQUFDQyxhQUFhOztJQUU5RFYsZ0RBQVMsQ0FBQyxRQUNkLEdBRG1CLENBQUM7UUFDWixFQUFFLEVBQUNRLE9BQU8sQ0FBQ0csTUFBTSxFQUNiSixZQUFZLENBQUMsS0FBSztJQUUxQixDQUFDLEVBQUUsQ0FBQ0M7UUFBQUEsT0FBTztJQUFBLENBQUM7SUFFWixNQUFNLHNFQUNEVCwyQ0FBUTs7Ozs7Ozt1RkFDSmEsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs0RkFDckJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFxRDs7Ozs7Ozs7eUZBQy9ERCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBNkI7Ozs7Ozs7dUdBQ3ZDQyxDQUFFOzRCQUFDRCxTQUFTLEVBQUMsQ0FBeUI7Ozs7Ozs7c0NBQUMsQ0FBOEI7OztvQkFFdkVMLE9BQU0sQ0FBQ0csTUFBTSx5RUFDWEksQ0FBRTt3QkFBQ0YsU0FBUyxFQUFDLENBQWlCOzs7Ozs7O2tDQUV2QkcsTUFBTSxDQUFDQyxJQUFJLENBQUNULE9BQU8sRUFBRVUsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRzswQ0FDekIsTUFBTSx3REFBTEMsQ0FBRTtnQ0FBQ1AsU0FBUyxFQUFFTCxPQUFPLENBQUNHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBTyxTQUFHLENBQUs7Ozs7Ozs7K0dBQzdDUiwwREFBTTtvQ0FDSmtCLEtBQUssRUFBRWIsT0FBTyxDQUFDVyxHQUFHLEVBQUVFLEtBQUs7b0NBQ3pCQyxJQUFJLEVBQUVkLE9BQU8sQ0FBQ1csR0FBRyxFQUFFRyxJQUFJO29DQUN2QkMsR0FBRyxFQUFFZixPQUFPLENBQUNXLEdBQUcsRUFBRUssUUFBUTs7Ozs7Ozs7K0JBSndCLENBQVMsV0FBR2hCLE9BQU8sQ0FBQ1csR0FBRyxFQUFFTSxNQUFNLEdBQUcsQ0FBRyxLQUFHakIsT0FBTyxDQUFDVyxHQUFHLEVBQUVPLFNBQVMsQ0FBQ0MsT0FBTzs7O29CQVcvSXJCLFNBQVMseUVBQ0xGLDJEQUFPO3dCQUFDd0IsUUFBUSxFQUFDLENBQWlCOzs7Ozs7OztxQkFFckN0QixTQUFTLEtBQUtFLE9BQU8sQ0FBQ0csTUFBTSx5RUFDekJrQixDQUFFO3dCQUFDaEIsU0FBUyxFQUFDLENBQXFCOzs7Ozs7O2tDQUFDLENBQW1FOzs7Ozs7QUFNL0gsQ0FBQztHQTFDS1IsV0FBVzs7UUFFR0gsb0RBQVc7OztLQUZ6QkcsV0FBVztBQTJDakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVzTGlzdC50c3g/NDU1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBSZWNpcGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVjaXBlXCJcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiXHJcblxyXG5jb25zdCBSZWNpcGVzTGlzdDpGQyA9ICgpID0+e1xyXG4gICAgY29uc3QgW0lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXHJcbiAgICBjb25zdCBSZWNpcGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUucmVjaXBlUmVkdWNlcilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgaWYoUmVjaXBlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgXHJcbiAgICB9LCBbUmVjaXBlc10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkIHJvdyBiZy13aGl0ZSBwLTIwIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgdGV4dC1jZW50ZXIgbS1ib3R0b20tMjAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdzaWduaWthIGNvbG9yLXNlY29uZGFyeSc+TGVzIHJlY2V0dGVzIGxlcyBwbHVzIHLDqWNlbnRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBSZWNpcGVzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdyb3cgcmVjaXBlLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFJlY2lwZXMpLm1hcCgoa2V5KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17UmVjaXBlcy5sZW5ndGggPiAyID8gJ2NvbC00JyA6ICdjb2wnfSBrZXk9eydyZWNpcGUtJyArIFJlY2lwZXNba2V5XS51c2VySWQgKyAnLScgKyBSZWNpcGVzW2tleV0uY3JlYXRlZEF0LnNlY29uZHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxSZWNpcGUgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtSZWNpcGVzW2tleV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17UmVjaXBlc1trZXldLmRlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtSZWNpcGVzW2tleV0uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtJc0xvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgQ3NzQ2xhc3M9J2NvbG9yLXNlY29uZGFyeScgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFJc0xvYWRpbmcgJiYgIVJlY2lwZXMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3NpZ25pa2EgdGV4dC1jZW50ZXInPkTDqXNvbMOpcyAhIElsIHNlbWJsZXJhaXQgcXUnYXVjdW5lIHJlY2V0dGUgbidhaXQgZW5jb3JlIMOpdMOpIGNyw6nDqWUuLi48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwZXNMaXN0Il0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIlJlY2lwZSIsIlNwaW5uZXIiLCJSZWNpcGVzTGlzdCIsIklzTG9hZGluZyIsInNldElzTG9hZGluZyIsIlJlY2lwZXMiLCJzdGF0ZSIsInJlY2lwZVJlZHVjZXIiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInVsIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImxpIiwidGl0bGUiLCJkZXNjIiwiaW1nIiwiaW1hZ2VVcmwiLCJ1c2VySWQiLCJjcmVhdGVkQXQiLCJzZWNvbmRzIiwiQ3NzQ2xhc3MiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RecipesList.tsx\n");

/***/ })

});