import{_ as a,k as f,l as b,c as i,a as s,t as o,h as r,d as _,g as u,w as p,o as t}from"./entry.84734641.js";import{M as d}from"./member_data.a0915c2d.js";import{A as h}from"./affiliate_data.49da8b85.js";let c=0,n=!1;const g={setup(){const m=f();m.query.index?c=m.query.index:c=0,m.query.affiliate?n=m.query.affiliate:n=!1},data(){return{member:n?h[c]:d[c]}}},y={class:"memberPage"},k={class:"frame"},x={key:0},v={class:"artworksFrame"},A=["src"],w=["src"],B={class:"info"},E={class:"websiteText"},I=["href"],M={key:0},T={key:1},q={key:2,class:"description"},C={key:3,class:"description"};function D(m,F,N,V,e,L){const l=b("credit");return t(),i("div",y,[s("div",k,[s("h1",null,o(e.member.name),1),e.member.affiliate?r("",!0):(t(),i("div",x,[s("h5",null,"Est. "+o(e.member.join),1),s("h5",null,"Location: "+o(e.member.location),1)])),s("div",v,[s("img",{class:"logoImage",src:(e.member.affiliate?"affiliate_logos/":"club_logos/")+e.member.logo,alt:"pic"},null,8,A),e.member.mascot?(t(),i("img",{key:0,class:"mascotImage",src:(e.member.affiliate?"affiliate_logos/":"club_logos/")+e.member.mascot,alt:"pic"},null,8,w)):r("",!0)]),s("div",B,[s("p",E,[_("Main page: "),s("a",{href:e.member.website},o(e.member.website),9,I)]),e.member.mascot_name?(t(),i("p",M,[_("Mascot: "+o(e.member.mascot_name),1),e.member.mascot_credit?(t(),u(l,{key:0},{default:p(()=>[_(" by "+o(e.member.mascot_credit),1)]),_:1})):r("",!0)])):r("",!0),e.member.misc_credit?(t(),i("p",T,o(e.member.misc_credit),1)):r("",!0),e.member.affiliate?r("",!0):(t(),i("p",q,o(e.member.description),1)),e.member.affiliate?(t(),i("h2",C,o(e.member.description),1)):r("",!0)])])])}const S=a(g,[["render",D],["__scopeId","data-v-231e5cf1"]]);export{S as default};