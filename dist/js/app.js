!function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(a)return a(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){var n=t[i][1][e];return o(n||e)},s,s.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.hourHandFraction=function(e,t,n){return(e%12+t/60+n/60/60)/12},n.minHandFraction=function(e,t){return e/60+t/60/60},n.secHandFraction=function(e,t){return e/60+t/1e3/60},n.secHandFractionRough=function(e){return e/60}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.makeUpdateTime=void 0;var r=e("./analog.js");n.makeUpdateTime=function(e,t,n){return function(){var o=new Date,a=o.getHours(),i=o.getMinutes(),u=o.getSeconds(),c=o.getMilliseconds(),d=Math.floor(360*(0,r.hourHandFraction)(a,i,u)).toString().padStart(3,"0")+"•",s=Math.floor(360*(0,r.minHandFraction)(i,u)).toString().padStart(3,"0")+"•",l=Math.floor(360*(0,r.secHandFraction)(u,c)).toString().padStart(3,"0")+"•";e.innerText=d,t.innerText=s,n.innerText=l}}},{"./analog.js":1}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.makeUpdateTime=void 0;var r=e("./analog.js"),o=(n.makeUpdateTime=function(e){return function(){var t=225,n=new Date,a=n.getHours(),i=n.getMinutes(),u=n.getSeconds(),c=n.getMilliseconds();e.width=500,e.height=500;var d=e.getContext("2d");d.translate(250,250),d.rotate(Math.PI/-2);for(var s=2*(0,r.hourHandFraction)(a,i,u)*Math.PI,l=2*(0,r.minHandFraction)(i,u)*Math.PI,m=2*(0,r.secHandFraction)(u,c)*Math.PI;l<s;)l+=2*Math.PI;for(;m<l;)m+=2*Math.PI;o(d,l,m,t,190),o(d,s,l,175,140)}},function(e,t,n,r,o){e.beginPath(),e.arc(0,0,r,t,n),e.lineTo(0,0),e.closePath(),e.fillStyle="black",e.fill(),e.beginPath(),e.arc(0,0,o,0,2*Math.PI),e.closePath(),e.fillStyle="white",e.fill()})},{"./analog.js":1}],4:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var o=r(e("./sumClock.js")),a=r(e("./progressClock.js")),i=r(e("./binaryClock.js")),u=r(e("./segmentClock.js")),c=r(e("./downClock.js")),d=r(e("./decimalClock.js")),s=r(e("./angleReadoutClock.js")),l=r(e("./digitClock.js")),m=r(e("./angleSweepClock.js")),g=r(e("./colorClock.js")),f=r(e("./cardinalClock.js")),p=r(e("./unixClock.js")),y=void 0,v=1e3,S=!1;if(document.getElementById("sumClock")){var E=document.getElementById("sum"),k=document.getElementById("num");o.setup(),y=o.makeUpdateTime(E,k)}if(document.getElementById("progressClock")){var I=document.getElementById("h"),h=document.getElementById("m"),b=document.getElementById("s");y=a.makeUpdateTime(I,h,b)}if(document.getElementById("binaryClock")){var M=document.getElementById("h"),T=document.getElementById("m"),C=document.getElementById("s");y=i.makeUpdateTime(M,T,C)}if(document.getElementById("segmentClock")){var j=[document.getElementById("h1"),document.getElementById("h2"),document.getElementById("m1"),document.getElementById("m2"),document.getElementById("s1"),document.getElementById("s2")];y=u.makeUpdateTime(j)}if(document.getElementById("downClock")){var B=document.getElementById("h"),w=document.getElementById("m"),_=document.getElementById("s");y=c.makeUpdateTime(B,w,_)}if(document.getElementById("decimalClock")){var U=document.getElementById("h"),N=document.getElementById("m"),x=document.getElementById("s");y=d.makeUpdateTime(U,N,x),v=10}if(document.getElementById("angleReadoutClock")){var P=document.getElementById("h"),H=document.getElementById("m"),W=document.getElementById("s");y=s.makeUpdateTime(P,H,W),v=10}if(document.getElementById("digitClock")){var O=document.getElementsByClassName("digit");y=l.makeUpdateTime(O)}var D=document.getElementById("angleSweepClock");D&&(y=m.makeUpdateTime(D),v=10);var F=document.getElementById("colorClock");if(F&&(y=g.makeUpdateTime(F)),document.getElementById("cardinalClock")){var q=document.getElementById("h"),A=document.getElementById("m"),R=document.getElementById("s");y=f.makeUpdateTime(q,A,R),v=10}var L=document.getElementById("unixClock");L&&(y=p.makeUpdateTime(L),v=10),y(),setInterval(y,v);var z=document.getElementById("moreInfo"),G=document.getElementById("text"),J=document.getElementById("fill");z.addEventListener("click",function(){S=!S,G.style.opacity=S?1:0,J.style.opacity=S?1:0}),J.addEventListener("click",function(){S=!1,G.style.opacity=0,J.style.opacity=0})},{"./angleReadoutClock.js":2,"./angleSweepClock.js":3,"./binaryClock.js":5,"./cardinalClock.js":6,"./colorClock.js":7,"./decimalClock.js":8,"./digitClock.js":9,"./downClock.js":10,"./progressClock.js":11,"./segmentClock.js":12,"./sumClock.js":13,"./unixClock.js":14}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e,t,n){return function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds(),a=t.toString(2).padStart(5,"0"),i=n.toString(2).padStart(6,"0"),u=o.toString(2).padStart(6,"0");r(a,"h"),r(i,"m"),r(u,"s")}};var r=function(e,t){for(var n=0;n<e.length;n++){var r=document.getElementById(t+n);"1"==e.substring(n,n+1)?r.style.height="100%":r.style.height="0%"}}},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.makeUpdateTime=void 0;var r=e("./analog.js"),o=function(e){return e>=0&&e<5.625?"N":e<16.875?"NbE":e<28.125?"NNE":e<39.375?"NEbN":e<50.625?"NE":e<61.875?"NEbE":e<73.125?"ENE":e<84.375?"EbN":e<95.625?"E":e<106.875?"EbS":e<118.125?"ESE":e<129.375?"SEbE":e<140.625?"SE":e<151.875?"SEbS":e<163.125?"SSE":e<174.375?"SbE":e<185.625?"S":e<196.875?"SbW":e<208.125?"SSW":e<219.375?"SWbS":e<230.625?"SW":e<241.875?"SWbW":e<253.125?"WSW":e<264.375?"WbS":e<275.625?"W":e<286.875?"WbN":e<298.125?"WNW":e<309.375?"NWbW":e<320.625?"NW":e<331.875?"NWbN":e<343.125?"NNW":e<354.375?"NbW":e<=360?"N":void 0};n.makeUpdateTime=function(e,t,n){return function(){var a=new Date,i=a.getHours(),u=a.getMinutes(),c=a.getSeconds(),d=a.getMilliseconds(),s=o(360*(0,r.hourHandFraction)(i,u,c)),l=o(360*(0,r.minHandFraction)(u,c)),m=o(360*(0,r.secHandFraction)(c,d));e.innerText=s,t.innerText=l,n.innerText=m,void 0===m&&console.log(360*c)}}},{"./analog.js":1}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e,t,n){return e/t*n};n.makeUpdateTime=function(e){return function(){var t=new Date,n=t.getHours(),o=t.getMinutes(),a=t.getSeconds(),i="#"+Math.floor(r(n,24,255)).toString(16).padStart(2,"0")+Math.floor(r(o,60,255)).toString(16).padStart(2,"0")+Math.floor(r(a,60,255)).toString(16).padStart(2,"0");e.style.backgroundColor=i}}},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e,t,n){return function(){var r=new Date,o=r.getHours(),a=r.getMinutes(),i=r.getSeconds(),u=r.getMilliseconds()+1e3*i+60*a*1e3+60*o*60*1e3,c=Math.floor(u/864e4);u%=864e4;var d=Math.floor(u/86400);u%=86400;var s=Math.floor(u/864);e.innerText=c.toString().padStart(2,"0"),t.innerText=d.toString().padStart(2,"0"),n.innerText=s.toString().padStart(2,"0")}}},{}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(){return function(){var e=new Date,t=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0"),r=e.getSeconds().toString().padStart(2,"0"),o=new Array(6),a=new Array(10);o[0]=parseInt(t.substr(0,1)),o[1]=parseInt(t.substr(1,2)),o[2]=parseInt(n.substr(0,1)),o[3]=parseInt(n.substr(1,2)),o[4]=parseInt(r.substr(0,1)),o[5]=parseInt(r.substr(1,2));for(var i=0;i<10;i++)a[i]=0;o.map(function(e){a[e]++});for(var u=0;u<10;u++)document.getElementById(u+1).innerText=a[u]}}},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e,t,n){return function(){var r=new Date,o=r.getHours(),a=r.getMinutes(),i=r.getSeconds();e.innerText=(24-o).toString().padStart(2,"0"),t.innerText=(60-a).toString().padStart(2,"0"),n.innerText=(60-i).toString().padStart(2,"0")}}},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e,t,n){return function(){var r=new Date,o=r.getHours(),a=r.getMinutes(),i=r.getSeconds(),u=60*a+i,c=i/60*100,d=u/3600*100,s=(3600*o+u)/86400*100;e.style.width=s+"%",t.style.width=d+"%",n.style.width=c+"%"}}},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e){return function(){var t=new Date,n=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0"),a=t.getSeconds().toString().padStart(2,"0"),i=new Array(6),u=document.createElement("div");u.className="segment";var c=document.createElement("div");c.className="segment-fill",u.appendChild(c),i[0]=parseInt(n.substr(0,1)),i[1]=parseInt(n.substr(1,2)),i[2]=parseInt(o.substr(0,1)),i[3]=parseInt(o.substr(1,2)),i[4]=parseInt(a.substr(0,1)),i[5]=parseInt(a.substr(1,2));for(var d=0;d<6;d++){for(var s=r(i[d]);e[d].firstChild;)e[d].removeChild(e[d].firstChild);for(var l=0;l<s;l++)e[d].appendChild(u.cloneNode(!0))}}};var r=function(e){switch(e){case 1:return 2;case 2:case 3:return 5;case 4:return 4;case 5:case 6:return 5;case 7:return 3;case 8:return 7;case 9:return 5;case 0:return 6;default:return 10}}},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e>9?""+e:"0"+e},o=function(e,t){return r(e)+":"+r(t)},a=function(){for(var e=[],t=0;t<1440;t++){var n=t,r=Math.floor(n/60),a=n%60;e.push(o(r,a))}return e},i=function(e){var t=e.split("");return t.splice(2,1),t.map(function(e){return Number.parseInt(e)}).reduce(function(e,t){return e+t},0)},u=(n.makeUpdateTime=function(e,t){return function(){var n=new Date,r=n.getHours(),a=n.getMinutes(),c=o(r,a),d=i(c),s=u[d].findIndex(function(e){return e===c})+1;e.innerText=d,t.innerText=s}},void 0);n.setup=function(){u=new Array(26);for(var e=0;e<u.length;e++)u[e]=[];a().map(function(e){u[i(e)].push(e)})}},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.makeUpdateTime=function(e){return function(){var t=new Date;e.innerText=t.getTime().toString()}}},{}]},{},[4]);
//# sourceMappingURL=maps/app.js.map
