"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812],{687:function(n,t,e){e.d(t,{Jh:function(){return m},TP:function(){return h},XT:function(){return p},_r:function(){return v},z5:function(){return f}});var r=e(683),c=e(861),u=e(757),a=e.n(u),o="cdeffe013ca7b4d45618860232929251",s="https://api.themoviedb.org/3",i="/movie/",f=function(){var n=(0,c.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s).concat("/trending/movie/day","?api_key=").concat(o)).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,c.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s).concat("/search/movie","?api_key=").concat(o,"&query=").concat(t)).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,c.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s).concat(i).concat(t,"?api_key=").concat(o)).then((function(n){return n.json()})).then((function(n){var t=n.genres.map((function(n){return n.name}));return(0,r.Z)((0,r.Z)({},n),{},{genres:t})}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,c.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s).concat(i).concat(t,"/credits?api_key=").concat(o)).then((function(n){return n.json()})).then((function(n){return n.cast}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,c.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s).concat(i).concat(t,"/reviews?api_key=").concat(o)).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},812:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r=e(885),c=e(791),u=e(501),a=e(871),o=e(687),s="Searchbox_form__pe3kF",i="Searchbox_form_input__J7RdJ",f="Searchbox_form_button__6z0GP",p=e(184),h=function(n){var t=n.onFormSubmit;return(0,p.jsxs)("form",{className:s,onSubmit:t,children:[(0,p.jsx)("input",{type:"text",name:"query",className:i}),(0,p.jsx)("button",{type:"submit",className:f,children:"Search"})]})},m="MoviesList_moviesList__P6SP5",v="MoviesList_moviesList_item__FhAt8",l=function(n){var t=n.movies,e=(0,a.TH)();return(0,p.jsx)("ul",{className:m,children:t.length>0&&t.map((function(n){var t=n.id,r=n.title;return(0,p.jsx)("li",{className:v,children:(0,p.jsx)(u.rU,{to:"".concat(t),state:{from:e},children:r})},t)}))})},_=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],i=(0,u.lr)(),f=(0,r.Z)(i,2),m=f[0],v=f[1],_=(0,a.UO)().movieId,x=m.get("query");return(0,c.useEffect)((function(){x?(0,o.XT)(x).then(s):s([])}),[x]),_?(0,p.jsx)(c.Suspense,{children:(0,p.jsx)(a.j3,{})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{onFormSubmit:function(n){n.preventDefault(),v({query:n.target.query.value}),n.target.query.value=""}}),(0,p.jsx)(l,{movies:e})]})}}}]);
//# sourceMappingURL=812.d0ec6467.chunk.js.map