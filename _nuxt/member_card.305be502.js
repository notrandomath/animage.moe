import{_ as o,o as a,c as s,b as c,w as m,a as t,t as _,F as r,e as i}from"./entry.0a9b234f.js";const d={name:"member_card",props:["member","index"]},l={class:"card"},b={class:"imgContainer"},u=["src"],x={class:"name"};function h(p,f,e,g,v,y){const n=i;return a(),s(r,null,[c(n,{to:{path:"member_info",query:{index:e.index}},member:e.member},{default:m(()=>[t("div",l,[t("div",b,[t("img",{src:"club_logos/"+e.member.logo,alt:"pic"},null,8,u)]),t("h2",x,_(e.member.name),1)])]),_:1},8,["to","member"]),t("h2",null,_(e.member.location),1)],64)}const B=o(d,[["render",h],["__scopeId","data-v-652175b4"]]);export{B as _};