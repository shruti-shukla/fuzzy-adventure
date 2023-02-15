import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 806:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 946:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../../../../../../usr/local/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/core
var core = __nccwpck_require__(806);
// EXTERNAL MODULE: ../../../../../../usr/local/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/github
var github = __nccwpck_require__(946);
;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("child_process");
;// CONCATENATED MODULE: ./index.js




const repoName = github.context.repo.repo
const repoOwner = github.context.repo.owner
const token = core.getInput('token')
const checkName = core.getInput('checkName')
// execSync('curl -OL https://github.com/ossf/scorecard/archive/refs/tags/v4.10.2.zip')
// if(token) {
//     execSync(`export GITHUB_AUTH_TOKEN=${token}`)
// }
console.log(`Repo Name: ${repoName}`)
console.log(`Repo Owner: ${repoOwner}`)
var result = 'Unable to run OSSF checks'
if(checkName) {
    result = (0,external_child_process_namespaceObject.execSync)(` export GITHUB_AUTH_TOKEN=${token} ; scorecard --repo=github.com/${repoOwner}/${repoName} --checks=${checkName}`).toString();
} else {
    result = (0,external_child_process_namespaceObject.execSync)(` export GITHUB_AUTH_TOKEN=${token} ; scorecard --repo=github.com/${repoOwner}/${repoName}`).toString();
}
console.log(result);

})();

