"use strict";
(() => {
var exports = {};
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 5547:
/***/ ((module) => {

module.exports = require("next/dist/compiled/bytes");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 4929:
/***/ ((module) => {

module.exports = require("next/dist/compiled/content-type");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 7664:
/***/ ((module) => {

module.exports = require("next/dist/compiled/fresh");

/***/ }),

/***/ 5644:
/***/ ((module) => {

module.exports = require("next/dist/compiled/jsonwebtoken");

/***/ }),

/***/ 7798:
/***/ ((module) => {

module.exports = require("next/dist/compiled/raw-body");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 7755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/prompt/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "DELETE": () => (DELETE),
  "GET": () => (GET),
  "PATCH": () => (PATCH)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./models/prompt.js
var models_prompt = __webpack_require__(2046);
// EXTERNAL MODULE: ./utils/database.js
var database = __webpack_require__(2305);
;// CONCATENATED MODULE: ./app/api/prompt/[id]/route.js


const GET = async (request, { params  })=>{
    try {
        await (0,database/* connectToDB */.P)();
        const prompt = await models_prompt/* default.findById */.Z.findById(params.id).populate("creator");
        if (!prompt) return new Response("Prompt Not Found", {
            status: 404
        });
        return new Response(JSON.stringify(prompt), {
            status: 200
        });
    } catch (error) {
        return new Response("Internal Server Error", {
            status: 500
        });
    }
};
const PATCH = async (request, { params  })=>{
    const { prompt , tag  } = await request.json();
    try {
        await (0,database/* connectToDB */.P)();
        // Find the existing prompt by ID
        const existingPrompt = await models_prompt/* default.findById */.Z.findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found", {
                status: 404
            });
        }
        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response("Successfully updated the Prompts", {
            status: 200
        });
    } catch (error) {
        return new Response("Error Updating Prompt", {
            status: 500
        });
    }
};
const DELETE = async (request, { params  })=>{
    try {
        await (0,database/* connectToDB */.P)();
        // Find the prompt by ID and remove it
        await models_prompt/* default.findByIdAndRemove */.Z.findByIdAndRemove(params.id);
        return new Response("Prompt deleted successfully", {
            status: 200
        });
    } catch (error) {
        return new Response("Error deleting prompt", {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fprompt%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5Cuser%5CDesktop%5CJs%5Capp&appPaths=%2Fapi%2Fprompt%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/prompt/[id]",
    resolvedPagePath: "C:\\Users\\user\\Desktop\\Js\\app\\api\\prompt\\[id]\\route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    

/***/ }),

/***/ 2046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const PromptSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    creator: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,
        ref: "User"
    },
    prompt: {
        type: String,
        required: [
            true,
            "Prompt is required."
        ]
    },
    tag: {
        type: String,
        required: [
            true,
            "Tag is required."
        ]
    }
});
const Prompt = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Prompt || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Prompt", PromptSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prompt);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [74,601,305], () => (__webpack_exec__(7755)));
module.exports = __webpack_exports__;

})();