if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const l=e=>r(e,n),c={module:{uri:n},exports:t,require:l};s[n]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"jsalva-portfolio"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/REPO_NAME/css/app.58b00d07.css",revision:null},{url:"/REPO_NAME/index.html",revision:"9e377f2f06b0061bda3945bcbb4dec7e"},{url:"/REPO_NAME/js/app.c28d8f13.js",revision:null},{url:"/REPO_NAME/js/chunk-vendors.65a7842e.js",revision:null},{url:"/REPO_NAME/manifest.json",revision:"0f446a737f090729dfbafe701e23d6e8"},{url:"/REPO_NAME/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map