"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,c,i,o,s,l,p=n(861),u=n(439),h=n(757),d=n.n(h),f=n(791),m=n(689),v=n(243),g=n(168),x=n(444),Z=x.ZP.div(r||(r=(0,g.Z)(["\n  margin-top: 2rem;\n"]))),w=x.ZP.ul(a||(a=(0,g.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),P=x.ZP.li(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction:column;\n \n"]))),j=x.ZP.img(i||(i=(0,g.Z)(["\n  width: 100px;\n  height: 150px;\n  object-fit: cover;\n  \n"]))),_=x.ZP.img(o||(o=(0,g.Z)(["\n  width: 100px;\n  height: 150px;\n  object-fit: cover;\n  \n"]))),b={CastWrapper:Z,CastList:w,CastItem:P,ActorImage:j,ActorName:x.ZP.p(s||(s=(0,g.Z)(["\n  font-weight: bold;\n"]))),ActorRole:x.ZP.p(l||(l=(0,g.Z)(["\n  margin-top: 0.5rem;\n"]))),PlaceholderImage:_},C=n(184),y=function(){var e=(0,m.UO)().movieId,t=(0,f.useState)([]),n=(0,u.Z)(t,2),r=n[0],a=n[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,p.Z)(d().mark((function t(){var n,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"9477f76437eb927cec9a7f94dd098501",n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("9477f76437eb927cec9a7f94dd098501"),t.next=5,v.Z.get(n);case 5:r=t.sent,a(r.data.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,C.jsx)(b.CastWrapper,{children:r.length>0?(0,C.jsx)(b.CastList,{children:r.map((function(e){return(0,C.jsxs)(b.CastItem,{children:[e.profile_path?(0,C.jsx)(b.ActorImage,{src:"https://image.tmdb.org/t/p/original".concat(e.profile_path),alt:e.name}):(0,C.jsx)(b.PlaceholderImage,{src:"placeholder-image.jpg",alt:"Placeholder"}),(0,C.jsx)(b.ActorName,{children:e.name}),(0,C.jsxs)(b.ActorRole,{children:["Character: ",e.character]})]},e.id)}))}):(0,C.jsx)("p",{children:"We don't have any reviews for this movie."})})}},861:function(e,t,n){function r(e,t,n,r,a,c,i){try{var o=e[c](i),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var i=e.apply(t,n);function o(e){r(i,a,c,o,s,"next",e)}function s(e){r(i,a,c,o,s,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=387.16859f2b.chunk.js.map