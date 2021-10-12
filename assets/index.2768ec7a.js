import{r as m,a as S,o as p,c as u,b as e,d as x,e as O,F as w,g as y,T as E,S as _,W as k,w as b,v as h,f as A,p as M,h as D,i as r,j as I,k as C,l as N}from"./vendor.e41918bd.js";const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}};R();var L="/assets/logo.fdb77e92.png",P="/assets/discord.78efb32e.png",G="/assets/twitter.632900a2.png";var g=(n,t)=>{for(const[l,o]of t)n[l]=o;return n};const z={name:"CoolDog",setup(){return{is_sidebar:m(!1)}},methods:{w3_close(){this.is_sidebar=!this.is_sidebar}}},U={key:0,class:"w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"},H=e("a",{href:"/",onclick:"w3_close()",class:"w3-bar-item w3-button w3-xlarge"}," HOME ",-1),F={class:"w3-bar w3-card"},q={class:"w3-container"},j=e("img",{class:"logo",src:L},null,-1),V=e("div",{class:"w3-right w3-hide-small"},[e("a",{href:"#giveaways",class:"w3-bar-item w3-text-white w3-xlarge"},"GIVEAWAYS"),e("a",{href:"#rarity",class:"w3-bar-item w3-text-white w3-xlarge"}," RARITY"),e("a",{href:"#roadmap",class:"w3-bar-item w3-text-white w3-xlarge"},"ROADMAP"),e("a",{href:"#faq",class:"w3-bar-item w3-text-white w3-xlarge"},"FAQ"),e("a",{href:"https://discord.gg/bQ2fgbaz",class:"w3-bar-item w3-text-white w3-xlarge"},[e("img",{class:"icon",src:P})]),e("a",{href:"https://twitter.com/cooldognft",class:"w3-bar-item w3-text-white w3-xlarge"},[e("img",{class:"icon",src:G})])],-1),W={class:"w3-right"},B=e("i",{class:"fa fa-bars w3-xlarge w3-text-white"},null,-1),K=[B],$=e("footer",{class:"w3-center w3-black w3-padding-16"},[e("p",null,"CoolDog Club")],-1);function X(n,t,l,o,i,s){const a=S("router-view");return p(),u(w,null,[o.is_sidebar?(p(),u("nav",U,[H,e("a",{href:"#giveaways",onClick:t[0]||(t[0]=c=>s.w3_close()),class:"w3-bar-item w3-button"},"GIVEAWAYS"),e("a",{href:"#rarity",onClick:t[1]||(t[1]=c=>s.w3_close()),class:"w3-bar-item w3-button"},"RARITY"),e("a",{href:"#roadmap",onClick:t[2]||(t[2]=c=>s.w3_close()),class:"w3-bar-item w3-button"},"ROADMAP"),e("a",{href:"#faq",onClick:t[3]||(t[3]=c=>s.w3_close()),class:"w3-bar-item w3-button"},"FAQ")])):x("",!0),e("div",F,[e("div",q,[j,V,e("div",W,[e("a",{href:"javascript:void(0)",class:"w3-bar-item w3-hide-large w3-hide-medium",onClick:t[4]||(t[4]=c=>o.is_sidebar=!o.is_sidebar)},K)])])]),O(a,{key:n.$route.fullPath}),$],64)}var Y=g(z,[["render",X]]);const Q="modulepreload",f={},J="/",Z=function(t,l){return!l||l.length===0?t():Promise.all(l.map(o=>{if(o=`${J}${o}`,o in f)return;f[o]=!0;const i=o.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Q,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((c,T)=>{a.addEventListener("load",c),a.addEventListener("error",T)})})).then(()=>t())};var ee=[{inputs:[{internalType:"string",name:"baseURI",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"MAX_COOLDOGS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"_price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"num",type:"uint256"}],name:"adopt",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"give",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"val",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}],te="/assets/intro.ebe7a6c1.gif",ne="/assets/dog.dba4fd4a.png",se="/assets/howcool.992e2097.png",ae="/assets/cost.f6a1afd7.png",oe="/assets/t1.bfa43521.png",ie="/assets/t2.cb8a82b9.png",re="/assets/t3.830dd005.png",le="/assets/t4.8284ebc7.png";const v="0x60b24Cf5469cEc831aB295b08E15581ca26465D0",de={setup(){const n=m(5),t=m(1e-5),l=m(n.value*t.value);return{buycount:n,price:t,payamount:l,address:m("")}},computed(){},mounted(){this.$nextTick(function(){y.registerPlugin(E);var n=["Stylish","Adorable","Mysterious"];y.fromTo(".cursor",{autoAlpha:0},{autoAlpha:1,duration:1,repeat:-1,ease:_.config(3)});var t=y.timeline({ease:_.config(30),opacity:0,repeat:-1}),l=".typewriter-text",o={opacity:1,yoyo:!0,repeat:1,repeatDelay:3};n.forEach(function(i){let s=Object.assign({text:i},o);t.add(y.to(l,s))})}),this.init()},methods:{input_change(n){console.log("change"),this.buycount>20&&(this.buycount=20),this.buycount<1&&(this.buycount=1),this.payamount=this.price*this.buycount},is_metamask_installed(){const{ethereum:n}=window;return Boolean(n&&n.isMetaMask)},init(){console.log("init"),this.is_metamask_installed()?this.connect_metamask():this.install_metamask()},install_metamask(){new MetaMaskOnboarding({forwarderOrigin}).startOnboarding()},async pay(){let n=window.web3;n=new k(n.currentProvider);let t=new n.eth.Contract(ee,v),l=n.utils.toWei(this.payamount.toString()),o=await n.eth.getTransactionCount(this.address,"pending"),i=await t.methods.adopt(this.buycount),s=[{nonce:o.toString(),from:this.address,to:v,gas:"0x3D0900",value:n.utils.toHex(l),data:i.encodeABI()}];console.log("req:",s),window.ethereum.request({method:"eth_sendTransaction",params:s}).then(a=>{console.log(a)}).catch(a=>{console.log(a)})},async connect_metamask(){console.log("connect");try{await window.ethereum.request({method:"eth_requestAccounts"}),this.address=window.ethereum.selectedAddress}catch(n){n.code===-32002?alert("Request was sent.Please finish metamask connection from your metamask browser extension."):console.error(n)}}}},d=n=>(M("data-v-7233962d"),n=n(),D(),n),ce={class:"w3-display-container",id:"home"},pe={class:"w3-container"},ue=d(()=>e("div",{class:"intro w3-row"},[e("div",{class:"w3-col m6 l6 s12"},[e("h1",{class:"welcome w3-text-white"},[r("Welcome To "),e("br"),r("CoolDog")]),e("p",null,[e("span",{class:"typewriter-text"}),e("span",{class:"cursor"},"|")]),e("h3",{class:"w3-text-white w3-hide-medium"},[r(" 9,999 randomly generated NFT on Ethereum blockchain, created to love you unconditionally. "),e("br"),r(" Sale open at 10/20/2021. ")])]),e("div",{class:"w3-col m6 l6 s12 w3-hide-small introimg"},[e("img",{src:te})])],-1)),me={class:"mint w3-row w3-center"},ye={key:0,class:"w3-padding-32"},we=r("x "),_e=d(()=>e("button",{class:"mybtn"},[e("img",{class:"myimg",src:ne})],-1)),be=r(" = "),he=d(()=>e("b",null,"\u039E",-1)),ge=d(()=>e("button",{to:"/my",class:"btn-mydogs"},"My Buddies",-1)),fe={key:1},ve=d(()=>e("br",null,null,-1)),Te=d(()=>e("div",{class:"w3-display-container",id:"giveaways"},[e("div",{class:"w3-container w3-padding-32 w3-center"},[e("h1",null,"Join Our Community"),e("p",null,[r(" To discovery over "),e("span",{class:"w3-text-purple"},"19,000,000"),r(" different CoolDog combinations. "),e("br"),r("We have giveaways and events till minting starts! ")]),e("button",{onclick:"location.href='https://discord.gg/bQ2fgbaz'"}," Discord "),e("button",{onclick:"location.href='https://twitter.com/cooldognft'"}," Twitter ")])],-1)),Se=d(()=>e("div",{class:"w3-display-container",id:"rarity"},[e("div",{class:"w3-container w3-padding-32"},[e("div",{class:"w3-row"},[e("div",{class:"w3-col m6 l6 s12"},[e("h1",null,"How cool is my Dog?"),e("p",null," All dogs are cool! But how rare is your dog? With over 19 million different combination, a point system is put in place to determine the rarity based on the items your CoolDog is made up of. Each dog is scored between 4 and 20 points. ")]),e("div",{class:"w3-col m6 l6 s12"},[e("img",{src:se})])])])],-1)),xe=d(()=>e("div",{class:"w3-display-container",id:"cost"},[e("div",{class:"w3-container w3-padding-32"},[e("div",{class:"w3-row"},[e("div",{class:"w3-col m6 l6 s12"},[e("img",{class:"w3-hide-small",src:ae})]),e("div",{class:"w3-col m6 l6 s12"},[e("h1",null,"How much to they cost to mint?"),e("p",null," With 95% of the CoolDogs priced under 0.1 ETH. A total of 9,999 unique CoolDogs will be minted. "),e("p",null,[e("b",null,"#0 - #499"),r(" : Free Giveaways"),e("br"),e("b",null,"#500 - #1499"),r(": 0.04 \u039E + gas"),e("br"),e("b",null,"#1500 - #3499"),r(": 0.06 \u039E + gas"),e("br"),e("b",null,"#3500 - #7499"),r(": 0.08 \u039E + gas"),e("br"),e("b",null,"#7500 - #9499"),r(": 0.10 \u039E + gas"),e("br"),e("b",null,"#9500 - #9899"),r(": 0.14 \u039E + gas"),e("br"),e("b",null,"#9900 - #9999"),r(": 0.18 \u039E + gas"),e("br")])])])])],-1)),Oe={class:"w3-display-container",id:"cooldogs"},Ee={class:"w3-container w3-padding-32"},ke=d(()=>e("h1",{class:"w3-padding-16"},"COLLECTION",-1)),Ae={class:"w3-row-padding"},Me={class:"w3-col l3 m6 s6 w3-margin-bottom"},De={class:"dogs w3-display-container"},Ie=["src"],Ce=d(()=>e("div",{class:"w3-purple w3-display-container",id:"roadmap"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",null,"Roadmap"),e("p",null," Lovh ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],-1)),Ne=d(()=>e("div",{class:"w3-display-container",id:"faq"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",null,"FAQ"),e("div",{class:"w3-card"},[e("header",{class:"w3-container"}," What\u2019s an NFT? how can I get started? "),e("div",{class:"answer w3-container"},[e("p",null," An NFT stands for \u201CNon-fungible token\u201D and is a fancy way of saying it\u2019s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a \u201Cmembers\u201D card. "),e("p",null," Get a Metamask chrome extension.https://metamask.io/ Load it with ETH through services that allow you to change your money to ETH like Coinbase Pro or Paypal. Finally, click the button on the Sticky banner and approve the transaction on Metamask. Voila! ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"},"Are CoolDogs a good investment?"),e("div",{class:"answer w3-container"},[e("p",null," Well, first of all, CoolDogs are not Mona Lisas so... it depends. Use your own judgment. Dogs do have a bonding curve but please don\u2019t spend your food money on this. Not financial advice. ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"},"What can I do with my CoolDogs?"),e("div",{class:"answer w3-container"},[e("p",null," You are free to do anything with them under a non-exclusive license. ")])]),e("div",{class:"w3-card"},[e("header",{class:"w3-container"}," This sounds awesome, how do I get involved? "),e("div",{class:"answer w3-container"},[e("p",null," Head over to the Discord, jump in on the conversation and let us know your ideas! ")])])])],-1)),Re=d(()=>e("div",{class:"w3-display-container",id:"team"},[e("div",{class:"w3-container w3-padding-32"},[e("h1",{class:"w3-padding-16"},"Teams"),e("div",{class:"w3-row-padding"},[e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:oe}),e("h3",null,"David"),e("p",{class:"w3-opacity"},"Tech. Guru")])]),e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:ie}),e("h3",null,"Zion"),e("p",{class:"w3-opacity"},"Block Chain Expert")])]),e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:re}),e("h3",null,"Gabriel"),e("p",{class:"w3-opacity"},"Marketing Specialist")])]),e("div",{class:"w3-col l3 m6 s6"},[e("div",{class:"teams w3-display-container"},[e("img",{src:le}),e("h3",null,"Lee"),e("p",{class:"w3-opacity"},"Artist")])])])])],-1));function Le(n,t,l,o,i,s){return p(),u(w,null,[e("div",ce,[e("div",pe,[ue,e("div",me,[o.address?(p(),u("h1",ye,[e("div",null,[b(e("input",{class:"i-count",type:"number",min:"1",max:"20","onUpdate:modelValue":t[0]||(t[0]=a=>o.buycount=a),onChange:t[1]||(t[1]=(...a)=>s.input_change&&s.input_change(...a)),onKeyup:t[2]||(t[2]=(...a)=>s.input_change&&s.input_change(...a))},null,544),[[h,o.buycount]]),we,_e,be,b(e("input",{readonly:"",class:"i-amount",type:"number","onUpdate:modelValue":t[3]||(t[3]=a=>o.payamount=a)},null,512),[[h,o.payamount]]),he]),e("button",{onClick:t[4]||(t[4]=a=>s.pay()),class:"btn-mint"},"MINT!"),ge])):(p(),u("h1",fe,[ve,e("button",{onClick:t[5]||(t[5]=a=>s.connect_metamask()),class:"btn-mint"}," CONNECT METAMASK ")]))])])]),Te,Se,xe,e("div",Oe,[e("div",Ee,[ke,e("div",Ae,[(p(),u(w,null,A([1,2,3,4,5,6,7,8],a=>e("div",Me,[e("div",De,[e("img",{src:"/src/assets/dog"+a+".png"},null,8,Ie)])])),64))])])]),Ce,Ne,Re],64)}var Pe=g(de,[["render",Le],["__scopeId","data-v-7233962d"]]);const Ge=[{path:"/",name:"Home",component:Pe},{path:"/mint",name:"Mint",component:()=>Z(()=>import("./Mint.23dd1652.js"),["assets/Mint.23dd1652.js","assets/Mint.0962c18a.css","assets/vendor.e41918bd.js"])}],ze=I({history:C({LESSOPEN:"| /usr/bin/lesspipe %s",USER:"dawson",npm_config_user_agent:"npm/7.20.3 node/v16.6.2 linux x64 workspaces/false",XDG_SEAT:"seat0",SSH_AGENT_PID:"2268",XDG_SESSION_TYPE:"x11",GIT_ASKPASS:"/usr/share/code/resources/app/extensions/git/dist/askpass.sh",npm_node_execpath:"/usr/local/bin/node",SHLVL:"2",npm_config_noproxy:"",QT4_IM_MODULE:"ibus",HOME:"/home/dawson",CHROME_DESKTOP:"code-url-handler.desktop",OLDPWD:"/home/dawson/cooldog",TERM_PROGRAM_VERSION:"1.60.2",DESKTOP_SESSION:"i3",npm_package_json:"/home/dawson/cooldog/web/package.json",GTK_MODULES:"gail:atk-bridge",VSCODE_GIT_ASKPASS_MAIN:"/usr/share/code/resources/app/extensions/git/dist/askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"/usr/share/code/code",npm_config_userconfig:"/home/dawson/.npmrc",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus",COLORTERM:"truecolor",COLOR:"1",NVM_DIR:"/home/dawson/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",MANDATORY_PATH:"/usr/share/gconf/i3.mandatory.path",GTK_IM_MODULE:"ibus",LOGNAME:"dawson",_:"/usr/local/bin/npx",npm_config_prefix:"/usr/local",XDG_SESSION_CLASS:"user",DEFAULTS_PATH:"/usr/share/gconf/i3.default.path",USERNAME:"dawson",TERM:"xterm-256color",XDG_SESSION_ID:"2",npm_config_target_os:"android",npm_config_cache:"/home/dawson/.npm",WINDOWPATH:"2",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/dawson/cooldog/web/node_modules/.bin:/home/dawson/cooldog/node_modules/.bin:/home/dawson/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/dawson/cooldog/web/node_modules/.bin:/home/dawson/gems/bin:/home/dawson/miniconda3/bin:/home/dawson/bin:/home/dawson/.local/share/solana/install/active_release/bin:/home/dawson/Android/Sdk/platform-tools:/home/dawson/.local/bin:/home/dawson/gems/bin:/home/dawson/miniconda3/bin:/home/dawson/bin:/home/dawson/.local/share/solana/install/active_release/bin:/home/dawson/Android/Sdk/platform-tools:/home/dawson/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/dawson/ops/bin:/home/dawson/.local/bin:robo3t/bin:/home/dawson/ops/bin:/home/dawson/.local/bin:robo3t/bin",NODE:"/usr/local/bin/node",npm_package_name:"cooldogs",XDG_RUNTIME_DIR:"/run/user/1000",GDK_BACKEND:"x11",DISPLAY:":1",LANG:"en_US.UTF-8",XDG_CURRENT_DESKTOP:"i3",XMODIFIERS:"@im=ibus",XDG_SESSION_DESKTOP:"i3",XAUTHORITY:"/run/user/1000/gdm/Xauthority",LS_COLORS:"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",VSCODE_GIT_IPC_HANDLE:"/run/user/1000/vscode-git-c9b771edcd.sock",TERM_PROGRAM:"vscode",npm_lifecycle_script:'vite "build"',SSH_AUTH_SOCK:"/tmp/ssh-HI9xs9bU3oau/agent.2202",ORIGINAL_XDG_CURRENT_DESKTOP:"i3",SHELL:"/bin/bash",npm_package_version:"0.0.0",npm_lifecycle_event:"npx",QT_ACCESSIBILITY:"1",GDMSESSION:"i3",GEM_HOME:"/home/dawson/gems",LESSCLOSE:"/usr/bin/lesspipe %s %s",GPG_AGENT_INFO:"/run/user/1000/gnupg/S.gpg-agent:0:1",QT_IM_MODULE:"ibus",XDG_VTNR:"2",npm_config_globalconfig:"/usr/local/etc/npmrc",npm_config_init_module:"/home/dawson/.npm-init.js",PWD:"/home/dawson/cooldog/web",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npx-cli.js",XDG_CONFIG_DIRS:"/etc/xdg/xdg-i3:/etc/xdg",CLUTTER_IM_MODULE:"ibus",NVM_CD_FLAGS:"",XDG_DATA_DIRS:"/usr/share/i3:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",PYTHONPATH:":/usr/lib/python3/dist-packages:/usr/lib/python3/dist-packages",npm_command:"exec",I3SOCK:"/run/user/1000/i3/ipc-socket.2202",BREAKPAD_DUMP_LOCATION:"/home/dawson/.config/Code/exthost Crash Reports",NVM_RC_VERSION:"",INIT_CWD:"/home/dawson/cooldog/web",EDITOR:"vi",NODE_ENV:"production"}.BASE_URL),routes:Ge});N(Y).use(ze).mount("#app");export{g as _};
