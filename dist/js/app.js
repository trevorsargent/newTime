!function n(r,e,t){function u(i,f){if(!e[i]){if(!r[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(o)return o(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var s=e[i]={exports:{}};r[i][0].call(s.exports,function(n){var e=r[i][1][n];return u(e||n)},s,s.exports,n,r,e,t)}return e[i].exports}for(var o="function"==typeof require&&require,i=0;i<t.length;i++)u(t[i]);return u}({1:[function(n,r,e){"use strict";for(var t=function(n){return n>9?""+n:"0"+n},u=function(n,r){return t(n)+":"+t(r)},o=function(n){var r=n.split("");return r.splice(2,1),r.map(function(n){return Number.parseInt(n)}).reduce(function(n,r){return n+r},0)},i=function(){var n=new Date,r=n.getHours(),e=n.getMinutes(),t=u(r,e),i=o(t),c=f[i].findIndex(function(n){return n===t})+1;a.innerText=i,s.innerText=c},f=new Array(26),c=0;c<f.length;c++)f[c]=[];(function(){for(var n=[],r=0;r<1440;r++){var e=r,t=Math.floor(e/60),o=e%60;n.push(u(t,o))}return n})().map(function(n){f[o(n)].push(n)}),console.log(f);var a=document.getElementById("sum"),s=document.getElementById("num");i(),setInterval(i,1e3)},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map