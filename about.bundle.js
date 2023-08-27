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
    content.classList.remove('menu-contents')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93QWJvdXQoKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnYWJvdXQgY29udGVudHMnKVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUtY29udGVudHMnKVxyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50cycpXHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtY29udGVudHMnKVxyXG5cclxuICAgIGNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhYm91dFBhZ2UuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFnZScpXHJcbiAgICBjb250ZW50LmlubmVySFRNTD0gJydcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC1kZXNjcmlwdGlvbicpXHJcblxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJ1xyXG4gICAgYWJvdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdhYm91dC10aXRsZScpXHJcblxyXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFib3V0VGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dC10ZXh0JylcclxuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdNb2xsaXQgY29uc2VjdGV0dXIgbm9zdHJ1ZCBjdXBpZGF0YXQgdXQgY3VwaWRhdGF0IHZlbGl0IGlydXJlLiBFeGVyY2l0YXRpb24gY29tbW9kbyBkbyBsYWJvcnVtIHF1aXMgdXQgcmVwcmVoZW5kZXJpdCBudWxsYSBzaXQgYWxpcXVpcCBlbGl0LiBFc3QgZXhlcmNpdGF0aW9uIG1hZ25hIGVzc2Ugdm9sdXB0YXRlIHZvbHVwdGF0ZSByZXByZWhlbmRlcml0IHN1bnQgdGVtcG9yLidcclxuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCArPSAnQWQgTG9yZW0gdm9sdXB0YXRlIGVzc2UgY29uc2VjdGV0dXIgYXV0ZSBhdXRlIGxhYm9yaXMgYWxpcXVhIGlydXJlIGRvbG9yIGFtZXQuIElwc3VtIGlydXJlIHJlcHJlaGVuZGVyaXQgbWluaW0gcXVpIGVpdXNtb2QgdXQgZXQgcHJvaWRlbnQgZXN0LiBJbmNpZGlkdW50IGxhYm9yZSBsYWJvcnVtIGVzdCBlaXVzbW9kIGFkIGVzc2UgbGFib3JpcyBkb2xvciBkb2xvciBkdWlzIHZlbmlhbSBzaW50IHF1aXMuIE1hZ25hIHNpdCBwcm9pZGVudCBleCBleGNlcHRldXIgTG9yZW0gY29uc2VxdWF0LidcclxuICAgIFxyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSlcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGV4dClcclxuXHJcbiAgICBhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoYWJvdXQpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0UGFnZSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==