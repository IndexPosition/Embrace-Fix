// ==UserScript==
// @name         TATA Embrace Redirect Freeze
// @version      1.0
// @description  Allow Embrace to load, and stops it to redirect to Lite
// @author       IndexPosition
// @match        https://tataembrace.azurewebsites.net/Embrace*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const freezeRedirects = () => {
        const noop = () => console.log("Redirect attempt blocked");
        window.open = noop;
        window.location.assign = noop;
        window.location.replace = noop;
        Object.defineProperty(window.location, 'href', { set: noop });
    };

    document.addEventListener("DOMContentLoaded", () => {
        console.log("Page loaded");

        setTimeout(() => {
            if (window.stop) window.stop();

            freezeRedirects();

            document.querySelectorAll("meta[http-equiv='refresh']").forEach(m => m.remove());

            console.log("Page stoped, redirect disabled.");
        }, 200); // adjust delay (ms) here (1000 = 1 seconds)
    });
})();
