"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[570],{570:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var a=n(791),r=n(434),c=n(762),s=n(439),o=n(122),i=function(t){return t.contacts.contacts.items},u=function(t){return t.contacts.contacts.isLoading},l=function(t){return t.contacts.contacts.error},m=function(t){return t.contacts.filter},d="ContactForm_form__dhl+T",h="ContactForm_contactFormLabel__16ABo",f="ContactForm_contactFormInput__eC5HJ",_="ContactForm_contactFormButton__gvoPv",p=n(329),x=function(){var t=(0,a.useState)(""),e=(0,s.Z)(t,2),n=e[0],u=e[1],l=(0,a.useState)(""),m=(0,s.Z)(l,2),x=m[0],b=m[1],v=(0,r.v9)(i),C=(0,r.I0)(),j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":u(a);break;case"number":b(a)}},N=function(){u(""),b("")},F=function(){var t,e={name:n,number:x},a=(0,c.Z)(v);try{for(a.s();!(t=a.n()).done;){if(t.value.name.toLowerCase()===n.toLowerCase())return alert("".concat(n," is already in contacts"))}}catch(r){a.e(r)}finally{a.f()}C((0,o.uK)(e))};return(0,p.jsxs)("form",{className:d,onSubmit:function(t){t.preventDefault(),F(),t.currentTarget.children[2].blur(),N()},children:[(0,p.jsxs)("label",{className:h,children:["Name",(0,p.jsx)("input",{className:f,type:"text",name:"name",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)("label",{className:h,children:["Number",(0,p.jsx)("input",{className:f,type:"tel",name:"number",value:x,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{className:_,type:"submit",children:"Add contact"})]})},b="ContactList_contactList__UFVCg",v="ContactList_contactListItem__3th7-",C="ContactList_contactListButton__3Tc2d",j=function(){var t=(0,r.I0)(),e=(0,r.v9)(i),n=(0,r.v9)(m),a=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase().trim())}));return(0,p.jsx)("ul",{className:b,children:a.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,p.jsxs)("li",{className:v,children:[(0,p.jsx)("span",{children:a}),(0,p.jsx)("span",{children:r}),(0,p.jsx)("button",{className:C,onClick:function(){return t((0,o.GK)(n))},children:"Delete"})]},n)}))})},N=n(31),F="Filter_filter__vxThR",g="Filter_filterInput__1Cysk",y=function(){var t=(0,r.I0)();return(0,p.jsxs)("label",{className:F,children:["Find contacts by name",(0,p.jsx)("input",{className:g,type:"text",onChange:function(e){return t((0,N.x)(e.currentTarget.value))}})]})},L=function(){var t=(0,r.I0)(),e=(0,r.v9)(u),n=(0,r.v9)(l);return(0,a.useEffect)((function(){t((0,o.yF)())}),[t]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Phonebook"}),(0,p.jsx)(x,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(y,{}),e&&!n&&(0,p.jsx)("b",{children:"Request in progress..."}),(0,p.jsx)(j,{})]})}}}]);
//# sourceMappingURL=570.d2e0a8e9.chunk.js.map