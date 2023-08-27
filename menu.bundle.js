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
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showMenu)
/* harmony export */ });
function showMenu(){
    console.log('menu contents')
    const content = document.querySelector('.content')

    content.classList.remove('home-contents')
    content.classList.remove('about-contents')
    content.classList.add('menu-contents')
    content.innerHTML= ''

    const menuPageTitle = document.createElement('div')
    menuPageTitle.classList.add('menu-page-title')
    menuPageTitle.textContent = "Our Menu"
    content.appendChild(menuPageTitle)

    const theMenu = document.createElement('div')
    theMenu.classList.add('the-menu')
    content.appendChild(theMenu)

    for(let i=1;i<=4;i++){
        const menuGroup = document.createElement('div')
        menuGroup.classList.add(`menu-group-${i}`)
        const menuGroupTitle = document.createElement('div')
        menuGroupTitle.classList.add(`group-title-${i}`)
        menuGroup.appendChild(menuGroupTitle)
        theMenu.appendChild(menuGroup)
        for(let j= 1 ; j<= 4; j++){
            const dish = document.createElement('div')
            dish.classList.add(`dish-${j}`)
            const dishTitle = document.createElement('div')
            dishTitle.classList.add(`dish-title-${j}`)
            dish.appendChild(dishTitle)
            const dishIngredients = document.createElement('div')
            dishIngredients.classList.add(`dish-ingredients-${j}`)
            dish.appendChild(dishIngredients)
            menuGroup.appendChild(dish)
        }
    }
    document.querySelector('.group-title-1').textContent = 'Main course'
    document.querySelector('.group-title-2').textContent = 'Soups and Salads'
    document.querySelector('.group-title-3').textContent = 'Desserts'
    document.querySelector('.group-title-4').textContent = 'Drinks'

    document.querySelector('.menu-group-1 .dish-title-1').textContent = 'Super Delicious Zuppa Toscana'
    document.querySelector('.menu-group-1 .dish-ingredients-1').textContent = 'Amet fugiat enim consequat sint consectetur.'
    document.querySelector('.menu-group-1 .dish-title-2').textContent = 'Do fugiat proident non nisi culpa'
    document.querySelector('.menu-group-1 .dish-ingredients-2').textContent = 'Cillum minim elit laborum ullamco deserunt'

    document.querySelector('.menu-group-2 .dish-title-1').textContent = 'Quis ullamco pariatur cupidatat do'
    document.querySelector('.menu-group-2 .dish-ingredients-1').textContent = 'Velit ipsum eu in est qui nulla et nulla do est do'
    document.querySelector('.menu-group-2 .dish-title-2').textContent = 'Elit id officia irure sit fugiat'
    document.querySelector('.menu-group-2 .dish-ingredients-2').textContent = 'Tempor ea adipisicing exercitation in minim'

    document.querySelector('.menu-group-3 .dish-title-1').textContent = 'Voluptat Lorem excepteur'
    document.querySelector('.menu-group-3 .dish-ingredients-1').textContent = 'Officia Lorem aliqua elit laboris dolore'
    document.querySelector('.menu-group-3 .dish-title-2').textContent = 'Sint nisi aute nostrud ea nulla'
    document.querySelector('.menu-group-3 .dish-ingredients-2').textContent = 'Proidenti tempor duis quis culpa et sint cillum'

    document.querySelector('.menu-group-4 .dish-title-1').textContent = 'Quis ullamco pariatur cupidatat do'
    document.querySelector('.menu-group-4 .dish-ingredients-1').textContent = 'Velit ipsum eu in est qui nulla et nulla do est do'
    document.querySelector('.menu-group-4 .dish-title-2').textContent = 'Incididunt magnat exercitation aliquip'
    document.querySelector('.menu-group-4 .dish-ingredients-2').textContent = 'Tempor ea adipisicing exercitation in minim'

}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBLDhDQUE4QyxFQUFFO0FBQ2hEO0FBQ0Esb0RBQW9ELEVBQUU7QUFDdEQ7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0EsdUNBQXVDLEVBQUU7QUFDekM7QUFDQSxrREFBa0QsRUFBRTtBQUNwRDtBQUNBO0FBQ0EsOERBQThELEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93TWVudSgpe1xyXG4gICAgY29uc29sZS5sb2coJ21lbnUgY29udGVudHMnKVxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUtY29udGVudHMnKVxyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC1jb250ZW50cycpXHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGVudHMnKVxyXG4gICAgY29udGVudC5pbm5lckhUTUw9ICcnXHJcblxyXG4gICAgY29uc3QgbWVudVBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZW51UGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZS10aXRsZScpXHJcbiAgICBtZW51UGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVQYWdlVGl0bGUpXHJcblxyXG4gICAgY29uc3QgdGhlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aGVNZW51LmNsYXNzTGlzdC5hZGQoJ3RoZS1tZW51JylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhlTWVudSlcclxuXHJcbiAgICBmb3IobGV0IGk9MTtpPD00O2krKyl7XHJcbiAgICAgICAgY29uc3QgbWVudUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtZW51R3JvdXAuY2xhc3NMaXN0LmFkZChgbWVudS1ncm91cC0ke2l9YClcclxuICAgICAgICBjb25zdCBtZW51R3JvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbWVudUdyb3VwVGl0bGUuY2xhc3NMaXN0LmFkZChgZ3JvdXAtdGl0bGUtJHtpfWApXHJcbiAgICAgICAgbWVudUdyb3VwLmFwcGVuZENoaWxkKG1lbnVHcm91cFRpdGxlKVxyXG4gICAgICAgIHRoZU1lbnUuYXBwZW5kQ2hpbGQobWVudUdyb3VwKVxyXG4gICAgICAgIGZvcihsZXQgaj0gMSA7IGo8PSA0OyBqKyspe1xyXG4gICAgICAgICAgICBjb25zdCBkaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgZGlzaC5jbGFzc0xpc3QuYWRkKGBkaXNoLSR7an1gKVxyXG4gICAgICAgICAgICBjb25zdCBkaXNoVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkaXNoVGl0bGUuY2xhc3NMaXN0LmFkZChgZGlzaC10aXRsZS0ke2p9YClcclxuICAgICAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChkaXNoVGl0bGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc2hJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGRpc2hJbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKGBkaXNoLWluZ3JlZGllbnRzLSR7an1gKVxyXG4gICAgICAgICAgICBkaXNoLmFwcGVuZENoaWxkKGRpc2hJbmdyZWRpZW50cylcclxuICAgICAgICAgICAgbWVudUdyb3VwLmFwcGVuZENoaWxkKGRpc2gpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXRpdGxlLTEnKS50ZXh0Q29udGVudCA9ICdNYWluIGNvdXJzZSdcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC10aXRsZS0yJykudGV4dENvbnRlbnQgPSAnU291cHMgYW5kIFNhbGFkcydcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC10aXRsZS0zJykudGV4dENvbnRlbnQgPSAnRGVzc2VydHMnXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtdGl0bGUtNCcpLnRleHRDb250ZW50ID0gJ0RyaW5rcydcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1ncm91cC0xIC5kaXNoLXRpdGxlLTEnKS50ZXh0Q29udGVudCA9ICdTdXBlciBEZWxpY2lvdXMgWnVwcGEgVG9zY2FuYSdcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWdyb3VwLTEgLmRpc2gtaW5ncmVkaWVudHMtMScpLnRleHRDb250ZW50ID0gJ0FtZXQgZnVnaWF0IGVuaW0gY29uc2VxdWF0IHNpbnQgY29uc2VjdGV0dXIuJ1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZ3JvdXAtMSAuZGlzaC10aXRsZS0yJykudGV4dENvbnRlbnQgPSAnRG8gZnVnaWF0IHByb2lkZW50IG5vbiBuaXNpIGN1bHBhJ1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZ3JvdXAtMSAuZGlzaC1pbmdyZWRpZW50cy0yJykudGV4dENvbnRlbnQgPSAnQ2lsbHVtIG1pbmltIGVsaXQgbGFib3J1bSB1bGxhbWNvIGRlc2VydW50J1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWdyb3VwLTIgLmRpc2gtdGl0bGUtMScpLnRleHRDb250ZW50ID0gJ1F1aXMgdWxsYW1jbyBwYXJpYXR1ciBjdXBpZGF0YXQgZG8nXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1ncm91cC0yIC5kaXNoLWluZ3JlZGllbnRzLTEnKS50ZXh0Q29udGVudCA9ICdWZWxpdCBpcHN1bSBldSBpbiBlc3QgcXVpIG51bGxhIGV0IG51bGxhIGRvIGVzdCBkbydcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWdyb3VwLTIgLmRpc2gtdGl0bGUtMicpLnRleHRDb250ZW50ID0gJ0VsaXQgaWQgb2ZmaWNpYSBpcnVyZSBzaXQgZnVnaWF0J1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZ3JvdXAtMiAuZGlzaC1pbmdyZWRpZW50cy0yJykudGV4dENvbnRlbnQgPSAnVGVtcG9yIGVhIGFkaXBpc2ljaW5nIGV4ZXJjaXRhdGlvbiBpbiBtaW5pbSdcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1ncm91cC0zIC5kaXNoLXRpdGxlLTEnKS50ZXh0Q29udGVudCA9ICdWb2x1cHRhdCBMb3JlbSBleGNlcHRldXInXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1ncm91cC0zIC5kaXNoLWluZ3JlZGllbnRzLTEnKS50ZXh0Q29udGVudCA9ICdPZmZpY2lhIExvcmVtIGFsaXF1YSBlbGl0IGxhYm9yaXMgZG9sb3JlJ1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZ3JvdXAtMyAuZGlzaC10aXRsZS0yJykudGV4dENvbnRlbnQgPSAnU2ludCBuaXNpIGF1dGUgbm9zdHJ1ZCBlYSBudWxsYSdcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWdyb3VwLTMgLmRpc2gtaW5ncmVkaWVudHMtMicpLnRleHRDb250ZW50ID0gJ1Byb2lkZW50aSB0ZW1wb3IgZHVpcyBxdWlzIGN1bHBhIGV0IHNpbnQgY2lsbHVtJ1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWdyb3VwLTQgLmRpc2gtdGl0bGUtMScpLnRleHRDb250ZW50ID0gJ1F1aXMgdWxsYW1jbyBwYXJpYXR1ciBjdXBpZGF0YXQgZG8nXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1ncm91cC00IC5kaXNoLWluZ3JlZGllbnRzLTEnKS50ZXh0Q29udGVudCA9ICdWZWxpdCBpcHN1bSBldSBpbiBlc3QgcXVpIG51bGxhIGV0IG51bGxhIGRvIGVzdCBkbydcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWdyb3VwLTQgLmRpc2gtdGl0bGUtMicpLnRleHRDb250ZW50ID0gJ0luY2lkaWR1bnQgbWFnbmF0IGV4ZXJjaXRhdGlvbiBhbGlxdWlwJ1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZ3JvdXAtNCAuZGlzaC1pbmdyZWRpZW50cy0yJykudGV4dENvbnRlbnQgPSAnVGVtcG9yIGVhIGFkaXBpc2ljaW5nIGV4ZXJjaXRhdGlvbiBpbiBtaW5pbSdcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=