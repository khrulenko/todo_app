(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),l=c(7),s=c.n(l),a=(c(13),c(14),c(15),c(3)),i=c(8),r=c(2),u=o.a.createContext(),d=c(0),j=function(e){var t=e.todo,c=Object(n.useContext)(u).changeTodoStatus,o=Object(n.useContext)(u).removeTodo,l=Object(n.useContext)(u).changeTodoTitle,s=Object(n.useContext)(u).filters,a=Object(n.useState)(!1),i=Object(r.a)(a,2),j=i[0],b=i[1],f=Object(n.useState)(t.title),h=Object(r.a)(f,2),p=h[0],m=h[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:(t.completed?s.Completed:"")+(j?" editing ":""),children:[Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){return c(t.id)}}),Object(d.jsx)("label",{onDoubleClick:function(){return b(!0)},children:t.title}),Object(d.jsx)("button",{type:"button",className:"destroy",onClick:function(){return o(t.id)}})]}),j&&Object(d.jsx)("input",{type:"text",className:"edit",id:"editingInput",name:"editInput",value:p,autoFocus:!0,onChange:function(e){return m(e.target.value)},focus:!0,onKeyDown:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),p.trim().length>0?l(t.id,p):m(t.title),b(!1)),"Escape"===e.key&&b(!1)}(e)},onBlur:function(e){return function(e){p.trim().length>0?l(t.id,p):m(t.title),b(!1),"Escape"===e.key&&b(!1)}(e)}})]},t.id)})},b=function(e){var t=e.toDosToShow;return Object(d.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(d.jsx)(j,{todo:e})}))})},f=function(e){var t=e.todos,c=e.filters,n=e.setTodos,o=e.active,l=e.statusToShow,s=e.setStatusToShow;return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsxs)("span",{className:"todo-count",children:[o.length," ","items left"]}),Object(d.jsxs)("ul",{className:"filters",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/",className:l===c.All?"selected":"",onClick:function(){return s(c.All)},onKeyDown:function(e){e.preventDefault(),s(c.All)},children:"All"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/active",className:l===c.Active?"selected":"",onClick:function(){return s(c.Active)},onKeyDown:function(e){e.preventDefault(),s(c.Active)},children:"Active"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/completed",className:l===c.Completed?"selected":"",onClick:function(){return s(c.Completed)},onKeyDown:function(e){e.preventDefault(),s(c.Completed)},children:"Completed"})})]}),o.length!==t.length&&Object(d.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){return n(o)},children:"Clear completed"})]})},h=function(e){var t=e.setIsAcceptVisible,c=e.changeAllTodosStatus;return Object(d.jsx)("div",{className:"accept-container",children:Object(d.jsxs)("div",{className:"accept",children:[Object(d.jsx)("p",{className:"accept__text",children:"Mark all as:"}),Object(d.jsxs)("div",{className:"accept__buttons",children:[Object(d.jsx)("button",{className:"accept__button",onClick:function(){c(!0),t(!1)},children:"completed"}),Object(d.jsx)("button",{className:"accept__button",onClick:function(){c(!1),t(!1)},children:"active"}),Object(d.jsx)("button",{className:"accept__button accept__button-can\u0441el",onClick:function(){return t(!1)},children:"can\u0441el"})]})]})})};function p(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],o=t[1],l={All:"all",Active:"active",Completed:"completed"},s=Object(n.useState)(l.All),j=Object(r.a)(s,2),p=j[0],m=j[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),g=x[0],v=x[1],N=Object(n.useState)(!1),C=Object(r.a)(N,2),S=C[0],k=C[1],y=c.filter((function(e){return!1===e.completed})),A=c.filter((function(e){return!0===e.completed}));Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("todos"))&&o(JSON.parse(localStorage.getItem("todos")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);return Object(d.jsx)(u.Provider,{value:{filters:l,changeTodoStatus:function(e){o(c.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){o(c.filter((function(t){return t.id!==e})))},changeTodoTitle:function(e,t){o(c.map((function(c){return c.id===e?Object(a.a)(Object(a.a)({},c),{},{title:t}):c})))}},children:Object(d.jsxs)("section",{className:"todoapp",children:[S&&Object(d.jsx)(h,{setIsAcceptVisible:k,changeAllTodosStatus:function(e){o(c.map((function(t){return Object(a.a)(Object(a.a)({},t),{},{completed:e})}))),p!==l.All&&m(e?l.Completed:l.Active)}}),Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"todos"}),Object(d.jsx)("form",{children:Object(d.jsx)("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:g,onChange:function(e){return v(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g.trim().length>0&&(o([].concat(Object(i.a)(c),[{title:g,id:+new Date,completed:!1}])),v("")))}})})]}),Object(d.jsxs)("section",{className:"main",children:[c.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:0===y.length,onClick:function(){return k(!0)}}),Object(d.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]}),Object(d.jsx)(b,{toDosToShow:function(){switch(p){case l.Completed:return A;case l.Active:return y;default:return c}}()})]}),c.length>0&&Object(d.jsx)(f,{filters:l,todos:c,setTodos:o,active:y,statusToShow:p,setStatusToShow:m})]})})}s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5224a265.chunk.js.map