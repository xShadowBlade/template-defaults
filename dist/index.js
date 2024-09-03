#!/usr/bin/env node
"use strict";var ln=Object.create;var et=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var yn=Object.getOwnPropertyNames;var pn=Object.getPrototypeOf,mn=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var dn=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of yn(t))!mn.call(e,n)&&n!==r&&et(e,n,{get:()=>t[n],enumerable:!(i=fn(t,n))||i.enumerable});return e};var K=(e,t,r)=>(r=e!=null?ln(pn(e)):{},dn(t||!e||!e.__esModule?et(r,"default",{value:e,enumerable:!0}):r,e));var C=d($e=>{"use strict";$e.fromCallback=function(e){return Object.defineProperty(function(...t){if(typeof t[t.length-1]=="function")e.apply(this,t);else return new Promise((r,i)=>{t.push((n,o)=>n!=null?i(n):r(o)),e.apply(this,t)})},"name",{value:e.name})};$e.fromPromise=function(e){return Object.defineProperty(function(...t){let r=t[t.length-1];if(typeof r!="function")return e.apply(this,t);t.pop(),e.apply(this,t).then(i=>r(null,i),r)},"name",{value:e.name})}});var rt=d((Oo,tt)=>{var Y=require("constants"),hn=process.cwd,be=null,wn=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return be||(be=hn.call(process)),be};try{process.cwd()}catch{}typeof process.chdir=="function"&&(Re=process.chdir,process.chdir=function(e){be=null,Re.call(process,e)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,Re));var Re;tt.exports=Sn;function Sn(e){Y.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&t(e),e.lutimes||r(e),e.chown=o(e.chown),e.fchown=o(e.fchown),e.lchown=o(e.lchown),e.chmod=i(e.chmod),e.fchmod=i(e.fchmod),e.lchmod=i(e.lchmod),e.chownSync=s(e.chownSync),e.fchownSync=s(e.fchownSync),e.lchownSync=s(e.lchownSync),e.chmodSync=n(e.chmodSync),e.fchmodSync=n(e.fchmodSync),e.lchmodSync=n(e.lchmodSync),e.stat=a(e.stat),e.fstat=a(e.fstat),e.lstat=a(e.lstat),e.statSync=m(e.statSync),e.fstatSync=m(e.fstatSync),e.lstatSync=m(e.lstatSync),e.chmod&&!e.lchmod&&(e.lchmod=function(c,f,u){u&&process.nextTick(u)},e.lchmodSync=function(){}),e.chown&&!e.lchown&&(e.lchown=function(c,f,u,l){l&&process.nextTick(l)},e.lchownSync=function(){}),wn==="win32"&&(e.rename=typeof e.rename!="function"?e.rename:function(c){function f(u,l,y){var b=Date.now(),S=0;c(u,l,function k(D){if(D&&(D.code==="EACCES"||D.code==="EPERM"||D.code==="EBUSY")&&Date.now()-b<6e4){setTimeout(function(){e.stat(l,function(q,h){q&&q.code==="ENOENT"?c(u,l,k):y(D)})},S),S<100&&(S+=10);return}y&&y(D)})}return Object.setPrototypeOf&&Object.setPrototypeOf(f,c),f}(e.rename)),e.read=typeof e.read!="function"?e.read:function(c){function f(u,l,y,b,S,k){var D;if(k&&typeof k=="function"){var q=0;D=function(h,V,ne){if(h&&h.code==="EAGAIN"&&q<10)return q++,c.call(e,u,l,y,b,S,D);k.apply(this,arguments)}}return c.call(e,u,l,y,b,S,D)}return Object.setPrototypeOf&&Object.setPrototypeOf(f,c),f}(e.read),e.readSync=typeof e.readSync!="function"?e.readSync:function(c){return function(f,u,l,y,b){for(var S=0;;)try{return c.call(e,f,u,l,y,b)}catch(k){if(k.code==="EAGAIN"&&S<10){S++;continue}throw k}}}(e.readSync);function t(c){c.lchmod=function(f,u,l){c.open(f,Y.O_WRONLY|Y.O_SYMLINK,u,function(y,b){if(y){l&&l(y);return}c.fchmod(b,u,function(S){c.close(b,function(k){l&&l(S||k)})})})},c.lchmodSync=function(f,u){var l=c.openSync(f,Y.O_WRONLY|Y.O_SYMLINK,u),y=!0,b;try{b=c.fchmodSync(l,u),y=!1}finally{if(y)try{c.closeSync(l)}catch{}else c.closeSync(l)}return b}}function r(c){Y.hasOwnProperty("O_SYMLINK")&&c.futimes?(c.lutimes=function(f,u,l,y){c.open(f,Y.O_SYMLINK,function(b,S){if(b){y&&y(b);return}c.futimes(S,u,l,function(k){c.close(S,function(D){y&&y(k||D)})})})},c.lutimesSync=function(f,u,l){var y=c.openSync(f,Y.O_SYMLINK),b,S=!0;try{b=c.futimesSync(y,u,l),S=!1}finally{if(S)try{c.closeSync(y)}catch{}else c.closeSync(y)}return b}):c.futimes&&(c.lutimes=function(f,u,l,y){y&&process.nextTick(y)},c.lutimesSync=function(){})}function i(c){return c&&function(f,u,l){return c.call(e,f,u,function(y){w(y)&&(y=null),l&&l.apply(this,arguments)})}}function n(c){return c&&function(f,u){try{return c.call(e,f,u)}catch(l){if(!w(l))throw l}}}function o(c){return c&&function(f,u,l,y){return c.call(e,f,u,l,function(b){w(b)&&(b=null),y&&y.apply(this,arguments)})}}function s(c){return c&&function(f,u,l){try{return c.call(e,f,u,l)}catch(y){if(!w(y))throw y}}}function a(c){return c&&function(f,u,l){typeof u=="function"&&(l=u,u=null);function y(b,S){S&&(S.uid<0&&(S.uid+=4294967296),S.gid<0&&(S.gid+=4294967296)),l&&l.apply(this,arguments)}return u?c.call(e,f,u,y):c.call(e,f,y)}}function m(c){return c&&function(f,u){var l=u?c.call(e,f,u):c.call(e,f);return l&&(l.uid<0&&(l.uid+=4294967296),l.gid<0&&(l.gid+=4294967296)),l}}function w(c){if(!c||c.code==="ENOSYS")return!0;var f=!process.getuid||process.getuid()!==0;return!!(f&&(c.code==="EINVAL"||c.code==="EPERM"))}}});var ot=d((Do,it)=>{var nt=require("stream").Stream;it.exports=gn;function gn(e){return{ReadStream:t,WriteStream:r};function t(i,n){if(!(this instanceof t))return new t(i,n);nt.call(this);var o=this;this.path=i,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=64*1024,n=n||{};for(var s=Object.keys(n),a=0,m=s.length;a<m;a++){var w=s[a];this[w]=n[w]}if(this.encoding&&this.setEncoding(this.encoding),this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.end===void 0)this.end=1/0;else if(typeof this.end!="number")throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(this.fd!==null){process.nextTick(function(){o._read()});return}e.open(this.path,this.flags,this.mode,function(c,f){if(c){o.emit("error",c),o.readable=!1;return}o.fd=f,o.emit("open",f),o._read()})}function r(i,n){if(!(this instanceof r))return new r(i,n);nt.call(this),this.path=i,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,n=n||{};for(var o=Object.keys(n),s=0,a=o.length;s<a;s++){var m=o[s];this[m]=n[m]}if(this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],this.fd===null&&(this._open=e.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}});var st=d((jo,ct)=>{"use strict";ct.exports=bn;var vn=Object.getPrototypeOf||function(e){return e.__proto__};function bn(e){if(e===null||typeof e!="object")return e;if(e instanceof Object)var t={__proto__:vn(e)};else var t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}),t}});var oe=d((Co,Ae)=>{var x=require("fs"),kn=rt(),En=ot(),Pn=st(),ke=require("util"),$,Pe;typeof Symbol=="function"&&typeof Symbol.for=="function"?($=Symbol.for("graceful-fs.queue"),Pe=Symbol.for("graceful-fs.previous")):($="___graceful-fs.queue",Pe="___graceful-fs.previous");function Fn(){}function lt(e,t){Object.defineProperty(e,$,{get:function(){return t}})}var ee=Fn;ke.debuglog?ee=ke.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(ee=function(){var e=ke.format.apply(ke,arguments);e="GFS4: "+e.split(/\n/).join(`
GFS4: `),console.error(e)});x[$]||(at=global[$]||[],lt(x,at),x.close=function(e){function t(r,i){return e.call(x,r,function(n){n||ut(),typeof i=="function"&&i.apply(this,arguments)})}return Object.defineProperty(t,Pe,{value:e}),t}(x.close),x.closeSync=function(e){function t(r){e.apply(x,arguments),ut()}return Object.defineProperty(t,Pe,{value:e}),t}(x.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){ee(x[$]),require("assert").equal(x[$].length,0)}));var at;global[$]||lt(global,x[$]);Ae.exports=Ie(Pn(x));process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!x.__patched&&(Ae.exports=Ie(x),x.__patched=!0);function Ie(e){kn(e),e.gracefulify=Ie,e.createReadStream=V,e.createWriteStream=ne;var t=e.readFile;e.readFile=r;function r(p,g,v){return typeof g=="function"&&(v=g,g=null),N(p,g,v);function N(L,j,F,O){return t(L,j,function(E){E&&(E.code==="EMFILE"||E.code==="ENFILE")?ie([N,[L,j,F],E,O||Date.now(),Date.now()]):typeof F=="function"&&F.apply(this,arguments)})}}var i=e.writeFile;e.writeFile=n;function n(p,g,v,N){return typeof v=="function"&&(N=v,v=null),L(p,g,v,N);function L(j,F,O,E,_){return i(j,F,O,function(P){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var o=e.appendFile;o&&(e.appendFile=s);function s(p,g,v,N){return typeof v=="function"&&(N=v,v=null),L(p,g,v,N);function L(j,F,O,E,_){return o(j,F,O,function(P){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var a=e.copyFile;a&&(e.copyFile=m);function m(p,g,v,N){return typeof v=="function"&&(N=v,v=0),L(p,g,v,N);function L(j,F,O,E,_){return a(j,F,O,function(P){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var w=e.readdir;e.readdir=f;var c=/^v[0-5]\./;function f(p,g,v){typeof g=="function"&&(v=g,g=null);var N=c.test(process.version)?function(F,O,E,_){return w(F,L(F,O,E,_))}:function(F,O,E,_){return w(F,O,L(F,O,E,_))};return N(p,g,v);function L(j,F,O,E){return function(_,P){_&&(_.code==="EMFILE"||_.code==="ENFILE")?ie([N,[j,F,O],_,E||Date.now(),Date.now()]):(P&&P.sort&&P.sort(),typeof O=="function"&&O.call(this,_,P))}}}if(process.version.substr(0,4)==="v0.8"){var u=En(e);k=u.ReadStream,q=u.WriteStream}var l=e.ReadStream;l&&(k.prototype=Object.create(l.prototype),k.prototype.open=D);var y=e.WriteStream;y&&(q.prototype=Object.create(y.prototype),q.prototype.open=h),Object.defineProperty(e,"ReadStream",{get:function(){return k},set:function(p){k=p},enumerable:!0,configurable:!0}),Object.defineProperty(e,"WriteStream",{get:function(){return q},set:function(p){q=p},enumerable:!0,configurable:!0});var b=k;Object.defineProperty(e,"FileReadStream",{get:function(){return b},set:function(p){b=p},enumerable:!0,configurable:!0});var S=q;Object.defineProperty(e,"FileWriteStream",{get:function(){return S},set:function(p){S=p},enumerable:!0,configurable:!0});function k(p,g){return this instanceof k?(l.apply(this,arguments),this):k.apply(Object.create(k.prototype),arguments)}function D(){var p=this;le(p.path,p.flags,p.mode,function(g,v){g?(p.autoClose&&p.destroy(),p.emit("error",g)):(p.fd=v,p.emit("open",v),p.read())})}function q(p,g){return this instanceof q?(y.apply(this,arguments),this):q.apply(Object.create(q.prototype),arguments)}function h(){var p=this;le(p.path,p.flags,p.mode,function(g,v){g?(p.destroy(),p.emit("error",g)):(p.fd=v,p.emit("open",v))})}function V(p,g){return new e.ReadStream(p,g)}function ne(p,g){return new e.WriteStream(p,g)}var ue=e.open;e.open=le;function le(p,g,v,N){return typeof v=="function"&&(N=v,v=null),L(p,g,v,N);function L(j,F,O,E,_){return ue(j,F,O,function(P,Fo){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}return e}function ie(e){ee("ENQUEUE",e[0].name,e[1]),x[$].push(e),Me()}var Ee;function ut(){for(var e=Date.now(),t=0;t<x[$].length;++t)x[$][t].length>2&&(x[$][t][3]=e,x[$][t][4]=e);Me()}function Me(){if(clearTimeout(Ee),Ee=void 0,x[$].length!==0){var e=x[$].shift(),t=e[0],r=e[1],i=e[2],n=e[3],o=e[4];if(n===void 0)ee("RETRY",t.name,r),t.apply(null,r);else if(Date.now()-n>=6e4){ee("TIMEOUT",t.name,r);var s=r.pop();typeof s=="function"&&s.call(null,i)}else{var a=Date.now()-o,m=Math.max(o-n,1),w=Math.min(m*1.2,100);a>=w?(ee("RETRY",t.name,r),t.apply(null,r.concat([n]))):x[$].push(e)}Ee===void 0&&(Ee=setTimeout(Me,0))}}});var M=d(G=>{"use strict";var ft=C().fromCallback,I=oe(),xn=["access","appendFile","chmod","chown","close","copyFile","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchmod","lchown","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","symlink","truncate","unlink","utimes","writeFile"].filter(e=>typeof I[e]=="function");Object.assign(G,I);xn.forEach(e=>{G[e]=ft(I[e])});G.exists=function(e,t){return typeof t=="function"?I.exists(e,t):new Promise(r=>I.exists(e,r))};G.read=function(e,t,r,i,n,o){return typeof o=="function"?I.read(e,t,r,i,n,o):new Promise((s,a)=>{I.read(e,t,r,i,n,(m,w,c)=>{if(m)return a(m);s({bytesRead:w,buffer:c})})})};G.write=function(e,t,...r){return typeof r[r.length-1]=="function"?I.write(e,t,...r):new Promise((i,n)=>{I.write(e,t,...r,(o,s,a)=>{if(o)return n(o);i({bytesWritten:s,buffer:a})})})};G.readv=function(e,t,...r){return typeof r[r.length-1]=="function"?I.readv(e,t,...r):new Promise((i,n)=>{I.readv(e,t,...r,(o,s,a)=>{if(o)return n(o);i({bytesRead:s,buffers:a})})})};G.writev=function(e,t,...r){return typeof r[r.length-1]=="function"?I.writev(e,t,...r):new Promise((i,n)=>{I.writev(e,t,...r,(o,s,a)=>{if(o)return n(o);i({bytesWritten:s,buffers:a})})})};typeof I.realpath.native=="function"?G.realpath.native=ft(I.realpath.native):process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?","Warning","fs-extra-WARN0003")});var pt=d((No,yt)=>{"use strict";var qn=require("path");yt.exports.checkPath=function(t){if(process.platform==="win32"&&/[<>:"|?*]/.test(t.replace(qn.parse(t).root,""))){let i=new Error(`Path contains invalid characters: ${t}`);throw i.code="EINVAL",i}}});var wt=d((Lo,We)=>{"use strict";var mt=M(),{checkPath:dt}=pt(),ht=e=>{let t={mode:511};return typeof e=="number"?e:{...t,...e}.mode};We.exports.makeDir=async(e,t)=>(dt(e),mt.mkdir(e,{mode:ht(t),recursive:!0}));We.exports.makeDirSync=(e,t)=>(dt(e),mt.mkdirSync(e,{mode:ht(t),recursive:!0}))});var J=d((_o,St)=>{"use strict";var On=C().fromPromise,{makeDir:Dn,makeDirSync:Ve}=wt(),Je=On(Dn);St.exports={mkdirs:Je,mkdirsSync:Ve,mkdirp:Je,mkdirpSync:Ve,ensureDir:Je,ensureDirSync:Ve}});var z=d(($o,vt)=>{"use strict";var jn=C().fromPromise,gt=M();function Cn(e){return gt.access(e).then(()=>!0).catch(()=>!1)}vt.exports={pathExists:jn(Cn),pathExistsSync:gt.existsSync}});var Be=d((Ro,bt)=>{"use strict";var ce=M(),Tn=C().fromPromise;async function Nn(e,t,r){let i=await ce.open(e,"r+"),n=null;try{await ce.futimes(i,t,r)}finally{try{await ce.close(i)}catch(o){n=o}}if(n)throw n}function Ln(e,t,r){let i=ce.openSync(e,"r+");return ce.futimesSync(i,t,r),ce.closeSync(i)}bt.exports={utimesMillis:Tn(Nn),utimesMillisSync:Ln}});var te=d((Io,Ft)=>{"use strict";var se=M(),T=require("path"),kt=C().fromPromise;function _n(e,t,r){let i=r.dereference?n=>se.stat(n,{bigint:!0}):n=>se.lstat(n,{bigint:!0});return Promise.all([i(e),i(t).catch(n=>{if(n.code==="ENOENT")return null;throw n})]).then(([n,o])=>({srcStat:n,destStat:o}))}function $n(e,t,r){let i,n=r.dereference?s=>se.statSync(s,{bigint:!0}):s=>se.lstatSync(s,{bigint:!0}),o=n(e);try{i=n(t)}catch(s){if(s.code==="ENOENT")return{srcStat:o,destStat:null};throw s}return{srcStat:o,destStat:i}}async function Rn(e,t,r,i){let{srcStat:n,destStat:o}=await _n(e,t,i);if(o){if(fe(n,o)){let s=T.basename(e),a=T.basename(t);if(r==="move"&&s!==a&&s.toLowerCase()===a.toLowerCase())return{srcStat:n,destStat:o,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(n.isDirectory()&&!o.isDirectory())throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);if(!n.isDirectory()&&o.isDirectory())throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)}if(n.isDirectory()&&Ge(e,t))throw new Error(Fe(e,t,r));return{srcStat:n,destStat:o}}function In(e,t,r,i){let{srcStat:n,destStat:o}=$n(e,t,i);if(o){if(fe(n,o)){let s=T.basename(e),a=T.basename(t);if(r==="move"&&s!==a&&s.toLowerCase()===a.toLowerCase())return{srcStat:n,destStat:o,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(n.isDirectory()&&!o.isDirectory())throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);if(!n.isDirectory()&&o.isDirectory())throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)}if(n.isDirectory()&&Ge(e,t))throw new Error(Fe(e,t,r));return{srcStat:n,destStat:o}}async function Et(e,t,r,i){let n=T.resolve(T.dirname(e)),o=T.resolve(T.dirname(r));if(o===n||o===T.parse(o).root)return;let s;try{s=await se.stat(o,{bigint:!0})}catch(a){if(a.code==="ENOENT")return;throw a}if(fe(t,s))throw new Error(Fe(e,r,i));return Et(e,t,o,i)}function Pt(e,t,r,i){let n=T.resolve(T.dirname(e)),o=T.resolve(T.dirname(r));if(o===n||o===T.parse(o).root)return;let s;try{s=se.statSync(o,{bigint:!0})}catch(a){if(a.code==="ENOENT")return;throw a}if(fe(t,s))throw new Error(Fe(e,r,i));return Pt(e,t,o,i)}function fe(e,t){return t.ino&&t.dev&&t.ino===e.ino&&t.dev===e.dev}function Ge(e,t){let r=T.resolve(e).split(T.sep).filter(n=>n),i=T.resolve(t).split(T.sep).filter(n=>n);return r.every((n,o)=>i[o]===n)}function Fe(e,t,r){return`Cannot ${r} '${e}' to a subdirectory of itself, '${t}'.`}Ft.exports={checkPaths:kt(Rn),checkPathsSync:In,checkParentPaths:kt(Et),checkParentPathsSync:Pt,isSrcSubdir:Ge,areIdentical:fe}});var jt=d((Mo,Dt)=>{"use strict";var R=M(),ye=require("path"),{mkdirs:Mn}=J(),{pathExists:An}=z(),{utimesMillis:Wn}=Be(),pe=te();async function Vn(e,t,r={}){typeof r=="function"&&(r={filter:r}),r.clobber="clobber"in r?!!r.clobber:!0,r.overwrite="overwrite"in r?!!r.overwrite:r.clobber,r.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0001");let{srcStat:i,destStat:n}=await pe.checkPaths(e,t,"copy",r);if(await pe.checkParentPaths(e,i,t,"copy"),!await qt(e,t,r))return;let s=ye.dirname(t);await An(s)||await Mn(s),await Ot(n,e,t,r)}async function qt(e,t,r){return r.filter?r.filter(e,t):!0}async function Ot(e,t,r,i){let o=await(i.dereference?R.stat:R.lstat)(t);if(o.isDirectory())return Un(o,e,t,r,i);if(o.isFile()||o.isCharacterDevice()||o.isBlockDevice())return Jn(o,e,t,r,i);if(o.isSymbolicLink())return Kn(e,t,r,i);throw o.isSocket()?new Error(`Cannot copy a socket file: ${t}`):o.isFIFO()?new Error(`Cannot copy a FIFO pipe: ${t}`):new Error(`Unknown file: ${t}`)}async function Jn(e,t,r,i,n){if(!t)return xt(e,r,i,n);if(n.overwrite)return await R.unlink(i),xt(e,r,i,n);if(n.errorOnExist)throw new Error(`'${i}' already exists`)}async function xt(e,t,r,i){if(await R.copyFile(t,r),i.preserveTimestamps){Bn(e.mode)&&await Gn(r,e.mode);let n=await R.stat(t);await Wn(r,n.atime,n.mtime)}return R.chmod(r,e.mode)}function Bn(e){return(e&128)===0}function Gn(e,t){return R.chmod(e,t|128)}async function Un(e,t,r,i,n){t||await R.mkdir(i);let o=await R.readdir(r);await Promise.all(o.map(async s=>{let a=ye.join(r,s),m=ye.join(i,s);if(!await qt(a,m,n))return;let{destStat:c}=await pe.checkPaths(a,m,"copy",n);return Ot(c,a,m,n)})),t||await R.chmod(i,e.mode)}async function Kn(e,t,r,i){let n=await R.readlink(t);if(i.dereference&&(n=ye.resolve(process.cwd(),n)),!e)return R.symlink(n,r);let o=null;try{o=await R.readlink(r)}catch(s){if(s.code==="EINVAL"||s.code==="UNKNOWN")return R.symlink(n,r);throw s}if(i.dereference&&(o=ye.resolve(process.cwd(),o)),pe.isSrcSubdir(n,o))throw new Error(`Cannot copy '${n}' to a subdirectory of itself, '${o}'.`);if(pe.isSrcSubdir(o,n))throw new Error(`Cannot overwrite '${o}' with '${n}'.`);return await R.unlink(r),R.symlink(n,r)}Dt.exports=Vn});var _t=d((Ao,Lt)=>{"use strict";var A=oe(),me=require("path"),Yn=J().mkdirsSync,zn=Be().utimesMillisSync,de=te();function Hn(e,t,r){typeof r=="function"&&(r={filter:r}),r=r||{},r.clobber="clobber"in r?!!r.clobber:!0,r.overwrite="overwrite"in r?!!r.overwrite:r.clobber,r.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0002");let{srcStat:i,destStat:n}=de.checkPathsSync(e,t,"copy",r);if(de.checkParentPathsSync(e,i,t,"copy"),r.filter&&!r.filter(e,t))return;let o=me.dirname(t);return A.existsSync(o)||Yn(o),Ct(n,e,t,r)}function Ct(e,t,r,i){let o=(i.dereference?A.statSync:A.lstatSync)(t);if(o.isDirectory())return ni(o,e,t,r,i);if(o.isFile()||o.isCharacterDevice()||o.isBlockDevice())return Qn(o,e,t,r,i);if(o.isSymbolicLink())return ci(e,t,r,i);throw o.isSocket()?new Error(`Cannot copy a socket file: ${t}`):o.isFIFO()?new Error(`Cannot copy a FIFO pipe: ${t}`):new Error(`Unknown file: ${t}`)}function Qn(e,t,r,i,n){return t?Zn(e,r,i,n):Tt(e,r,i,n)}function Zn(e,t,r,i){if(i.overwrite)return A.unlinkSync(r),Tt(e,t,r,i);if(i.errorOnExist)throw new Error(`'${r}' already exists`)}function Tt(e,t,r,i){return A.copyFileSync(t,r),i.preserveTimestamps&&Xn(e.mode,t,r),Ue(r,e.mode)}function Xn(e,t,r){return ei(e)&&ti(r,e),ri(t,r)}function ei(e){return(e&128)===0}function ti(e,t){return Ue(e,t|128)}function Ue(e,t){return A.chmodSync(e,t)}function ri(e,t){let r=A.statSync(e);return zn(t,r.atime,r.mtime)}function ni(e,t,r,i,n){return t?Nt(r,i,n):ii(e.mode,r,i,n)}function ii(e,t,r,i){return A.mkdirSync(r),Nt(t,r,i),Ue(r,e)}function Nt(e,t,r){A.readdirSync(e).forEach(i=>oi(i,e,t,r))}function oi(e,t,r,i){let n=me.join(t,e),o=me.join(r,e);if(i.filter&&!i.filter(n,o))return;let{destStat:s}=de.checkPathsSync(n,o,"copy",i);return Ct(s,n,o,i)}function ci(e,t,r,i){let n=A.readlinkSync(t);if(i.dereference&&(n=me.resolve(process.cwd(),n)),e){let o;try{o=A.readlinkSync(r)}catch(s){if(s.code==="EINVAL"||s.code==="UNKNOWN")return A.symlinkSync(n,r);throw s}if(i.dereference&&(o=me.resolve(process.cwd(),o)),de.isSrcSubdir(n,o))throw new Error(`Cannot copy '${n}' to a subdirectory of itself, '${o}'.`);if(de.isSrcSubdir(o,n))throw new Error(`Cannot overwrite '${o}' with '${n}'.`);return si(n,r)}else return A.symlinkSync(n,r)}function si(e,t){return A.unlinkSync(t),A.symlinkSync(e,t)}Lt.exports=Hn});var xe=d((Wo,$t)=>{"use strict";var ai=C().fromPromise;$t.exports={copy:ai(jt()),copySync:_t()}});var he=d((Vo,It)=>{"use strict";var Rt=oe(),ui=C().fromCallback;function li(e,t){Rt.rm(e,{recursive:!0,force:!0},t)}function fi(e){Rt.rmSync(e,{recursive:!0,force:!0})}It.exports={remove:ui(li),removeSync:fi}});var Ut=d((Jo,Gt)=>{"use strict";var yi=C().fromPromise,Wt=M(),Vt=require("path"),Jt=J(),Bt=he(),Mt=yi(async function(t){let r;try{r=await Wt.readdir(t)}catch{return Jt.mkdirs(t)}return Promise.all(r.map(i=>Bt.remove(Vt.join(t,i))))});function At(e){let t;try{t=Wt.readdirSync(e)}catch{return Jt.mkdirsSync(e)}t.forEach(r=>{r=Vt.join(e,r),Bt.removeSync(r)})}Gt.exports={emptyDirSync:At,emptydirSync:At,emptyDir:Mt,emptydir:Mt}});var Ht=d((Bo,zt)=>{"use strict";var pi=C().fromPromise,Kt=require("path"),U=M(),Yt=J();async function mi(e){let t;try{t=await U.stat(e)}catch{}if(t&&t.isFile())return;let r=Kt.dirname(e),i=null;try{i=await U.stat(r)}catch(n){if(n.code==="ENOENT"){await Yt.mkdirs(r),await U.writeFile(e,"");return}else throw n}i.isDirectory()?await U.writeFile(e,""):await U.readdir(r)}function di(e){let t;try{t=U.statSync(e)}catch{}if(t&&t.isFile())return;let r=Kt.dirname(e);try{U.statSync(r).isDirectory()||U.readdirSync(r)}catch(i){if(i&&i.code==="ENOENT")Yt.mkdirsSync(r);else throw i}U.writeFileSync(e,"")}zt.exports={createFile:pi(mi),createFileSync:di}});var tr=d((Go,er)=>{"use strict";var hi=C().fromPromise,Qt=require("path"),H=M(),Zt=J(),{pathExists:wi}=z(),{areIdentical:Xt}=te();async function Si(e,t){let r;try{r=await H.lstat(t)}catch{}let i;try{i=await H.lstat(e)}catch(s){throw s.message=s.message.replace("lstat","ensureLink"),s}if(r&&Xt(i,r))return;let n=Qt.dirname(t);await wi(n)||await Zt.mkdirs(n),await H.link(e,t)}function gi(e,t){let r;try{r=H.lstatSync(t)}catch{}try{let o=H.lstatSync(e);if(r&&Xt(o,r))return}catch(o){throw o.message=o.message.replace("lstat","ensureLink"),o}let i=Qt.dirname(t);return H.existsSync(i)||Zt.mkdirsSync(i),H.linkSync(e,t)}er.exports={createLink:hi(Si),createLinkSync:gi}});var nr=d((Uo,rr)=>{"use strict";var Q=require("path"),we=M(),{pathExists:vi}=z(),bi=C().fromPromise;async function ki(e,t){if(Q.isAbsolute(e)){try{await we.lstat(e)}catch(o){throw o.message=o.message.replace("lstat","ensureSymlink"),o}return{toCwd:e,toDst:e}}let r=Q.dirname(t),i=Q.join(r,e);if(await vi(i))return{toCwd:i,toDst:e};try{await we.lstat(e)}catch(o){throw o.message=o.message.replace("lstat","ensureSymlink"),o}return{toCwd:e,toDst:Q.relative(r,e)}}function Ei(e,t){if(Q.isAbsolute(e)){if(!we.existsSync(e))throw new Error("absolute srcpath does not exist");return{toCwd:e,toDst:e}}let r=Q.dirname(t),i=Q.join(r,e);if(we.existsSync(i))return{toCwd:i,toDst:e};if(!we.existsSync(e))throw new Error("relative srcpath does not exist");return{toCwd:e,toDst:Q.relative(r,e)}}rr.exports={symlinkPaths:bi(ki),symlinkPathsSync:Ei}});var cr=d((Ko,or)=>{"use strict";var ir=M(),Pi=C().fromPromise;async function Fi(e,t){if(t)return t;let r;try{r=await ir.lstat(e)}catch{return"file"}return r&&r.isDirectory()?"dir":"file"}function xi(e,t){if(t)return t;let r;try{r=ir.lstatSync(e)}catch{return"file"}return r&&r.isDirectory()?"dir":"file"}or.exports={symlinkType:Pi(Fi),symlinkTypeSync:xi}});var lr=d((Yo,ur)=>{"use strict";var qi=C().fromPromise,sr=require("path"),B=M(),{mkdirs:Oi,mkdirsSync:Di}=J(),{symlinkPaths:ji,symlinkPathsSync:Ci}=nr(),{symlinkType:Ti,symlinkTypeSync:Ni}=cr(),{pathExists:Li}=z(),{areIdentical:ar}=te();async function _i(e,t,r){let i;try{i=await B.lstat(t)}catch{}if(i&&i.isSymbolicLink()){let[a,m]=await Promise.all([B.stat(e),B.stat(t)]);if(ar(a,m))return}let n=await ji(e,t);e=n.toDst;let o=await Ti(n.toCwd,r),s=sr.dirname(t);return await Li(s)||await Oi(s),B.symlink(e,t,o)}function $i(e,t,r){let i;try{i=B.lstatSync(t)}catch{}if(i&&i.isSymbolicLink()){let a=B.statSync(e),m=B.statSync(t);if(ar(a,m))return}let n=Ci(e,t);e=n.toDst,r=Ni(n.toCwd,r);let o=sr.dirname(t);return B.existsSync(o)||Di(o),B.symlinkSync(e,t,r)}ur.exports={createSymlink:qi(_i),createSymlinkSync:$i}});var Sr=d((zo,wr)=>{"use strict";var{createFile:fr,createFileSync:yr}=Ht(),{createLink:pr,createLinkSync:mr}=tr(),{createSymlink:dr,createSymlinkSync:hr}=lr();wr.exports={createFile:fr,createFileSync:yr,ensureFile:fr,ensureFileSync:yr,createLink:pr,createLinkSync:mr,ensureLink:pr,ensureLinkSync:mr,createSymlink:dr,createSymlinkSync:hr,ensureSymlink:dr,ensureSymlinkSync:hr}});var qe=d((Ho,gr)=>{function Ri(e,{EOL:t=`
`,finalEOL:r=!0,replacer:i=null,spaces:n}={}){let o=r?t:"";return JSON.stringify(e,i,n).replace(/\n/g,t)+o}function Ii(e){return Buffer.isBuffer(e)&&(e=e.toString("utf8")),e.replace(/^\uFEFF/,"")}gr.exports={stringify:Ri,stripBom:Ii}});var Er=d((Qo,kr)=>{var ae;try{ae=oe()}catch{ae=require("fs")}var Oe=C(),{stringify:vr,stripBom:br}=qe();async function Mi(e,t={}){typeof t=="string"&&(t={encoding:t});let r=t.fs||ae,i="throws"in t?t.throws:!0,n=await Oe.fromCallback(r.readFile)(e,t);n=br(n);let o;try{o=JSON.parse(n,t?t.reviver:null)}catch(s){if(i)throw s.message=`${e}: ${s.message}`,s;return null}return o}var Ai=Oe.fromPromise(Mi);function Wi(e,t={}){typeof t=="string"&&(t={encoding:t});let r=t.fs||ae,i="throws"in t?t.throws:!0;try{let n=r.readFileSync(e,t);return n=br(n),JSON.parse(n,t.reviver)}catch(n){if(i)throw n.message=`${e}: ${n.message}`,n;return null}}async function Vi(e,t,r={}){let i=r.fs||ae,n=vr(t,r);await Oe.fromCallback(i.writeFile)(e,n,r)}var Ji=Oe.fromPromise(Vi);function Bi(e,t,r={}){let i=r.fs||ae,n=vr(t,r);return i.writeFileSync(e,n,r)}var Gi={readFile:Ai,readFileSync:Wi,writeFile:Ji,writeFileSync:Bi};kr.exports=Gi});var Fr=d((Zo,Pr)=>{"use strict";var De=Er();Pr.exports={readJson:De.readFile,readJsonSync:De.readFileSync,writeJson:De.writeFile,writeJsonSync:De.writeFileSync}});var je=d((Xo,Or)=>{"use strict";var Ui=C().fromPromise,Ke=M(),xr=require("path"),qr=J(),Ki=z().pathExists;async function Yi(e,t,r="utf-8"){let i=xr.dirname(e);return await Ki(i)||await qr.mkdirs(i),Ke.writeFile(e,t,r)}function zi(e,...t){let r=xr.dirname(e);Ke.existsSync(r)||qr.mkdirsSync(r),Ke.writeFileSync(e,...t)}Or.exports={outputFile:Ui(Yi),outputFileSync:zi}});var jr=d((ec,Dr)=>{"use strict";var{stringify:Hi}=qe(),{outputFile:Qi}=je();async function Zi(e,t,r={}){let i=Hi(t,r);await Qi(e,i,r)}Dr.exports=Zi});var Tr=d((tc,Cr)=>{"use strict";var{stringify:Xi}=qe(),{outputFileSync:eo}=je();function to(e,t,r){let i=Xi(t,r);eo(e,i,r)}Cr.exports=to});var Lr=d((rc,Nr)=>{"use strict";var ro=C().fromPromise,W=Fr();W.outputJson=ro(jr());W.outputJsonSync=Tr();W.outputJSON=W.outputJson;W.outputJSONSync=W.outputJsonSync;W.writeJSON=W.writeJson;W.writeJSONSync=W.writeJsonSync;W.readJSON=W.readJson;W.readJSONSync=W.readJsonSync;Nr.exports=W});var Mr=d((nc,Ir)=>{"use strict";var no=M(),_r=require("path"),{copy:io}=xe(),{remove:Rr}=he(),{mkdirp:oo}=J(),{pathExists:co}=z(),$r=te();async function so(e,t,r={}){let i=r.overwrite||r.clobber||!1,{srcStat:n,isChangingCase:o=!1}=await $r.checkPaths(e,t,"move",r);await $r.checkParentPaths(e,n,t,"move");let s=_r.dirname(t);return _r.parse(s).root!==s&&await oo(s),ao(e,t,i,o)}async function ao(e,t,r,i){if(!i){if(r)await Rr(t);else if(await co(t))throw new Error("dest already exists.")}try{await no.rename(e,t)}catch(n){if(n.code!=="EXDEV")throw n;await uo(e,t,r)}}async function uo(e,t,r){return await io(e,t,{overwrite:r,errorOnExist:!0,preserveTimestamps:!0}),Rr(e)}Ir.exports=so});var Br=d((ic,Jr)=>{"use strict";var Wr=oe(),ze=require("path"),lo=xe().copySync,Vr=he().removeSync,fo=J().mkdirpSync,Ar=te();function yo(e,t,r){r=r||{};let i=r.overwrite||r.clobber||!1,{srcStat:n,isChangingCase:o=!1}=Ar.checkPathsSync(e,t,"move",r);return Ar.checkParentPathsSync(e,n,t,"move"),po(t)||fo(ze.dirname(t)),mo(e,t,i,o)}function po(e){let t=ze.dirname(e);return ze.parse(t).root===t}function mo(e,t,r,i){if(i)return Ye(e,t,r);if(r)return Vr(t),Ye(e,t,r);if(Wr.existsSync(t))throw new Error("dest already exists.");return Ye(e,t,r)}function Ye(e,t,r){try{Wr.renameSync(e,t)}catch(i){if(i.code!=="EXDEV")throw i;return ho(e,t,r)}}function ho(e,t,r){return lo(e,t,{overwrite:r,errorOnExist:!0,preserveTimestamps:!0}),Vr(e)}Jr.exports=yo});var Ur=d((oc,Gr)=>{"use strict";var wo=C().fromPromise;Gr.exports={move:wo(Mr()),moveSync:Br()}});var He=d((cc,Kr)=>{"use strict";Kr.exports={...M(),...xe(),...Ut(),...Sr(),...Lr(),...J(),...Ur(),...je(),...z(),...he()}});var zr=d((sc,Yr)=>{"use strict";Yr.exports=e=>{e=Object.assign({onlyFirst:!1},e);let t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e.onlyFirst?void 0:"g")}});var Qr=d((ac,Qe)=>{"use strict";var So=zr(),Hr=e=>typeof e=="string"?e.replace(So(),""):e;Qe.exports=Hr;Qe.exports.default=Hr});var Xr=d((uc,Zr)=>{"use strict";var Ce=require("fs"),go=Qr(),vo=13;function bo(e){e=e||{};var t=e.sigint,r=e.eot,i=e.autocomplete=e.autocomplete||function(){return[]},n=e.history;return o.history=n||{save:function(){}},o.hide=function(a){return o(a,{echo:""})},o;function o(a,m,w){var c=0,f=0,u,l,y;w=w||{},Object(a)===a?(w=a,a=w.ask):Object(m)===m&&(w=m,m=w.value),a=a||"";var b=w.echo,S="echo"in w;i=w.autocomplete||i;var k=process.platform==="win32"?process.stdin.fd:Ce.openSync("/dev/tty","rs"),D=process.stdin.isRaw;D||process.stdin.setRawMode&&process.stdin.setRawMode(!0);var q=Buffer.alloc(3),h="",V,ne;y="",a&&process.stdout.write(a);for(var ue=0,le;;){if(ne=Ce.readSync(k,q,0,3),ne>1){switch(q.toString()){case"\x1B[A":if(S||!n||n.atStart())break;n.atEnd()&&(y=h,f=c),h=n.prev(),c=h.length,process.stdout.write("\x1B[2K\x1B[0G"+a+h);break;case"\x1B[B":if(S||!n||n.pastEnd())break;n.atPenultimate()?(h=y,c=f,n.next()):(h=n.next(),c=h.length),process.stdout.write("\x1B[2K\x1B[0G"+a+h+"\x1B["+(c+a.length+1)+"G");break;case"\x1B[D":if(S)break;var p=c;c=--c<0?0:c,p-c&&process.stdout.write("\x1B[1D");break;case"\x1B[C":if(S)break;c=++c>h.length?h.length:c,process.stdout.write("\x1B["+(c+a.length+1)+"G");break;default:q.toString()&&(h=h+q.toString(),h=h.replace(/\0/g,""),c=h.length,s(S,a,b,h,c),process.stdout.write("\x1B["+(c+a.length+1)+"G"),q=Buffer.alloc(3))}continue}if(V=q[ne-1],V==3)return process.stdout.write(`^C
`),Ce.closeSync(k),t&&process.exit(130),process.stdin.setRawMode&&process.stdin.setRawMode(D),null;if(V==4&&h.length==0&&r&&(process.stdout.write(`exit
`),process.exit(0)),V==vo){if(Ce.closeSync(k),!n)break;!S&&h.length&&n.push(h),n.reset();break}if(V==9){if(u=i(h),h==u[0]?u=i(""):le=u.length,u.length==0){process.stdout.write("	");continue}var g=u[ue++]||u[ue=0,ue++];g&&(process.stdout.write("\r\x1B[K"+a+g),h=g,c=g.length)}if(V==127||process.platform=="win32"&&V==8){if(!c)continue;h=h.slice(0,c-1)+h.slice(c),c--,process.stdout.write("\x1B[2D")}else{if(V<32||V>126)continue;h=h.slice(0,c)+String.fromCharCode(V)+h.slice(c),c++}s(S,a,b,h,c)}return process.stdout.write(`
`),process.stdin.setRawMode&&process.stdin.setRawMode(D),h||m||""}function s(a,m,w,c,f){if(a)process.stdout.write("\x1B[2K\x1B[0G"+m+Array(c.length+1).join(w));else{process.stdout.write("\x1B[s"),f==c.length||m?process.stdout.write("\x1B[2K\x1B[0G"+m+c):process.stdout.write("\x1B[2K\x1B[0G"+c+"\x1B["+(c.length-f)+"D");var u=go(m).length;process.stdout.write(`\x1B[${u+1+(w==""?0:f)}G`)}}}Zr.exports=bo});var un=K(require("node:process"));var Xe=require("node:process");var en=K(require("node:process")),Te=K(require("node:path")),Se=K(He()),tn=K(Xr()),Ze=(0,tn.default)(),Ne=Te.default.join(__filename,".."),rn=Te.default.join(Ne,"common"),lc=Se.default.readdirSync(Te.default.join(Ne,"templates"));function ge(e="Cancelled.",t=0){console.log(e),en.default.exit(t)}function Z(e,t,r){if(!Se.default.existsSync(e))return;let n=Se.default.readFileSync(e,"utf-8").replace(t,r);Se.default.writeFileSync(e,n,"utf-8")}var[ko,X]=(()=>{let e=[],t={};return Xe.argv.forEach(r=>{if(/^(-|--)/.exec(r)){r=r.replace(/(-|--)+/g,"");let[i,n]=r.split("=");t[i]=n||!0}else e.push(r)}),[e,t]})();(X.d||X.debug)&&console.log("Argv",Xe.argv,"Args:",ko,`
`,"Flags:",X);function nn(){console.log(`Usage: template-defaults [projectType] [projectDir] [projectName] [projectGitRepo] [configureEslint] [installDep]

        Options:
            -d, --debug: Debug mode.
            -y, --yes:  Skip prompts.
            -h, --help: Show help message.`),ge("",0)}var Le={projectType:{initPrompt:"Project type (valid types: 'ts', 'react-ts', 'html-ts'): ",defaultMessage:"Using default type 'ts'.",defaultValue:"ts"},projectDir:{initPrompt:"Project directory: ",defaultMessage:"Using the current working directory.",defaultValue:"."},projectName:{initPrompt:"Project name: ",defaultMessage:"Using default name 'my-project'.",defaultValue:"my-project"},projectGitRepo:{initPrompt:"Project git repo: ",defaultMessage:"Using default repo 'https://github.com/xShadowBlade/template-defaults', which is the template-defaults repo.",defaultValue:"https://github.com/xShadowBlade/template-defaults"},configureEslint:{initPrompt:"Configure ESLint (y/n) [y]: ",defaultMessage:"Using default value 'y'.",defaultValue:"y"},installDep:{initPrompt:"Install dependencies (y/n) [y]: ",defaultMessage:"Using default value 'y'.",defaultValue:"y"}},on=(()=>{let e={};for(let t in Le)e[t]=Le[t].defaultValue;return e})();function Eo(e){let{initPrompt:t,defaultMessage:r,defaultValue:i,cancelMessage:n,cancelCode:o}=e,s=Ze(t);return s===null&&ge(n,o),s=s.toLowerCase().trim().replace(/[^a-z-]/g,""),s||(console.log(r??`Using default value '${i}'.`),s=i),console.log(""),s}function cn(){console.log("This CLI tool will create a new project in the specified directory."),console.log("For more information, see https://github.com/xShadowBlade/template-defaults"),console.log(`Press ^C at any time to cancel. 
`);let e={};for(let r in Le)e[r]=Eo(Le[r]);let t=Ze("Confirm (y/n) [y]: ").toLowerCase();return["","y","yes"].includes(t)||ge(),e}var _e=K(require("node:process")),re=K(require("node:path")),ve=K(He()),sn=require("node:child_process");function an(e){let{projectType:t,projectDir:r,projectName:i,projectGitRepo:n,configureEslint:o,installDep:s}=e,a=re.default.join(_e.default.cwd(),r);ve.default.copySync(rn,a);let m=re.default.join(Ne,"templates",t);m?ve.default.copySync(m,a,{filter:(u,l)=>!l.includes("node_modules")}):(console.error("Invalid project type."),_e.default.exit(1));let w=re.default.join(a,"package.json"),c=re.default.join(a,"package-lock.json");if((!o||!["y","yes","true"].includes(o))&&(ve.default.removeSync(re.default.join(a,".eslintrc.json")),ve.default.removeSync(re.default.join(a,".prettierrc.json")),["@eslint/eslint","@types/eslint__js","eslint","eslint-plugin-jsdoc","eslint-plugin-prettier","prettier","typescript-eslint","eslint-plugin-react"].forEach(l=>{Z(w,new RegExp(`
 {4}"${l}": ".*",`),"")}),Z(w,/^\s*$/gm,"")),Z(w,/"name": ".*"/,`"name": "${i}"`),Z(w,/"url": ".*"/,`"url": "${n}"`),Z(w,/"url": ".*\/issues"/,`"url": "${n}/issues"`),Z(w,/"homepage": ".*"/,`"homepage": "${n}#readme"`),Z(c,`"name": "${t}"`,`"name": "${i}"`),s&&["y","yes","true"].includes(s)){console.log(`
Installing dependencies...`);try{(0,sn.execSync)("npm install",{cwd:a,stdio:"inherit"})}catch(u){console.error("Failed to install dependencies.",u),_e.default.exit(1)}}console.log(`
Done!`);let f=[{message:"npm install",condition:s&&["y","yes","true"].includes(s)},{message:"npm start",condition:["react-ts","html-ts"].includes(t)}];f.some(u=>u.condition)&&console.log("To get started, run the following commands:"),f.forEach(u=>{u.condition&&console.log(u.message)})}(X.h||X.help)&&nn();var Po=Object.assign(on,X.y||X.yes?{}:cn());an(Po);un.default.exit(0);
