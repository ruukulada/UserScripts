// ==UserScript==
// @name         YouTube Theatre CSS
// @version      1.0
// @description  Loads custom CSS for YouTube theatre mode
// @author       https://github.com/ruukulada
// @namespace    https://github.com/ruukulada
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @license      MIT
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {
  'use strict';
  function loadExternalCSS(url) {
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((css) => {
        const style = document.createElement('style');
        style.type = 'text/css'; style.innerHTML = css;
        document.head.appendChild(style);
      })
  }
  const cssUrl = 'https://ruukulada.github.io/UserStyles/src/youtubetheatre.css';
  loadExternalCSS(cssUrl);
})();
