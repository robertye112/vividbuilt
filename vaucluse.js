!function(n){var e={};function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(a,i,function(e){return n[e]}.bind(null,i));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}({0:function(n,e,t){"use strict";t.r(e),t.d(e,"template",function(){return a});var a='\n<div  class="topContainer">\n  <div  class="topSection">\n    <img src="" class="mainImage" />\n    <div class="flexContainer centerText">\n      <h1 class="title"></h1> <span> &nbsp;</span><span class="buildDate"></span>\n    </div>\n    <span class="blurb"></span>\n  </div>\n</div>\n<div class="flexContainer imageColumn">\n</div>\n\n\n<style rel="stylesheet">\n    .mainImage {\n      max-width: 600px;\n      height: auto;\n    }\n\n    .topContainer {\n      display:flex;\n      justify-content: center;\n    }\n    \n    .topSection {\n      height: auto;\n      margin-bottom: 50px;\n      max-width:600px;\n    }\n\n    .imageColumn {\n      justify-content: space-evenly;\n      max-width: 1235px;\n      flex-flow: wrap row;\n      margin:auto;\n    }\n\n    .imageColumn img {\n      width: auto;\n      max-height: 700px;\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 20px;\n      object-fit: contain;\n    }\n\n\n    @media only screen and (max-width: 600px) {\n      .imageColumn {\n        max-width: 390px;\n      }\n      .imageColumn img{\n        max-width: 390px;\n      }\n      .topSection{\n        max-width: 390px;\n      }\n      .mainImage{\n        max-width: 390px;\n      }\n    }\n\n    .centerText {\n      align-items: center;\n      justify-content: space-between;\n      padding-top: 15px;\n      padding-bottom: 30px;\n    }\n\n    .centerText h1 {\n      padding-top: 5px;\n    }\n  </style>\n  '},13:function(n,e,t){var a=t(0);console.info("starting..");const i={title:"VAUCLUSE",mainImage:["./images/projects/vVaucluse/03442115-5a6a-4445-8247-f961fc837a6d.s3.jpg"],images:["329cd8eb-0cdb-40e7-b101-db3db471a1ce.s3.jpg","3801daf2-8f0a-459b-9d9e-23fb6a91078d.s3.jpg","3cbc71aa-a3b1-4cdc-a4da-a30d10af661f.s3.jpg","703422f3-1a19-463f-92ef-3694adef326d.s3.jpg","74d70f03-d1af-460c-a76b-dd76ef746669.s3.jpg","8e00d9a3-30b4-403e-83b7-84fde2a5cc9d.s3.jpg","903afa21-3000-47a1-8a87-1c50168b0920.s3.jpg","b2096ae7-d9e2-4def-b5c0-2a5eb308f734.s3.jpg","c9eaf64e-5386-44a8-af52-3725d2946273.s3.jpg","de0483f2-3366-4a93-bc43-07fbd5109c10.s3.jpg","HIGH RES-10.jpg","HIGH RES-3.jpg","HIGH RES-4.jpg","HIGH RES-5.jpg","HIGH RES-6.jpg","HIGH RES-7.jpg","HIGH RES.jpg"],buildDate:"2016",blurb:" \nTop floor apartment, extensive demolition including the removal of all internal masonry walls. Total rebuild and fit out. Timeline 3 months."};var o;for(document.querySelector("#projectDetailContainer").innerHTML=a.template,document.querySelector(".mainImage").src=i.mainImage,document.querySelector(".buildDate").innerHTML=i.buildDate,document.querySelector(".title").innerHTML=i.title,document.querySelector(".blurb").innerHTML=i.blurb,o=0;o<i.images.length-1;o++){var r=document.createElement("img");r.setAttribute("src","./images/projects/vVaucluse/"+i.images[o]),document.querySelector(".imageColumn").appendChild(r)}}});