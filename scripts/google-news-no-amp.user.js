// ==UserScript==
// @name         Google News → Direct Article (No AMP)
// @version      1.2
// @description  Automatically navigate to the real article URL shown in Google News
// @author       https://github.com/ruukulada
// @namespace    https://github.com/ruukulada
// @match        https://news.google.com/*
// @license      MIT
// @grant        none
// ==/UserScript==

(() => {
  'use strict';
  let navigated = false;
  function tryNavigate() {
    if (navigated) return;
    if (!window.location.href.startsWith("https://news.google.com/read")) return;
    const link = document.querySelector('li[role="presentation"] a[href]');
    if (!link) return;
    navigated = true;
    window.location.replace(link.href);
  }

  tryNavigate();
  const observer = new MutationObserver(tryNavigate);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
