import{u as i,r,f as l,o as s,c as o,b as a,F as _,q as p,p as u,i as w,t as g}from"./vendor.833e96eb.js";import{_ as v,w as h}from"./index.35628137.js";const m={setup(){console.log("Mint.setup"),i();const e=r(),n=r(),c=r(!0);return l(async()=>{const t=await ethereum.request({method:"eth_requestAccounts"});e.value=t[0],console.log(e.value),n.value=await h(t[0]),c.value=!1}),{loading:c,tokens:n,account:e}}},y=e=>(u("data-v-4a6024ce"),e=e(),w(),e),f={class:"w3-display-container",id:"my"},k={class:"w3-container w3-padding-32"},b=y(()=>a("h1",{class:"w3-padding-16"},"My Dogs",-1)),x={key:0,class:"loader"},M={key:1,class:"w3-row-padding"},B={class:"w3-col l3 m6 s6 w3-margin-bottom"},I={class:"label w3-display-topmiddle w3-green w3-padding"},S=["src"];function q(e,n,c,t,j,D){return s(),o("div",f,[a("div",k,[b,t.loading?(s(),o("div",x)):(s(),o("div",M,[(s(!0),o(_,null,p(t.tokens,d=>(s(),o("div",B,[(s(),o("div",{key:d,class:"dogs w3-display-container"},[a("div",I,g(d),1),a("img",{src:"https://www.cooldognft.club/dog/"+d+".png"},null,8,S)]))]))),256))]))])])}var A=v(m,[["render",q],["__scopeId","data-v-4a6024ce"]]);export{A as default};
