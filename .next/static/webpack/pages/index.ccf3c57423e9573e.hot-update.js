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

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _svgs_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/Logo */ \"./components/svgs/Logo.tsx\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_Database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Database */ \"./src/Database.tsx\");\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/auth */ \"./node_modules/@firebase/auth/dist/esm2017/index.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)(_src_Database__WEBPACK_IMPORTED_MODULE_5__.app);\nvar Header = function() {\n    _s1();\n    var ref = _slicedToArray((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(auth), 2), userFromAuth = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), IsLoading = ref1[0], setIsLoading = ref1[1];\n    var User = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.userReducer;\n    });\n    var HasLoadedUser = !loading && userFromAuth != null && User != null && User.displayName != null;\n    var handleSignOut = function() {\n        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(auth).catch(function(error) {\n            return console.log(error.code + ' : ' + error.message);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsLoading(loading);\n    }, [\n        loading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n            className: \"header bg-white color-secondary m-bottom-20 p-20\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"grid grid-flow-col grid-cols-2\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex flex-wrap content-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"menu-toggle\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"/\",\n                                className: \"m-right-20\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_svgs_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    width: 140,\n                                    height: 30,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    !IsLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"text-right\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: [\n                            !HasLoadedUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                href: \"/login\",\n                                className: \"btn bg-secondary\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"m-right-10\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faUser,\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 62\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 103\n                                        },\n                                        __self: _this,\n                                        children: \"Se connecter\"\n                                    })\n                                ]\n                            }),\n                            HasLoadedUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"w-12 h-12 bg-gray-200 rounded-full\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Damien\\\\Documents\\\\React apps\\\\marmistonks\\\\components\\\\Header.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s1(Header, \"PcZ06h6OEyrZ8Ny1k/lD75Hn66s=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDTztBQUNsQztBQUM0QjtBQUNqQjtBQUNKO0FBQ1k7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxHQUFLLENBQUNXLElBQUksR0FBR0gsdURBQU8sQ0FBQ0QsOENBQUc7QUFFeEIsR0FBSyxDQUFDSyxNQUFNLEdBQU0sUUFDbEIsR0FEdUIsQ0FBQzs7SUFFcEIsR0FBSyxDQUEyQkYsR0FBa0Isa0JBQWxCQSx1RUFBWSxDQUFDQyxJQUFJLE9BQTFDRSxZQUFZLEdBQWFILEdBQWtCLEtBQTdCSSxPQUFPLEdBQUlKLEdBQWtCO0lBQ2xELEdBQUssQ0FBNkJSLElBQXVCLEdBQXZCQSwrQ0FBUSxDQUFVLElBQUksR0FBakRhLFNBQVMsR0FBa0JiLElBQXVCLEtBQXZDYyxZQUFZLEdBQUlkLElBQXVCO0lBQ3pELEdBQUssQ0FBQ2UsSUFBSSxHQUFHWCx3REFBVyxDQUFDLFFBQVEsQ0FBUFksS0FBUztRQUFLQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLFdBQVc7O0lBQ3pELEdBQUssQ0FBQ0MsYUFBYSxJQUFZTixPQUFPLElBQUlELFlBQVksSUFBSSxJQUFJLElBQUlJLElBQUksSUFBSSxJQUFJLElBQUlBLElBQUksQ0FBQ0ksV0FBVyxJQUFJLElBQUk7SUFFMUcsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUTtRQUFGYixNQUFNLENBQU5BLHVEQUFPLENBQUNFLElBQUksRUFBRVksS0FBSyxDQUFDLFFBQVEsQ0FBUEMsS0FBSztZQUFLQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLElBQUksR0FBRyxDQUFLLE9BQUdILEtBQUssQ0FBQ0ksT0FBTzs7O0lBRXpHM0IsZ0RBQVMsQ0FBQyxRQUNkLEdBRG1CLENBQUM7UUFDWmUsWUFBWSxDQUFDRixPQUFPO0lBQ3hCLENBQUMsRUFBQyxDQUFDQTtRQUFBQSxPQUFPO0lBQUEsQ0FBQztJQUVYLE1BQU0sc0VBQ0RkLDJDQUFROzs7Ozs7O3VGQUNKNkIsQ0FBTTtZQUFDQyxTQUFTLEVBQUMsQ0FBa0Q7Ozs7Ozs7NEZBQy9EQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0M7Ozs7Ozs7OzBGQUMxQ0MsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQStCOzs7Ozs7OztpR0FDekNDLENBQUc7Z0NBQUNELFNBQVMsRUFBQyxDQUFhOzs7Ozs7OztpR0FHM0JFLENBQUM7Z0NBQUNDLElBQUksRUFBQyxDQUFHO2dDQUFDSCxTQUFTLEVBQUMsQ0FBWTs7Ozs7OzsrR0FDN0IxQixrREFBSTtvQ0FBQzhCLEtBQUssRUFBRyxHQUFHO29DQUFHQyxNQUFNLEVBQUcsRUFBRTs7Ozs7Ozs7Ozs7cUJBR3JDcEIsU0FBUywwRUFDTmdCLENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUFZOzs7Ozs7Ozs2QkFDekJWLGFBQWEsMEVBQ1ZZLENBQUM7Z0NBQUNDLElBQUksRUFBQyxDQUFRO2dDQUFDSCxTQUFTLEVBQUMsQ0FBa0I7Ozs7Ozs7O3lHQUN4Q00sQ0FBSTt3Q0FBQ04sU0FBUyxFQUFDLENBQVk7Ozs7Ozs7dUhBQUUzQiwyRUFBZTs0Q0FBQ2tDLElBQUksRUFBRWhDLHFFQUFNOzs7Ozs7Ozs7b0NBQVcsQ0FBQzt5R0FBQytCLENBQUk7Ozs7Ozs7a0RBQUMsQ0FBWTs7Ozs0QkFHL0ZoQixhQUFhLHlFQUNUcEIsMkNBQVE7Ozs7Ozs7K0dBRUorQixDQUFHO29DQUFDRCxTQUFTLEVBQUMsQ0FBb0M7Ozs7Ozs7Ozs7Ozs7OztBQWlCbkYsQ0FBQztJQXBES2xCLE1BQU07O1FBRXdCRixtRUFBWTtRQUUvQkosb0RBQVc7OztLQUp0Qk0sTUFBTTtBQXNEWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vc3Zncy9Mb2dvJztcclxuaW1wb3J0IHsgZmFVc2VyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGFwcCB9IGZyb20gJy4uL3NyYy9EYXRhYmFzZSdcclxuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbk91dCB9IGZyb20gXCJAZmlyZWJhc2UvYXV0aFwiXHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXHJcblxyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cclxuY29uc3QgSGVhZGVyOkZDID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgW3VzZXJGcm9tQXV0aCwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aClcclxuICAgIGNvbnN0IFtJc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS51c2VyUmVkdWNlcik7XHJcbiAgICBjb25zdCBIYXNMb2FkZWRVc2VyOmJvb2xlYW4gPSAhbG9hZGluZyAmJiB1c2VyRnJvbUF1dGggIT0gbnVsbCAmJiBVc2VyICE9IG51bGwgJiYgVXNlci5kaXNwbGF5TmFtZSAhPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSAoKSA9PiBzaWduT3V0KGF1dGgpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IuY29kZSArICcgOiAnICsgZXJyb3IubWVzc2FnZSkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBzZXRJc0xvYWRpbmcobG9hZGluZyk7XHJcbiAgICB9LFtsb2FkaW5nXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlciBiZy13aGl0ZSBjb2xvci1zZWNvbmRhcnkgbS1ib3R0b20tMjAgcC0yMCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWZsb3ctY29sIGdyaWQtY29scy0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudS10b2dnbGUnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nIGNsYXNzTmFtZT0nbS1yaWdodC0yMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyB3aWR0aD17IDE0MCB9IGhlaWdodD17IDMwIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHshSXNMb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFIYXNMb2FkZWRVc2VyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvbG9naW4nIGNsYXNzTmFtZT0nYnRuIGJnLXNlY29uZGFyeSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtLXJpZ2h0LTEwJz48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz48L3NwYW4+IDxzcGFuPlNlIGNvbm5lY3Rlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7SGFzTG9hZGVkVXNlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEyIGgtMTIgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgIGhyZWY9Jy9hY2NvdW50JyBjbGFzc05hbWU9J2J0biBiZy1zZWNvbmRhcnkgbXItNCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J20tcmlnaHQtMTAnPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSAvPjwvc3Bhbj48c3Bhbj5Nb24gcHJvZmlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYmctdGVydGlhcnknIG9uQ2xpY2s9eyBoYW5kbGVTaWduT3V0IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlIGTDqWNvbm5lY3Rlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJMb2dvIiwiZmFVc2VyIiwidXNlU2VsZWN0b3IiLCJhcHAiLCJnZXRBdXRoIiwic2lnbk91dCIsInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJIZWFkZXIiLCJ1c2VyRnJvbUF1dGgiLCJsb2FkaW5nIiwiSXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiVXNlciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJIYXNMb2FkZWRVc2VyIiwiZGlzcGxheU5hbWUiLCJoYW5kbGVTaWduT3V0IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibWVzc2FnZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJocmVmIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});