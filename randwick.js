!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=11)}({0:function(n,e,t){"use strict";t.r(e),t.d(e,"template",function(){return i});var i='\n<div  class="topContainer">\n  <div  class="topSection">\n    <img src="" class="mainImage" />\n    <div class="flexContainer centerText">\n      <h1 class="title"></h1> <span> &nbsp;</span><span class="buildDate"></span>\n    </div>\n    <span class="blurb"></span>\n  </div>\n</div>\n<div class="flexContainer imageColumn">\n</div>\n\n\n<style rel="stylesheet">\n    .mainImage {\n      max-width: 600px;\n      height: auto;\n    }\n\n    .topContainer {\n      display:flex;\n      justify-content: center;\n    }\n    \n    .topSection {\n      height: auto;\n      margin-bottom: 50px;\n      max-width:600px;\n    }\n\n    .imageColumn {\n      justify-content: space-evenly;\n      max-width: 1235px;\n      flex-flow: wrap row;\n      margin:auto;\n    }\n\n    .imageColumn img {\n      width: auto;\n      max-height: 700px;\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 20px;\n      object-fit: contain;\n    }\n\n\n    @media only screen and (max-width: 600px) {\n      .imageColumn {\n        max-width: 390px;\n      }\n      .imageColumn img{\n        max-width: 390px;\n      }\n      .topSection{\n        max-width: 390px;\n      }\n      .mainImage{\n        max-width: 390px;\n      }\n    }\n\n    .centerText {\n      align-items: center;\n      justify-content: space-between;\n      padding-top: 15px;\n      padding-bottom: 30px;\n    }\n\n    .centerText h1 {\n      padding-top: 5px;\n    }\n  </style>\n  '},11:function(n,e,t){var i=t(0);console.info("starting..");const r={title:"RANDWICK",mainImage:["./images/projects/Randwick/19.jpg"],images:["15.jpg","12.jpg","20.jpg","02.jpg","20140627_080747_resized.jpg"],buildDate:"2014",blurb:" \nTotal rebuild of the rear of the house, underpinning of existing masonry walls, extensive steel works. Large light weight first floor addition. Timeline 6 months."};var a;for(document.querySelector("#projectDetailContainer").innerHTML=i.template,document.querySelector(".mainImage").src=r.mainImage,document.querySelector(".buildDate").innerHTML=r.buildDate,document.querySelector(".title").innerHTML=r.title,document.querySelector(".blurb").innerHTML=r.blurb,a=0;a<r.images.length-1;a++){var o=document.createElement("img");o.setAttribute("src","./images/projects/Randwick/"+r.images[a]),document.querySelector(".imageColumn").appendChild(o)}}});