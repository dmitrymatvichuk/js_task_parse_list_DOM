function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}function r(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,n){if(r){if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n,e,a=document.querySelectorAll("li");function o(t){return parseFloat(t.replace(/[^\d.-]/g,""))}n=r(a).sort(function(t,r){var n=o(t.dataset.salary);return o(r.dataset.salary)-n}),(e=a[0].parentNode).innerHTML="",n.forEach(function(t){return e.appendChild(t)}),r(a).map(function(t){return{name:t.textContent.trim(),position:t.dataset.position,salary:t.dataset.salary,age:t.dataset.age}});//# sourceMappingURL=index.3e61e1db.js.map

//# sourceMappingURL=index.3e61e1db.js.map
