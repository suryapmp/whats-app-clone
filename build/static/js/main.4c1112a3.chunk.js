(this["webpackJsonpwhatsapp-clone-web"]=this["webpackJsonpwhatsapp-clone-web"]||[]).push([[0],{58:function(e,a,t){e.exports=t(85)},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=(t(63),t(11)),s=(t(64),t(65),t(99)),m=t(50),i=t.n(m),u=t(49),d=t.n(u),p=t(35),h=t.n(p),E=t(36),f=t.n(E),v=(t(66),t(28)),b=t.n(v),g=b.a.initializeApp({apiKey:"AIzaSyAhLAq72mQE0XSLTJi0JQ9W_4hPRnSq0Ms",authDomain:"whatsapp-web-app.firebaseapp.com",databaseURL:"https://whatsapp-web-app.firebaseio.com",projectId:"whatsapp-web-app",storageBucket:"whatsapp-web-app.appspot.com",messagingSenderId:"447625592535",appId:"1:447625592535:web:7b12f05af214069d62fa92",measurementId:"G-0WQ68D5888"}),_=g.firestore(),w=g.auth(),N=new b.a.auth.GoogleAuthProvider,j=t(26);var O=function(e){var a,t=e.addChat,r=e.id,l=e.name,m=Object(n.useState)(""),i=Object(o.a)(m,2),u=i[0],d=i[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),E=h[0],f=h[1];return Object(n.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),Object(n.useEffect)((function(){r&&_.collection("rooms").doc(r).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[r]),t?c.a.createElement("div",{onClick:function(){var e=prompt("Enter A name");e&&_.collection("rooms").add({name:e})},className:"chats"},c.a.createElement("h2",null,"Add New Chat")):c.a.createElement(j.b,{to:"/rooms/".concat(r)},c.a.createElement("div",{className:"chats"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"chats__info"},c.a.createElement("h3",null,l),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.message))))},y=Object(n.createContext)(),S=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(y.Provider,{value:Object(n.useReducer)(a,t)},r)},k=function(){return Object(n.useContext)(y)};var C=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=k(),m=Object(o.a)(l,2),u=m[0].user;return m[1],Object(n.useEffect)((function(){var e=_.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===u||void 0===u?void 0:u.photoURL}),c.a.createElement("div",{className:"sidebar__headerright"},c.a.createElement(d.a,null),c.a.createElement(i.a,null),c.a.createElement(h.a,null))),c.a.createElement("div",{className:"siebar__search"},c.a.createElement("div",{className:"sidebar__searchcontainer"},c.a.createElement(f.a,null),c.a.createElement("input",{placeholder:"chats",type:"text"}))),c.a.createElement("div",{className:"sidebar__chhatsGroups"},c.a.createElement(O,{addChat:!0}),t.map((function(e){return c.a.createElement(O,{key:e.id,id:e.id,name:e.data.name})}))))},A=(t(82),t(53)),W=t.n(A),I=t(51),D=t.n(I),T=t(52),x=t.n(T),M=t(54),R=t.n(M),U=t(4);var B=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],m=r[1],i=Object(U.f)().roomid,u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],E=d[1],v=Object(n.useState)([]),g=Object(o.a)(v,2),w=g[0],N=g[1],j=k(),O=Object(o.a)(j,2),y=O[0].user;return O[1],Object(n.useEffect)((function(){i&&(_.collection("rooms").doc(i).onSnapshot((function(e){return E(e.data().name)})),_.collection("rooms").doc(i).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return N(e.docs.map((function(e){return e.data()})))})))}),[i]),c.a.createElement("div",{className:"chatroom"},c.a.createElement("div",{className:"chatroom__header"},c.a.createElement(s.a,null),c.a.createElement("div",{className:"chatroom__headerinfoleft"},c.a.createElement("h3",null,p),c.a.createElement("p",null,"last seen"," ",new Date(null===(e=w[w.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chatroom__header__inforight"},c.a.createElement(f.a,null),c.a.createElement(D.a,null),c.a.createElement(h.a,null))),c.a.createElement("div",{className:"chatroom__body"},w.map((function(e){var a;return c.a.createElement("p",{className:"chatroom__message ".concat(e.name===y.displayName&&"chatroom__messagerecierver")},c.a.createElement("span",{className:"chatroom__username"},e.name),e.message,c.a.createElement("span",{className:"chatroom__messagetimestamp "},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chatroom__footer"},c.a.createElement(x.a,null),c.a.createElement("form",null,c.a.createElement("input",{value:l,onChange:function(e){return m(e.target.value)},placeholder:"Type your message here"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),_.collection("rooms").doc(i).collection("messages").add({message:l,name:y.displayName,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),m("")},type:"submit"},c.a.createElement(W.a,null))),c.a.createElement(R.a,null)))},G=(t(83),t(98)),J=t(40),L="SET_USER",P=function(e,a){switch(console.log(a),a.type){case L:return Object(J.a)(Object(J.a)({},e),{},{user:a.user});default:return e}},Q=t(55),q=t.n(Q);t(84);var z=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"footer"},c.a.createElement("a",{className:"",href:"https://github.com/surya2505"},c.a.createElement(q.a,{className:"github__logo"})),c.a.createElement("h3",null,"Made by surya | 2021"),c.a.createElement("p",null,c.a.createElement("strong",null,"Made Using React")),c.a.createElement("p",null,"I do not own WhatsApp brand & logo, this web app clone was created only to learn & show my skills in creating web applications and will never be used for commercial purposes.")))};var F=function(){var e=k(),a=Object(o.a)(e,2),t=(a[0].user,a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__body"},c.a.createElement("img",{alt:"whats app logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png"}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Welcome To WhatsApp Clone")),c.a.createElement(G.a,{onClick:function(){w.signInWithPopup(N).then((function(e){t({type:L,user:e.user})})).catch((function(e){return alert(e.message)}))}},"SignIn with Google"),c.a.createElement(z,null)))};var K=function(){var e=k(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__container"},c.a.createElement(j.a,null,c.a.createElement(C,null),c.a.createElement(U.c,null,c.a.createElement(U.a,{path:"/rooms/:roomid"},c.a.createElement(B,null)),c.a.createElement(U.a,{path:"/"},c.a.createElement(B,null))))):c.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,{initialState:{user:null},reducer:P},c.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.4c1112a3.chunk.js.map