import{_,o as s,c as d,a as o,t as i,q as l,s as c,u as m,b as r,F as p}from"./entry.0a9b234f.js";const h={name:"dropdown",props:["title","description","embed"],data(){return{showDropdown:!1}}},f={class:"labelAndIcon"},w={class:"label"},b={class:"icon"},g={key:0,class:"document"},v=["src"];function A(u,n,e,k,t,I){const a=m;return s(),d("div",{class:"documentFrame",onClick:n[0]||(n[0]=D=>t.showDropdown=!t.showDropdown)},[o("div",f,[o("div",w,[o("h1",null,i(e.title),1),o("h2",null,i(e.description),1)]),o("div",b,[t.showDropdown?c("",!0):(s(),l(a,{key:0,class:"downArrow",name:"ic:baseline-arrow-right",color:"black",size:"30%"})),t.showDropdown?(s(),l(a,{key:1,class:"downArrow",name:"ic:baseline-arrow-drop-down",color:"black",size:"30%"})):c("",!0)])]),t.showDropdown?(s(),d("div",g,[o("iframe",{src:e.embed},null,8,v)])):c("",!0)])}const x=_(h,[["render",A],["__scopeId","data-v-696af6f8"]]),y={},C=o("h1",null,"This page contains documents used by Cal Animage officials",-1);function N(u,n){const e=x;return s(),d(p,null,[C,r(e,{title:"Network Information",description:"Information on the current status of how many clubs there are as well as locations",embed:"https://docs.google.com/document/d/e/2PACX-1vRPp4dr3Ttf39ghquFy3NN4C4Zs-nKWIEsPSCy8Hamd3MI9RGosRAPGNvu8V07gxoARXLIYERA7OGGr/pub?embedded=true"}),r(e,{title:"Network Charter",description:"Official constitution of the Cal Animage network",embed:"https://docs.google.com/document/d/e/2PACX-1vRPp4dr3Ttf39ghquFy3NN4C4Zs-nKWIEsPSCy8Hamd3MI9RGosRAPGNvu8V07gxoARXLIYERA7OGGr/pub?embedded=true"}),r(e,{title:"Official Members Sheet",description:"The most up-to-date sheet on current members for the year",embed:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQEtV0cEo8VZGxbA8VvgdSKxzqxjM2OjEcsuV75Ng3PNmF14FWcvSJUl8l0-2quupGYguxnCKjbSDif/pubhtml?widget=true&headers=false"})],64)}const P=_(y,[["render",N]]);export{P as default};