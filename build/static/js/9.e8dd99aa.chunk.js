(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{565:function(e,t,a){},626:function(e,t,a){"use strict";a.r(t);var c=a(545),l=a(2),s=a(544),n=a(165),r=a(24),d=(a(565),a(581)),j=a(23),o=function(e){var t=e.setState,a=e.state,c=(e.isNewTeam,e.setIsNewTeam),l=e.setTeams;function o(e){var c=e.target.value;t(Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},e.target.name,c)))}var i=[{value:"andy",label:"Andy"},{value:"Aysha",label:"Aysha"},{value:"Amna",label:"Amna"},{value:"Nancy",label:"Nancy"},{value:"El",label:"Eleven"},{value:"cadillac",label:"Cadillac"}];return Object(j.jsx)("div",{className:"container-fluid px-1 py-5 mx-auto",children:Object(j.jsx)("div",{className:"row d-flex justify-content-center",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"form-card",onsubmit:"event.preventDefault()",children:[Object(j.jsxs)("div",{className:"row justify-content-between text-left",children:[Object(j.jsx)("div",{className:"form-group col-sm-6 flex-column d-flex",children:Object(j.jsxs)("div",{className:"form-group",children:[" ",Object(j.jsx)("label",{for:"form_need",children:"Please select Employees *"}),Object(j.jsx)(d.a,{defaultValue:[i[1],i[2]],isMulti:!0,name:"employees",options:i,className:"basic-multi-select",classNamePrefix:"select"})]})}),Object(j.jsxs)("div",{className:"form-group col-sm-6 flex-column d-flex",children:[" ",Object(j.jsxs)("label",{className:"form-control-label px-3",children:["Project Manager",Object(j.jsx)("span",{className:"text-danger",children:" *"})]})," ",Object(j.jsx)("input",{onChange:o,type:"text",id:"projectManager",name:"projectManager",placeholder:"",onblur:"validate(2)"})," "]})]}),Object(j.jsxs)("div",{className:"row justify-content-between text-left",children:[Object(j.jsxs)("div",{className:"form-group col-sm-6 flex-column d-flex",children:[" ",Object(j.jsxs)("label",{className:"form-control-label px-3",children:["Team Lead",Object(j.jsx)("span",{className:"text-danger",children:" *"})]})," ",Object(j.jsx)("input",{onChange:o,type:"text",id:"teamLead",name:"teamLead",placeholder:"",onblur:"validate(10)"})," "]}),Object(j.jsxs)("div",{className:"form-group col-sm-6 flex-column d-flex",children:[" ",Object(j.jsxs)("label",{className:"form-control-label px-3",children:["Project Name",Object(j.jsx)("span",{className:"text-danger",children:" *"})]})," ",Object(j.jsx)("input",{onChange:o,type:"text",id:"projectName",name:"projectName",placeholder:"",onblur:"validate(9)"})," "]})]}),Object(j.jsxs)("div",{className:"row justify-content-between text-left",children:[Object(j.jsxs)("div",{className:"form-group col-sm-6 flex-column d-flex",children:[" ",Object(j.jsxs)("label",{className:"form-control-label px-3",children:["Enter Start Date",Object(j.jsx)("span",{className:"text-danger",children:" *"})]})," ",Object(j.jsx)("input",{onChange:o,type:"text",id:"date",name:"date",placeholder:"",onblur:"validate(3)"})," "]}),Object(j.jsxs)("div",{className:"form-group col-sm-6 flex-column d-flex",children:[" ",Object(j.jsxs)("label",{className:"form-control-label px-3",children:["Enter End Date",Object(j.jsx)("span",{className:"text-danger",children:" *"})]})," ",Object(j.jsx)("input",{onChange:o,type:"text",id:"edate",name:"edate",placeholder:"",onblur:"validate(4)"})," "]})]}),Object(j.jsxs)("div",{className:"row justify-content-between text-left",children:[Object(j.jsx)("div",{className:"form-group col-sm-6 ",children:Object(j.jsx)("button",{className:"btn-block btn-primary",onClick:function(){t({}),c(!1)},children:"Cancle"})}),Object(j.jsx)("div",{className:"form-group col-sm-6 ",children:Object(j.jsx)("button",{className:"btn-block btn-primary",onClick:function(){l((function(e){return[].concat(Object(s.a)(e),[a])})),c(!1)},children:"Add Employee"})})]})]})})})})};t.default=function(){var e=Object(l.useState)([{Id:1,teamLead:"Ali",client:"Andy",project:12345},{Id:2,teamLead:"Amir",client:"Nancy",project:23456},{Id:3,teamLead:"Suleman",client:"Nathme",project:34567}]),t=Object(c.a)(e,2),a=t[0],s=t[1],n=Object(l.useState)({}),r=Object(c.a)(n,2),d=r[0],i=r[1],b=Object(l.useState)(!1),m=Object(c.a)(b,2),x=m[0],u=m[1];return Object(j.jsx)(j.Fragment,{children:x?Object(j.jsx)(o,{setState:i,state:d,isNewTeam:x,setIsNewTeam:u,setTeams:s}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){i({tid:"",projectManager:"",teamLead:"",projectName:"",date:"",edate:""}),u(!0)},children:"Add Teams"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(j.jsx)("thead",{className:"thead-dark",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Team ID"}),Object(j.jsx)("th",{scope:"col",children:"TeamLead Name"}),Object(j.jsx)("th",{scope:"col",children:"Client Name"}),Object(j.jsx)("th",{scope:"col",children:"Project"})]})}),Object(j.jsx)("tbody",{children:a&&a.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:e.Id}),Object(j.jsx)("td",{children:e.teamLead}),Object(j.jsx)("td",{children:e.client}),Object(j.jsx)("td",{children:e.project})]},e.Id)}))})]})]})})}}}]);
//# sourceMappingURL=9.e8dd99aa.chunk.js.map