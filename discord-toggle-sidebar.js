// ==UserScript==
// @name         Discord Toggle Sidebar
// @namespace    https://github.com/WhistlingZephyr/discord-toggle-sidebar
// @homepage     https://github.com/WhistlingZephyr/discord-toggle-sidebar
// @supportURL   https://github.com/WhistlingZephyr/discord-toggle-sidebar/issues
// @updateURL    https://github.com/WhistlingZephyr/discord-toggle-sidebar/raw/main/discord-toggle-sidebar.user.js
// @downloadURL  https://github.com/WhistlingZephyr/discord-toggle-sidebar/raw/main/discord-toggle-sidebar.user.js
// @version      0.1.4
// @description  A simple UserScript to toggle Discord sidebar
// @author       WhistlingZephyr
// @match        https://discord.com/channels/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    let hidden = false;
    GM.registerMenuCommand(
        'Toggle sidebar',
        () => {
            const sidebar = document.querySelector('[class^="sidebar-"]');
            if (hidden) {
                sidebar.style = '';
            } else {
                sidebar.style = '';
            }
            hidden = !hidden;
        },
        'h'
    );
})();