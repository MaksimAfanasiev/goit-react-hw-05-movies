"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{687:function(n,e,t){t.d(e,{Jh:function(){return l},TP:function(){return p},XT:function(){return h},_r:function(){return d},z5:function(){return f}});var r=t(683),c=t(861),u=t(757),a=t.n(u),s="cdeffe013ca7b4d45618860232929251",i="https://api.themoviedb.org/3",o="/movie/",f=function(){var n=(0,c.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat("/trending/movie/day","?api_key=").concat(s)).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,c.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat("/search/movie","?api_key=").concat(s,"&query=").concat(e)).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,c.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(o).concat(e,"?api_key=").concat(s)).then((function(n){return n.json()})).then((function(n){var e=n.genres.map((function(n){return n.name}));return(0,r.Z)((0,r.Z)({},n),{},{genres:e})}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,c.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(o).concat(e,"/credits?api_key=").concat(s)).then((function(n){return n.json()})).then((function(n){return n.cast}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(o).concat(e,"/reviews?api_key=").concat(s)).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},135:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(885),c=t(791),u=t(501),a=t(871),s=t(687),i="MovieDetails_addSection__EZbyM",o="MovieDetails_addLinks__lp1W+",f=t(184),h=function(){var n,e,t=(0,a.UO)().movieId,h=(0,c.useState)({}),p=(0,r.Z)(h,2),l=p[0],d=p[1],v=(0,a.s0)(),x=null!==(n=null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";(0,c.useEffect)((function(){(0,s.TP)(t).then(d)}),[t]);var j=l.title,m=l.vote_average,w=l.overview,k=l.genres,_=l.poster_path,b=l.release_date,y=new Date(b).getFullYear(),g=_?"https://image.tmdb.org/t/p/w500"+_:"";return j&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{type:"button",onClick:function(){return v(x)},children:"Go back"}),(0,f.jsxs)("h1",{children:[j," (",y,")"]}),(0,f.jsxs)("p",{children:["User score: ",Math.round(10*m),"%"]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:w}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{children:k.join(", ")}),(0,f.jsx)("img",{src:g,alt:"Poster"})]}),(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{className:o,children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(c.Suspense,{children:(0,f.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=135.b6c0f867.chunk.js.map