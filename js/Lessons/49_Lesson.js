'use strict';

let p = document.querySelectorAll('p');
console.log(p);

//Загрузка скриптов на страницу (динамические скрипты)
function loadScript(src){
   const script = document.createElement('script');
   script.src = src;
   script.async = false; //т.к. установили асинхронность false , то скрипты будут выполняться друг за другом
                          // если закомментровать строчку или в установить в true, то скрипты могут подгрузиться произвольно 
   document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/some.js');