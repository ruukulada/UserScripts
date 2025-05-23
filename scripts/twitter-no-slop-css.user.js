// ==UserScript==
// @name         Twitter No Slop CSS
// @version      1.3
// @description  Loads custom CSS for Twitter to remove slop
// @author       https://github.com/ruukulada
// @namespace    https://github.com/ruukulada
// @match        https://*.x.com/*
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
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
  const cssUrl = 'https://ruukulada.github.io/UserStyles/src/twitternoslop.css';
  loadExternalCSS(cssUrl);
})();
