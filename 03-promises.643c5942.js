!function(){function e(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.random()>.3;return new Promise((function(o,a){setTimeout((function(){n?o({position:e,delay:t}):a({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=+t.target.elements.delay.value,o=+t.target.elements.step.value;!function(t,n,o){for(var a=[],i=1;i<=t;i++){var l=e(i,n+(i-1)*o);a.push(l)}Promise.allSettled(a).then((function(e){e.forEach((function(e){var t=e.status,n=e.value,o=e.reason;"fulfilled"===t?console.log("✅ Fulfilled promise ".concat(n.position," in ").concat(n.delay,"ms")):console.log("❌ Rejected promise ".concat(o.position," in ").concat(o.delay,"ms"))}))}))}(+t.target.elements.amount.value,n,o)}))}();
//# sourceMappingURL=03-promises.643c5942.js.map
