"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.scss":
/*!******************************!*\
  !*** ./src/app/globals.scss ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"acac2e2a2f63\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2dsb2JhbHMuc2Nzcz8zMmZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYWNhYzJlMmEyZjYzXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.scss\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/navbar/Navbar.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/navbar/Navbar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/services/auth.service */ \"(app-pages-browser)/./src/app/services/auth.service.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setIsMounted(true);\n        setIsLoggedIn(_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isLoggedIn());\n    }, []);\n    const handleLogout = ()=>{\n        _app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logout();\n        router.push(\"/pages/login\");\n    };\n    if (!isMounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Prueba T\\xe9cnica - Daniel Tavarez\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danie\\\\OneDrive\\\\Escritorio\\\\Prueba T\\xe9cnica SB\\\\sb-prueba\\\\FE\\\\src\\\\app\\\\components\\\\navbar\\\\Navbar.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                children: \"Cerrar Sesi\\xf3n\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danie\\\\OneDrive\\\\Escritorio\\\\Prueba T\\xe9cnica SB\\\\sb-prueba\\\\FE\\\\src\\\\app\\\\components\\\\navbar\\\\Navbar.tsx\",\n                lineNumber: 27,\n                columnNumber: 22\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\danie\\\\OneDrive\\\\Escritorio\\\\Prueba T\\xe9cnica SB\\\\sb-prueba\\\\FE\\\\src\\\\app\\\\components\\\\navbar\\\\Navbar.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"aiRJogoX8+C8ncHBsdPWNCcSgEw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRDtBQUNWO0FBQ0E7QUFFNUMsTUFBTUksU0FBUzs7SUFDYixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1NLFNBQVNSLDBEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUM7UUFDUkksYUFBYTtRQUNiRSxjQUFjUixrRUFBV0EsQ0FBQ08sVUFBVTtJQUN0QyxHQUFHLEVBQUU7SUFFTCxNQUFNRyxlQUFlO1FBQ25CVixrRUFBV0EsQ0FBQ1csTUFBTTtRQUNsQkYsT0FBT0csSUFBSSxDQUFDO0lBQ2Q7SUFFQSxJQUFJLENBQUNQLFdBQVc7UUFDZCxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFIsNEJBQWMsOERBQUNTO2dCQUFPQyxTQUFTUDswQkFBYzs7Ozs7Ozs7Ozs7O0FBR3BEO0dBekJNTjs7UUFHV0gsc0RBQVNBOzs7S0FIcEJHO0FBMkJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLnRzeD9mNzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoU2VydmljZSBmcm9tIFwiQC9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNNb3VudGVkKHRydWUpO1xyXG4gICAgc2V0SXNMb2dnZWRJbihhdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wYWdlcy9sb2dpblwiKTtcclxuICB9O1xyXG5cclxuICBpZiAoIWlzTW91bnRlZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgPGgxPlBydWViYSBUw6ljbmljYSAtIERhbmllbCBUYXZhcmV6PC9oMT5cclxuICAgICAge2lzTG9nZ2VkSW4gJiYgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkNlcnJhciBTZXNpw7NuPC9idXR0b24+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbImF1dGhTZXJ2aWNlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsImxvZ291dCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/navbar/Navbar.tsx\n"));

/***/ })

});