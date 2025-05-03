// ==UserScript==
// @name         Auto-Translate Posts on Twitter
// @version      1.3
// @description  Automatically clicks the "Translate post" button on X.com posts
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
 
    // find and click the "Translate post" button
    const clickTranslateButton = () => {
        const buttons = document.querySelectorAll('button span');
        for (const el of buttons) {
            if (el.textContent.trim() === "Translate post") {
                const button = el.closest('button');
                if (button) {
                    button.click();
                    console.log("Clicked 'Translate post' button.");
                }
            }
        }
    };
 
    // debounced mutation handler
    const debouncedMutationHandler = () => {
        if (mutationTimeout) clearTimeout(mutationTimeout);
        mutationTimeout = setTimeout(() => {
            clickTranslateButton();
        }, 100); // Delay in milliseconds
    };
 
    // monitor changes within the main content area
    const mainContentArea = document.querySelector('main') || document.body;
    const observer = new MutationObserver(() => debouncedMutationHandler());
 
    // start observing the main content area
    observer.observe(mainContentArea, { childList: true, subtree: true });
 
    // initial check in case the button is already present
    clickTranslateButton();
})();
