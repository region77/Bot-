// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         
// @grant        none
// ==/UserScript==

let keywords = ["гобой", "саксофон", "как звучит флейта"];

let button = document.getElementsByClassName('button mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[0];

if(button !== undefined){
    document.getElementsByName('text')[0].value = keyword;
    document.getElementsByClassName('button mini-suggest__button')[0].click();
}else{
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            let link = links[i];
            console.log("Нашел фразу" + link);
            link.removeAttribute("target");
            link.click();
            break;
         }
     }
 }

function getRandom(min, max) {
 return Math.floor(Math.random()*(max-min)+min);
}
