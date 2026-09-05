(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yr="183",Uc=0,Hr=1,Nc=2,Rs=1,$o=2,Xi=3,Hn=0,ze=1,Be=2,bn=0,bi=1,Ns=2,Vr=3,Wr=4,Fc=5,Kn=100,Oc=101,kc=102,Bc=103,zc=104,Gc=200,Hc=201,Vc=202,Wc=203,Ca=204,Ra=205,Xc=206,qc=207,$c=208,Yc=209,Zc=210,jc=211,Kc=212,Jc=213,Qc=214,Pa=0,La=1,Ia=2,Ti=3,Da=4,Ua=5,Na=6,Fa=7,Yo=0,tl=1,el=2,un=0,Zo=1,jo=2,Ko=3,Sr=4,Jo=5,Qo=6,tc=7,ec=300,ei=301,Ai=302,js=303,Ks=304,Gs=306,ke=1e3,wn=1001,Oa=1002,Re=1003,nl=1004,ss=1005,Ue=1006,Js=1007,Qn=1008,Xe=1009,nc=1010,ic=1011,ji=1012,wr=1013,pn=1014,hn=1015,Tn=1016,br=1017,Er=1018,Ki=1020,sc=35902,ac=35899,rc=1021,oc=1022,je=1023,An=1026,ti=1027,cc=1028,Tr=1029,Ci=1030,Ar=1031,Cr=1033,Ps=33776,Ls=33777,Is=33778,Ds=33779,ka=35840,Ba=35841,za=35842,Ga=35843,Ha=36196,Va=37492,Wa=37496,Xa=37488,qa=37489,$a=37490,Ya=37491,Za=37808,ja=37809,Ka=37810,Ja=37811,Qa=37812,tr=37813,er=37814,nr=37815,ir=37816,sr=37817,ar=37818,rr=37819,or=37820,cr=37821,lr=36492,hr=36494,dr=36495,ur=36283,fr=36284,pr=36285,mr=36286,il=3200,lc=0,sl=1,On="",Ye="srgb",Ri="srgb-linear",Fs="linear",ae="srgb",oi=7680,Xr=519,al=512,rl=513,ol=514,Rr=515,cl=516,ll=517,Pr=518,hl=519,qr=35044,$r="300 es",dn=2e3,Ji=2001;function dl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ul(){const s=Os("canvas");return s.style.display="block",s}const Yr={};function Zr(...s){const t="THREE."+s.shift();console.log(t,...s)}function hc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=hc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function te(...s){s=hc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ks(...s){const t=s.join(" ");t in Yr||(Yr[t]=!0,zt(...s))}function fl(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const pl={[Pa]:La,[Ia]:Na,[Da]:Fa,[Ti]:Ua,[La]:Pa,[Na]:Ia,[Fa]:Da,[Ua]:Ti};class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jr=1234567;const $i=Math.PI/180,Qi=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function Lr(s,t){return(s%t+t)%t}function ml(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function gl(s,t,e){return s!==t?(e-s)/(t-s):0}function Yi(s,t,e){return(1-e)*s+e*t}function _l(s,t,e,n){return Yi(s,t,1-Math.exp(-e*n))}function vl(s,t=1){return t-Math.abs(Lr(s,t*2)-t)}function xl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ml(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Sl(s,t){return s+Math.random()*(t-s)}function wl(s){return s*(.5-Math.random())}function bl(s){s!==void 0&&(jr=s);let t=jr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function El(s){return s*$i}function Tl(s){return s*Qi}function Al(s){return(s&s-1)===0&&s!==0}function Cl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pl(s,t,e,n,i){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),u=a((t-n)/2),d=r((t-n)/2),m=a((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kn={DEG2RAD:$i,RAD2DEG:Qi,generateUUID:Ii,clamp:jt,euclideanModulo:Lr,mapLinear:ml,inverseLerp:gl,lerp:Yi,damp:_l,pingpong:vl,smoothstep:xl,smootherstep:Ml,randInt:yl,randFloat:Sl,randFloatSpread:wl,seededRandom:bl,degToRad:El,radToDeg:Tl,isPowerOfTwo:Al,ceilPowerOfTwo:Cl,floorPowerOfTwo:Rl,setQuaternionFromProperEuler:Pl,normalize:Fe,denormalize:Si};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=a[r+0],m=a[r+1],g=a[r+2],M=a[r+3];if(u!==M||l!==d||c!==m||h!==g){let p=l*d+c*m+h*g+u*M;p<0&&(d=-d,m=-m,g=-g,M=-M,p=-p);let f=1-o;if(p<.9995){const x=Math.acos(p),S=Math.sin(x);f=Math.sin(f*x)/S,o=Math.sin(o*x)/S,l=l*f+d*o,c=c*f+m*o,h=h*f+g*o,u=u*f+M*o}else{l=l*f+d*o,c=c*f+m*o,h=h*f+g*o,u=u*f+M*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=a[r],d=a[r+1],m=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-o*m,t[e+2]=c*g+h*m+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(a/2),d=l(n/2),m=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-i)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=i+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new L,Kr=new Di;class Vt{constructor(t,e,n,i,a,r,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],M=i[0],p=i[3],f=i[6],x=i[1],S=i[4],y=i[7],A=i[2],T=i[5],R=i[8];return a[0]=r*M+o*x+l*A,a[3]=r*p+o*S+l*T,a[6]=r*f+o*y+l*R,a[1]=c*M+h*x+u*A,a[4]=c*p+h*S+u*T,a[7]=c*f+h*y+u*R,a[2]=d*M+m*x+g*A,a[5]=d*p+m*S+g*T,a[8]=d*f+m*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,m=c*a-r*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(i*c-h*n)*M,t[2]=(o*n-i*r)*M,t[3]=d*M,t[4]=(h*e-i*l)*M,t[5]=(i*a-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(r*e-n*a)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Vt,Jr=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qr=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ll(){const s={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ae&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?Fs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ri]:{primaries:t,whitePoint:n,transfer:Fs,toXYZ:Jr,fromXYZ:Qr,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Jr,fromXYZ:Qr,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),s}const ee=Ll();function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ei(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ci;class Il{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ci===void 0&&(ci=Os("canvas")),ci.width=t.width,ci.height=t.height;const i=ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=En(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dl=0;class Ir{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ea(i[r].image)):a.push(ea(i[r]))}else a=ea(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Il.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Ul=0;const na=new L;class Ne extends Li{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=wn,i=wn,a=Ue,r=Qn,o=je,l=Xe,c=Ne.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Ii(),this.name="",this.source=new Ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ke:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ke:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=ec;Ne.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(m+1)/2,A=(f+1)/2,T=(h+d)/4,R=(u+M)/4,v=(g+p)/4;return S>y&&S>A?S<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(S),i=T/n,a=R/n):y>A?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=T/i,a=v/i):A<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(A),n=R/a,i=v/a),this.set(n,i,a,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-M)/x,this.z=(d-h)/x,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nl extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},a=new Ne(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ir(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Nl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fl extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pe{constructor(t,e,n,i,a,r,o,l,c,h,u,d,m,g,M,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,u,d,m,g,M,p)}set(t,e,n,i,a,r,o,l,c,h,u,d,m,g,M,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),a=1/li.setFromMatrixColumn(t,1).length(),r=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,m=r*u,g=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,M=c*u;e[0]=d+M*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=M+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,M=c*u;e[0]=d-M*o,e[4]=-r*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=M-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,m=r*u,g=o*h,M=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,m=r*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=g*u+m,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-M*u}else if(t.order==="XZY"){const d=r*l,m=r*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=r*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ol,t,kl)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Ln.crossVectors(n,He),Ln.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Ln.crossVectors(n,He)),Ln.normalize(),as.crossVectors(He,Ln),i[0]=Ln.x,i[4]=as.x,i[8]=He.x,i[1]=Ln.y,i[5]=as.y,i[9]=He.y,i[2]=Ln.z,i[6]=as.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],M=n[6],p=n[10],f=n[14],x=n[3],S=n[7],y=n[11],A=n[15],T=i[0],R=i[4],v=i[8],b=i[12],z=i[1],C=i[5],D=i[9],k=i[13],G=i[2],O=i[6],H=i[10],B=i[14],J=i[3],K=i[7],rt=i[11],dt=i[15];return a[0]=r*T+o*z+l*G+c*J,a[4]=r*R+o*C+l*O+c*K,a[8]=r*v+o*D+l*H+c*rt,a[12]=r*b+o*k+l*B+c*dt,a[1]=h*T+u*z+d*G+m*J,a[5]=h*R+u*C+d*O+m*K,a[9]=h*v+u*D+d*H+m*rt,a[13]=h*b+u*k+d*B+m*dt,a[2]=g*T+M*z+p*G+f*J,a[6]=g*R+M*C+p*O+f*K,a[10]=g*v+M*D+p*H+f*rt,a[14]=g*b+M*k+p*B+f*dt,a[3]=x*T+S*z+y*G+A*J,a[7]=x*R+S*C+y*O+A*K,a[11]=x*v+S*D+y*H+A*rt,a[15]=x*b+S*k+y*B+A*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],M=t[7],p=t[11],f=t[15],x=l*m-c*d,S=o*m-c*u,y=o*d-l*u,A=r*m-c*h,T=r*d-l*h,R=r*u-o*h;return e*(M*x-p*S+f*y)-n*(g*x-p*A+f*T)+i*(g*S-M*A+f*R)-a*(g*y-M*T+p*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],M=t[13],p=t[14],f=t[15],x=e*o-n*r,S=e*l-i*r,y=e*c-a*r,A=n*l-i*o,T=n*c-a*o,R=i*c-a*l,v=h*M-u*g,b=h*p-d*g,z=h*f-m*g,C=u*p-d*M,D=u*f-m*M,k=d*f-m*p,G=x*k-S*D+y*C+A*z-T*b+R*v;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return t[0]=(o*k-l*D+c*C)*O,t[1]=(i*D-n*k-a*C)*O,t[2]=(M*R-p*T+f*A)*O,t[3]=(d*T-u*R-m*A)*O,t[4]=(l*z-r*k-c*b)*O,t[5]=(e*k-i*z+a*b)*O,t[6]=(p*y-g*R-f*S)*O,t[7]=(h*R-d*y+m*S)*O,t[8]=(r*D-o*z+c*v)*O,t[9]=(n*z-e*D-a*v)*O,t[10]=(g*T-M*y+f*x)*O,t[11]=(u*y-h*T-m*x)*O,t[12]=(o*b-r*C-l*v)*O,t[13]=(e*C-n*b+i*v)*O,t[14]=(M*S-g*A-p*x)*O,t[15]=(h*A-u*S+d*x)*O,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,m=a*h,g=a*u,M=r*h,p=r*u,f=o*u,x=l*c,S=l*h,y=l*u,A=n.x,T=n.y,R=n.z;return i[0]=(1-(M+f))*A,i[1]=(m+y)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(m-y)*T,i[5]=(1-(d+f))*T,i[6]=(p+x)*T,i[7]=0,i[8]=(g+S)*R,i[9]=(p-x)*R,i[10]=(1-(d+M))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const a=this.determinant();if(a===0)return n.set(1,1,1),e.identity(),this;let r=li.set(i[0],i[1],i[2]).length();const o=li.set(i[4],i[5],i[6]).length(),l=li.set(i[8],i[9],i[10]).length();a<0&&(r=-r),Qe.copy(this);const c=1/r,h=1/o,u=1/l;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=l,this}makePerspective(t,e,n,i,a,r,o=dn,l=!1){const c=this.elements,h=2*a/(e-t),u=2*a/(n-i),d=(e+t)/(e-t),m=(n+i)/(n-i);let g,M;if(l)g=a/(r-a),M=r*a/(r-a);else if(o===dn)g=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===Ji)g=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=dn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),m=-(n+i)/(n-i);let g,M;if(l)g=1/(r-a),M=r/(r-a);else if(o===dn)g=-2/(r-a),M=-(r+a)/(r-a);else if(o===Ji)g=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new L,Qe=new pe,Ol=new L(0,0,0),kl=new L(1,1,1),Ln=new L,as=new L,He=new L,to=new pe,eo=new Di;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return to.makeRotationFromQuaternion(t),this.setFromRotationMatrix(to,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eo.setFromEuler(this),this.setFromQuaternion(eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Dr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bl=0;const no=new L,hi=new Di,_n=new pe,rs=new L,Bi=new L,zl=new L,Gl=new Di,io=new L(1,0,0),so=new L(0,1,0),ao=new L(0,0,1),ro={type:"added"},Hl={type:"removed"},di={type:"childadded",child:null},ia={type:"childremoved",child:null};class Ae extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new mn,n=new Di,i=new L(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Vt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(io,t)}rotateY(t){return this.rotateOnAxis(so,t)}rotateZ(t){return this.rotateOnAxis(ao,t)}translateOnAxis(t,e){return no.copy(t).applyQuaternion(this.quaternion),this.position.add(no.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(io,t)}translateY(t){return this.translateOnAxis(so,t)}translateZ(t){return this.translateOnAxis(ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Bi,rs,this.up):_n.lookAt(rs,Bi,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(_n),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ro),di.child=t,this.dispatchEvent(di),di.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hl),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ro),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,zl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Gl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*n-a[8]*i,a[13]+=n-a[1]*e-a[5]*n-a[9]*i,a[14]+=i-a[2]*e-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vl={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vl)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},os={h:0,s:0,l:0};function aa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Lr(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=aa(r,a,t+1/3),this.g=aa(r,a,t),this.b=aa(r,a,t-1/3)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e=Ye){function n(a){a!==void 0&&parseFloat(a)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return ee.workingToColorSpace(De.copy(this),t),Math.round(jt(De.r*255,0,255))*65536+Math.round(jt(De.g*255,0,255))*256+Math.round(jt(De.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(De.copy(this),e);const n=De.r,i=De.g,a=De.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-a)/u+(i<a?6:0);break;case i:l=(a-n)/u+2;break;case a:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ye){ee.workingToColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(os);const n=Yi(In.h,os.h,e),i=Yi(In.s,os.s,e),a=Yi(In.l,os.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Kt;Kt.NAMES=uc;class Ur{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new Ur(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wl extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const tn=new L,vn=new L,ra=new L,xn=new L,ui=new L,fi=new L,oo=new L,oa=new L,ca=new L,la=new L,ha=new ve,da=new ve,ua=new ve;class sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){tn.subVectors(i,e),vn.subVectors(n,e),ra.subVectors(t,e);const r=tn.dot(tn),o=tn.dot(vn),l=tn.dot(ra),c=vn.dot(vn),h=vn.dot(ra),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,xn.x),l.addScaledVector(r,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return ha.setScalar(0),da.setScalar(0),ua.setScalar(0),ha.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ha,a.x),r.addScaledVector(da,a.y),r.addScaledVector(ua,a.z),r}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),vn.subVectors(t,e),tn.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),tn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;ui.subVectors(i,n),fi.subVectors(a,n),oa.subVectors(t,n);const l=ui.dot(oa),c=fi.dot(oa);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,i);const h=ui.dot(ca),u=fi.dot(ca);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ui,r);la.subVectors(t,a);const m=ui.dot(la),g=fi.dot(la);if(g>=0&&m<=g)return e.copy(a);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(fi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return oo.subVectors(a,i),o=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(oo,o);const f=1/(p+M+d);return r=M*f,o=d*f,e.copy(n).addScaledVector(ui,r).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class es{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,en):en.fromBufferAttribute(a,r),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),ls.subVectors(this.max,zi),pi.subVectors(t.a,zi),mi.subVectors(t.b,zi),gi.subVectors(t.c,zi),Dn.subVectors(mi,pi),Un.subVectors(gi,mi),Wn.subVectors(pi,gi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Wn.z,Wn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Wn.z,0,-Wn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Wn.y,Wn.x,0];return!fa(e,pi,mi,gi,ls)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,pi,mi,gi,ls))?!1:(hs.crossVectors(Dn,Un),e=[hs.x,hs.y,hs.z],fa(e,pi,mi,gi,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mn=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,cs=new es,pi=new L,mi=new L,gi=new L,Dn=new L,Un=new L,Wn=new L,zi=new L,ls=new L,hs=new L,Xn=new L;function fa(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Xn.fromArray(s,a);const o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ye=new L,ds=new Yt;let Xl=0;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xl++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qr,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),a=Fe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qr&&(t.usage=this.usage),t}}class fc extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pc extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ql=new es,Gi=new L,pa=new L;class Hs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ql.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);const e=Gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(pa)),this.expandByPoint(Gi.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $l=0;const qe=new pe,ma=new Ae,_i=new L,Ve=new es,Hi=new es,Te=new L;class Pe extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dl(t)?pc:fc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Vt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Ve.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ve.min,Hi.min),Ve.expandByPoint(Te),Te.addVectors(Ve.max,Hi.max),Ve.expandByPoint(Te)):(Ve.expandByPoint(Hi.min),Ve.expandByPoint(Hi.max))}Ve.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)Te.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(t,c),Te.add(_i)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new L,l[v]=new L;const c=new L,h=new L,u=new L,d=new Yt,m=new Yt,g=new Yt,M=new L,p=new L;function f(v,b,z){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,z),d.fromBufferAttribute(a,v),m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,z),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[v].add(M),o[b].add(M),o[z].add(M),l[v].add(p),l[b].add(p),l[z].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,b=x.length;v<b;++v){const z=x[v],C=z.start,D=z.count;for(let k=C,G=C+D;k<G;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new L,y=new L,A=new L,T=new L;function R(v){A.fromBufferAttribute(i,v),T.copy(A);const b=o[v];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(T,b);const C=y.dot(l[v])<0?-1:1;r.setXYZW(v,S.x,S.y,S.z,C)}for(let v=0,b=x.length;v<b;++v){const z=x[v],C=z.start,D=z.count;for(let k=C,G=C+D;k<G;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new L,a=new L,r=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,M),r.fromBufferAttribute(e,p),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Ke(d,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Yl=0;class Ui extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=bi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const yn=new L,ga=new L,us=new L,Nn=new L,_a=new L,fs=new L,va=new L;class Nr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ga.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(ga);const a=t.distanceTo(e)*.5,r=-this.direction.dot(us),o=Nn.dot(this.direction),l=-Nn.dot(us),c=Nn.lengthSq(),h=Math.abs(1-r*r);let u,d,m,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,m=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ga).addScaledVector(us,d),m}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),i=yn.dot(yn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,i,a){_a.subVectors(e,t),fs.subVectors(n,t),va.crossVectors(_a,fs);let r=this.direction.dot(va),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Nn.subVectors(this.origin,t);const l=o*this.direction.dot(fs.crossVectors(Nn,fs));if(l<0)return null;const c=o*this.direction.dot(_a.cross(Nn));if(c<0||l+c>r)return null;const h=-o*Nn.dot(va);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fr extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const co=new pe,qn=new Nr,ps=new Hs,lo=new L,ms=new L,gs=new L,_s=new L,xa=new L,vs=new L,ho=new L,xs=new L;class P extends Ae{constructor(t=new Pe,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){vs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(xa.fromBufferAttribute(u,t),r?vs.addScaledVector(xa,h):vs.addScaledVector(xa.sub(e),h))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(a),qn.copy(t.ray).recast(t.near),!(ps.containsPoint(qn.origin)===!1&&(qn.intersectSphere(ps,lo)===null||qn.origin.distanceToSquared(lo)>(t.far-t.near)**2))&&(co.copy(a).invert(),qn.copy(t.ray).applyMatrix4(co),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,M=d.length;g<M;g++){const p=d[g],f=r[p.materialIndex],x=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=x,A=S;y<A;y+=3){const T=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);i=Ms(this,f,t,n,c,h,u,T,R,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const x=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);i=Ms(this,r,t,n,c,h,u,x,S,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,M=d.length;g<M;g++){const p=d[g],f=r[p.materialIndex],x=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=x,A=S;y<A;y+=3){const T=y,R=y+1,v=y+2;i=Ms(this,f,t,n,c,h,u,T,R,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,f=M;p<f;p+=3){const x=p,S=p+1,y=p+2;i=Ms(this,r,t,n,c,h,u,x,S,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Zl(s,t,e,n,i,a,r,o){let l;if(t.side===ze?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===Hn,o),l===null)return null;xs.copy(o),xs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(xs);return c<e.near||c>e.far?null:{distance:c,point:xs.clone(),object:s}}function Ms(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,ms),s.getVertexPosition(l,gs),s.getVertexPosition(c,_s);const h=Zl(s,t,e,n,ms,gs,_s,ho);if(h){const u=new L;sn.getBarycoord(ho,ms,gs,_s,u),i&&(h.uv=sn.getInterpolatedAttribute(i,o,l,c,u,new Yt)),a&&(h.uv1=sn.getInterpolatedAttribute(a,o,l,c,u,new Yt)),r&&(h.normal=sn.getInterpolatedAttribute(r,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};sn.getNormal(ms,gs,_s,d.normal),h.face=d,h.barycoord=u}return h}class mc extends Ne{constructor(t=null,e=1,n=1,i,a,r,o,l,c=Re,h=Re,u,d){super(null,r,o,l,c,h,i,a,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ma=new L,jl=new L,Kl=new Vt;class jn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ma.subVectors(n,e).cross(jl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kl.getNormalMatrix(t),i=this.coplanarPoint(Ma).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new Hs,Jl=new Yt(.5,.5),ys=new L;class Or{constructor(t=new jn,e=new jn,n=new jn,i=new jn,a=new jn,r=new jn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){const i=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],d=a[6],m=a[7],g=a[8],M=a[9],p=a[10],f=a[11],x=a[12],S=a[13],y=a[14],A=a[15];if(i[0].setComponents(c-r,m-h,f-g,A-x).normalize(),i[1].setComponents(c+r,m+h,f+g,A+x).normalize(),i[2].setComponents(c+o,m+u,f+M,A+S).normalize(),i[3].setComponents(c-o,m-u,f-M,A-S).normalize(),n)i[4].setComponents(l,d,p,y).normalize(),i[5].setComponents(c-l,m-d,f-p,A-y).normalize();else if(i[4].setComponents(c-l,m-d,f-p,A-y).normalize(),e===dn)i[5].setComponents(c+l,m+d,f+p,A+y).normalize();else if(e===Ji)i[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);const e=Jl.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ys.x=i.normal.x>0?t.max.x:t.min.x,ys.y=i.normal.y>0?t.max.y:t.min.y,ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gr extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uo=new pe,_r=new Nr,Ss=new Hs,ws=new L;class fo extends Ae{constructor(t=new Pe,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(i),Ss.radius+=a,t.ray.intersectsSphere(Ss)===!1)return;uo.copy(i).invert(),_r.copy(t.ray).applyMatrix4(uo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=d,M=m;g<M;g++){const p=c.getX(g);ws.fromBufferAttribute(u,p),po(ws,p,l,i,t,e,this)}}else{const d=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=d,M=m;g<M;g++)ws.fromBufferAttribute(u,g),po(ws,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function po(s,t,e,n,i,a,r){const o=_r.distanceSqToPoint(s);if(o<e){const l=new L;_r.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class gc extends Ne{constructor(t=[],e=ei,n,i,a,r,o,l,c,h){super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $e extends Ne{constructor(t,e,n,i,a,r,o,l,c){super(t,e,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ts extends Ne{constructor(t,e,n=pn,i,a,r,o=Re,l=Re,c,h=An,u=1){if(h!==An&&h!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ql extends ts{constructor(t,e=pn,n=ei,i,a,r=Re,o=Re,l,c=An){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,a,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class _c extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lt extends Pe{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(M,p,f,x,S,y,A,T,R,v,b){const z=y/R,C=A/v,D=y/2,k=A/2,G=T/2,O=R+1,H=v+1;let B=0,J=0;const K=new L;for(let rt=0;rt<H;rt++){const dt=rt*C-k;for(let ct=0;ct<O;ct++){const Nt=ct*z-D;K[M]=Nt*x,K[p]=dt*S,K[f]=G,c.push(K.x,K.y,K.z),K[M]=0,K[p]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(ct/R),u.push(1-rt/v),B+=1}}for(let rt=0;rt<v;rt++)for(let dt=0;dt<R;dt++){const ct=d+dt+O*rt,Nt=d+dt+O*(rt+1),se=d+(dt+1)+O*(rt+1),ne=d+(dt+1)+O*rt;l.push(ct,Nt,ne),l.push(Nt,se,ne),J+=6}o.addGroup(m,J,b),m+=J,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zi extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new L,h=new Yt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vt extends Pe{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],u=[],d=[],m=[];let g=0;const M=[],p=n/2;let f=0;x(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(m,2));function x(){const y=new L,A=new L;let T=0;const R=(e-t)/n;for(let v=0;v<=a;v++){const b=[],z=v/a,C=z*(e-t)+t;for(let D=0;D<=i;D++){const k=D/i,G=k*l+o,O=Math.sin(G),H=Math.cos(G);A.x=C*O,A.y=-z*n+p,A.z=C*H,u.push(A.x,A.y,A.z),y.set(O,R,H).normalize(),d.push(y.x,y.y,y.z),m.push(k,1-z),b.push(g++)}M.push(b)}for(let v=0;v<i;v++)for(let b=0;b<a;b++){const z=M[b][v],C=M[b+1][v],D=M[b+1][v+1],k=M[b][v+1];(t>0||b!==0)&&(h.push(z,C,k),T+=3),(e>0||b!==a-1)&&(h.push(C,D,k),T+=3)}c.addGroup(f,T,0),f+=T}function S(y){const A=g,T=new Yt,R=new L;let v=0;const b=y===!0?t:e,z=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,p*z,0),d.push(0,z,0),m.push(.5,.5),g++;const C=g;for(let D=0;D<=i;D++){const G=D/i*l+o,O=Math.cos(G),H=Math.sin(G);R.x=b*H,R.y=p*z,R.z=b*O,u.push(R.x,R.y,R.z),d.push(0,z,0),T.x=O*.5+.5,T.y=H*.5*z+.5,m.push(T.x,T.y),g++}for(let D=0;D<i;D++){const k=A+D,G=C+D;y===!0?h.push(G,G+1,k):h.push(G+1,G,k),v+=3}c.addGroup(f,v,y===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Se extends vt{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Se(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vs extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),c(n),h(),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(a.slice(),3)),this.setAttribute("uv",new me(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new L,y=new L,A=new L;for(let T=0;T<e.length;T+=3)m(e[T+0],S),m(e[T+1],y),m(e[T+2],A),l(S,y,A,x)}function l(x,S,y,A){const T=A+1,R=[];for(let v=0;v<=T;v++){R[v]=[];const b=x.clone().lerp(y,v/T),z=S.clone().lerp(y,v/T),C=T-v;for(let D=0;D<=C;D++)D===0&&v===T?R[v][D]=b:R[v][D]=b.clone().lerp(z,D/C)}for(let v=0;v<T;v++)for(let b=0;b<2*(T-v)-1;b++){const z=Math.floor(b/2);b%2===0?(d(R[v][z+1]),d(R[v+1][z]),d(R[v][z])):(d(R[v][z+1]),d(R[v+1][z+1]),d(R[v+1][z]))}}function c(x){const S=new L;for(let y=0;y<a.length;y+=3)S.x=a[y+0],S.y=a[y+1],S.z=a[y+2],S.normalize().multiplyScalar(x),a[y+0]=S.x,a[y+1]=S.y,a[y+2]=S.z}function h(){const x=new L;for(let S=0;S<a.length;S+=3){x.x=a[S+0],x.y=a[S+1],x.z=a[S+2];const y=p(x)/2/Math.PI+.5,A=f(x)/Math.PI+.5;r.push(y,1-A)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const S=r[x+0],y=r[x+2],A=r[x+4],T=Math.max(S,y,A),R=Math.min(S,y,A);T>.9&&R<.1&&(S<.2&&(r[x+0]+=1),y<.2&&(r[x+2]+=1),A<.2&&(r[x+4]+=1))}}function d(x){a.push(x.x,x.y,x.z)}function m(x,S){const y=x*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){const x=new L,S=new L,y=new L,A=new L,T=new Yt,R=new Yt,v=new Yt;for(let b=0,z=0;b<a.length;b+=9,z+=6){x.set(a[b+0],a[b+1],a[b+2]),S.set(a[b+3],a[b+4],a[b+5]),y.set(a[b+6],a[b+7],a[b+8]),T.set(r[z+0],r[z+1]),R.set(r[z+2],r[z+3]),v.set(r[z+4],r[z+5]),A.copy(x).add(S).add(y).divideScalar(3);const C=p(A);M(T,z+0,x,C),M(R,z+2,S,C),M(v,z+4,y,C)}}function M(x,S,y,A){A<0&&x.x===1&&(r[S]=x.x-1),y.x===0&&y.z===0&&(r[S]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.vertices,t.indices,t.radius,t.detail)}}class Bn extends Vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bn(t.radius,t.detail)}}class Ws extends Vs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ws(t.radius,t.detail)}}class We extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,m=[],g=[],M=[],p=[];for(let f=0;f<h;f++){const x=f*d-r;for(let S=0;S<c;S++){const y=S*u-a;g.push(y,-x,0),M.push(0,0,1),p.push(S/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const S=x+c*f,y=x+c*(f+1),A=x+1+c*(f+1),T=x+1+c*f;m.push(S,y,T),m.push(y,A,T)}this.setIndex(m),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.width,t.height,t.widthSegments,t.heightSegments)}}class fe extends Pe{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new L,d=new L,m=[],g=[],M=[],p=[];for(let f=0;f<=n;f++){const x=[],S=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(i+T*a)*Math.sin(r+S*o),u.y=t*Math.cos(r+S*o),u.z=t*Math.sin(i+T*a)*Math.sin(r+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),p.push(T+y,1-S),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const S=h[f][x+1],y=h[f][x],A=h[f+1][x],T=h[f+1][x+1];(f!==0||r>0)&&m.push(S,y,T),(f!==n-1||l<Math.PI)&&m.push(y,A,T)}this.setIndex(m),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sn extends Pe{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],u=[],d=new L,m=new L,g=new L;for(let M=0;M<=n;M++){const p=r+M/n*o;for(let f=0;f<=i;f++){const x=f/i*a;m.x=(t+e*Math.cos(p))*Math.cos(x),m.y=(t+e*Math.cos(p))*Math.sin(x),m.z=e*Math.sin(p),c.push(m.x,m.y,m.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),u.push(f/i),u.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=i;p++){const f=(i+1)*M+p-1,x=(i+1)*(M-1)+p-1,S=(i+1)*(M-1)+p,y=(i+1)*M+p;l.push(f,x,y),l.push(x,S,y)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Pi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=Pi(s[e]);for(const i in n)t[i]=n[i]}return t}function th(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function vc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const eh={clone:Pi,merge:Oe};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sh extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ah extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rh extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xs extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class oh extends Xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ya=new pe,mo=new L,go=new L;class xc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mo.setFromMatrixPosition(t.matrixWorld),e.position.copy(mo),go.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(go),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ji||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bs=new L,Es=new Di,on=new L;class Mc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bs,Es,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,Es,on.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(bs,Es,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,Es,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new L,_o=new Yt,vo=new Yt;class Ze extends Mc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,_o,vo),e.subVectors(vo,_o)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($i*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ch extends xc{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}}class Bs extends Xs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class qs extends Mc{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lh extends xc{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hh extends Xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new lh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class dh extends Xs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const vi=-90,xi=1;class uh extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ze(vi,xi,t,e);i.layers=this.layers,this.add(i);const a=new Ze(vi,xi,t,e);a.layers=this.layers,this.add(a);const r=new Ze(vi,xi,t,e);r.layers=this.layers,this.add(r);const o=new Ze(vi,xi,t,e);o.layers=this.layers,this.add(o);const l=new Ze(vi,xi,t,e);l.layers=this.layers,this.add(l);const c=new Ze(vi,xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fh extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const xo=new pe;class ph{constructor(t,e,n=0,i=1/0){this.ray=new Nr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xo),this}intersectObject(t,e=!0,n=[]){return vr(t,this,n,e),n.sort(Mo),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)vr(t[i],this,n,e);return n.sort(Mo),n}}function Mo(s,t){return s.distance-t.distance}function vr(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)vr(a[r],t,e,!0)}}function yo(s,t,e,n){const i=mh(n);switch(e){case rc:return s*t;case cc:return s*t/i.components*i.byteLength;case Tr:return s*t/i.components*i.byteLength;case Ci:return s*t*2/i.components*i.byteLength;case Ar:return s*t*2/i.components*i.byteLength;case oc:return s*t*3/i.components*i.byteLength;case je:return s*t*4/i.components*i.byteLength;case Cr:return s*t*4/i.components*i.byteLength;case Ps:case Ls:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ds:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ga:return Math.max(s,16)*Math.max(t,8)/4;case ka:case za:return Math.max(s,8)*Math.max(t,8)/2;case Ha:case Va:case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wa:case $a:case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case tr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case er:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ir:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ar:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case or:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case cr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case lr:case hr:case dr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ur:case fr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case pr:case mr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mh(s){switch(s){case Xe:case nc:return{byteLength:1,components:1};case ji:case ic:case Tn:return{byteLength:2,components:1};case br:case Er:return{byteLength:2,components:4};case pn:case wr:case hn:return{byteLength:4,components:1};case sc:case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yr}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yr);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yc(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function gh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],M=u[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const M=u[m];s.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Oh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,md=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,au=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,du=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Su=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ou=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ku=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:Mh,alphatest_fragment:yh,alphatest_pars_fragment:Sh,aomap_fragment:wh,aomap_pars_fragment:bh,batching_pars_vertex:Eh,batching_vertex:Th,begin_vertex:Ah,beginnormal_vertex:Ch,bsdfs:Rh,iridescence_fragment:Ph,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Dh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:kh,color_vertex:Bh,common:zh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:$h,colorspace_pars_fragment:Yh,envmap_fragment:Zh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Kh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:ld,envmap_vertex:Qh,fog_vertex:td,fog_pars_vertex:ed,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:ad,lights_lambert_fragment:rd,lights_lambert_pars_fragment:od,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:dd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Sd,map_fragment:wd,map_pars_fragment:bd,map_particle_fragment:Ed,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Rd,morphcolor_vertex:Pd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Id,morphtarget_vertex:Dd,normal_fragment_begin:Ud,normal_fragment_maps:Nd,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:kd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:$d,dithering_fragment:Yd,dithering_pars_fragment:Zd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:tu,shadowmask_pars_fragment:eu,skinbase_vertex:nu,skinning_pars_vertex:iu,skinning_vertex:su,skinnormal_vertex:au,specularmap_fragment:ru,specularmap_pars_fragment:ou,tonemapping_fragment:cu,tonemapping_pars_fragment:lu,transmission_fragment:hu,transmission_pars_fragment:du,uv_pars_fragment:uu,uv_pars_vertex:fu,uv_vertex:pu,worldpos_vertex:mu,background_vert:gu,background_frag:_u,backgroundCube_vert:vu,backgroundCube_frag:xu,cube_vert:Mu,cube_frag:yu,depth_vert:Su,depth_frag:wu,distance_vert:bu,distance_frag:Eu,equirect_vert:Tu,equirect_frag:Au,linedashed_vert:Cu,linedashed_frag:Ru,meshbasic_vert:Pu,meshbasic_frag:Lu,meshlambert_vert:Iu,meshlambert_frag:Du,meshmatcap_vert:Uu,meshmatcap_frag:Nu,meshnormal_vert:Fu,meshnormal_frag:Ou,meshphong_vert:ku,meshphong_frag:Bu,meshphysical_vert:zu,meshphysical_frag:Gu,meshtoon_vert:Hu,meshtoon_frag:Vu,points_vert:Wu,points_frag:Xu,shadow_vert:qu,shadow_frag:$u,sprite_vert:Yu,sprite_frag:Zu},ut={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ln={basic:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Oe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Oe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Oe([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Oe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Oe([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Oe([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Oe([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Oe([ut.lights,ut.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};ln.physical={uniforms:Oe([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ts={r:0,b:0,g:0},Yn=new mn,ju=new pe;function Ku(s,t,e,n,i,a){const r=new Kt(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function m(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const y=x.backgroundBlurriness>0;S=t.get(S,y)}return S}function g(x){let S=!1;const y=m(x);y===null?p(r,o):y&&y.isColor&&(p(y,1),S=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(x,S){const y=m(S);y&&(y.isCubeTexture||y.mapping===Gs)?(c===void 0&&(c=new P(new lt(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Pi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Yn.copy(S.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ju.makeRotationFromEuler(Yn)),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==ae,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new P(new We(2,2),new gn({name:"BackgroundMaterial",uniforms:Pi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,S){x.getRGB(Ts,vc(s)),e.buffers.color.setClear(Ts.r,Ts.g,Ts.b,S,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,S=1){r.set(x),o=S,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(r,o)},render:g,addToRenderList:M,dispose:f}}function Ju(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(C,D,k,G,O){let H=!1;const B=u(C,G,k,D);a!==B&&(a=B,c(a.object)),H=m(C,G,k,O),H&&g(C,G,k,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,y(C,D,k,G),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,D,k,G){const O=G.wireframe===!0;let H=n[D.id];H===void 0&&(H={},n[D.id]=H);const B=C.isInstancedMesh===!0?C.id:0;let J=H[B];J===void 0&&(J={},H[B]=J);let K=J[k.id];K===void 0&&(K={},J[k.id]=K);let rt=K[O];return rt===void 0&&(rt=d(l()),K[O]=rt),rt}function d(C){const D=[],k=[],G=[];for(let O=0;O<e;O++)D[O]=0,k[O]=0,G[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:G,object:C,attributes:{},index:null}}function m(C,D,k,G){const O=a.attributes,H=D.attributes;let B=0;const J=k.getAttributes();for(const K in J)if(J[K].location>=0){const dt=O[K];let ct=H[K];if(ct===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),dt===void 0||dt.attribute!==ct||ct&&dt.data!==ct.data)return!0;B++}return a.attributesNum!==B||a.index!==G}function g(C,D,k,G){const O={},H=D.attributes;let B=0;const J=k.getAttributes();for(const K in J)if(J[K].location>=0){let dt=H[K];dt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor));const ct={};ct.attribute=dt,dt&&dt.data&&(ct.data=dt.data),O[K]=ct,B++}a.attributes=O,a.attributesNum=B,a.index=G}function M(){const C=a.newAttributes;for(let D=0,k=C.length;D<k;D++)C[D]=0}function p(C){f(C,0)}function f(C,D){const k=a.newAttributes,G=a.enabledAttributes,O=a.attributeDivisors;k[C]=1,G[C]===0&&(s.enableVertexAttribArray(C),G[C]=1),O[C]!==D&&(s.vertexAttribDivisor(C,D),O[C]=D)}function x(){const C=a.newAttributes,D=a.enabledAttributes;for(let k=0,G=D.length;k<G;k++)D[k]!==C[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function S(C,D,k,G,O,H,B){B===!0?s.vertexAttribIPointer(C,D,k,O,H):s.vertexAttribPointer(C,D,k,G,O,H)}function y(C,D,k,G){M();const O=G.attributes,H=k.getAttributes(),B=D.defaultAttributeValues;for(const J in H){const K=H[J];if(K.location>=0){let rt=O[J];if(rt===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(rt=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(rt=C.instanceColor)),rt!==void 0){const dt=rt.normalized,ct=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;const se=Nt.buffer,ne=Nt.type,Z=Nt.bytesPerElement,it=ne===s.INT||ne===s.UNSIGNED_INT||rt.gpuType===wr;if(rt.isInterleavedBufferAttribute){const at=rt.data,kt=at.stride,Rt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Pt=0;Pt<K.locationSize;Pt++)f(K.location+Pt,at.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Pt=0;Pt<K.locationSize;Pt++)p(K.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,se);for(let Pt=0;Pt<K.locationSize;Pt++)S(K.location+Pt,ct/K.locationSize,ne,dt,kt*Z,(Rt+ct/K.locationSize*Pt)*Z,it)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<K.locationSize;at++)f(K.location+at,rt.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<K.locationSize;at++)p(K.location+at);s.bindBuffer(s.ARRAY_BUFFER,se);for(let at=0;at<K.locationSize;at++)S(K.location+at,ct/K.locationSize,ne,dt,ct*Z,ct/K.locationSize*at*Z,it)}}else if(B!==void 0){const dt=B[J];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(K.location,dt);break;case 3:s.vertexAttrib3fv(K.location,dt);break;case 4:s.vertexAttrib4fv(K.location,dt);break;default:s.vertexAttrib1fv(K.location,dt)}}}}x()}function A(){b();for(const C in n){const D=n[C];for(const k in D){const G=D[k];for(const O in G){const H=G[O];for(const B in H)h(H[B].object),delete H[B];delete G[O]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const k in D){const G=D[k];for(const O in G){const H=G[O];for(const B in H)h(H[B].object),delete H[B];delete G[O]}}delete n[C.id]}function R(C){for(const D in n){const k=n[D];for(const G in k){const O=k[G];if(O[C.id]===void 0)continue;const H=O[C.id];for(const B in H)h(H[B].object),delete H[B];delete O[C.id]}}}function v(C){for(const D in n){const k=n[D],G=C.isInstancedMesh===!0?C.id:0,O=k[G];if(O!==void 0){for(const H in O){const B=O[H];for(const J in B)h(B[J].object),delete B[J];delete O[H]}delete k[G],Object.keys(k).length===0&&delete n[D]}}}function b(){z(),r=!0,a!==i&&(a=i,c(a.object))}function z(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:x}}function Qu(s,t,e){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tf(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==je&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Xe&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hn&&!v)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:T}}function ef(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new jn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||a&&!p)a?h(null):c();else{const x=a?0:n,S=x*4;let y=f.clippingState||null;l.value=y,y=h(g,d,S,m);for(let A=0;A!==S;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const f=m+M*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,y=m;S!==M;++S,y+=4)r.copy(u[S]).applyMatrix4(x,o),r.normal.toArray(p,y),p[y+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}const zn=4,So=[.125,.215,.35,.446,.526,.582],Jn=20,nf=256,Vi=new qs,wo=new Kt;let Sa=null,wa=0,ba=0,Ea=!1;const sf=new L;class bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,a={}){const{size:r=256,position:o=sf}=a;Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,wa,ba),this._renderer.xr.enabled=Ea,t.scissorTest=!1,Mi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ei||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Tn,format:je,colorSpace:Ri,depthBuffer:!1},i=Eo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=af(a)),this._blurMaterial=of(a,t,e),this._ggxMaterial=rf(a,t,e)}return i}_compileMaterial(t){const e=new P(new Pe,t);this._renderer.compile(e,Vi)}_sceneToCubeUV(t,e,n,i,a){const l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(wo),u.toneMapping=un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new P(new lt,new Fr({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let f=!1;const x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,f=!0):(p.color.copy(wo),f=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[S],a.y,a.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[S]));const A=this._cubeSize;Mi(i,y*A,S>2?A:0,A,A),u.setRenderTarget(i),f&&u.render(M,l),u.render(t,l)}u.toneMapping=m,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ei||t.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const a=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Mi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Vi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,m=u*d,{_lodMax:g}=this,M=this._sizeLods[n],p=3*M*(n>g-zn?n-g+zn:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,Mi(a,p,f,3*M,2*M),i.setRenderTarget(a),i.render(o,Vi),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,Mi(t,p,f,3*M,2*M),i.setRenderTarget(t),i.render(o,Vi)}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),M=a/g,p=isFinite(a)?1+Math.floor(h*M):Jn;p>Jn&&zt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const f=[];let x=0;for(let R=0;R<Jn;++R){const v=R/M,b=Math.exp(-v*v/2);f.push(b),R===0?x+=b:R<p&&(x+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const y=this._sizeLods[i],A=3*y*(i>S-zn?i-S+zn:0),T=4*(this._cubeSize-y);Mi(e,A,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Vi)}}function af(s){const t=[],e=[],n=[];let i=s;const a=s-zn+1+So.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-zn?l=So[r-s+zn-1]:r===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,M=3,p=2,f=1,x=new Float32Array(M*g*m),S=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,v=T>2?0:-1,b=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];x.set(b,M*g*T),S.set(d,p*g*T);const z=[T,T,T,T,T,T];y.set(z,f*g*T)}const A=new Pe;A.setAttribute("position",new Ke(x,M)),A.setAttribute("uv",new Ke(S,p)),A.setAttribute("faceIndex",new Ke(y,f)),n.push(new P(A,null)),i>zn&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Eo(s,t,e){const n=new fn(s,t,e);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function rf(s,t,e){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$s(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function of(s,t,e){const n=new Float32Array(Jn),i=new L(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function To(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ao(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function $s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sc extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new lt(5,5,5),a=new gn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:bn});a.uniforms.tEquirect.value=e;const r=new P(i,a),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Ue),new uh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}function cf(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?r(d):a(d)}function a(d){if(d&&d.isTexture){const m=d.mapping;if(m===js||m===Ks)if(t.has(d)){const g=t.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const M=new Sc(g.height);return M.fromEquirectangularTexture(s,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const m=d.mapping,g=m===js||m===Ks,M=m===ei||m===Ai;if(g||M){let p=e.get(d);const f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new bo(s)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const x=d.image;return g&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new bo(s)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,m){return m===js?d.mapping=ei:m===Ks&&(d.mapping=Ai),d}function l(d){let m=0;const g=6;for(let M=0;M<g;M++)d[M]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function lf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ks("WebGLRenderer: "+n+" extension not supported."),i}}}function hf(s,t,e,n){const i={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const m=a.get(d);m&&(t.remove(m),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,g=u.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const x=m.array;M=m.version;for(let S=0,y=x.length;S<y;S+=3){const A=x[S+0],T=x[S+1],R=x[S+2];d.push(A,T,T,R,R,A)}}else{const x=g.array;M=g.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const A=S+0,T=S+1,R=S+2;d.push(A,T,T,R,R,A)}}const p=new(g.count>=65535?pc:fc)(d,1);p.version=M;const f=a.get(u);f&&t.remove(f),a.set(u,p)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function df(s,t,e){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,m){s.drawElements(n,m,a,d*r),e.update(m,n,1)}function c(d,m,g){g!==0&&(s.drawElementsInstanced(n,m,a,d*r,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function u(d,m,g,M){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/r,m[f],M[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,d,0,M,0,g);let f=0;for(let x=0;x<g;x++)f+=m[x]*M[x];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function uf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:te("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ff(s,t,e){const n=new WeakMap,i=new ve;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let z=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",z)};var m=z;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),p===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*T*4*u),v=new dc(R,A,T,u);v.type=hn,v.needsUpdate=!0;const b=y*4;for(let C=0;C<u;C++){const D=f[C],k=x[C],G=S[C],O=A*T*4*C;for(let H=0;H<D.count;H++){const B=H*b;g===!0&&(i.fromBufferAttribute(D,H),R[O+B+0]=i.x,R[O+B+1]=i.y,R[O+B+2]=i.z,R[O+B+3]=0),M===!0&&(i.fromBufferAttribute(k,H),R[O+B+4]=i.x,R[O+B+5]=i.y,R[O+B+6]=i.z,R[O+B+7]=0),p===!0&&(i.fromBufferAttribute(G,H),R[O+B+8]=i.x,R[O+B+9]=i.y,R[O+B+10]=i.z,R[O+B+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new Yt(A,T)},n.set(o,d),o.addEventListener("dispose",z)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",M),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function pf(s,t,e,n,i){let a=new WeakMap;function r(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(a.get(d)!==h&&(t.update(d),a.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==h&&(m.update(),a.set(m,h))}return d}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const mf={[Zo]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[Ko]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[Qo]:"AGX_TONE_MAPPING",[tc]:"NEUTRAL_TONE_MAPPING",[Jo]:"CUSTOM_TONE_MAPPING"};function gf(s,t,e,n,i){const a=new fn(t,e,{type:s,depthBuffer:n,stencilBuffer:i}),r=new fn(t,e,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),o=new Pe;o.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new me([0,2,0,0,2,0],2));const l=new sh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new P(o,l),h=new qs(-1,1,1,-1,0,1);let u=null,d=null,m=!1,g,M=null,p=[],f=!1;this.setSize=function(x,S){a.setSize(x,S),r.setSize(x,S);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){p=x,f=p.length>0&&p[0].isRenderPass===!0;const S=a.width,y=a.height;for(let A=0;A<p.length;A++){const T=p[A];T.setSize&&T.setSize(S,y)}},this.begin=function(x,S){if(m||x.toneMapping===un&&p.length===0)return!1;if(M=S,S!==null){const y=S.width,A=S.height;(a.width!==y||a.height!==A)&&this.setSize(y,A)}return f===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=un,!0},this.hasRenderPass=function(){return f},this.end=function(x,S){x.toneMapping=g,m=!0;let y=a,A=r;for(let T=0;T<p.length;T++){const R=p[T];if(R.enabled!==!1&&(R.render(x,A,y,S),R.needsSwap!==!1)){const v=y;y=A,A=v}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},ee.getTransfer(u)===ae&&(l.defines.SRGB_TRANSFER="");const T=mf[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(M),x.render(c,h),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),r.dispose(),o.dispose(),l.dispose()}}const wc=new Ne,xr=new ts(1,1),bc=new dc,Ec=new Fl,Tc=new gc,Co=[],Ro=[],Po=new Float32Array(16),Lo=new Float32Array(9),Io=new Float32Array(4);function Ni(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=Co[i];if(a===void 0&&(a=new Float32Array(i),Co[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ys(s,t){let e=Ro[t];e===void 0&&(e=new Int32Array(t),Ro[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function yf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Io.set(n),s.uniformMatrix2fv(this.addr,!1,Io),be(e,n)}}function Sf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Lo.set(n),s.uniformMatrix3fv(this.addr,!1,Lo),be(e,n)}}function wf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;Po.set(n),s.uniformMatrix4fv(this.addr,!1,Po),be(e,n)}}function bf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function Cf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function If(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(xr.compareFunction=e.isReversedDepthBuffer()?Pr:Rr,a=xr):a=wc,e.setTexture2D(t||a,i)}function Df(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ec,i)}function Uf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Tc,i)}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bc,i)}function Ff(s){switch(s){case 5126:return _f;case 35664:return vf;case 35665:return xf;case 35666:return Mf;case 35674:return yf;case 35675:return Sf;case 35676:return wf;case 5124:case 35670:return bf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return Af;case 5125:return Cf;case 36294:return Rf;case 36295:return Pf;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Nf}}function Of(s,t){s.uniform1fv(this.addr,t)}function kf(s,t){const e=Ni(t,this.size,2);s.uniform2fv(this.addr,e)}function Bf(s,t){const e=Ni(t,this.size,3);s.uniform3fv(this.addr,e)}function zf(s,t){const e=Ni(t,this.size,4);s.uniform4fv(this.addr,e)}function Gf(s,t){const e=Ni(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hf(s,t){const e=Ni(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Vf(s,t){const e=Ni(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wf(s,t){s.uniform1iv(this.addr,t)}function Xf(s,t){s.uniform2iv(this.addr,t)}function qf(s,t){s.uniform3iv(this.addr,t)}function $f(s,t){s.uniform4iv(this.addr,t)}function Yf(s,t){s.uniform1uiv(this.addr,t)}function Zf(s,t){s.uniform2uiv(this.addr,t)}function jf(s,t){s.uniform3uiv(this.addr,t)}function Kf(s,t){s.uniform4uiv(this.addr,t)}function Jf(s,t,e){const n=this.cache,i=t.length,a=Ys(e,i);we(n,a)||(s.uniform1iv(this.addr,a),be(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=xr:r=wc;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||r,a[o])}function Qf(s,t,e){const n=this.cache,i=t.length,a=Ys(e,i);we(n,a)||(s.uniform1iv(this.addr,a),be(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Ec,a[r])}function tp(s,t,e){const n=this.cache,i=t.length,a=Ys(e,i);we(n,a)||(s.uniform1iv(this.addr,a),be(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Tc,a[r])}function ep(s,t,e){const n=this.cache,i=t.length,a=Ys(e,i);we(n,a)||(s.uniform1iv(this.addr,a),be(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||bc,a[r])}function np(s){switch(s){case 5126:return Of;case 35664:return kf;case 35665:return Bf;case 35666:return zf;case 35674:return Gf;case 35675:return Hf;case 35676:return Vf;case 5124:case 35670:return Wf;case 35667:case 35671:return Xf;case 35668:case 35672:return qf;case 35669:case 35673:return $f;case 5125:return Yf;case 36294:return Zf;case 36295:return jf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return ep}}class ip{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ff(e.type)}}class sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=np(e.type)}}class ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Do(s,t){s.seq.push(t),s.map[t.id]=t}function rp(s,t,e){const n=s.name,i=n.length;for(Ta.lastIndex=0;;){const a=Ta.exec(n),r=Ta.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Do(e,c===void 0?new ip(o,s,t):new sp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new ap(o),Do(e,u)),e=u}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);rp(o,l,this)}const i=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Uo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const op=37297;let cp=0;function lp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const No=new Vt;function hp(s){ee._getMatrix(No,ee.workingColorSpace,s);const t=`mat3( ${No.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case Fs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+lp(s.getShaderSource(t),o)}else return a}function dp(s,t){const e=hp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const up={[Zo]:"Linear",[jo]:"Reinhard",[Ko]:"Cineon",[Sr]:"ACESFilmic",[Qo]:"AgX",[tc]:"Neutral",[Jo]:"Custom"};function fp(s,t){const e=up[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const As=new L;function pp(){ee.getLuminanceCoefficients(As);const s=As.x.toFixed(4),t=As.y.toFixed(4),e=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function gp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _p(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function qi(s){return s!==""}function Oo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ko(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(s){return s.replace(vp,Mp)}const xp=new Map;function Mp(s,t){let e=Wt[t];if(e===void 0){const n=xp.get(t);if(n!==void 0)e=Wt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mr(e)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(s){return s.replace(yp,Sp)}function Sp(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function zo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const wp={[Rs]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function bp(s){return wp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ep={[ei]:"ENVMAP_TYPE_CUBE",[Ai]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE_UV"};function Tp(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ep[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ap={[Ai]:"ENVMAP_MODE_REFRACTION"};function Cp(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ap[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Rp={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[tl]:"ENVMAP_BLENDING_MIX",[el]:"ENVMAP_BLENDING_ADD"};function Pp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Rp[s.combine]||"ENVMAP_BLENDING_NONE"}function Lp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ip(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=bp(e),c=Tp(e),h=Cp(e),u=Pp(e),d=Lp(e),m=mp(e),g=gp(a),M=i.createProgram();let p,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),f.length>0&&(f+=`
`)):(p=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),f=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Wt.tonemapping_pars_fragment:"",e.toneMapping!==un?fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,dp("linearToOutputTexel",e.outputColorSpace),pp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),r=Mr(r),r=Oo(r,e),r=ko(r,e),o=Mr(o),o=Oo(o,e),o=ko(o,e),r=Bo(r),o=Bo(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===$r?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+p+r,y=x+f+o,A=Uo(i,i.VERTEX_SHADER,S),T=Uo(i,i.FRAGMENT_SHADER,y);i.attachShader(M,A),i.attachShader(M,T),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function R(C){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(M)||"",k=i.getShaderInfoLog(A)||"",G=i.getShaderInfoLog(T)||"",O=D.trim(),H=k.trim(),B=G.trim();let J=!0,K=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,A,T);else{const rt=Fo(i,A,"vertex"),dt=Fo(i,T,"fragment");te("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+rt+`
`+dt)}else O!==""?zt("WebGLProgram: Program Info Log:",O):(H===""||B==="")&&(K=!1);K&&(C.diagnostics={runnable:J,programLog:O,vertexShader:{log:H,prefix:p},fragmentShader:{log:B,prefix:f}})}i.deleteShader(A),i.deleteShader(T),v=new Us(i,M),b=_p(i,M)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(M,op)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=T,this}let Dp=0;class Up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Np(t),e.set(t,n)),n}}class Np{constructor(t){this.id=Dp++,this.code=t,this.usedTimes=0}}function Fp(s,t,e,n,i,a){const r=new Dr,o=new Up,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,b,z,C,D){const k=C.fog,G=D.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=t.get(v.envMap||O,H),J=B&&B.mapping===Gs?B.image.height:null,K=m[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&zt("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=rt!==void 0?rt.length:0;let ct=0;G.morphAttributes.position!==void 0&&(ct=1),G.morphAttributes.normal!==void 0&&(ct=2),G.morphAttributes.color!==void 0&&(ct=3);let Nt,se,ne,Z;if(K){const Dt=ln[K];Nt=Dt.vertexShader,se=Dt.fragmentShader}else Nt=v.vertexShader,se=v.fragmentShader,o.update(v),ne=o.getVertexShaderID(v),Z=o.getFragmentShaderID(v);const it=s.getRenderTarget(),at=s.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,Rt=D.isBatchedMesh===!0,Pt=!!v.map,ue=!!v.matcap,Xt=!!B,Zt=!!v.aoMap,Jt=!!v.lightMap,Bt=!!v.bumpMap,re=!!v.normalMap,I=!!v.displacementMap,le=!!v.emissiveMap,$t=!!v.metalnessMap,Qt=!!v.roughnessMap,gt=v.anisotropy>0,E=v.clearcoat>0,_=v.dispersion>0,U=v.iridescence>0,Y=v.sheen>0,j=v.transmission>0,$=gt&&!!v.anisotropyMap,wt=E&&!!v.clearcoatMap,ot=E&&!!v.clearcoatNormalMap,Ct=E&&!!v.clearcoatRoughnessMap,Ut=U&&!!v.iridescenceMap,Q=U&&!!v.iridescenceThicknessMap,et=Y&&!!v.sheenColorMap,xt=Y&&!!v.sheenRoughnessMap,Et=!!v.specularMap,ft=!!v.specularColorMap,Gt=!!v.specularIntensityMap,N=j&&!!v.transmissionMap,st=j&&!!v.thicknessMap,nt=!!v.gradientMap,_t=!!v.alphaMap,tt=v.alphaTest>0,q=!!v.alphaHash,yt=!!v.extensions;let St=un;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(St=s.toneMapping);const Ft={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Nt,fragmentShader:se,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ri,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:ue,envMap:Xt,envMapMode:Xt&&B.mapping,envMapCubeUVHeight:J,aoMap:Zt,lightMap:Jt,bumpMap:Bt,normalMap:re,displacementMap:I,emissiveMap:le,normalMapObjectSpace:re&&v.normalMapType===sl,normalMapTangentSpace:re&&v.normalMapType===lc,metalnessMap:$t,roughnessMap:Qt,anisotropy:gt,anisotropyMap:$,clearcoat:E,clearcoatMap:wt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Ct,dispersion:_,iridescence:U,iridescenceMap:Ut,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:et,sheenRoughnessMap:xt,specularMap:Et,specularColorMap:ft,specularIntensityMap:Gt,transmission:j,transmissionMap:N,thicknessMap:st,gradientMap:nt,opaque:v.transparent===!1&&v.blending===bi&&v.alphaToCoverage===!1,alphaMap:_t,alphaTest:tt,alphaHash:q,combine:v.combine,mapUv:Pt&&g(v.map.channel),aoMapUv:Zt&&g(v.aoMap.channel),lightMapUv:Jt&&g(v.lightMap.channel),bumpMapUv:Bt&&g(v.bumpMap.channel),normalMapUv:re&&g(v.normalMap.channel),displacementMapUv:I&&g(v.displacementMap.channel),emissiveMapUv:le&&g(v.emissiveMap.channel),metalnessMapUv:$t&&g(v.metalnessMap.channel),roughnessMapUv:Qt&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:wt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:et&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(v.sheenRoughnessMap.channel),specularMapUv:Et&&g(v.specularMap.channel),specularColorMapUv:ft&&g(v.specularColorMap.channel),specularIntensityMapUv:Gt&&g(v.specularIntensityMap.channel),transmissionMapUv:N&&g(v.transmissionMap.channel),thicknessMapUv:st&&g(v.thicknessMap.channel),alphaMapUv:_t&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(re||gt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Pt||_t),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&re===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:le&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)b.push(z),b.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(f(b,v),x(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function f(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),v.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),v.push(r.mask)}function S(v){const b=m[v.type];let z;if(b){const C=ln[b];z=eh.clone(C.uniforms)}else z=v.uniforms;return z}function y(v,b){let z=h.get(b);return z!==void 0?++z.usedTimes:(z=new Ip(s,b,v,i),c.push(z),h.set(b,z)),z}function A(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function Op(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function kp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Go(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ho(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,g,M,p,f){let x=s[t];return x===void 0?(x={id:d.id,object:d,geometry:m,material:g,materialVariant:r(d),groupOrder:M,renderOrder:d.renderOrder,z:p,group:f},s[t]=x):(x.id=d.id,x.object=d,x.geometry=m,x.material=g,x.materialVariant=r(d),x.groupOrder=M,x.renderOrder=d.renderOrder,x.z=p,x.group=f),t++,x}function l(d,m,g,M,p,f){const x=o(d,m,g,M,p,f);g.transmission>0?n.push(x):g.transparent===!0?i.push(x):e.push(x)}function c(d,m,g,M,p,f){const x=o(d,m,g,M,p,f);g.transmission>0?n.unshift(x):g.transparent===!0?i.unshift(x):e.unshift(x)}function h(d,m){e.length>1&&e.sort(d||kp),n.length>1&&n.sort(m||Go),i.length>1&&i.sort(m||Go)}function u(){for(let d=t,m=s.length;d<m;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:l,unshift:c,finish:u,sort:h}}function Bp(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Ho,s.set(n,[r])):i>=a.length?(r=new Ho,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Kt};break;case"SpotLight":e={position:new L,direction:new L,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Gp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hp=0;function Vp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wp(s){const t=new zp,e=Gp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,a=new pe,r=new pe;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,M=0,p=0,f=0,x=0,S=0,y=0,A=0,T=0,R=0;c.sort(Vp);for(let b=0,z=c.length;b<z;b++){const C=c[b],D=C.color,k=C.intensity,G=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ci?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*k,u+=D.g*k,d+=D.b*k;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],k);R++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,J=e.get(C);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=C.shadow.matrix,x++}n.directional[m]=H,m++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(D).multiplyScalar(k),H.distance=G,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[M]=H;const B=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,B.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[M]=B.matrix,C.castShadow){const J=e.get(C);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=O,y++}M++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(D).multiplyScalar(k),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=H,p++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const B=C.shadow,J=e.get(C);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(k),H.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[f]=H,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==m||v.pointLength!==g||v.spotLength!==M||v.rectAreaLength!==p||v.hemiLength!==f||v.numDirectionalShadows!==x||v.numPointShadows!==S||v.numSpotShadows!==y||v.numSpotMaps!==A||v.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,v.directionalLength=m,v.pointLength=g,v.spotLength=M,v.rectAreaLength=p,v.hemiLength=f,v.numDirectionalShadows=x,v.numPointShadows=S,v.numSpotShadows=y,v.numSpotMaps=A,v.numLightProbes=R,n.version=Hp++)}function l(c,h){let u=0,d=0,m=0,g=0,M=0;const p=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const S=c[f];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(S.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),r.identity(),a.copy(S.matrixWorld),a.premultiply(p),r.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Vo(s){const t=new Wp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Xp(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Vo(s),t.set(i,[o])):a>=r.length?(o=new Vo(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$p=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yp=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Zp=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Wo=new pe,Wi=new L,Aa=new L;function jp(s,t,e){let n=new Or;const i=new Yt,a=new Yt,r=new ve,o=new ah,l=new rh,c={},h=e.maxTextureSize,u={[Hn]:ze,[ze]:Hn,[Be]:Be},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:qp,fragmentShader:$p}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new P(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let f=this.type;this.render=function(T,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===$o&&(zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Rs);const b=s.getRenderTarget(),z=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(bn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=f!==this.type;k&&R.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(O=>O.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,O=T.length;G<O;G++){const H=T[G],B=H.shadow;if(B===void 0){zt("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const J=B.getFrameExtents();i.multiply(J),a.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/J.x),i.x=a.x*J.x,B.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/J.y),i.y=a.y*J.y,B.mapSize.y=a.y));const K=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=K,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Xi){if(H.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new fn(i.x,i.y,{format:Ci,type:Tn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new ts(i.x,i.y,hn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=An,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Re,B.map.depthTexture.magFilter=Re}else H.isPointLight?(B.map=new Sc(i.x),B.map.depthTexture=new Ql(i.x,pn)):(B.map=new fn(i.x,i.y),B.map.depthTexture=new ts(i.x,i.y,pn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=An,this.type===Rs?(B.map.depthTexture.compareFunction=K?Pr:Rr,B.map.depthTexture.minFilter=Ue,B.map.depthTexture.magFilter=Ue):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Re,B.map.depthTexture.magFilter=Re);B.camera.updateProjectionMatrix()}const rt=B.map.isWebGLCubeRenderTarget?6:1;for(let dt=0;dt<rt;dt++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,dt),s.clear();else{dt===0&&(s.setRenderTarget(B.map),s.clear());const ct=B.getViewport(dt);r.set(a.x*ct.x,a.y*ct.y,a.x*ct.z,a.y*ct.w),D.viewport(r)}if(H.isPointLight){const ct=B.camera,Nt=B.matrix,se=H.distance||ct.far;se!==ct.far&&(ct.far=se,ct.updateProjectionMatrix()),Wi.setFromMatrixPosition(H.matrixWorld),ct.position.copy(Wi),Aa.copy(ct.position),Aa.add(Yp[dt]),ct.up.copy(Zp[dt]),ct.lookAt(Aa),ct.updateMatrixWorld(),Nt.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Wo.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Wo,ct.coordinateSystem,ct.reversedDepth)}else B.updateMatrices(H);n=B.getFrustum(),y(R,v,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===Xi&&x(B,v),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(b,z,C)};function x(T,R){const v=t.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fn(i.x,i.y,{format:Ci,type:Tn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,v,d,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,v,m,M,null)}function S(T,R,v,b){let z=null;const C=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)z=C;else if(z=v.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=z.uuid,k=R.uuid;let G=c[D];G===void 0&&(G={},c[D]=G);let O=G[k];O===void 0&&(O=z.clone(),G[k]=O,R.addEventListener("dispose",A)),z=O}if(z.visible=R.visible,z.wireframe=R.wireframe,b===Xi?z.side=R.shadowSide!==null?R.shadowSide:R.side:z.side=R.shadowSide!==null?R.shadowSide:u[R.side],z.alphaMap=R.alphaMap,z.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,z.map=R.map,z.clipShadows=R.clipShadows,z.clippingPlanes=R.clippingPlanes,z.clipIntersection=R.clipIntersection,z.displacementMap=R.displacementMap,z.displacementScale=R.displacementScale,z.displacementBias=R.displacementBias,z.wireframeLinewidth=R.wireframeLinewidth,z.linewidth=R.linewidth,v.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const D=s.properties.get(z);D.light=v}return z}function y(T,R,v,b,z){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===Xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const k=t.update(T),G=T.material;if(Array.isArray(G)){const O=k.groups;for(let H=0,B=O.length;H<B;H++){const J=O[H],K=G[J.materialIndex];if(K&&K.visible){const rt=S(T,K,b,z);T.onBeforeShadow(s,T,R,v,k,rt,J),s.renderBufferDirect(v,null,k,rt,T,J),T.onAfterShadow(s,T,R,v,k,rt,J)}}}else if(G.visible){const O=S(T,G,b,z);T.onBeforeShadow(s,T,R,v,k,O,null),s.renderBufferDirect(v,null,k,O,T,null),T.onAfterShadow(s,T,R,v,k,O,null)}}const D=T.children;for(let k=0,G=D.length;k<G;k++)y(D[k],R,v,b,z)}function A(T){T.target.removeEventListener("dispose",A);for(const v in c){const b=c[v],z=T.target.uuid;z in b&&(b[z].dispose(),delete b[z])}}}function Kp(s,t){function e(){let N=!1;const st=new ve;let nt=null;const _t=new ve(0,0,0,0);return{setMask:function(tt){nt!==tt&&!N&&(s.colorMask(tt,tt,tt,tt),nt=tt)},setLocked:function(tt){N=tt},setClear:function(tt,q,yt,St,Ft){Ft===!0&&(tt*=St,q*=St,yt*=St),st.set(tt,q,yt,St),_t.equals(st)===!1&&(s.clearColor(tt,q,yt,St),_t.copy(st))},reset:function(){N=!1,nt=null,_t.set(-1,0,0,0)}}}function n(){let N=!1,st=!1,nt=null,_t=null,tt=null;return{setReversed:function(q){if(st!==q){const yt=t.get("EXT_clip_control");q?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),st=q;const St=tt;tt=null,this.setClear(St)}},getReversed:function(){return st},setTest:function(q){q?it(s.DEPTH_TEST):at(s.DEPTH_TEST)},setMask:function(q){nt!==q&&!N&&(s.depthMask(q),nt=q)},setFunc:function(q){if(st&&(q=pl[q]),_t!==q){switch(q){case Pa:s.depthFunc(s.NEVER);break;case La:s.depthFunc(s.ALWAYS);break;case Ia:s.depthFunc(s.LESS);break;case Ti:s.depthFunc(s.LEQUAL);break;case Da:s.depthFunc(s.EQUAL);break;case Ua:s.depthFunc(s.GEQUAL);break;case Na:s.depthFunc(s.GREATER);break;case Fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=q}},setLocked:function(q){N=q},setClear:function(q){tt!==q&&(tt=q,st&&(q=1-q),s.clearDepth(q))},reset:function(){N=!1,nt=null,_t=null,tt=null,st=!1}}}function i(){let N=!1,st=null,nt=null,_t=null,tt=null,q=null,yt=null,St=null,Ft=null;return{setTest:function(Dt){N||(Dt?it(s.STENCIL_TEST):at(s.STENCIL_TEST))},setMask:function(Dt){st!==Dt&&!N&&(s.stencilMask(Dt),st=Dt)},setFunc:function(Dt,Me,he){(nt!==Dt||_t!==Me||tt!==he)&&(s.stencilFunc(Dt,Me,he),nt=Dt,_t=Me,tt=he)},setOp:function(Dt,Me,he){(q!==Dt||yt!==Me||St!==he)&&(s.stencilOp(Dt,Me,he),q=Dt,yt=Me,St=he)},setLocked:function(Dt){N=Dt},setClear:function(Dt){Ft!==Dt&&(s.clearStencil(Dt),Ft=Dt)},reset:function(){N=!1,st=null,nt=null,_t=null,tt=null,q=null,yt=null,St=null,Ft=null}}}const a=new e,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],g=null,M=!1,p=null,f=null,x=null,S=null,y=null,A=null,T=null,R=new Kt(0,0,0),v=0,b=!1,z=null,C=null,D=null,k=null,G=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=B>=2);let K=null,rt={};const dt=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Nt=new ve().fromArray(dt),se=new ve().fromArray(ct);function ne(N,st,nt,_t){const tt=new Uint8Array(4),q=s.createTexture();s.bindTexture(N,q),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let yt=0;yt<nt;yt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(st+yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return q}const Z={};Z[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),it(s.DEPTH_TEST),r.setFunc(Ti),Bt(!1),re(Hr),it(s.CULL_FACE),Zt(bn);function it(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function at(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function kt(N,st){return u[N]!==st?(s.bindFramebuffer(N,st),u[N]=st,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Rt(N,st){let nt=m,_t=!1;if(N){nt=d.get(st),nt===void 0&&(nt=[],d.set(st,nt));const tt=N.textures;if(nt.length!==tt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let q=0,yt=tt.length;q<yt;q++)nt[q]=s.COLOR_ATTACHMENT0+q;nt.length=tt.length,_t=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(nt)}function Pt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const ue={[Kn]:s.FUNC_ADD,[Oc]:s.FUNC_SUBTRACT,[kc]:s.FUNC_REVERSE_SUBTRACT};ue[Bc]=s.MIN,ue[zc]=s.MAX;const Xt={[Gc]:s.ZERO,[Hc]:s.ONE,[Vc]:s.SRC_COLOR,[Ca]:s.SRC_ALPHA,[Zc]:s.SRC_ALPHA_SATURATE,[$c]:s.DST_COLOR,[Xc]:s.DST_ALPHA,[Wc]:s.ONE_MINUS_SRC_COLOR,[Ra]:s.ONE_MINUS_SRC_ALPHA,[Yc]:s.ONE_MINUS_DST_COLOR,[qc]:s.ONE_MINUS_DST_ALPHA,[jc]:s.CONSTANT_COLOR,[Kc]:s.ONE_MINUS_CONSTANT_COLOR,[Jc]:s.CONSTANT_ALPHA,[Qc]:s.ONE_MINUS_CONSTANT_ALPHA};function Zt(N,st,nt,_t,tt,q,yt,St,Ft,Dt){if(N===bn){M===!0&&(at(s.BLEND),M=!1);return}if(M===!1&&(it(s.BLEND),M=!0),N!==Fc){if(N!==p||Dt!==b){if((f!==Kn||y!==Kn)&&(s.blendEquation(s.FUNC_ADD),f=Kn,y=Kn),Dt)switch(N){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFunc(s.ONE,s.ONE);break;case Vr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wr:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:te("WebGLState: Invalid blending: ",N);break}else switch(N){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vr:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wr:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",N);break}x=null,S=null,A=null,T=null,R.set(0,0,0),v=0,p=N,b=Dt}return}tt=tt||st,q=q||nt,yt=yt||_t,(st!==f||tt!==y)&&(s.blendEquationSeparate(ue[st],ue[tt]),f=st,y=tt),(nt!==x||_t!==S||q!==A||yt!==T)&&(s.blendFuncSeparate(Xt[nt],Xt[_t],Xt[q],Xt[yt]),x=nt,S=_t,A=q,T=yt),(St.equals(R)===!1||Ft!==v)&&(s.blendColor(St.r,St.g,St.b,Ft),R.copy(St),v=Ft),p=N,b=!1}function Jt(N,st){N.side===Be?at(s.CULL_FACE):it(s.CULL_FACE);let nt=N.side===ze;st&&(nt=!nt),Bt(nt),N.blending===bi&&N.transparent===!1?Zt(bn):Zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);const _t=N.stencilWrite;o.setTest(_t),_t&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):at(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(N){z!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),z=N)}function re(N){N!==Uc?(it(s.CULL_FACE),N!==C&&(N===Hr?s.cullFace(s.BACK):N===Nc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):at(s.CULL_FACE),C=N}function I(N){N!==D&&(H&&s.lineWidth(N),D=N)}function le(N,st,nt){N?(it(s.POLYGON_OFFSET_FILL),(k!==st||G!==nt)&&(k=st,G=nt,r.getReversed()&&(st=-st),s.polygonOffset(st,nt))):at(s.POLYGON_OFFSET_FILL)}function $t(N){N?it(s.SCISSOR_TEST):at(s.SCISSOR_TEST)}function Qt(N){N===void 0&&(N=s.TEXTURE0+O-1),K!==N&&(s.activeTexture(N),K=N)}function gt(N,st,nt){nt===void 0&&(K===null?nt=s.TEXTURE0+O-1:nt=K);let _t=rt[nt];_t===void 0&&(_t={type:void 0,texture:void 0},rt[nt]=_t),(_t.type!==N||_t.texture!==st)&&(K!==nt&&(s.activeTexture(nt),K=nt),s.bindTexture(N,st||Z[N]),_t.type=N,_t.texture=st)}function E(){const N=rt[K];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function Y(){try{s.texSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function j(){try{s.texSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function ot(){try{s.texStorage2D(...arguments)}catch(N){te("WebGLState:",N)}}function Ct(){try{s.texStorage3D(...arguments)}catch(N){te("WebGLState:",N)}}function Ut(){try{s.texImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function Q(){try{s.texImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function et(N){Nt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Nt.copy(N))}function xt(N){se.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),se.copy(N))}function Et(N,st){let nt=c.get(st);nt===void 0&&(nt=new WeakMap,c.set(st,nt));let _t=nt.get(N);_t===void 0&&(_t=s.getUniformBlockIndex(st,N.name),nt.set(N,_t))}function ft(N,st){const _t=c.get(st).get(N);l.get(st)!==_t&&(s.uniformBlockBinding(st,_t,N.__bindingPointIndex),l.set(st,_t))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,rt={},u={},d=new WeakMap,m=[],g=null,M=!1,p=null,f=null,x=null,S=null,y=null,A=null,T=null,R=new Kt(0,0,0),v=0,b=!1,z=null,C=null,D=null,k=null,G=null,Nt.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:it,disable:at,bindFramebuffer:kt,drawBuffers:Rt,useProgram:Pt,setBlending:Zt,setMaterial:Jt,setFlipSided:Bt,setCullFace:re,setLineWidth:I,setPolygonOffset:le,setScissorTest:$t,activeTexture:Qt,bindTexture:gt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Ut,texImage3D:Q,updateUBOMapping:Et,uniformBlockBinding:ft,texStorage2D:ot,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:wt,scissor:et,viewport:xt,reset:Gt}}function Jp(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):Os("canvas")}function M(E,_,U){let Y=1;const j=gt(E);if((j.width>U||j.height>U)&&(Y=U/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(Y*j.width),wt=Math.floor(Y*j.height);u===void 0&&(u=g($,wt));const ot=_?g($,wt):u;return ot.width=$,ot.height=wt,ot.getContext("2d").drawImage(E,0,0,$,wt),zt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+wt+")."),ot}else return"data"in E&&zt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(E,_,U,Y,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=_;if(_===s.RED&&(U===s.FLOAT&&($=s.R32F),U===s.HALF_FLOAT&&($=s.R16F),U===s.UNSIGNED_BYTE&&($=s.R8)),_===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&($=s.R8UI),U===s.UNSIGNED_SHORT&&($=s.R16UI),U===s.UNSIGNED_INT&&($=s.R32UI),U===s.BYTE&&($=s.R8I),U===s.SHORT&&($=s.R16I),U===s.INT&&($=s.R32I)),_===s.RG&&(U===s.FLOAT&&($=s.RG32F),U===s.HALF_FLOAT&&($=s.RG16F),U===s.UNSIGNED_BYTE&&($=s.RG8)),_===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&($=s.RG8UI),U===s.UNSIGNED_SHORT&&($=s.RG16UI),U===s.UNSIGNED_INT&&($=s.RG32UI),U===s.BYTE&&($=s.RG8I),U===s.SHORT&&($=s.RG16I),U===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&($=s.RGB8UI),U===s.UNSIGNED_SHORT&&($=s.RGB16UI),U===s.UNSIGNED_INT&&($=s.RGB32UI),U===s.BYTE&&($=s.RGB8I),U===s.SHORT&&($=s.RGB16I),U===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&($=s.RGBA8UI),U===s.UNSIGNED_SHORT&&($=s.RGBA16UI),U===s.UNSIGNED_INT&&($=s.RGBA32UI),U===s.BYTE&&($=s.RGBA8I),U===s.SHORT&&($=s.RGBA16I),U===s.INT&&($=s.RGBA32I)),_===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),_===s.RGBA){const wt=j?Fs:ee.getTransfer(Y);U===s.FLOAT&&($=s.RGBA32F),U===s.HALF_FLOAT&&($=s.RGBA16F),U===s.UNSIGNED_BYTE&&($=wt===ae?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(E,_){let U;return E?_===null||_===pn||_===Ki?U=s.DEPTH24_STENCIL8:_===hn?U=s.DEPTH32F_STENCIL8:_===ji&&(U=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pn||_===Ki?U=s.DEPTH_COMPONENT24:_===hn?U=s.DEPTH_COMPONENT32F:_===ji&&(U=s.DEPTH_COMPONENT16),U}function A(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Re&&E.minFilter!==Ue?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),v(_),_.isVideoTexture&&h.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),z(_)}function v(E){const _=n.get(E);if(_.__webglInit===void 0)return;const U=E.source,Y=d.get(U);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(E),Object.keys(Y).length===0&&d.delete(U)}n.remove(E)}function b(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const U=E.source,Y=d.get(U);delete Y[_.__cacheKey],r.memory.textures--}function z(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[Y]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=E.textures;for(let Y=0,j=U.length;Y<j;Y++){const $=n.get(U[Y]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(U[Y])}n.remove(E)}let C=0;function D(){C=0}function k(){const E=C;return E>=i.maxTextures&&zt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),C+=1,E}function G(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function O(E,_){const U=n.get(E);if(E.isVideoTexture&&$t(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const Y=E.image;if(Y===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(U,E,_);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+_)}function H(E,_){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Z(U,E,_);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+_)}function B(E,_){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Z(U,E,_);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+_)}function J(E,_){const U=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){it(U,E,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+_)}const K={[ke]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[Oa]:s.MIRRORED_REPEAT},rt={[Re]:s.NEAREST,[nl]:s.NEAREST_MIPMAP_NEAREST,[ss]:s.NEAREST_MIPMAP_LINEAR,[Ue]:s.LINEAR,[Js]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},dt={[al]:s.NEVER,[hl]:s.ALWAYS,[rl]:s.LESS,[Rr]:s.LEQUAL,[ol]:s.EQUAL,[Pr]:s.GEQUAL,[cl]:s.GREATER,[ll]:s.NOTEQUAL};function ct(E,_){if(_.type===hn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ue||_.magFilter===Js||_.magFilter===ss||_.magFilter===Qn||_.minFilter===Ue||_.minFilter===Js||_.minFilter===ss||_.minFilter===Qn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,K[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,K[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,K[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,rt[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Re||_.minFilter!==ss&&_.minFilter!==Qn||_.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Nt(E,_){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const Y=_.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const $=G(_);if($!==E.__cacheKey){j[$]===void 0&&(j[$]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,U=!0),j[$].usedTimes++;const wt=j[E.__cacheKey];wt!==void 0&&(j[E.__cacheKey].usedTimes--,wt.usedTimes===0&&b(_)),E.__cacheKey=$,E.__webglTexture=j[$].texture}return U}function se(E,_,U){return Math.floor(Math.floor(E/U)/_)}function ne(E,_,U,Y){const $=E.updateRanges;if($.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,U,Y,_.data);else{$.sort((Q,et)=>Q.start-et.start);let wt=0;for(let Q=1;Q<$.length;Q++){const et=$[wt],xt=$[Q],Et=et.start+et.count,ft=se(xt.start,_.width,4),Gt=se(et.start,_.width,4);xt.start<=Et+1&&ft===Gt&&se(xt.start+xt.count-1,_.width,4)===ft?et.count=Math.max(et.count,xt.start+xt.count-et.start):(++wt,$[wt]=xt)}$.length=wt+1;const ot=s.getParameter(s.UNPACK_ROW_LENGTH),Ct=s.getParameter(s.UNPACK_SKIP_PIXELS),Ut=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Q=0,et=$.length;Q<et;Q++){const xt=$[Q],Et=Math.floor(xt.start/4),ft=Math.ceil(xt.count/4),Gt=Et%_.width,N=Math.floor(Et/_.width),st=ft,nt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Gt,N,st,nt,U,Y,_.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ot),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ut)}}function Z(E,_,U){let Y=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=s.TEXTURE_3D);const j=Nt(E,_),$=_.source;e.bindTexture(Y,E.__webglTexture,s.TEXTURE0+U);const wt=n.get($);if($.version!==wt.__version||j===!0){e.activeTexture(s.TEXTURE0+U);const ot=ee.getPrimaries(ee.workingColorSpace),Ct=_.colorSpace===On?null:ee.getPrimaries(_.colorSpace),Ut=_.colorSpace===On||ot===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Q=M(_.image,!1,i.maxTextureSize);Q=Qt(_,Q);const et=a.convert(_.format,_.colorSpace),xt=a.convert(_.type);let Et=S(_.internalFormat,et,xt,_.colorSpace,_.isVideoTexture);ct(Y,_);let ft;const Gt=_.mipmaps,N=_.isVideoTexture!==!0,st=wt.__version===void 0||j===!0,nt=$.dataReady,_t=A(_,Q);if(_.isDepthTexture)Et=y(_.format===ti,_.type),st&&(N?e.texStorage2D(s.TEXTURE_2D,1,Et,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Et,Q.width,Q.height,0,et,xt,null));else if(_.isDataTexture)if(Gt.length>0){N&&st&&e.texStorage2D(s.TEXTURE_2D,_t,Et,Gt[0].width,Gt[0].height);for(let tt=0,q=Gt.length;tt<q;tt++)ft=Gt[tt],N?nt&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,et,xt,ft.data):e.texImage2D(s.TEXTURE_2D,tt,Et,ft.width,ft.height,0,et,xt,ft.data);_.generateMipmaps=!1}else N?(st&&e.texStorage2D(s.TEXTURE_2D,_t,Et,Q.width,Q.height),nt&&ne(_,Q,et,xt)):e.texImage2D(s.TEXTURE_2D,0,Et,Q.width,Q.height,0,et,xt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&st&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Et,Gt[0].width,Gt[0].height,Q.depth);for(let tt=0,q=Gt.length;tt<q;tt++)if(ft=Gt[tt],_.format!==je)if(et!==null)if(N){if(nt)if(_.layerUpdates.size>0){const yt=yo(ft.width,ft.height,_.format,_.type);for(const St of _.layerUpdates){const Ft=ft.data.subarray(St*yt/ft.data.BYTES_PER_ELEMENT,(St+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,St,ft.width,ft.height,1,et,Ft)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,Q.depth,et,ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Et,ft.width,ft.height,Q.depth,0,ft.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?nt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,Q.depth,et,xt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Et,ft.width,ft.height,Q.depth,0,et,xt,ft.data)}else{N&&st&&e.texStorage2D(s.TEXTURE_2D,_t,Et,Gt[0].width,Gt[0].height);for(let tt=0,q=Gt.length;tt<q;tt++)ft=Gt[tt],_.format!==je?et!==null?N?nt&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,et,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Et,ft.width,ft.height,0,ft.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?nt&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,et,xt,ft.data):e.texImage2D(s.TEXTURE_2D,tt,Et,ft.width,ft.height,0,et,xt,ft.data)}else if(_.isDataArrayTexture)if(N){if(st&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Et,Q.width,Q.height,Q.depth),nt)if(_.layerUpdates.size>0){const tt=yo(Q.width,Q.height,_.format,_.type);for(const q of _.layerUpdates){const yt=Q.data.subarray(q*tt/Q.data.BYTES_PER_ELEMENT,(q+1)*tt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,et,xt,yt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,et,xt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,Q.width,Q.height,Q.depth,0,et,xt,Q.data);else if(_.isData3DTexture)N?(st&&e.texStorage3D(s.TEXTURE_3D,_t,Et,Q.width,Q.height,Q.depth),nt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,et,xt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Et,Q.width,Q.height,Q.depth,0,et,xt,Q.data);else if(_.isFramebufferTexture){if(st)if(N)e.texStorage2D(s.TEXTURE_2D,_t,Et,Q.width,Q.height);else{let tt=Q.width,q=Q.height;for(let yt=0;yt<_t;yt++)e.texImage2D(s.TEXTURE_2D,yt,Et,tt,q,0,et,xt,null),tt>>=1,q>>=1}}else if(Gt.length>0){if(N&&st){const tt=gt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,_t,Et,tt.width,tt.height)}for(let tt=0,q=Gt.length;tt<q;tt++)ft=Gt[tt],N?nt&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,et,xt,ft):e.texImage2D(s.TEXTURE_2D,tt,Et,et,xt,ft);_.generateMipmaps=!1}else if(N){if(st){const tt=gt(Q);e.texStorage2D(s.TEXTURE_2D,_t,Et,tt.width,tt.height)}nt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et,xt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Et,et,xt,Q);p(_)&&f(Y),wt.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function it(E,_,U){if(_.image.length!==6)return;const Y=Nt(E,_),j=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const $=n.get(j);if(j.version!==$.__version||Y===!0){e.activeTexture(s.TEXTURE0+U);const wt=ee.getPrimaries(ee.workingColorSpace),ot=_.colorSpace===On?null:ee.getPrimaries(_.colorSpace),Ct=_.colorSpace===On||wt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Ut=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,et=[];for(let q=0;q<6;q++)!Ut&&!Q?et[q]=M(_.image[q],!0,i.maxCubemapSize):et[q]=Q?_.image[q].image:_.image[q],et[q]=Qt(_,et[q]);const xt=et[0],Et=a.convert(_.format,_.colorSpace),ft=a.convert(_.type),Gt=S(_.internalFormat,Et,ft,_.colorSpace),N=_.isVideoTexture!==!0,st=$.__version===void 0||Y===!0,nt=j.dataReady;let _t=A(_,xt);ct(s.TEXTURE_CUBE_MAP,_);let tt;if(Ut){N&&st&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Gt,xt.width,xt.height);for(let q=0;q<6;q++){tt=et[q].mipmaps;for(let yt=0;yt<tt.length;yt++){const St=tt[yt];_.format!==je?Et!==null?N?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt,Gt,St.width,St.height,0,St.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt,0,0,St.width,St.height,Et,ft,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt,Gt,St.width,St.height,0,Et,ft,St.data)}}}else{if(tt=_.mipmaps,N&&st){tt.length>0&&_t++;const q=gt(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Gt,q.width,q.height)}for(let q=0;q<6;q++)if(Q){N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,et[q].width,et[q].height,Et,ft,et[q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Gt,et[q].width,et[q].height,0,Et,ft,et[q].data);for(let yt=0;yt<tt.length;yt++){const Ft=tt[yt].image[q].image;N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt+1,0,0,Ft.width,Ft.height,Et,ft,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt+1,Gt,Ft.width,Ft.height,0,Et,ft,Ft.data)}}else{N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Et,ft,et[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Gt,Et,ft,et[q]);for(let yt=0;yt<tt.length;yt++){const St=tt[yt];N?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt+1,0,0,Et,ft,St.image[q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,yt+1,Gt,Et,ft,St.image[q])}}}p(_)&&f(s.TEXTURE_CUBE_MAP),$.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function at(E,_,U,Y,j,$){const wt=a.convert(U.format,U.colorSpace),ot=a.convert(U.type),Ct=S(U.internalFormat,wt,ot,U.colorSpace),Ut=n.get(_),Q=n.get(U);if(Q.__renderTarget=_,!Ut.__hasExternalTextures){const et=Math.max(1,_.width>>$),xt=Math.max(1,_.height>>$);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,$,Ct,et,xt,_.depth,0,wt,ot,null):e.texImage2D(j,$,Ct,et,xt,0,wt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),le(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,Q.__webglTexture,0,I(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,Q.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(E,_,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,$=y(_.stencilBuffer,j),wt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;le(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(_),$,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(_),$,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,$,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,E)}else{const Y=_.textures;for(let j=0;j<Y.length;j++){const $=Y[j],wt=a.convert($.format,$.colorSpace),ot=a.convert($.type),Ct=S($.internalFormat,wt,ot,$.colorSpace);le(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(_),Ct,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(_),Ct,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Ct,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(E,_,U){const Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ct(s.TEXTURE_CUBE_MAP,_.depthTexture);const Ut=a.convert(_.depthTexture.format),Q=a.convert(_.depthTexture.type);let et;_.depthTexture.format===An?et=s.DEPTH_COMPONENT24:_.depthTexture.format===ti&&(et=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,et,_.width,_.height,0,Ut,Q,null)}}else O(_.depthTexture,0);const $=j.__webglTexture,wt=I(_),ot=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,Ct=_.depthTexture.format===ti?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===An)le(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ct,ot,$,0,wt):s.framebufferTexture2D(s.FRAMEBUFFER,Ct,ot,$,0);else if(_.depthTexture.format===ti)le(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ct,ot,$,0,wt):s.framebufferTexture2D(s.FRAMEBUFFER,Ct,ot,$,0);else throw new Error("Unknown depthTexture format")}function Pt(E){const _=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let Y=0;Y<6;Y++)Rt(_.__webglFramebuffer[Y],E,Y);else{const Y=E.texture.mipmaps;Y&&Y.length>0?Rt(_.__webglFramebuffer[0],E,0):Rt(_.__webglFramebuffer,E,0)}else if(U){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=s.createRenderbuffer(),kt(_.__webglDepthbuffer[Y],E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),kt(_.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(E,_,U){const Y=n.get(E);_!==void 0&&at(Y.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Pt(E)}function Xt(E){const _=E.texture,U=n.get(E),Y=n.get(_);E.addEventListener("dispose",R);const j=E.textures,$=E.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=_.version,r.memory.textures++),$){U.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ot]=[];for(let Ct=0;Ct<_.mipmaps.length;Ct++)U.__webglFramebuffer[ot][Ct]=s.createFramebuffer()}else U.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)U.__webglFramebuffer[ot]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ot=0,Ct=j.length;ot<Ct;ot++){const Ut=n.get(j[ot]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),r.memory.textures++)}if(E.samples>0&&le(E)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const Ct=j[ot];U.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ot]);const Ut=a.convert(Ct.format,Ct.colorSpace),Q=a.convert(Ct.type),et=S(Ct.internalFormat,Ut,Q,Ct.colorSpace,E.isXRRenderTarget===!0),xt=I(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,et,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,U.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ct(s.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)at(U.__webglFramebuffer[ot][Ct],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct);else at(U.__webglFramebuffer[ot],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(_)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ot=0,Ct=j.length;ot<Ct;ot++){const Ut=j[ot],Q=n.get(Ut);let et=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(et=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,Q.__webglTexture),ct(et,Ut),at(U.__webglFramebuffer,E,Ut,s.COLOR_ATTACHMENT0+ot,et,0),p(Ut)&&f(et)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ot=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),ct(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)at(U.__webglFramebuffer[Ct],E,_,s.COLOR_ATTACHMENT0,ot,Ct);else at(U.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,ot,0);p(_)&&f(ot),e.unbindTexture()}E.depthBuffer&&Pt(E)}function Zt(E){const _=E.textures;for(let U=0,Y=_.length;U<Y;U++){const j=_[U];if(p(j)){const $=x(E),wt=n.get(j).__webglTexture;e.bindTexture($,wt),f($),e.unbindTexture()}}}const Jt=[],Bt=[];function re(E){if(E.samples>0){if(le(E)===!1){const _=E.textures,U=E.width,Y=E.height;let j=s.COLOR_BUFFER_BIT;const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(E),ot=_.length>1;if(ot)for(let Ut=0;Ut<_.length;Ut++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Ct=E.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ut=0;Ut<_.length;Ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[Ut]);const Q=n.get(_[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,U,Y,0,0,U,Y,j,s.NEAREST),l===!0&&(Jt.length=0,Bt.length=0,Jt.push(s.COLOR_ATTACHMENT0+Ut),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Jt.push($),Bt.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let Ut=0;Ut<_.length;Ut++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,wt.__webglColorRenderbuffer[Ut]);const Q=n.get(_[Ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,Q,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function I(E){return Math.min(i.maxSamples,E.samples)}function le(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $t(E){const _=r.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Qt(E,_){const U=E.colorSpace,Y=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Ri&&U!==On&&(ee.getTransfer(U)===ae?(Y!==je||j!==Xe)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",U)),_}function gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=ue,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qp(s,t){function e(n,i=On){let a;const r=ee.getTransfer(i);if(n===Xe)return s.UNSIGNED_BYTE;if(n===br)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Er)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===nc)return s.BYTE;if(n===ic)return s.SHORT;if(n===ji)return s.UNSIGNED_SHORT;if(n===wr)return s.INT;if(n===pn)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Tn)return s.HALF_FLOAT;if(n===rc)return s.ALPHA;if(n===oc)return s.RGB;if(n===je)return s.RGBA;if(n===An)return s.DEPTH_COMPONENT;if(n===ti)return s.DEPTH_STENCIL;if(n===cc)return s.RED;if(n===Tr)return s.RED_INTEGER;if(n===Ci)return s.RG;if(n===Ar)return s.RG_INTEGER;if(n===Cr)return s.RGBA_INTEGER;if(n===Ps||n===Ls||n===Is||n===Ds)if(r===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ps)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ps)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ba||n===za||n===Ga)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ka)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===$a||n===Ya)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ha||n===Va)return r===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Wa)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return a.COMPRESSED_R11_EAC;if(n===qa)return a.COMPRESSED_SIGNED_R11_EAC;if(n===$a)return a.COMPRESSED_RG11_EAC;if(n===Ya)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===ja||n===Ka||n===Ja||n===Qa||n===tr||n===er||n===nr||n===ir||n===sr||n===ar||n===rr||n===or||n===cr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Za)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===er)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ir)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ar)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===or)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cr)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===hr||n===dr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===lr)return r===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ur||n===fr||n===pr||n===mr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===ur)return a.COMPRESSED_RED_RGTC1_EXT;if(n===fr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,em=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new _c(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:tm,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new P(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class im extends Li{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",p=new nm,f={},x=e.getContextAttributes();let S=null,y=null;const A=[],T=[],R=new Yt;let v=null;const b=new Ze;b.viewport=new ve;const z=new Ze;z.viewport=new ve;const C=[b,z],D=new fh;let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=A[Z];return it===void 0&&(it=new sa,A[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=A[Z];return it===void 0&&(it=new sa,A[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=A[Z];return it===void 0&&(it=new sa,A[Z]=it),it.getHandSpace()};function O(Z){const it=T.indexOf(Z.inputSource);if(it===-1)return;const at=A[it];at!==void 0&&(at.update(Z.inputSource,Z.frame,c||r),at.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",B);for(let Z=0;Z<A.length;Z++){const it=T[Z];it!==null&&(T[Z]=null,A[Z].disconnect(it))}k=null,G=null,p.reset();for(const Z in f)delete f[Z];t.setRenderTarget(S),m=null,d=null,u=null,i=null,y=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,kt=null,Rt=null;x.depth&&(Rt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=x.stencil?ti:An,kt=x.stencil?Ki:pn);const Pt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new fn(d.textureWidth,d.textureHeight,{format:je,type:Xe,depthTexture:new ts(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const at={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new fn(m.framebufferWidth,m.framebufferHeight,{format:je,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(Z){for(let it=0;it<Z.removed.length;it++){const at=Z.removed[it],kt=T.indexOf(at);kt>=0&&(T[kt]=null,A[kt].disconnect(at))}for(let it=0;it<Z.added.length;it++){const at=Z.added[it];let kt=T.indexOf(at);if(kt===-1){for(let Pt=0;Pt<A.length;Pt++)if(Pt>=T.length){T.push(at),kt=Pt;break}else if(T[Pt]===null){T[Pt]=at,kt=Pt;break}if(kt===-1)break}const Rt=A[kt];Rt&&Rt.connect(at)}}const J=new L,K=new L;function rt(Z,it,at){J.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(at.matrixWorld);const kt=J.distanceTo(K),Rt=it.projectionMatrix.elements,Pt=at.projectionMatrix.elements,ue=Rt[14]/(Rt[10]-1),Xt=Rt[14]/(Rt[10]+1),Zt=(Rt[9]+1)/Rt[5],Jt=(Rt[9]-1)/Rt[5],Bt=(Rt[8]-1)/Rt[0],re=(Pt[8]+1)/Pt[0],I=ue*Bt,le=ue*re,$t=kt/(-Bt+re),Qt=$t*-Bt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qt),Z.translateZ($t),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const gt=ue+$t,E=Xt+$t,_=I-Qt,U=le+(kt-Qt),Y=Zt*Xt/E*gt,j=Jt*Xt/E*gt;Z.projectionMatrix.makePerspective(_,U,Y,j,gt,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function dt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let it=Z.near,at=Z.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(at=p.depthFar)),D.near=z.near=b.near=it,D.far=z.far=b.far=at,(k!==D.near||G!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,G=D.far),D.layers.mask=Z.layers.mask|6,b.layers.mask=D.layers.mask&-5,z.layers.mask=D.layers.mask&-3;const kt=Z.parent,Rt=D.cameras;dt(D,kt);for(let Pt=0;Pt<Rt.length;Pt++)dt(Rt[Pt],kt);Rt.length===2?rt(D,b,z):D.projectionMatrix.copy(b.projectionMatrix),ct(Z,D,kt)};function ct(Z,it,at){at===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(at.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Z){return f[Z]};let Nt=null;function se(Z,it){if(h=it.getViewerPose(c||r),g=it,h!==null){const at=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let kt=!1;at.length!==D.cameras.length&&(D.cameras.length=0,kt=!0);for(let Xt=0;Xt<at.length;Xt++){const Zt=at[Xt];let Jt=null;if(m!==null)Jt=m.getViewport(Zt);else{const re=u.getViewSubImage(d,Zt);Jt=re.viewport,Xt===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let Bt=C[Xt];Bt===void 0&&(Bt=new Ze,Bt.layers.enable(Xt),Bt.viewport=new ve,C[Xt]=Bt),Bt.matrix.fromArray(Zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Xt===0&&(D.matrix.copy(Bt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),kt===!0&&D.cameras.push(Bt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const Xt=u.getDepthInformation(at[0]);Xt&&Xt.isValid&&Xt.texture&&p.init(Xt,i.renderState)}if(Rt&&Rt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let Xt=0;Xt<at.length;Xt++){const Zt=at[Xt].camera;if(Zt){let Jt=f[Zt];Jt||(Jt=new _c,f[Zt]=Jt);const Bt=u.getCameraImage(Zt);Jt.sourceTexture=Bt}}}}for(let at=0;at<A.length;at++){const kt=T[at],Rt=A[at];kt!==null&&Rt!==void 0&&Rt.update(kt,it,c||r)}Nt&&Nt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const ne=new yc;ne.setAnimationLoop(se),this.setAnimationLoop=function(Z){Nt=Z},this.dispose=function(){}}}const Zn=new mn,sm=new pe;function am(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,vc(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,x,S,y){f.isMeshBasicMaterial?a(p,f):f.isMeshLambertMaterial?(a(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(p,f),u(p,f)):f.isMeshPhongMaterial?(a(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),M(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,x,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ze&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ze&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=t.get(f),S=x.envMap,y=x.envMapRotation;S&&(p.envMap.value=S,Zn.copy(y),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),p.envMapRotation.value.setFromMatrix4(sm.makeRotationFromEuler(Zn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,x,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=S*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const x=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rm(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function c(x,S){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(x,A);const T=t.render.frame;a[x.id]!==T&&(d(x),a[x.id]=T)}function h(x){const S=u();x.__bindingPointIndex=S;const y=s.createBuffer(),A=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=i[x.id],y=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,R=y.length;T<R;T++){const v=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,z=v.length;b<z;b++){const C=v[b];if(m(C,T,b,A)===!0){const D=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let O=0;O<k.length;O++){const H=k[O],B=M(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,D+G,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,G),G+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(x,S,y,A){const T=x.value,R=S+"_"+y;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const v=A[R];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return A[R]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function g(x){const S=x.uniforms;let y=0;const A=16;for(let R=0,v=S.length;R<v;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let z=0,C=b.length;z<C;z++){const D=b[z],k=Array.isArray(D.value)?D.value:[D.value];for(let G=0,O=k.length;G<O;G++){const H=k[G],B=M(H),J=y%A,K=J%B.boundary,rt=J+K;y+=K,rt!==0&&A-rt<B.storage&&(y+=A-rt),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=B.storage}}}const T=y%A;return T>0&&(y+=A-T),x.__size=y,x.__cache={},this}function M(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):zt("WebGLRenderer: Unsupported uniform value type.",x),S}function p(x){const S=x.target;S.removeEventListener("dispose",p);const y=r.indexOf(S.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete a[S.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}const om=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cn=null;function cm(){return cn===null&&(cn=new mc(om,16,16,Ci,Tn),cn.name="DFG_LUT",cn.minFilter=Ue,cn.magFilter=Ue,cn.wrapS=wn,cn.wrapT=wn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class lm{constructor(t={}){const{canvas:e=ul(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Xe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const M=m,p=new Set([Cr,Ar,Tr]),f=new Set([Xe,pn,ji,Ki,br,Er]),x=new Uint32Array(4),S=new Int32Array(4);let y=null,A=null;const T=[],R=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let z=!1;this._outputColorSpace=Ye;let C=0,D=0,k=null,G=-1,O=null;const H=new ve,B=new ve;let J=null;const K=new Kt(0);let rt=0,dt=e.width,ct=e.height,Nt=1,se=null,ne=null;const Z=new ve(0,0,dt,ct),it=new ve(0,0,dt,ct);let at=!1;const kt=new Or;let Rt=!1,Pt=!1;const ue=new pe,Xt=new L,Zt=new ve,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function re(){return k===null?Nt:1}let I=n;function le(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yr}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),I===null){const F="webgl2";if(I=le(F,w),I===null)throw le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw te("WebGLRenderer: "+w.message),w}let $t,Qt,gt,E,_,U,Y,j,$,wt,ot,Ct,Ut,Q,et,xt,Et,ft,Gt,N,st,nt,_t;function tt(){$t=new lf(I),$t.init(),st=new Qp(I,$t),Qt=new tf(I,$t,t,st),gt=new Kp(I,$t),Qt.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),E=new uf(I),_=new Op,U=new Jp(I,$t,gt,_,Qt,st,E),Y=new cf(b),j=new gh(I),nt=new Ju(I,j),$=new hf(I,j,E,nt),wt=new pf(I,$,j,nt,E),ft=new ff(I,Qt,U),et=new ef(_),ot=new Fp(b,Y,$t,Qt,nt,et),Ct=new am(b,_),Ut=new Bp,Q=new Xp($t),Et=new Ku(b,Y,gt,wt,g,l),xt=new jp(b,wt,Qt),_t=new rm(I,E,Qt,gt),Gt=new Qu(I,$t,E),N=new df(I,$t,E),E.programs=ot.programs,b.capabilities=Qt,b.extensions=$t,b.properties=_,b.renderLists=Ut,b.shadowMap=xt,b.state=gt,b.info=E}tt(),M!==Xe&&(v=new gf(M,e.width,e.height,i,a));const q=new im(b,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(w){w!==void 0&&(Nt=w,this.setSize(dt,ct,!1))},this.getSize=function(w){return w.set(dt,ct)},this.setSize=function(w,F,X=!0){if(q.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=w,ct=F,e.width=Math.floor(w*Nt),e.height=Math.floor(F*Nt),X===!0&&(e.style.width=w+"px",e.style.height=F+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(dt*Nt,ct*Nt).floor()},this.setDrawingBufferSize=function(w,F,X){dt=w,ct=F,Nt=X,e.width=Math.floor(w*X),e.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(M===Xe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,X,W){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,X,W),gt.viewport(H.copy(Z).multiplyScalar(Nt).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,F,X,W){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,F,X,W),gt.scissor(B.copy(it).multiplyScalar(Nt).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){gt.setScissorTest(at=w)},this.setOpaqueSort=function(w){se=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,X=!0){let W=0;if(w){let V=!1;if(k!==null){const pt=k.texture.format;V=p.has(pt)}if(V){const pt=k.texture.type,Mt=f.has(pt),mt=Et.getClearColor(),Tt=Et.getClearAlpha(),Lt=mt.r,Ht=mt.g,qt=mt.b;Mt?(x[0]=Lt,x[1]=Ht,x[2]=qt,x[3]=Tt,I.clearBufferuiv(I.COLOR,0,x)):(S[0]=Lt,S[1]=Ht,S[2]=qt,S[3]=Tt,I.clearBufferiv(I.COLOR,0,S))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),Et.dispose(),Ut.dispose(),Q.dispose(),_.dispose(),Y.dispose(),wt.dispose(),nt.dispose(),_t.dispose(),ot.dispose(),q.dispose(),q.removeEventListener("sessionstart",Oi),q.removeEventListener("sessionend",ki),an.stop()};function yt(w){w.preventDefault(),Zr("WebGLRenderer: Context Lost."),z=!0}function St(){Zr("WebGLRenderer: Context Restored."),z=!1;const w=E.autoReset,F=xt.enabled,X=xt.autoUpdate,W=xt.needsUpdate,V=xt.type;tt(),E.autoReset=w,xt.enabled=F,xt.autoUpdate=X,xt.needsUpdate=W,xt.type=V}function Ft(w){te("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const F=w.target;F.removeEventListener("dispose",Dt),Me(F)}function Me(w){he(w),_.remove(w)}function he(w){const F=_.get(w).programs;F!==void 0&&(F.forEach(function(X){ot.releaseProgram(X)}),w.isShaderMaterial&&ot.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,W,V,pt){F===null&&(F=Jt);const Mt=V.isMesh&&V.matrixWorld.determinant()<0,mt=Cc(w,F,X,W,V);gt.setMaterial(W,Mt);let Tt=X.index,Lt=1;if(W.wireframe===!0){if(Tt=$.getWireframeAttribute(X),Tt===void 0)return;Lt=2}const Ht=X.drawRange,qt=X.attributes.position;let It=Ht.start*Lt,oe=(Ht.start+Ht.count)*Lt;pt!==null&&(It=Math.max(It,pt.start*Lt),oe=Math.min(oe,(pt.start+pt.count)*Lt)),Tt!==null?(It=Math.max(It,0),oe=Math.min(oe,Tt.count)):qt!=null&&(It=Math.max(It,0),oe=Math.min(oe,qt.count));const xe=oe-It;if(xe<0||xe===1/0)return;nt.setup(V,W,mt,X,Tt);let _e,ce=Gt;if(Tt!==null&&(_e=j.get(Tt),ce=N,ce.setIndex(_e)),V.isMesh)W.wireframe===!0?(gt.setLineWidth(W.wireframeLinewidth*re()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(V.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),gt.setLineWidth(Le*re()),V.isLineSegments?ce.setMode(I.LINES):V.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else V.isPoints?ce.setMode(I.POINTS):V.isSprite&&ce.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ks("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ce.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Le=V._multiDrawStarts,At=V._multiDrawCounts,Ge=V._multiDrawCount,ie=Tt?j.get(Tt).bytesPerElement:1,Je=_.get(W).currentProgram.getUniforms();for(let rn=0;rn<Ge;rn++)Je.setValue(I,"_gl_DrawID",rn),ce.render(Le[rn]/ie,At[rn])}else if(V.isInstancedMesh)ce.renderInstances(It,xe,V.count);else if(X.isInstancedBufferGeometry){const Le=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,Le);ce.renderInstances(It,xe,At)}else ce.render(It,xe)};function Cn(w,F,X){w.transparent===!0&&w.side===Be&&w.forceSinglePass===!1?(w.side=ze,w.needsUpdate=!0,is(w,F,X),w.side=Hn,w.needsUpdate=!0,is(w,F,X),w.side=Be):is(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),A=Q.get(X),A.init(F),R.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),w!==X&&w.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const W=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){const mt=pt[Mt];Cn(mt,X,V),W.add(mt)}else Cn(pt,X,V),W.add(pt)}),A=R.pop(),W},this.compileAsync=function(w,F,X=null){const W=this.compile(w,F,X);return new Promise(V=>{function pt(){if(W.forEach(function(Mt){_.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){V(w);return}setTimeout(pt,10)}$t.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Fi=null;function Zs(w){Fi&&Fi(w)}function Oi(){an.stop()}function ki(){an.start()}const an=new yc;an.setAnimationLoop(Zs),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(w){Fi=w,q.setAnimationLoop(w),w===null?an.stop():an.start()},q.addEventListener("sessionstart",Oi),q.addEventListener("sessionend",ki),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const X=q.enabled===!0&&q.isPresenting===!0,W=v!==null&&(k===null||X)&&v.begin(b,k);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,F,k),A=Q.get(w,R.length),A.init(F),R.push(A),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),kt.setFromProjectionMatrix(ue,dn,F.reversedDepth),Pt=this.localClippingEnabled,Rt=et.init(this.clippingPlanes,Pt),y=Ut.get(w,T.length),y.init(),T.push(y),q.enabled===!0&&q.isPresenting===!0){const Mt=b.xr.getDepthSensingMesh();Mt!==null&&ni(Mt,F,-1/0,b.sortObjects)}ni(w,F,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(se,ne),Bt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Bt&&Et.addToRenderList(y,w),this.info.render.frame++,Rt===!0&&et.beginShadows();const V=A.state.shadowsArray;if(xt.render(V,w,F),Rt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&v.hasRenderPass())===!1){const Mt=y.opaque,mt=y.transmissive;if(A.setupLights(),F.isArrayCamera){const Tt=F.cameras;if(mt.length>0)for(let Lt=0,Ht=Tt.length;Lt<Ht;Lt++){const qt=Tt[Lt];si(Mt,mt,w,qt)}Bt&&Et.render(w);for(let Lt=0,Ht=Tt.length;Lt<Ht;Lt++){const qt=Tt[Lt];ii(y,w,qt,qt.viewport)}}else mt.length>0&&si(Mt,mt,w,F),Bt&&Et.render(w),ii(y,w,F)}k!==null&&D===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),W&&v.end(b),w.isScene===!0&&w.onAfterRender(b,w,F),nt.resetDefaultState(),G=-1,O=null,R.pop(),R.length>0?(A=R[R.length-1],Rt===!0&&et.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function ni(w,F,X,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||kt.intersectsSprite(w)){W&&Zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const Mt=wt.update(w),mt=w.material;mt.visible&&y.push(w,Mt,mt,X,Zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||kt.intersectsObject(w))){const Mt=wt.update(w),mt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Zt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Zt.copy(Mt.boundingSphere.center)),Zt.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(mt)){const Tt=Mt.groups;for(let Lt=0,Ht=Tt.length;Lt<Ht;Lt++){const qt=Tt[Lt],It=mt[qt.materialIndex];It&&It.visible&&y.push(w,Mt,It,X,Zt.z,qt)}}else mt.visible&&y.push(w,Mt,mt,X,Zt.z,null)}}const pt=w.children;for(let Mt=0,mt=pt.length;Mt<mt;Mt++)ni(pt[Mt],F,X,W)}function ii(w,F,X,W){const{opaque:V,transmissive:pt,transparent:Mt}=w;A.setupLightsView(X),Rt===!0&&et.setGlobalState(b.clippingPlanes,X),W&&gt.viewport(H.copy(W)),V.length>0&&ns(V,F,X),pt.length>0&&ns(pt,F,X),Mt.length>0&&ns(Mt,F,X),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function si(w,F,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const It=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new fn(1,1,{generateMipmaps:!0,type:It?Tn:Xe,minFilter:Qn,samples:Math.max(4,Qt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const pt=A.state.transmissionRenderTarget[W.id],Mt=W.viewport||H;pt.setSize(Mt.z*b.transmissionResolutionScale,Mt.w*b.transmissionResolutionScale);const mt=b.getRenderTarget(),Tt=b.getActiveCubeFace(),Lt=b.getActiveMipmapLevel();b.setRenderTarget(pt),b.getClearColor(K),rt=b.getClearAlpha(),rt<1&&b.setClearColor(16777215,.5),b.clear(),Bt&&Et.render(X);const Ht=b.toneMapping;b.toneMapping=un;const qt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),Rt===!0&&et.setGlobalState(b.clippingPlanes,W),ns(w,X,W),U.updateMultisampleRenderTarget(pt),U.updateRenderTargetMipmap(pt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let oe=0,xe=F.length;oe<xe;oe++){const _e=F[oe],{object:ce,geometry:Le,material:At,group:Ge}=_e;if(At.side===Be&&ce.layers.test(W.layers)){const ie=At.side;At.side=ze,At.needsUpdate=!0,kr(ce,X,W,Le,At,Ge),At.side=ie,At.needsUpdate=!0,It=!0}}It===!0&&(U.updateMultisampleRenderTarget(pt),U.updateRenderTargetMipmap(pt))}b.setRenderTarget(mt,Tt,Lt),b.setClearColor(K,rt),qt!==void 0&&(W.viewport=qt),b.toneMapping=Ht}function ns(w,F,X){const W=F.isScene===!0?F.overrideMaterial:null;for(let V=0,pt=w.length;V<pt;V++){const Mt=w[V],{object:mt,geometry:Tt,group:Lt}=Mt;let Ht=Mt.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),mt.layers.test(X.layers)&&kr(mt,F,X,Tt,Ht,Lt)}}function kr(w,F,X,W,V,pt){w.onBeforeRender(b,F,X,W,V,pt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(b,F,X,W,w,pt),V.transparent===!0&&V.side===Be&&V.forceSinglePass===!1?(V.side=ze,V.needsUpdate=!0,b.renderBufferDirect(X,F,W,V,w,pt),V.side=Hn,V.needsUpdate=!0,b.renderBufferDirect(X,F,W,V,w,pt),V.side=Be):b.renderBufferDirect(X,F,W,V,w,pt),w.onAfterRender(b,F,X,W,V,pt)}function is(w,F,X){F.isScene!==!0&&(F=Jt);const W=_.get(w),V=A.state.lights,pt=A.state.shadowsArray,Mt=V.state.version,mt=ot.getParameters(w,V.state,pt,F,X),Tt=ot.getProgramCacheKey(mt);let Lt=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const Ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=Y.get(w.envMap||W.environment,Ht),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Dt),Lt=new Map,W.programs=Lt);let qt=Lt.get(Tt);if(qt!==void 0){if(W.currentProgram===qt&&W.lightsStateVersion===Mt)return zr(w,mt),qt}else mt.uniforms=ot.getUniforms(w),w.onBeforeCompile(mt,b),qt=ot.acquireProgram(mt,Tt),Lt.set(Tt,qt),W.uniforms=mt.uniforms;const It=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=et.uniform),zr(w,mt),W.needsLights=Pc(w),W.lightsStateVersion=Mt,W.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=qt,W.uniformsList=null,qt}function Br(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Us.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function zr(w,F){const X=_.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Cc(w,F,X,W,V){F.isScene!==!0&&(F=Jt),U.resetTextureUnits();const pt=F.fog,Mt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,mt=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ri,Tt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Lt=Y.get(W.envMap||Mt,Tt),Ht=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color;let _e=un;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_e=b.toneMapping);const ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Le=ce!==void 0?ce.length:0,At=_.get(W),Ge=A.state.lights;if(Rt===!0&&(Pt===!0||w!==O)){const Ee=w===O&&W.id===G;et.setState(W,w,Ee)}let ie=!1;W.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ge.state.version||At.outputColorSpace!==mt||V.isBatchedMesh&&At.batching===!1||!V.isBatchedMesh&&At.batching===!0||V.isBatchedMesh&&At.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&At.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&At.instancing===!1||!V.isInstancedMesh&&At.instancing===!0||V.isSkinnedMesh&&At.skinning===!1||!V.isSkinnedMesh&&At.skinning===!0||V.isInstancedMesh&&At.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&At.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&At.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&At.instancingMorph===!1&&V.morphTexture!==null||At.envMap!==Lt||W.fog===!0&&At.fog!==pt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==Ht||At.vertexTangents!==qt||At.morphTargets!==It||At.morphNormals!==oe||At.morphColors!==xe||At.toneMapping!==_e||At.morphTargetsCount!==Le)&&(ie=!0):(ie=!0,At.__version=W.version);let Je=At.currentProgram;ie===!0&&(Je=is(W,F,V));let rn=!1,Vn=!1,ai=!1;const de=Je.getUniforms(),Ce=At.uniforms;if(gt.useProgram(Je.program)&&(rn=!0,Vn=!0,ai=!0),W.id!==G&&(G=W.id,Vn=!0),rn||O!==w){gt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),de.setValue(I,"projectionMatrix",w.projectionMatrix),de.setValue(I,"viewMatrix",w.matrixWorldInverse);const Pn=de.map.cameraPosition;Pn!==void 0&&Pn.setValue(I,Xt.setFromMatrixPosition(w.matrixWorld)),Qt.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,Vn=!0,ai=!0)}if(At.needsLights&&(Ge.state.directionalShadowMap.length>0&&de.setValue(I,"directionalShadowMap",Ge.state.directionalShadowMap,U),Ge.state.spotShadowMap.length>0&&de.setValue(I,"spotShadowMap",Ge.state.spotShadowMap,U),Ge.state.pointShadowMap.length>0&&de.setValue(I,"pointShadowMap",Ge.state.pointShadowMap,U)),V.isSkinnedMesh){de.setOptional(I,V,"bindMatrix"),de.setOptional(I,V,"bindMatrixInverse");const Ee=V.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),de.setValue(I,"boneTexture",Ee.boneTexture,U))}V.isBatchedMesh&&(de.setOptional(I,V,"batchingTexture"),de.setValue(I,"batchingTexture",V._matricesTexture,U),de.setOptional(I,V,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",V._indirectTexture,U),de.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",V._colorsTexture,U));const Rn=X.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&ft.update(V,X,Je),(Vn||At.receiveShadow!==V.receiveShadow)&&(At.receiveShadow=V.receiveShadow,de.setValue(I,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Ce.envMapIntensity.value=F.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=cm()),Vn&&(de.setValue(I,"toneMappingExposure",b.toneMappingExposure),At.needsLights&&Rc(Ce,ai),pt&&W.fog===!0&&Ct.refreshFogUniforms(Ce,pt),Ct.refreshMaterialUniforms(Ce,W,Nt,ct,A.state.transmissionRenderTarget[w.id]),Us.upload(I,Br(At),Ce,U)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Us.upload(I,Br(At),Ce,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(I,"center",V.center),de.setValue(I,"modelViewMatrix",V.modelViewMatrix),de.setValue(I,"normalMatrix",V.normalMatrix),de.setValue(I,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ee=W.uniformsGroups;for(let Pn=0,ri=Ee.length;Pn<ri;Pn++){const Gr=Ee[Pn];_t.update(Gr,Je),_t.bind(Gr,Je)}}return Je}function Rc(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Pc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,F,X){const W=_.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=F,_.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const X=_.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const Lc=I.createFramebuffer();this.setRenderTarget=function(w,F=0,X=0){k=w,C=F,D=X;let W=null,V=!1,pt=!1;if(w){const mt=_.get(w);if(mt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(I.FRAMEBUFFER,mt.__webglFramebuffer),H.copy(w.viewport),B.copy(w.scissor),J=w.scissorTest,gt.viewport(H),gt.scissor(B),gt.setScissorTest(J),G=-1;return}else if(mt.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(mt.__hasExternalTextures)U.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ht=w.depthTexture;if(mt.__boundDepthTexture!==Ht){if(Ht!==null&&_.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}const Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(pt=!0);const Lt=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[F])?W=Lt[F][X]:W=Lt[F],V=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?W=_.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?W=Lt[X]:W=Lt,H.copy(w.viewport),B.copy(w.scissor),J=w.scissorTest}else H.copy(Z).multiplyScalar(Nt).floor(),B.copy(it).multiplyScalar(Nt).floor(),J=at;if(X!==0&&(W=Lc),gt.bindFramebuffer(I.FRAMEBUFFER,W)&&gt.drawBuffers(w,W),gt.viewport(H),gt.scissor(B),gt.setScissorTest(J),V){const mt=_.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,mt.__webglTexture,X)}else if(pt){const mt=F;for(let Tt=0;Tt<w.textures.length;Tt++){const Lt=_.get(w.textures[Tt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Tt,Lt.__webglTexture,X,mt)}}else if(w!==null&&X!==0){const mt=_.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,X)}G=-1},this.readRenderTargetPixels=function(w,F,X,W,V,pt,Mt,mt=0){if(!(w&&w.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){gt.bindFramebuffer(I.FRAMEBUFFER,Tt);try{const Lt=w.textures[mt],Ht=Lt.format,qt=Lt.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),!Qt.textureFormatReadable(Ht)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(qt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&X>=0&&X<=w.height-V&&I.readPixels(F,X,W,V,st.convert(Ht),st.convert(qt),pt)}finally{const Lt=k!==null?_.get(k).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,W,V,pt,Mt,mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt)if(F>=0&&F<=w.width-W&&X>=0&&X<=w.height-V){gt.bindFramebuffer(I.FRAMEBUFFER,Tt);const Lt=w.textures[mt],Ht=Lt.format,qt=Lt.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),!Qt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),I.readPixels(F,X,W,V,st.convert(Ht),st.convert(qt),0);const oe=k!==null?_.get(k).__webglFramebuffer:null;gt.bindFramebuffer(I.FRAMEBUFFER,oe);const xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fl(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(It),I.deleteSync(xe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,X=0){const W=Math.pow(2,-X),V=Math.floor(w.image.width*W),pt=Math.floor(w.image.height*W),Mt=F!==null?F.x:0,mt=F!==null?F.y:0;U.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Mt,mt,V,pt),gt.unbindTexture()};const Ic=I.createFramebuffer(),Dc=I.createFramebuffer();this.copyTextureToTexture=function(w,F,X=null,W=null,V=0,pt=0){let Mt,mt,Tt,Lt,Ht,qt,It,oe,xe;const _e=w.isCompressedTexture?w.mipmaps[pt]:w.image;if(X!==null)Mt=X.max.x-X.min.x,mt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Ht=X.min.y,qt=X.isBox3?X.min.z:0;else{const Ce=Math.pow(2,-V);Mt=Math.floor(_e.width*Ce),mt=Math.floor(_e.height*Ce),w.isDataArrayTexture?Tt=_e.depth:w.isData3DTexture?Tt=Math.floor(_e.depth*Ce):Tt=1,Lt=0,Ht=0,qt=0}W!==null?(It=W.x,oe=W.y,xe=W.z):(It=0,oe=0,xe=0);const ce=st.convert(F.format),Le=st.convert(F.type);let At;F.isData3DTexture?(U.setTexture3D(F,0),At=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),At=I.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Ge=I.getParameter(I.UNPACK_ROW_LENGTH),ie=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Je=I.getParameter(I.UNPACK_SKIP_PIXELS),rn=I.getParameter(I.UNPACK_SKIP_ROWS),Vn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const ai=w.isDataArrayTexture||w.isData3DTexture,de=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Ce=_.get(w),Rn=_.get(F),Ee=_.get(Ce.__renderTarget),Pn=_.get(Rn.__renderTarget);gt.bindFramebuffer(I.READ_FRAMEBUFFER,Ee.__webglFramebuffer),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let ri=0;ri<Tt;ri++)ai&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(w).__webglTexture,V,qt+ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(F).__webglTexture,pt,xe+ri)),I.blitFramebuffer(Lt,Ht,Mt,mt,It,oe,Mt,mt,I.DEPTH_BUFFER_BIT,I.NEAREST);gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||_.has(w)){const Ce=_.get(w),Rn=_.get(F);gt.bindFramebuffer(I.READ_FRAMEBUFFER,Ic),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dc);for(let Ee=0;Ee<Tt;Ee++)ai?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,V,qt+Ee):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,V),de?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,pt,xe+Ee):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,pt),V!==0?I.blitFramebuffer(Lt,Ht,Mt,mt,It,oe,Mt,mt,I.COLOR_BUFFER_BIT,I.NEAREST):de?I.copyTexSubImage3D(At,pt,It,oe,xe+Ee,Lt,Ht,Mt,mt):I.copyTexSubImage2D(At,pt,It,oe,Lt,Ht,Mt,mt);gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else de?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(At,pt,It,oe,xe,Mt,mt,Tt,ce,Le,_e.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(At,pt,It,oe,xe,Mt,mt,Tt,ce,_e.data):I.texSubImage3D(At,pt,It,oe,xe,Mt,mt,Tt,ce,Le,_e):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,It,oe,Mt,mt,ce,Le,_e.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,It,oe,_e.width,_e.height,ce,_e.data):I.texSubImage2D(I.TEXTURE_2D,pt,It,oe,Mt,mt,ce,Le,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),I.pixelStorei(I.UNPACK_SKIP_ROWS,rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vn),pt===0&&F.generateMipmaps&&I.generateMipmap(At),gt.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),gt.unbindTexture()},this.resetState=function(){C=0,D=0,k=null,gt.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class hm{renderer;constructor(t){this.renderer=new lm({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$o,this.renderer.toneMapping=Sr,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",t.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onResize.bind(this))}render(t,e){this.renderer.render(t,e)}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}class zs{camera;zoom=11.5;targetZoom=11.5;minZoom=6;maxZoom=22;aspect=16/9;target=new L(0,0,0);cameraDistance=70;static PITCH_ANGLE=Math.atan(1/Math.SQRT2);static YAW_ANGLE=Math.PI/4;constructor(t=16/9){this.aspect=t;const e=this.zoom,n=this.zoom*this.aspect;this.camera=new qs(-n,n,e,-e,.1,500),this.updatePosition(),typeof window<"u"&&(window.addEventListener("wheel",i=>{const a=Math.sign(i.deltaY)*1;this.setTargetZoom(this.targetZoom+a)},{passive:!0}),window.addEventListener("keydown",i=>{i.key==="="||i.key==="+"||i.key==="["||i.code==="BracketLeft"?this.setTargetZoom(this.targetZoom-1.2):(i.key==="-"||i.key==="_"||i.key==="]"||i.code==="BracketRight")&&this.setTargetZoom(this.targetZoom+1.2)}))}setAspect(t){this.aspect=t,this.updateFrustum()}setTargetZoom(t){this.targetZoom=Math.max(this.minZoom,Math.min(this.maxZoom,t))}setZoom(t){this.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,t)),this.targetZoom=this.zoom,this.updateFrustum()}updateFrustum(){const t=this.zoom,e=this.zoom*this.aspect;this.camera.left=-e,this.camera.right=e,this.camera.top=t,this.camera.bottom=-t,this.camera.updateProjectionMatrix()}followTarget(t,e=.08){this.target.lerp(t,e),Math.abs(this.zoom-this.targetZoom)>.005&&(this.zoom=kn.lerp(this.zoom,this.targetZoom,.14),this.updateFrustum()),this.updatePosition()}snapToTarget(t){this.target.copy(t),this.updatePosition()}updatePosition(){const t=zs.PITCH_ANGLE,e=zs.YAW_ANGLE,n=this.cameraDistance*Math.cos(t)*Math.sin(e),i=this.cameraDistance*Math.sin(t),a=this.cameraDistance*Math.cos(t)*Math.cos(e);this.camera.position.set(this.target.x+n,this.target.y+i,this.target.z+a),this.camera.lookAt(this.target)}}class dm{scene;sunLight;ambientLight;hemiLight;pointLights=[];constructor(t){this.scene=t,this.hemiLight=new oh(16772829,5923664,.7),this.scene.add(this.hemiLight),this.ambientLight=new dh(16772829,.3),this.scene.add(this.ambientLight),this.sunLight=new hh(16775144,1.4),this.sunLight.position.set(45,65,35),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=180,this.sunLight.shadow.camera.left=-45,this.sunLight.shadow.camera.right=45,this.sunLight.shadow.camera.top=45,this.sunLight.shadow.camera.bottom=-45,this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.radius=2.5,this.scene.add(this.sunLight)}addCampfireLight(t){const e=new Bs(16737809,3.5,18,1.4);return e.position.copy(t),e.position.y+=.7,e.castShadow=!0,e.shadow.bias=-.001,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,this.scene.add(e),this.pointLights.push({light:e,baseIntensity:3.5,flicker:!0}),e}addTorchLight(t){const e=new Bs(16746530,2.2,14,1.6);return e.position.copy(t),this.scene.add(e),this.pointLights.push({light:e,baseIntensity:2.2,flicker:!0}),e}update(t,e){const n=t%1440/1440;for(const i of this.pointLights)if(i.flicker){const a=(Math.random()-.5)*.5;i.light.intensity=i.baseIntensity+a}if(n>=.25&&n<.35){const i=(n-.25)/.1;this.sunLight.color.setRGB(1,.75+i*.2,.55+i*.4),this.sunLight.intensity=.5+i*.9,this.hemiLight.color.setRGB(.9+i*.1,.7+i*.25,.6+i*.35),this.hemiLight.intensity=.4+i*.3}else if(n>=.35&&n<.7)this.sunLight.color.setRGB(1,.97,.92),this.sunLight.intensity=1.4,this.hemiLight.color.setRGB(1,.95,.9),this.hemiLight.intensity=.7;else if(n>=.7&&n<.82){const i=(n-.7)/.12;this.sunLight.color.setRGB(1-i*.4,.85-i*.5,.75-i*.55),this.sunLight.intensity=1.4-i*1,this.hemiLight.color.setRGB(.9-i*.6,.7-i*.5,.6-i*.4),this.hemiLight.intensity=.7-i*.4}else this.sunLight.color.setRGB(.35,.4,.7),this.sunLight.intensity=.35,this.hemiLight.color.setRGB(.15,.18,.32),this.hemiLight.intensity=.3}}class Ot{static cache=new Map;static texCache=new Map;static createCanvas(t,e){if(typeof document>"u")return null;const n=document.createElement("canvas");return n.width=t,n.height=e,n}static createFallbackTexture(t){if(this.texCache.has(t))return this.texCache.get(t);const e=new Uint8Array([128,128,128,255]),n=new mc(e,1,1,je);return n.needsUpdate=!0,this.texCache.set(t,n),n}static createWoodLogTexture(){if(this.texCache.has("wood_log"))return this.texCache.get("wood_log");const t=256,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("wood_log");const n=e.getContext("2d");n.fillStyle="#4a331f",n.fillRect(0,0,t,t);for(let a=0;a<t;a++){const r=Math.sin(a*.15)*.5+Math.sin(a*.05)*.5,o=Math.floor(45+r*25+(Math.random()-.5)*15);n.fillStyle=`rgb(${o+18}, ${o}, ${Math.max(10,o-15)})`,n.fillRect(0,a,t,1)}n.strokeStyle="#2b1c0e",n.lineWidth=2;for(let a=0;a<18;a++){const r=Math.random()*t,o=Math.random()*t;n.beginPath(),n.moveTo(r,o),n.bezierCurveTo(r+(Math.random()-.5)*40,o+30,r+(Math.random()-.5)*40,o+60,r+(Math.random()-.5)*30,o+90),n.stroke()}const i=new $e(e);return i.wrapS=ke,i.wrapT=ke,this.texCache.set("wood_log",i),i}static createThatchTexture(){if(this.texCache.has("thatch"))return this.texCache.get("thatch");const t=256,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("thatch");const n=e.getContext("2d");n.fillStyle="#806830",n.fillRect(0,0,t,t);for(let a=0;a<t;a+=3)for(let r=0;r<t;r+=12){const o=10+Math.random()*8,l=90+Math.random()*45;n.fillStyle=`rgb(${l+30}, ${l+10}, ${l-25})`,n.fillRect(a+(Math.random()-.5)*2,r,2,o)}for(let a=0;a<t;a+=32){const r=n.createLinearGradient(0,a,0,a+10);r.addColorStop(0,"rgba(30, 20, 10, 0.6)"),r.addColorStop(1,"rgba(30, 20, 10, 0.0)"),n.fillStyle=r,n.fillRect(0,a,t,10)}const i=new $e(e);return i.wrapS=ke,i.wrapT=ke,this.texCache.set("thatch",i),i}static createFabricTexture(t,e=!1){const n=`fabric_${t}_${e}`;if(this.texCache.has(n))return this.texCache.get(n);const i=128,a=this.createCanvas(i,i);if(!a)return this.createFallbackTexture(n);const r=a.getContext("2d");r.fillStyle=t,r.fillRect(0,0,i,i),r.fillStyle="rgba(255, 255, 255, 0.04)";for(let l=0;l<i;l+=2)r.fillRect(l,0,1,i);r.fillStyle="rgba(0, 0, 0, 0.06)";for(let l=0;l<i;l+=2)r.fillRect(0,l,i,1);if(e){r.fillStyle="#d4af37",r.fillRect(0,0,i,8),r.fillRect(0,i-8,i,8),r.fillStyle="#9e7d1b";for(let l=4;l<i;l+=12)r.beginPath(),r.arc(l,4,3,0,Math.PI*2),r.fill(),r.beginPath(),r.arc(l,i-4,3,0,Math.PI*2),r.fill()}const o=new $e(a);return this.texCache.set(n,o),o}static createSteppeGroundTexture(){if(this.texCache.has("steppe_ground"))return this.texCache.get("steppe_ground");const t=512,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("steppe_ground");const n=e.getContext("2d");n.fillStyle="#65693c",n.fillRect(0,0,t,t);const i=["#51542e","#757a46","#878c52","#4b3d2c","#5e4e37","#7a6649"];for(let r=0;r<15e3;r++){const o=Math.random()*t,l=Math.random()*t,c=Math.random()*5+1;n.fillStyle=i[Math.floor(Math.random()*i.length)],n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}const a=new $e(e);return a.wrapS=ke,a.wrapT=ke,a.repeat.set(16,16),this.texCache.set("steppe_ground",a),a}static createRockTexture(){if(this.texCache.has("rock"))return this.texCache.get("rock");const t=256,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("rock");const n=e.getContext("2d");n.fillStyle="#524f4b",n.fillRect(0,0,t,t);for(let a=0;a<4e3;a++){const r=Math.random()*t,o=Math.random()*t,l=Math.floor(55+Math.random()*40);n.fillStyle=`rgb(${l}, ${l-2}, ${l-5})`,n.fillRect(r,o,Math.random()*6+1,Math.random()*3+1)}const i=new $e(e);return this.texCache.set("rock",i),i}static createMazankaWallTexture(){if(this.texCache.has("mazanka_wall"))return this.texCache.get("mazanka_wall");const t=512,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("mazanka_wall");const n=e.getContext("2d");n.fillStyle="#f5f0e6",n.fillRect(0,0,t,t);for(let a=0;a<40;a++){const r=Math.random()*t,o=Math.random()*t,l=40+Math.random()*80,c=n.createRadialGradient(r,o,0,r,o,l),h=.04+Math.random()*.04,u=Math.random()<.5;c.addColorStop(0,u?`rgba(200, 185, 165, ${h})`:`rgba(255, 255, 250, ${h*1.5})`),c.addColorStop(1,"rgba(245, 240, 230, 0)"),n.fillStyle=c,n.beginPath(),n.arc(r,o,l,0,Math.PI*2),n.fill()}for(let a=0;a<600;a++){const r=Math.random()*t,o=Math.random()*t;n.fillStyle=Math.random()<.7?"#d8c7a6":"#bfab87";const l=1+Math.random()*3,c=1+Math.random()*1.5;n.fillRect(r,o,l,c)}const i=new $e(e);return i.wrapS=ke,i.wrapT=ke,this.texCache.set("mazanka_wall",i),i}static createPryzbaTexture(){if(this.texCache.has("pryzba"))return this.texCache.get("pryzba");const t=256,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("pryzba");const n=e.getContext("2d");n.fillStyle="#8c4627",n.fillRect(0,0,t,t);for(let a=0;a<t;a+=4){const r=120+(Math.random()-.5)*30;n.fillStyle=`rgb(${r+25}, ${r-50}, ${r-80})`,n.fillRect(0,a,t,2)}const i=new $e(e);return i.wrapS=ke,i.wrapT=ke,this.texCache.set("pryzba",i),i}static createRushnykTexture(){if(this.texCache.has("rushnyk"))return this.texCache.get("rushnyk");const t=128,e=512,n=this.createCanvas(t,e);if(!n)return this.createFallbackTexture("rushnyk");const i=n.getContext("2d");i.fillStyle="#f7f4ed",i.fillRect(0,0,t,e);const a=o=>{i.fillStyle="#b31b1b";for(let l=8;l<t-8;l+=12)i.fillRect(l,o,8,8),i.fillRect(l+4,o+4,8,8);i.fillStyle="#1c1b18";for(let l=8;l<t-8;l+=12)i.fillRect(l+4,o-4,4,4),i.fillRect(l,o+8,4,4)};a(40),a(70),a(e-80),a(e-50),i.fillStyle="#dfd8c7";for(let o=4;o<t-4;o+=3)i.fillRect(o,0,1.5,16),i.fillRect(o,e-16,1.5,16);const r=new $e(n);return this.texCache.set("rushnyk",r),r}static getWoodMaterial(){const t="mat_wood";if(!this.cache.has(t)){const e=this.createWoodLogTexture();this.cache.set(t,new ht({map:e,roughness:.75,metalness:.05}))}return this.cache.get(t)}static getThatchMaterial(){const t="mat_thatch";if(!this.cache.has(t)){const e=this.createThatchTexture();this.cache.set(t,new ht({map:e,roughness:.9,metalness:.02}))}return this.cache.get(t)}static getSteelMaterial(){const t="mat_steel";return this.cache.has(t)||this.cache.set(t,new ht({color:15265781,metalness:.96,roughness:.18})),this.cache.get(t)}static getGoldMaterial(){const t="mat_gold";return this.cache.has(t)||this.cache.set(t,new ht({color:13938487,metalness:.9,roughness:.25})),this.cache.get(t)}static getLeatherMaterial(){const t="mat_leather";return this.cache.has(t)||this.cache.set(t,new ht({color:3022355,roughness:.55,metalness:.1})),this.cache.get(t)}static getWaterMaterial(){const t="mat_water";return this.cache.has(t)||this.cache.set(t,new ht({color:2840407,roughness:.15,metalness:.25,transparent:!0,opacity:.85})),this.cache.get(t)}static getRockMaterial(){const t="mat_rock";if(!this.cache.has(t)){const e=this.createRockTexture();this.cache.set(t,new ht({map:e,roughness:.9,metalness:.05,flatShading:!0}))}return this.cache.get(t)}static getMazankaWallMaterial(){const t="mat_mazanka_wall";if(!this.cache.has(t)){const e=this.createMazankaWallTexture();this.cache.set(t,new ht({map:e,roughness:.88,metalness:.02,color:16446956}))}return this.cache.get(t)}static getPryzbaMaterial(){const t="mat_pryzba";if(!this.cache.has(t)){const e=this.createPryzbaTexture();this.cache.set(t,new ht({map:e,roughness:.9,metalness:.03}))}return this.cache.get(t)}static getRushnykMaterial(){const t="mat_rushnyk";if(!this.cache.has(t)){const e=this.createRushnykTexture();this.cache.set(t,new ht({map:e,roughness:.85,metalness:0,side:Be}))}return this.cache.get(t)}static getMazankaTrimMaterial(){const t="mat_mazanka_trim";return this.cache.has(t)||this.cache.set(t,new ht({color:2380925,roughness:.65,metalness:.08})),this.cache.get(t)}static getPechMaterial(){const t="mat_pech";return this.cache.has(t)||this.cache.set(t,new ht({color:16249835,roughness:.85,metalness:.02})),this.cache.get(t)}static createPathTexture(){if(this.texCache.has("path_dirt"))return this.texCache.get("path_dirt");const t=512,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("path_dirt");const n=e.getContext("2d");n.fillStyle="#6e5a3c",n.fillRect(0,0,t,t);for(let a=0;a<7e3;a++){const r=Math.random()*t,o=Math.random()*t,l=["#5c4a30","#7a6544","#85704d","#4d3d27","#635338"];n.fillStyle=l[Math.floor(Math.random()*l.length)],n.fillRect(r,o,2+Math.random()*4,2+Math.random()*4)}for(let a=0;a<900;a++){const r=Math.random()*t,o=Math.random()*t,l=1+Math.random()*3,c=Math.random()<.5?"#8f8778":"#a39b8c";n.fillStyle=c,n.beginPath(),n.arc(r,o,l,0,Math.PI*2),n.fill()}const i=new $e(e);return i.wrapS=ke,i.wrapT=ke,i.repeat.set(3,3),this.texCache.set("path_dirt",i),i}static createSunflowerDiskTexture(){if(this.texCache.has("sunflower_disk"))return this.texCache.get("sunflower_disk");const t=128,e=this.createCanvas(t,t);if(!e)return this.createFallbackTexture("sunflower_disk");const n=e.getContext("2d");n.fillStyle="#2c190a",n.fillRect(0,0,t,t),n.fillStyle="#694119";for(let a=0;a<400;a++){const r=Math.sqrt(Math.random())*(t/2-4),o=Math.random()*Math.PI*2,l=t/2+Math.cos(o)*r,c=t/2+Math.sin(o)*r;n.fillRect(l,c,2,2)}const i=new $e(e);return this.texCache.set("sunflower_disk",i),i}static getPathMaterial(){const t="mat_path";if(!this.cache.has(t)){const e=this.createPathTexture();this.cache.set(t,new ht({map:e,roughness:.92,metalness:.02}))}return this.cache.get(t)}static getSunflowerDiskMaterial(){const t="mat_sunflower_disk";if(!this.cache.has(t)){const e=this.createSunflowerDiskTexture();this.cache.set(t,new ht({map:e,roughness:.9,metalness:.05}))}return this.cache.get(t)}static getSunflowerPetalMaterial(){const t="mat_sunflower_petal";return this.cache.has(t)||this.cache.set(t,new ht({color:16233228,roughness:.45,metalness:.05,side:Be})),this.cache.get(t)}static getSunflowerLeafMaterial(){const t="mat_sunflower_leaf";return this.cache.has(t)||this.cache.set(t,new ht({color:4024616,roughness:.75,metalness:.02,side:Be})),this.cache.get(t)}static getMallowFlowerMaterial(t=14235752){const e=`mat_mallow_${t}`;return this.cache.has(e)||this.cache.set(e,new ht({color:t,roughness:.5,side:Be})),this.cache.get(e)}static getGlechykMaterial(){const t="mat_glechyk";return this.cache.has(t)||this.cache.set(t,new ht({color:10176035,roughness:.38,metalness:.1})),this.cache.get(t)}static getWillowMaterial(){const t="mat_willow";return this.cache.has(t)||this.cache.set(t,new ht({color:7229491,roughness:.85,metalness:.05})),this.cache.get(t)}static getHayMaterial(){const t="mat_hay";if(!this.cache.has(t)){const e=this.createThatchTexture();this.cache.set(t,new ht({map:e,color:14267225,roughness:.95,metalness:.01}))}return this.cache.get(t)}static getWellStoneMaterial(){const t="mat_well_stone";if(!this.cache.has(t)){const e=this.createRockTexture();this.cache.set(t,new ht({map:e,color:9077884,roughness:.88,metalness:.05}))}return this.cache.get(t)}}class ge{static createKurin(t=8.5,e=13,n=3.8){const i=new bt,a=Ot.getWoodMaterial(),r=Ot.getThatchMaterial(),o=new ht({color:14602686,roughness:.9}),l=new ht({color:3351060,roughness:.8}),c=.22,h=Math.floor(n/(c*1.8));for(let G=0;G<h;G++){const O=G*(c*1.8)+c,H=new vt(c*.95,c,e+1.2,8);H.rotateX(Math.PI/2);const B=new P(H,a);B.position.set(-t/2,O,0),B.castShadow=!0,i.add(B);const J=new P(H,a);J.position.set(t/2,O,0),J.castShadow=!0,i.add(J);const K=new vt(c*.95,c,t+1.2,8);K.rotateZ(Math.PI/2);const rt=new P(K,a);rt.position.set(0,O+c*.9,e/2),rt.castShadow=!0,i.add(rt);const dt=new P(K,a);if(dt.position.set(0,O+c*.9,-e/2),dt.castShadow=!0,i.add(dt),G<h-1){const ct=new P(new lt(t-.1,.08,e-.1),o);ct.position.set(0,O+c*.9,0),i.add(ct)}}const u=2.4,d=3.2,m=new P(new lt(d,.2,u),l);m.position.set(0,.1,e/2+u/2),m.castShadow=!0,m.receiveShadow=!0,i.add(m);const g=new vt(.12,.15,2.6,8),M=new P(g,l);M.position.set(-d/2+.2,1.4,e/2+u-.2),M.castShadow=!0,i.add(M);const p=new P(g,l);p.position.set(d/2-.2,1.4,e/2+u-.2),p.castShadow=!0,i.add(p);const f=new Se(2.4,1.4,4);f.rotateY(Math.PI/4);const x=new P(f,r);x.position.set(0,3.2,e/2+u/2),x.castShadow=!0,i.add(x);const S=new P(new lt(1.4,2.3,.12),l);S.position.set(0,1.25,e/2+.05),i.add(S);const y=new lt(.5,.06,.14),A=Ot.getSteelMaterial(),T=new P(y,A);T.position.set(-.35,1.9,e/2+.08),i.add(T);const R=new P(y,A);R.position.set(-.35,.6,e/2+.08),i.add(R);const v=3.2,b=t+2,z=e+2,C=new Se(Math.max(b,z)*.72,v,4);C.rotateY(Math.PI/4),C.scale(b/(b*.72*Math.SQRT2),1,z/(z*.72*Math.SQRT2));const D=new P(C,r);D.position.y=n+v/2-.25,D.castShadow=!0,D.receiveShadow=!0,i.add(D);const k=new P(new vt(.12,.12,z,6),l);return k.rotateX(Math.PI/2),k.position.set(0,n+v-.1,0),i.add(k),i}static createPalisade(t=10,e=3.4){const n=new bt,i=Ot.getWoodMaterial(),a=new ht({color:4008731,roughness:.85}),r=.24,o=Math.floor(t/(r*2));for(let l=0;l<o;l++){const c=(l-o/2)*(r*2),h=e+(Math.random()-.5)*.4,u=new P(new vt(r*.8,r,h,8),i);u.position.set(c,h/2,0),u.castShadow=!0,n.add(u);const d=new P(new Se(r*.8,.75,8),i);d.position.set(c,h+.35,0),d.castShadow=!0,n.add(d)}for(const l of[e*.3,e*.75]){const c=new P(new lt(t+.4,.2,.16),a);c.position.set(0,l,-r),c.castShadow=!0,n.add(c)}return n}static createCampfire(){const t=new bt,e=new ht({color:5526092,roughness:.9,flatShading:!0}),n=Ot.getWoodMaterial(),i=12;for(let h=0;h<i;h++){const u=h/i*Math.PI*2,d=.95+(Math.random()-.5)*.15,m=new Bn(.24+Math.random()*.08,0),g=new P(m,e);g.position.set(Math.cos(u)*d,.14,Math.sin(u)*d),g.scale.set(1.2,.75,1.1),g.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),g.castShadow=!0,t.add(g)}const a=new P(new vt(.75,.8,.1,12),new ht({color:2038294,roughness:.95}));a.position.y=.05,t.add(a);const r=new ht({color:16724736,emissive:16720384,emissiveIntensity:2.2,roughness:.6}),o=new P(new fe(.35,8,6),r);o.scale.set(1.4,.4,1.4),o.position.y=.12,t.add(o);for(let h=0;h<6;h++){const u=h/6*Math.PI*2,d=new P(new vt(.08,.11,1.25,6),n);d.rotation.z=Math.PI/4.5,d.rotation.y=u,d.position.set(Math.cos(u)*.35,.28,Math.sin(u)*.35),d.castShadow=!0,t.add(d)}const l=new P(new Se(.22,.75,6),new ht({color:16771584,emissive:16763904,emissiveIntensity:2.5,roughness:.1}));l.position.y=.65,t.add(l);const c=new P(new Se(.36,.95,6),new ht({color:16729088,emissive:16720384,emissiveIntensity:1.8,transparent:!0,opacity:.85}));return c.position.y=.72,t.add(c),t}static createSteppeOak(t=7){const e=new bt,n=Ot.getWoodMaterial(),i=new ht({color:4021292,roughness:.8,flatShading:!0}),a=new P(new vt(.28,.55,t*.5,8),n);a.position.y=t*.5/2,a.castShadow=!0,e.add(a);for(let o=0;o<4;o++){const l=o/4*Math.PI*2,c=new P(new vt(.12,.2,t*.3,6),n);c.position.set(Math.cos(l)*.5,t*.45,Math.sin(l)*.5),c.rotation.z=Math.PI/4,c.rotation.y=l,e.add(c);const h=new P(new Bn(1.6+Math.random()*.4,1),i);h.position.set(Math.cos(l)*1.8,t*.68,Math.sin(l)*1.8),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}const r=new P(new Bn(2.4,1),i);return r.position.y=t*.82,r.scale.set(1.3,.9,1.3),r.castShadow=!0,r.receiveShadow=!0,e.add(r),e}static createGrassTuft(){const t=new bt,e=new ht({color:10393947,roughness:.9,side:Be}),n=new We(.12,.7);for(let i=0;i<7;i++){const a=new P(n,e),r=i/7*Math.PI*2;a.rotation.y=r,a.rotation.x=.25,a.position.set(Math.cos(r)*.08,.32,Math.sin(r)*.08),t.add(a)}return t}static createSheepPen(t=8,e=10){const n=new bt,i=1.35,a=Ot.getWoodMaterial(),r=new vt(.12,.14,i,6),o=[[-t/2,-e/2],[t/2,-e/2],[-t/2,e/2],[t/2,e/2],[-t/2,0],[t/2,0]];for(const[h,u]of o){const d=new P(r,a);d.position.set(h,i/2,u),d.castShadow=!0,n.add(d)}const l=new lt(t,.12,.08),c=new lt(.08,.12,e);for(const h of[i*.35,i*.75]){const u=new P(c,a);u.position.set(-t/2,h,0),u.castShadow=!0,n.add(u);const d=new P(c,a);d.position.set(t/2,h,0),d.castShadow=!0,n.add(d);const m=new P(l,a);m.position.set(0,h,-e/2),m.castShadow=!0,n.add(m)}return n}static createBoulder(t=2){const e=new bt,n=Ot.getRockMaterial(),i=new Bn(t,1),a=i.attributes.position;for(let o=0;o<a.count;o++){const l=a.getX(o),c=a.getY(o),h=a.getZ(o),u=1+(Math.sin(l*2.5)+Math.cos(h*2.5))*.08;a.setXYZ(o,l*u,c*(.85+u*.1),h*u)}i.computeVertexNormals();const r=new P(i,n);return r.position.y=t*.65,r.castShadow=!0,r.receiveShadow=!0,e.add(r),e}static createEnterableMazanka(t=8.5,e=13,n=3.4,i="headquarters"){const a=new bt,r=new bt,o=new bt,l=new bt;a.add(r),a.add(l),a.add(o);const c=Ot.getMazankaWallMaterial(),h=Ot.getPryzbaMaterial(),u=Ot.getMazankaTrimMaterial(),d=Ot.getRushnykMaterial(),m=Ot.getPechMaterial(),g=new ht({color:3547924,roughness:.82}),M=Ot.getWoodMaterial(),p=Ot.getThatchMaterial().clone();p.transparent=!0;const f=g.clone();f.transparent=!0;const x=[p,f],S=2.2,y=2.45,A=.42,T=.42,R=new lt(t+.8,T,e+.8),v=new P(R,h);v.position.set(0,T/2,0),v.receiveShadow=!0,l.add(v);const b=new lt(t-.2,.16,e-.2),z=new P(b,g);z.position.set(0,.1,0),z.receiveShadow=!0,r.add(z);const C=new P(new lt(A,n,e),c);C.position.set(-t/2,n/2,0),C.castShadow=!0,C.receiveShadow=!0,l.add(C);const D=new P(new lt(A,n,e),c);D.position.set(t/2,n/2,0),D.castShadow=!0,D.receiveShadow=!0,l.add(D);const k=new P(new lt(t,n,A),c);k.position.set(0,n/2,-e/2),k.castShadow=!0,k.receiveShadow=!0,l.add(k);const G=(t-S)/2,O=new P(new lt(G,n,A),c);O.position.set(-t/2+G/2,n/2,e/2),O.castShadow=!0,O.receiveShadow=!0,l.add(O);const H=new P(new lt(G,n,A),c);H.position.set(t/2-G/2,n/2,e/2),H.castShadow=!0,H.receiveShadow=!0,l.add(H);const B=n-y,J=new P(new lt(S,B,A),c);J.position.set(0,y+B/2,e/2),J.castShadow=!0,l.add(J);const K=new vt(A*.65,A*.65,n,10);for(const St of[-t/2,t/2])for(const Ft of[-e/2,e/2]){const Dt=new P(K,c);Dt.position.set(St,n/2,Ft),l.add(Dt)}const rt=(St,Ft,Dt,Me=0)=>{const he=new bt;he.position.set(St,Ft,Dt),he.rotation.y=Me;const Cn=new lt(1.25,1.45,.08),Fi=new P(Cn,u);he.add(Fi);const Zs=new ht({color:14281717,roughness:.1,metalness:.1,transparent:!0,opacity:.75}),Oi=new P(new We(1,1.2),Zs);Oi.position.z=.045,he.add(Oi);const ki=new P(new lt(1,.05,.06),u);ki.position.z=.05,he.add(ki);const an=new P(new lt(.05,1.2,.06),u);an.position.z=.05,he.add(an);const ni=new lt(.48,1.35,.06),ii=new P(ni,u);ii.position.set(-.78,0,.04),ii.rotation.y=-.35,he.add(ii);const si=new P(ni,u);si.position.set(.78,0,.04),si.rotation.y=.35,he.add(si),l.add(he)};rt(-t/4-.2,1.6,e/2+.22,0),rt(t/4+.2,1.6,e/2+.22,0),rt(-t/2-.22,1.6,0,-Math.PI/2),rt(t/2+.22,1.6,0,Math.PI/2);const dt=2.4,ct=3.6,Nt=new P(new lt(ct,.22,dt),g);Nt.position.set(0,.11,e/2+dt/2),Nt.receiveShadow=!0,l.add(Nt);const se=new vt(.11,.14,2.5,8),ne=new P(se,g);ne.position.set(-ct/2+.25,1.35,e/2+dt-.25),ne.castShadow=!0,l.add(ne);const Z=new P(se,g);Z.position.set(ct/2-.25,1.35,e/2+dt-.25),Z.castShadow=!0,l.add(Z);const it=new lt(.18,y,.28),at=new P(it,g);at.position.set(-S/2,y/2,e/2),l.add(at);const kt=new P(it,g);kt.position.set(S/2,y/2,e/2),l.add(kt);const Rt=new P(new lt(1.1,y-.12,.08),g);Rt.position.set(-S/2+.35,(y-.12)/2,e/2-.5),Rt.rotation.y=1.25,Rt.castShadow=!0,r.add(Rt);const Pt=new bt,ue=-t/2+1.6,Xt=-e/2+1.8;Pt.position.set(ue,0,Xt);const Zt=new P(new lt(2.3,2,2.6),m);Zt.position.set(0,1,0),Zt.castShadow=!0,Pt.add(Zt);const Jt=new P(new lt(.85,.75,.8),new ht({color:1314828,roughness:.95}));Jt.position.set(.65,.65,.95),Pt.add(Jt);const Bt=new P(new fe(.24,6,6),new ht({color:16726784,emissive:16720384,emissiveIntensity:2.5,roughness:.5}));Bt.scale.set(1.4,.4,1.2),Bt.position.set(.65,.4,.95),Pt.add(Bt);const re=new P(new lt(1.4,.85,2.6),m);re.position.set(-1.4,.42,0),Pt.add(re);const I=new P(new lt(1.25,.12,2.3),new ht({color:9056296,roughness:.9}));I.position.set(-1.4,.9,0),Pt.add(I);const le=new P(new vt(.14,.18,.25,8),Ot.getSteelMaterial());le.position.set(.85,1.05,.9),Pt.add(le);const $t=new P(new vt(.02,.02,1.8,4),g);$t.rotation.z=-.25,$t.position.set(1.2,.9,1.2),Pt.add($t),r.add(Pt);const Qt=new P(new lt(t-.2,.25,.35),g);Qt.position.set(0,n-.2,0),r.add(Qt);for(let St=-2.5;St<=2.5;St+=1.2){const Ft=new Se(.14,.55,5);Ft.rotateX(Math.PI);const Dt=new ht({color:St<0?4877106:9076028,roughness:.95}),Me=new P(Ft,Dt);Me.position.set(St,n-.5,0),r.add(Me)}const gt=new bt;gt.position.set(t/2-.35,1.8,-e/2+.35);const E=new P(new lt(.8,.06,.8),g);gt.add(E);const _=new P(new lt(.45,.65,.04),new ht({color:7555874,roughness:.7}));_.position.set(0,.35,0),_.rotation.y=-Math.PI/4,gt.add(_);const U=new P(new We(.65,1.1),d);U.position.set(0,.3,.04),U.rotation.y=-Math.PI/4,gt.add(U);const Y=new P(new vt(.04,.06,.12,6),new ht({color:11737883,emissive:8392720}));Y.position.set(0,.1,.1),gt.add(Y),r.add(gt);const j=new P(new lt(2.6,.12,1.35),g);j.position.set(.6,.85,-.6),j.castShadow=!0,r.add(j);for(const St of[-1.15,1.15])for(const Ft of[-.55,.55]){const Dt=new P(new lt(.12,.8,.12),g);Dt.position.set(.6+St,.44,-.6+Ft),r.add(Dt)}const $=new P(new We(2.3,.6),new ht({color:9709087,roughness:.85}));$.rotateX(-Math.PI/2),$.position.set(.6,.92,-.6),r.add($);const wt=new P(new vt(.1,.16,.35,8),new ht({color:9061928,roughness:.65}));wt.position.set(.2,1.1,-.6),r.add(wt);const ot=new P(new lt(.5,.48,e-2.5),g);ot.position.set(t/2-.45,.25,0),r.add(ot);const Ct=new P(new lt(1.35,.75,.85),new ht({color:4860438,roughness:.75}));if(Ct.position.set(t/2-1.1,.42,e/2-1.2),Ct.castShadow=!0,r.add(Ct),i==="headquarters"){const St=new P(new We(1.4,.85),new ht({color:14602426,roughness:.85}));St.rotateX(-Math.PI/2),St.position.set(.8,.93,-.6),r.add(St);const Ft=new P(new lt(.55,.1,.3),new ht({color:7215899}));Ft.position.set(1.4,.94,-.6),r.add(Ft);const Dt=new P(new vt(.02,.02,.45,6),Ot.getGoldMaterial());Dt.rotation.z=Math.PI/2,Dt.position.set(1.4,1.02,-.6),r.add(Dt);const Me=new P(new fe(.065,8,8),Ot.getGoldMaterial());Me.position.set(1.6,1.02,-.6),r.add(Me);const he=new P(new lt(1.5,.05,.03),Ot.getSteelMaterial());he.rotation.z=Math.PI/5,he.position.set(.6,2.2,-e/2+.24),r.add(he);const Cn=new P(new lt(1.5,.05,.03),Ot.getSteelMaterial());Cn.rotation.z=-Math.PI/5,Cn.position.set(.6,2.2,-e/2+.26),r.add(Cn)}else{const St=new P(new lt(1.2,.14,2.8),g);St.position.set(t/2-.8,.85,0),r.add(St);for(let Ft=0;Ft<2;Ft++){const Dt=new P(new vt(.24,.3,.6,8),new ht({color:9061928}));Dt.position.set(t/2-.8,.35,Ft===0?-1.6:1.6),r.add(Dt);for(let Me=0;Me<8;Me++){const he=new P(new vt(.012,.012,.85,4),Ot.getSteelMaterial());he.position.set(t/2-.8+(Math.random()-.5)*.15,.75,(Ft===0?-1.6:1.6)+(Math.random()-.5)*.15),he.rotation.z=(Math.random()-.5)*.25,r.add(he)}}for(let Ft=0;Ft<3;Ft++){const Dt=new P(new vt(.035,.035,1.8,6),M);Dt.position.set(t/2-.35,1.2+Ft*.35,0),Dt.rotation.x=Math.PI/2,r.add(Dt)}}const Ut=new Bs(16755268,2.6,14);Ut.position.set(0,2.7,0),Ut.castShadow=!0,r.add(Ut);const Q=3.4,et=t+2.4,xt=e+2.4,Et=new lt(et,.55,xt),ft=new P(Et,p);ft.position.set(0,n+.15,0),ft.castShadow=!0,ft.receiveShadow=!0,o.add(ft);const Gt=Math.max(et,xt)*.72,N=new Se(Gt,Q,4);N.rotateY(Math.PI/4),N.scale(et/(Gt*Math.SQRT2),1,xt/(Gt*Math.SQRT2));const st=new P(N,p);st.position.set(0,n+Q/2+.35,0),st.castShadow=!0,st.receiveShadow=!0,o.add(st);const nt=Math.max(1,xt-et+1.2),_t=new P(new vt(.12,.12,nt,6),f);_t.rotateX(Math.PI/2),_t.position.set(0,n+Q+.35,0),o.add(_t);for(const St of[-nt/2,nt/2]){const Ft=new P(new lt(.1,.85,.1),f);Ft.rotation.x=Math.PI/4,Ft.position.set(0,n+Q+.65,St),o.add(Ft);const Dt=new P(new lt(.1,.85,.1),f);Dt.rotation.x=-Math.PI/4,Dt.position.set(0,n+Q+.65,St),o.add(Dt)}const tt=new Se(2.8,1.6,4);tt.rotateY(Math.PI/4);const q=new P(tt,p);q.position.set(0,3.25,e/2+dt/2),q.castShadow=!0,o.add(q);const yt=new P(new lt(.65,1.4,.65),c);return yt.position.set(ue,n+Q*.75,Xt),yt.castShadow=!0,o.add(yt),{group:a,roofGroup:o,interiorGroup:r,roofMaterials:x,doorway:{x:0,z:e/2,width:S,height:y},interiorLight:Ut}}static createEnterableKurin(t=8.5,e=13,n=3.4,i="headquarters"){return this.createEnterableMazanka(t,e,n,i)}static createWattleFence(t=6,e=1.15,n=!0){const i=new bt,a=Ot.getWoodMaterial(),r=Ot.getWillowMaterial(),o=Ot.getGlechykMaterial(),c=Math.max(2,Math.floor(t/.72)+1),h=t/(c-1),u=e+.35,d=new vt(.045,.055,u,6);for(let g=0;g<c;g++){const M=-t/2+g*h,p=new P(d,a);if(p.position.set(M,u/2,0),p.rotation.z=Math.sin(g*1.7)*.04,p.rotation.x=Math.cos(g*1.3)*.04,p.castShadow=!0,i.add(p),n&&(g%2===1||c>3&&g===c-2)){const f=new bt;f.position.set(M,e+.22,0);const x=new P(new fe(.12,7,6),o);x.scale.set(1,1.25,1),f.add(x);const S=new P(new vt(.065,.08,.12,7),o);S.position.y=-.11,f.add(S);const y=new P(new Sn(.06,.016,4,8,Math.PI),o);y.rotation.z=Math.PI/2,y.position.set(.11,0,0),f.add(y),f.castShadow=!0,i.add(f)}}const m=6;for(let g=0;g<m;g++){const M=.18+g/(m-1)*(e-.28);for(let p=0;p<c-1;p++){const f=-t/2+p*h,x=f+h,S=(f+x)/2,y=((p+g)%2===0?1:-1)*.042,A=h*1.08,T=new vt(.018,.018,A,5);T.rotateZ(Math.PI/2);const R=new P(T,r);R.position.set(S,M+Math.sin(p*3+g)*.015,y),R.castShadow=!0,i.add(R)}}return i}static createSunflowerCluster(t=4){const e=new bt,n=Ot.getSunflowerDiskMaterial(),i=Ot.getSunflowerPetalMaterial(),a=Ot.getSunflowerLeafMaterial(),r=[[0,0,2.3],[.6,-.25,2],[-.55,.2,2.5],[.35,.5,1.85],[-.3,-.4,2.15]],o=14,l=new lt(.08,.22,.015),c=new lt(.24,.02,.38);for(let h=0;h<Math.min(t,r.length);h++){const[u,d,m]=r[h],g=m+Math.sin(h*2.1)*.15,M=new bt;M.position.set(u,0,d);const p=new P(new vt(.032,.045,g,6),a);p.position.y=g/2,p.rotation.z=Math.sin(h*1.4)*.06,p.rotation.x=-.09,p.castShadow=!0,M.add(p);for(let y=1;y<=3;y++){const A=g*(.28+y*.18),T=new P(c,a),R=y%2===0;T.position.set(R?.16:-.16,A,.05),T.rotation.set(.3,R?.8:-.8,R?-.3:.3),T.castShadow=!0,M.add(T)}const f=new bt;f.position.set(0,g+.05,.1),f.rotation.x=.55,f.rotation.y=.25;const x=new vt(.22,.22,.05,14);x.rotateX(Math.PI/2);const S=new P(x,n);S.castShadow=!0,f.add(S);for(let y=0;y<o;y++){const A=y/o*Math.PI*2,T=new P(l,i);T.position.set(Math.cos(A)*.27,Math.sin(A)*.27,0),T.rotation.z=A-Math.PI/2,T.rotation.x=.15,f.add(T)}M.add(f),e.add(M)}return e}static createMallowCluster(t=3){const e=new bt,n=Ot.getSunflowerLeafMaterial(),i=[14232414,11344444,16091813],a=[[0,0,1.9],[.45,.15,1.7],[-.4,-.1,2.1],[.2,-.3,1.6]],r=new vt(.11,.04,.06,6);r.rotateX(Math.PI/2);for(let o=0;o<Math.min(t,a.length);o++){const[l,c,h]=a[o],u=Ot.getMallowFlowerMaterial(i[o%i.length]),d=new bt;d.position.set(l,0,c);const m=new P(new vt(.02,.03,h,6),n);m.position.y=h/2,m.castShadow=!0,d.add(m);const g=8;for(let M=0;M<g;M++){const p=h*(.35+M/g*.6),f=M*2.4,x=new P(r,u);x.position.set(Math.cos(f)*.07,p,Math.sin(f)*.07),x.rotation.set(.2,f,0),x.castShadow=!0,d.add(x)}e.add(d)}return e}static createSteppeWell(){const t=new bt,e=Ot.getWellStoneMaterial(),n=Ot.getWoodMaterial(),i=new ht({color:3547924,roughness:.85}),a=Ot.getSteelMaterial(),r=Ot.getThatchMaterial(),o=Ot.getWaterMaterial(),l=1.15,c=.85,h=new vt(l,l*1.05,c,8),u=new P(h,e);u.position.y=c/2,u.castShadow=!0,u.receiveShadow=!0,t.add(u);const d=new vt(l*.82,l*.82,.4,8),m=new ht({color:1118481,roughness:.95}),g=new P(d,m);g.position.y=c-.18,t.add(g);const M=new P(new Zi(l*.78,8),o);M.rotateX(-Math.PI/2),M.position.y=c-.25,t.add(M);const p=new Sn(l*.94,.09,4,8);p.rotateX(Math.PI/2);const f=new P(p,i);f.position.y=c+.04,f.castShadow=!0,t.add(f);const x=2.4,S=new lt(.15,x,.15);for(const ct of[-l*.85,l*.85]){const Nt=new P(S,n);Nt.position.set(ct,x/2,0),Nt.castShadow=!0,t.add(Nt)}const y=new vt(.1,.1,l*1.6,8);y.rotateZ(Math.PI/2);const A=new P(y,n);A.position.set(0,1.45,0),A.castShadow=!0,t.add(A);const T=new vt(.12,.12,.45,8);T.rotateZ(Math.PI/2);const R=new ht({color:11047791,roughness:.9}),v=new P(T,R);v.position.set(-.15,1.45,0),t.add(v);const b=new P(new lt(.04,.35,.04),a);b.position.set(l*.85+.1,1.45-.12,0),t.add(b);const z=new P(new vt(.025,.025,.18,6),i);z.rotateX(Math.PI/2),z.position.set(l*.85+.1,1.45-.28,.09),t.add(z);const C=new bt;C.position.set(.35,c+.18,.4);const D=new P(new vt(.18,.14,.34,8),i);C.add(D);const k=new P(new vt(.182,.142,.05,8),a);C.add(k);const G=new P(new Sn(.16,.015,4,8,Math.PI),a);G.position.y=.17,C.add(G),C.castShadow=!0,t.add(C);const O=2.4,H=1.9,B=1,J=new Se(O*.72,B,4);J.rotateY(Math.PI/4),J.scale(1,1,H/O);const K=new P(J,r);K.position.set(0,x+B/2-.15,0),K.castShadow=!0,K.receiveShadow=!0,t.add(K);const rt=new Zi(l+.75,8);rt.rotateX(-Math.PI/2);const dt=new P(rt,e);return dt.position.y=.02,dt.receiveShadow=!0,t.add(dt),t}static createChoppingBlock(){const t=new bt,e=Ot.getWoodMaterial(),n=Ot.getSteelMaterial(),i=new ht({color:3547924,roughness:.85}),a=.65,r=.42,o=new P(new vt(r*.95,r,a,8),e);o.position.y=a/2,o.castShadow=!0,o.receiveShadow=!0,t.add(o);const l=new P(new Zi(r*.95,8),i);l.rotateX(-Math.PI/2),l.position.y=a+.005,t.add(l);const c=new bt;c.position.set(.05,a+.05,0),c.rotation.z=-.3,c.rotation.y=.4;const h=new lt(.24,.15,.035),u=new P(h,n);u.position.set(0,.06,0),c.add(u);const d=new P(new vt(.022,.028,.8,6),i);d.position.set(.06,.42,0),d.rotation.z=-.15,c.add(d),c.castShadow=!0,t.add(c);const m=new vt(.075,.075,.65,6);m.rotateZ(Math.PI/2);const g=[[.6,.08,-.15],[.6,.08,.05],[.6,.08,.25],[.6,.22,-.05],[.6,.22,.15],[.6,.35,.05]];for(const[p,f,x]of g){const S=new P(m,e);S.position.set(p,f,x),S.castShadow=!0,t.add(S)}const M=new lt(.08,.015,.05);for(let p=0;p<8;p++){const f=new P(M,i),x=p/8*Math.PI*2,S=.45+Math.sin(p*2)*.15;f.position.set(Math.cos(x)*S,.01,Math.sin(x)*S),f.rotation.y=p*.8,t.add(f)}return t}static createCossackCart(){const t=new bt,e=Ot.getWoodMaterial(),n=new ht({color:3547924,roughness:.85}),i=Ot.getSteelMaterial(),a=Ot.getHayMaterial(),r=1.5,o=3.4,l=.65,c=new P(new lt(r,.12,o),n);c.position.y=l,c.castShadow=!0,t.add(c);for(const S of[-1,1]){const y=new P(new lt(.08,.55,o),e);y.position.set((r/2+.06)*S,l+.3,0),y.rotation.z=S*-.18,y.castShadow=!0,t.add(y)}for(const S of[-1,1]){const y=new P(new lt(r,.5,.08),e);y.position.set(0,l+.28,o/2*S),y.castShadow=!0,t.add(y)}for(const S of[-o*.35,o*.35]){const y=new P(new lt(r+.55,.1,.1),n);y.position.set(0,l-.18,S),t.add(y)}const h=(S,y)=>{const A=new bt,T=new P(new Sn(S,.045,6,12),n);A.add(T);const R=new P(new Sn(S+.02,.015,4,12),i);A.add(R);const v=new P(new vt(.09,.09,.18,8),n);v.rotateX(Math.PI/2),A.add(v);for(let b=0;b<y;b++){const z=new P(new vt(.02,.02,S*1.85,4),e);z.rotation.z=b/y*Math.PI,A.add(z)}return A},u=h(.42,6);u.rotation.y=Math.PI/2,u.position.set(-r/2-.22,.42,-o*.35),t.add(u);const d=h(.42,6);d.rotation.y=Math.PI/2,d.position.set(r/2+.22,.42,-o*.35),t.add(d);const m=h(.55,8);m.rotation.y=Math.PI/2,m.position.set(-r/2-.22,.55,o*.35),t.add(m);const g=h(.55,8);g.rotation.y=Math.PI/2,g.position.set(r/2+.22,.55,o*.35),t.add(g);const M=new vt(.04,.05,2.2,6);for(const S of[-.4,.4]){const y=new P(M,e);y.position.set(S,.35,-o/2-1),y.rotation.x=Math.PI/2+.12,t.add(y)}const p=new P(new fe(r*.55,8,6),a);p.scale.set(.9,.65,1.8),p.position.set(0,l+.45,.2),p.castShadow=!0,t.add(p);const f=new ht({color:11903874,roughness:.9});for(let S=0;S<2;S++){const y=new P(new lt(.45,.3,.7),f);y.position.set(-.25+S*.5,l+.35,-.9),y.rotation.y=S===0?-.15:.2,t.add(y)}const x=new P(new vt(.3,.34,.75,8),n);return x.position.set(.2,l+.45,.9),t.add(x),t}static createOutsideBench(t=2){const e=new bt,n=new ht({color:3547924,roughness:.85}),i=new P(new lt(t,.08,.42),n);i.position.y=.44,i.castShadow=!0,e.add(i);for(const r of[-t/2+.22,t/2-.22]){const o=new P(new lt(.1,.42,.36),n);o.position.set(r,.21,0),o.castShadow=!0,e.add(o)}const a=new P(new lt(t-.4,.06,.06),n);return a.position.y=.16,e.add(a),e}static createHaystack(t=1.9,e=2.6){const n=new bt,i=Ot.getHayMaterial(),a=Ot.getWoodMaterial(),r=new Se(t,e,10),o=new P(r,i);o.position.y=e/2,o.scale.set(1,1,.95),o.castShadow=!0,o.receiveShadow=!0,n.add(o);const l=new P(new vt(.045,.055,e+.8,6),a);return l.position.y=(e+.8)/2,n.add(l),n}static createGroundFootpaths(t){const e=new bt,n=Ot.getPathMaterial(),i=[[new L(0,0,-2),new L(-1.8,0,-4.5),new L(-3.5,0,-7.5),new L(-5.8,0,-10.5)],[new L(0,0,-2),new L(4,0,-3.8),new L(8.5,0,-5.5),new L(13,0,-7),new L(15.8,0,-8.5)],[new L(0,0,-2),new L(-4,0,.5),new L(-8.5,0,3.5),new L(-12.5,0,6.5)],[new L(0,0,-2),new L(2.2,0,-4.5),new L(4.8,0,-7.5)],[new L(5,0,-8),new L(9.5,0,-8),new L(15.8,0,-8.5)],[new L(0,0,-2),new L(0,0,5),new L(-.5,0,13),new L(0,0,22)]],a=2;for(const r of i)for(let o=0;o<r.length-1;o++){const l=r[o],c=r[o+1],h=new L().subVectors(c,l),u=h.length();h.normalize();const d=Math.max(3,Math.ceil(u/1.2)),m=new We(a,u,2,d);m.rotateX(-Math.PI/2);const g=m.attributes.position,M=new L().addVectors(l,c).multiplyScalar(.5);for(let x=0;x<g.count;x++){const S=g.getX(x),y=g.getZ(x),A=Math.atan2(h.x,h.z),T=Math.cos(A),R=Math.sin(A),v=M.x+(S*T+y*R),b=M.z+(-S*R+y*T),z=t.getHeightAt(v,b)+.035;g.setY(x,z-t.getHeightAt(M.x,M.z))}m.computeVertexNormals();const p=new P(m,n),f=t.getHeightAt(M.x,M.z);p.position.set(M.x,f,M.z),p.rotation.y=Math.atan2(h.x,h.z),p.receiveShadow=!0,e.add(p)}return e}}class um{mesh;group;waterMesh;width=190;depth=190;segments=100;constructor(t){this.group=new bt;const e=new We(this.width,this.depth,this.segments,this.segments);e.rotateX(-Math.PI/2);const n=e.attributes.position;for(let l=0;l<n.count;l++){const c=n.getX(l),h=n.getZ(l),u=this.calculateHeight(c,h);n.setY(l,u)}e.computeVertexNormals();const i=Ot.createSteppeGroundTexture(),a=new ht({map:i,roughness:.85,metalness:.05,flatShading:!0});this.mesh=new P(e,a),this.mesh.receiveShadow=!0,this.group.add(this.mesh);const r=new We(28,36,16,16);r.rotateX(-Math.PI/2);const o=Ot.getWaterMaterial();this.waterMesh=new P(r,o),this.waterMesh.position.set(38,-2.4,6),this.waterMesh.receiveShadow=!0,this.group.add(this.waterMesh),this.spawnBoulders(),this.spawnGrassTufts(),t.add(this.group)}spawnBoulders(){const t=new ht({map:Ot.createRockTexture(),roughness:.85,flatShading:!0}),e=new Bn(1,1),n=[[34,16,1.8],[44,-2,2.4],[48,22,1.6],[32,-24,2],[28,-6,1.4],[-32,-18,1.6],[-26,-28,2.5],[-16,26,1.5]];for(const[i,a,r]of n){const o=new P(e,t),l=this.calculateHeight(i,a);o.position.set(i,l+r*.35,a),o.scale.set(r*1.3,r*.75,r*1),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*.5),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o)}}spawnGrassTufts(){for(let e=0;e<45;e++){const n=Math.random()*Math.PI*2,i=5+Math.random()*40,a=Math.cos(n)*i,r=Math.sin(n)*i;if(Math.abs(a)<4&&Math.abs(r)<4)continue;const o=ge.createGrassTuft(),l=this.calculateHeight(a,r);o.position.set(a,l,r),o.rotation.y=Math.random()*Math.PI*2;const c=.8+Math.random()*.5;o.scale.set(c,c,c),this.group.add(o)}}calculateHeight(t,e){let n=0;if(e<-25){const a=Math.min(1,(-25-e)/20);n+=a*3.6}if(t>25){const a=Math.min(1,(t-25)/14);n-=a*3,n+=Math.sin(e*.18)*.45}n+=Math.sin(t*.07)*Math.cos(e*.07)*.7;const i=Math.sqrt(t*t+e*e);if(i<24){const a=i/24;n*=a}return n}getHeightAt(t,e){return this.calculateHeight(t,e)}update(t){const e=this.waterMesh.geometry.attributes.position;for(let n=0;n<e.count;n++){const i=e.getX(n),a=e.getY(n),r=Math.sin(t*2+i*.5+a*.4)*.04;e.setZ(n,r)}e.needsUpdate=!0}}class Cs{group;visualGroup;name;isInteractable;pelvis;torso;headGroup;oseledetsLock;leftArmGroup;rightArmGroup;leftLegGroup;rightLegGroup;scabbardGroup;saberGroup;backEquipGroup;markerGroup;isMoving=!1;isAttacking=!1;animTime=0;attackTime=0;targetRotationY=0;constructor(t){this.name=t.name,this.isInteractable=t.isInteractable??!1,this.group=new bt,this.visualGroup=new bt,this.group.add(this.visualGroup),this.pelvis=new bt,this.visualGroup.add(this.pelvis);const e=this.getRolePalette(t.role),n=Ot.getSteelMaterial(),i=Ot.getGoldMaterial(),a=Ot.getLeatherMaterial(),r=new ht({color:15974037,roughness:.65}),o=new ht({color:2234128,roughness:.85}),l=Ot.createFabricTexture(e.coatHex,t.role==="naum"),c=new ht({map:l,roughness:.65,metalness:.05}),h=new vt(.38,.32,.9,10);this.torso=new P(h,c),this.torso.position.y=1.35,this.torso.castShadow=!0,this.torso.receiveShadow=!0,this.pelvis.add(this.torso);const u=new We(.2,.38),d=new ht({color:15658734,roughness:.6}),m=new P(u,d);m.position.set(0,.22,.32),this.torso.add(m);const g=new vt(.02,.02,.16,6);g.rotateZ(Math.PI/2);const M=t.role==="naum"?i:n;for(let _=0;_<4;_++){const U=new P(g,M);U.position.set(0,.12-_*.12,.33),this.torso.add(U)}const p=new ht({color:e.sash,roughness:.35}),f=new vt(.35,.35,.22,12),x=new P(f,p);x.position.y=-.36,this.torso.add(x);const S=new lt(.12,.45,.06),y=new P(S,p);y.position.set(-.32,-.55,.1),y.rotation.z=-.15,this.torso.add(y);const A=new P(new Se(.06,.12,6),i);A.position.set(-.36,-.8,.1),this.torso.add(A),this.headGroup=new bt,this.headGroup.position.y=.68;const T=new vt(.2,.18,.42,10),R=new P(T,r);R.castShadow=!0,this.headGroup.add(R);const v=new Se(.04,.12,4);v.rotateX(-Math.PI/2);const b=new P(v,r);b.position.set(0,.02,.22),this.headGroup.add(b);const z=new vt(.25,.23,.28,10),C=new ht({color:e.hat,roughness:.85}),D=new P(z,C);D.position.y=.26,D.castShadow=!0,this.headGroup.add(D);const k=new fe(.23,8,8,0,Math.PI*2,0,Math.PI/2),G=new ht({color:e.hatTop,roughness:.6}),O=new P(k,G);O.position.y=.38,this.headGroup.add(O),this.oseledetsLock=new bt,this.oseledetsLock.position.set(.18,.24,.05);const H=new vt(.03,.025,.18,5),B=new P(H,o);B.position.y=-.08,B.rotation.z=.2,this.oseledetsLock.add(B);const J=new P(H,o);J.position.set(.05,-.22,0),J.rotation.z=.35,this.oseledetsLock.add(J),this.headGroup.add(this.oseledetsLock);const K=new P(new lt(.22,.07,.1),o);K.position.set(0,-.09,.21),this.headGroup.add(K);const rt=new vt(.025,.01,.18,5);rt.rotateZ(Math.PI/4);const dt=new P(rt,o);dt.position.set(-.16,-.16,.2),this.headGroup.add(dt);const ct=new P(rt,o);ct.rotation.y=Math.PI,ct.position.set(.16,-.16,.2),this.headGroup.add(ct),this.torso.add(this.headGroup);const Nt=new vt(.13,.11,.65,8);this.leftArmGroup=new bt,this.leftArmGroup.position.set(-.46,.32,0);const se=new P(Nt,c);se.position.y=-.28,se.castShadow=!0,this.leftArmGroup.add(se);const ne=new P(new fe(.07,6,6),r);ne.position.y=-.62,this.leftArmGroup.add(ne),this.torso.add(this.leftArmGroup),this.rightArmGroup=new bt,this.rightArmGroup.position.set(.46,.32,0);const Z=new P(Nt,c);Z.position.y=-.28,Z.castShadow=!0,this.rightArmGroup.add(Z);const it=new P(new fe(.07,6,6),r);it.position.y=-.62,this.rightArmGroup.add(it),this.torso.add(this.rightArmGroup),this.saberGroup=new bt,this.saberGroup.position.set(0,-.62,.1);const at=new P(new vt(.026,.028,.2,8),a);this.saberGroup.add(at);const kt=new P(new Bn(.045,0),i);kt.position.y=-.11,this.saberGroup.add(kt);const Rt=new P(new lt(.22,.035,.05),i);Rt.position.y=.11,this.saberGroup.add(Rt);const Pt=new lt(.048,.95,.018),ue=new P(Pt,n);ue.position.set(.06,.6,0),ue.rotation.z=-.12,ue.castShadow=!0,this.saberGroup.add(ue),this.rightArmGroup.add(this.saberGroup),this.scabbardGroup=new bt,this.scabbardGroup.position.set(-.36,-.38,.05),this.scabbardGroup.rotation.z=.35;const Xt=new P(new lt(.06,.9,.03),a);Xt.position.y=-.35,this.scabbardGroup.add(Xt);const Zt=new P(new lt(.065,.1,.035),i);if(Zt.position.y=-.75,this.scabbardGroup.add(Zt),this.torso.add(this.scabbardGroup),this.backEquipGroup=new bt,t.role==="honta"){const _=new P(new Sn(.45,.035,6,12,Math.PI*.9),Ot.getWoodMaterial());_.position.set(0,.1,-.35),_.rotation.y=Math.PI/4,this.backEquipGroup.add(_);const U=new P(new vt(.09,.07,.7,8),a);U.position.set(.18,.1,-.32),U.rotation.z=-.35,this.backEquipGroup.add(U)}else if(t.role==="naum"){const _=new bt;_.position.set(.32,-.4,.1);const U=new P(new vt(.025,.025,.45,6),Ot.getWoodMaterial());_.add(U);const Y=new P(new fe(.09,8,8),i);Y.position.y=.24,_.add(Y),this.torso.add(_)}this.torso.add(this.backEquipGroup);const Jt=new ht({color:e.pants,roughness:.7,metalness:.05});this.leftLegGroup=new bt,this.leftLegGroup.position.set(-.2,.85,0);const Bt=new fe(.24,8,8);Bt.scale(1.1,1.6,1.2);const re=new P(Bt,Jt);re.position.y=-.32,re.castShadow=!0,this.leftLegGroup.add(re);const I=new vt(.11,.09,.45,8),le=new P(I,a);le.position.set(0,-.65,.03),le.castShadow=!0,this.leftLegGroup.add(le);const $t=new P(new lt(.16,.12,.28),a);$t.position.set(0,-.84,.09),$t.castShadow=!0,this.leftLegGroup.add($t),this.pelvis.add(this.leftLegGroup),this.rightLegGroup=new bt,this.rightLegGroup.position.set(.2,.85,0);const Qt=new P(Bt,Jt);Qt.position.y=-.32,Qt.castShadow=!0,this.rightLegGroup.add(Qt);const gt=new P(I,a);gt.position.set(0,-.65,.03),gt.castShadow=!0,this.rightLegGroup.add(gt);const E=new P(new lt(.16,.12,.28),a);E.position.set(0,-.84,.09),E.castShadow=!0,this.rightLegGroup.add(E),this.pelvis.add(this.rightLegGroup)}getRolePalette(t){switch(t){case"naum":return{coatHex:"#801818",pants:2368566,sash:13938487,hat:2039583,hatTop:9051164};case"taras":return{coatHex:"#523f2f",pants:7220268,sash:9072726,hat:4010021,hatTop:5521971};case"honta":return{coatHex:"#2b472e",pants:4010793,sash:11046247,hat:1979169,hatTop:2375720};case"hryts":return{coatHex:"#5f6978",pants:8005672,sash:4739681,hat:2830392,hatTop:5068131};case"player":default:return{coatHex:"#183a66",pants:10036260,sash:14235704,hat:1840914,hatTop:1587814}}}setMarker(t){if(this.markerGroup&&(this.visualGroup.remove(this.markerGroup),this.markerGroup=void 0),t==="none")return;this.markerGroup=new bt,this.markerGroup.position.y=2.8;const e=t==="quest_available"?16763904:16746496,n=new Ws(.24,0);n.scale(.8,1.4,.8);const i=new ht({color:e,emissive:e,emissiveIntensity:.85,metalness:.9,roughness:.15}),a=new P(n,i);this.markerGroup.add(a);const r=new Sn(.26,.02,6,16);r.rotateX(Math.PI/2);const o=new P(r,i);this.markerGroup.add(o),this.visualGroup.add(this.markerGroup)}setFacingDirection(t,e){(Math.abs(t)>.001||Math.abs(e)>.001)&&(this.targetRotationY=Math.atan2(t,e))}triggerAttack(){this.isAttacking=!0,this.attackTime=0}update(t){const e=this.visualGroup.rotation.y;let n=this.targetRotationY-e;for(;n<-Math.PI;)n+=Math.PI*2;for(;n>Math.PI;)n-=Math.PI*2;if(this.visualGroup.rotation.y+=n*Math.min(1,t*16),this.markerGroup&&(this.markerGroup.rotation.y+=t*2.8,this.markerGroup.position.y=2.8+Math.sin(Date.now()*.004)*.14),this.isAttacking){if(this.attackTime+=t*5.5,this.attackTime>=1)this.isAttacking=!1,this.attackTime=0,this.rightArmGroup.rotation.set(0,0,0),this.torso.rotation.y=0;else{const i=Math.sin(this.attackTime*Math.PI);this.rightArmGroup.rotation.x=-Math.PI*.85*i,this.rightArmGroup.rotation.y=-Math.PI*.45*i,this.rightArmGroup.rotation.z=Math.PI*.4*i,this.torso.rotation.y=-.35*i}return}if(this.isMoving){this.animTime+=t*9.5;const i=Math.sin(this.animTime)*.7;this.leftLegGroup.rotation.x=i,this.rightLegGroup.rotation.x=-i,this.leftArmGroup.rotation.x=-i*.75,this.rightArmGroup.rotation.x=i*.75,this.torso.position.y=1.35+Math.abs(Math.sin(this.animTime*2))*.08,this.torso.rotation.z=Math.sin(this.animTime)*.04,this.oseledetsLock&&(this.oseledetsLock.rotation.z=.2+Math.sin(this.animTime*1.5)*.15)}else{this.animTime+=t*2.2;const i=Math.sin(this.animTime)*.025;this.leftLegGroup.rotation.x=kn.lerp(this.leftLegGroup.rotation.x,0,t*8),this.rightLegGroup.rotation.x=kn.lerp(this.rightLegGroup.rotation.x,0,t*8),this.leftArmGroup.rotation.x=kn.lerp(this.leftArmGroup.rotation.x,0,t*8),this.rightArmGroup.rotation.x=kn.lerp(this.rightArmGroup.rotation.x,0,t*8),this.torso.position.y=1.35+i,this.torso.rotation.z=kn.lerp(this.torso.rotation.z,0,t*8),this.oseledetsLock&&(this.oseledetsLock.rotation.z=.2+Math.sin(this.animTime)*.05)}}}class fm{scene;campfireEmbers;emberPositions;emberVelocities;emberLifes;emberCount=80;ambientMotes;motePositions;moteCount=200;constructor(t,e){this.scene=t;const n=new Pe;this.emberPositions=new Float32Array(this.emberCount*3),this.emberVelocities=new Float32Array(this.emberCount*3),this.emberLifes=new Float32Array(this.emberCount);for(let M=0;M<this.emberCount;M++)this.resetEmber(M,e),this.emberLifes[M]=Math.random();n.setAttribute("position",new Ke(this.emberPositions,3));const i=document.createElement("canvas");i.width=16,i.height=16;const a=i.getContext("2d"),r=a.createRadialGradient(8,8,1,8,8,8);r.addColorStop(0,"rgba(255, 180, 50, 1)"),r.addColorStop(.4,"rgba(255, 70, 0, 0.8)"),r.addColorStop(1,"rgba(255, 0, 0, 0)"),a.fillStyle=r,a.fillRect(0,0,16,16);const o=new $e(i),l=new gr({size:.35,map:o,transparent:!0,blending:Ns,depthWrite:!1});this.campfireEmbers=new fo(n,l),this.scene.add(this.campfireEmbers);const c=new Pe;this.motePositions=new Float32Array(this.moteCount*3);for(let M=0;M<this.moteCount;M++)this.motePositions[M*3+0]=(Math.random()-.5)*60,this.motePositions[M*3+1]=Math.random()*8+.5,this.motePositions[M*3+2]=(Math.random()-.5)*60;c.setAttribute("position",new Ke(this.motePositions,3));const h=document.createElement("canvas");h.width=16,h.height=16;const u=h.getContext("2d"),d=u.createRadialGradient(8,8,1,8,8,8);d.addColorStop(0,"rgba(255, 240, 200, 0.8)"),d.addColorStop(1,"rgba(255, 240, 200, 0)"),u.fillStyle=d,u.fillRect(0,0,16,16);const m=new $e(h),g=new gr({size:.2,map:m,transparent:!0,opacity:.5,blending:Ns,depthWrite:!1});this.ambientMotes=new fo(c,g),this.scene.add(this.ambientMotes)}resetEmber(t,e){const n=t*3,i=Math.random()*Math.PI*2,a=Math.random()*.4;this.emberPositions[n+0]=e.x+Math.cos(i)*a,this.emberPositions[n+1]=e.y+.3+Math.random()*.2,this.emberPositions[n+2]=e.z+Math.sin(i)*a,this.emberVelocities[n+0]=(Math.random()-.5)*.4,this.emberVelocities[n+1]=1.2+Math.random()*1.4,this.emberVelocities[n+2]=(Math.random()-.5)*.4,this.emberLifes[t]=1}update(t,e,n){const i=this.campfireEmbers.geometry.attributes.position;for(let c=0;c<this.emberCount;c++){const h=c*3;this.emberLifes[c]-=t*.65,this.emberLifes[c]<=0?this.resetEmber(c,e):(this.emberPositions[h+0]+=(this.emberVelocities[h+0]+Math.sin(Date.now()*.003+c)*.3)*t,this.emberPositions[h+1]+=this.emberVelocities[h+1]*t,this.emberPositions[h+2]+=(this.emberVelocities[h+2]+Math.cos(Date.now()*.003+c)*.3)*t)}i.needsUpdate=!0;const a=n<360||n>1140,r=this.ambientMotes.geometry.attributes.position,o=a?.8:.3;for(let c=0;c<this.moteCount;c++){const h=c*3;this.motePositions[h+0]+=Math.sin(Date.now()*.001+c)*o*t,this.motePositions[h+1]+=Math.cos(Date.now()*.0012+c)*(o*.5)*t,this.motePositions[h+2]+=Math.sin(Date.now()*9e-4+c)*o*t,this.motePositions[h+1]<.2&&(this.motePositions[h+1]=7),this.motePositions[h+1]>8&&(this.motePositions[h+1]=.5)}r.needsUpdate=!0;const l=this.ambientMotes.material;a?(l.color.setRGB(.7,1,.3),l.opacity=.75,l.size=.28):(l.color.setRGB(1,.95,.8),l.opacity=.35,l.size=.18)}}class Ac{listeners=new Map;on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>{this.off(t,e)}}off(t,e){const n=this.listeners.get(t);n&&(n.delete(e),n.size===0&&this.listeners.delete(t))}emit(t,e){const n=this.listeners.get(t);if(n)for(const r of Array.from(n))r(e);const i=t.indexOf(":");if(i!==-1){const r=t.substring(0,i+1)+"*",o=this.listeners.get(r);if(o)for(const l of Array.from(o))l(e)}const a=this.listeners.get("*");if(a)for(const r of Array.from(a))r({event:t,payload:e})}}class nn{static evaluate(t,e){switch(t.t){case"quest":{const n=e.quests[t.id],i=n?n.state:"locked";return Array.isArray(t.state)?t.state.includes(i):i===t.state}case"stage":{const n=e.quests[t.quest];return!!n&&n.state==="active"&&n.stage===t.stage}case"flag":{const n=e.world.flags[t.k];if(t.v===void 0)return!!n;switch(t.op??"eq"){case"eq":return n===t.v;case"ne":return n!==t.v;case"gt":return n>t.v;case"gte":return n>=t.v;case"lt":return n<t.v;case"lte":return n<=t.v;default:return!1}}case"knows":return!!e.world.knowledge[t.k];case"rep":{const n=e.world.rep[t.k]??0;return!(t.min!==void 0&&n<t.min||t.max!==void 0&&n>t.max)}case"item":{const n=e.world.inventory[t.id]??0,i=t.n??1;return n>=i}case"time":{const n=e.world.timeMinutes%1440;return!(t.after!==void 0&&n<t.after||t.before!==void 0&&n>t.before)}case"chapter":return!(t.min!==void 0&&e.world.chapter<t.min||t.max!==void 0&&e.world.chapter>t.max);case"all":return t.conds.every(n=>nn.evaluate(n,e));case"any":return t.conds.some(n=>nn.evaluate(n,e));case"not":return!nn.evaluate(t.cond,e);default:return!1}}static evaluateAll(t,e){return!t||t.length===0?!0:t.every(n=>nn.evaluate(n,e))}static explainFailure(t,e){if(nn.evaluate(t,e))return null;switch(t.t){case"quest":{const n=e.quests[t.id]?.state??"locked";return`Quest '${t.id}' is '${n}', expected '${JSON.stringify(t.state)}'`}case"stage":{const n=e.quests[t.quest]?.stage??"none";return`Quest '${t.quest}' stage is '${n}', expected '${t.stage}'`}case"flag":{const n=e.world.flags[t.k];return`Flag '${t.k}' is '${n}', expected ${t.op??"eq"} '${t.v}'`}case"knows":return`Player does not possess knowledge '${t.k}'`;case"rep":{const n=e.world.rep[t.k]??0;return`Reputation '${t.k}' is ${n}, required range [${t.min??"-inf"}, ${t.max??"+inf"}]`}case"item":{const n=e.world.inventory[t.id]??0;return`Missing item '${t.id}': have ${n}, require ${t.n??1}`}case"all":return`ALL condition failed: (${t.conds.map(i=>nn.explainFailure(i,e)).filter(Boolean).join(" AND ")})`;case"any":return"ANY condition failed: none of the sub-conditions matched";case"not":return"NOT condition failed: sub-condition was true";default:return`Condition of type '${t.t}' failed`}}}class pm{defs=new Map;instances=new Map;world;bus;effectListeners=new Set;journalListeners=new Set;questChangeListeners=new Set;constructor(t,e){this.bus=e??new Ac,this.world={flags:{},knowledge:{},rep:{},timeMinutes:480,chapter:1,inventory:{},...t},this.bus.on("*",({event:n,payload:i})=>{this.handleEvent(n,i)})}registerQuest(t){this.defs.set(t.id,t),this.instances.has(t.id)||this.instances.set(t.id,{id:t.id,state:"locked",stage:t.initial,journal:[]}),this.recheckAvailability()}registerQuests(t){for(const e of t)this.registerQuest(e)}getWorldState(){return this.world}getContext(){const t={};for(const[e,n]of this.instances)t[e]=n;return{world:this.world,quests:t}}getQuest(t){return this.instances.get(t)}getQuestDef(t){return this.defs.get(t)}getAllQuests(){return Array.from(this.instances.values())}onEffect(t){return this.effectListeners.add(t),()=>this.effectListeners.delete(t)}onJournal(t){return this.journalListeners.add(t),()=>this.journalListeners.delete(t)}onQuestChange(t){return this.questChangeListeners.add(t),()=>this.questChangeListeners.delete(t)}recheckAvailability(){const t=this.getContext();for(const[e,n]of this.defs){const i=this.instances.get(e);i.state==="locked"&&nn.evaluateAll(n.availableWhen,t)&&(i.state="available",this.notifyQuestChange(i))}}startQuest(t){const e=this.defs.get(t),n=this.instances.get(t);if(!e||!n||n.state!=="available"&&n.state!=="locked")return!1;n.state="active",n.stage=e.initial;const i=e.stages[e.initial];return i&&(i.objective&&(n.journal.push(i.objective),this.notifyJournal(`[${e.title}] ${i.objective}`)),i.onEnter&&this.applyEffects(i.onEnter)),this.notifyQuestChange(n),this.recheckAvailability(),!0}handleEvent(t,e){let n=!1;const i=this.getContext();for(const[a,r]of Array.from(this.instances.entries())){if(r.state!=="active")continue;const o=this.defs.get(a);if(o){for(const l of o.transitions)if(l.from===r.stage&&l.event===t&&nn.evaluateAll(l.conditions,i)){n=!0,this.executeTransition(o,r,l);break}}}return n}executeTransition(t,e,n){const i=e.stage,a=t.stages[i];if(a?.onExit&&this.applyEffects(a.onExit),n.effects&&this.applyEffects(n.effects),n.to==="done")e.state="done",n.resolution&&(e.resolution=n.resolution,this.world.flags[`${t.id}.resolution`]=n.resolution),this.notifyJournal(`Quest Completed: ${t.title}`);else if(n.to==="failed")e.state="failed",this.notifyJournal(`Quest Failed: ${t.title}`);else{e.stage=n.to;const r=t.stages[n.to];r&&(r.objective&&(e.journal.push(r.objective),this.notifyJournal(`[${t.title}] ${r.objective}`)),r.onEnter&&this.applyEffects(r.onEnter))}this.notifyQuestChange(e),this.recheckAvailability()}applyEffects(t){for(const e of t)this.applyEffect(e)}applyEffect(t){switch(t.t){case"flag":this.world.flags[t.k]=t.v;break;case"knows":this.world.knowledge[t.k]=!0;break;case"rep":this.world.rep[t.k]=(this.world.rep[t.k]??0)+t.d;break;case"repSet":this.world.rep[t.k]=t.v;break;case"give":this.world.inventory[t.id]=(this.world.inventory[t.id]??0)+(t.n??1);break;case"take":{const e=this.world.inventory[t.id]??0;this.world.inventory[t.id]=Math.max(0,e-(t.n??1))}break;case"quest":if(t.op==="start")this.startQuest(t.id);else if(t.op==="advance"&&t.stage){const e=this.instances.get(t.id),n=this.defs.get(t.id);e&&n&&(e.stage=t.stage,this.notifyQuestChange(e))}else if(t.op==="complete"){const e=this.instances.get(t.id);e&&(e.state="done",t.resolution&&(e.resolution=t.resolution,this.world.flags[`${t.id}.resolution`]=t.resolution),this.notifyQuestChange(e))}else if(t.op==="fail"){const e=this.instances.get(t.id);e&&(e.state="failed",this.notifyQuestChange(e))}break;case"journal":this.notifyJournal(t.entry);break}for(const e of Array.from(this.effectListeners))e(t)}notifyJournal(t){for(const e of Array.from(this.journalListeners))e(t)}notifyQuestChange(t){for(const e of Array.from(this.questChangeListeners))e(t)}}class mm{trees=new Map;questManager;bus;visitedNodes=new Set;usedChoices=new Set;constructor(t,e){this.questManager=t,this.bus=e}registerTree(t){this.trees.set(t.npc,t)}registerTrees(t){for(const e of t)this.registerTree(e)}startConversation(t){const e=this.trees.get(t);if(!e)return null;const n=this.questManager.getContext();let i=null;for(const a of e.greetings)if(nn.evaluateAll(a.conditions,n)){i=a;break}return i||(i={id:`${t}.default_greeting`,npc:t,text:"Greetings, Cossack.",choices:[{text:"Goodbye.",goto:"EXIT"}]}),this.processNode(i,e)}selectChoice(t,e,n){const i=this.trees.get(t);if(!i)return{node:null,choices:[],isExit:!0};const a=i.nodes[e]||i.greetings.find(u=>u.id===e);if(!a)return{node:null,choices:[],isExit:!0};const o=this.filterChoices(a.choices)[n];if(!o)return{node:null,choices:[],isExit:!0};const l=`${a.id}__choice_${n}__${o.text}`;o.once&&this.usedChoices.add(l),o.effects&&this.questManager.applyEffects(o.effects);const c=o.id?`dialog:${o.id}`:`dialog:${a.id}.${n}`;if(this.bus.emit(c,{npc:t,choice:o}),o.goto==="EXIT"||!o.goto)return{node:null,choices:[],isExit:!0};if(o.goto==="TRADE"||o.goto==="TRAIN")return{node:null,choices:[],isExit:!1,specialAction:o.goto};const h=i.nodes[o.goto];return h?this.processNode(h,i):{node:null,choices:[],isExit:!0}}processNode(t,e){this.visitedNodes.add(t.id),t.effects&&this.questManager.applyEffects(t.effects);const n=this.filterChoices(t.choices);return{node:t,choices:n,isExit:!1}}filterChoices(t){const e=this.questManager.getContext();return t.filter((n,i)=>{const a=`${n.text}_${i}`;return n.once&&this.usedChoices.has(a)?!1:nn.evaluateAll(n.conditions,e)})}isNodeVisited(t){return this.visitedNodes.has(t)}}class yi{group;visualGroup;kind;name;body;head;legs=[];tail;animTime=0;isGrazing=!1;isHopping=!1;isDead=!1;flashTimer=0;origMats=new Map;constructor(t,e){this.kind=t,this.name=e??(t==="wolf"?"Steppe Wolf":t==="saiga"?"Old Saiga":t==="sheep"?"Steppe Sheep":t==="rabbit"?"Steppe Hare":"Shapeshifter"),this.group=new bt,this.visualGroup=new bt,this.group.add(this.visualGroup),t==="wolf"?this.buildWolf():t==="saiga"?this.buildSaiga():t==="sheep"?this.buildSheep():t==="rabbit"?this.buildRabbit():this.buildShapeshifter()}buildWolf(){const t=new ht({color:4735547,roughness:.85}),e=new ht({color:7234908,roughness:.85}),n=new ht({color:16763904,emissive:11171584,emissiveIntensity:.5}),i=new vt(.32,.28,.7,8);i.rotateX(Math.PI/2),this.body=new P(i,t),this.body.position.y=.7,this.body.castShadow=!0,this.visualGroup.add(this.body);const a=new fe(.28,8,8);a.scale(.9,1.1,1.2);const r=new P(a,t);r.position.set(0,.02,-.38),this.body.add(r);const o=new Se(.42,.5,7);o.rotateX(Math.PI/3);const l=new P(o,e);l.position.set(0,.24,.38),this.body.add(l),this.head=new bt,this.head.position.set(0,.42,.58);const c=new lt(.3,.28,.32),h=new P(c,t);h.castShadow=!0,this.head.add(h);const u=new vt(.1,.16,.32,6);u.rotateX(Math.PI/2);const d=new P(u,t);d.position.set(0,-.05,.26),this.head.add(d);const m=new P(new fe(.035,6,6),n);m.position.set(-.1,.06,.16),this.head.add(m);const g=new P(new fe(.035,6,6),n);g.position.set(.1,.06,.16),this.head.add(g);const M=new Se(.07,.22,4),p=new P(M,t);p.position.set(-.11,.2,-.04),p.rotation.z=-.15,this.head.add(p);const f=new P(M,t);f.position.set(.11,.2,-.04),f.rotation.z=.15,this.head.add(f),this.body.add(this.head);const x=new vt(.09,.07,.35,6),S=new vt(.06,.05,.35,6),y=new lt(.1,.06,.15),A=[[-.2,.48,.32],[.2,.48,.32],[-.2,.48,-.38],[.2,.48,-.38]];for(const[v,b,z]of A){const C=new bt;C.position.set(v,b,z);const D=new P(x,t);D.position.y=-.16,D.castShadow=!0,C.add(D);const k=new P(S,t);k.position.y=-.42,k.castShadow=!0,C.add(k);const G=new P(y,t);G.position.set(0,-.58,.04),C.add(G),this.visualGroup.add(C),this.legs.push(C)}this.tail=new bt,this.tail.position.set(0,.15,-.55);const T=new vt(.05,.12,.5,6);T.rotateX(-Math.PI/3.5);const R=new P(T,e);R.position.set(0,-.18,-.18),this.tail.add(R),this.body.add(this.tail)}buildSaiga(){const t=new ht({color:12887160,roughness:.75}),e=new ht({color:15261649,roughness:.75}),n=new ht({color:16117468,roughness:.35,metalness:.15}),i=new ht({color:3023641,roughness:.8}),a=new vt(.28,.25,.9,8);a.rotateX(Math.PI/2),this.body=new P(a,t),this.body.position.y=.9,this.body.castShadow=!0,this.visualGroup.add(this.body);const r=new P(new lt(.35,.2,.7),e);r.position.y=-.15,this.body.add(r);const o=new vt(.14,.18,.55,6);o.rotateX(Math.PI/3.5);const l=new P(o,t);l.position.set(0,.32,.45),this.body.add(l),this.head=new bt,this.head.position.set(0,.58,.7);const c=new P(new lt(.24,.26,.3),t);this.head.add(c);const h=new P(new fe(.15,8,8),i);h.scale.set(.85,1.2,1.3),h.position.set(0,-.12,.22),this.head.add(h);for(let g=-1;g<=1;g+=2){const M=new bt;M.position.set(g*.09,.22,-.05);const p=new P(new vt(.04,.05,.25,6),n);p.rotation.x=-.2,p.rotation.z=g*.15,p.position.y=.12,M.add(p);const f=new P(new Se(.038,.4,6),n);f.position.set(g*.04,.4,-.06),f.rotation.x=.1,f.rotation.z=g*-.1,M.add(f),this.head.add(M)}this.body.add(this.head);const u=new vt(.045,.035,.85,6),d=new lt(.07,.08,.1),m=[[-.18,.65,.38],[.18,.65,.38],[-.18,.65,-.38],[.18,.65,-.38]];for(const[g,M,p]of m){const f=new bt;f.position.set(g,M,p);const x=new P(u,t);x.position.y=-.4,x.castShadow=!0,f.add(x);const S=new P(d,i);S.position.set(0,-.82,.02),f.add(S),this.visualGroup.add(f),this.legs.push(f)}}buildShapeshifter(){const t=new ht({color:1840916,roughness:.9,metalness:.1}),e=new ht({color:3352610,roughness:.95}),n=new ht({color:16711680,emissive:16711680,emissiveIntensity:1.8}),i=new ht({color:16777215,roughness:.3}),a=new lt(1,.95,.8);this.body=new P(a,t),this.body.position.y=1.45,this.body.rotation.x=.32,this.body.castShadow=!0,this.visualGroup.add(this.body);for(let g=0;g<5;g++){const M=new P(new Se(.14,.5,4),e);M.position.set(0,.28+g*.06,-.42),M.rotation.x=-Math.PI/4,this.body.add(M)}this.head=new bt,this.head.position.set(0,.55,.48);const r=new P(new lt(.52,.48,.55),t);r.castShadow=!0,this.head.add(r);const o=new P(new lt(.3,.26,.42),t);o.position.set(0,-.1,.36),this.head.add(o);const l=new P(new fe(.06,6,6),n);l.position.set(-.16,.1,.3),this.head.add(l);const c=new P(new fe(.06,6,6),n);c.position.set(.16,.1,.3),this.head.add(c);const h=new Bs(16711680,1.2,5,2);h.position.set(0,.1,.4),this.head.add(h);for(const g of[-.09,.09]){const M=new P(new Se(.035,.16,4),i);M.position.set(g,-.25,.48),M.rotation.x=Math.PI,this.head.add(M)}this.body.add(this.head);const u=new vt(.16,.13,.9,8),d=new lt(.24,.12,.3),m=[[-.52,1.15,.35],[.52,1.15,.35],[-.42,.95,-.42],[.42,.95,-.42]];for(const[g,M,p]of m){const f=new bt;f.position.set(g,M,p);const x=new P(u,t);x.position.y=-.45,x.castShadow=!0,f.add(x);const S=new P(d,t);S.position.set(0,-.9,.08),f.add(S),this.visualGroup.add(f),this.legs.push(f)}}buildSheep(){const t=new ht({color:15065043,roughness:.95,flatShading:!0}),e=new ht({color:3024674,roughness:.8}),n=new fe(.38,8,8);n.scale(1.1,1,1.4),this.body=new P(n,t),this.body.position.y=.58,this.body.castShadow=!0,this.visualGroup.add(this.body),this.head=new bt,this.head.position.set(0,.28,.45);const i=new P(new lt(.22,.22,.28),e);this.head.add(i);const a=new lt(.12,.04,.06),r=new P(a,e);r.position.set(-.14,.04,0),r.rotation.z=-.3,this.head.add(r);const o=new P(a,e);o.position.set(.14,.04,0),o.rotation.z=.3,this.head.add(o),this.body.add(this.head);const l=new vt(.045,.04,.45,6),c=[[-.18,.4,.3],[.18,.4,.3],[-.18,.4,-.3],[.18,.4,-.3]];for(const[h,u,d]of c){const m=new bt;m.position.set(h,u,d);const g=new P(l,e);g.position.y=-.22,g.castShadow=!0,m.add(g),this.visualGroup.add(m),this.legs.push(m)}}buildRabbit(){const t=new ht({color:10257253,roughness:.8}),e=new ht({color:15658734,roughness:.9}),n=new ht({color:2234385,roughness:.5}),i=new fe(.18,8,8);i.scale(.9,.9,1.3),this.body=new P(i,t),this.body.position.y=.22,this.body.castShadow=!0,this.visualGroup.add(this.body),this.head=new bt,this.head.position.set(0,.14,.16);const a=new P(new fe(.1,7,7),t);this.head.add(a);const r=new lt(.04,.2,.02),o=new P(r,t);o.position.set(-.04,.14,-.02),o.rotation.z=-.15,this.head.add(o);const l=new P(r,t);l.position.set(.04,.14,-.02),l.rotation.z=.15,this.head.add(l);const c=new P(new fe(.02,5,5),n);c.position.set(-.07,.02,.06),this.head.add(c);const h=new P(new fe(.02,5,5),n);h.position.set(.07,.02,.06),this.head.add(h),this.body.add(this.head);const u=new P(new fe(.05,6,6),e);u.position.set(0,.05,-.22),this.body.add(u);const d=new fe(.08,6,6);d.scale(.8,1.2,1.2);for(const m of[-.09,.09]){const g=new P(d,t);g.position.set(m,.14,-.08),g.castShadow=!0,this.visualGroup.add(g),this.legs.push(g)}}setFacingDirection(t,e){if(this.isDead)return;const n=Math.atan2(t,e);this.visualGroup.rotation.y=n}flashHurt(){this.flashTimer=.18;const t=new Fr({color:16720418});this.visualGroup.traverse(e=>{if(e.isMesh){const n=e;this.origMats.has(n)||this.origMats.set(n,n.material),n.material=t}})}setDead(){this.isDead||(this.isDead=!0,this.visualGroup.rotation.z=Math.PI/2,this.visualGroup.position.y=-.3,this.visualGroup.position.x=.2)}update(t){if(this.flashTimer>0&&(this.flashTimer-=t,this.flashTimer<=0&&(this.origMats.forEach((e,n)=>{n.material=e}),this.origMats.clear())),!this.isDead){if(this.animTime+=t*7.5,this.kind==="sheep"){const e=Math.sin(this.animTime*.8)*.25;if(this.head.rotation.x=.4+e,this.isGrazing){const n=Math.sin(this.animTime*.6)*.25;this.legs[0].rotation.x=n,this.legs[1].rotation.x=-n}return}if(this.kind==="rabbit"){if(this.isHopping){const e=Math.abs(Math.sin(this.animTime*1.5));this.body.position.y=.22+e*.25,this.head.rotation.x=-e*.3}else this.head.rotation.y=Math.sin(this.animTime*.3)*.15;return}if(this.legs.length===4){const e=Math.sin(this.animTime)*.55;this.legs[0].rotation.x=e,this.legs[1].rotation.x=-e,this.legs[2].rotation.x=-e,this.legs[3].rotation.x=e}this.tail&&(this.tail.rotation.y=Math.sin(this.animTime*.8)*.35),this.head&&(this.head.rotation.z=Math.sin(this.animTime*.5)*.06)}}}class gm{schedules=new Map;npcs=new Map;collision;terrain;walkSpeed=2.4;constructor(t,e){this.collision=t,this.terrain=e,this.setupDefaultSchedules()}registerNpc(t,e){this.npcs.set(t,e)}setupDefaultSchedules(){this.schedules.set("taras_chub",{npcId:"taras_chub",blocks:[{startMin:360,endMin:660,activity:"work",waypoint:{x:-15,z:8},facingYaw:0,activityDesc:"Tending the sheep pen"},{startMin:660,endMin:1080,activity:"patrol",waypoint:{x:-18,z:14},facingYaw:Math.PI/4,activityDesc:"Inspecting pasture border for wolf tracks"},{startMin:1080,endMin:1350,activity:"sit_fire",waypoint:{x:-2.8,z:-2.2},facingYaw:Math.PI/2,activityDesc:"Warming hands by the campfire"},{startMin:1350,endMin:360,activity:"sleep",waypoint:{x:-12,z:12},facingYaw:Math.PI,activityDesc:"Sleeping in shepherd lean-to"}]}),this.schedules.set("honta",{npcId:"honta",blocks:[{startMin:390,endMin:720,activity:"work",waypoint:{x:13,z:-9},facingYaw:-Math.PI/2,activityDesc:"Shaving yew bow staves"},{startMin:720,endMin:1050,activity:"work",waypoint:{x:18,z:-11},facingYaw:0,activityDesc:"Fletching arrows and testing bowstrings"},{startMin:1050,endMin:1380,activity:"sit_fire",waypoint:{x:2.8,z:-1.8},facingYaw:-Math.PI/2,activityDesc:"Drinking horilka and telling hunting tales"},{startMin:1380,endMin:390,activity:"sleep",waypoint:{x:16,z:-14},facingYaw:0,activityDesc:"Sleeping inside workshop"}]}),this.schedules.set("naum_lysenko",{npcId:"naum_lysenko",blocks:[{startMin:420,endMin:780,activity:"stand",waypoint:{x:-6,z:-11},facingYaw:0,activityDesc:"Reviewing palanka scouting reports on the porch"},{startMin:780,endMin:1080,activity:"patrol",waypoint:{x:-8,z:-22},facingYaw:Math.PI/3,activityDesc:"Inspecting northern palisade battlements"},{startMin:1080,endMin:1320,activity:"sit_fire",waypoint:{x:0,z:-4.2},facingYaw:0,activityDesc:"Smoking his lulka pipe by the campfire"},{startMin:1320,endMin:420,activity:"sleep",waypoint:{x:-6,z:-16},facingYaw:0,activityDesc:"Sleeping in headquarters"}]})}update(t,e,n){const i=Math.floor(t%1440);for(const[a,r]of this.npcs){if(n===a){r.isMoving=!1;continue}const o=this.schedules.get(a);if(!o)continue;const l=this.findActiveBlock(o,i);if(!l)continue;const c=r.group.position,h=l.waypoint,u=h.x-c.x,d=h.z-c.z,m=Math.sqrt(u*u+d*d);if(m>.45){const g=Math.min(m,this.walkSpeed*e),M=u/m,p=d/m,f=this.collision.resolveMovement(c.x,c.z,M*g,p*g,.4);c.x=f.x,c.z=f.z,c.y=this.terrain.getHeightAt(c.x,c.z),r.isMoving=!0,r.setFacingDirection(M,p)}else r.isMoving=!1,r.setFacingDirection(Math.sin(l.facingYaw),Math.cos(l.facingYaw))}}findActiveBlock(t,e){for(const n of t.blocks)if(n.startMin<n.endMin){if(e>=n.startMin&&e<n.endMin)return n}else if(e>=n.startMin||e<n.endMin)return n;return t.blocks[0]??null}}class _m{scene;terrain;lighting;questManager;dialogueRunner;collision;combat;scheduler;npcs=new Map;mobs=new Map;markers=new Map;sheepList=[];rabbitList=[];interactingNpcId=null;registeredLocations={camp_center:new L(0,0,0),pasture:new L(-18,0,14),sheep_pen:new L(-15,0,8),eastern_ravine:new L(42,-2.5,8),watering_hole:new L(38,-2.8,-18),naum_kurin:new L(-6,0,-11),honta_workshop:new L(13,0,-9),pechyborshch_hut:new L(14,0,10),ostap_hut:new L(5,0,35)};constructor(t,e,n,i,a,r,o){this.scene=t,this.terrain=e,this.lighting=n,this.questManager=i,this.dialogueRunner=a,this.collision=r,this.combat=o,this.scheduler=new gm(this.collision,this.terrain),this.questManager.onEffect(this.handleEffect.bind(this)),this.questManager.onQuestChange(()=>this.updateNpcMarkers()),this.spawnFauna()}registerNpc(t,e,n){if(this.npcs.set(t,e),this.scheduler.registerNpc(t,e),n&&this.registeredLocations[n]){const i=this.registeredLocations[n];e.group.position.copy(i),e.group.position.y=this.terrain.getHeightAt(i.x,i.z)}this.scene.add(e.group),this.updateNpcMarkers()}spawnFauna(){const t=[[-16,7],[-14,9],[-15.5,10],[-13.5,6.5]];for(const[i,a]of t){const r=new yi("sheep","Steppe Sheep");r.isGrazing=!0,r.group.position.set(i,this.terrain.getHeightAt(i,a),a),r.visualGroup.rotation.y=Math.random()*Math.PI*2,this.scene.add(r.group),this.sheepList.push(r)}const e=[[12,16],[-8,22],[28,4],[32,12],[-5,-8]];for(const[i,a]of e){const r=new yi("rabbit","Steppe Hare");r.isHopping=!0,r.group.position.set(i,this.terrain.getHeightAt(i,a),a),this.scene.add(r.group),this.rabbitList.push({creature:r,vx:(Math.random()-.5)*1.8,vz:(Math.random()-.5)*1.8,timer:Math.random()*4})}const n=[[38,12],[42,6]];for(let i=0;i<n.length;i++){const[a,r]=n[i],o=new yi("wolf","Ravine Wolf"),l=this.terrain.getHeightAt(a,r);o.group.position.set(a,l,r),this.scene.add(o.group);const c=`wild_wolf_${i}`;this.mobs.set(c,o),this.combat.registerMob(c,o,"wolf",{maxHp:40,damage:10,xpReward:35})}}handleEffect(t){switch(t.t){case"spawn":this.handleSpawn(t.table,t.at,t.tag);break;case"despawn":this.handleDespawn(t.tag);break;case"marker":t.op==="add"&&t.at?this.addMarker(t.id,t.at,t.label??t.id):t.op==="remove"&&this.removeMarker(t.id);break;case"routine":console.log(`[WorldDirector] NPC ${t.npc} routine changed to ${t.routine}`);break}}handleSpawn(t,e,n){const i=this.registeredLocations[e]??new L(0,0,0);if(t==="wolves_pasture")for(let a=0;a<3;a++){const r=new yi("wolf","Pasture Wolf"),o=(Math.random()-.5)*6,l=(Math.random()-.5)*6,c=i.x+o,h=i.z+l;r.group.position.set(c,this.terrain.getHeightAt(c,h),h),this.scene.add(r.group);const u=n?`${n}_${a}`:`wolf_${Date.now()}_${a}`;this.mobs.set(u,r),this.combat.registerMob(u,r,"wolf")}else if(t==="old_saiga_steppe"){const a=new yi("saiga","Horned Old Saiga");a.group.position.set(i.x,this.terrain.getHeightAt(i.x,i.z),i.z),this.scene.add(a.group);const r=n??"saiga_target";this.mobs.set(r,a),this.combat.registerMob(r,a,"saiga")}else if(t==="shapeshifter_night"){const a=new yi("shapeshifter","Shapeshifter (Vovkulaka)");a.group.position.set(i.x,this.terrain.getHeightAt(i.x,i.z),i.z),this.scene.add(a.group);const r=n??"shapeshifter_boss";this.mobs.set(r,a),this.combat.registerMob(r,a,"shapeshifter")}}handleDespawn(t){for(const[e,n]of Array.from(this.mobs.entries()))e.startsWith(t)&&(this.scene.remove(n.group),this.mobs.delete(e),this.combat.removeMob(e))}addMarker(t,e,n){this.removeMarker(t);const i=this.registeredLocations[e]??new L(0,0,0),a=new bt,r=new Ws(.5,0);r.scale(.8,1.6,.8);const o=new ht({color:16724770,emissive:10031360,emissiveIntensity:.8,roughness:.2}),l=new P(r,o);l.position.y=2.4,a.add(l),a.position.set(i.x,this.terrain.getHeightAt(i.x,i.z)+1.2,i.z),this.scene.add(a),this.markers.set(t,{id:t,mesh:a,label:n})}removeMarker(t){const e=this.markers.get(t);e&&(this.scene.remove(e.mesh),this.markers.delete(t))}updateNpcMarkers(){const t=this.questManager.getAllQuests();for(const[e,n]of this.npcs){let i="none";for(const a of t){const r=this.questManager.getQuestDef(a.id);if(!(!r||r.giver!==e)){if(a.state==="available"){i="quest_available";break}else if(a.state==="active"&&a.stage==="report"){i="quest_turnin";break}}}n.setMarker(i)}}update(t,e){const n=this.questManager.getWorldState();n.timeMinutes=(n.timeMinutes+t*2)%1440,this.lighting.update(n.timeMinutes,t),this.scheduler.update(n.timeMinutes,t,this.interactingNpcId);for(const i of this.npcs.values())i.update(t);for(const i of this.mobs.values())i.update(t);for(const i of this.sheepList)i.update(t);for(const i of this.rabbitList){i.timer-=t;const a=i.creature.group.position;if(a.distanceTo(e)<6){const o=a.x-e.x,l=a.z-e.z,c=Math.sqrt(o*o+l*l)||1;i.vx=o/c*4.5,i.vz=l/c*4.5,i.creature.isHopping=!0}else i.timer<=0&&(i.timer=2+Math.random()*3,Math.random()<.6?(i.vx=(Math.random()-.5)*2,i.vz=(Math.random()-.5)*2,i.creature.isHopping=!0):(i.vx=0,i.vz=0,i.creature.isHopping=!1));(i.vx!==0||i.vz!==0)&&(a.x+=i.vx*t,a.z+=i.vz*t,a.y=this.terrain.getHeightAt(a.x,a.z),i.creature.visualGroup.rotation.y=Math.atan2(i.vx,i.vz)),i.creature.update(t)}for(const i of this.markers.values())i.mesh.rotation.y+=t*2.8,i.mesh.position.y+=Math.sin(Date.now()*.005)*.006}}class vm{character;terrain;director;bus;collision;combat;stats;moveSpeed=8.5;velocity=new L;keys={};nearbyNpcId=null;nearbyNpcName=null;nearbyLootMob=null;isInteracting=!1;isDodging=!1;dodgeTimer=0;dodgeDir=new Yt(0,1);dodgeCooldown=0;constructor(t,e,n,i,a,r){this.character=t,this.terrain=e,this.director=n,this.bus=i,this.collision=a,this.combat=r,this.stats={level:1,xp:0,trainingPoints:10,strength:15,agility:12,intelligence:10,maxHp:65,currentHp:65,weaponSkills:{saber:25,bow:15,musket:5},gold:75},window.addEventListener("keydown",o=>{this.keys[o.key.toLowerCase()]=!0,this.keys[o.code]=!0,(o.code==="KeyQ"||o.key.toLowerCase()==="q"||o.key==="й")&&!this.isInteracting&&this.dodge()}),window.addEventListener("keyup",o=>{this.keys[o.key.toLowerCase()]=!1,this.keys[o.code]=!1})}dodge(){if(!(this.isDodging||this.dodgeCooldown>0))if(this.isDodging=!0,this.dodgeTimer=.28,this.dodgeCooldown=.85,this.velocity.lengthSq()>.1)this.dodgeDir.set(this.velocity.x,this.velocity.z).normalize();else{const t=this.character.visualGroup.rotation.y;this.dodgeDir.set(Math.sin(t),Math.cos(t)).normalize()}}update(t){if(this.dodgeCooldown>0&&(this.dodgeCooldown-=t),this.isInteracting){this.character.isMoving=!1,this.character.update(t);return}if(this.isDodging){this.dodgeTimer-=t;const u=16.5,d=this.character.group.position,m=this.collision.resolveMovement(d.x,d.z,this.dodgeDir.x*u*t,this.dodgeDir.y*u*t,.45);d.x=m.x,d.z=m.z,d.y=this.terrain.getHeightAt(d.x,d.z),this.dodgeTimer<=0&&(this.isDodging=!1),this.character.update(t),this.checkProximities();return}let e=0,n=0;const i=this.keys.w||this.keys.ц||this.keys.KeyW||this.keys.ArrowUp,a=this.keys.s||this.keys.і||this.keys.ы||this.keys.KeyS||this.keys.ArrowDown,r=this.keys.a||this.keys.ф||this.keys.KeyA||this.keys.ArrowLeft,o=this.keys.d||this.keys.в||this.keys.KeyD||this.keys.ArrowRight;i&&(e-=1,n-=1),a&&(e+=1,n+=1),r&&(e-=1,n+=1),o&&(e+=1,n-=1);const l=Math.sqrt(e*e+n*n);l>0?(e/=l,n/=l,this.velocity.set(e*this.moveSpeed,0,n*this.moveSpeed),this.character.isMoving=!0,this.character.setFacingDirection(e,n)):(this.velocity.set(0,0,0),this.character.isMoving=!1);const c=this.character.group.position,h=this.collision.resolveMovement(c.x,c.z,this.velocity.x*t,this.velocity.z*t,.45);c.x=h.x,c.z=h.z,c.y=this.terrain.getHeightAt(c.x,c.z),this.character.update(t),this.checkProximities()}checkProximities(){const t=this.character.group.position;let e=null,n=null,i=3.5;for(const[a,r]of this.director.npcs){const o=t.distanceTo(r.group.position);o<i&&(i=o,e=a,n=r.name)}this.nearbyNpcId=e,this.nearbyNpcName=n,this.nearbyLootMob=this.combat.getNearbyLootableCorpse(t)}takeDamage(t){if(this.isDodging)return;const n=Math.max(2,t-5);this.stats.currentHp=Math.max(0,this.stats.currentHp-n),this.stats.currentHp<=0&&(this.stats.currentHp=30,this.character.group.position.set(0,0,4),this.character.group.position.y=this.terrain.getHeightAt(0,4))}attack(){this.character.triggerAttack();const t=this.combat.playerAttack(this.stats,this.character.group.position);return t.hit?{hit:!0,mobName:t.mob?.name,damage:t.damage,isCrit:t.isCrit,killed:t.killed}:{hit:!1}}loot(t){const e=this.combat.lootNearbyCorpse(this.character.group.position,t);return e.looted&&(this.nearbyLootMob=null),e}}class xm{colliders=[];addBox(t,e,n,i){this.colliders.push({type:"box",minX:Math.min(t,e),maxX:Math.max(t,e),minZ:Math.min(n,i),maxZ:Math.max(n,i)})}addCircle(t,e,n){this.colliders.push({type:"circle",x:t,z:e,radius:n})}resolveMovement(t,e,n,i,a=.45){let r=t+n,o=e+i;for(let l=0;l<2;l++)for(const c of this.colliders)if(c.type==="circle"){const h=r-c.x,u=o-c.z,d=h*h+u*u,m=a+c.radius;if(d<m*m){const g=Math.sqrt(d);if(g>1e-4){const M=h/g,p=u/g,f=m-g;r+=M*f,o+=p*f}else r+=m}}else if(c.type==="box"){const h=Math.max(c.minX,Math.min(r,c.maxX)),u=Math.max(c.minZ,Math.min(o,c.maxZ)),d=r-h,m=o-u,g=d*d+m*m;if(g<a*a){const M=Math.sqrt(g);if(M>1e-4){const p=d/M,f=m/M,x=a-M;r+=p*x,o+=f*x}else{const p=Math.abs(r-c.minX),f=Math.abs(c.maxX-r),x=Math.abs(o-c.minZ),S=Math.abs(c.maxZ-o),y=Math.min(p,f,x,S);y===p?r=c.minX-a:y===f?r=c.maxX+a:y===x?o=c.minZ-a:o=c.maxZ+a}}}return r=Math.max(-85,Math.min(85,r)),o=Math.max(-85,Math.min(85,o)),{x:r,z:o}}}class wi{static getXpForNextLevel(t){return t*(t+1)*250}static addXp(t,e){t.xp+=e;let n=!1;for(;t.xp>=this.getXpForNextLevel(t.level);)t.level+=1,t.trainingPoints+=10,t.maxHp+=12,t.currentHp=t.maxHp,n=!0;return{leveledUp:n,newLevel:t.level}}static getMasteryTier(t){return t>=90?"Expert":t>=60?"Master":t>=30?"Fighter":"Beginner"}static getAttackComboLength(t){switch(t){case"Expert":return 5;case"Master":return 4;case"Fighter":return 3;case"Beginner":return 1}}static calculateDamage(t,e,n,i=Math.random){const r=i()*100<t;let o;r?o=e+t-n:o=Math.floor((e+t)/2)-n;const l=i()<.5?2:3;return{damage:Math.max(l,o),isCrit:r}}static trainSkill(t,e,n=5,i=50){return t.trainingPoints<n||t.gold<i?!1:(t.trainingPoints-=n,t.gold-=i,e==="saber"||e==="bow"||e==="musket"?t.weaponSkills[e]=Math.min(100,t.weaponSkills[e]+n):(t[e]+=n,e==="strength"&&(t.maxHp+=n*2)),!0)}}const Gn={cossack_saber:{id:"cossack_saber",name:"Damascus Cossack Saber",category:"weapon",description:"Folded steel blade with a blood groove. Well-balanced for fast sweeping cuts.",value:120,stackable:!1,damage:28},hunting_bow:{id:"hunting_bow",name:"Steppe Composite Bow",category:"weapon",description:"Laminated horn and seasoned ash bow crafted by master Honta.",value:150,stackable:!1,damage:32},arrow:{id:"arrow",name:"Steppe Hunting Arrow",category:"ammo",description:"Forged iron bodkin arrow fletched with goose feathers.",value:2,stackable:!0},poison_arrow:{id:"poison_arrow",name:"Viper-Poison Arrow",category:"ammo",description:"Tipped with steppe adder venom. Drops beasts before they can flee.",value:15,stackable:!0,damage:55},old_arrow:{id:"old_arrow",name:"Yatsko's Marked Arrow",category:"quest",description:"Bearing split goose feathers and copper wire wraps. Crucial forensic evidence.",value:10,stackable:!1},salo:{id:"salo",name:"Salted Cossack Salo",category:"consumable",description:"Cured pork fatback heavily rubbed with garlic and steppe herbs. Restores 25 HP.",value:8,stackable:!0,healHp:25},dried_meat:{id:"dried_meat",name:"Dried Saiga Biltong",category:"consumable",description:"Chewy, sun-dried strips of seasoned steppe game. Restores 15 HP.",value:5,stackable:!0,healHp:15},steppe_bread:{id:"steppe_bread",name:"Hearth Rye Bread",category:"consumable",description:"Dense rye loaf baked on embers. Restores 12 HP.",value:4,stackable:!0,healHp:12},bog_root:{id:"bog_root",name:"Swamp Bog Root",category:"consumable",description:"Pungent fibrous root harvested from the Great Meadow. Restores 40 HP.",value:20,stackable:!0,healHp:40},horilka:{id:"horilka",name:"Pepper Horilka Flask",category:"consumable",description:"Strong spirit infused with red steppe peppers. Bolsters the spirit and restores 20 HP.",value:14,stackable:!0,healHp:20},wolf_pelt:{id:"wolf_pelt",name:"Steppe Wolf Pelt",category:"trophy",description:"Thick grey fur taken from a pasture wolf. Valuable to tanners and kurinnyis.",value:22,stackable:!0},wolf_fang:{id:"wolf_fang",name:"Wolf Fang",category:"trophy",description:"Sharp canine tooth. Used in charms or sold to merchants.",value:8,stackable:!0},raw_meat:{id:"raw_meat",name:"Raw Beast Meat",category:"trophy",description:"Fresh game meat. Can be cooked at campfires or sold.",value:4,stackable:!0},saiga_horns:{id:"saiga_horns",name:"Curved Saiga Horns",category:"trophy",description:"Translucent amber-colored horns of an elder male saiga.",value:45,stackable:!0},saiga_carcass:{id:"saiga_carcass",name:"Old Saiga Trophy Carcass",category:"quest",description:"The slain trophy saiga required by Kurinnyi Naum to prove your hunting prowess.",value:60,stackable:!1},paturnakh_ring:{id:"paturnakh_ring",name:"Paturnakh's Signet Ring",category:"quest",description:"Silver ring bearing the private seal of the Koshovyi Ataman. Proves the Turkish invasion plot.",value:250,stackable:!1},bog_amulet:{id:"bog_amulet",name:"Bog Shaman Amulet",category:"quest",description:"Carved river stone etched with Cossack occult runes against shapeshifters.",value:80,stackable:!1}};class Mm{mobs=new Map;scene;terrain;collision;bus;activeTarget=null;floatingTexts=[];targetHudEl=null;floatingTextContainer=null;constructor(t,e,n,i){this.scene=t,this.terrain=e,this.collision=n,this.bus=i,this.createDomElements()}createDomElements(){this.targetHudEl=document.createElement("div"),this.targetHudEl.id="target-hud",this.targetHudEl.style.display="none",document.body.appendChild(this.targetHudEl),this.floatingTextContainer=document.createElement("div"),this.floatingTextContainer.id="floating-text-container",this.floatingTextContainer.style.position="absolute",this.floatingTextContainer.style.top="0",this.floatingTextContainer.style.left="0",this.floatingTextContainer.style.width="100%",this.floatingTextContainer.style.height="100%",this.floatingTextContainer.style.pointerEvents="none",this.floatingTextContainer.style.zIndex="90",document.body.appendChild(this.floatingTextContainer)}registerMob(t,e,n,i){const a=n==="shapeshifter"?180:n==="wolf"?45:60,r=n==="shapeshifter"?14:n==="wolf"?4:2,o=n==="shapeshifter"?26:n==="wolf"?12:6,l=n==="shapeshifter"?6.2:n==="wolf"?5.6:6.8,c=n==="shapeshifter"?250:n==="wolf"?45:60;let h={};n==="wolf"?h={wolf_pelt:1,wolf_fang:1,raw_meat:2}:n==="saiga"?h={saiga_horns:1,saiga_carcass:1,raw_meat:3}:n==="shapeshifter"&&(h={bog_amulet:1,wolf_pelt:2,raw_meat:4});const u={id:t,name:e.name,kind:n,creature:e,hp:i?.maxHp??a,maxHp:i?.maxHp??a,armor:i?.armor??r,damage:i?.damage??o,speed:i?.speed??l,detectionRadius:n==="saiga"?14:10.5,attackRadius:2.2,state:"idle",anchorPos:e.group.position.clone(),loot:i?.loot??h,isLooted:!1,attackCooldown:0,staggerTimer:0,warningTimer:0,xpReward:i?.xpReward??c,patrolAngle:Math.random()*Math.PI*2};this.mobs.set(t,u)}removeMob(t){const e=this.mobs.get(t);e&&(this.scene.remove(e.creature.group),this.mobs.delete(t),this.activeTarget?.id===t&&(this.activeTarget=null))}update(t,e,n,i){let a=null,r=14;for(const o of this.mobs.values()){if(o.state==="dead")continue;const c=o.creature.group.position.distanceTo(e);switch(c<r&&(r=c,a=o),o.attackCooldown>0&&(o.attackCooldown-=t),o.staggerTimer>0&&(o.staggerTimer-=t),o.warningTimer>0&&(o.warningTimer-=t),o.state){case"idle":this.updateIdleState(o,t,c);break;case"warning":this.updateWarningState(o,t,c,e);break;case"chase":this.updateChaseState(o,t,c,e);break;case"attack":this.updateAttackState(o,t,c,e,n,i);break;case"stagger":o.staggerTimer<=0&&(o.state="chase");break}o.creature.update(t)}this.activeTarget=a,this.updateTargetHud(),this.updateFloatingTexts(t)}updateIdleState(t,e,n){if(n<t.detectionRadius){t.kind==="saiga"?t.state="chase":(t.state="warning",t.warningTimer=1.4);return}t.patrolAngle+=e*.4;const i=3.5,a=t.anchorPos.x+Math.cos(t.patrolAngle)*i,r=t.anchorPos.z+Math.sin(t.patrolAngle)*i,o=t.creature.group.position,l=a-o.x,c=r-o.z,h=Math.sqrt(l*l+c*c);if(h>.2){const u=Math.min(h,1.2*e);o.x+=l/h*u,o.z+=c/h*u,o.y=this.terrain.getHeightAt(o.x,o.z),t.creature.setFacingDirection(l,c)}}updateWarningState(t,e,n,i){const a=t.creature.group.position;t.creature.setFacingDirection(i.x-a.x,i.z-a.z),n<7||t.warningTimer<=0?t.state="chase":n>t.detectionRadius+2&&(t.state="idle")}updateChaseState(t,e,n,i){const a=t.creature.group.position;if(t.kind==="saiga"){const h=a.x-i.x,u=a.z-i.z,d=Math.sqrt(h*h+u*u)||1;a.x+=h/d*t.speed*e,a.z+=u/d*t.speed*e,a.y=this.terrain.getHeightAt(a.x,a.z),t.creature.setFacingDirection(h,u),n>25&&(t.state="idle",t.anchorPos.copy(a));return}const r=i.x-a.x,o=i.z-a.z,l=Math.sqrt(r*r+o*o)||1;if(t.creature.setFacingDirection(r,o),n<=t.attackRadius){t.state="attack";return}const c=t.speed*e;a.x+=r/l*c,a.z+=o/l*c,a.y=this.terrain.getHeightAt(a.x,a.z)}updateAttackState(t,e,n,i,a,r){const o=t.creature.group.position;if(t.creature.setFacingDirection(i.x-o.x,i.z-o.z),t.attackCooldown<=0){t.attackCooldown=1.6;const l=Math.max(4,Math.floor(t.damage+(Math.random()*6-3)));r(l),this.addFloatingText(window.innerWidth/2,window.innerHeight/2-40,`-${l} HP`,"#ef4444",!1)}n>t.attackRadius+.8&&(t.state="chase")}playerAttack(t,e){let n=null,i=3.6;for(const d of this.mobs.values()){if(d.state==="dead")continue;const m=e.distanceTo(d.creature.group.position);m<i&&(i=m,n=d)}if(!n)return{hit:!1};const a=28,{damage:r,isCrit:o}=wi.calculateDamage(t.weaponSkills.saber,a,n.armor);n.hp-=r,n.creature.flashHurt();const l=n.creature.group.position,c=l.x-e.x,h=l.z-e.z,u=Math.sqrt(c*c+h*h)||1;if(l.x+=c/u*.8,l.z+=h/u*.8,l.y=this.terrain.getHeightAt(l.x,l.z),n.state="stagger",n.staggerTimer=.45,this.addFloatingText(window.innerWidth/2+(Math.random()-.5)*60,window.innerHeight/2-100,o?`CRITICAL! -${r}`:`-${r}`,o?"#fbbf24":"#ffffff",o),n.hp<=0){n.hp=0,n.state="dead",n.creature.setDead();const{leveledUp:d,newLevel:m}=wi.addXp(t,n.xpReward);return n.id.includes("pasture_wolves")||n.id.includes("wolf")?(this.bus.emit("kill:wolves_pasture"),this.bus.emit("kill:wolf")):n.id.includes("saiga")?this.bus.emit("kill:old_saiga"):n.id.includes("shapeshifter")&&this.bus.emit("kill:shapeshifter"),{hit:!0,mob:n,damage:r,isCrit:o,killed:!0}}return{hit:!0,mob:n,damage:r,isCrit:o,killed:!1}}lootNearbyCorpse(t,e){let n=null,i=3.2;for(const r of this.mobs.values())if(r.state==="dead"&&!r.isLooted){const o=t.distanceTo(r.creature.group.position);o<i&&(i=o,n=r)}if(!n)return{looted:!1};n.isLooted=!0;const a=[];for(const[r,o]of Object.entries(n.loot)){e[r]=(e[r]||0)+o;const l=Gn[r];a.push(`${l?.name??r} x${o}`)}return{looted:!0,items:a,mobName:n.name}}getNearbyLootableCorpse(t){for(const e of this.mobs.values())if(e.state==="dead"&&!e.isLooted&&t.distanceTo(e.creature.group.position)<3.2)return e;return null}addFloatingText(t,e,n,i,a){this.floatingTexts.push({x:t,y:e,text:n,color:i,isCrit:a,lifetime:1.2,maxLifetime:1.2})}updateFloatingTexts(t){if(!this.floatingTextContainer)return;this.floatingTexts=this.floatingTexts.filter(n=>(n.lifetime-=t,n.y-=t*35,n.lifetime>0));let e="";for(const n of this.floatingTexts){const i=Math.min(1,n.lifetime/(n.maxLifetime*.4)),a=n.isCrit?1.4:1;e+=`
        <div style="
          position: absolute;
          left: ${n.x}px;
          top: ${n.y}px;
          color: ${n.color};
          font-family: 'Cinzel', serif;
          font-size: ${16*a}px;
          font-weight: 700;
          text-shadow: 2px 2px 4px #000;
          opacity: ${i};
          transform: translate(-50%, -50%);
          pointer-events: none;
        ">${n.text}</div>
      `}this.floatingTextContainer.innerHTML=e}updateTargetHud(){if(!this.targetHudEl)return;if(!this.activeTarget||this.activeTarget.state==="dead"){this.targetHudEl.style.display="none";return}const t=this.activeTarget,e=Math.max(0,Math.min(100,t.hp/t.maxHp*100));this.targetHudEl.style.display="block",this.targetHudEl.innerHTML=`
      <div class="target-card">
        <div class="target-title">
          <span>${t.name}</span>
          <span class="target-state-badge state-${t.state}">${t.state.toUpperCase()}</span>
        </div>
        <div class="target-bar">
          <div class="target-fill" style="width: ${e}%;"></div>
          <span class="target-hp-label">${t.hp} / ${t.maxHp} HP</span>
        </div>
      </div>
    `}}class ym{buildings=new Map;onBuildingStateChange;registerBuilding(t){t.roofMaterials.forEach(e=>{e.transparent=!0,e.depthWrite=!0}),this.buildings.set(t.id,t)}update(t,e){for(const n of this.buildings.values()){const i=n.bounds,a=e.x>=i.minX&&e.x<=i.maxX&&e.z>=i.minZ&&e.z<=i.maxZ;a!==n.isPlayerInside&&(n.isPlayerInside=a,n.targetRoofOpacity=a?0:1,this.onBuildingStateChange&&this.onBuildingStateChange(n.id,a,n.name)),Math.abs(n.currentRoofOpacity-n.targetRoofOpacity)>.005&&(n.currentRoofOpacity=kn.lerp(n.currentRoofOpacity,n.targetRoofOpacity,Math.min(1,t*8.5)),n.roofMaterials.forEach(r=>{r.opacity=n.currentRoofOpacity}),n.roofGroup.visible=n.currentRoofOpacity>.02)}}isInsideAnyBuilding(t){for(const e of this.buildings.values())if(t.x>=e.bounds.minX&&t.x<=e.bounds.maxX&&t.z>=e.bounds.minZ&&t.z<=e.bounds.maxZ)return!0;return!1}}class Sm{entries=[];meshToEntry=new Map;allMeshes=[];raycaster=new ph;sampleOffsets=[new L(0,1.1,0),new L(0,1.75,0),new L(-.45,1.2,.45),new L(.45,1.2,-.45),new L(0,.4,0)];registerGroup(t){const e=[],n=new Set;if(t.traverse(a=>{if(a.isMesh){const r=a;if(e.push(r),Array.isArray(r.material))r.material=r.material.map(o=>{const l=o.clone();return l.transparent=!0,n.add(l),l});else if(r.material){const o=r.material.clone();o.transparent=!0,r.material=o,n.add(o)}}}),e.length===0)return;const i={group:t,meshes:e,materials:Array.from(n),currentOpacity:1,targetOpacity:1,isOccluding:!1};this.entries.push(i);for(const a of e)this.meshToEntry.set(a,i),this.allMeshes.push(a)}update(t,e,n){for(const o of this.entries)o.isOccluding=!1;const i=new L().subVectors(n.position,e).normalize(),a=new L;for(const o of this.sampleOffsets){a.copy(e).add(o),this.raycaster.set(a,i),this.raycaster.far=120;const l=this.raycaster.intersectObjects(this.allMeshes,!1);for(const c of l)if(c.distance>.4){const h=this.meshToEntry.get(c.object);h&&(h.isOccluding=!0)}}const r=Math.min(1,t*9.5);for(const o of this.entries)if(o.targetOpacity=o.isOccluding?.2:1,Math.abs(o.currentOpacity-o.targetOpacity)>.005){o.currentOpacity=kn.lerp(o.currentOpacity,o.targetOpacity,r);for(const c of o.materials)c.opacity=o.currentOpacity;const l=o.currentOpacity>.03;for(const c of o.meshes)c.visible=l}}}class wm{container;runner;currentNpc=null;currentResult=null;onCloseCallback;onSpecialActionCallback;constructor(t){this.runner=t,this.container=document.createElement("div"),this.container.id="dialogue-container",this.container.style.display="none",document.body.appendChild(this.container),window.addEventListener("keydown",e=>{if(this.currentResult&&!this.currentResult.isExit){const n=parseInt(e.key);!isNaN(n)&&n>=1&&n<=this.currentResult.choices.length?this.selectChoice(n-1):e.key==="Escape"&&this.close()}})}onSpecialAction(t){this.onSpecialActionCallback=t}open(t,e){this.currentNpc=t,this.onCloseCallback=e;const n=this.runner.startConversation(t);if(!n||n.isExit){this.close();return}this.renderNode(n)}selectChoice(t){if(!this.currentNpc||!this.currentResult||!this.currentResult.node)return;const e=this.currentNpc,n=this.runner.selectChoice(this.currentNpc,this.currentResult.node.id,t);n.specialAction?(this.close(),this.onSpecialActionCallback&&this.onSpecialActionCallback(n.specialAction,e)):n.isExit||!n.node?this.close():this.renderNode(n)}renderNode(t){this.currentResult=t,this.container.style.display="block";let n=`
      <div class="dlg-box">
        <div class="dlg-header">
          <span class="dlg-npc-name">${this.formatNpcName(this.currentNpc??"Cossack")}</span>
          <span class="dlg-hint">[1-${t.choices.length}] / Click / [ESC]</span>
        </div>
        <div class="dlg-speech">${t.node?.text??""}</div>
        <div class="dlg-choices">
    `;t.choices.forEach((a,r)=>{n+=`
        <div class="dlg-choice-item" data-idx="${r}">
          <span class="choice-num">${r+1}.</span>
          <span class="choice-text">${a.text}</span>
        </div>
      `}),n+=`
        </div>
      </div>
    `,this.container.innerHTML=n,this.container.querySelectorAll(".dlg-choice-item").forEach(a=>{a.addEventListener("click",()=>{const r=parseInt(a.getAttribute("data-idx")||"0");this.selectChoice(r)})})}close(){this.container.style.display="none",this.currentNpc=null,this.currentResult=null,this.onCloseCallback&&(this.onCloseCallback(),this.onCloseCallback=void 0)}isOpen(){return this.container.style.display!=="none"}formatNpcName(t){switch(t){case"taras_chub":return"Taras Chub (Shepherd)";case"naum_lysenko":return"Naum Lysenko (Kurinnyi)";case"honta":return"Honta (Bowyer Master)";case"pechyborshch":return"Pechyborshch (Healer)";case"ostap":return"Ostap Vernydub (Hermit)";case"hryts_dovbnia":return"Hryts Dovbnia (Apprentice)";default:return t}}}class bm{container;qm;isVisible=!1;constructor(t){this.qm=t,this.container=document.createElement("div"),this.container.id="journal-container",this.container.style.display="none",document.body.appendChild(this.container),window.addEventListener("keydown",e=>{e.key.toLowerCase()==="j"?this.toggle():e.key==="Escape"&&this.isVisible&&this.close()})}toggle(){this.isVisible?this.close():this.open()}open(){this.isVisible=!0,this.container.style.display="block",this.render()}close(){this.isVisible=!1,this.container.style.display="none"}isOpen(){return this.isVisible}render(){const t=this.qm.getAllQuests(),e=this.qm.getWorldState(),n=t.filter(c=>c.state==="active");t.filter(c=>c.state==="available");const i=t.filter(c=>c.state==="done");let a=`
      <div class="journal-box">
        <div class="journal-header">
          <h2>📜 Cossack Journal</h2>
          <button class="journal-close-btn" id="journal-close-x">✕</button>
        </div>

        <div class="journal-content">
          <div class="journal-section">
            <h3 class="section-title">⚔ Active Quests (${n.length})</h3>
    `;if(n.length===0)a+='<p class="empty-hint">No active assignments. Explore the camp or talk to Kurinnyi Naum.</p>';else for(const c of n){const h=this.qm.getQuestDef(c.id),u=h?.stages[c.stage];a+=`
          <div class="journal-quest-card active-card">
            <div class="quest-card-header">
              <span class="quest-title">${h?.title??c.id}</span>
              <span class="quest-tag">${h?.type??"camp"}</span>
            </div>
            <div class="quest-objective">➔ ${u?.objective??c.stage}</div>
          </div>
        `}if(a+=`
          </div>

          <div class="journal-section">
            <h3 class="section-title">✔ Completed Quests (${i.length})</h3>
    `,i.length===0)a+='<p class="empty-hint">None completed yet.</p>';else for(const c of i){const h=this.qm.getQuestDef(c.id);a+=`
          <div class="journal-quest-card done-card">
            <div class="quest-card-header">
              <span class="quest-title">${h?.title??c.id}</span>
              <span class="quest-resolution">Outcome: <strong>${c.resolution??"completed"}</strong></span>
            </div>
          </div>
        `}a+=`
          </div>

          <div class="journal-section">
            <h3 class="section-title">💡 Uncovered Steppe Knowledge</h3>
            <ul class="knowledge-list">
    `;const r=Object.keys(e.knowledge).filter(c=>e.knowledge[c]);if(r.length===0)a+='<li class="empty-hint">No mysterious facts uncovered yet.</li>';else for(const c of r){let h=c;c==="knows_howling"&&(h="Strange Howling: Deep claw wounds on pasture wolves point to a beast bigger than a wolf."),c==="knows_yatsko_fletching"&&(h="Yatsko's Fletching: Honta confirmed the old arrow belongs to Yatsko Lysytsia."),a+=`<li class="knowledge-item">${h}</li>`}a+=`
            </ul>
          </div>

          <div class="journal-section">
            <h3 class="section-title">🏛 Reputation</h3>
            <div class="rep-grid">
    `;const o=Object.keys(e.rep);if(o.length===0)a+='<span class="empty-hint">Neutral with all factions and hunters.</span>';else for(const c of o)a+=`<div class="rep-pill"><span class="rep-key">${c}:</span> <span class="rep-val">${e.rep[c]}</span></div>`;a+=`
            </div>
          </div>
        </div>
      </div>
    `,this.container.innerHTML=a;const l=document.getElementById("journal-close-x");l&&l.addEventListener("click",()=>this.close())}}class Em{container;promptEl;toastEl;timeEl;statsEl;constructor(){this.container=document.createElement("div"),this.container.id="hud-container",document.body.appendChild(this.container),this.container.innerHTML=`
      <div class="hud-top-bar">
        <div class="hud-character-card" id="hud-stats">
          <!-- Populated dynamically -->
        </div>

        <div class="hud-time-card">
          <span class="hud-time-icon">⏳</span>
          <span class="hud-time-val" id="hud-time">08:00</span>
          <span class="hud-chapter-badge">Ch. 1</span>
        </div>
      </div>

      <div class="hud-toast" id="hud-toast" style="display: none;"></div>

      <div class="hud-prompt" id="hud-prompt" style="display: none;"></div>

      <div class="hud-bottom-actions">
        <button class="hud-btn" id="hud-btn-inv">🎒 Bag [I]</button>
        <button class="hud-btn" id="hud-btn-journal">📜 Journal [J]</button>
        <button class="hud-btn" id="hud-btn-debug">🛠 Debug [~]</button>
      </div>
    `,this.promptEl=document.getElementById("hud-prompt"),this.toastEl=document.getElementById("hud-toast"),this.timeEl=document.getElementById("hud-time"),this.statsEl=document.getElementById("hud-stats")}updateStats(t){const e=Math.max(0,Math.min(100,t.currentHp/t.maxHp*100));this.statsEl.innerHTML=`
      <div class="hud-name">Cossack (Lvl ${t.level})</div>
      <div class="hud-hp-bar">
        <div class="hud-hp-fill" style="width: ${e}%;"></div>
        <span class="hud-hp-text">${t.currentHp}/${t.maxHp} HP</span>
      </div>
      <div class="hud-sub-stats">
        <span>⚔ Saber: ${t.weaponSkills.saber}%</span>
        <span>🪙 Gold: ${t.gold}</span>
        ${t.trainingPoints>0?`<span class="hud-tp-alert">⭐ ${t.trainingPoints} TP</span>`:""}
      </div>
    `}updateTime(t){const e=Math.floor(t.timeMinutes%1440),n=Math.floor(e/60),i=e%60,a=`${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`;this.timeEl.innerText=a}showPrompt(t){this.promptEl.style.display="block",this.promptEl.innerHTML=t}hidePrompt(){this.promptEl.style.display="none"}showToast(t,e=3500){this.toastEl.style.display="block",this.toastEl.innerText=t,setTimeout(()=>{this.toastEl.style.display="none"},e)}onInventoryClick(t){document.getElementById("hud-btn-inv")?.addEventListener("click",t)}onJournalClick(t){document.getElementById("hud-btn-journal")?.addEventListener("click",t)}onDebugClick(t){document.getElementById("hud-btn-debug")?.addEventListener("click",t)}}class Tm{container;qm;player;director;isVisible=!1;constructor(t,e,n){this.qm=t,this.player=e,this.director=n,this.container=document.createElement("div"),this.container.id="debug-container",this.container.style.display="none",document.body.appendChild(this.container),window.addEventListener("keydown",i=>{(i.key==="`"||i.key==="~")&&this.toggle()})}toggle(){this.isVisible=!this.isVisible,this.container.style.display=this.isVisible?"block":"none",this.isVisible&&this.render()}render(){const t=this.qm.getWorldState(),e=this.qm.getAllQuests();let n=`
      <div class="debug-box">
        <div class="debug-header">
          <h3>🛠 Quest & World Debugger</h3>
          <button id="debug-close-btn">✕</button>
        </div>

        <div class="debug-body">
          <div class="debug-col">
            <h4>⏰ Time of Day (${Math.floor(t.timeMinutes)} min)</h4>
            <div class="debug-btn-row">
              <button class="d-btn" id="db-time-dawn">Dawn (06:00)</button>
              <button class="d-btn" id="db-time-noon">Noon (12:00)</button>
              <button class="d-btn" id="db-time-dusk">Dusk (18:00)</button>
              <button class="d-btn" id="db-time-night">Midnight (00:00)</button>
              <button class="d-btn" id="db-time-plus">+1 Hour</button>
            </div>

            <h4>📍 Quick Teleport</h4>
            <div class="debug-btn-row">
              <button class="d-btn" id="db-tp-camp">Camp Center</button>
              <button class="d-btn" id="db-tp-sheep">Taras / Sheep Pen</button>
              <button class="d-btn" id="db-tp-pasture">Pasture (Wolves)</button>
              <button class="d-btn" id="db-tp-ravine">Eastern Ravine (Saiga)</button>
              <button class="d-btn" id="db-tp-hole">Watering Hole (Boss)</button>
            </div>

            <h4>⚡ Fast Spawns & Cheats</h4>
            <div class="debug-btn-row">
              <button class="d-btn" id="db-spawn-wolves">Spawn Wolves</button>
              <button class="d-btn" id="db-spawn-saiga">Spawn Saiga</button>
              <button class="d-btn" id="db-spawn-boss">Spawn Shapeshifter</button>
              <button class="d-btn" id="db-give-gold">+100 Gold & 10 TP</button>
              <button class="d-btn" id="db-heal">Full Heal</button>
            </div>
          </div>

          <div class="debug-col">
            <h4>📜 Live Quests</h4>
            <div class="debug-quest-list">
    `;for(const i of e){const a=i.state==="active"?"#55ff55":i.state==="done"?"#ffff55":i.state==="available"?"#55ffff":"#888888";n+=`
        <div class="debug-q-item">
          <span style="color: ${a};">[${i.state.toUpperCase()}]</span> <strong>${i.id}</strong>: stage <em>${i.stage}</em>
          ${i.resolution?`(res: <strong>${i.resolution}</strong>)`:""}
        </div>
      `}n+=`
            </div>

            <h4>🚩 World Flags & Knowledge</h4>
            <pre class="debug-json">${JSON.stringify({flags:t.flags,knowledge:t.knowledge,rep:t.rep,inv:t.inventory},null,2)}</pre>
          </div>
        </div>
      </div>
    `,this.container.innerHTML=n,document.getElementById("debug-close-btn")?.addEventListener("click",()=>this.toggle()),document.getElementById("db-time-dawn")?.addEventListener("click",()=>{t.timeMinutes=360,this.render()}),document.getElementById("db-time-noon")?.addEventListener("click",()=>{t.timeMinutes=720,this.render()}),document.getElementById("db-time-dusk")?.addEventListener("click",()=>{t.timeMinutes=1080,this.render()}),document.getElementById("db-time-night")?.addEventListener("click",()=>{t.timeMinutes=0,this.render()}),document.getElementById("db-time-plus")?.addEventListener("click",()=>{t.timeMinutes=(t.timeMinutes+60)%1440,this.render()}),document.getElementById("db-tp-camp")?.addEventListener("click",()=>this.teleport(0,0)),document.getElementById("db-tp-sheep")?.addEventListener("click",()=>this.teleport(-15,8)),document.getElementById("db-tp-pasture")?.addEventListener("click",()=>this.teleport(-18,14)),document.getElementById("db-tp-ravine")?.addEventListener("click",()=>this.teleport(42,8)),document.getElementById("db-tp-hole")?.addEventListener("click",()=>this.teleport(38,-18)),document.getElementById("db-spawn-wolves")?.addEventListener("click",()=>{this.director.handleEffect({t:"spawn",table:"wolves_pasture",at:"pasture"}),this.render()}),document.getElementById("db-spawn-saiga")?.addEventListener("click",()=>{this.director.handleEffect({t:"spawn",table:"old_saiga_steppe",at:"eastern_ravine"}),this.render()}),document.getElementById("db-spawn-boss")?.addEventListener("click",()=>{this.director.handleEffect({t:"spawn",table:"shapeshifter_night",at:"watering_hole"}),this.render()}),document.getElementById("db-give-gold")?.addEventListener("click",()=>{this.player.stats.gold+=100,this.player.stats.trainingPoints+=10,this.render()}),document.getElementById("db-heal")?.addEventListener("click",()=>{this.player.stats.currentHp=this.player.stats.maxHp,this.render()})}teleport(t,e){const n=this.player.character.group.position;n.x=t,n.z=e,n.y=this.player.terrain.getHeightAt(t,e),this.render()}}const Xo={honta:{npcId:"honta",title:"Honta — Master Bowyer",quote:'"Drawing a recurve bow demands not just arm strength, but keen eyesight and steppe discipline."',skills:[{id:"bow",name:"Bow Mastery",category:"weapon",description:"Increases critical hit chance with bows, projectile speed, and ranged precision.",pointsCost:5,goldCost:40,pointIncrement:5},{id:"agility",name:"Agility",category:"attribute",description:"Improves dodge responsiveness, ranged draw speed, and critical evasion.",pointsCost:5,goldCost:35,pointIncrement:5}]},naum_lysenko:{npcId:"naum_lysenko",title:"Naum Lysenko — Kurinnyi Ataman",quote:'"In the Wild Fields, a hesitant saber cut means a Tatar lance in your ribs. Strike true!"',skills:[{id:"saber",name:"Saber Mastery",category:"weapon",description:"Increases melee damage, critical hit chance, and unlocks faster Cossack attack combos.",pointsCost:5,goldCost:45,pointIncrement:5},{id:"strength",name:"Strength",category:"attribute",description:"Increases raw physical strike damage and grants +10 Maximum Health per training.",pointsCost:5,goldCost:40,pointIncrement:5}]}};class Am{container;currentTrainer=null;stats=null;onTrainedCallback;onCloseCallback;constructor(){this.container=document.createElement("div"),this.container.id="trainer-container",this.container.style.display="none",document.body.appendChild(this.container),window.addEventListener("keydown",t=>{this.isOpen()&&t.key==="Escape"&&this.close()})}open(t,e,n,i){const a=Xo[t]||{npcId:t,title:`${t} — Veteran Master`,quote:'"Train hard, die old."',skills:Xo.naum_lysenko.skills};this.currentTrainer=a,this.stats=e,this.onTrainedCallback=n,this.onCloseCallback=i,this.container.style.display="block",this.render()}close(){this.container.style.display="none",this.currentTrainer=null,this.onCloseCallback&&(this.onCloseCallback(),this.onCloseCallback=void 0)}isOpen(){return this.container.style.display!=="none"}render(){if(!this.currentTrainer||!this.stats)return;const{title:t,quote:e,skills:n}=this.currentTrainer,i=this.stats;let a=`
      <div class="trainer-box">
        <div class="trainer-header">
          <div>
            <h2 class="trainer-title">${t}</h2>
            <div class="trainer-quote">${e}</div>
          </div>
          <button class="trainer-close-btn" id="trainer-close">&times;</button>
        </div>

        <div class="trainer-res-bar">
          <div class="res-item">
            <span class="res-label">Level:</span>
            <span class="res-val">${i.level}</span>
          </div>
          <div class="res-item ${i.trainingPoints>0?"highlight-tp":""}">
            <span class="res-label">Learning Points (LP):</span>
            <span class="res-val">${i.trainingPoints}</span>
          </div>
          <div class="res-item">
            <span class="res-label">Cossack Gold:</span>
            <span class="res-val">${i.gold} 🪙</span>
          </div>
        </div>

        <div class="trainer-skills-list">
    `;n.forEach(o=>{let l=0,c="",h=o.category==="weapon";if(o.id==="saber"||o.id==="bow"){l=i.weaponSkills[o.id];const M=wi.getMasteryTier(l);c=`<span class="tier-badge tier-${M.toLowerCase()}">${M} (${l}%)</span>`}else l=i[o.id],c=`<span class="tier-badge">${l} pts</span>`;const u=i.trainingPoints>=o.pointsCost,d=i.gold>=o.goldCost,m=u&&d&&l<100;let g=`Train (+${o.pointIncrement})`;l>=100?g="Maxed Out":u?d||(g=`Need ${o.goldCost} Gold`):g=`Need ${o.pointsCost} LP`,a+=`
        <div class="trainer-skill-card ${m?"can-train":"cannot-train"}">
          <div class="skill-info">
            <div class="skill-name-row">
              <span class="skill-name">${o.name}</span>
              ${c}
            </div>
            <div class="skill-desc">${o.description}</div>
            <div class="skill-cost-row">
              <span>Cost: <strong>${o.pointsCost} LP</strong> + <strong>${o.goldCost} Gold</strong></span>
              ${h?"<span>Combo Tiers: 30% Fighter, 60% Master, 90% Expert</span>":""}
            </div>
          </div>
          <div class="skill-action">
            <button class="train-btn" data-skill="${o.id}" ${m?"":"disabled"}>
              ${g}
            </button>
          </div>
        </div>
      `}),a+=`
        </div>
      </div>
    `,this.container.innerHTML=a,document.getElementById("trainer-close")?.addEventListener("click",()=>this.close()),this.container.querySelectorAll(".train-btn").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-skill");this.handleTrain(l)})})}handleTrain(t){if(!this.currentTrainer||!this.stats)return;const e=this.currentTrainer.skills.find(a=>a.id===t);if(!e)return;const n=t==="saber"||t==="bow"?wi.getMasteryTier(this.stats.weaponSkills[t]):void 0;if(wi.trainSkill(this.stats,t,e.pointsCost,e.goldCost)){const a=t==="saber"||t==="bow"?wi.getMasteryTier(this.stats.weaponSkills[t]):void 0;this.render(),this.onTrainedCallback&&this.onTrainedCallback(e.name,a!==n?a:void 0)}}}const qo={honta:{npcId:"honta",title:"Honta — Master Bowyer",greeting:`"Every shaft is balanced by hand. Quality steel and oiled ash don't come cheap, Cossack."`,stock:[{itemId:"hunting_bow",count:1,customPrice:120},{itemId:"arrow",count:60,customPrice:2},{itemId:"poison_arrow",count:10,customPrice:16},{itemId:"salo",count:3,customPrice:9}]},pechyborshch:{npcId:"pechyborshch",title:"Pechyborshch — Field Cook & Herbalist",greeting:'"A hungry Cossack is half a warrior! Taste my cured salo and pepper horilka, good as new!"',stock:[{itemId:"salo",count:12,customPrice:8},{itemId:"dried_meat",count:15,customPrice:5},{itemId:"steppe_bread",count:20,customPrice:4},{itemId:"horilka",count:6,customPrice:15},{itemId:"bog_root",count:4,customPrice:22}]},taras_chub:{npcId:"taras_chub",title:"Taras Chub — Shepherd",greeting:`"I don't have fancy weapons, but if you have wolf pelts or dried meat, I'll give you fair coin."`,stock:[{itemId:"dried_meat",count:8,customPrice:5},{itemId:"steppe_bread",count:6,customPrice:4}]}};class Cm{container;currentMerchant=null;stats=null;playerInventory={};onTradeCallback;onCloseCallback;constructor(){this.container=document.createElement("div"),this.container.id="trade-container",this.container.style.display="none",document.body.appendChild(this.container),window.addEventListener("keydown",t=>{this.isOpen()&&t.key==="Escape"&&this.close()})}open(t,e,n,i,a){const r=qo[t]||{npcId:t,title:`${t} — Trader`,greeting:'"Let us see what you have."',stock:qo.honta.stock};this.currentMerchant=r,this.stats=e,this.playerInventory=n,this.onTradeCallback=i,this.onCloseCallback=a,this.container.style.display="block",this.render()}close(){this.container.style.display="none",this.currentMerchant=null,this.onCloseCallback&&(this.onCloseCallback(),this.onCloseCallback=void 0)}isOpen(){return this.container.style.display!=="none"}render(){if(!this.currentMerchant||!this.stats)return;const{title:t,greeting:e,stock:n}=this.currentMerchant,i=this.stats;let a=`
      <div class="trade-box">
        <div class="trade-header">
          <div>
            <h2 class="trade-title">${t}</h2>
            <div class="trade-quote">${e}</div>
          </div>
          <button class="trade-close-btn" id="trade-close">&times;</button>
        </div>

        <div class="trade-res-bar">
          <div class="res-item">
            <span class="res-label">Your Purse:</span>
            <span class="res-val">${i.gold} 🪙</span>
          </div>
          <div class="res-hint">[ESC] or Close to leave barter</div>
        </div>

        <div class="trade-columns">
          <!-- MERCHANT WARES -->
          <div class="trade-col">
            <h3 class="trade-col-title">Merchant Wares</h3>
            <div class="trade-item-list">
    `;const r=n.filter(h=>h.count>0);r.length===0?a+='<div class="trade-empty">Merchant has sold out of goods.</div>':r.forEach(h=>{const u=Gn[h.itemId]||{id:h.itemId,name:h.itemId,description:"",value:10},d=h.customPrice??u.value,m=i.gold>=d;a+=`
          <div class="trade-card ${m?"":"cannot-afford"}">
            <div class="trade-card-left">
              <div class="trade-item-name">${u.name} <span class="item-qty">x${h.count}</span></div>
              <div class="trade-item-desc">${u.description}</div>
              <div class="trade-item-price">Price: <strong>${d} 🪙</strong></div>
            </div>
            <button class="buy-btn" data-item="${h.itemId}" ${m?"":"disabled"}>
              Buy (1)
            </button>
          </div>
        `}),a+=`
            </div>
          </div>

          <!-- PLAYER WARES -->
          <div class="trade-col">
            <h3 class="trade-col-title">Your Inventory</h3>
            <div class="trade-item-list">
    `;const o=Object.entries(this.playerInventory).filter(([h,u])=>u>0);o.length===0?a+='<div class="trade-empty">Your pockets are empty.</div>':o.forEach(([h,u])=>{const d=Gn[h]||{name:h,description:"",value:5,category:"quest"},m=Math.max(1,Math.floor(d.value*.65)),g=d.category==="quest";a+=`
          <div class="trade-card">
            <div class="trade-card-left">
              <div class="trade-item-name">${d.name} <span class="item-qty">x${u}</span></div>
              <div class="trade-item-desc">${d.description}</div>
              <div class="trade-item-price">${g?"Quest Item (Cannot sell)":`Sell Value: <strong>${m} 🪙</strong>`}</div>
            </div>
            <button class="sell-btn" data-item="${h}" ${g?"disabled":""}>
              Sell (1)
            </button>
          </div>
        `}),a+=`
            </div>
          </div>
        </div>
      </div>
    `,this.container.innerHTML=a,document.getElementById("trade-close")?.addEventListener("click",()=>this.close()),this.container.querySelectorAll(".buy-btn").forEach(h=>{h.addEventListener("click",()=>{const u=h.getAttribute("data-item");this.handleBuy(u)})}),this.container.querySelectorAll(".sell-btn").forEach(h=>{h.addEventListener("click",()=>{const u=h.getAttribute("data-item");this.handleSell(u)})})}handleBuy(t){if(!this.currentMerchant||!this.stats)return;const e=this.currentMerchant.stock.find(a=>a.itemId===t&&a.count>0);if(!e)return;const n=Gn[t],i=e.customPrice??n.value;this.stats.gold<i||(this.stats.gold-=i,e.count-=1,this.playerInventory[t]=(this.playerInventory[t]||0)+1,this.render(),this.onTradeCallback&&this.onTradeCallback(`Purchased ${n?.name??t} for ${i} gold.`))}handleSell(t){if(!this.currentMerchant||!this.stats)return;const e=this.playerInventory[t]||0;if(e<=0)return;const n=Gn[t];if(n?.category==="quest")return;const i=Math.max(1,Math.floor((n?.value??10)*.65));this.stats.gold+=i,this.playerInventory[t]=e-1,this.playerInventory[t]<=0&&delete this.playerInventory[t];const a=this.currentMerchant.stock.find(r=>r.itemId===t);a?a.count+=1:this.currentMerchant.stock.push({itemId:t,count:1,customPrice:n?.value??10}),this.render(),this.onTradeCallback&&this.onTradeCallback(`Sold ${n?.name??t} for ${i} gold.`)}}class Rm{container;inventory={};stats=null;selectedCategory="all";onConsumeCallback;onCloseCallback;constructor(){this.container=document.createElement("div"),this.container.id="inventory-container",this.container.style.display="none",document.body.appendChild(this.container),window.addEventListener("keydown",t=>{(t.key.toLowerCase()==="i"||t.code==="KeyI"||t.key==="ш"||t.key==="Tab")&&!this.isTypingInInput(t)?(t.preventDefault(),this.toggle()):this.isOpen()&&t.key==="Escape"&&this.close()})}isTypingInInput(t){const e=t.target;return!!(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))}setContext(t,e){this.inventory=t,this.stats=e}toggle(){this.isOpen()?this.close():this.open()}open(t,e){t&&(this.onConsumeCallback=t),e&&(this.onCloseCallback=e),this.container.style.display="block",this.render()}close(){this.container.style.display="none",this.onCloseCallback&&this.onCloseCallback()}isOpen(){return this.container.style.display!=="none"}render(){if(!this.stats)return;const t=this.stats,e=Object.entries(this.inventory).filter(([o,l])=>l>0),n=e.filter(([o])=>{if(this.selectedCategory==="all")return!0;const l=Gn[o];return l&&l.category===this.selectedCategory});let i=`
      <div class="inv-box">
        <div class="inv-header">
          <div class="inv-title-group">
            <h2 class="inv-title">Cossack Knapsack</h2>
            <div class="inv-gold-badge">${t.gold} 🪙 Gold</div>
          </div>
          <button class="inv-close-btn" id="inv-close">&times;</button>
        </div>

        <div class="inv-category-tabs">
          <button class="inv-tab ${this.selectedCategory==="all"?"active":""}" data-cat="all">All (${e.length})</button>
          <button class="inv-tab ${this.selectedCategory==="weapon"?"active":""}" data-cat="weapon">Weapons</button>
          <button class="inv-tab ${this.selectedCategory==="ammo"?"active":""}" data-cat="ammo">Ammunition</button>
          <button class="inv-tab ${this.selectedCategory==="consumable"?"active":""}" data-cat="consumable">Provisions</button>
          <button class="inv-tab ${this.selectedCategory==="trophy"?"active":""}" data-cat="trophy">Trophies</button>
          <button class="inv-tab ${this.selectedCategory==="quest"?"active":""}" data-cat="quest">Quest Lore</button>
        </div>

        <div class="inv-content-grid">
    `;n.length===0?i+=`
        <div class="inv-empty-state">
          No items in this pocket. Loot fallen beasts or barter with merchants in the outpost.
        </div>
      `:n.forEach(([o,l])=>{const c=Gn[o]||{name:o,category:"quest",description:"A mysterious steppe item.",value:10},h=c.category==="consumable"&&!!c.healHp,u=h&&t.currentHp<t.maxHp;i+=`
          <div class="inv-card cat-${c.category}">
            <div class="inv-card-top">
              <span class="inv-item-name">${c.name}</span>
              <span class="inv-badge-qty">x${l}</span>
            </div>
            <div class="inv-item-desc">${c.description}</div>
            <div class="inv-card-bottom">
              <span class="inv-item-val">${c.value} 🪙</span>
              ${h?`<button class="inv-use-btn" data-id="${o}" ${u?"":"disabled"}>
                      ${u?`Consume (+${c.healHp} HP)`:"Full Health"}
                    </button>`:""}
            </div>
          </div>
        `}),i+=`
        </div>

        <div class="inv-footer">
          <div class="inv-hp-status">Health: <strong>${t.currentHp} / ${t.maxHp} HP</strong></div>
          <div class="inv-hint">Press <strong>[I]</strong> or <strong>[ESC]</strong> to close</div>
        </div>
      </div>
    `,this.container.innerHTML=i,document.getElementById("inv-close")?.addEventListener("click",()=>this.close()),this.container.querySelectorAll(".inv-tab").forEach(o=>{o.addEventListener("click",()=>{this.selectedCategory=o.getAttribute("data-cat"),this.render()})}),this.container.querySelectorAll(".inv-use-btn").forEach(o=>{o.addEventListener("click",()=>{const l=o.getAttribute("data-id");this.handleUse(l)})})}handleUse(t){if(!this.stats)return;const e=this.inventory[t]||0;if(e<=0)return;const n=Gn[t];!n||!n.healHp||(this.stats.currentHp=Math.min(this.stats.maxHp,this.stats.currentHp+n.healHp),this.inventory[t]=e-1,this.inventory[t]<=0&&delete this.inventory[t],this.render(),this.onConsumeCallback&&this.onConsumeCallback(n))}}const Pm={id:"wolf_attack",title:"Wolf Attack",type:"camp",faction:"ingulsk",giver:"taras_chub",stages:{start:{objective:"Talk to Taras Chub near the sheep pen"},pasture:{objective:"Kill the wolf pack harassing the pasture",onEnter:[{t:"spawn",table:"wolves_pasture",at:"pasture",tag:"pasture_wolves"}]},report:{objective:"Report back to Taras Chub about the pack and their strange wounds"}},initial:"start",transitions:[{from:"start",event:"talk:taras_chub",to:"pasture"},{from:"pasture",event:"kill:wolves_pasture",to:"report",effects:[{t:"flag",k:"pasture_wolves_dead",v:!0}]},{from:"report",event:"dialog:wolf_attack.report_wounds",to:"done",effects:[{t:"knows",k:"knows_howling"},{t:"rep",k:"taras_trust",d:1},{t:"give",id:"wolf_hide",n:3},{t:"xp",n:50}],resolution:"reported_wounds"},{from:"report",event:"dialog:wolf_attack.report_plain",to:"done",effects:[{t:"give",id:"wolf_hide",n:1},{t:"xp",n:30}],resolution:"plain"}]},Lm={id:"swamp_healer",title:"Swamp Healer",type:"camp",faction:"ingulsk",giver:"pechyborshch",stages:{start:{objective:"Speak with herbalist Pechyborshch about the sick Cossacks"},swamp:{objective:"Get the black-willow root from Ostap Vernydub's hut in the swamp"},wax:{objective:"Bring beeswax from the wild apiary in the forest for Ostap"}},initial:"start",transitions:[{from:"start",event:"talk:pechyborshch",to:"swamp"},{from:"swamp",event:"dialog:ostap.ask_wax",to:"wax"},{from:"wax",event:"give:beeswax>ostap",to:"done",effects:[{t:"give",id:"blackwillow_root",n:1},{t:"rep",k:"ostap_trust",d:1},{t:"xp",n:60}],resolution:"befriended"},{from:"swamp",event:"dialog:ostap.howling_confidence",to:"done",conditions:[{t:"knows",k:"knows_howling"}],effects:[{t:"give",id:"blackwillow_root",n:1},{t:"rep",k:"ostap_trust",d:2},{t:"shop",npc:"ostap",op:"unlock"},{t:"xp",n:80}],resolution:"befriended"},{from:"swamp",event:"steal:blackwillow_root",to:"done",effects:[{t:"give",id:"blackwillow_root",n:1},{t:"rep",k:"ostap_trust",d:-5},{t:"routine",npc:"ostap",routine:"hostile"}],resolution:"stole"}]},Im={id:"curse",title:"Curse",type:"camp",faction:"ingulsk",giver:"ostap",availableWhen:[{t:"quest",id:"swamp_healer",state:"done"},{t:"flag",k:"swamp_healer.resolution",v:"befriended"},{t:"knows",k:"knows_howling"}],stages:{start:{objective:"Speak with Ostap about the ancient horror awakening in the steppe"},bile:{objective:"Slay a swamp mavka and bring its bile to Ostap"},poison:{objective:"Let Ostap brew aconite poison and coat your blade"},hunt:{objective:"Slay the Shapeshifter (Vovkulaka) in the night steppe",onEnter:[{t:"give",id:"coated_blade",n:1},{t:"spawn",table:"shapeshifter_night",at:"watering_hole",tag:"shapedanger"},{t:"marker",id:"shapeshifter_lair",op:"add",at:"watering_hole",label:"Shapeshifter Lair"}]}},initial:"start",transitions:[{from:"start",event:"talk:ostap",to:"bile"},{from:"bile",event:"give:mavka_bile>ostap",to:"poison"},{from:"poison",event:"dialog:ostap.take_coated_blade",to:"hunt"},{from:"hunt",event:"kill:shapeshifter",to:"done",effects:[{t:"despawn",tag:"shapedanger"},{t:"marker",id:"shapeshifter_lair",op:"remove"},{t:"give",id:"shapeshifter_hide",n:1},{t:"rep",k:"ingulsk",d:5},{t:"routine",npc:"hryts_dovbnia",routine:"hunter"},{t:"xp",n:150}],resolution:"slain"}]},Dm={id:"unlucky",title:"Unlucky",type:"camp",faction:"ingulsk",giver:"hryts_dovbnia",stages:{start:{objective:"Decide how to help Hryts pass Honta's hunting trial"}},initial:"start",transitions:[{from:"start",event:"dialog:unlucky.give_fur",to:"done",conditions:[{t:"item",id:"wolf_hide",n:1}],effects:[{t:"take",id:"wolf_hide",n:1},{t:"rep",k:"hryts_trust",d:1},{t:"flag",k:"hryts_combat_ai",v:"coward"},{t:"xp",n:40}],resolution:"deceived"},{from:"start",event:"dialog:unlucky.teach_honestly",to:"done",effects:[{t:"rep",k:"hryts_trust",d:2},{t:"flag",k:"hryts_combat_ai",v:"archer"},{t:"routine",npc:"hryts_dovbnia",routine:"follower_ranged"},{t:"xp",n:70}],resolution:"taught"},{from:"start",event:"dialog:unlucky.snitch_honta",to:"done",effects:[{t:"rep",k:"honta_trust",d:1},{t:"rep",k:"hryts_trust",d:-5},{t:"give",id:"arrow_pack",n:2},{t:"flag",k:"hryts_combat_ai",v:"absent"},{t:"routine",npc:"hryts_dovbnia",routine:"exiled"},{t:"xp",n:50}],resolution:"betrayed"}]},Um={id:"first_hunt",title:"First Hunt",type:"joining",faction:"ingulsk",giver:"naum_lysenko",stages:{start:{objective:"Talk to Kurinnyi Naum Lysenko about proving your hunting prowess"},investigate:{objective:"Ask around the camp (Honta, Pechyborshch, Taras, Hryts) before hunting the old saiga"},hunt:{objective:"Track down and slay the horned old saiga in the eastern steppe ravines"},report:{objective:"Deliver the saiga carcass back to Naum Lysenko"}},initial:"start",transitions:[{from:"start",event:"talk:naum_lysenko",to:"investigate"},{from:"investigate",event:"dialog:first_hunt.go_hunt",to:"hunt",effects:[{t:"spawn",table:"old_saiga_steppe",at:"eastern_ravine",tag:"saiga_target"}]},{from:"hunt",event:"kill:old_saiga",to:"report",effects:[{t:"give",id:"saiga_carcass",n:1},{t:"give",id:"saiga_horns",n:1}]},{from:"report",event:"dialog:first_hunt.turn_in_perfect",to:"done",conditions:[{t:"flag",k:"first_hunt_perfect",v:!0}],effects:[{t:"take",id:"saiga_carcass",n:1},{t:"rep",k:"ingulsk",d:5},{t:"rep",k:"naum_trust",d:3},{t:"give",id:"hunting_knife",n:1},{t:"xp",n:120}],resolution:"perfect"},{from:"report",event:"dialog:first_hunt.turn_in_normal",to:"done",effects:[{t:"take",id:"saiga_carcass",n:1},{t:"rep",k:"ingulsk",d:3},{t:"rep",k:"naum_trust",d:1},{t:"xp",n:80}],resolution:"normal"}]},Nm={id:"hunters_dispute",title:"Hunters' Dispute",type:"joining",faction:"ingulsk",giver:"naum_lysenko",stages:{start:{objective:"Resolve the dispute between Khoma Riznyk and Opanas Kryvyi over the deer"},investigate:{objective:"Interrogate Khoma, Opanas, and look for clues or witnesses"}},initial:"start",transitions:[{from:"start",event:"talk:naum_lysenko",to:"investigate"},{from:"investigate",event:"dialog:dispute.split_equally",to:"done",effects:[{t:"rep",k:"ingulsk",d:1},{t:"xp",n:50}],resolution:"split"},{from:"investigate",event:"dialog:dispute.side_khoma",to:"done",effects:[{t:"rep",k:"khoma_trust",d:2},{t:"rep",k:"opanas_trust",d:-2},{t:"give",id:"cured_leather",n:1},{t:"xp",n:70}],resolution:"khoma"},{from:"investigate",event:"dialog:dispute.side_opanas",to:"done",effects:[{t:"rep",k:"opanas_trust",d:2},{t:"rep",k:"khoma_trust",d:-2},{t:"give",id:"arrow_pack",n:3},{t:"xp",n:70}],resolution:"opanas"},{from:"investigate",event:"dialog:dispute.reveal_truth",to:"done",conditions:[{t:"knows",k:"knows_yatsko_fletching"},{t:"item",id:"old_arrow",n:1}],effects:[{t:"rep",k:"ingulsk",d:4},{t:"rep",k:"naum_trust",d:2},{t:"rep",k:"yatsko_trust",d:3},{t:"shop",npc:"yatsko",op:"discount",pct:15},{t:"xp",n:120}],resolution:"truth"},{from:"investigate",event:"dialog:dispute.provoke_duel",to:"done",effects:[{t:"rep",k:"naum_trust",d:-2},{t:"give",id:"deer_meat",n:5},{t:"xp",n:40}],resolution:"duel"}]},Fm=[Pm,Lm,Im,Dm,Um,Nm],Om={npc:"taras_chub",greetings:[{id:"taras.greet_curse_done",npc:"taras_chub",text:"Quiet nights in the steppe at last. You did well, Cossack. The spirits of the fallen rest easy.",conditions:[{t:"quest",id:"curse",state:"done"}],choices:[{text:"Any other beasts prowling?",goto:"taras.beasts"},{text:"Farewell, Taras.",goto:"EXIT"}]},{id:"taras.greet_trusted",npc:"taras_chub",text:"Good to see you again. What brings you to the sheep pen?",conditions:[{t:"rep",k:"taras_trust",min:1}],choices:[{text:"About the saiga for Kurinnyi Naum...",conditions:[{t:"stage",quest:"first_hunt",stage:"investigate"}],goto:"taras.saiga_hint",once:!0},{text:"Where does the Shapeshifter lurk at night?",conditions:[{t:"stage",quest:"curse",stage:"hunt"}],goto:"taras.curse_hint",once:!0},{text:"Just passing by.",goto:"EXIT"}]},{id:"taras.greet_default",npc:"taras_chub",text:"Watch your step around the pens. Wolves have been smelling blood.",choices:[{text:"Wolves? Tell me what happened.",conditions:[{t:"quest",id:"wolf_attack",state:["locked","available"]}],goto:"taras.wolf_quest_start",once:!0},{text:"I killed the pasture wolves. And their backs bore unnatural claw wounds.",conditions:[{t:"stage",quest:"wolf_attack",stage:"report"},{t:"flag",k:"pasture_wolves_dead",v:!0}],goto:"taras.report_wounds",once:!0},{text:"I killed the pasture wolves.",conditions:[{t:"stage",quest:"wolf_attack",stage:"report"},{t:"flag",k:"pasture_wolves_dead",v:!0}],goto:"taras.report_plain",once:!0},{text:"Do you want to buy some pelts or trade provisions?",goto:"TRADE"},{text:"Goodbye.",goto:"EXIT"}]}],nodes:{"taras.wolf_quest_start":{id:"taras.wolf_quest_start",npc:"taras_chub",text:"Third sheep mauled this week! Usually they fear fire, but something is driving them out from the deep ravines. Kill the pack by the pasture, and I will pay you.",effects:[{t:"quest",id:"wolf_attack",op:"start"}],choices:[{text:"Consider it done.",goto:"EXIT"},{text:"What kind of wolves are they?",goto:"taras.wolf_details"}]},"taras.wolf_details":{id:"taras.wolf_details",npc:"taras_chub",text:"Frenzied. Hungry. Their howls echo from the steppe before sundown.",choices:[{text:"I am on my way.",goto:"EXIT"}]},"taras.report_wounds":{id:"taras.report_wounds",npc:"taras_chub",text:"Something bigger than a wolf... God have mercy. I heard unearthly howling at the dead of night, not like any wolf born of earth. Do not go searching for whatever did that.",choices:[{id:"wolf_attack.report_wounds",text:"Here are the pelts. Keep your guard up, Taras.",goto:"EXIT"}]},"taras.report_plain":{id:"taras.report_plain",npc:"taras_chub",text:"Good. Take your pay and pelts. Less trouble for my flock.",choices:[{id:"wolf_attack.report_plain",text:"Thanks for the coin.",goto:"EXIT"}]},"taras.saiga_hint":{id:"taras.saiga_hint",npc:"taras_chub",text:"Since you saved my sheep, I will tell you: near the dry ravine to the east, just past the boundary stones. I spotted an old horned male drinking at first light. Go straight there.",effects:[{t:"flag",k:"taras_gave_saiga_marker",v:!0},{t:"marker",id:"saiga_exact_spot",op:"add",at:"eastern_ravine",label:"Saiga Grazing Spot"}],choices:[{text:"That saves me hours of wandering. Thank you, Taras.",goto:"EXIT"}]},"taras.curse_hint":{id:"taras.curse_hint",npc:"taras_chub",text:"The Shapeshifter comes to the water ravine when the crescent moon sits right above the cliff. Wait for him downwind with coated steel, or you will not see dawn.",effects:[{t:"flag",k:"knows_shapeshifter_location",v:!0},{t:"marker",id:"shapeshifter_lair",op:"add",at:"watering_hole",label:"Watering Hole Ambush"}],choices:[{text:"I will be ready.",goto:"EXIT"}]},"taras.beasts":{id:"taras.beasts",npc:"taras_chub",text:"Only standard steppe wolves now. Nothing our muskets cannot handle.",choices:[{text:"Good to hear.",goto:"EXIT"}]}}},km={npc:"honta",greetings:[{id:"honta.default",npc:"honta",text:"Watch where you step, Cossack. Good yew and seasoned sinew take years to cure.",choices:[{text:"Naum sent me to hunt an old saiga. Any advice on taking it down?",conditions:[{t:"stage",quest:"first_hunt",stage:"investigate"}],goto:"honta.saiga_advice",once:!0},{text:"Look at this old arrow extracted from the disputed deer.",conditions:[{t:"stage",quest:"hunters_dispute",stage:"investigate"},{t:"item",id:"old_arrow",n:1}],goto:"honta.inspect_arrow",once:!0},{text:"Hryts wanted me to lie and give him a wolf pelt to pass your trial.",conditions:[{t:"stage",quest:"unlucky",stage:"start"}],goto:"honta.unlucky_snitch",once:!0},{text:"I want to practice my archery.",goto:"TRAIN"},{text:"Show me your bows and arrows.",goto:"TRADE"},{text:"Farewell.",goto:"EXIT"}]}],nodes:{"honta.saiga_advice":{id:"honta.saiga_advice",npc:"honta",text:"A saiga? An old male keeps apart from the herd, grazing at dawn by ravines. Approach downwind, or he smells you a verst away. Take these 3 viper-poison arrows—he will drop before he can bolt.",effects:[{t:"give",id:"poison_arrow",n:3},{t:"flag",k:"honta_gave_poison_arrows",v:!0}],choices:[{text:"Much appreciated, Honta.",goto:"EXIT"}]},"honta.inspect_arrow":{id:"honta.inspect_arrow",npc:"honta",text:"Hah! Look at the split goose feather and three copper wire wraps. Only Yatsko Lysytsia fletches shafts like that. He struck this beast first, days ago!",effects:[{t:"knows",k:"knows_yatsko_fletching"},{t:"journal",entry:"Honta identified the old arrow: it belongs to Yatsko Lysytsia."}],choices:[{text:"So neither Khoma nor Opanas killed it fairly. Good to know.",goto:"EXIT"}]},"honta.unlucky_snitch":{id:"honta.unlucky_snitch",npc:"honta",text:"That little scoundrel! A cheat has no place among Ingulsk hunters. I will have him cleaning the grease pits! Thank you for your honesty, brother.",choices:[{id:"unlucky.snitch_honta",text:"Honor matters more than easy praise.",goto:"EXIT"}]}}},Bm={npc:"naum_lysenko",greetings:[{id:"naum.greet_done_hunting",npc:"naum_lysenko",text:"Welcome, brother hunter. The palanka recognizes your eye and blade.",conditions:[{t:"quest",id:"first_hunt",state:"done"}],choices:[{text:"What about Khoma and Opanas arguing over the deer?",conditions:[{t:"quest",id:"hunters_dispute",state:["locked","available"]}],goto:"naum.start_dispute",once:!0},{text:"Glory to the Host.",goto:"EXIT"}]},{id:"naum.greet_default",npc:"naum_lysenko",text:"I am Naum Lysenko, Kurinnyi of Ingulsk. If you seek to join our palanka, words mean nothing. Prove you can hunt and track in the Wild Fields.",choices:[{text:"What must I do to prove myself?",conditions:[{t:"quest",id:"first_hunt",state:["locked","available"]}],goto:"naum.start_first_hunt",once:!0},{text:"I have returned with the horned saiga carcass.",conditions:[{t:"stage",quest:"first_hunt",stage:"report"},{t:"item",id:"saiga_carcass",n:1}],goto:"naum.turn_in_hunt",once:!0},{text:"Teach me the art of the saber and how to strengthen my strikes.",goto:"TRAIN"},{text:"I will return later.",goto:"EXIT"}]}],nodes:{"naum.start_first_hunt":{id:"naum.start_first_hunt",npc:"naum_lysenko",text:"Bring me an old male saiga with large horns. Not an easy prey. Ask around the camp first—experienced lads can teach you a thing or two before you waste arrows in the grass.",effects:[{t:"quest",id:"first_hunt",op:"start"}],choices:[{text:"I will consult the hunters and head out.",goto:"EXIT"}]},"naum.turn_in_hunt":{id:"naum.turn_in_hunt",npc:"naum_lysenko",text:"Magnificent horns! Clean shot right through the shoulder. You listened to the old hunters and did not rush like a greenhorn. Here—take this steel hunting knife.",choices:[{id:"first_hunt.turn_in_perfect",text:"A hunter is only as good as his preparation.",conditions:[{t:"flag",k:"first_hunt_perfect",v:!0}],goto:"EXIT"},{id:"first_hunt.turn_in_normal",text:"Here is the beast, Kurinnyi.",goto:"EXIT"}]},"naum.start_dispute":{id:"naum.start_dispute",npc:"naum_lysenko",text:"Those two hotheads Khoma and Opanas are screeching by the kurin over a dead buck! Go settle it before they draw daggers.",effects:[{t:"quest",id:"hunters_dispute",op:"start"}],choices:[{text:"I will look into it.",goto:"EXIT"}]}}},zm=[Om,km,Bm];class Gm{container;renderer;isoCamera;scene;terrain;lighting;particles;collision;combat;buildingManager;occlusionSystem;campfirePos=new L(0,0,-2);mazankaInteriorLights=[];bus;questManager;dialogueRunner;worldDirector;player;hud;dialogueUI;journalUI;debugOverlay;trainerUI;tradeUI;inventoryUI;lastTime=0;constructor(){this.container=document.getElementById("app-container"),this.bus=new Ac,this.questManager=new pm({flags:{},knowledge:{},rep:{ingulsk:0,taras_trust:0,naum_trust:0,honta_trust:0},timeMinutes:480,chapter:1,inventory:{salo:2,cossack_saber:1,paturnakh_ring:1}},this.bus),this.questManager.registerQuests(Fm),this.dialogueRunner=new mm(this.questManager,this.bus),this.dialogueRunner.registerTrees(zm),this.scene=new Wl,this.scene.background=new Kt(1712425),this.scene.fog=new Ur(5398612,.007),this.renderer=new hm({container:this.container}),this.isoCamera=new zs(window.innerWidth/window.innerHeight),this.lighting=new dm(this.scene),this.terrain=new um(this.scene),this.collision=new xm,this.setupColliders(),this.combat=new Mm(this.scene,this.terrain,this.collision,this.bus),this.buildingManager=new ym,this.occlusionSystem=new Sm,this.buildingManager.onBuildingStateChange=(e,n,i)=>{n&&this.hud.showToast(`Entered ${i}`)},this.worldDirector=new _m(this.scene,this.terrain,this.lighting,this.questManager,this.dialogueRunner,this.collision,this.combat),this.buildOutpostEnvironment(),this.particles=new fm(this.scene,this.campfirePos),this.spawnNpcs();const t=new Cs({role:"player",name:"Player Cossack"});t.group.position.set(0,0,4),this.scene.add(t.group),this.player=new vm(t,this.terrain,this.worldDirector,this.bus,this.collision,this.combat),this.isoCamera.snapToTarget(t.group.position),this.hud=new Em,this.dialogueUI=new wm(this.dialogueRunner),this.journalUI=new bm(this.questManager),this.debugOverlay=new Tm(this.questManager,this.player,this.worldDirector),this.trainerUI=new Am,this.tradeUI=new Cm,this.inventoryUI=new Rm,this.hud.onJournalClick(()=>this.journalUI.toggle()),this.hud.onDebugClick(()=>this.debugOverlay.toggle()),this.hud.onInventoryClick(()=>this.inventoryUI.toggle()),this.dialogueUI.onSpecialAction((e,n)=>{e==="TRAIN"?this.trainerUI.open(n,this.player.stats,(i,a)=>{const r=a?` You reached ${a} rank!`:"";this.hud.showToast(`Trained ${i}!${r}`),this.hud.updateStats(this.player.stats)},()=>{this.player.isInteracting=!1,this.worldDirector.interactingNpcId=null}):e==="TRADE"&&this.tradeUI.open(n,this.player.stats,this.questManager.getWorldState().inventory,i=>{this.hud.showToast(i),this.hud.updateStats(this.player.stats)},()=>{this.player.isInteracting=!1,this.worldDirector.interactingNpcId=null})}),this.inventoryUI.open(e=>{this.hud.showToast(`Consumed ${e.name}! Restored ${e.healHp} HP.`),this.hud.updateStats(this.player.stats)}),this.inventoryUI.close(),this.questManager.onJournal(e=>{this.hud.showToast(e)}),window.addEventListener("keydown",e=>{this.isAnyModalOpen()||(e.key.toLowerCase()==="e"||e.code==="KeyE"||e.key==="у"?this.handleInteract():(e.code==="Space"||e.key===" ")&&this.handleAttack())}),window.addEventListener("resize",()=>{this.isoCamera.setAspect(window.innerWidth/window.innerHeight)}),setTimeout(()=>{this.hud.showToast("Welcome to SichWorld! [WASD] Move, [Space] Saber Slash, [Q] Dodge Roll, [E] Interact/Loot, [+/- or Wheel] Zoom, [I] Bag, [J] Journal.")},600),requestAnimationFrame(this.loop.bind(this))}isAnyModalOpen(){return this.dialogueUI.isOpen()||this.trainerUI.isOpen()||this.tradeUI.isOpen()||this.inventoryUI.isOpen()||this.journalUI.isOpen()}setupColliders(){this.collision.addBox(-11.1,-10.4,-25.5,-10.5),this.collision.addBox(-1.6,-.9,-25.5,-10.5),this.collision.addBox(-11,-1,-25.6,-24.9),this.collision.addBox(-11,-7.1,-11.1,-10.4),this.collision.addBox(-4.9,-1,-11.1,-10.4),this.collision.addBox(-7.4,-4.6,-20.2,-18.8),this.collision.addBox(-10.4,-8.8,-25,-23.5),this.collision.addBox(11.6,12.4,-19.5,-8.5),this.collision.addBox(19.6,20.4,-19.5,-8.5),this.collision.addBox(11.8,20.2,-19.6,-18.9),this.collision.addBox(11.8,14.9,-9.1,-8.4),this.collision.addBox(17.1,20.2,-9.1,-8.4),this.collision.addBox(12.3,13.7,-15.8,-12.2),this.collision.addBox(-20,-10,3,13),this.collision.addCircle(this.campfirePos.x,this.campfirePos.z,1.25),this.collision.addBox(-29,-27,-16,16),this.collision.addBox(-22,22,-33.5,-30.5);const t=[[34,16,2],[44,-2,2.6],[48,22,1.8],[32,-24,2.2],[-32,-18,1.8],[-26,-28,2.6]];for(const[n,i,a]of t)this.collision.addCircle(n,i,a*.85);const e=[[24,-20,.9],[-22,-14,.9],[36,18,.8],[-24,22,.8]];for(const[n,i,a]of e)this.collision.addCircle(n,i,a);this.collision.addCircle(5,-8,1.4),this.collision.addCircle(-4.2,-3.2,.7),this.collision.addBox(-15.2,-12.8,-.3,3.3),this.collision.addCircle(-17.5,14.5,2),this.collision.addBox(-10.6,-5,-6.3,-5.7),this.collision.addBox(-2,.5,-6.3,-5.7),this.collision.addBox(.1,.7,-13,-6),this.collision.addBox(9.2,13.8,-5.8,-5.2),this.collision.addBox(17.5,21.5,-5.8,-5.2)}buildOutpostEnvironment(){const t=ge.createGroundFootpaths(this.terrain);this.scene.add(t);const e=ge.createEnterableKurin(9.5,14.5,3.8,"headquarters");e.group.position.set(-6,0,-18),this.scene.add(e.group),this.mazankaInteriorLights.push(e.interiorLight),this.buildingManager.registerBuilding({id:"headquarters",name:"Naum's Headquarters",group:e.group,roofGroup:e.roofGroup,interiorGroup:e.interiorGroup,bounds:{minX:-10.75,maxX:-1.25,minZ:-25.25,maxZ:-8.8},roofMaterials:e.roofMaterials,currentRoofOpacity:1,targetRoofOpacity:1,isPlayerInside:!1});const n=ge.createEnterableKurin(8,10.5,3.6,"workshop");n.group.position.set(16,0,-14),this.scene.add(n.group),this.mazankaInteriorLights.push(n.interiorLight),this.buildingManager.registerBuilding({id:"workshop",name:"Honta's Workshop",group:n.group,roofGroup:n.roofGroup,interiorGroup:n.interiorGroup,bounds:{minX:12,maxX:20,minZ:-19.25,maxZ:-6.8},roofMaterials:n.roofMaterials,currentRoofOpacity:1,targetRoofOpacity:1,isPlayerInside:!1}),this.occlusionSystem.registerGroup(e.roofGroup),this.occlusionSystem.registerGroup(n.roofGroup);const i=ge.createWattleFence(5.5,1.15,!0);i.position.set(-7.8,this.terrain.getHeightAt(-7.8,-6),-6),this.scene.add(i),this.occlusionSystem.registerGroup(i);const a=ge.createWattleFence(2.5,1.15,!0);a.position.set(-.8,this.terrain.getHeightAt(-.8,-6),-6),this.scene.add(a),this.occlusionSystem.registerGroup(a);const r=ge.createWattleFence(7,1.15,!1);r.rotation.y=Math.PI/2,r.position.set(.4,this.terrain.getHeightAt(.4,-9.5),-9.5),this.scene.add(r),this.occlusionSystem.registerGroup(r);const o=ge.createWattleFence(4.6,1.15,!0);o.position.set(11.5,this.terrain.getHeightAt(11.5,-5.5),-5.5),this.scene.add(o),this.occlusionSystem.registerGroup(o);const l=ge.createWattleFence(4,1.15,!0);l.position.set(19.5,this.terrain.getHeightAt(19.5,-5.5),-5.5),this.scene.add(l),this.occlusionSystem.registerGroup(l);const c=[[-2.2,-10.5,5],[-.8,-14.5,4],[-5.2,-6.2,4],[11.5,-8.2,5],[7.4,-8.2,4]];for(const[C,D,k]of c){const G=ge.createSunflowerCluster(k),O=this.terrain.getHeightAt(C,D);G.position.set(C,O,D),this.scene.add(G),this.occlusionSystem.registerGroup(G)}const h=[[-11.1,-15,4],[20.4,-13,4]];for(const[C,D,k]of h){const G=ge.createMallowCluster(k),O=this.terrain.getHeightAt(C,D);G.position.set(C,O,D),this.scene.add(G),this.occlusionSystem.registerGroup(G)}const u=ge.createSteppeWell(),d=this.terrain.getHeightAt(5,-8);u.position.set(5,d,-8),this.scene.add(u),this.occlusionSystem.registerGroup(u);const m=ge.createChoppingBlock(),g=this.terrain.getHeightAt(-4.2,-3.2);m.position.set(-4.2,g,-3.2),this.scene.add(m);const M=ge.createCossackCart(),p=this.terrain.getHeightAt(-14,1.5);M.position.set(-14,p,1.5),M.rotation.y=.35,this.scene.add(M),this.occlusionSystem.registerGroup(M);const f=ge.createHaystack(2.1,2.8),x=this.terrain.getHeightAt(-17.5,14.5);f.position.set(-17.5,x,14.5),this.scene.add(f),this.occlusionSystem.registerGroup(f);const S=ge.createOutsideBench(2.2);S.position.set(-3.7,this.terrain.getHeightAt(-3.7,-10.4),-10.4),this.scene.add(S);const y=ge.createOutsideBench(2.2);y.position.set(18.3,this.terrain.getHeightAt(18.3,-8.4),-8.4),this.scene.add(y);const A=ge.createSheepPen(10,10);A.position.set(-15,0,8),this.scene.add(A);const T=ge.createCampfire();T.position.copy(this.campfirePos),this.scene.add(T),this.lighting.addCampfireLight(this.campfirePos);const R=ge.createPalisade(32,3.4);R.rotation.y=Math.PI/2,R.position.set(-28,0,0),this.scene.add(R),this.occlusionSystem.registerGroup(R);const v=ge.createPalisade(44,3.4);v.position.set(0,0,-32),this.scene.add(v),this.occlusionSystem.registerGroup(v);const b=[[24,-20,7.5],[-22,-14,8],[36,18,6.8],[-24,22,7.2]];for(const[C,D,k]of b){const G=ge.createSteppeOak(k),O=this.terrain.getHeightAt(C,D);G.position.set(C,O,D),this.scene.add(G),this.occlusionSystem.registerGroup(G)}const z=[[34,16,2],[44,-2,2.6],[48,22,1.8],[32,-24,2.2],[-32,-18,1.8],[-26,-28,2.6]];for(const[C,D,k]of z){const G=ge.createBoulder(k),O=this.terrain.getHeightAt(C,D);G.position.set(C,O,D),this.scene.add(G),this.occlusionSystem.registerGroup(G)}}spawnNpcs(){const t=new Cs({role:"naum",name:"Naum Lysenko (Kurinnyi)",isInteractable:!0});this.worldDirector.registerNpc("naum_lysenko",t,"naum_kurin");const e=new Cs({role:"taras",name:"Taras Chub (Shepherd)",isInteractable:!0});this.worldDirector.registerNpc("taras_chub",e,"sheep_pen");const n=new Cs({role:"honta",name:"Honta (Bowyer)",isInteractable:!0});this.worldDirector.registerNpc("honta",n,"honta_workshop")}handleInteract(){if(this.isAnyModalOpen())return;if(this.player.nearbyLootMob){const e=this.player.loot(this.questManager.getWorldState().inventory);if(e.looted){this.hud.showToast(`Looted ${e.mobName}: ${e.items?.join(", ")}`),this.hud.updateStats(this.player.stats);return}}const t=this.player.nearbyNpcId;if(t){this.player.isInteracting=!0,this.worldDirector.interactingNpcId=t;const e=this.worldDirector.npcs.get(t);if(e){const n=this.player.character.group.position,i=e.group.position;e.setFacingDirection(n.x-i.x,n.z-i.z)}this.dialogueUI.open(t,()=>{this.player.isInteracting=!1,this.worldDirector.interactingNpcId=null,this.worldDirector.updateNpcMarkers()})}}handleAttack(){if(this.isAnyModalOpen())return;const t=this.player.attack();if(t.hit){const e=t.isCrit?"CRITICAL HIT! ":"";t.killed&&this.hud.showToast(`${e}Slayed ${t.mobName}! (Press [E] to loot)`),this.hud.updateStats(this.player.stats)}}loop(t){requestAnimationFrame(this.loop.bind(this)),this.lastTime===0&&(this.lastTime=t);const e=Math.min(.1,(t-this.lastTime)/1e3);this.lastTime=t;const n=this.player.character.group.position;this.player.update(e),this.combat.update(e,n,this.player.stats,r=>{this.player.takeDamage(r),this.hud.updateStats(this.player.stats)}),this.buildingManager.update(e,n),this.occlusionSystem.update(e,n,this.isoCamera.camera),this.isoCamera.followTarget(n,.08),this.worldDirector.update(e,n);const i=this.questManager.getWorldState().timeMinutes;this.terrain.update(t*.001),this.particles.update(e,this.campfirePos,i);const a=Math.sin(t*.007)*.35+Math.sin(t*.017)*.2;for(const r of this.mazankaInteriorLights)r.intensity=2.6+a;this.hud.updateStats(this.player.stats),this.hud.updateTime(this.questManager.getWorldState()),this.inventoryUI.setContext(this.questManager.getWorldState().inventory,this.player.stats),this.player.nearbyLootMob&&!this.isAnyModalOpen()?this.hud.showPrompt(`Press <strong>[E]</strong> to loot fallen <strong>${this.player.nearbyLootMob.name}</strong>`):this.player.nearbyNpcName&&!this.isAnyModalOpen()?this.hud.showPrompt(`Press <strong>[E]</strong> to speak with <strong>${this.player.nearbyNpcName}</strong>`):this.hud.hidePrompt(),this.renderer.render(this.scene,this.isoCamera.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Gm});
