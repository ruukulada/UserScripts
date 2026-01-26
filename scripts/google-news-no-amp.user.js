// ==UserScript==
// @name         Google News → Direct Article (No AMP)
// @version      1.0
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

        const link = document.querySelector(
            'li[role="presentation"] a[href]'
        );

        if (!link) return;

        let url = link.href;

        // Optional: de-AMP if the publisher exposes /amp URLs
        url = url.replace(/\/amp(\/|$)/, '/');

        navigated = true;
        window.location.replace(url);
    }

    // Try immediately (in case DOM is already ready)
    tryNavigate();

    // Observe DOM changes for dynamically injected content
    const observer = new MutationObserver(tryNavigate);
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
