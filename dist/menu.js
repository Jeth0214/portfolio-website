"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var menu=document.querySelector(".menu"),toggler=document.querySelector(".menu--hero__toggle"),menuItems=document.querySelectorAll(".menu--hero__icon"),menuBtn=document.querySelector("#menuBtn"),menuImage=document.querySelector(".hero__image"),typed=new Typed("#auto-type",{strings:["Analyzing.","Development.","Deployment."],typeSpeed:100,backSpeed:100,loop:!0});function resizeMenu(){var e=document.querySelector("#hero-menu-container").offsetWidth;e<442?(menuItems.forEach((function(t){t.style.transformOrigin=e/2+22+"px",t.style.left=e-(e+25)+"px",t.style.zIndex=10})),setTimeout((function(){menuImage.style.zIndex=2}),1500)):menuItems.forEach((function(e){e.style.transformOrigin="220px",e.style.left="0px"}))}window.addEventListener("load",(function(e){menu.classList.add("active"),resizeMenu(),menu.classList.contains("active")&&setTimeout((function(){menuBtn.classList.remove("display-n"),menuItems[0].children[0].classList.add("active")}),1e3)})),window.addEventListener("resize",(function(){resizeMenu()})),toggler.onclick=function(){menu.classList.toggle("active")},menuItems.forEach((function(e){e.addEventListener("mouseover",(function(){var t=e.children[0].attributes.href.textContent,n=t.slice(1).replace("-"," ");menuBtn.textContent=n,menuBtn.href=t,e.children[0].classList.add("active"),_toConsumableArray(menuItems).filter((function(t){return t!=e})).forEach((function(e){e.children[0].classList.remove("active")}))})),e.children[0].addEventListener("click",(function(e){menu.classList.remove("active")}))})),menuBtn.addEventListener("click",(function(){menu.classList.remove("active")}));
//# sourceMappingURL=menu.js.map