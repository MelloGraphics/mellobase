(()=>{"use strict";var e={n:r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return e.d(o,{a:o}),o},d:(r,o)=>{for(var l in o)e.o(o,l)&&!e.o(r,l)&&Object.defineProperty(r,l,{enumerable:!0,get:o[l]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=window.wp.blocks,o=window.wp.domReady;var l=e.n(o);console.log("this is file src/editor/block-styles.js");const a={"core/button":[{name:"primary",label:"Primary"}],"core/details":[{name:"hover-reveal",label:"Hover Reveal"},{name:"tabbed",label:"Tabbed"}],"core/cover":[{name:"blurred",label:"Blurred"},{name:"faded",label:"Faded"}],"core/paragraph":[{name:"icon",label:"Icon"}],"core/navigation":[{name:"mello-menu",label:"Mello Menu"}],"core/navigation-link":[{name:"link-primary",label:"Primary"},{name:"link-box",label:"Box"}],"core/query":[{name:"carousel",label:"Carousel"},{name:"scrollable",label:"Scrollable"}],"core/gallery":[{name:"booklet",label:"Booklet"}],"wpgb/grid":[{name:"large-grid",label:"Large Grid"},{name:"stepped-grid",label:"Stepped Grid"}]};l()((()=>{Object.entries(a).forEach((([e,o])=>{(0,r.registerBlockStyle)(e,o)}))}));const n=window.wp.data,t=[];l()((()=>{if(null!==(0,n.dispatch)("core/edit-post")){const{removeEditorPanel:e}=(0,n.dispatch)("core/edit-post");t.forEach((r=>{e(r)}))}}));const i={"core/button":"outline","core/image":"rounded"};l()((()=>{Object.entries(i).forEach((([e,o])=>{(0,r.unregisterBlockStyle)(e,o)}))}));const c={};l()((()=>{Object.entries(c).forEach((([e,o])=>{(0,r.unregisterBlockVariation)(e,o)}))}));const s=[];l()((()=>{s.forEach((e=>{(0,r.unregisterBlockType)(e)}))})),console.log("this is file src/editor/index.js")})();