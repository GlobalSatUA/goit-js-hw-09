!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",(function(){e.disabled=!0,document.body.style.backgroundColor=o(),t=setInterval((function(){document.body.style.backgroundColor=o()}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.610f7371.js.map