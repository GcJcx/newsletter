"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/subscribe/route";
exports.ids = ["app/api/subscribe/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_project_app_api_subscribe_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/subscribe/route.ts */ \"(rsc)/./app/api/subscribe/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/subscribe/route\",\n        pathname: \"/api/subscribe\",\n        filename: \"route\",\n        bundlePath: \"app/api/subscribe/route\"\n    },\n    resolvedPagePath: \"/home/project/app/api/subscribe/route.ts\",\n    nextConfigOutput,\n    userland: _home_project_app_api_subscribe_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/subscribe/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJzY3JpYmUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1YnNjcmliZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1YnNjcmliZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcHJvamVjdCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1I7QUFDckU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFkaXhhaS1uZXdzbGV0dGVyLz9mMjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3Byb2plY3QvYXBwL2FwaS9zdWJzY3JpYmUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1YnNjcmliZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N1YnNjcmliZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3Vic2NyaWJlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvcHJvamVjdC9hcHAvYXBpL3N1YnNjcmliZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3Vic2NyaWJlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/subscribe/route.ts":
/*!************************************!*\
  !*** ./app/api/subscribe/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\n\n\n\nconst emailSchema = zod__WEBPACK_IMPORTED_MODULE_2__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_2__.string().email(\"Invalid email address\")\n});\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        // Validate email with Zod\n        const validation = emailSchema.safeParse(body);\n        if (!validation.success) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid email address\"\n            }, {\n                status: 400\n            });\n        }\n        const { email } = validation.data;\n        // Insert email into Supabase\n        const { data, error } = await supabase.from(\"subscribers\").insert([\n            {\n                email\n            }\n        ]).select().single();\n        if (error) {\n            // Handle duplicate email error\n            if (error.code === \"23505\") {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"You're already subscribed! Thanks for your interest.\"\n                }, {\n                    status: 409\n                });\n            }\n            console.error(\"Supabase error:\", error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Failed to save email. Please try again.\"\n            }, {\n                status: 500\n            });\n        }\n        // Send confirmation email to user\n        try {\n            await resend.emails.send({\n                from: process.env.RESEND_FROM,\n                to: [\n                    email\n                ],\n                subject: \"Welcome to TradixAI - You're on the list!\",\n                html: `\n          <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;\">\n            <div style=\"background: linear-gradient(135deg, #7c3aed, #3b82f6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;\">\n              <h1 style=\"color: white; margin: 0; font-size: 28px; font-weight: bold;\">TradixAI</h1>\n              <p style=\"color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;\">Welcome to the future of trading</p>\n            </div>\n            \n            <div style=\"background: #f8fafc; padding: 30px; border-radius: 10px; border-left: 4px solid #7c3aed;\">\n              <h2 style=\"color: #1e293b; margin: 0 0 20px 0; font-size: 24px;\">Thank you for signing up!</h2>\n              \n              <p style=\"color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;\">\n                We're excited to have you join our community of forward-thinking traders and AI enthusiasts.\n              </p>\n              \n              <p style=\"color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;\">\n                You'll be the first to know about:\n              </p>\n              \n              <ul style=\"color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0; padding-left: 20px;\">\n                <li>Exclusive early access to our platform</li>\n                <li>Latest AI trading insights and strategies</li>\n                <li>Product updates and new features</li>\n                <li>Special offers and beta invitations</li>\n              </ul>\n              \n              <p style=\"color: #475569; font-size: 16px; line-height: 1.6; margin: 0;\">\n                Stay tuned for something amazing coming your way!\n              </p>\n            </div>\n            \n            <div style=\"text-align: center; margin-top: 30px; padding: 20px; color: #64748b; font-size: 14px;\">\n              <p style=\"margin: 0 0 10px 0;\">Best regards,<br><strong>The TradixAI Team</strong></p>\n              <p style=\"margin: 0; font-size: 12px;\">\n                If you didn't sign up for this newsletter, you can safely ignore this email.\n              </p>\n            </div>\n          </div>\n        `\n            });\n        } catch (emailError) {\n            console.error(\"Failed to send confirmation email:\", emailError);\n        // Don't fail the request if email fails - signup was successful\n        }\n        // Send notification email to admin\n        try {\n            await resend.emails.send({\n                from: process.env.RESEND_FROM,\n                to: [\n                    process.env.ADMIN_EMAIL\n                ],\n                subject: \"New TradixAI Newsletter Signup\",\n                html: `\n          <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;\">\n            <h2 style=\"color: #1e293b; margin: 0 0 20px 0;\">New Newsletter Signup</h2>\n            <p style=\"color: #475569; font-size: 16px; line-height: 1.6;\">\n              A new user has signed up for the TradixAI newsletter:\n            </p>\n            <div style=\"background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;\">\n              <p style=\"margin: 0; color: #1e293b; font-weight: bold;\">Email: ${email}</p>\n              <p style=\"margin: 10px 0 0 0; color: #64748b; font-size: 14px;\">\n                Signed up at: ${new Date().toLocaleString()}\n              </p>\n            </div>\n          </div>\n        `\n            });\n        } catch (adminEmailError) {\n            console.error(\"Failed to send admin notification:\", adminEmailError);\n        // Don't fail the request if admin email fails\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Successfully subscribed!\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Subscribe API error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error. Please try again.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztRQUEyQyxHQUNwRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWRpeGFpLW5ld3NsZXR0ZXIvLi9hcHAvYXBpL3N1YnNjcmliZS9yb3V0ZS50cz80NDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5jb25zdCBlbWFpbFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpLFxufSk7XG5cbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9VUkwhLFxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEUhXG4pO1xuXG5jb25zdCByZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgZW1haWwgd2l0aCBab2RcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gZW1haWxTY2hlbWEuc2FmZVBhcnNlKGJvZHkpO1xuICAgIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVtYWlsIH0gPSB2YWxpZGF0aW9uLmRhdGE7XG5cbiAgICAvLyBJbnNlcnQgZW1haWwgaW50byBTdXBhYmFzZVxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbSgnc3Vic2NyaWJlcnMnKVxuICAgICAgLmluc2VydChbeyBlbWFpbCB9XSlcbiAgICAgIC5zZWxlY3QoKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAvLyBIYW5kbGUgZHVwbGljYXRlIGVtYWlsIGVycm9yXG4gICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJzIzNTA1Jykge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgeyBlcnJvcjogJ1lvdVxcJ3JlIGFscmVhZHkgc3Vic2NyaWJlZCEgVGhhbmtzIGZvciB5b3VyIGludGVyZXN0LicgfSxcbiAgICAgICAgICB7IHN0YXR1czogNDA5IH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N1cGFiYXNlIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBzYXZlIGVtYWlsLiBQbGVhc2UgdHJ5IGFnYWluLicgfSxcbiAgICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFNlbmQgY29uZmlybWF0aW9uIGVtYWlsIHRvIHVzZXJcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuUkVTRU5EX0ZST00hLFxuICAgICAgICB0bzogW2VtYWlsXSxcbiAgICAgICAgc3ViamVjdDogJ1dlbGNvbWUgdG8gVHJhZGl4QUkgLSBZb3VcXCdyZSBvbiB0aGUgbGlzdCEnLFxuICAgICAgICBodG1sOiBgXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDIwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzNiODJmNik7IHBhZGRpbmc6IDMwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDtcIj5cbiAgICAgICAgICAgICAgPGgxIHN0eWxlPVwiY29sb3I6IHdoaXRlOyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMjhweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+VHJhZGl4QUk8L2gxPlxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjZTBlN2ZmOyBtYXJnaW46IDEwcHggMCAwIDA7IGZvbnQtc2l6ZTogMTZweDtcIj5XZWxjb21lIHRvIHRoZSBmdXR1cmUgb2YgdHJhZGluZzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2Y4ZmFmYzsgcGFkZGluZzogMzBweDsgYm9yZGVyLXJhZGl1czogMTBweDsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjN2MzYWVkO1wiPlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9XCJjb2xvcjogIzFlMjkzYjsgbWFyZ2luOiAwIDAgMjBweCAwOyBmb250LXNpemU6IDI0cHg7XCI+VGhhbmsgeW91IGZvciBzaWduaW5nIHVwITwvaDI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjNDc1NTY5OyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjY7IG1hcmdpbjogMCAwIDIwcHggMDtcIj5cbiAgICAgICAgICAgICAgICBXZSdyZSBleGNpdGVkIHRvIGhhdmUgeW91IGpvaW4gb3VyIGNvbW11bml0eSBvZiBmb3J3YXJkLXRoaW5raW5nIHRyYWRlcnMgYW5kIEFJIGVudGh1c2lhc3RzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjNDc1NTY5OyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjY7IG1hcmdpbjogMCAwIDIwcHggMDtcIj5cbiAgICAgICAgICAgICAgICBZb3UnbGwgYmUgdGhlIGZpcnN0IHRvIGtub3cgYWJvdXQ6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDx1bCBzdHlsZT1cImNvbG9yOiAjNDc1NTY5OyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjY7IG1hcmdpbjogMCAwIDIwcHggMDsgcGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICAgICAgICAgICAgIDxsaT5FeGNsdXNpdmUgZWFybHkgYWNjZXNzIHRvIG91ciBwbGF0Zm9ybTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkxhdGVzdCBBSSB0cmFkaW5nIGluc2lnaHRzIGFuZCBzdHJhdGVnaWVzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+UHJvZHVjdCB1cGRhdGVzIGFuZCBuZXcgZmVhdHVyZXM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TcGVjaWFsIG9mZmVycyBhbmQgYmV0YSBpbnZpdGF0aW9uczwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjNDc1NTY5OyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjY7IG1hcmdpbjogMDtcIj5cbiAgICAgICAgICAgICAgICBTdGF5IHR1bmVkIGZvciBzb21ldGhpbmcgYW1hemluZyBjb21pbmcgeW91ciB3YXkhXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAzMHB4OyBwYWRkaW5nOiAyMHB4OyBjb2xvcjogIzY0NzQ4YjsgZm9udC1zaXplOiAxNHB4O1wiPlxuICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogMCAwIDEwcHggMDtcIj5CZXN0IHJlZ2FyZHMsPGJyPjxzdHJvbmc+VGhlIFRyYWRpeEFJIFRlYW08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwOyBmb250LXNpemU6IDEycHg7XCI+XG4gICAgICAgICAgICAgICAgSWYgeW91IGRpZG4ndCBzaWduIHVwIGZvciB0aGlzIG5ld3NsZXR0ZXIsIHlvdSBjYW4gc2FmZWx5IGlnbm9yZSB0aGlzIGVtYWlsLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVtYWlsRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzZW5kIGNvbmZpcm1hdGlvbiBlbWFpbDonLCBlbWFpbEVycm9yKTtcbiAgICAgIC8vIERvbid0IGZhaWwgdGhlIHJlcXVlc3QgaWYgZW1haWwgZmFpbHMgLSBzaWdudXAgd2FzIHN1Y2Nlc3NmdWxcbiAgICB9XG5cbiAgICAvLyBTZW5kIG5vdGlmaWNhdGlvbiBlbWFpbCB0byBhZG1pblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5SRVNFTkRfRlJPTSEsXG4gICAgICAgIHRvOiBbcHJvY2Vzcy5lbnYuQURNSU5fRU1BSUwhXSxcbiAgICAgICAgc3ViamVjdDogJ05ldyBUcmFkaXhBSSBOZXdzbGV0dGVyIFNpZ251cCcsXG4gICAgICAgIGh0bWw6IGBcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBtYXgtd2lkdGg6IDYwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMjBweDtcIj5cbiAgICAgICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMWUyOTNiOyBtYXJnaW46IDAgMCAyMHB4IDA7XCI+TmV3IE5ld3NsZXR0ZXIgU2lnbnVwPC9oMj5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICM0NzU1Njk7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDEuNjtcIj5cbiAgICAgICAgICAgICAgQSBuZXcgdXNlciBoYXMgc2lnbmVkIHVwIGZvciB0aGUgVHJhZGl4QUkgbmV3c2xldHRlcjpcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZjhmYWZjOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IG1hcmdpbjogMjBweCAwO1wiPlxuICAgICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogMDsgY29sb3I6ICMxZTI5M2I7IGZvbnQtd2VpZ2h0OiBib2xkO1wiPkVtYWlsOiAke2VtYWlsfTwvcD5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDEwcHggMCAwIDA7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDE0cHg7XCI+XG4gICAgICAgICAgICAgICAgU2lnbmVkIHVwIGF0OiAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChhZG1pbkVtYWlsRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzZW5kIGFkbWluIG5vdGlmaWNhdGlvbjonLCBhZG1pbkVtYWlsRXJyb3IpO1xuICAgICAgLy8gRG9uJ3QgZmFpbCB0aGUgcmVxdWVzdCBpZiBhZG1pbiBlbWFpbCBmYWlsc1xuICAgIH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBzdWJzY3JpYmVkIScgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTdWJzY3JpYmUgQVBJIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yLiBQbGVhc2UgdHJ5IGFnYWluLicgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY3JlYXRlQ2xpZW50IiwiUmVzZW5kIiwieiIsImVtYWlsU2NoZW1hIiwib2JqZWN0IiwiZW1haWwiLCJzdHJpbmciLCJzdXBhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJTVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEUiLCJyZXNlbmQiLCJSRVNFTkRfQVBJX0tFWSIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJ2YWxpZGF0aW9uIiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImVycm9yIiwic3RhdHVzIiwiZGF0YSIsImZyb20iLCJpbnNlcnQiLCJzZWxlY3QiLCJzaW5nbGUiLCJjb2RlIiwiY29uc29sZSIsImVtYWlscyIsInNlbmQiLCJSRVNFTkRfRlJPTSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJlbWFpbEVycm9yIiwiQURNSU5fRU1BSUwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJhZG1pbkVtYWlsRXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/subscribe/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/zod","vendor-chunks/whatwg-url","vendor-chunks/js-beautify","vendor-chunks/htmlparser2","vendor-chunks/peberminta","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/tr46","vendor-chunks/selderee","vendor-chunks/resend","vendor-chunks/parseley","vendor-chunks/leac","vendor-chunks/html-to-text","vendor-chunks/domelementtype","vendor-chunks/@selderee","vendor-chunks/@react-email","vendor-chunks/webidl-conversions","vendor-chunks/deepmerge"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();