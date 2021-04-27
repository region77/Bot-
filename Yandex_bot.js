// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        http://gufo.me/*
// @icon         
// @grant        none
// ==/UserScript==

let keywords = ["гобой значение", "саксофон значение", "флейта значение"];

let button = document.getElementsByClassName('button mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[getRandom(0, keywords.length)];
let yandexInput = document.getElementsByName('text')[0];
let i = 0;

if(button !== undefined){
      let timerId = setInterval(()=> {
        yandexInput.value += keyword[i];
        i++;
        if(i == keyword.length) {
            clearInterval(timerId);
            button.click();
        }
    }, 500);

 }else if(location.hostname == "gufo.me") { /*host name нужен*/
    console.log("Мы на сайте муз. энциклопедии");
    setTimeout(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101)>=70) {
            location.href = "https://yandex.ru/";
        }
        if(links[index].href.indexOf('gufo.me')!=-1)
            links[index].click();
    }, getRandom(2000, 3500));
}

else{
    let nextYandexPage = true;
    for(let i=0; i<links.length; i++) {
        if(links[i].href.indexOf('gufo.me')!=-1) { //indexOf определяет вхождение напли в ссылки
            let link = links[i];
            nextYandexPage = false;
            console.log("Нашел фразу" + link);
            setTimeout(()=>{
                link.click();}
                       ,getRandom(1000,4500));
            break;
        }
    }
  if(document.querySelector('.pager__item_current_yes').innerText == "5") {
        nextYandexPage = false;
        location.href = "https://yandex.ru/";
    }

    if(document.querySelector('.pager__item_current_yes').innerText !== "5") {
        setTimeout(()=>{
            document.querySelector('.pager__item_kind_next').click();}
                   ,getRandom(3000,5000));
    }
}


function getRandom(min, max) {
 return Math.floor(Math.random()*(max-min)+min);
}
