// ==UserScript==
// @name         Auto-Translate Posts on Twitter
// @version      1.5
// @description  Automatically clicks the "Translate post" button
// @author       https://github.com/ruukulada
// @namespace    https://github.com/ruukulada
// @match        https://*.x.com/*
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// @license      MIT
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  let mutationTimeout;
  const debouncedMutationHandler = () => {
    if (mutationTimeout) clearTimeout(mutationTimeout);
    mutationTimeout = setTimeout(() => {
      clickTranslateButton();
    }, 100);
  };
  const clickTranslateButton = () => {
    const buttons = document.querySelectorAll('button span');
    for (const el of buttons) {
      if (el.textContent.trim() === "Translate post") {
        const button = el.closest('button');
        if (button) { button.click(); }
      }
    }
  };
  const mainContentArea = document.querySelector('main') || document.body;
  const observer = new MutationObserver(() => debouncedMutationHandler());
  observer.observe(mainContentArea, { childList: true, subtree: true });
  clickTranslateButton();
})();
