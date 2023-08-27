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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showHome)
/* harmony export */ });
function showHome(){

    console.log('home contents')
    const content = document.querySelector('.content')
    content.classList.add('home-contents')
    content.classList.remove('about-contents')
    content.classList.remove('menu-contents')
    content.innerHTML= ''
    const homeHeader = document.createElement('div')
    homeHeader.classList.add('home-header')
    const headertitle = document.createElement('div')
    headertitle.classList.add('header-title')
    headertitle.textContent = ' Bikram\'s Kitchen'
    homeHeader.appendChild(headertitle)
    

    const homeText = document.createElement('div')
    homeText.classList.add('home-text')
    homeText.textContent = 'Welcome to the finest restaurant in the town'
    
    homeHeader.appendChild(homeText)
    const reserve = document.createElement('button')
    reserve.classList.add('reserve')
    reserve.textContent = 'Make a reservation'

    homeHeader.appendChild(reserve)
    content.appendChild(homeHeader)
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('home-img-container')
    imgContainer.textContent = 'work'
    imgContainer.appendChild(document.createElement('div'))

    content.appendChild(imgContainer)
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0hvbWUoKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaG9tZSBjb250ZW50cycpXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnRzJylcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXQtY29udGVudHMnKVxyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWNvbnRlbnRzJylcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MPSAnJ1xyXG4gICAgY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBob21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaGVhZGVyJylcclxuICAgIGNvbnN0IGhlYWRlcnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhlYWRlcnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpXHJcbiAgICBoZWFkZXJ0aXRsZS50ZXh0Q29udGVudCA9ICcgQmlrcmFtXFwncyBLaXRjaGVuJ1xyXG4gICAgaG9tZUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJ0aXRsZSlcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhvbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGV4dCcpXHJcbiAgICBob21lVGV4dC50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIHRoZSBmaW5lc3QgcmVzdGF1cmFudCBpbiB0aGUgdG93bidcclxuICAgIFxyXG4gICAgaG9tZUhlYWRlci5hcHBlbmRDaGlsZChob21lVGV4dClcclxuICAgIGNvbnN0IHJlc2VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKCdyZXNlcnZlJylcclxuICAgIHJlc2VydmUudGV4dENvbnRlbnQgPSAnTWFrZSBhIHJlc2VydmF0aW9uJ1xyXG5cclxuICAgIGhvbWVIZWFkZXIuYXBwZW5kQ2hpbGQocmVzZXJ2ZSlcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcilcclxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1pbWctY29udGFpbmVyJylcclxuICAgIGltZ0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICd3b3JrJ1xyXG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9