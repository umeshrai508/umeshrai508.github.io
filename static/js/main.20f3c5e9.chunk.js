(this.webpackJsonppl28_figma_datavis=this.webpackJsonppl28_figma_datavis||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/home.373154a0.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/SectionGraphics.9dcaa121.svg"},,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/LogoTnC.cd76c452.png"},,,function(e,a,t){e.exports=t.p+"static/media/icon_costa.282c090d.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_greggs.26e8e6f6.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_nero.ba474c07.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_muffin.296a0312.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_paul.f73e20f6.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_starbuck.70f59637.svg"},,,,,,,,,,,,,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(18),r=t.n(s),o=t(13),l=t(2),i=(t(45),t(12)),m=t.n(i),d=t(19),u=t.n(d);var p=function(e){return c.a.createElement("aside",{className:e.class},e.children)},f=t(20),_=t(21),g=t(28),h=10,E=80,b=70,C=10,v=500-b-C,T=300-h-E,N=function(){function e(a){Object(f.a)(this,e);this.g=g.a(a).append("svg").attr("class","TnC-map__svg").attr("width",v+b+C).attr("height",T+h+E).append("g").attr("transform","translate(".concat(b,", ").concat(h,")")),this.update()}return Object(_.a)(e,[{key:"update",value:function(){}}]),e}(),S=function(){var e=Object(n.useRef)(null),a=Object(n.useState)(null),t=Object(l.a)(a,2),s=t[0],r=t[1];return Object(n.useEffect)((function(){s?s.update():r(new N(e.current))}),[s]),c.a.createElement("div",{className:"chart-area",ref:e})},k=t(22),O=t.n(k),j=t(23),x=t.n(j),y=t(24),w=t.n(y),L=t(25),H=t.n(L),F=t(26),G=t.n(F),I=t(27),B=t.n(I),M=Object(n.createContext)(),P=function(e){var a=null,t=e.brand;switch(e.brand){case"costa":a=O.a;break;case"greggs":a=x.a;break;case"nero":a=w.a;break;case"muffin":a=H.a;break;case"paul":a=G.a;break;case"starbuck":a=B.a;break;default:a=null}return c.a.createElement(M.Consumer,null,(function(e){return c.a.createElement("img",{className:"TnC-map__brand-logo",src:a,alt:"".concat(a," icon"),onClick:function(){var a;a=event,console.log(a),document.querySelectorAll(".TnC-map__brand-logo").forEach((function(e){e.classList.remove("active-brand")})),a.target.classList.add("active-brand"),e.setBrand(t)}})}))},R=["costa","greggs","nero","muffin","paul","starbuck"];var q=function(){return R.map((function(e){return c.a.createElement(P,{key:e,brand:e})}))};var A=function(){return c.a.createElement("main",{className:"TnC-map"},c.a.createElement("div",{className:"TnC-map__wrapper"},c.a.createElement("div",{className:"TnC-map__map"},c.a.createElement("h2",{className:"TnC-map__heading"},"The density of COFFEE SHOPS per city, ",c.a.createElement("br",null),"borough and district across the UK"),c.a.createElement("h3",{className:"TnC-map__subheading"},"(The deeper the colour = the higher the per capita density of selected coffee shop brand)"),c.a.createElement(S,null),c.a.createElement("h4",{className:"TnC-aside__selected-place--attr"},"Select a Coffee Shop:")),c.a.createElement("div",{className:"TnC-map__brands"},c.a.createElement(q,null))))},J=t(7),K=t.n(J),U=(t(17),function(e){return console.log(e.selectedEl),c.a.createElement("div",{className:"option",onClick:e.updateSelected("hello")},c.a.createElement("input",{type:"radio",className:"TnC__option radio",id:e.location,name:"dropdown"}),c.a.createElement("label",{htmlFor:e.location},e.location))});var z=function(){var e=Object(n.useRef)(null),a=Object(n.useState)(!1),t=Object(l.a)(a,2),s=(t[0],t[1],Object(n.useState)("")),r=Object(l.a)(s,2),o=r[0],i=r[1];return console.log(o),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"select-box",onClick:function(a){console.log(a.target),console.log(e.current.innerHTML),document.querySelector(".options-container").classList.toggle("active")}},c.a.createElement("div",{className:"options-container"},c.a.createElement(U,{updateSelected:i,selectedEl:e,location:"Camden"}),c.a.createElement(U,{updateSelected:i,selectedEl:e,location:"Camden"}),c.a.createElement(U,{updateSelected:i,selectedEl:e,location:"Camden"})),c.a.createElement("div",{ref:e,className:"selected"},"Select Location")))};var D=function(){console.log(m.a);var e=Object(n.useState)({brand:"starbuck",place:"camden",setBrand:function(e){return s(Object(o.a)(Object(o.a)({},t),{},{brand:e}))}}),a=Object(l.a)(e,2),t=a[0],s=a[1];return c.a.createElement("div",{className:"TnC"},c.a.createElement(M.Provider,{value:t},c.a.createElement(p,{class:"TnC__aside TnC__aside--left"},c.a.createElement("div",{className:"TnC__HeadingContainer",style:{backgroundImage:"url(".concat(m.a,")"),backgroundSize:"auto 30em",backgroundRepeat:"no-repeat"}},c.a.createElement("h1",{className:"TnC__heading"},"Coffee Shops Index")),c.a.createElement("div",{className:"u__space-around--col"},c.a.createElement("p",{className:"TnC__paragraph--left1"},"Does the value of your home determine the brand of coffee shops you'll have convenient access to?"),c.a.createElement("p",{className:"TnC__paragraph--left2"},"Our Coffee Shops Index uncovers correlations between the location and density of 7 of the most popular coffee shops in the UK and average house prices for 392 cities, boroughs and districts."),c.a.createElement("div",{className:"TnC__LogoGraphics",style:{marginTop:"5em"}},c.a.createElement("img",{className:"TnC__LogoGraphics--left",src:u.a,alt:"Section Graphics"})))),c.a.createElement(A,null),c.a.createElement(p,{class:"TnC-aside TnC__aside--right"},c.a.createElement("div",{className:"TnC-aside TnC-aside__section-right TnC-aside__section-right--1"},c.a.createElement(z,null)),c.a.createElement("div",{className:"TnC-aside TnC-aside__section-right TnC-aside__section-right--2"},c.a.createElement("h3",{className:"TnC-aside__selected-place--name"},"Camden"),c.a.createElement(P,{brand:t.brand}),c.a.createElement("h4",{className:"TnC-aside__selected-place--attr"},"Average House Price"),c.a.createElement("img",{className:"TnC-aside__icon TnC-aside__icon--home",src:K.a,alt:"Home icon"}),c.a.createElement("h4",{className:"TnC-aside__selected-place--attr"},"Number of Starbucks per 100,000 people"),c.a.createElement("img",{className:"TnC-aside__icon TnC-aside__icon--home",src:K.a,alt:"Home icon"}),c.a.createElement("h4",{className:"TnC-aside__selected-place--attr"},"Most poular Coffee Shops in the area"),c.a.createElement("img",{className:"TnC-aside__icon TnC-aside__icon--home",src:K.a,alt:"Home icon"})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.20f3c5e9.chunk.js.map