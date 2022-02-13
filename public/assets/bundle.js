/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
 // alternador do menu
// selecionando o botão toggleMenu

var toggleMenu = document.querySelector('.header-toggle-menu'); // adicionar um evento de clique ao botão
// ao clicarmos no botão será adicionado uma classe active
// tanto para o botão como para o menu
// a classe active do menu faz o menu abrir

toggleMenu.addEventListener('click', function () {
  // add active ao botão
  this.classList.toggle('active'); // selecionando o menu próximo ao botão

  var menu = this.nextElementSibling; // add active ao menu

  menu.classList.toggle('active');
}); // faqs

var questions = document.querySelectorAll('.faq__header');
questions.forEach(function (question) {
  question.addEventListener('click', function () {
    var itemAtivo = document.querySelector('.faq.active .faq__header');

    if (itemAtivo && itemAtivo !== this) {
      console.log('executei'); // fecha quem tá aberto

      checkFaq(itemAtivo);
    }

    checkFaq(question);
  });
});

function checkFaq(question) {
  // seleciona o item pai
  var parent = question.parentElement; // add active ao item pai

  parent.classList.toggle('active'); // seleciona a resposta

  var answer = question.nextElementSibling;

  if (answer.style.maxHeight) {
    // se tiver altura então "feche"
    answer.style.maxHeight = null;
  } else {
    //senão abra
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map