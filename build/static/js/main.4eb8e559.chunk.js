(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=t(4),l=t(2),i=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.addPerson,t=e.handlePersonChange,a=e.handleNumberChange,o=e.name,u=e.number;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:o,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.persons,t=e.newFilter,a=e.killPerson,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",null,o.map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e.id)}}," delete"))})))},d=t(3),f=t.n(d),h="api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},v=function(e){return f.a.post(h,e).then((function(e){return e.data}))},g=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},p=(t(37),function(e){var n=e.message,t=e.error;return null===n&&null===t?null:null!==n?r.a.createElement("div",{className:"error"},n):null!==t?r.a.createElement("div",{className:"megaError"},t):void 0}),w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),f=d[0],h=d[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),O=C[0],j=C[1],k=Object(a.useState)(""),S=Object(l.a)(k,2),P=S[0],y=S[1],L=Object(a.useState)(null),F=Object(l.a)(L,2),N=F[0],T=F[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),J=I[0],x=I[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var A=function(e){var n=t.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})).id;e=Object(c.a)(Object(c.a)({},e),{},{id:n}),g(n,e).then((function(e){o(t.map((function(t){return t.id!==n?t:e}))),h(""),j(""),T("Changed ".concat(e.name," number to ").concat(O)),setTimeout((function(){T(null)}),2500)})).catch((function(a){400===a.response.status?(T(a.response.data.errorMessage),setTimeout((function(){T(null)}),2e3)):(o(t.filter((function(e){return e.id!==n}))),x("Information of '".concat(e.name,"' was already removed from server")),setTimeout((function(){x(null)}),2500),h(""),j(""))}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:N,error:J}),r.a.createElement(i,{value:P,handleFilterChange:function(e){console.log(e.target.value),y(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{addPerson:function(e){e.preventDefault(),console.log("button clicked",e.target);var n={name:f,number:O,date:(new Date).toISOString()};t.every((function(e){return e.name.toLowerCase()!==f.toLowerCase()}))?v(n).then((function(e){o(t.concat(e)),h(""),j(""),T("Added ".concat(e.name)),setTimeout((function(){T(null)}),2500)})):window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&A(n)},handlePersonChange:function(e){console.log(e.target.value),h(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),j(e.target.value)},name:f,number:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:t,newFilter:P,killPerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(E(e).then(),o(t.filter((function(n){return e!==n.id}))))}}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4eb8e559.chunk.js.map