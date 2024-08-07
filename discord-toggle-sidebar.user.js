// ==UserScript==
// @name         Discord Toggle Sidebar
// @namespace    https://github.com/WhistlingZephyr/discord-toggle-sidebar
// @homepage     https://github.com/WhistlingZephyr/discord-toggle-sidebar
// @supportURL   https://github.com/WhistlingZephyr/discord-toggle-sidebar/issues
// @updateURL    https://github.com/WhistlingZephyr/discord-toggle-sidebar/raw/main/discord-toggle-sidebar.user.js
// @downloadURL  https://github.com/WhistlingZephyr/discord-toggle-sidebar/raw/main/discord-toggle-sidebar.user.js
// @version      0.1.9
// @description  A simple UserScript to toggle Discord sidebar
// @author       WhistlingZephyr
// @license      MIT
// @match        https://discord.com/channels/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    let sidebarHidden = false;
    let serverListHidden = false;
    GM_registerMenuCommand(
        'Toggle sidebar',
        () => {
            const sidebar = document.querySelector('[class^="sidebar_"]');
            if (sidebarHidden) {
                sidebar.style = '';
            } else {
                sidebar.style = 'display: none;';
            }
            sidebarHidden = !sidebarHidden;
        },
        'h'
    );
    GM_registerMenuCommand(
        'Toggle server list',
        () => {
            const serverList = document.querySelector(
                '[aria-label="Servers sidebar"]'
            );
            if (serverListHidden) {
                serverList.style = '';
            } else {
                serverList.style = 'display: none;';
            }
            serverListHidden = !serverListHidden;
        },
        's'
    );
})();
