"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[898],{6671:function(n,t,e){e.d(t,{Dx:function(){return f},HC:function(){return s},aV:function(){return u}});var r,a,o,i=e(168),c=e(6444),u=c.ZP.ul(r||(r=(0,i.Z)(["\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-wrap: wrap;\n    list-style: none;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"]))),s=c.ZP.li(a||(a=(0,i.Z)(["\n    margin-right: 10px;\n    margin-bottom: 20px;\n    width: 300px;\n    height: 500px;\n    &:hover {\n        transform: scale(1.05);\n        transition-duration: 500ms;\n    }\n"]))),f=c.ZP.h1(o||(o=(0,i.Z)(["\n    text-align: center;\n    margin-top: 50px;\n    margin-bottom: 50px;\n"])))},898:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(907);var a=e(181);function o(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=e(885),c=e(5563),u=e(2791),s=e(6671),f=e(501),p=e(6871),l=e(7368),d=e(184),h=function(){var n=(0,u.useState)(""),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)([]),h=(0,i.Z)(a,2),m=h[0],x=h[1],v=(0,u.useState)(1),g=(0,i.Z)(v,2),y=g[0],b=g[1],w=(0,f.lr)(),Z=(0,i.Z)(w,2),k=Z[0],j=Z[1],S=k.get("query"),_=(0,p.TH)();(0,u.useEffect)((function(){y>1&&(0,c.Ex)(S.toLowerCase(),y).then((function(n){x([].concat(o(m),o(n)))}))}),[y]),(0,u.useEffect)((function(){S?(b(1),r(S),(0,c.Ex)(S.toLowerCase(),y).then((function(n){x(n)}))):(x([]),r(""))}),[S]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.Gq,{action:"",onSubmit:function(n){n.preventDefault(),e&&j({query:e})},children:[(0,d.jsx)(l.Fy,{type:"text",onChange:function(n){r(n.target.value)},value:e,required:!0}),(0,d.jsx)(l.Sn,{type:"submit",children:"Find Movie"})]}),(0,d.jsx)(s.aV,{children:m&&m.map((function(n){var t=n.id,e=n.poster_path,r=n.title;return(0,d.jsx)(f.rU,{state:{from:_},to:"/movies/".concat(t),children:(0,d.jsxs)(s.HC,{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e),alt:"title",width:"300",height:"450"}),(0,d.jsx)("p",{children:r})]},t)})}))}),(0,d.jsx)(l.W2,{children:m.length>0&&(0,d.jsx)(l.Sn,{type:"button",onClick:function(){b((function(n){b(n+1)}))},children:"Load More"})})]})}},7368:function(n,t,e){e.d(t,{Fy:function(){return p},Gq:function(){return f},Sn:function(){return s},W2:function(){return l}});var r,a,o,i,c=e(168),u=e(6444),s=u.ZP.button(r||(r=(0,c.Z)(["\n    background-color: white;\n    color: black;\n    cursor: pointer;\n    &:hover,\n    &:focus {\n        border-color: white;\n        color: white;\n        background-color: #36b5e7;\n    }\n"]))),f=u.ZP.form(a||(a=(0,c.Z)(["\n    width: 100%;\n    padding: 30px 0;\n    display: flex;\n    justify-content: center;\n"]))),p=u.ZP.input(o||(o=(0,c.Z)(["\n    margin-right: 10px;\n    margin-left: 10px;\n"]))),l=u.ZP.div(i||(i=(0,c.Z)(["\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])))},5563:function(n,t,e){e.d(t,{Bt:function(){return d},Ex:function(){return f},H1:function(){return l},Hg:function(){return s},Y5:function(){return p}});var r=e(5861),a=e(7757),o=e.n(a),i=e(4569),c=e.n(i),u="a63e37a24373c68ca9ae486468591e7b";c().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/week?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie?api_key=".concat(u,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"/reviews?api_key=").concat(u,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=898.dcf85ef8.chunk.js.map