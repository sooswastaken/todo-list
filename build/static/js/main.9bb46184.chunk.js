(this["webpackJsonpsoosbot-dashboard"]=this["webpackJsonpsoosbot-dashboard"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),r=o(6),s=o.n(r),a=o(5),l=o(7),i=o(0);function u(t){var e=t.todo,o=t.toggleTodo;return Object(i.jsxs)("label",{class:"container",children:[e.name,Object(i.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){o(e.id)}}),Object(i.jsx)("span",{class:"checkmark"})]})}function d(t){var e=t.todos,o=t.toggleTodo;return e.map((function(t){return Object(i.jsx)(u,{toggleTodo:o,todo:t},t.id)}))}var j=o(16),b="todoApp.todos";var f=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),o=e[0],c=e[1],r=Object(n.useRef)();return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(b));t&&c(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem(b,JSON.stringify(o))}),[o]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"content",children:[Object(i.jsx)("div",{class:"todos",children:Object(i.jsx)(d,{todos:o,toggleTodo:function(t){var e=Object(a.a)(o),n=e.find((function(e){return e.id===t}));n.complete=!n.complete,c(e)}})}),Object(i.jsx)("input",{ref:r,type:"text",placeholder:"Type here"}),Object(i.jsx)("button",{class:"button normal",onClick:function(t){var e=r.current.value;""!==e&&(console.log(e),r.current.value=null,c((function(t){return[].concat(Object(a.a)(t),[{id:Object(j.a)(),name:e,complete:!1}])})))},children:"Add todo"}),Object(i.jsx)("button",{class:"button normal",onClick:function(){var t=o.filter((function(t){return!t.complete}));c(t)},children:"Clear Completed"}),Object(i.jsx)("button",{class:"button important",onClick:function(){c([])},children:"Reset"}),Object(i.jsxs)("div",{class:"counter",children:[o.filter((function(t){return!t.complete})).length," left to do"]})]})})};o(13);s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9bb46184.chunk.js.map