const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o;function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){t.disabled=!0,document.body.style.backgroundColor=n(),o=setInterval((()=>{document.body.style.backgroundColor=n()}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.49661699.js.map