/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showAbout)
/* harmony export */ });
function showAbout(){

    console.log('about contents')

    const content = document.querySelector('.content')
    content.classList.remove('home-contents')
    content.classList.add('about-contents')
    const aboutPage = document.createElement('div')
    aboutPage.classList.add('about-page')
    content.innerHTML= ''

    const about = document.createElement('div')
    about.classList.add('about-description')

    const aboutTitle = document.createElement('div')
    aboutTitle.textContent = 'About us'
    aboutTitle.classList.add('about-title')

    const aboutText = document.createElement('div')
    aboutText.classList.add('about-text')
    aboutText.textContent = 'Mollit consectetur nostrud cupidatat ut cupidatat velit irure. Exercitation commodo do laborum quis ut reprehenderit nulla sit aliquip elit. Est exercitation magna esse voluptate voluptate reprehenderit sunt tempor.'
    aboutText.textContent += 'Ad Lorem voluptate esse consectetur aute aute laboris aliqua irure dolor amet. Ipsum irure reprehenderit minim qui eiusmod ut et proident est. Incididunt labore laborum est eiusmod ad esse laboris dolor dolor duis veniam sint quis. Magna sit proident ex excepteur Lorem consequat.'
    
    about.appendChild(aboutTitle)
    about.appendChild(aboutText)

    aboutPage.appendChild(about)
    content.appendChild(aboutPage)
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dBYm91dCgpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdhYm91dCBjb250ZW50cycpXHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZS1jb250ZW50cycpXHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRlbnRzJylcclxuICAgIGNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhYm91dFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFnZScpXHJcbiAgICBjb250ZW50LmlubmVySFRNTD0gJydcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC1kZXNjcmlwdGlvbicpXHJcblxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJ1xyXG4gICAgYWJvdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdhYm91dC10aXRsZScpXHJcblxyXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFib3V0VGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dC10ZXh0JylcclxuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdNb2xsaXQgY29uc2VjdGV0dXIgbm9zdHJ1ZCBjdXBpZGF0YXQgdXQgY3VwaWRhdGF0IHZlbGl0IGlydXJlLiBFeGVyY2l0YXRpb24gY29tbW9kbyBkbyBsYWJvcnVtIHF1aXMgdXQgcmVwcmVoZW5kZXJpdCBudWxsYSBzaXQgYWxpcXVpcCBlbGl0LiBFc3QgZXhlcmNpdGF0aW9uIG1hZ25hIGVzc2Ugdm9sdXB0YXRlIHZvbHVwdGF0ZSByZXByZWhlbmRlcml0IHN1bnQgdGVtcG9yLidcclxuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCArPSAnQWQgTG9yZW0gdm9sdXB0YXRlIGVzc2UgY29uc2VjdGV0dXIgYXV0ZSBhdXRlIGxhYm9yaXMgYWxpcXVhIGlydXJlIGRvbG9yIGFtZXQuIElwc3VtIGlydXJlIHJlcHJlaGVuZGVyaXQgbWluaW0gcXVpIGVpdXNtb2QgdXQgZXQgcHJvaWRlbnQgZXN0LiBJbmNpZGlkdW50IGxhYm9yZSBsYWJvcnVtIGVzdCBlaXVzbW9kIGFkIGVzc2UgbGFib3JpcyBkb2xvciBkb2xvciBkdWlzIHZlbmlhbSBzaW50IHF1aXMuIE1hZ25hIHNpdCBwcm9pZGVudCBleCBleGNlcHRldXIgTG9yZW0gY29uc2VxdWF0LidcclxuICAgIFxyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSlcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGV4dClcclxuXHJcbiAgICBhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoYWJvdXQpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0UGFnZSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==