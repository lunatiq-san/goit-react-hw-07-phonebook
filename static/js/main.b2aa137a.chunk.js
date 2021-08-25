(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={list:"ContactList_list__2xAus",item:"ContactList_item__1JgX1",btn:"ContactList_btn__12dj7",loader:"ContactList_loader__3Bv9a"}},20:function(t,e,n){t.exports={label:"Filter_label__3Ts-l",input:"Filter_input__2c6fp"}},30:function(t,e,n){t.exports={container:"Container_container__2M0Q3"}},76:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),u=n(30),i=n.n(u),s=n(1),b=function(t){var e=t.children;return Object(s.jsx)("div",{className:i.a.container,children:e})},l=n(21),j=n(7),f=n(8),d=n.n(f),O=n(11),m=n.n(O),h=n(3),p=Object(h.b)("contacts/fetchContactsRequest"),C=Object(h.b)("contacts/fetchContactsSuccess"),_=Object(h.b)("contacts/fetchContactsError"),g=Object(h.b)("contacts/addContactRequest"),x=Object(h.b)("contacts/addContactSuccess"),v=Object(h.b)("contacts/addContactError"),F=Object(h.b)("contacts/deleteContactRequest"),N=Object(h.b)("contacts/deleteContactSuccess"),y=Object(h.b)("contacts/deleteContactError"),L=Object(h.b)("contacts/changeFilter");m.a.defaults.baseURL=" http://localhost:4040";var w,S,k=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(g()),m.a.post("/contacts",c).then((function(e){var n=e.data;return t(x(n))})).catch((function(e){return t(v(e))}))}},A=function(t){return function(e){e(F(t)),m.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(y(t))}))}},q=function(){return function(t){t(p()),m.a.get("/contacts").then((function(e){var n=e.data;console.log(n),t(C(n))})).catch((function(e){return t(_(e))}))}},z=n(13),B=function(t){return t.contacts.filter},D={getLoading:function(t){return t.contacts.loading},getFilter:B,getVisibleContacts:Object(z.a)([function(t){return t.contacts.items},B],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},E=n(5),J=n(15),R=n(4),Z=Object(h.c)([],(w={},Object(E.a)(w,C,(function(t,e){return e.payload})),Object(E.a)(w,x,(function(t,e){return[].concat(Object(J.a)(t),[e.payload])})),Object(E.a)(w,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),M=Object(h.c)(!1,(S={},Object(E.a)(S,g,(function(){return!0})),Object(E.a)(S,x,(function(){return!1})),Object(E.a)(S,v,(function(){return!1})),Object(E.a)(S,F,(function(){return!0})),Object(E.a)(S,N,(function(){return!1})),Object(E.a)(S,y,(function(){return!1})),Object(E.a)(S,p,(function(){return!0})),Object(E.a)(S,C,(function(){return!1})),Object(E.a)(S,_,(function(){return!1})),S)),K=Object(h.c)("",Object(E.a)({},L,(function(t,e){return e.payload}))),P=Object(R.b)({items:Z,filter:K,loading:M});var T=Object(j.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(k(e))}}}))((function(t){var e=t.onSubmit,n=t.contacts,a=Object(c.useState)(""),r=Object(l.a)(a,2),o=r[0],u=r[1],i=Object(c.useState)(""),b=Object(l.a)(i,2),j=b[0],f=b[1],O=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":f(c);break;default:return}},m=function(){u(""),f("")};return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={name:o,number:j};n.find((function(t){return o.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(o," is already in contacts")):e(c),m()},className:d.a.form,children:[Object(s.jsxs)("label",{className:d.a.label,children:["Name",Object(s.jsx)("input",{className:d.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:O})]}),Object(s.jsxs)("label",{className:d.a.label,children:["Number",Object(s.jsx)("input",{className:d.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:O})]}),Object(s.jsx)("button",{className:d.a.btn,type:"submit",children:"Add contact"})]})})),V=n(31),X=n.n(V),G=n(16),I=n.n(G),Q=Object(j.b)((function(t){return{contacts:D.getVisibleContacts(t),isLoadingContacts:D.getLoading(t)}}),(function(t){return{onDeleteContact:function(e){return t(A(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact,a=t.isLoadingContacts,r=Object(j.c)();return Object(c.useEffect)((function(){r(q())}),[r]),Object(s.jsxs)(s.Fragment,{children:[a&&Object(s.jsx)(X.a,{type:"Puff",color:"#00BFFF",height:50,width:50,className:"loader"}),Object(s.jsx)("ul",{className:I.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(s.jsxs)("li",{className:I.a.item,name:c,children:[c,": ",a,Object(s.jsx)("button",{className:I.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})})),U=n(20),W=n.n(U),$=Object(j.b)((function(t){return{value:D.getFilter(t)}}),(function(t){return{onChange:function(e){return t(L(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(s.jsxs)("label",{className:W.a.label,children:["Find contacts by name",Object(s.jsx)("input",{className:W.a.input,type:"text",value:e,onChange:n})]})}));var H=function(){return Object(s.jsxs)(b,{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(T,{}),Object(s.jsx)("h2",{children:"Contacts"}),Object(s.jsx)($,{}),Object(s.jsx)(Q,{})]})},Y=n(9),tt=Object(J.a)(Object(h.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),et=Object(h.a)({reducer:{contacts:P},middleware:tt,devtools:!1});n(76);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(j.a,{store:et,children:Object(s.jsx)(H,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__3hWZD",label:"ContactForm_label__S10Ft",input:"ContactForm_input__15dBK",btn:"ContactForm_btn__2AXGK"}}},[[77,1,2]]]);
//# sourceMappingURL=main.b2aa137a.chunk.js.map