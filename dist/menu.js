"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var menu=document.querySelector(".menu"),toggler=document.querySelector(".menu--hero__toggle"),menuItems=document.querySelectorAll(".menu--hero__icon"),menuBtn=document.querySelector("#menuBtn"),menuItemsData=["About Me","Projects","Skills","Testimonials","Contact Me","Home"],num=0,typed=new Typed("#auto-type",{strings:["analyze.","develop.","deploy."],typeSpeed:100,backSpeed:100,loop:!0});toggler.onclick=function(){menu.classList.toggle("active")},window.addEventListener("load",(function(e){menu.classList.add("active"),menu.classList.contains("active")&&setTimeout((function(){menuBtn.classList.remove("display-n"),menuItems[0].children[0].classList.add("active")}),1e3)})),window.addEventListener("resize",(function(){var e=document.querySelector("#hero-menu-container");console.log("resize",e.offsetWidth);var t=e.offsetWidth;t<442?menuItems.forEach((function(e){e.style.transformOrigin=t/2+20+"px",e.style.left=t-(t+20)+"px"})):menuItems.forEach((function(e){e.style.transformOrigin="200px",e.style.left="0px"}))})),menuItems.forEach((function(e){e.addEventListener("mouseover",(function(){var t=e.children[0].attributes.href.textContent,r=t.slice(1).replace("-"," ");menuBtn.textContent=r,menuBtn.href=t,e.children[0].classList.add("active"),_toConsumableArray(menuItems).filter((function(t){return t!=e})).forEach((function(e){e.children[0].classList.remove("active")}))}))})),menuBtn.addEventListener("click",(function(){menu.classList.remove("active")}));
//# sourceMappingURL=menu.js.map