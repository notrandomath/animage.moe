import{_ as l,k as a,l as d,c,a as s,t as o,h as m,d as _,g as b,w as u,o as t}from"./entry.ade7d662.js";import{M as p}from"./member_data.1a141a3a.js";let n=0;const h={setup(){const r=a();r.query.index?n=r.query.index:n=0},data(){return{member:p[n]}}},f={class:"memberPage"},g={class:"frame"},x={class:"artworksFrame"},y=["src"],k=["src"],v={class:"info"},w={class:"websiteText"},B=["href"],M={key:0},E={key:1},C={class:"description"};function I(r,N,T,V,e,q){const i=d("credit");return t(),c("div",f,[s("div",g,[s("h1",null,o(e.member.name),1),s("div",null,[s("h5",null,"Est. "+o(e.member.join),1),s("h5",null,"Location: "+o(e.member.location),1)]),s("div",x,[s("img",{class:"logoImage",src:"club_logos/"+e.member.logo,alt:"pic"},null,8,y),e.member.mascot?(t(),c("img",{key:0,class:"mascotImage",src:"club_logos/"+e.member.mascot,alt:"pic"},null,8,k)):m("",!0)]),s("div",v,[s("p",w,[_("Main page: "),s("a",{href:e.member.website},o(e.member.website),9,B)]),e.member.mascot_name?(t(),c("p",M,[_("Mascot: "+o(e.member.mascot_name),1),e.member.mascot_credit?(t(),b(i,{key:0},{default:u(()=>[_(" by "+o(e.member.mascot_credit),1)]),_:1})):m("",!0)])):m("",!0),e.member.misc_credit?(t(),c("p",E,o(e.member.misc_credit),1)):m("",!0),s("p",C,o(e.member.description),1)])])])}const R=l(h,[["render",I],["__scopeId","data-v-d9641bd2"]]);export{R as default};
