(this.webpackJsonpyoutubereact=this.webpackJsonpyoutubereact||[]).push([[0],{163:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),i=(a(87),a(7)),o=(a(163),a(15)),m=a(55),u=a.n(m),s=a(80),p=a(81),E=a.n(p);a(182);var d=function(e){var t=Object(n.useState)(void 0),a=Object(o.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),d=p[0],h=p[1],v=function(){var t=Object(s.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.split("=")[1],t.next=4,E.a.get("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCQPdwWm__RUz9Hhh7GtVmmfYjTciYQxbk&part=snippet,statistics&id=".concat(a));case 4:n=t.sent,l(n),void 0!==c&&0!==c.data.items.length&&e.onItemUpdate(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(i.i,null,r.a.createElement(i.j,null,r.a.createElement("label",{htmlFor:"Link",className:"Link-input"},"Enter the Youtube Link"),r.a.createElement(i.k,{id:"Link",onChange:function(e){return h(e.target.value)}}),r.a.createElement("label",{htmlFor:"Link",className:"Link-input"},"Choose the Category"),r.a.createElement(i.l,null,r.a.createElement("option",{value:"first"},"Cooking"),r.a.createElement("option",{value:"second"},"Electrical")),r.a.createElement(i.a,{pill:!0,theme:"primary",className:"margin20",onClick:v},"Search"))))};a(183);var h=function(e){var t=Object(n.useState)(e.Title),a=Object(o.a)(t,2),c=(a[0],a[1],Object(n.useState)(e.Image)),l=Object(o.a)(c,2),m=l[0],u=l[1];return Object(n.useEffect)((function(){u(e.Image)}),[e.Image]),r.a.createElement("div",{className:"Preview-notice"},r.a.createElement(i.b,{className:"Preview-notice-inner"},r.a.createElement(i.d,null,"Video Information"),null===m?r.a.createElement(i.e,{src:"https://place-hold.it/300x200"}):r.a.createElement(i.e,{src:m.url,style:{height:"250px"}}),r.a.createElement(i.c,null,r.a.createElement(i.f,null,e.Title))))};var v=function(){var e=Object(n.useState)("No data"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),m=Object(o.a)(l,2),u=m[0],s=m[1];return r.a.createElement("div",{style:{marginTop:"50px"}},r.a.createElement(i.h,null,r.a.createElement(i.o,null,r.a.createElement(i.g,{sm:"12",lg:"6"},r.a.createElement(d,{onItemUpdate:function(e){c(e.data.items[0].snippet.title),s(e.data.items[0].snippet.thumbnails.medium)}})),r.a.createElement(i.g,{sm:"12",lg:"6"},r.a.createElement(h,{Title:a,Image:u})))))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.m,{type:"dark",theme:"primary",expand:"md"},r.a.createElement(i.n,null,"Youtube Link App")),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(184),a(185);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a(187)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.a36dd72e.chunk.js.map