(function(){"use strict";var e={4740:function(e,t,a){var n=a(9242),r=a(3396);const o={class:"Nav"},i=(0,r._)("div",{class:"logo"},null,-1),l=[i],c={class:"navbar"},u={class:"Links"},s=(0,r.Uk)("Home"),v=(0,r.Uk)(" | "),d=(0,r.Uk)("About");function p(e,t){const a=(0,r.up)("router-link"),n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",o,[(0,r._)("div",{class:"logoContainer",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},l),(0,r._)("div",c,[(0,r._)("div",u,[(0,r.Wm)(a,{to:"/"},{default:(0,r.w5)((()=>[s])),_:1}),v,(0,r.Wm)(a,{to:"/contact"},{default:(0,r.w5)((()=>[d])),_:1})])])]),(0,r.Wm)(n)],64)}var h=a(89);const g={},f=(0,h.Z)(g,[["render",p]]);var m=f,k=a(678),b=a(7139);const _=e=>((0,r.dD)("data-v-477e2263"),e=e(),(0,r.Cn)(),e),w={class:"home"},j={class:"Top_Text"},x=_((()=>(0,r._)("h1",{class:"Title"},"Bienvenue",-1))),y=_((()=>(0,r._)("h3",{class:"subTitle"},"Nos services:",-1))),C={class:"container"},O=["index","onClick"],D={class:"NameBorder"};function H(e,t,a,n,o,i){return(0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("div",j,[x,y,(0,r._)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.images,((t,a)=>((0,r.wg)(),(0,r.iD)("div",{index:a,class:(0,b.C_)(["image",t.link]),onClick:a=>e.$router.push(t.target)},[(0,r._)("p",D,(0,b.zw)(t.name),1)],10,O)))),256))])])])}const T={class:"hello"},E=(0,r.uE)('<p data-v-1935ec24> For a guide and recipes on how to configure / customize this project,<br data-v-1935ec24> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vue-cli documentation</a>. </p><h3 data-v-1935ec24>Installed CLI Plugins</h3><ul data-v-1935ec24><li data-v-1935ec24><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1935ec24>babel</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1935ec24>router</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1935ec24>vuex</a></li></ul><h3 data-v-1935ec24>Essential Links</h3><ul data-v-1935ec24><li data-v-1935ec24><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>Core Docs</a></li><li data-v-1935ec24><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>Forum</a></li><li data-v-1935ec24><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>Community Chat</a></li><li data-v-1935ec24><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1935ec24>Twitter</a></li><li data-v-1935ec24><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>News</a></li></ul><h3 data-v-1935ec24>Ecosystem</h3><ul data-v-1935ec24><li data-v-1935ec24><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vue-router</a></li><li data-v-1935ec24><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vuex</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1935ec24>vue-devtools</a></li><li data-v-1935ec24><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1935ec24>vue-loader</a></li><li data-v-1935ec24><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1935ec24>awesome-vue</a></li></ul>',7);function I(e,t,a,n,o,i){return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("h1",null,(0,b.zw)(a.msg),1),E])}var P={name:"HelloWorld",props:{msg:String}};const W=(0,h.Z)(P,[["render",I],["__scopeId","data-v-1935ec24"]]);var L=W,N={name:"HomeView",components:{HelloWorld:L},data:function(){return{images:[{name:"Enregistrement",link:"link1",target:"/contact"},{name:"Mix",link:"link2",target:"/contact"},{name:"Mastering",link:"link3",target:"/contact"},{name:"Instrumental",link:"link4",target:"/contact"}]}}};const Y=(0,h.Z)(N,[["render",H],["__scopeId","data-v-477e2263"]]);var Z=Y;const z={class:"test"},F=(0,r._)("h2",null,"page en cours de développement... ",-1),M=[F];function U(e,t,a,n,o,i){return(0,r.wg)(),(0,r.iD)("div",z,M)}var B={};const S=(0,h.Z)(B,[["render",U]]);var $=S;const q=(0,k.p7)({history:(0,k.PO)(),routes:[{name:"Home",path:"/",component:Z},{name:"contact",path:"/contact",component:$}]}),A=document.querySelector(".first");window.addEventListener("scroll",(()=>{A.style.backgroundPositionY=window.scrollY/2+"px"}));var K=q;const V=(0,n.ri)(m);V.use(K),V.mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],l=n[1],c=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var s=c(a)}for(t&&t(n);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},n=self["webpackChunkdeonstudio"]=self["webpackChunkdeonstudio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4740)}));n=a.O(n)})();
//# sourceMappingURL=app.d63a1199.js.map