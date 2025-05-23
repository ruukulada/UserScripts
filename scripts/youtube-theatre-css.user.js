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
  function injectCSS(css) {
    const style = document.createElement('style');
    style.type = 'text/css'; style.innerHTML = css;
    document.head.appendChild(style);
  }
  function loadExternalCSS(url) {
    fetch(url)
      .then((response) => response.text())
      .then((css) => { injectCSS(css); })
  }
  function applyStyles() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('watch')) {
      const videoPageCssUrl = 'https://ruukulada.github.io/UserStyles/src/youtubetheatre.css';
      loadExternalCSS(videoPageCssUrl);
    }
    else {
      const homePageCss = "div[id=masthead-container] { opacity: 100%; }";
      injectCSS(homePageCss);
    }
  }
  applyStyles();
  let lastUrl = window.location.href;
  new MutationObserver(() => {
    const currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      applyStyles();
    }
  }).observe(document, { subtree: true, childList: true });
})();
