import{_ as $}from"./member_card.6565e4ad.js";import{M as y}from"./member_data.62f8bb29.js";import{_ as i,o as t,c as n,a as c,F as p,v,b as s,p as m,f as h,d as g,t as I,w as f,x as M,y as C,z as N,T as k,u as z}from"./entry.caa7b0c5.js";const A={data(){return{member_data:y}}},T={class:"wrapper"},E={class:"grid"},D={class:"content"},S={class:"duplicated_content"};function G(e,d,l,x,a,u){const _=$;return t(),n("div",T,[c("div",E,[(t(!0),n(p,null,v(a.member_data,(r,o)=>(t(),n("div",D,[s(_,{class:"card",member:r,index:o},null,8,["member","index"])]))),256)),(t(!0),n(p,null,v(a.member_data,(r,o)=>(t(),n("div",S,[s(_,{class:"card",member:r,index:o},null,8,["member","index"])]))),256))])])}const j=i(A,[["render",G],["__scopeId","data-v-299ba349"]]);const F={},R=e=>(m("data-v-86da85a1"),e=e(),h(),e),V={className:"mission"},Z=R(()=>c("h1",null,"The Cal Animage Network (CAN) is one of the largest Japanese animation, or anime club communities, including thousands of members all over the world. Enroll with your club now to be among countless passionate anime aficionados across the globe.",-1)),B=[Z];function Y(e,d){return t(),n("div",V,B)}const Q=i(F,[["render",Y],["__scopeId","data-v-86da85a1"]]);const J={},L=e=>(m("data-v-018938a2"),e=e(),h(),e),U={className:"announcements"},P=L(()=>c("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTz=1&showTabs=0&showPrint=1&showDate=1&showNav=0&mode=AGENDA&showCalendars=0&src=MzE0NDMxZTFhMzNlYmQ1MGM1MTVmODM5MmQxNjg4MDA4MDA5ZGE1MjMyNzMyZTY3ZjM5MzZlMjJlNGQzZTYyMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E",style:{"border-width":"0"},width:"800",height:"400",frameborder:"0",scrolling:"no"},null,-1)),q=[P];function H(e,d){return t(),n("div",U,q)}const O=i(J,[["render",H],["__scopeId","data-v-018938a2"]]);const W={name:"gallery",props:["pictures","folder","caption"],data(){return{currentIndex:0}},methods:{nextImage(){this.currentIndex=(this.currentIndex+1)%this.pictures.length},prevImage(){this.currentIndex=this.currentIndex===0?this.pictures.length-1:this.currentIndex-1}}},K={class:"gallery"},X={class:"image-carousel"},ee={class:"imgContainer"},te=["src"],ne={class:"carousel-controls"};function se(e,d,l,x,a,u){const _=z;return t(),n("div",K,[g(I(l.caption)+" ",1),c("div",X,[c("div",ee,[s(k,{name:"fade",tag:"div",appear:""},{default:f(()=>[(t(!0),n(p,null,v(l.pictures,(r,o)=>M((t(),n("img",{key:o,src:"/animage.moe/"+l.folder+"/"+r,alt:"picture",style:N({zIndex:o===a.currentIndex?1:0}),class:"carousel-image"},null,12,te)),[[C,o===a.currentIndex]])),128))]),_:1})]),c("div",ne,[s(_,{name:"ic:baseline-arrow-left",onClick:u.prevImage,color:"white",size:"50px",class:"carousel-arrow left"},{default:f(()=>[g("←")]),_:1},8,["onClick"]),s(_,{name:"ic:baseline-arrow-right",onClick:u.nextImage,color:"white",class:"carousel-arrow right",size:"50px"},{default:f(()=>[g("←")]),_:1},8,["onClick"])])])])}const oe=i(W,[["render",se],["__scopeId","data-v-77d7a029"]]);const ce={},ae=e=>(m("data-v-d4b67093"),e=e(),h(),e),_e={class:"map"},re=ae(()=>c("iframe",{src:"https://www.google.com/maps/d/embed?mid=1nRp4RbVJwb9nQHRbhoUVLtzoy20qd44&ehbc=2E312F",width:"640",height:"480"},null,-1)),ie=[re];function de(e,d){return t(),n("div",_e,ie)}const le=i(ce,[["render",de],["__scopeId","data-v-d4b67093"]]),ue=["uci_drawpile.png","konshuu.png","newsletter.png"],pe=["animaid.png","anime_destiny.jpg","anime_fest.png"],me={art:ue,events:pe};const he={data(){return{picture_data:me}}},ge=e=>(m("data-v-bc7b0127"),e=e(),h(),e),fe=ge(()=>c("h1",null,"Galleries",-1)),ve={class:"galleries"};function xe(e,d,l,x,a,u){const _=j,r=Q,o=O,b=oe,w=le;return t(),n(p,null,[s(_),s(r),s(o),fe,c("div",ve,[s(b,{pictures:a.picture_data.art,folder:"artwork",caption:"Artwork"},null,8,["pictures"]),s(b,{pictures:a.picture_data.events,folder:"event_art",caption:"Events"},null,8,["pictures"])]),s(w)],64)}const ye=i(he,[["render",xe],["__scopeId","data-v-bc7b0127"]]);export{ye as default};
