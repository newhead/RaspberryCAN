(()=>{"use strict";var e={891:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=s(r(127)),i=s(r(622)),n=s(r(747)),u=i.default.resolve(__dirname,"../../config.json"),l=JSON.parse(n.default.readFileSync(u,"utf-8")),a=l.port||80,f=i.default.resolve(__dirname,"../../client/dist"),d=i.default.resolve(f,"views"),p=i.default.resolve(f,"public"),c=o.default();c.use(o.default.static(p)),c.set("view engine","pug"),c.set("views",d),c.listen(a,(function(){console.log("Server running at http://localhost:"+a)})),c.get("/",(function(e,t){t.render("home",{config:l})}))},127:e=>{e.exports=require("express")},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")}},t={};!function r(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,r),i.exports}(891)})();