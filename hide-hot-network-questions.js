// ==UserScript==
// @name        Hide Hot Network Questions 
// @namespace   http://CHANGE.TO.YOUR.WEBPAGE
// @description Hide Hot-Network-Questions in StackExchange sites
// @include     https://*.stackexchange.com/*
// @include     https://stackoverflow.com/*
// @include     https://superuser.com/*
// @include     https://askubuntu.com/*
// @include     https://mathoverflow.com/*
// @include     https://serverfault.com/*
// @version     1
// @grant       none
// ==/UserScript==
(function(){
    var bar = document.getElementById('hot-network-questions');
    if (bar) bar.style.display="none";
})();
