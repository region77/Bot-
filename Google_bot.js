// ==UserScript==
// @name         Bot for Google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @icon         
// @grant        none
// ==/UserScript==

let keywords = ["вывод произвольных полей wordpress", "pods wordpress", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];

let btnK = document.getElementsByName('btnK')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
let googleInput = document.getElementsByName('q')[0];
let i = 0;


if(btnK !== undefined){
	let timerId = setInterval(()=> {
		googleInput.value += keyword[i];
		i++;
		if(i == keyword.length) {
			clearInterval(timerId);
			btnK.click();
		}
	}, 1000);


}else{
	let nextGooglePage = true;
	for(let i=0; i<links.length; i++) {
		if(links[i].href.indexOf('napli.ru')!=-1) {
			let link = links[i];
			nextGooglePage = false;
			console.log("Нашел фразу" + link);
			setTimeout(()=>{
				link.click();}
					   ,getRandom(1000,4500));
			break;
		}
	}
	if(document.querySelector('.YyVfkd').innerText == "5") {
		nextGooglePage = false;
		location.href = "https://www.google.com/";
	}

	if(document.querySelector('.YyVfkd').innerText !== "5") {
				setTimeout(()=>{
			pnnext.click();}
				   ,getRandom(3000,5000));
	}
}

function getRandom(min,max) {
	return Math.floor(Math.random()*(max-min)+min);
}
