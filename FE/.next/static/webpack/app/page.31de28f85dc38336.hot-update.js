"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/services/entidades.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/entidades.service.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ \"(app-pages-browser)/./src/app/services/BaseService.ts\");\n// services/entidadGubernamentalService.ts\n\nconst entidadGubernamentalService = {\n    getAll: async ()=>{\n        return _BaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/entidades\");\n    },\n    getAllByName: async (params)=>{\n        return _BaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/entidades/search?name=\".concat(params));\n    },\n    getById: async (id)=>{\n        return _BaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/entidades/\".concat(id));\n    },\n    create: async (entidad)=>{\n        return _BaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/entidades\", entidad);\n    },\n    update: async (id, entidad)=>{\n        return _BaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/entidades/\".concat(id), entidad);\n    },\n    delete: async (id)=>{\n        return _BaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"/entidades/\".concat(id));\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (entidadGubernamentalService);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VydmljZXMvZW50aWRhZGVzLnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBMEM7QUFFRjtBQUV4QyxNQUFNQyw4QkFBOEI7SUFDbENDLFFBQVE7UUFDTixPQUFPRixvREFBV0EsQ0FBQ0csR0FBRyxDQUF5QjtJQUNqRDtJQUVBQyxjQUFjLE9BQU9DO1FBQ25CLE9BQU9MLG9EQUFXQSxDQUFDRyxHQUFHLENBQ3BCLDBCQUFpQyxPQUFQRTtJQUU5QjtJQUVBQyxTQUFTLE9BQU9DO1FBQ2QsT0FBT1Asb0RBQVdBLENBQUNHLEdBQUcsQ0FBdUIsY0FBaUIsT0FBSEk7SUFDN0Q7SUFFQUMsUUFBUSxPQUNOQztRQUVBLE9BQU9ULG9EQUFXQSxDQUFDVSxJQUFJLENBQXVCLGNBQWNEO0lBQzlEO0lBRUFFLFFBQVEsT0FDTkosSUFDQUU7UUFFQSxPQUFPVCxvREFBV0EsQ0FBQ1ksR0FBRyxDQUF1QixjQUFpQixPQUFITCxLQUFNRTtJQUNuRTtJQUVBSSxRQUFRLE9BQU9OO1FBQ2IsT0FBT1Asb0RBQVdBLENBQUNhLE1BQU0sQ0FBTyxjQUFpQixPQUFITjtJQUNoRDtBQUNGO0FBRUEsK0RBQWVOLDJCQUEyQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlcnZpY2VzL2VudGlkYWRlcy5zZXJ2aWNlLnRzPzlmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2VydmljZXMvZW50aWRhZEd1YmVybmFtZW50YWxTZXJ2aWNlLnRzXHJcbmltcG9ydCBFbnRpZGFkR3ViZXJuYW1lbnRhbCBmcm9tIFwiLi4vbW9kZWxzL2VudGlkYWRHdWJlcm5hbWVudGFsLm1vZGVsXCI7XHJcbmltcG9ydCBiYXNlU2VydmljZSBmcm9tIFwiLi9CYXNlU2VydmljZVwiO1xyXG5cclxuY29uc3QgZW50aWRhZEd1YmVybmFtZW50YWxTZXJ2aWNlID0ge1xyXG4gIGdldEFsbDogYXN5bmMgKCk6IFByb21pc2U8RW50aWRhZEd1YmVybmFtZW50YWxbXT4gPT4ge1xyXG4gICAgcmV0dXJuIGJhc2VTZXJ2aWNlLmdldDxFbnRpZGFkR3ViZXJuYW1lbnRhbFtdPihcIi9lbnRpZGFkZXNcIik7XHJcbiAgfSxcclxuXHJcbiAgZ2V0QWxsQnlOYW1lOiBhc3luYyAocGFyYW1zOiBzdHJpbmcpOiBQcm9taXNlPEVudGlkYWRHdWJlcm5hbWVudGFsW10+ID0+IHtcclxuICAgIHJldHVybiBiYXNlU2VydmljZS5nZXQ8RW50aWRhZEd1YmVybmFtZW50YWxbXT4oXHJcbiAgICAgIGAvZW50aWRhZGVzL3NlYXJjaD9uYW1lPSR7cGFyYW1zfWBcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0QnlJZDogYXN5bmMgKGlkOiBudW1iZXIpOiBQcm9taXNlPEVudGlkYWRHdWJlcm5hbWVudGFsPiA9PiB7XHJcbiAgICByZXR1cm4gYmFzZVNlcnZpY2UuZ2V0PEVudGlkYWRHdWJlcm5hbWVudGFsPihgL2VudGlkYWRlcy8ke2lkfWApO1xyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZTogYXN5bmMgKFxyXG4gICAgZW50aWRhZDogRW50aWRhZEd1YmVybmFtZW50YWxcclxuICApOiBQcm9taXNlPEVudGlkYWRHdWJlcm5hbWVudGFsPiA9PiB7XHJcbiAgICByZXR1cm4gYmFzZVNlcnZpY2UucG9zdDxFbnRpZGFkR3ViZXJuYW1lbnRhbD4oXCIvZW50aWRhZGVzXCIsIGVudGlkYWQpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZTogYXN5bmMgKFxyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGVudGlkYWQ6IEVudGlkYWRHdWJlcm5hbWVudGFsXHJcbiAgKTogUHJvbWlzZTxFbnRpZGFkR3ViZXJuYW1lbnRhbD4gPT4ge1xyXG4gICAgcmV0dXJuIGJhc2VTZXJ2aWNlLnB1dDxFbnRpZGFkR3ViZXJuYW1lbnRhbD4oYC9lbnRpZGFkZXMvJHtpZH1gLCBlbnRpZGFkKTtcclxuICB9LFxyXG5cclxuICBkZWxldGU6IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICByZXR1cm4gYmFzZVNlcnZpY2UuZGVsZXRlPHZvaWQ+KGAvZW50aWRhZGVzLyR7aWR9YCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudGlkYWRHdWJlcm5hbWVudGFsU2VydmljZTtcclxuIl0sIm5hbWVzIjpbImJhc2VTZXJ2aWNlIiwiZW50aWRhZEd1YmVybmFtZW50YWxTZXJ2aWNlIiwiZ2V0QWxsIiwiZ2V0IiwiZ2V0QWxsQnlOYW1lIiwicGFyYW1zIiwiZ2V0QnlJZCIsImlkIiwiY3JlYXRlIiwiZW50aWRhZCIsInBvc3QiLCJ1cGRhdGUiLCJwdXQiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/services/entidades.service.ts\n"));

/***/ })

});