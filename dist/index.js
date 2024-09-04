#!/usr/bin/env node
"use strict";var fn=Object.create;var Xe=Object.defineProperty;var yn=Object.getOwnPropertyDescriptor;var mn=Object.getOwnPropertyNames;var pn=Object.getPrototypeOf,dn=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var hn=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of mn(t))!dn.call(e,n)&&n!==r&&Xe(e,n,{get:()=>t[n],enumerable:!(i=yn(t,n))||i.enumerable});return e};var U=(e,t,r)=>(r=e!=null?fn(pn(e)):{},hn(t||!e||!e.__esModule?Xe(r,"default",{value:e,enumerable:!0}):r,e));var C=d($e=>{"use strict";$e.fromCallback=function(e){return Object.defineProperty(function(...t){if(typeof t[t.length-1]=="function")e.apply(this,t);else return new Promise((r,i)=>{t.push((n,o)=>n!=null?i(n):r(o)),e.apply(this,t)})},"name",{value:e.name})};$e.fromPromise=function(e){return Object.defineProperty(function(...t){let r=t[t.length-1];if(typeof r!="function")return e.apply(this,t);t.pop(),e.apply(this,t).then(i=>r(null,i),r)},"name",{value:e.name})}});var tt=d((jo,et)=>{var Y=require("constants"),wn=process.cwd,be=null,Sn=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return be||(be=wn.call(process)),be};try{process.cwd()}catch{}typeof process.chdir=="function"&&(Re=process.chdir,process.chdir=function(e){be=null,Re.call(process,e)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,Re));var Re;et.exports=gn;function gn(e){Y.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&t(e),e.lutimes||r(e),e.chown=o(e.chown),e.fchown=o(e.fchown),e.lchown=o(e.lchown),e.chmod=i(e.chmod),e.fchmod=i(e.fchmod),e.lchmod=i(e.lchmod),e.chownSync=s(e.chownSync),e.fchownSync=s(e.fchownSync),e.lchownSync=s(e.lchownSync),e.chmodSync=n(e.chmodSync),e.fchmodSync=n(e.fchmodSync),e.lchmodSync=n(e.lchmodSync),e.stat=a(e.stat),e.fstat=a(e.fstat),e.lstat=a(e.lstat),e.statSync=p(e.statSync),e.fstatSync=p(e.fstatSync),e.lstatSync=p(e.lstatSync),e.chmod&&!e.lchmod&&(e.lchmod=function(c,f,u){u&&process.nextTick(u)},e.lchmodSync=function(){}),e.chown&&!e.lchown&&(e.lchown=function(c,f,u,l){l&&process.nextTick(l)},e.lchownSync=function(){}),Sn==="win32"&&(e.rename=typeof e.rename!="function"?e.rename:function(c){function f(u,l,y){var b=Date.now(),S=0;c(u,l,function k(D){if(D&&(D.code==="EACCES"||D.code==="EPERM"||D.code==="EBUSY")&&Date.now()-b<6e4){setTimeout(function(){e.stat(l,function(q,h){q&&q.code==="ENOENT"?c(u,l,k):y(D)})},S),S<100&&(S+=10);return}y&&y(D)})}return Object.setPrototypeOf&&Object.setPrototypeOf(f,c),f}(e.rename)),e.read=typeof e.read!="function"?e.read:function(c){function f(u,l,y,b,S,k){var D;if(k&&typeof k=="function"){var q=0;D=function(h,V,ne){if(h&&h.code==="EAGAIN"&&q<10)return q++,c.call(e,u,l,y,b,S,D);k.apply(this,arguments)}}return c.call(e,u,l,y,b,S,D)}return Object.setPrototypeOf&&Object.setPrototypeOf(f,c),f}(e.read),e.readSync=typeof e.readSync!="function"?e.readSync:function(c){return function(f,u,l,y,b){for(var S=0;;)try{return c.call(e,f,u,l,y,b)}catch(k){if(k.code==="EAGAIN"&&S<10){S++;continue}throw k}}}(e.readSync);function t(c){c.lchmod=function(f,u,l){c.open(f,Y.O_WRONLY|Y.O_SYMLINK,u,function(y,b){if(y){l&&l(y);return}c.fchmod(b,u,function(S){c.close(b,function(k){l&&l(S||k)})})})},c.lchmodSync=function(f,u){var l=c.openSync(f,Y.O_WRONLY|Y.O_SYMLINK,u),y=!0,b;try{b=c.fchmodSync(l,u),y=!1}finally{if(y)try{c.closeSync(l)}catch{}else c.closeSync(l)}return b}}function r(c){Y.hasOwnProperty("O_SYMLINK")&&c.futimes?(c.lutimes=function(f,u,l,y){c.open(f,Y.O_SYMLINK,function(b,S){if(b){y&&y(b);return}c.futimes(S,u,l,function(k){c.close(S,function(D){y&&y(k||D)})})})},c.lutimesSync=function(f,u,l){var y=c.openSync(f,Y.O_SYMLINK),b,S=!0;try{b=c.futimesSync(y,u,l),S=!1}finally{if(S)try{c.closeSync(y)}catch{}else c.closeSync(y)}return b}):c.futimes&&(c.lutimes=function(f,u,l,y){y&&process.nextTick(y)},c.lutimesSync=function(){})}function i(c){return c&&function(f,u,l){return c.call(e,f,u,function(y){w(y)&&(y=null),l&&l.apply(this,arguments)})}}function n(c){return c&&function(f,u){try{return c.call(e,f,u)}catch(l){if(!w(l))throw l}}}function o(c){return c&&function(f,u,l,y){return c.call(e,f,u,l,function(b){w(b)&&(b=null),y&&y.apply(this,arguments)})}}function s(c){return c&&function(f,u,l){try{return c.call(e,f,u,l)}catch(y){if(!w(y))throw y}}}function a(c){return c&&function(f,u,l){typeof u=="function"&&(l=u,u=null);function y(b,S){S&&(S.uid<0&&(S.uid+=4294967296),S.gid<0&&(S.gid+=4294967296)),l&&l.apply(this,arguments)}return u?c.call(e,f,u,y):c.call(e,f,y)}}function p(c){return c&&function(f,u){var l=u?c.call(e,f,u):c.call(e,f);return l&&(l.uid<0&&(l.uid+=4294967296),l.gid<0&&(l.gid+=4294967296)),l}}function w(c){if(!c||c.code==="ENOSYS")return!0;var f=!process.getuid||process.getuid()!==0;return!!(f&&(c.code==="EINVAL"||c.code==="EPERM"))}}});var it=d((Co,nt)=>{var rt=require("stream").Stream;nt.exports=vn;function vn(e){return{ReadStream:t,WriteStream:r};function t(i,n){if(!(this instanceof t))return new t(i,n);rt.call(this);var o=this;this.path=i,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=64*1024,n=n||{};for(var s=Object.keys(n),a=0,p=s.length;a<p;a++){var w=s[a];this[w]=n[w]}if(this.encoding&&this.setEncoding(this.encoding),this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.end===void 0)this.end=1/0;else if(typeof this.end!="number")throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(this.fd!==null){process.nextTick(function(){o._read()});return}e.open(this.path,this.flags,this.mode,function(c,f){if(c){o.emit("error",c),o.readable=!1;return}o.fd=f,o.emit("open",f),o._read()})}function r(i,n){if(!(this instanceof r))return new r(i,n);rt.call(this),this.path=i,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,n=n||{};for(var o=Object.keys(n),s=0,a=o.length;s<a;s++){var p=o[s];this[p]=n[p]}if(this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],this.fd===null&&(this._open=e.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}});var ct=d((No,ot)=>{"use strict";ot.exports=kn;var bn=Object.getPrototypeOf||function(e){return e.__proto__};function kn(e){if(e===null||typeof e!="object")return e;if(e instanceof Object)var t={__proto__:bn(e)};else var t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}),t}});var oe=d((To,Ae)=>{var x=require("fs"),En=tt(),Pn=it(),Fn=ct(),ke=require("util"),$,Pe;typeof Symbol=="function"&&typeof Symbol.for=="function"?($=Symbol.for("graceful-fs.queue"),Pe=Symbol.for("graceful-fs.previous")):($="___graceful-fs.queue",Pe="___graceful-fs.previous");function xn(){}function ut(e,t){Object.defineProperty(e,$,{get:function(){return t}})}var X=xn;ke.debuglog?X=ke.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(X=function(){var e=ke.format.apply(ke,arguments);e="GFS4: "+e.split(/\n/).join(`
GFS4: `),console.error(e)});x[$]||(st=global[$]||[],ut(x,st),x.close=function(e){function t(r,i){return e.call(x,r,function(n){n||at(),typeof i=="function"&&i.apply(this,arguments)})}return Object.defineProperty(t,Pe,{value:e}),t}(x.close),x.closeSync=function(e){function t(r){e.apply(x,arguments),at()}return Object.defineProperty(t,Pe,{value:e}),t}(x.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){X(x[$]),require("assert").equal(x[$].length,0)}));var st;global[$]||ut(global,x[$]);Ae.exports=Ie(Fn(x));process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!x.__patched&&(Ae.exports=Ie(x),x.__patched=!0);function Ie(e){En(e),e.gracefulify=Ie,e.createReadStream=V,e.createWriteStream=ne;var t=e.readFile;e.readFile=r;function r(m,g,v){return typeof g=="function"&&(v=g,g=null),T(m,g,v);function T(L,j,F,O){return t(L,j,function(E){E&&(E.code==="EMFILE"||E.code==="ENFILE")?ie([T,[L,j,F],E,O||Date.now(),Date.now()]):typeof F=="function"&&F.apply(this,arguments)})}}var i=e.writeFile;e.writeFile=n;function n(m,g,v,T){return typeof v=="function"&&(T=v,v=null),L(m,g,v,T);function L(j,F,O,E,_){return i(j,F,O,function(P){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var o=e.appendFile;o&&(e.appendFile=s);function s(m,g,v,T){return typeof v=="function"&&(T=v,v=null),L(m,g,v,T);function L(j,F,O,E,_){return o(j,F,O,function(P){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var a=e.copyFile;a&&(e.copyFile=p);function p(m,g,v,T){return typeof v=="function"&&(T=v,v=0),L(m,g,v,T);function L(j,F,O,E,_){return a(j,F,O,function(P){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}var w=e.readdir;e.readdir=f;var c=/^v[0-5]\./;function f(m,g,v){typeof g=="function"&&(v=g,g=null);var T=c.test(process.version)?function(F,O,E,_){return w(F,L(F,O,E,_))}:function(F,O,E,_){return w(F,O,L(F,O,E,_))};return T(m,g,v);function L(j,F,O,E){return function(_,P){_&&(_.code==="EMFILE"||_.code==="ENFILE")?ie([T,[j,F,O],_,E||Date.now(),Date.now()]):(P&&P.sort&&P.sort(),typeof O=="function"&&O.call(this,_,P))}}}if(process.version.substr(0,4)==="v0.8"){var u=Pn(e);k=u.ReadStream,q=u.WriteStream}var l=e.ReadStream;l&&(k.prototype=Object.create(l.prototype),k.prototype.open=D);var y=e.WriteStream;y&&(q.prototype=Object.create(y.prototype),q.prototype.open=h),Object.defineProperty(e,"ReadStream",{get:function(){return k},set:function(m){k=m},enumerable:!0,configurable:!0}),Object.defineProperty(e,"WriteStream",{get:function(){return q},set:function(m){q=m},enumerable:!0,configurable:!0});var b=k;Object.defineProperty(e,"FileReadStream",{get:function(){return b},set:function(m){b=m},enumerable:!0,configurable:!0});var S=q;Object.defineProperty(e,"FileWriteStream",{get:function(){return S},set:function(m){S=m},enumerable:!0,configurable:!0});function k(m,g){return this instanceof k?(l.apply(this,arguments),this):k.apply(Object.create(k.prototype),arguments)}function D(){var m=this;le(m.path,m.flags,m.mode,function(g,v){g?(m.autoClose&&m.destroy(),m.emit("error",g)):(m.fd=v,m.emit("open",v),m.read())})}function q(m,g){return this instanceof q?(y.apply(this,arguments),this):q.apply(Object.create(q.prototype),arguments)}function h(){var m=this;le(m.path,m.flags,m.mode,function(g,v){g?(m.destroy(),m.emit("error",g)):(m.fd=v,m.emit("open",v))})}function V(m,g){return new e.ReadStream(m,g)}function ne(m,g){return new e.WriteStream(m,g)}var ue=e.open;e.open=le;function le(m,g,v,T){return typeof v=="function"&&(T=v,v=null),L(m,g,v,T);function L(j,F,O,E,_){return ue(j,F,O,function(P,qo){P&&(P.code==="EMFILE"||P.code==="ENFILE")?ie([L,[j,F,O,E],P,_||Date.now(),Date.now()]):typeof E=="function"&&E.apply(this,arguments)})}}return e}function ie(e){X("ENQUEUE",e[0].name,e[1]),x[$].push(e),Me()}var Ee;function at(){for(var e=Date.now(),t=0;t<x[$].length;++t)x[$][t].length>2&&(x[$][t][3]=e,x[$][t][4]=e);Me()}function Me(){if(clearTimeout(Ee),Ee=void 0,x[$].length!==0){var e=x[$].shift(),t=e[0],r=e[1],i=e[2],n=e[3],o=e[4];if(n===void 0)X("RETRY",t.name,r),t.apply(null,r);else if(Date.now()-n>=6e4){X("TIMEOUT",t.name,r);var s=r.pop();typeof s=="function"&&s.call(null,i)}else{var a=Date.now()-o,p=Math.max(o-n,1),w=Math.min(p*1.2,100);a>=w?(X("RETRY",t.name,r),t.apply(null,r.concat([n]))):x[$].push(e)}Ee===void 0&&(Ee=setTimeout(Me,0))}}});var M=d(B=>{"use strict";var lt=C().fromCallback,I=oe(),qn=["access","appendFile","chmod","chown","close","copyFile","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchmod","lchown","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","symlink","truncate","unlink","utimes","writeFile"].filter(e=>typeof I[e]=="function");Object.assign(B,I);qn.forEach(e=>{B[e]=lt(I[e])});B.exists=function(e,t){return typeof t=="function"?I.exists(e,t):new Promise(r=>I.exists(e,r))};B.read=function(e,t,r,i,n,o){return typeof o=="function"?I.read(e,t,r,i,n,o):new Promise((s,a)=>{I.read(e,t,r,i,n,(p,w,c)=>{if(p)return a(p);s({bytesRead:w,buffer:c})})})};B.write=function(e,t,...r){return typeof r[r.length-1]=="function"?I.write(e,t,...r):new Promise((i,n)=>{I.write(e,t,...r,(o,s,a)=>{if(o)return n(o);i({bytesWritten:s,buffer:a})})})};B.readv=function(e,t,...r){return typeof r[r.length-1]=="function"?I.readv(e,t,...r):new Promise((i,n)=>{I.readv(e,t,...r,(o,s,a)=>{if(o)return n(o);i({bytesRead:s,buffers:a})})})};B.writev=function(e,t,...r){return typeof r[r.length-1]=="function"?I.writev(e,t,...r):new Promise((i,n)=>{I.writev(e,t,...r,(o,s,a)=>{if(o)return n(o);i({bytesWritten:s,buffers:a})})})};typeof I.realpath.native=="function"?B.realpath.native=lt(I.realpath.native):process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?","Warning","fs-extra-WARN0003")});var yt=d((_o,ft)=>{"use strict";var On=require("path");ft.exports.checkPath=function(t){if(process.platform==="win32"&&/[<>:"|?*]/.test(t.replace(On.parse(t).root,""))){let i=new Error(`Path contains invalid characters: ${t}`);throw i.code="EINVAL",i}}});var ht=d(($o,We)=>{"use strict";var mt=M(),{checkPath:pt}=yt(),dt=e=>{let t={mode:511};return typeof e=="number"?e:{...t,...e}.mode};We.exports.makeDir=async(e,t)=>(pt(e),mt.mkdir(e,{mode:dt(t),recursive:!0}));We.exports.makeDirSync=(e,t)=>(pt(e),mt.mkdirSync(e,{mode:dt(t),recursive:!0}))});var J=d((Ro,wt)=>{"use strict";var Dn=C().fromPromise,{makeDir:jn,makeDirSync:Ve}=ht(),Je=Dn(jn);wt.exports={mkdirs:Je,mkdirsSync:Ve,mkdirp:Je,mkdirpSync:Ve,ensureDir:Je,ensureDirSync:Ve}});var z=d((Io,gt)=>{"use strict";var Cn=C().fromPromise,St=M();function Nn(e){return St.access(e).then(()=>!0).catch(()=>!1)}gt.exports={pathExists:Cn(Nn),pathExistsSync:St.existsSync}});var Ke=d((Mo,vt)=>{"use strict";var ce=M(),Tn=C().fromPromise;async function Ln(e,t,r){let i=await ce.open(e,"r+"),n=null;try{await ce.futimes(i,t,r)}finally{try{await ce.close(i)}catch(o){n=o}}if(n)throw n}function _n(e,t,r){let i=ce.openSync(e,"r+");return ce.futimesSync(i,t,r),ce.closeSync(i)}vt.exports={utimesMillis:Tn(Ln),utimesMillisSync:_n}});var ee=d((Ao,Pt)=>{"use strict";var se=M(),N=require("path"),bt=C().fromPromise;function $n(e,t,r){let i=r.dereference?n=>se.stat(n,{bigint:!0}):n=>se.lstat(n,{bigint:!0});return Promise.all([i(e),i(t).catch(n=>{if(n.code==="ENOENT")return null;throw n})]).then(([n,o])=>({srcStat:n,destStat:o}))}function Rn(e,t,r){let i,n=r.dereference?s=>se.statSync(s,{bigint:!0}):s=>se.lstatSync(s,{bigint:!0}),o=n(e);try{i=n(t)}catch(s){if(s.code==="ENOENT")return{srcStat:o,destStat:null};throw s}return{srcStat:o,destStat:i}}async function In(e,t,r,i){let{srcStat:n,destStat:o}=await $n(e,t,i);if(o){if(fe(n,o)){let s=N.basename(e),a=N.basename(t);if(r==="move"&&s!==a&&s.toLowerCase()===a.toLowerCase())return{srcStat:n,destStat:o,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(n.isDirectory()&&!o.isDirectory())throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);if(!n.isDirectory()&&o.isDirectory())throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)}if(n.isDirectory()&&Be(e,t))throw new Error(Fe(e,t,r));return{srcStat:n,destStat:o}}function Mn(e,t,r,i){let{srcStat:n,destStat:o}=Rn(e,t,i);if(o){if(fe(n,o)){let s=N.basename(e),a=N.basename(t);if(r==="move"&&s!==a&&s.toLowerCase()===a.toLowerCase())return{srcStat:n,destStat:o,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(n.isDirectory()&&!o.isDirectory())throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);if(!n.isDirectory()&&o.isDirectory())throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)}if(n.isDirectory()&&Be(e,t))throw new Error(Fe(e,t,r));return{srcStat:n,destStat:o}}async function kt(e,t,r,i){let n=N.resolve(N.dirname(e)),o=N.resolve(N.dirname(r));if(o===n||o===N.parse(o).root)return;let s;try{s=await se.stat(o,{bigint:!0})}catch(a){if(a.code==="ENOENT")return;throw a}if(fe(t,s))throw new Error(Fe(e,r,i));return kt(e,t,o,i)}function Et(e,t,r,i){let n=N.resolve(N.dirname(e)),o=N.resolve(N.dirname(r));if(o===n||o===N.parse(o).root)return;let s;try{s=se.statSync(o,{bigint:!0})}catch(a){if(a.code==="ENOENT")return;throw a}if(fe(t,s))throw new Error(Fe(e,r,i));return Et(e,t,o,i)}function fe(e,t){return t.ino&&t.dev&&t.ino===e.ino&&t.dev===e.dev}function Be(e,t){let r=N.resolve(e).split(N.sep).filter(n=>n),i=N.resolve(t).split(N.sep).filter(n=>n);return r.every((n,o)=>i[o]===n)}function Fe(e,t,r){return`Cannot ${r} '${e}' to a subdirectory of itself, '${t}'.`}Pt.exports={checkPaths:bt(In),checkPathsSync:Mn,checkParentPaths:bt(kt),checkParentPathsSync:Et,isSrcSubdir:Be,areIdentical:fe}});var Dt=d((Wo,Ot)=>{"use strict";var R=M(),ye=require("path"),{mkdirs:An}=J(),{pathExists:Wn}=z(),{utimesMillis:Vn}=Ke(),me=ee();async function Jn(e,t,r={}){typeof r=="function"&&(r={filter:r}),r.clobber="clobber"in r?!!r.clobber:!0,r.overwrite="overwrite"in r?!!r.overwrite:r.clobber,r.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0001");let{srcStat:i,destStat:n}=await me.checkPaths(e,t,"copy",r);if(await me.checkParentPaths(e,i,t,"copy"),!await xt(e,t,r))return;let s=ye.dirname(t);await Wn(s)||await An(s),await qt(n,e,t,r)}async function xt(e,t,r){return r.filter?r.filter(e,t):!0}async function qt(e,t,r,i){let o=await(i.dereference?R.stat:R.lstat)(t);if(o.isDirectory())return Un(o,e,t,r,i);if(o.isFile()||o.isCharacterDevice()||o.isBlockDevice())return Kn(o,e,t,r,i);if(o.isSymbolicLink())return Yn(e,t,r,i);throw o.isSocket()?new Error(`Cannot copy a socket file: ${t}`):o.isFIFO()?new Error(`Cannot copy a FIFO pipe: ${t}`):new Error(`Unknown file: ${t}`)}async function Kn(e,t,r,i,n){if(!t)return Ft(e,r,i,n);if(n.overwrite)return await R.unlink(i),Ft(e,r,i,n);if(n.errorOnExist)throw new Error(`'${i}' already exists`)}async function Ft(e,t,r,i){if(await R.copyFile(t,r),i.preserveTimestamps){Bn(e.mode)&&await Gn(r,e.mode);let n=await R.stat(t);await Vn(r,n.atime,n.mtime)}return R.chmod(r,e.mode)}function Bn(e){return(e&128)===0}function Gn(e,t){return R.chmod(e,t|128)}async function Un(e,t,r,i,n){t||await R.mkdir(i);let o=await R.readdir(r);await Promise.all(o.map(async s=>{let a=ye.join(r,s),p=ye.join(i,s);if(!await xt(a,p,n))return;let{destStat:c}=await me.checkPaths(a,p,"copy",n);return qt(c,a,p,n)})),t||await R.chmod(i,e.mode)}async function Yn(e,t,r,i){let n=await R.readlink(t);if(i.dereference&&(n=ye.resolve(process.cwd(),n)),!e)return R.symlink(n,r);let o=null;try{o=await R.readlink(r)}catch(s){if(s.code==="EINVAL"||s.code==="UNKNOWN")return R.symlink(n,r);throw s}if(i.dereference&&(o=ye.resolve(process.cwd(),o)),me.isSrcSubdir(n,o))throw new Error(`Cannot copy '${n}' to a subdirectory of itself, '${o}'.`);if(me.isSrcSubdir(o,n))throw new Error(`Cannot overwrite '${o}' with '${n}'.`);return await R.unlink(r),R.symlink(n,r)}Ot.exports=Jn});var Lt=d((Vo,Tt)=>{"use strict";var A=oe(),pe=require("path"),zn=J().mkdirsSync,Hn=Ke().utimesMillisSync,de=ee();function Qn(e,t,r){typeof r=="function"&&(r={filter:r}),r=r||{},r.clobber="clobber"in r?!!r.clobber:!0,r.overwrite="overwrite"in r?!!r.overwrite:r.clobber,r.preserveTimestamps&&process.arch==="ia32"&&process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,"Warning","fs-extra-WARN0002");let{srcStat:i,destStat:n}=de.checkPathsSync(e,t,"copy",r);if(de.checkParentPathsSync(e,i,t,"copy"),r.filter&&!r.filter(e,t))return;let o=pe.dirname(t);return A.existsSync(o)||zn(o),jt(n,e,t,r)}function jt(e,t,r,i){let o=(i.dereference?A.statSync:A.lstatSync)(t);if(o.isDirectory())return ii(o,e,t,r,i);if(o.isFile()||o.isCharacterDevice()||o.isBlockDevice())return Zn(o,e,t,r,i);if(o.isSymbolicLink())return si(e,t,r,i);throw o.isSocket()?new Error(`Cannot copy a socket file: ${t}`):o.isFIFO()?new Error(`Cannot copy a FIFO pipe: ${t}`):new Error(`Unknown file: ${t}`)}function Zn(e,t,r,i,n){return t?Xn(e,r,i,n):Ct(e,r,i,n)}function Xn(e,t,r,i){if(i.overwrite)return A.unlinkSync(r),Ct(e,t,r,i);if(i.errorOnExist)throw new Error(`'${r}' already exists`)}function Ct(e,t,r,i){return A.copyFileSync(t,r),i.preserveTimestamps&&ei(e.mode,t,r),Ge(r,e.mode)}function ei(e,t,r){return ti(e)&&ri(r,e),ni(t,r)}function ti(e){return(e&128)===0}function ri(e,t){return Ge(e,t|128)}function Ge(e,t){return A.chmodSync(e,t)}function ni(e,t){let r=A.statSync(e);return Hn(t,r.atime,r.mtime)}function ii(e,t,r,i,n){return t?Nt(r,i,n):oi(e.mode,r,i,n)}function oi(e,t,r,i){return A.mkdirSync(r),Nt(t,r,i),Ge(r,e)}function Nt(e,t,r){A.readdirSync(e).forEach(i=>ci(i,e,t,r))}function ci(e,t,r,i){let n=pe.join(t,e),o=pe.join(r,e);if(i.filter&&!i.filter(n,o))return;let{destStat:s}=de.checkPathsSync(n,o,"copy",i);return jt(s,n,o,i)}function si(e,t,r,i){let n=A.readlinkSync(t);if(i.dereference&&(n=pe.resolve(process.cwd(),n)),e){let o;try{o=A.readlinkSync(r)}catch(s){if(s.code==="EINVAL"||s.code==="UNKNOWN")return A.symlinkSync(n,r);throw s}if(i.dereference&&(o=pe.resolve(process.cwd(),o)),de.isSrcSubdir(n,o))throw new Error(`Cannot copy '${n}' to a subdirectory of itself, '${o}'.`);if(de.isSrcSubdir(o,n))throw new Error(`Cannot overwrite '${o}' with '${n}'.`);return ai(n,r)}else return A.symlinkSync(n,r)}function ai(e,t){return A.unlinkSync(t),A.symlinkSync(e,t)}Tt.exports=Qn});var xe=d((Jo,_t)=>{"use strict";var ui=C().fromPromise;_t.exports={copy:ui(Dt()),copySync:Lt()}});var he=d((Ko,Rt)=>{"use strict";var $t=oe(),li=C().fromCallback;function fi(e,t){$t.rm(e,{recursive:!0,force:!0},t)}function yi(e){$t.rmSync(e,{recursive:!0,force:!0})}Rt.exports={remove:li(fi),removeSync:yi}});var Bt=d((Bo,Kt)=>{"use strict";var mi=C().fromPromise,At=M(),Wt=require("path"),Vt=J(),Jt=he(),It=mi(async function(t){let r;try{r=await At.readdir(t)}catch{return Vt.mkdirs(t)}return Promise.all(r.map(i=>Jt.remove(Wt.join(t,i))))});function Mt(e){let t;try{t=At.readdirSync(e)}catch{return Vt.mkdirsSync(e)}t.forEach(r=>{r=Wt.join(e,r),Jt.removeSync(r)})}Kt.exports={emptyDirSync:Mt,emptydirSync:Mt,emptyDir:It,emptydir:It}});var zt=d((Go,Yt)=>{"use strict";var pi=C().fromPromise,Gt=require("path"),G=M(),Ut=J();async function di(e){let t;try{t=await G.stat(e)}catch{}if(t&&t.isFile())return;let r=Gt.dirname(e),i=null;try{i=await G.stat(r)}catch(n){if(n.code==="ENOENT"){await Ut.mkdirs(r),await G.writeFile(e,"");return}else throw n}i.isDirectory()?await G.writeFile(e,""):await G.readdir(r)}function hi(e){let t;try{t=G.statSync(e)}catch{}if(t&&t.isFile())return;let r=Gt.dirname(e);try{G.statSync(r).isDirectory()||G.readdirSync(r)}catch(i){if(i&&i.code==="ENOENT")Ut.mkdirsSync(r);else throw i}G.writeFileSync(e,"")}Yt.exports={createFile:pi(di),createFileSync:hi}});var er=d((Uo,Xt)=>{"use strict";var wi=C().fromPromise,Ht=require("path"),H=M(),Qt=J(),{pathExists:Si}=z(),{areIdentical:Zt}=ee();async function gi(e,t){let r;try{r=await H.lstat(t)}catch{}let i;try{i=await H.lstat(e)}catch(s){throw s.message=s.message.replace("lstat","ensureLink"),s}if(r&&Zt(i,r))return;let n=Ht.dirname(t);await Si(n)||await Qt.mkdirs(n),await H.link(e,t)}function vi(e,t){let r;try{r=H.lstatSync(t)}catch{}try{let o=H.lstatSync(e);if(r&&Zt(o,r))return}catch(o){throw o.message=o.message.replace("lstat","ensureLink"),o}let i=Ht.dirname(t);return H.existsSync(i)||Qt.mkdirsSync(i),H.linkSync(e,t)}Xt.exports={createLink:wi(gi),createLinkSync:vi}});var rr=d((Yo,tr)=>{"use strict";var Q=require("path"),we=M(),{pathExists:bi}=z(),ki=C().fromPromise;async function Ei(e,t){if(Q.isAbsolute(e)){try{await we.lstat(e)}catch(o){throw o.message=o.message.replace("lstat","ensureSymlink"),o}return{toCwd:e,toDst:e}}let r=Q.dirname(t),i=Q.join(r,e);if(await bi(i))return{toCwd:i,toDst:e};try{await we.lstat(e)}catch(o){throw o.message=o.message.replace("lstat","ensureSymlink"),o}return{toCwd:e,toDst:Q.relative(r,e)}}function Pi(e,t){if(Q.isAbsolute(e)){if(!we.existsSync(e))throw new Error("absolute srcpath does not exist");return{toCwd:e,toDst:e}}let r=Q.dirname(t),i=Q.join(r,e);if(we.existsSync(i))return{toCwd:i,toDst:e};if(!we.existsSync(e))throw new Error("relative srcpath does not exist");return{toCwd:e,toDst:Q.relative(r,e)}}tr.exports={symlinkPaths:ki(Ei),symlinkPathsSync:Pi}});var or=d((zo,ir)=>{"use strict";var nr=M(),Fi=C().fromPromise;async function xi(e,t){if(t)return t;let r;try{r=await nr.lstat(e)}catch{return"file"}return r&&r.isDirectory()?"dir":"file"}function qi(e,t){if(t)return t;let r;try{r=nr.lstatSync(e)}catch{return"file"}return r&&r.isDirectory()?"dir":"file"}ir.exports={symlinkType:Fi(xi),symlinkTypeSync:qi}});var ur=d((Ho,ar)=>{"use strict";var Oi=C().fromPromise,cr=require("path"),K=M(),{mkdirs:Di,mkdirsSync:ji}=J(),{symlinkPaths:Ci,symlinkPathsSync:Ni}=rr(),{symlinkType:Ti,symlinkTypeSync:Li}=or(),{pathExists:_i}=z(),{areIdentical:sr}=ee();async function $i(e,t,r){let i;try{i=await K.lstat(t)}catch{}if(i&&i.isSymbolicLink()){let[a,p]=await Promise.all([K.stat(e),K.stat(t)]);if(sr(a,p))return}let n=await Ci(e,t);e=n.toDst;let o=await Ti(n.toCwd,r),s=cr.dirname(t);return await _i(s)||await Di(s),K.symlink(e,t,o)}function Ri(e,t,r){let i;try{i=K.lstatSync(t)}catch{}if(i&&i.isSymbolicLink()){let a=K.statSync(e),p=K.statSync(t);if(sr(a,p))return}let n=Ni(e,t);e=n.toDst,r=Li(n.toCwd,r);let o=cr.dirname(t);return K.existsSync(o)||ji(o),K.symlinkSync(e,t,r)}ar.exports={createSymlink:Oi($i),createSymlinkSync:Ri}});var wr=d((Qo,hr)=>{"use strict";var{createFile:lr,createFileSync:fr}=zt(),{createLink:yr,createLinkSync:mr}=er(),{createSymlink:pr,createSymlinkSync:dr}=ur();hr.exports={createFile:lr,createFileSync:fr,ensureFile:lr,ensureFileSync:fr,createLink:yr,createLinkSync:mr,ensureLink:yr,ensureLinkSync:mr,createSymlink:pr,createSymlinkSync:dr,ensureSymlink:pr,ensureSymlinkSync:dr}});var qe=d((Zo,Sr)=>{function Ii(e,{EOL:t=`
`,finalEOL:r=!0,replacer:i=null,spaces:n}={}){let o=r?t:"";return JSON.stringify(e,i,n).replace(/\n/g,t)+o}function Mi(e){return Buffer.isBuffer(e)&&(e=e.toString("utf8")),e.replace(/^\uFEFF/,"")}Sr.exports={stringify:Ii,stripBom:Mi}});var kr=d((Xo,br)=>{var ae;try{ae=oe()}catch{ae=require("fs")}var Oe=C(),{stringify:gr,stripBom:vr}=qe();async function Ai(e,t={}){typeof t=="string"&&(t={encoding:t});let r=t.fs||ae,i="throws"in t?t.throws:!0,n=await Oe.fromCallback(r.readFile)(e,t);n=vr(n);let o;try{o=JSON.parse(n,t?t.reviver:null)}catch(s){if(i)throw s.message=`${e}: ${s.message}`,s;return null}return o}var Wi=Oe.fromPromise(Ai);function Vi(e,t={}){typeof t=="string"&&(t={encoding:t});let r=t.fs||ae,i="throws"in t?t.throws:!0;try{let n=r.readFileSync(e,t);return n=vr(n),JSON.parse(n,t.reviver)}catch(n){if(i)throw n.message=`${e}: ${n.message}`,n;return null}}async function Ji(e,t,r={}){let i=r.fs||ae,n=gr(t,r);await Oe.fromCallback(i.writeFile)(e,n,r)}var Ki=Oe.fromPromise(Ji);function Bi(e,t,r={}){let i=r.fs||ae,n=gr(t,r);return i.writeFileSync(e,n,r)}var Gi={readFile:Wi,readFileSync:Vi,writeFile:Ki,writeFileSync:Bi};br.exports=Gi});var Pr=d((ec,Er)=>{"use strict";var De=kr();Er.exports={readJson:De.readFile,readJsonSync:De.readFileSync,writeJson:De.writeFile,writeJsonSync:De.writeFileSync}});var je=d((tc,qr)=>{"use strict";var Ui=C().fromPromise,Ue=M(),Fr=require("path"),xr=J(),Yi=z().pathExists;async function zi(e,t,r="utf-8"){let i=Fr.dirname(e);return await Yi(i)||await xr.mkdirs(i),Ue.writeFile(e,t,r)}function Hi(e,...t){let r=Fr.dirname(e);Ue.existsSync(r)||xr.mkdirsSync(r),Ue.writeFileSync(e,...t)}qr.exports={outputFile:Ui(zi),outputFileSync:Hi}});var Dr=d((rc,Or)=>{"use strict";var{stringify:Qi}=qe(),{outputFile:Zi}=je();async function Xi(e,t,r={}){let i=Qi(t,r);await Zi(e,i,r)}Or.exports=Xi});var Cr=d((nc,jr)=>{"use strict";var{stringify:eo}=qe(),{outputFileSync:to}=je();function ro(e,t,r){let i=eo(t,r);to(e,i,r)}jr.exports=ro});var Tr=d((ic,Nr)=>{"use strict";var no=C().fromPromise,W=Pr();W.outputJson=no(Dr());W.outputJsonSync=Cr();W.outputJSON=W.outputJson;W.outputJSONSync=W.outputJsonSync;W.writeJSON=W.writeJson;W.writeJSONSync=W.writeJsonSync;W.readJSON=W.readJson;W.readJSONSync=W.readJsonSync;Nr.exports=W});var Ir=d((oc,Rr)=>{"use strict";var io=M(),Lr=require("path"),{copy:oo}=xe(),{remove:$r}=he(),{mkdirp:co}=J(),{pathExists:so}=z(),_r=ee();async function ao(e,t,r={}){let i=r.overwrite||r.clobber||!1,{srcStat:n,isChangingCase:o=!1}=await _r.checkPaths(e,t,"move",r);await _r.checkParentPaths(e,n,t,"move");let s=Lr.dirname(t);return Lr.parse(s).root!==s&&await co(s),uo(e,t,i,o)}async function uo(e,t,r,i){if(!i){if(r)await $r(t);else if(await so(t))throw new Error("dest already exists.")}try{await io.rename(e,t)}catch(n){if(n.code!=="EXDEV")throw n;await lo(e,t,r)}}async function lo(e,t,r){return await oo(e,t,{overwrite:r,errorOnExist:!0,preserveTimestamps:!0}),$r(e)}Rr.exports=ao});var Jr=d((cc,Vr)=>{"use strict";var Ar=oe(),ze=require("path"),fo=xe().copySync,Wr=he().removeSync,yo=J().mkdirpSync,Mr=ee();function mo(e,t,r){r=r||{};let i=r.overwrite||r.clobber||!1,{srcStat:n,isChangingCase:o=!1}=Mr.checkPathsSync(e,t,"move",r);return Mr.checkParentPathsSync(e,n,t,"move"),po(t)||yo(ze.dirname(t)),ho(e,t,i,o)}function po(e){let t=ze.dirname(e);return ze.parse(t).root===t}function ho(e,t,r,i){if(i)return Ye(e,t,r);if(r)return Wr(t),Ye(e,t,r);if(Ar.existsSync(t))throw new Error("dest already exists.");return Ye(e,t,r)}function Ye(e,t,r){try{Ar.renameSync(e,t)}catch(i){if(i.code!=="EXDEV")throw i;return wo(e,t,r)}}function wo(e,t,r){return fo(e,t,{overwrite:r,errorOnExist:!0,preserveTimestamps:!0}),Wr(e)}Vr.exports=mo});var Br=d((sc,Kr)=>{"use strict";var So=C().fromPromise;Kr.exports={move:So(Ir()),moveSync:Jr()}});var He=d((ac,Gr)=>{"use strict";Gr.exports={...M(),...xe(),...Bt(),...wr(),...Tr(),...J(),...Br(),...je(),...z(),...he()}});var Yr=d((uc,Ur)=>{"use strict";Ur.exports=e=>{e=Object.assign({onlyFirst:!1},e);let t=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(t,e.onlyFirst?void 0:"g")}});var Hr=d((lc,Qe)=>{"use strict";var go=Yr(),zr=e=>typeof e=="string"?e.replace(go(),""):e;Qe.exports=zr;Qe.exports.default=zr});var Zr=d((fc,Qr)=>{"use strict";var Ce=require("fs"),vo=Hr(),bo=13;function ko(e){e=e||{};var t=e.sigint,r=e.eot,i=e.autocomplete=e.autocomplete||function(){return[]},n=e.history;return o.history=n||{save:function(){}},o.hide=function(a){return o(a,{echo:""})},o;function o(a,p,w){var c=0,f=0,u,l,y;w=w||{},Object(a)===a?(w=a,a=w.ask):Object(p)===p&&(w=p,p=w.value),a=a||"";var b=w.echo,S="echo"in w;i=w.autocomplete||i;var k=process.platform==="win32"?process.stdin.fd:Ce.openSync("/dev/tty","rs"),D=process.stdin.isRaw;D||process.stdin.setRawMode&&process.stdin.setRawMode(!0);var q=Buffer.alloc(3),h="",V,ne;y="",a&&process.stdout.write(a);for(var ue=0,le;;){if(ne=Ce.readSync(k,q,0,3),ne>1){switch(q.toString()){case"\x1B[A":if(S||!n||n.atStart())break;n.atEnd()&&(y=h,f=c),h=n.prev(),c=h.length,process.stdout.write("\x1B[2K\x1B[0G"+a+h);break;case"\x1B[B":if(S||!n||n.pastEnd())break;n.atPenultimate()?(h=y,c=f,n.next()):(h=n.next(),c=h.length),process.stdout.write("\x1B[2K\x1B[0G"+a+h+"\x1B["+(c+a.length+1)+"G");break;case"\x1B[D":if(S)break;var m=c;c=--c<0?0:c,m-c&&process.stdout.write("\x1B[1D");break;case"\x1B[C":if(S)break;c=++c>h.length?h.length:c,process.stdout.write("\x1B["+(c+a.length+1)+"G");break;default:q.toString()&&(h=h+q.toString(),h=h.replace(/\0/g,""),c=h.length,s(S,a,b,h,c),process.stdout.write("\x1B["+(c+a.length+1)+"G"),q=Buffer.alloc(3))}continue}if(V=q[ne-1],V==3)return process.stdout.write(`^C
`),Ce.closeSync(k),t&&process.exit(130),process.stdin.setRawMode&&process.stdin.setRawMode(D),null;if(V==4&&h.length==0&&r&&(process.stdout.write(`exit
`),process.exit(0)),V==bo){if(Ce.closeSync(k),!n)break;!S&&h.length&&n.push(h),n.reset();break}if(V==9){if(u=i(h),h==u[0]?u=i(""):le=u.length,u.length==0){process.stdout.write("	");continue}var g=u[ue++]||u[ue=0,ue++];g&&(process.stdout.write("\r\x1B[K"+a+g),h=g,c=g.length)}if(V==127||process.platform=="win32"&&V==8){if(!c)continue;h=h.slice(0,c-1)+h.slice(c),c--,process.stdout.write("\x1B[2D")}else{if(V<32||V>126)continue;h=h.slice(0,c)+String.fromCharCode(V)+h.slice(c),c++}s(S,a,b,h,c)}return process.stdout.write(`
`),process.stdin.setRawMode&&process.stdin.setRawMode(D),h||p||""}function s(a,p,w,c,f){if(a)process.stdout.write("\x1B[2K\x1B[0G"+p+Array(c.length+1).join(w));else{process.stdout.write("\x1B[s"),f==c.length||p?process.stdout.write("\x1B[2K\x1B[0G"+p+c):process.stdout.write("\x1B[2K\x1B[0G"+c+"\x1B["+(c.length-f)+"D");var u=vo(p).length;process.stdout.write(`\x1B[${u+1+(w==""?0:f)}G`)}}}Qr.exports=ko});var ln=U(require("node:process"));var rn=require("node:process");var Xr=U(require("node:process")),Ne=U(require("node:path")),Se=U(He()),en=U(Zr()),Ze=(0,en.default)(),Te=Ne.default.join(__filename,".."),tn=Ne.default.join(Te,"common"),yc=Se.default.readdirSync(Ne.default.join(Te,"templates"));function ge(e="Cancelled.",t=0){console.log(e),Xr.default.exit(t)}function Z(e,t,r){if(!Se.default.existsSync(e))return;let n=Se.default.readFileSync(e,"utf-8").replace(t,r);Se.default.writeFileSync(e,n,"utf-8")}var nn=[{name:["debug","d"],description:"Enable debug mode.",defaultValue:!1},{name:["yes","y"],description:"Skip prompts.",defaultValue:!1},{name:["help","h"],description:"Show help message.",defaultValue:!1}],Eo=Object.fromEntries(nn.map(e=>[e.name[0],e.defaultValue||!1])),[Po,te]=(()=>{let e=[],t={};rn.argv.forEach(i=>{if(/^(-|--)/.exec(i)){i=i.replace(/(-|--)+/g,"");let[n,o]=i.split("=");switch(o){case"true":t[n]=!0;break;case"false":t[n]=!1;break;default:t[n]=o||!0;break}}else e.push(i)});let r={};return nn.forEach(i=>{let n=i.name[0],o=Eo[n];for(let s of i.name)if(t[s]){o=t[s];break}r[n]=o}),[e,r]})();te.debug&&(console.log("Arguments:",Po),console.log("Flags:",te));function on(){console.log(`Usage: template-defaults [projectType] [projectDir] [projectName] [projectGitRepo] [configureEslint] [installDep]

        Options:
            -d, --debug: Debug mode.
            -y, --yes:  Skip prompts.
            -h, --help: Show help message.`),ge("",0)}var Le={projectType:{initPrompt:"Project type (valid types: 'ts', 'react-ts', 'html-ts'): ",defaultMessage:"Using default type 'ts'.",defaultValue:"ts"},projectDir:{initPrompt:"Project directory: ",defaultMessage:"Using the current working directory.",defaultValue:"."},projectName:{initPrompt:"Project name: ",defaultMessage:"Using default name 'my-project'.",defaultValue:"my-project"},projectGitRepo:{initPrompt:"Project git repo: ",defaultMessage:"Using default repo 'https://github.com/xShadowBlade/template-defaults', which is the template-defaults repo.",defaultValue:"https://github.com/xShadowBlade/template-defaults"},configureEslint:{initPrompt:"Configure ESLint (y/n) [y]: ",defaultMessage:"Using default value 'y'.",defaultValue:"y"},installDep:{initPrompt:"Install dependencies (y/n) [y]: ",defaultMessage:"Using default value 'y'.",defaultValue:"y"}},cn=(()=>{let e={};for(let t in Le)e[t]=Le[t].defaultValue;return e})();function Fo(e){let{initPrompt:t,defaultMessage:r,defaultValue:i,cancelMessage:n,cancelCode:o}=e,s=Ze(t);return s===null&&ge(n,o),s=s.toLowerCase().trim().replace(/[^a-z-]/g,""),s||(console.log(r??`Using default value '${i}'.`),s=i),console.log(""),s}function sn(){console.log("This CLI tool will create a new project in the specified directory."),console.log("For more information, see https://github.com/xShadowBlade/template-defaults"),console.log(`Press ^C at any time to cancel. 
`);let e={};for(let r in Le)e[r]=Fo(Le[r]);let t=Ze("Confirm (y/n) [y]: ");return(!t||!["","y","yes"].includes(t.toLowerCase()))&&ge(),e}var _e=U(require("node:process")),re=U(require("node:path")),ve=U(He()),an=require("node:child_process");function un(e){let{projectType:t,projectDir:r,projectName:i,projectGitRepo:n,configureEslint:o,installDep:s}=e,a=re.default.join(_e.default.cwd(),r);ve.default.copySync(tn,a);let p=re.default.join(Te,"templates",t);p?ve.default.copySync(p,a,{filter:(u,l)=>!l.includes("node_modules")}):(console.error("Invalid project type."),_e.default.exit(1));let w=re.default.join(a,"package.json"),c=re.default.join(a,"package-lock.json");if((!o||!["y","yes","true"].includes(o))&&(ve.default.removeSync(re.default.join(a,"eslint.config.mjs")),ve.default.removeSync(re.default.join(a,".prettierrc.json")),["@eslint/js","@types/eslint__js","eslint","eslint-plugin-jsdoc","eslint-plugin-prettier","prettier","typescript-eslint","eslint-plugin-react"].forEach(l=>{Z(w,new RegExp(`
 {4}"${l}": ".*",`),"")}),Z(w,/^\s*$/gm,"")),Z(w,/"name": ".*"/,`"name": "${i}"`),Z(w,/"url": ".*"/,`"url": "${n}"`),Z(w,/"url": ".*\/issues"/,`"url": "${n}/issues"`),Z(w,/"homepage": ".*"/,`"homepage": "${n}#readme"`),Z(c,`"name": "${t}"`,`"name": "${i}"`),s&&["y","yes","true"].includes(s)){console.log(`
Installing dependencies...`);try{(0,an.execSync)("npm install",{cwd:a,stdio:"inherit"})}catch(u){console.error("Failed to install dependencies.",u),_e.default.exit(1)}}console.log(`
Done!`);let f=[{message:"npm install",condition:!s||!["y","yes","true"].includes(s)},{message:"npm start",condition:["react-ts","html-ts"].includes(t)}];f.some(u=>u.condition)&&console.log("To get started, run the following commands:"),f.forEach(u=>{u.condition&&console.log(u.message)})}(te.h||te.help)&&on();var xo=Object.assign(cn,te.y||te.yes?{}:sn());un(xo);ln.default.exit(0);
