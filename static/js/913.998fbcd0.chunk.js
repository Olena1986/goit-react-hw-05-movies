"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[913],{913:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var c,i=n(439),r=n(791),a=n(243),o=n(87),u=n(168),s={SearchWrap:n(444).ZP.div(c||(c=(0,u.Z)(["\nmargin-top: 10px;\n\n"])))},h=n(184),l=function(){var e=(0,r.useState)(""),t=(0,i.Z)(e,2),n=t[0],c=t[1],u=(0,r.useState)([]),l=(0,i.Z)(u,2),d=l[0],p=l[1],f=(0,r.useState)(!1),v=(0,i.Z)(f,2),g=v[0],x=v[1],_=0===d.length&&g;return(0,h.jsxs)("div",{children:[(0,h.jsxs)(s.SearchWrap,{children:[(0,h.jsx)("input",{type:"text",value:n,onChange:function(e){c(e.target.value)},placeholder:"Enter a keyword"}),(0,h.jsx)("button",{onClick:function(){a.Z.get("http://api.themoviedb.org/3/search/movie?api_key=".concat("9477f76437eb927cec9a7f94dd098501","&query=").concat(n)).then((function(e){p(e.data.results),x(!0)})).catch((function(e){console.log(e)}))},children:"Search"})]}),d.length>0?(0,h.jsx)("ul",{children:d.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))}):_&&(0,h.jsx)("p",{children:"No movies found."})]})}}}]);
//# sourceMappingURL=913.998fbcd0.chunk.js.map