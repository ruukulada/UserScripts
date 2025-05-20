// ==UserScript==
// @name         Twitter No Slop
// @version      1.0
// @description  Twitter.
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
        if (!response.ok) {
          throw new Error(`Failed to fetch CSS: ${response.statusText}`);
        }
        return response.text();
      })
      .then((css) => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        document.head.appendChild(style);
        console.log('Custom CSS loaded successfully!');
      })
      .catch((error) => console.error(error));
  }
  const cssUrl = 'https://ruukulada.github.io/CustomCss/src/twitternoslop.css';
  loadExternalCSS(cssUrl);
})();
