(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(7),n=t.n(c),r=t(6),i=t(1);t(13);var l=t(8),s=t(4),o=t.n(s),j=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=function(e,a){for(var t=[],c=1;c<=e;c+=1)t.push(c);return t.slice(0,Math.ceil(t.length/a))}(a,t),i=function(e,a,t){for(var c=[],n=(e-1)*a+1,r=Math.min(e*a,t),i=n;i<=r;i+=1)c.push(i);return c}(c,t,a),s=1===c,d=c===Math.max.apply(Math,Object(l.a)(r));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:s}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":s,onClick:function(){return e=c,void(s||n(e-1));var e},children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===c}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return function(e){e!==c&&n(e)}(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:d}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":d,onClick:function(){return e=c,void(d||n(e+1));var e},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:i.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},h=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(i.useState)(5),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],o=l[1],u=(s-1)*t+1,p=Math.min(s*t,h.length);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(u," - ").concat(p," of ").concat(h.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){c(+e.target.value),o(1)},value:t,children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h.length,perPage:t,currentPage:s,onPageChange:o})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ee862aef.chunk.js.map