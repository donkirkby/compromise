var t={methods:{one:{},two:{},three:{}},model:{one:{},two:{},three:{}},compute:{},hooks:[]};const e={compute:function(t){const{docs:e,world:n}=this,r=n.compute;return"string"==typeof t&&r.hasOwnProperty(t)?r[t](e,n):(t=>"[object Array]"===Object.prototype.toString.call(t))(t)?t.forEach(t=>n.compute.hasOwnProperty(t)&&r[t](e,n)):"function"==typeof t?t(this.docs,n):console.warn("no compute:",t),this}},n={green:"#7f9c6c",red:"#914045",blue:"#6699cc",magenta:"#6D5685",cyan:"#2D85A8",yellow:"#e6d7b3",black:"#303b50"},r={green:t=>"[32m"+t+"[0m",red:t=>"[31m"+t+"[0m",blue:t=>"[34m"+t+"[0m",magenta:t=>"[35m"+t+"[0m",cyan:t=>"[36m"+t+"[0m",yellow:t=>"[33m"+t+"[0m",black:t=>"[30m"+t+"[0m",dim:t=>"[2m"+t+"[0m"},o=function(t){let{docs:e,model:n}=t;console.log(r.blue("=====")),e.forEach(t=>{console.log(r.blue("  -----")),t.forEach(t=>{let e=[...t.tags||[]],o=t.text||"-";t.implicit&&(o="["+t.implicit+"]"),void 0!==typeof module&&(o=r.yellow(o));let s="'"+o+"'";s=s.padEnd(18);let i=r.blue("  ｜ ")+s+"  - "+function(t,e){return e.two.tagSet&&(t=t.map(t=>{if(!e.two.tagSet.hasOwnProperty(t))return t;const n=e.two.tagSet[t].color||"blue";return r[n](t)})),t.join(", ")}(e,n);console.log(i)})})},s=function(t){if(!t.found)return;let e={};t.fullPointer.forEach(t=>{e[t[0]]=e[t[0]]||[],e[t[0]].push(t)}),Object.keys(e).forEach(n=>{let o=t.update([[Number(n)]]).text();t.update(e[n]).json({offset:!0}).forEach((t,e)=>{o=function(t,e,n){let o=((t,e,n)=>{let r=9*n,o=e.start+r,s=o+e.length;return[t.substring(0,o),t.substring(o,s),t.substring(s,t.length)]})(t,e,n);return`${o[0]}${r.blue(o[1])}${o[2]}`}(o,t.offset,e)}),console.log(o)})};const i=/[,:;).?!-]+/,l=/^[('"]+/,u=/[,:;)('"]/,a=/^[-–—]$/,c=function(t,e,n=!0){let r="";return t.forEach(t=>{let n=t.pre||"",o=t.post||"";"some"===e.punctuation&&(n=n.replace(l,""),a.test(o)&&(o=" "),o=o.replace(u,"")),"some"===e.whitespcae&&(n=n.replace(/\s/,""),o=o.replace(/\s+/," "));let s=t[e.use||"text"]||"";r+=n+s+o}),!1===e.keepPunct&&(r=r.replace(l,""),r=r.replace(i,"")),!1===n&&(r=r.trim()),!0===e.lowerCase&&(r=r.toLowerCase()),r},h={text:!0,terms:!0},f=function(t,e){return"string"==typeof(e=e||{})&&(e={}),e=Object.assign({},h,e),t.docs.map(t=>{let n={};if(e.text&&(n.text=c(t,{},!1)),e.normal&&(n.normal=c(t,{use:"normal"},!1)),e.terms&&(n.terms=function(t){return t.map(t=>{let e=Object.assign({},t);return e.tags=Array.from(t.tags),e})}(t)),e.offset){t[0].offset;let e=n.text.length;n.offset={index:t[0].offset.index,start:t[0].offset.start,length:e}}return n})},p={text:{use:"text"},normal:{whitespace:"some",punctuation:"some",case:"some",unicode:"some",use:"normal"},machine:{whitespace:"some",punctuation:"some",case:"none",unicode:"some",use:"machine"},root:{whitespace:"some",punctuation:"some",case:"some",unicode:"some",use:"normal"}};p.clean=p.normal,p.reduced=p.root;const g={json:function(t){let e=f(this,t);return"number"==typeof t?e[t]:e},text:function(t){let e={keepSpace:!0,keepPunct:!0};var n;if(t&&"string"==typeof t&&p.hasOwnProperty(t)?e=Object.assign({},p[t]):t&&(n=t,"[object Object]"===Object.prototype.toString.call(n))&&(e=Object.assign({},t,e)),this.pointer){e.keepSpace=!1;let t=this.pointer[0];t&&t[1]&&(e.keepPunct=!1)}return function(t,e){let n="";for(let r=0;r<t.length;r+=1)n+=c(t[r],e,!0);return e.keepSpace||(n=n.trim()),!1===e.keepPunct&&(n=n.replace(l,""),n=n.replace(i,"")),!0===e.cleanWhitespace&&(n=n.trim()),n}(this.docs,e)},debug:function(t={}){let e=this;if("string"==typeof t){let e={};e[t]=!0,t=e}return"undefined"!=typeof window&&window.document?(function(t){let e=t.world.tags;t.forEach(t=>{t.forEach(t=>{let r=Array.from(t.tags),o=t.text||"-";t.implicit&&(o="["+t.implicit+"]");let s="'"+o+"'";s=s.padEnd(8);let i=r.find(t=>e[t]&&e[t].color),l="steelblue";e[i]&&(l=e[i].color,l=n[l]),console.log(`   ${s}  -  %c${r.join(", ")}`,`color: ${l||"steelblue"};`)})})}(e),e):(!1!==t.tags&&(o(e),console.log("\n")),!0===t.chunks&&(!function(t){let{docs:e}=t;console.log(""),e.forEach(t=>{let e=[];t.forEach(t=>{"Noun"===t.chunk?e.push(r.blue(t.implicit||t.normal)):"Verb"===t.chunk?e.push(r.green(t.implicit||t.normal)):"Adjective"===t.chunk?e.push(r.yellow(t.implicit||t.normal)):"Pivot"===t.chunk?e.push(r.red(t.implicit||t.normal)):e.push(t.implicit||t.normal)}),console.log(e.join(" "),"\n")})}(e),console.log("\n")),!0===t.highlight&&(s(e),console.log("\n")),e)},out:function(t){if("text"===t)return this.text();if("normal"===t)return this.text("normal");if("machine"===t||"reduced"===t)return this.text("machine");if("json"===t)return this.json();if("offset"===t||"offsets"===t)return this.compute("offset"),this.json();if("array"===t){return this.docs.map(t=>t.reduce((t,e)=>t+e.pre+e.text+e.post,"").trim()).filter(t=>t)}if("freq"===t||"frequency"===t||"topk"===t){return this.compute("freq").terms().unique().termList().sort((t,e)=>t.freq>e.freq?-1:0)}if("terms"===t){let t=[];return this.docs.forEach(e=>{let n=e.terms.map(t=>t.text);n=n.filter(t=>t),t=t.concat(n)}),t}return"tags"===t?this.docs.map(t=>t.reduce((t,e)=>(t[e.implicit||e.normal]=Array.from(e.tags),t),{})):"debug"===t?this.debug():this.text()}};g.data=g.json;const m={termList:function(){return this.methods.one.termList(this.docs)},terms:function(){return this.match(".")},cache:function(){return this._cache=this.methods.one.cacheDoc(this.document),this},uncache:function(){return this._cache=null,this},groups:function(t){if(t||0===t)return this.update(this._groups[t]||[]);let e={};return Object.keys(this._groups).forEach(t=>{e[t]=this.update(this._groups[t])}),e},eq:function(t){let e=this.pointer;return e||(e=this.docs.map((t,e)=>[e])),e[t]?this.update([e[t]]):this.update([])},first:function(){return this.eq(0)},last:function(){let t=this.pointer.length-1;return this.eq(t)},slice:function(t,e){let n=this.pointer||this.docs.map((t,e)=>[e]);return n=n.slice(t,e),this.update(n)},all:function(){return this.update()},fork:function(){let t=JSON.parse(JSON.stringify(this.document));return this.update(this.pointer).document=t,this},toLowerCase:function(){return this.termList().forEach(t=>{t.text=t.text.toLowerCase()}),this},toUpperCase:function(){return this.termList().forEach(t=>{t.text=t.text.toUpperCase()}),this},toTitleCase:function(){return this.termList().forEach(t=>{t.text=t.text.replace(/^ *[a-z\u00C0-\u00FF]/,t=>t.toUpperCase())}),this},toCamelCase:function(){return this.docs.forEach(t=>{t.forEach((e,n)=>{0!==n&&(e.text=e.text.replace(/^ *[a-z\u00C0-\u00FF]/,t=>t.toUpperCase())),n!==t.length-1&&(e.post="")})}),this},wordCount:function(){return this.docs.reduce((t,e)=>t+=e.filter(t=>""!==t.text).length,0)}};m.group=m.groups,m.clone=m.fork;var d={matchOne:function(t="",e){const n=this.methods.one;"string"==typeof t&&(t=n.parseMatch(t));let r={regs:t,group:e,justOne:!0},{ptrs:o,byGroup:s}=n.match(this.docs,r,this._cache,!0),i=this.update(o);return i._groups=s,i},match:function(t,e){const n=this.methods.one;"string"==typeof t&&(t=n.parseMatch(t));let r={regs:t,group:e},{ptrs:o,byGroup:s}=n.match(this.docs,r,this._cache);o=function(t,e){return e?(t.forEach(t=>{let n=t[0];e[n]&&(t[0]=e[n][0],t[1]+=e[n][1],t[2]+=e[n][1])}),t):t}(o,this.pointer);let i=this.update(o);return i._groups=s,i},has:function(t="",e){const n=this.methods.one;let r;if("string"==typeof t){let o={regs:t=n.parseMatch(t),group:e};r=n.match(this.docs,o,this._cache).ptrs}else"object"==typeof t&&!0===t.isView&&(r=t.fullPointer);return r.length>0},if:function(t,e){const n=this.methods.one;let r;if("string"==typeof t){let o={regs:t=n.parseMatch(t),group:e};r=n.match(this.docs,o,this._cache).ptrs}else"object"==typeof t&&!0===t.isView&&(r=t.fullPointer);return r=r.map(t=>[t[0]]),this.update(r)},ifNo:function(t,e){const{docs:n,methods:r,_cache:o}=this,s=r.one;let i;if("string"==typeof t){let r={regs:t=s.parseMatch(t),group:e};i=s.match(n,r,o).ptrs}else"object"==typeof t&&!0===t.isView&&(i=t.fullPointer);let l=new Set(i.map(t=>t[0])),u=[];for(let t=0;t<n.length;t+=1)!1===l.has(t)&&u.push([t]);return this.update(u)},not:function(t){const{docs:e,methods:n,_cache:r}=this,o=n.one;let s=[];if("string"==typeof t?(t=o.parseMatch(t),s=o.match(e,{regs:t},r).ptrs):"object"==typeof t&&!0===t.isView&&(s=t.fullPointer),0===s.length)return this;let i={};s.forEach(t=>{i[t[0]]=i[t[0]]||[],i[t[0]].push(t)});let l=[];for(let t=0;t<e.length;t+=1)l.push([t,0,e[t].length]);let u=function(t,e){let n={};e.forEach(t=>{n[t[0]]=n[t[0]]||[],n[t[0]].push(t)});let r=[];return t.forEach(t=>{let e=t[0];if(n[e]){let o=n[e];o.forEach((n,s)=>{let i=o[s-1];!i&&n[1]>0&&r.push([e,0,n[1]]),i&&i[2]<n[1]&&r.push([e,i[2],n[1]]),o[s+1]||r.push([e,n[2],t[2]])})}else r.push(t)}),r}(l,s);return this.update(u)}};var y={alpha:(t,e)=>t.normal<e.normal?-1:t.normal>e.normal?1:0,length:(t,e)=>{let n=t.normal.trim().length,r=e.normal.trim().length;return n<r?1:n>r?-1:0},wordCount:(t,e)=>t.words<e.words?1:t.words>e.words?-1:0,sequential:(t,e)=>{let n=t.pointer.join(""),r=e.pointer.join("");return n<r?1:n>r?-1:0},byFreq:function(t){let e={};return t.forEach(t=>{e[t.normal]=e[t.normal]||0,e[t.normal]+=1}),t.sort((t,n)=>{let r=e[t.normal],o=e[n.normal];return r<o?1:r>o?-1:0}),t}};const b=new Set(["index","sequence","seq","sequential","chron","chronological"]),w=new Set(["freq","frequency","topk","repeats"]);var v={unique:function(){let{docs:t,pointer:e}=this,n=e||t.map((t,e)=>[e]),r=new Set,o=new Set;return this.docs.forEach((t,e)=>{let n=t.map(t=>t.machine||t.normal).join(" ");r.has(n)&&o.add(e),r.add(n)}),n=n.filter((t,e)=>!1===o.has(e)),this.update(n)},reverse:function(){let t=this.pointer||this.docs.map((t,e)=>[e]);return t=[].concat(t),t=t.reverse(),this.update(t)},sort:function(t){let{docs:e,pointer:n}=this;t=t||"alpha";let r=n||e.map((t,e)=>[e]),o=e.map((t,e)=>({index:e,words:t.length,normal:t.map(t=>t.machine||t.normal||"").join(" "),pointer:r[e]}));return b.has(t)&&(t="sequential"),w.has(t)?(o=y.byFreq(o),this.update(o.map(t=>t.pointer))):"function"==typeof y[t]?(o=o.sort(y[t]),this.update(o.map(t=>t.pointer))):this}};const E={pre:function(t,e){return void 0===t?this.docs[0][0].pre:(this.docs.forEach(n=>{let r=n[0];!0===e?r.pre+=t:r.pre=t}),this)},post:function(t,e){if(void 0===t){let t=this.docs[this.docs.length-1];return t[t.length-1].post}return this.docs.forEach(n=>{let r=n[0];!0===e?r.post+=t:r.post=t}),this},trim:function(){let t=this.docs;t[0][0].pre="";let e=t[t.length-1];return e[e.length-1].post="",this},hyphenate:function(){return this.docs.forEach(t=>{t.forEach((e,n)=>{0!==n&&(e.pre=""),t[n+1]&&(e.post="-")})}),this},dehyphenate:function(){const t=/(-|–|—)/;return this.docs.forEach(e=>{e.forEach(e=>{t.test(e.post)&&(e.post=" ")})}),this},toQuotations:function(t,e){return t=t||'"',e=e||'"',this.docs.forEach(n=>{n[0].pre=t+n[0].pre;let r=n[n.length-1];r.post=e+r.post}),this},toParentheses:function(t,e){return t=t||"(",e=e||")",this.docs.forEach(n=>{n[0].pre=t+n[0].pre;let r=n[n.length-1];r.post=e+r.post}),this}};E.deHyphenate=E.dehyphenate,E.toQuotation=E.toQuotations;const x=function(t,e){let n=[];n="object"==typeof t&&!0===t.isView?t.pointer||[]:e.match(t).pointer;let r={};return n.forEach(t=>{r[t[0]]=r[t[0]]||[],r[t[0]].push(t)}),r},j=function(t,e){let n=[];e[0][1]>t[1]&&n.push([t[0],t[1],e[0][1]]);for(let r=0;r<e.length;r+=1){let o=e[r];n.push(o);let s=e[r+1];s&&s[1]>o[2]&&n.push([t[0],o[2],s[1]])}let r=e[e.length-1];return r[2]<t[2]&&n.push([t[0],r[2],t[2]]),n},k=function(t,e){let n=[];e[0][1]>t[1]&&n.push([t[0],t[1],e[0][1]]);for(let r=0;r<e.length;r+=1){let o=e[r],s=e[r+1];s?n.push([t[0],o[1],s[1]]):n.push([t[0],o[1],t[2]])}return n},_=function(t,e){let n=[],r=t[1];for(let o=0;o<e.length;o+=1){let s=e[o];s[2]>r&&n.push([t[0],r,s[2]]),r=s[2]}let o=e[e.length-1];if(o[2]<t[2]){let e=o[2];e<t[1]&&(e=t[1]),n.push([t[0],e,t[2]])}return n};var O={splitOn:function(t){let e=this.fullPointer,n=x(t,this);for(let t=e.length-1;t>=0;t-=1){let r=e[t];if(n[r[0]]){let o=j(r,n[r[0]]);e.splice(t,1,...o)}}return this.update(e)},splitBefore:function(t){let e=this.fullPointer,n=x(t,this);for(let t=e.length-1;t>=0;t-=1){let r=e[t];if(n[r[0]]){let o=k(r,n[r[0]]);e.splice(t,1,...o)}}return this.update(e)},splitAfter:function(t){let e=this.fullPointer,n=x(t,this);for(let t=e.length-1;t>=0;t-=1){let r=e[t];if(n[r[0]]){let o=_(r,n[r[0]]);e.splice(t,1,...o)}}return this.update(e)}};const z=function(t){return"[object Array]"===Object.prototype.toString.call(t)},S={tag:function(t,e="",n){if(!this.found||!t)return this;let r=this.termList();if(0===r.length)return this;const{methods:o,verbose:s,world:i}=this;return!0===s&&console.log(" +  ",t,e||""),z(t)?t.forEach(t=>o.one.setTag(r,t,i,n)):o.one.setTag(r,t,i,n),this},tagSafe:function(t,e=""){return this.tag(t,e,!0)},unTag:function(t,e){if(!this.found||!t)return this;let n=this.termList();if(0===n.length)return this;const{methods:r,verbose:o,model:s}=this;!0===o&&console.log(" -  ",t,e||"");let i=s.two.tagSet;return z(t)?t.forEach(t=>r.one.unTag(n,t,i)):r.one.unTag(n,t,i),this}},$=(t,e,n)=>{let r=[e,0].concat(n);return Array.prototype.splice.apply(t,r),t},C=function(t){t[t.length-1].post+=" "},F=function(t,e,n){const{methods:r,document:o,world:s}=e;let i=r.one.tokenize(t,s)[0],l=e.fullPointer;l.forEach(t=>{let e=o[t[0]];i=i.slice().map(t=>((t=Object.assign({},t)).tags=new Set(t.tags),t)),n?(C(e),o[t[0]].length>t[2]&&C(i),$(e,t[2],i)):(C(i),$(e,t[1],i)),t[2]+=i.length}),l=l.map(t=>[t[0]]);let u=e.update(l);return u.compute(["preTagger","contractions","postTagger"]),u},P=function(t){return F(t,this,!0)},A=function(t){return F(t,this,!1)};var q={insertAfter:P,insertBefore:A,concat:function(t){const{methods:e,document:n,world:r}=this;let o=e.one.tokenize(t,r),s=this.fullPointer,i=s[s.length-1][0];return $(n,i+1,o),this},append:P,prepend:A,insert:P};var B={forEach:function(t){return this.fullPointer.forEach((e,n)=>{let r=this.update([e]);t(r,n)}),this},map:function(t){let e=this.fullPointer.map((e,n)=>{let r=this.update([e]);return t(r,n)});if(!e[0]||"object"!=typeof e[0]||!e[0].isView)return e;let n=[];return e.forEach(t=>{n=n.concat(t.fullPointer)}),this.update(n)},filter:function(t){let e=this.fullPointer;return e=e.filter((e,n)=>{let r=this.update([e]);return t(r,n)}),this.update(e)},find:function(t){let e=this.fullPointer.find((e,n)=>{let r=this.update([e]);return t(r,n)});return this.update([e])},some:function(t){return this.fullPointer.some((e,n)=>{let r=this.update([e]);return t(r,n)})},random:function(t=1){let e=this.fullPointer,n=Math.floor(Math.random()*e.length);return n+t>this.length&&(n=this.length-t,n=n<0?0:n),e=e.slice(n,n+t),this.update(e)}};const D=Object.assign({},m,g,d,S,v,E,O,q,B,e);D.get=D.eq;class G{constructor(e,n,r={}){this.document=e,Object.defineProperty(this,"world",{enumerable:!1,value:t,writable:!0}),Object.defineProperty(this,"_groups",{enumerable:!1,value:r,writable:!0}),Object.defineProperty(this,"_cache",{enumerable:!1,value:null,writable:!0}),this.pointer=n}get docs(){let e=this.document;return this.pointer&&(e=t.methods.one.getDoc(this.pointer,this.document)),Object.defineProperty(this,"docs",{value:e}),e}get methods(){return this.world.methods}get model(){return this.world.model}get hooks(){return this.world.hooks}get isView(){return!0}get found(){return this.docs.length>0}get length(){return this.docs.length}get fullPointer(){let{docs:t,pointer:e}=this;return(e||t.map((t,e)=>[e])).map((e,n)=>(e[1]=e[1]||0,e[2]=e[2]||t[n].length,e))}update(t){let e=new G(this.document,t);return e._cache=this._cache,e}}Object.assign(G.prototype,D);const M=function(t){return t&&"object"==typeof t&&!Array.isArray(t)};function L(t,e){if(M(e))for(const n in e)M(e[n])?(t[n]||Object.assign(t,{[n]:{}}),L(t[n],e[n])):Object.assign(t,{[n]:e[n]});return t}const T=function(e,n){const{methods:r,hooks:o}=t;n&&T.addWords(n);let s=r.one.tokenize(e,t),i=new G(s);return i.compute(o),i};T.verbose=function(t){let e=void 0===typeof process?self.env:process.env;return e.DEBUG_TAGS="tagger"===t||!0===t||"",e.DEBUG_MATCH="match"===t||!0===t||"",e.DEBUG_CHUNKS="chunker"===t||!0===t||"",this},T.parseMatch=function(e){return t.methods.one.parseMatch(e)},T.plugin=function(e){return function(t,e,n){const{methods:r,model:o,compute:s,hooks:i}=e;if(L(s,t.compute),L(r,t.methods),L(o,t.model),t.model&&t.model.two&&t.model.two.lexicon&&r&&r.two&&r.two.expandLexicon){o.two._multiCache=o.two._multiCache||{};let{lex:n,_multi:s}=r.two.expandLexicon(t.model.two.lexicon,e);Object.assign(o.two._multiCache,s),Object.assign(o.two.lexicon,n)}i&&(e.hooks=i.concat(t.hooks||[])),t.api&&t.api(n)}(e,t,G),this},T.extend=T.plugin,T.world=()=>t,T.version="14rc",T.addWords=function(e){const{methods:n,model:r}=t;if(e)if(n.two.expandLexicon){let{lex:o,_multi:s}=n.two.expandLexicon(e,t);Object.assign(r.two.lexicon,o),Object.assign(r.two._multiCache,s)}else Object.assign(r.two.lexicon,e)},T.tokenize=function(e,n){const{methods:r,compute:o}=t;n&&T.addWords(n);let s=r.one.tokenize(e,t),i=new G(s);return o.contractions&&i.compute("contractions"),i},T.model=()=>t.model,T.methods=()=>t.methods,T.hooks=()=>t.hooks;const N=/ /,U=function(t,e,n,r){if(!0===t.tags.has(e))return null;if("."===e)return null;let o=n[e];if(o){if(o.not&&o.not.length>0)for(let e=0;e<o.not.length;e+=1){if(!0===r&&t.tags.has(o.not[e]))return null;t.tags.delete(o.not[e])}if(o.parents&&o.parents.length>0)for(let e=0;e<o.parents.length;e+=1)t.tags.add(o.parents[e])}return t.tags.add(e),!0},V=function(t,e,n={},r){const o=n.model.two.tagSet||{};var s;if(!0!=(s=e,"[object Array]"===Object.prototype.toString.call(s)))if(e=e.trim(),N.test(e))!function(t,e,n,r){let o=e.split(N);t.forEach((t,e)=>{let s=o[e];s&&(s=s.replace(/^#/,""),U(t,s,n,r))})}(t,e,o,r);else{e=e.replace(/^#/,"");for(let n=0;n<t.length;n+=1)U(t[n],e,o,r)}else e.forEach(e=>V(t,e,n,r))},Q=function(t,e){for(let n of e)if(t.has(n))return!0;return!1},H=function(t,e){for(let n=0;n<t.length;n+=1){let r=t[n];if(!0!==r.optional&&!0!==r.negation){if(void 0!==r.word&&!1===e.has(r.word))return!0;if(void 0!==r.tag&&!1===e.has("#"+r.tag))return!0;if(r.fastOr&&!1===Q(r.fastOr,e))return!1}}return!1},W=function(t,e,n=3){if(t===e)return 1;if(t.length<n||e.length<n)return 0;const r=function(t,e){let n=t.length,r=e.length;if(0===n)return r;if(0===r)return n;let o=(r>n?r:n)+1;if(Math.abs(n-r)>(o||100))return o||100;let s,i,l,u,a,c,h=[];for(let t=0;t<o;t++)h[t]=[t],h[t].length=o;for(let t=0;t<o;t++)h[0][t]=t;for(let o=1;o<=n;++o)for(i=t[o-1],s=1;s<=r;++s){if(o===s&&h[o][s]>4)return n;l=e[s-1],u=i===l?0:1,a=h[o-1][s]+1,(c=h[o][s-1]+1)<a&&(a=c),(c=h[o-1][s-1]+u)<a&&(a=c);let r=o>1&&s>1&&i===e[s-2]&&t[o-2]===l&&(c=h[o-2][s-2]+u)<a;h[o][s]=r?c:a}return h[n][r]}(t,e);let o=Math.max(t.length,e.length);return 1-(0===o?0:r/o)},Z=/(\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F)/,J=/(\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E)/;let K={};const R=function(t,e){return-1!==t.post.indexOf(e)},I=function(t,e){return-1!==t.pre.indexOf(e)};K.hasQuote=function(t){return Z.test(t.pre)||J.test(t.post)},K.hasQuotation=K.hasQuote,K.hasComma=function(t){return R(t,",")},K.hasPeriod=function(t){return!0===R(t,".")&&!1===R(t,"...")},K.hasExclamation=function(t){return R(t,"!")},K.hasQuestionMark=function(t){return R(t,"?")||R(t,"¿")},K.hasEllipses=function(t){return R(t,"..")||R(t,"…")||I(t,"..")||I(t,"…")},K.hasSemicolon=function(t){return R(t,";")},K.hasSlash=function(t){return/\//.test(t.text)},K.hasHyphen=function(t){const e=/^(-|–|—)$/;return e.test(t.post)||e.test(t.pre)},K.hasDash=function(t){const e=/ (-|–|—) /;return e.test(t.post)||e.test(t.pre)},K.hasContraction=function(t){return Boolean(t.implicit)},K.isAcronym=function(t){return t.tags.has("Acronym")},K.isKnown=function(t){return t.tags.size>0},K.isTitleCase=function(t){return/^[A-Z][a-z'\u00C0-\u00FF]/.test(t.text)};let X=function(){};X=function(t,e,n,r){let o=function(t,e,n,r){if(!0===e.anything)return!0;if(!0===e.start&&0!==n)return!1;if(!0===e.end&&n!==r-1)return!1;if(void 0!==e.word){if(null!==t.machine&&t.machine===e.word)return!0;if(void 0!==t.alias&&t.alias.hasOwnProperty(e.word))return!0;if(!0===e.soft&&e.word===t.root)return!0;if(void 0!==e.fuzzy){let n=W(e.word,t.normal);if(n>e.fuzzy)return!0;if(!0===e.soft&&(n=W(e.word,t.root),n>e.fuzzy))return!0}return!(!t.alias||!t.alias.some(t=>t===e.word))||e.word===t.text||e.word===t.normal}return void 0!==e.tag?!0===t.tags.has(e.tag):void 0!==e.method?"function"==typeof K[e.method]&&!0===K[e.method](t):void 0!==e.regex?e.regex.test(t.normal):void 0!==e.chunk?t.chunk===e.chunk:void 0!==e.fastOr?!(!t.implicit||!0!==e.fastOr.has(t.implicit))||e.fastOr.has(t.normal)||e.fastOr.has(t.text):void 0!==e.choices&&("and"===e.operator?e.choices.every(e=>X(t,e,n,r)):e.choices.some(e=>X(t,e,n,r)))}(t,e,n,r);return!0===e.negative?!o:o};var Y=X;const tt=void 0===typeof process?self.env:process.env,et=t=>{tt.DEBUG_MATCH&&console.log(`\n  [32m ${t} [0m`)},nt=function(t,e){let n=Object.assign({},t.regs[t.r],{start:!1,end:!1}),r=t.t;for(;t.t<t.terms.length;t.t+=1){if(e&&Y(t.terms[t.t],e,t.start_i+t.t,t.phrase_length))return t.t;let o=t.t-r+1;if(void 0!==n.max&&o===n.max)return t.t;if(!1===Y(t.terms[t.t],n,t.start_i+t.t,t.phrase_length))return void 0!==n.min&&o<n.min?null:t.t}return t.t},rt=function(t,e){let n=t.t;if(!e)return t.terms.length;for(;n<t.terms.length;n+=1)if(!0===Y(t.terms[n],e,t.start_i+n,t.phrase_length))return et("greedyTo "+t.terms[n].normal),n;return null},ot=function(t,e){if(!0===t.end&&!0===t.greedy&&e.start_i+e.t<e.phrase_length-1){let n=Object.assign({},t,{end:!1});if(!0===Y(e.terms[e.t],n,e.start_i+e.t,e.phrase_length))return et("endGreedy "+e.terms[e.t].normal),!0}return!1},st=function(t,e=0){let n=t.regs[t.r],r=!1;for(let o=0;o<n.choices.length;o+=1){let s=n.choices[o];if(r=s.every((n,r)=>{let o=0,s=t.t+r+e+o;if(void 0===t.terms[s])return!1;let i=Y(t.terms[s],n,s+t.start_i,t.phrase_length);if(!0===i&&!0===n.greedy)for(let e=1;e<t.terms.length;e+=1){let r=t.terms[s+e];if(r){if(!0!==Y(r,n,t.start_i+e,t.phrase_length))break;o+=1}}return e+=o,i}),r){e+=s.length;break}}return r&&!0===n.greedy?st(t,e):e},it=function(t){let e=0;return!0===t.regs[t.r].choices.every(n=>{let r=n.every((e,n)=>{let r=t.t+n;return void 0!==t.terms[r]&&Y(t.terms[r],e,r,t.phrase_length)});return!0===r&&n.length>e&&(e=n.length),r})&&(et("doAndBlock "+t.terms[t.t].normal),e)},lt=function(t,e){return t.groups[t.inGroup]||(t.groups[t.inGroup]={start:e,length:0}),t.groups[t.inGroup]},ut=function(t,e,n,r){if(0===t.length||0===e.length)return null;let o={t:0,terms:t,r:0,regs:e,groups:{},start_i:n,phrase_length:r,inGroup:null};for(;o.r<e.length;o.r+=1){let t=e[o.r];if(o.hasGroup=Boolean(t.group),!0===o.hasGroup?o.inGroup=t.group:o.inGroup=null,!o.terms[o.t]){if(!1===e.slice(o.r).some(t=>!t.optional))break;return null}if(!0===t.anything&&!0===t.greedy){let n=rt(o,e[o.r+1]);if(null===n||0===n)return null;if(void 0!==t.min&&n-o.t<t.min)return null;if(void 0!==t.max&&n-o.t>t.max){o.t=o.t+t.max;continue}if(!0===o.hasGroup){lt(o,o.t).length=n-o.t}o.t=n;continue}if(void 0!==t.choices&&"or"===t.operator){let e=st(o);if(e){if(!0===t.negative)return null;if(!0===o.hasGroup){lt(o,o.t).length+=e}if(!0===t.end){let t=o.phrase_length-1;if(o.t+o.start_i!==t)return null}o.t+=e;continue}if(!t.optional)return null}if(void 0!==t.choices&&"and"===t.operator){let e=it(o);if(e){if(!0===t.negative)return null;if(!0===o.hasGroup){lt(o,o.t).length+=e}if(!0===t.end){let t=o.phrase_length-1;if(o.t+o.start_i!==t)return null}o.t+=e;continue}if(!t.optional)return null}let n=o.terms[o.t],s=Y(n,t,o.start_i+o.t,o.phrase_length);if(!0===t.anything||!0===s||ot(t,o)){let s=o.t;if(t.optional&&e[o.r+1]&&t.negative)continue;if(t.optional&&e[o.r+1]){let r=Y(n,e[o.r+1],o.start_i+o.t,o.phrase_length);if(t.negative||r){let t=o.terms[o.t+1];t&&Y(t,e[o.r+1],o.start_i+o.t,o.phrase_length)||(o.r+=1)}}if(o.t+=1,!0===t.end&&o.t!==o.terms.length&&!0!==t.greedy)return null;if(!0===t.greedy){if(o.t=nt(o,e[o.r+1]),null===o.t)return null;if(t.min&&t.min>o.t)return null;if(!0===t.end&&o.start_i+o.t!==r)return null}if(!0===o.hasGroup){const e=lt(o,s);o.t>1&&t.greedy?e.length+=o.t-s:e.length++}}else{if(t.negative){let e=Object.assign({},t);if(e.negative=!1,!0===Y(o.terms[o.t],e,o.start_i+o.t,o.phrase_length))return null}if(!0!==t.optional){if(Boolean(o.terms[o.t].implicit)&&e[o.r-1]&&o.terms[o.t+1]){if(o.terms[o.t-1]&&o.terms[o.t-1].implicit===e[o.r-1].word)return null;if(Y(o.terms[o.t+1],t,o.start_i+o.t,o.phrase_length)){o.t+=2;continue}}return null}}}let s=[null,n,o.t+n];if(s[1]===s[2])return null;let i={};return Object.keys(o.groups).forEach(t=>{let e=o.groups[t],r=n+e.start;i[t]=[null,r,r+e.length]}),{pointer:s,groups:i}},at=function(t,e){return t.pointer[0]=e,Object.keys(t.groups).forEach(n=>{t.groups[n][0]=e}),t},ct=function(t,e,n){let r=ut(t,e,0,t.length);return r?(r=at(r,n),r):null},ht=/(?:^|\s)([![^]*(?:<[^<]*>)?\/.*?[^\\/]\/[?\]+*$~]*)(?:\s|$)/,ft=/([![^]*(?:<[^<]*>)?\([^)]+[^\\)]\)[?\]+*$~]*)(?:\s|$)/,pt=/ /g,gt=t=>/^[![^]*(<[^<]*>)?\//.test(t)&&/\/[?\]+*$~]*$/.test(t),mt=function(t){return t=(t=t.map(t=>t.trim())).filter(t=>t)},dt=/\{([0-9]+,?[0-9]*)\}/,yt=/&&/,bt=new RegExp(/^<\s*?(\S+)\s*?>/),wt=function(t){return t[t.length-1]},vt=function(t){return t[0]},Et=function(t){return t.substr(1)},xt=function(t){return t.substr(0,t.length-1)},jt=function(t){return t=Et(t),t=xt(t)},kt=function(t){let e={};for(let n=0;n<2;n+=1){if("$"===wt(t)&&(e.end=!0,t=xt(t)),"^"===vt(t)&&(e.start=!0,t=Et(t)),("["===vt(t)||"]"===wt(t))&&(e.group=null,"["===vt(t)&&(e.groupStart=!0),"]"===wt(t)&&(e.groupEnd=!0),t=(t=t.replace(/^\[/,"")).replace(/\]$/,""),"<"===vt(t))){const n=bt.exec(t);n.length>=2&&(e.group=n[1],t=t.replace(n[0],""))}if("+"===wt(t)&&(e.greedy=!0,t=xt(t)),"*"!==t&&"*"===wt(t)&&"\\*"!==t&&(e.greedy=!0,t=xt(t)),"?"===wt(t)&&(e.optional=!0,t=xt(t)),"!"===vt(t)&&(e.negative=!0,t=Et(t)),"("===vt(t)&&")"===wt(t)){yt.test(t)?(e.choices=t.split(yt),e.operator="and"):(e.choices=t.split("|"),e.operator="or"),e.choices[0]=Et(e.choices[0]);let n=e.choices.length-1;e.choices[n]=xt(e.choices[n]),e.choices=e.choices.map(t=>t.trim()),e.choices=e.choices.filter(t=>t),e.choices=e.choices.map(t=>t.split(/ /g).map(kt)),t=""}if("/"===vt(t)&&"/"===wt(t))return t=jt(t),e.regex=new RegExp(t),e;if("~"===vt(t)&&"~"===wt(t))return t=jt(t),e.soft=!0,e.word=t,e;if("{"===vt(t)&&"}"===wt(t))return t=jt(t),e.chunk=t,e.greedy=!0,e}return!0===dt.test(t)&&(t=t.replace(dt,(t,n)=>{let r=n.split(/,/g);return 1===r.length?(e.min=Number(r[0]),e.max=Number(r[0])):(e.min=Number(r[0]),e.max=Number(r[1]||999)),e.greedy=!0,e.optional=!0,""})),"#"===vt(t)?(e.tag=Et(t),e.tag=(n=e.tag).charAt(0).toUpperCase()+n.substr(1),e):"@"===vt(t)?(e.method=Et(t),e):"."===t?(e.anything=!0,e):"*"===t?(e.anything=!0,e.greedy=!0,e.optional=!0,e):(t&&(t=(t=t.replace("\\*","*")).replace("\\.","."),e.word=t.toLowerCase()),e);var n},_t=function(t,e={}){return t=function(t){let e=0,n=null;for(let r=0;r<t.length;r++){const o=t[r];!0===o.groupStart&&(n=o.group,null===n&&(n=String(e),e+=1)),null!==n&&(o.group=n),!0===o.groupEnd&&(n=null)}return t}(t),e.fuzzy||(t=t.map(t=>{if(void 0!==t.choices){if("or"!==t.operator)return t;!0===t.choices.every(t=>{if(1!==t.length)return!1;let e=t[0];return!e.start&&!e.end&&void 0!==e.word&&!0!==e.negative&&!0!==e.optional&&!0!==e.method})&&(t.fastOr=new Set,t.choices.forEach(e=>{t.fastOr.add(e[0].word)}),delete t.choices)}return t})),t};var Ot={methods:{one:{termList:function(t){let e=[];for(let n=0;n<t.length;n+=1)for(let r=0;r<t[n].length;r+=1)e.push(t[n][r]);return e},getDoc:function(t,e){let n=[];return t.filter(t=>t).forEach(t=>{let[r,o,s]=t;o||(o=0);let i=e[r]||[];s||(s=i.length),i=i.slice(o,s),i.length>0&&n.push(i)}),n},setTag:V,unTag:function(t,e,n){e=e.trim().replace(/^#/,"");for(let r=0;r<t.length;r+=1){let o=t[r];if("*"===e){o.tags.clear();continue}let s=n[e];if(s&&s.children.length>0)for(let t=0;t<s.children.length;t+=1)o.tags.delete(s.children[t]);o.tags.delete(e)}},cacheDoc:function(t){return t.map(t=>{let e=new Set;return t.forEach(t=>{""!==t.normal&&e.add(t.normal),t.implicit&&e.add(t.implicit);let n=Array.from(t.tags);for(let t=0;t<n.length;t+=1)e.add("#"+n[t])}),e})},cacheMatch:function(t){let e=new Set;return t.forEach(t=>{!0!==t.optional&&!0!==t.negative&&(t.tag&&e.add("#"+t.tag),t.word&&e.add(t.word))}),e},parseMatch:function(t,e={}){if(null==t||""===t)return[];"number"==typeof t&&(t=String(t));let n=function(t){let e=t.split(ht),n=[];e.forEach(t=>{gt(t)?n.push(t):n=n.concat(t.split(ft))}),n=mt(n);let r=[];return n.forEach(t=>{(t=>/^[![^]*(<[^<]*>)?\(/.test(t)&&/\)[?\]+*$~]*$/.test(t))(t)||gt(t)?r.push(t):r=r.concat(t.split(pt))}),r=mt(r),r}(t);return n=n.map(t=>kt(t)),n=_t(n,e),n=function(t,e){return!0===e.fuzzy&&(e.fuzzy=.85),"number"==typeof e.fuzzy&&(t=t.map(t=>(e.fuzzy>0&&t.word&&(t.fuzzy=e.fuzzy),t.choices&&t.choices.forEach(t=>{t.forEach(t=>{t.fuzzy=e.fuzzy})}),t))),t}(n,e),n},match:function(t,e,n){n=n||[];let{regs:r,group:o,justOne:s}=e,i=[];if(!r||0===r.length)return{ptrs:[],byGroup:{}};const l=r.filter(t=>!0!==t.optional&&!0!==t.negative).length;t:for(let e=0;e<t.length;e+=1){let o=t[e];if(!n[e]||!H(r,n[e]))if(!0!==r[0].start)for(let t=0;t<o.length;t+=1){let n=o.slice(t);if(n.length<l)break;let u=ut(n,r,t,o.length);if(u){if(u=at(u,e),i.push(u),!0===s)break t;let n=u.pointer[2];Math.abs(n-1)>t&&(t=Math.abs(n-1))}}else{let t=ct(o,r,e);t&&i.push(t)}}return!0===r[r.length-1].end&&(i=i.filter(e=>{let n=e.pointer[0];return t[n].length===e.pointer[2]})),i=function(t,e){let n=[],r={};return 0===t.length||("number"==typeof e&&(e=String(e)),e?t.forEach(t=>{t.groups[e]&&n.push(t.groups[e])}):t.forEach(t=>{n.push(t.pointer),Object.keys(t.groups).forEach(e=>{r[e]=r[e]||[],r[e].push(t.groups[e])})})),{ptrs:n,byGroup:r}}(i,o),i}}}};const zt=/(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g,St=/((?:\r?\n|\r)+)/,$t=/[ .][A-Z]\.? *$/i,Ct=/(?:\u2026|\.{2,}) *$/,Ft=/[a-z0-9\u00C0-\u00FF\u00a9\u00ae\u2000-\u3300\ud000-\udfff]/i,Pt=function(t,e){if(!1===Ft.test(t))return!1;if(!0===$t.test(t))return!1;if(!0===Ct.test(t))return!1;let n=t.replace(/[.!?\u203D\u2E18\u203C\u2047-\u2049] *$/,"").split(" "),r=n[n.length-1].toLowerCase();return!0!==e.hasOwnProperty(r)},At=/\S/,qt=/^\s+/,Bt=/[a-z0-9\u00C0-\u00FF\u00a9\u00ae\u2000-\u3300\ud000-\udfff]/i,Dt=function(t){if(!0===/^(re|un|micro|macro|trans|bi|mono|over)-?[^aeiou]./.test(t))return!1;if(!0===/^([a-z\u00C0-\u00FF/]+)(-|–|—)(like|ish|less|able)/i.test(t))return!1;if(!0===/^([a-z\u00C0-\u00FF`"'/]+)(-|–|—)([a-z0-9\u00C0-\u00FF].*)/i.test(t))return!0;return!0===/^([0-9]{1,4})(-|–|—)([a-z\u00C0-\u00FF`"'/-]+$)/i.test(t)},Gt=function(t){let e=[];const n=t.split(/[-–—]/);let r="-",o=t.match(/[-–—]/);o&&o[0]&&(r=o);for(let t=0;t<n.length;t++)t===n.length-1?e.push(n[t]):e.push(n[t]+r);return e},Mt=/[a-z] ?\/ ?[a-z]+$/,Lt=/\S/,Tt=/^[!?.]+$/,Nt=/(\S+)/;let Ut=[".","?","!",":",";","-","–","—","--","...","(",")","[","]",'"',"'","`"];Ut=Ut.reduce((t,e)=>(t[e]=!0,t),{});const Vt=/^[ \n\t.[\](){}⟨⟩:,،、‒–—―…!‹›«»‐\-?‘’;/⁄·&*•^†‡°¡¿※№÷×ºª%‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022\uFF02\u0027\u201C\u201F\u201B\u201E\u2E42\u201A\u2035\u2036\u2037\u301D\u0060\u301F]+/,Qt=/[ \n\t.'[\](){}⟨⟩:,،、‒–—―…!‹›«»‐\-?‘’;/⁄·&*@•^†‡°¡¿※#№÷×ºª‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022\uFF02\u201D\u00B4\u301E]+$/,Ht=/['’]/,Wt=/^[a-z]\.([a-z]\.)+/i,Zt=/^[-+.][0-9]/,Jt=/^'[0-9]{2}/;var Kt={one:{splitSentences:function(t,e){let n=e.one.abbreviations||new Set;t=t||"";let r=[],o=[];if(!(t=String(t))||"string"!=typeof t||!1===At.test(t))return r;let s=function(t){let e=[],n=t.split(St);for(let t=0;t<n.length;t++){let r=n[t].split(zt);for(let t=0;t<r.length;t++)e.push(r[t])}return e}(t=t.replace(" "," "));for(let t=0;t<s.length;t++){let e=s[t];if(void 0!==e&&""!==e){if(!1===At.test(e)||!1===Bt.test(e)){if(o[o.length-1]){o[o.length-1]+=e;continue}if(s[t+1]){s[t+1]=e+s[t+1];continue}}o.push(e)}}for(let t=0;t<o.length;t++){let e=o[t];o[t+1]&&!1===Pt(e,n)?o[t+1]=e+(o[t+1]||""):e&&e.length>0&&(r.push(e),o[t]="")}if(0===r.length)return[t];for(let t=1;t<r.length;t+=1){let e=r[t].match(qt);null!==e&&(r[t-1]+=e[0],r[t]=r[t].replace(qt,""))}return r},splitTerms:function(t){let e=[],n=[];if("number"==typeof(t=t||"")&&(t=String(t)),function(t){return"[object Array]"===Object.prototype.toString.call(t)}(t))return t;const r=t.split(Nt);for(let t=0;t<r.length;t++)!0!==Dt(r[t])?n.push(r[t]):n=n.concat(Gt(r[t]));let o="";for(let t=0;t<n.length;t++){let r=n[t];!0===Lt.test(r)&&!1===Ut.hasOwnProperty(r)&&!1===Tt.test(r)?(e.length>0?(e[e.length-1]+=o,e.push(r)):e.push(o+r),o=""):o+=r}return o&&(0===e.length&&(e[0]=""),e[e.length-1]+=o),e=function(t){for(let e=1;e<t.length-1;e++)Mt.test(t[e])&&(t[e-1]+=t[e]+t[e+1],t[e]=null,t[e+1]=null);return t}(e),e=function(t){const e=/^[0-9]{1,4}(:[0-9][0-9])?([a-z]{1,2})? ?(-|–|—) ?$/,n=/^[0-9]{1,4}([a-z]{1,2})? ?$/;for(let r=0;r<t.length-1;r+=1)t[r+1]&&e.test(t[r])&&n.test(t[r+1])&&(t[r]=t[r]+t[r+1],t[r+1]=null);return t}(e),e=e.filter(t=>t),e},splitWhitespace:t=>{let{str:e,pre:n,post:r}=function(t){let e=t,n="",r="";return""===(t=(t=t.replace(Vt,e=>(n=e,"-"!==n&&"+"!==n&&"."!==n||!Zt.test(t)?"'"===n&&Jt.test(t)?(n="",e):"":(n="",e)))).replace(Qt,o=>(r=o,Ht.test(o)&&/[sn]['’]$/.test(e)&&!1===Ht.test(n)?(r=r.replace(Ht,""),"'"):!0===Wt.test(t)?(r=r.replace(/\./,""),"."):"")))&&(e=e.replace(/ *$/,t=>(r=t||"","")),t=e,n=""),{str:t,pre:n,post:r}}(t);return{text:e,pre:n,post:r,tags:new Set}},tokenize:function(t,e){const{methods:n,model:r,compute:o}=e,{splitSentences:s,splitTerms:i,splitWhitespace:l}=n.one;if("number"==typeof(t=t||"")&&(t=String(t)),"string"==typeof t){t=s(t,r).map(t=>i(t).map(l)),o.normal(t),o.alias(t,e)}return t}}};let Rt={},It={};[[["approx","apt","bc","cyn","eg","esp","est","etc","ex","exp","prob","pron","gal","min","pseud","fig","jd","lat","lng","vol","fm","def","misc","plz","ea","ps","sec","pt","pref","pl","pp","qt","fr","sq","nee","ss","tel","temp","vet","ver","fem","masc","eng","adj","vb","rb","inf","situ","vivo","vitro","wr"]],[["dl","ml","gal","ft","qt","pt","tbl","tsp","tbsp","km","dm","cm","mm","mi","td","hr","hrs","kg","hg","dg","cg","mg","µg","lb","oz","sq ft","hz","mps","mph","kmph","kb","mb","gb","tb","lx","lm","pa","fl oz","yb"],"Unit"],[["ad","al","arc","ba","bl","ca","cca","col","corp","ft","fy","ie","lit","ma","md","pd","tce"],"Noun"],[["adj","adm","adv","asst","atty","bldg","brig","capt","cmdr","comdr","cpl","det","dr","esq","gen","gov","hon","jr","llb","lt","maj","messrs","mister","mlle","mme","mr","mrs","ms","mstr","phd","prof","pvt","rep","reps","res","rev","sen","sens","sfc","sgt","sir","sr","supt","surg"],"Honorific"],[["jan","feb","mar","apr","jun","jul","aug","sep","sept","oct","nov","dec"],"Month"],[["dept","univ","assn","bros","inc","ltd","co"],"Organization"],[["rd","st","dist","mt","ave","blvd","cl","cres","hwy","ariz","cal","calif","colo","conn","fla","fl","ga","ida","ia","kan","kans","minn","neb","nebr","okla","penna","penn","pa","dak","tenn","tex","ut","vt","va","wis","wisc","wy","wyo","usafa","alta","ont","que","sask"],"Place"]].forEach(t=>{t[0].forEach(e=>{Rt[e]=!0,It[e]="Abbreviation",void 0!==t[1]&&(It[e]=[It[e],t[1]])})});var Xt={one:{aliases:{"&":"and","@":"at","%":"percent"},abbreviations:Rt},two:{lexicon:It}};const Yt=/\//,te=function(t,e){let n=t.normal||t.text;const r=e.model.one.aliases;return r.hasOwnProperty(n)&&(t.alias=t.alias||[],t.alias.push(r[n])),Yt.test(n)&&n.split(Yt).forEach(e=>{""!==(e=e.trim())&&(t.alias=t.alias||[],t.alias.push(e))}),t};let ee={"!":"¡","?":"¿Ɂ",'"':'“”"❝❞',"'":"‘‛❛❜","-":"—–",a:"ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАаѦѧӐӑӒӓƛæ",b:"ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬвъьѢѣҌҍ",c:"¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼϲϹϽϾСсєҀҁҪҫ",d:"ÐĎďĐđƉƊȡƋƌ",e:"ÈÉÊËèéêëĒēĔĕĖėĘęĚěƐȄȅȆȇȨȩɆɇΈΕΞΣέεξϵЀЁЕеѐёҼҽҾҿӖӗ",f:"ƑƒϜϝӺӻҒғſ",g:"ĜĝĞğĠġĢģƓǤǥǦǧǴǵ",h:"ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ",I:"ÌÍÎÏ",i:"ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії",j:"ĴĵǰȷɈɉϳЈј",k:"ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ",l:"ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ",m:"ΜϺϻМмӍӎ",n:"ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ",o:"ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϴОФоѲѳӦӧӨөӪӫ",p:"ƤΡρϷϸϼРрҎҏÞ",q:"Ɋɋ",r:"ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ",s:"ŚśŜŝŞşŠšƧƨȘșȿЅѕ",t:"ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮТт",u:"µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύ",v:"νѴѵѶѷ",w:"ŴŵƜωώϖϢϣШЩшщѡѿ",x:"×ΧχϗϰХхҲҳӼӽӾӿ",y:"ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ",z:"ŹźŻżŽžƵƶȤȥɀΖ"},ne={};Object.keys(ee).forEach((function(t){ee[t].split("").forEach((function(e){ne[e]=t}))}));const re=/([A-Z]\.)+[A-Z]?,?$/,oe=/^[A-Z]\.,?$/,se=/[A-Z]{2,}('s|,)?$/,ie=/([a-z]\.)+[a-z]\.?$/,le=function(t){return function(t){return!0===re.test(t)||!0===ie.test(t)||!0===oe.test(t)||!0===se.test(t)}(t)&&(t=t.replace(/\./g,"")),t},ue=function(t){let e=t.text||"";e=function(t){let e=t=(t=(t=t||"").toLowerCase()).trim();return t=(t=(t=(t=(t=t.replace(/[,;.!?]+$/,"")).replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g,"'")).replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g,'"')).replace(/\u2026/g,"...")).replace(/\u2013/g,"-"),!1===/^[:;]/.test(t)&&(t=(t=(t=t.replace(/\.{3,}$/g,"")).replace(/[",.!:;?)]+$/g,"")).replace(/^['"(]+/g,"")),""===(t=(t=t.replace(/[\u200B-\u200D\uFEFF]/g,"")).trim())&&(t=e),t.replace(/([0-9]),([0-9])/g,"$1$2")}(e),e=(t=>{let e=t.split("");return e.forEach((t,n)=>{ne[t]&&(e[n]=ne[t])}),e.join("")})(e),e=le(e),t.normal=e},ae=function(t){let e=t.implicit||t.normal||t.text;e=e.replace(/['’]s$/,""),e=e.replace(/s['’]$/,"s"),e=e.replace(/([aeiou][ktrp])in$/,"$1ing"),!0===/^(re|un)-?[^aeiou]./.test(e)&&(e=e.replace("-","")),e=e.replace(/^[#@]/,""),e!==t.normal&&(t.machine=e)},ce=function(t,e,n){for(let r=0;r<t.length;r+=1)for(let o=0;o<t[r].length;o+=1)e(t[r][o],n)};var he={compute:{alias:(t,e)=>ce(t,te,e),normal:(t,e)=>ce(t,ue,e),machine:(t,e)=>ce(t,ae,e),freq:function(t){let e={};for(let n=0;n<t.length;n+=1)for(let r=0;r<t[n].length;r+=1){let o=t[n][r],s=o.machine||o.normal;e[s]=e[s]||0,e[s]+=1}for(let n=0;n<t.length;n+=1)for(let r=0;r<t[n].length;r+=1){let o=t[n][r],s=o.machine||o.normal;o.freq=e[s]}},offset:function(t){let e=0,n=0;for(let r=0;r<t.length;r+=1)for(let o=0;o<t[r].length;o+=1){let s=t[r][o];s.offset={index:n,start:e+s.pre.length,length:s.text.length},e+=s.pre.length+s.text.length+s.post.length,n+=1}},wordCount:function(t){let e=0;for(let n=0;n<t.length;n+=1)for(let r=0;r<t[n].length;r+=1)""!==t[n][r].normal&&(e+=1,t[n][r].wordCount=e)}},methods:Kt,model:Xt,hooks:["alias","normal","machine"]};T.extend(Ot),T.extend(he);export{T as default};
