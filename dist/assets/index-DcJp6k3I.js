(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yr="160",Zn={ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lc=0,Wr=1,hc=2,ba=1,dc=2,hn=3,Cn=0,Ue=1,en=2,An=0,xi=1,Xr=2,qr=3,Yr=4,uc=5,zn=100,fc=101,pc=102,jr=103,Kr=104,mc=200,gc=201,_c=202,xc=203,ur=204,fr=205,vc=206,Mc=207,Sc=208,Ec=209,Tc=210,yc=211,bc=212,Ac=213,wc=214,Rc=0,Cc=1,Pc=2,vs=3,Lc=4,Dc=5,Ic=6,Uc=7,br=0,Nc=1,Oc=2,wn=0,Fc=1,Bc=2,Hc=3,zc=4,Gc=5,kc=6,Aa=300,Mi=301,Si=302,pr=303,mr=304,bs=306,Ni=1e3,Ke=1001,gr=1002,Pe=1003,$r=1004,Is=1005,Ge=1006,Vc=1007,Oi=1008,Rn=1009,Wc=1010,Xc=1011,Ar=1012,wa=1013,Tn=1014,yn=1015,Fi=1016,Ra=1017,Ca=1018,kn=1020,qc=1021,$e=1023,Yc=1024,jc=1025,Vn=1026,Ei=1027,Kc=1028,Pa=1029,$c=1030,La=1031,Da=1033,Us=33776,Ns=33777,Os=33778,Fs=33779,Zr=35840,Jr=35841,Qr=35842,to=35843,Ia=36196,eo=37492,no=37496,io=37808,so=37809,ro=37810,oo=37811,ao=37812,co=37813,lo=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,Bs=36492,xo=36494,vo=36495,Zc=36283,Mo=36284,So=36285,Eo=36286,Ua=3e3,Wn=3001,Jc=3200,Qc=3201,Na=0,tl=1,Ve="",Te="srgb",mn="srgb-linear",wr="display-p3",As="display-p3-linear",Ms="linear",re="srgb",Ss="rec709",Es="p3",Qn=7680,To=519,el=512,nl=513,il=514,Oa=515,sl=516,rl=517,ol=518,al=519,yo=35044,bo="300 es",_r=1035,un=2e3,Ts=2001;class jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,xr=180/Math.PI;function zi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function cl(s,t){return(s%t+t)%t}function Hs(s,t,e){return(1-e)*s+e*t}function Ao(s){return(s&s-1)===0&&s!==0}function vr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ll={DEG2RAD:_s};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,i,r,a,o,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],T=i[1],v=i[4],A=i[7],D=i[2],R=i[5],w=i[8];return r[0]=a*_+o*T+c*D,r[3]=a*m+o*v+c*R,r[6]=a*f+o*A+c*w,r[1]=l*_+h*T+d*D,r[4]=l*m+h*v+d*R,r[7]=l*f+h*A+d*w,r[2]=u*_+p*T+g*D,r[5]=u*m+p*v+g*R,r[8]=u*f+p*A+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Yt;function Fa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hl(){const s=ys("canvas");return s.style.display="block",s}const wo={};function Ui(s){s in wo||(wo[s]=!0,console.warn(s))}const Ro=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Co=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[mn]:{transfer:Ms,primaries:Ss,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:re,primaries:Ss,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[As]:{transfer:Ms,primaries:Es,toReference:s=>s.applyMatrix3(Co),fromReference:s=>s.applyMatrix3(Ro)},[wr]:{transfer:re,primaries:Es,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Co),fromReference:s=>s.applyMatrix3(Ro).convertLinearToSRGB()}},dl=new Set([mn,As]),ne={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!dl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ji[t].toReference,i=ji[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ji[s].primaries},getTransfer:function(s){return s===Ve?Ms:ji[s].transfer}};function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ti;class Ba{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=ys("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ul=0;class Ha{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=zi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ks(i[a].image)):r.push(ks(i[a]))}else r=ks(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ba.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fl=0;class Ne extends jn{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Ke,i=Ke,r=Ge,a=Oi,o=$e,c=Rn,l=Ne.DEFAULT_ANISOTROPY,h=Ve){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=zi(),this.name="",this.source=new Ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wn?Te:Ve),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Aa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Wn:Ua}set encoding(t){Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Wn?Te:Ve}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Aa;Ne.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,i=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,A=(p+1)/2,D=(f+1)/2,R=(h+u)/4,w=(d+_)/4,X=(g+m)/4;return v>A&&v>D?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=w/n):A>D?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=R/i,r=X/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=w/r,i=X/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pl extends jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?Te:Ve),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ha(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class za extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-o;const f=c*u+l*p+h*g+d*_,T=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const D=Math.sqrt(v),R=Math.atan2(D,f*T);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}const A=o*T;if(c=c*m+u*A,l=l*m+p*A,h=h*m+g*A,d=d*m+_*A,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new L,Po=new Pn;class qn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(t.matrixWorld),this.union(Ki)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),$i.subVectors(this.max,Ci),ei.subVectors(t.a,Ci),ni.subVectors(t.b,Ci),ii.subVectors(t.c,Ci),_n.subVectors(ni,ei),xn.subVectors(ii,ni),Un.subVectors(ei,ii);let e=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-Un.z,Un.y,_n.z,0,-_n.x,xn.z,0,-xn.x,Un.z,0,-Un.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-Un.y,Un.x,0];return!Ws(e,ei,ni,ii,$i)||(e=[1,0,0,0,1,0,0,0,1],!Ws(e,ei,ni,ii,$i))?!1:(Zi.crossVectors(_n,xn),e=[Zi.x,Zi.y,Zi.z],Ws(e,ei,ni,ii,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new L,new L,new L,new L,new L,new L,new L,new L],Xe=new L,Ki=new qn,ei=new L,ni=new L,ii=new L,_n=new L,xn=new L,Un=new L,Ci=new L,$i=new L,Zi=new L,Nn=new L;function Ws(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Nn.fromArray(s,r);const o=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const gl=new qn,Pi=new L,Xs=new L;class Rr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);const e=Pi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(Xs)),this.expandByPoint(Pi.copy(t.center).sub(Xs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new L,qs=new L,Ji=new L,vn=new L,Ys=new L,Qi=new L,js=new L;class Cr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qs.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ji),o=vn.dot(this.direction),c=-vn.dot(Ji),l=vn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qs).addScaledVector(Ji,u),p}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,r){Ys.subVectors(e,t),Qi.subVectors(n,t),js.crossVectors(Ys,Qi);let a=this.direction.dot(js),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const c=o*this.direction.dot(Qi.crossVectors(vn,Qi));if(c<0)return null;const l=o*this.direction.dot(Ys.cross(vn));if(l<0||c+l>a)return null;const h=-o*vn.dot(js);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_l,t,xl)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Mn.crossVectors(n,Fe),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Mn.crossVectors(n,Fe)),Mn.normalize(),ts.crossVectors(Fe,Mn),i[0]=Mn.x,i[4]=ts.x,i[8]=Fe.x,i[1]=Mn.y,i[5]=ts.y,i[9]=Fe.y,i[2]=Mn.z,i[6]=ts.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],v=n[7],A=n[11],D=n[15],R=i[0],w=i[4],X=i[8],M=i[12],y=i[1],z=i[5],V=i[9],J=i[13],P=i[2],O=i[6],k=i[10],j=i[14],q=i[3],Y=i[7],K=i[11],it=i[15];return r[0]=a*R+o*y+c*P+l*q,r[4]=a*w+o*z+c*O+l*Y,r[8]=a*X+o*V+c*k+l*K,r[12]=a*M+o*J+c*j+l*it,r[1]=h*R+d*y+u*P+p*q,r[5]=h*w+d*z+u*O+p*Y,r[9]=h*X+d*V+u*k+p*K,r[13]=h*M+d*J+u*j+p*it,r[2]=g*R+_*y+m*P+f*q,r[6]=g*w+_*z+m*O+f*Y,r[10]=g*X+_*V+m*k+f*K,r[14]=g*M+_*J+m*j+f*it,r[3]=T*R+v*y+A*P+D*q,r[7]=T*w+v*z+A*O+D*Y,r[11]=T*X+v*V+A*k+D*K,r[15]=T*M+v*J+A*j+D*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*p-n*c*p)+_*(+e*c*p-e*l*u+r*a*u-i*a*p+i*l*h-r*c*h)+m*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+f*(-i*o*h-e*c*d+e*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],T=d*m*l-_*u*l+_*c*p-o*m*p-d*c*f+o*u*f,v=g*u*l-h*m*l-g*c*p+a*m*p+h*c*f-a*u*f,A=h*_*l-g*d*l+g*o*p-a*_*p-h*o*f+a*d*f,D=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,R=e*T+n*v+i*A+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=T*w,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*w,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*w,t[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*p-n*c*p)*w,t[4]=v*w,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*w,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*f-e*c*f)*w,t[7]=(a*u*r-h*c*r+h*i*l-e*u*l-a*i*p+e*c*p)*w,t[8]=A*w,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*w,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*w,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*w,t[12]=D*w,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*w,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*w,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*u+e*o*u)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,T=c*l,v=c*h,A=c*d,D=n.x,R=n.y,w=n.z;return i[0]=(1-(_+f))*D,i[1]=(p+A)*D,i[2]=(g-v)*D,i[3]=0,i[4]=(p-A)*R,i[5]=(1-(u+f))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+v)*w,i[9]=(m-T)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),o=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const l=1/r,h=1/a,d=1/o;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=un){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(o===un)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ts)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=un){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*l,p=(n+i)*h;let g,_;if(o===un)g=(a+r)*d,_=-2*d;else if(o===Ts)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new L,qe=new me,_l=new L(0,0,0),xl=new L(1,1,1),Mn=new L,ts=new L,Fe=new L,Lo=new me,Do=new Pn;class bi{constructor(t=0,e=0,n=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Do.setFromEuler(this),this.setFromQuaternion(Do,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Pr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vl=0;const Io=new L,ri=new Pn,an=new me,es=new L,Li=new L,Ml=new L,Sl=new Pn,Uo=new L(1,0,0),No=new L(0,1,0),Oo=new L(0,0,1),El={type:"added"},Tl={type:"removed"};class Re extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vl++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new L,e=new bi,n=new Pn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Yt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Oo,t)}translateOnAxis(t,e){return Io.copy(t).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Li,es,this.up):an.lookAt(es,Li,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(an),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(El)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,Ml),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Sl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DEFAULT_UP=new L(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new L,cn=new L,Ks=new L,ln=new L,oi=new L,ai=new L,Fo=new L,$s=new L,Zs=new L,Js=new L;let ns=!1;class je{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ye.subVectors(i,e),cn.subVectors(n,e),Ks.subVectors(t,e);const a=Ye.dot(Ye),o=Ye.dot(cn),c=Ye.dot(Ks),l=cn.dot(cn),h=cn.dot(Ks),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(t,e,n,i,r,a,o,c){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(a,ln.y),c.addScaledVector(o,ln.z),c)}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),cn.subVectors(t,e),Ye.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ye.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;oi.subVectors(i,n),ai.subVectors(r,n),$s.subVectors(t,n);const c=oi.dot($s),l=ai.dot($s);if(c<=0&&l<=0)return e.copy(n);Zs.subVectors(t,i);const h=oi.dot(Zs),d=ai.dot(Zs);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(oi,a);Js.subVectors(t,r);const p=oi.dot(Js),g=ai.dot(Js);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ai,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Fo.subVectors(r,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Fo,o);const f=1/(m+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(oi,a).addScaledVector(ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},is={h:0,s:0,l:0};function Qs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=cl(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qs(a,r,t+1/3),this.g=Qs(a,r,t),this.b=Qs(a,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=Ga[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ne.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Le(Ae.r*255,0,255))*65536+Math.round(Le(Ae.g*255,0,255))*256+Math.round(Le(Ae.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,r=Ae.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Te){ne.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(is);const n=Hs(Sn.h,is.h,e),i=Hs(Sn.s,is.s,e),r=Hs(Sn.l,is.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Zt;Zt.NAMES=Ga;let yl=0;class Gi extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=xi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=fr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fn extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new L,ss=new Ft;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yo&&(t.usage=this.usage),t}}class ka extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Va extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bl=0;const ze=new me,tr=new Re,ci=new L,Be=new qn,Di=new qn,Me=new L;class Ze extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fa(t)?Va:ka)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return tr.lookAt(t),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Be.min,Di.min),Be.expandByPoint(Me),Me.addVectors(Be.max,Di.max),Be.expandByPoint(Me)):(Be.expandByPoint(Di.min),Be.expandByPoint(Di.max))}Be.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Me.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(t,l),Me.add(ci)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let y=0;y<o;y++)l[y]=new L,h[y]=new L;const d=new L,u=new L,p=new L,g=new Ft,_=new Ft,m=new Ft,f=new L,T=new L;function v(y,z,V){d.fromArray(i,y*3),u.fromArray(i,z*3),p.fromArray(i,V*3),g.fromArray(a,y*2),_.fromArray(a,z*2),m.fromArray(a,V*2),u.sub(d),p.sub(d),_.sub(g),m.sub(g);const J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(J),T.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(J),l[y].add(f),l[z].add(f),l[V].add(f),h[y].add(T),h[z].add(T),h[V].add(T))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let y=0,z=A.length;y<z;++y){const V=A[y],J=V.start,P=V.count;for(let O=J,k=J+P;O<k;O+=3)v(n[O+0],n[O+1],n[O+2])}const D=new L,R=new L,w=new L,X=new L;function M(y){w.fromArray(r,y*3),X.copy(w);const z=l[y];D.copy(z),D.sub(w.multiplyScalar(w.dot(z))).normalize(),R.crossVectors(X,z);const J=R.dot(h[y])<0?-1:1;c[y*4]=D.x,c[y*4+1]=D.y,c[y*4+2]=D.z,c[y*4+3]=J}for(let y=0,z=A.length;y<z;++y){const V=A[y],J=V.start,P=V.count;for(let O=J,k=J+P;O<k;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new nn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new me,On=new Cr,rs=new Rr,Ho=new L,li=new L,hi=new L,di=new L,er=new L,os=new L,as=new Ft,cs=new Ft,ls=new Ft,zo=new L,Go=new L,ko=new L,hs=new L,ds=new L;class jt extends Re{constructor(t=new Ze,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(er.fromBufferAttribute(d,t),a?os.addScaledVector(er,h):os.addScaledVector(er.sub(e),h))}e.add(os)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(rs.containsPoint(On.origin)===!1&&(On.intersectSphere(rs,Ho)===null||On.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(Bo.copy(r).invert(),On.copy(t.ray).applyMatrix4(Bo),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,D=v;A<D;A+=3){const R=o.getX(A),w=o.getX(A+1),X=o.getX(A+2);i=us(this,f,t,n,l,h,d,R,w,X),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=o.getX(m),v=o.getX(m+1),A=o.getX(m+2);i=us(this,a,t,n,l,h,d,T,v,A),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,D=v;A<D;A+=3){const R=A,w=A+1,X=A+2;i=us(this,f,t,n,l,h,d,R,w,X),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,v=m+1,A=m+2;i=us(this,a,t,n,l,h,d,T,v,A),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Al(s,t,e,n,i,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Cn,o),c===null)return null;ds.copy(o),ds.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ds);return l<e.near||l>e.far?null:{distance:l,point:ds.clone(),object:s}}function us(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,li),s.getVertexPosition(c,hi),s.getVertexPosition(l,di);const h=Al(s,t,e,n,li,hi,di,hs);if(h){i&&(as.fromBufferAttribute(i,o),cs.fromBufferAttribute(i,c),ls.fromBufferAttribute(i,l),h.uv=je.getInterpolation(hs,li,hi,di,as,cs,ls,new Ft)),r&&(as.fromBufferAttribute(r,o),cs.fromBufferAttribute(r,c),ls.fromBufferAttribute(r,l),h.uv1=je.getInterpolation(hs,li,hi,di,as,cs,ls,new Ft),h.uv2=h.uv1),a&&(zo.fromBufferAttribute(a,o),Go.fromBufferAttribute(a,c),ko.fromBufferAttribute(a,l),h.normal=je.getInterpolation(hs,li,hi,di,zo,Go,ko,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};je.getNormal(li,hi,di,d.normal),h.face=d}return h}class de extends Ze{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function g(_,m,f,T,v,A,D,R,w,X,M){const y=A/w,z=D/X,V=A/2,J=D/2,P=R/2,O=w+1,k=X+1;let j=0,q=0;const Y=new L;for(let K=0;K<k;K++){const it=K*z-J;for(let ot=0;ot<O;ot++){const G=ot*y-V;Y[_]=G*T,Y[m]=it*v,Y[f]=P,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ot/w),d.push(1-K/X),j+=1}}for(let K=0;K<X;K++)for(let it=0;it<w;it++){const ot=u+it+O*K,G=u+it+O*(K+1),$=u+(it+1)+O*(K+1),ht=u+(it+1)+O*K;c.push(ot,G,ht),c.push(G,$,ht),q+=6}o.addGroup(p,q,M),p+=q,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=Ti(s[e]);for(const i in n)t[i]=n[i]}return t}function wl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wa(s){return s.getRenderTarget()===null?s.outputColorSpace:ne.workingColorSpace}const Rl={clone:Ti,merge:Ce};var Cl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cl,this.fragmentShader=Pl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=wl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xa extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends Xa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,fi=1;class Ll extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ke(ui,fi,t,e);i.layers=this.layers,this.add(i);const r=new ke(ui,fi,t,e);r.layers=this.layers,this.add(r);const a=new ke(ui,fi,t,e);a.layers=this.layers,this.add(a);const o=new ke(ui,fi,t,e);o.layers=this.layers,this.add(o);const c=new ke(ui,fi,t,e);c.layers=this.layers,this.add(c);const l=new ke(ui,fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qa extends Ne{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dl extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Wn?Te:Ve),this.texture=new qa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new de(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:An});r.uniforms.tEquirect.value=e;const a=new jt(i,r),o=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Ge),new Ll(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const nr=new L,Il=new L,Ul=new Yt;class En{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nr.subVectors(n,e).cross(Il.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ul.getNormalMatrix(t),i=this.coplanarPoint(nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Rr,fs=new L;class Lr{constructor(t=new En,e=new En,n=new En,i=new En,r=new En,a=new En){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],T=i[13],v=i[14],A=i[15];if(n[0].setComponents(c-r,u-l,m-p,A-f).normalize(),n[1].setComponents(c+r,u+l,m+p,A+f).normalize(),n[2].setComponents(c+a,u+h,m+g,A+T).normalize(),n[3].setComponents(c-a,u-h,m-g,A-T).normalize(),n[4].setComponents(c-o,u-d,m-_,A-v).normalize(),e===un)n[5].setComponents(c+o,u+d,m+_,A+v).normalize();else if(e===Ts)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ya(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Nl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,p=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,d){const u=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,l),p.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?s.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):s.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class ki extends Ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const T=f*u-a;for(let v=0;v<l;v++){const A=v*d-r;g.push(A,-T,0),_.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const v=T+l*f,A=T+l*(f+1),D=T+1+l*(f+1),R=T+1+l*f;p.push(v,A,R),p.push(A,D,R)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ol=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fl=`#ifdef USE_ALPHAHASH
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
#endif`,Bl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kl=`#ifdef USE_AOMAP
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
#endif`,Vl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wl=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Xl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ql=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kl=`#ifdef USE_IRIDESCENCE
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
#endif`,$l=`#ifdef USE_BUMPMAP
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
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rh=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ah=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ph=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
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
}`,yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Ch=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Nh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Oh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
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
}`,kd=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vd=`#define DISTANCE
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
}`,Wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kd=`#include <common>
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
}`,$d=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zd=`#define LAMBERT
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
}`,Jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qd=`#define MATCAP
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
}`,tu=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,eu=`#define NORMAL
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
}`,nu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iu=`#define PHONG
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
}`,su=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ru=`#define STANDARD
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
}`,ou=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,au=`#define TOON
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
}`,cu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lu=`uniform float size;
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
}`,hu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,du=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,uu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vt={alphahash_fragment:Ol,alphahash_pars_fragment:Fl,alphamap_fragment:Bl,alphamap_pars_fragment:Hl,alphatest_fragment:zl,alphatest_pars_fragment:Gl,aomap_fragment:kl,aomap_pars_fragment:Vl,batching_pars_vertex:Wl,batching_vertex:Xl,begin_vertex:ql,beginnormal_vertex:Yl,bsdfs:jl,iridescence_fragment:Kl,bumpmap_pars_fragment:$l,clipping_planes_fragment:Zl,clipping_planes_pars_fragment:Jl,clipping_planes_pars_vertex:Ql,clipping_planes_vertex:th,color_fragment:eh,color_pars_fragment:nh,color_pars_vertex:ih,color_vertex:sh,common:rh,cube_uv_reflection_fragment:oh,defaultnormal_vertex:ah,displacementmap_pars_vertex:ch,displacementmap_vertex:lh,emissivemap_fragment:hh,emissivemap_pars_fragment:dh,colorspace_fragment:uh,colorspace_pars_fragment:fh,envmap_fragment:ph,envmap_common_pars_fragment:mh,envmap_pars_fragment:gh,envmap_pars_vertex:_h,envmap_physical_pars_fragment:Ch,envmap_vertex:xh,fog_vertex:vh,fog_pars_vertex:Mh,fog_fragment:Sh,fog_pars_fragment:Eh,gradientmap_pars_fragment:Th,lightmap_fragment:yh,lightmap_pars_fragment:bh,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:wh,lights_pars_begin:Rh,lights_toon_fragment:Ph,lights_toon_pars_fragment:Lh,lights_phong_fragment:Dh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Uh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Oh,lights_fragment_maps:Fh,lights_fragment_end:Bh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:zh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:kh,map_fragment:Vh,map_pars_fragment:Wh,map_particle_fragment:Xh,map_particle_pars_fragment:qh,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:jh,morphcolor_vertex:Kh,morphnormal_vertex:$h,morphtarget_pars_vertex:Zh,morphtarget_vertex:Jh,normal_fragment_begin:Qh,normal_fragment_maps:td,normal_pars_fragment:ed,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ad,iridescence_pars_fragment:cd,opaque_fragment:ld,packing:hd,premultiplied_alpha_fragment:dd,project_vertex:ud,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:xd,shadowmap_vertex:vd,shadowmask_pars_fragment:Md,skinbase_vertex:Sd,skinning_pars_vertex:Ed,skinning_vertex:Td,skinnormal_vertex:yd,specularmap_fragment:bd,specularmap_pars_fragment:Ad,tonemapping_fragment:wd,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Dd,uv_vertex:Id,worldpos_vertex:Ud,background_vert:Nd,background_frag:Od,backgroundCube_vert:Fd,backgroundCube_frag:Bd,cube_vert:Hd,cube_frag:zd,depth_vert:Gd,depth_frag:kd,distanceRGBA_vert:Vd,distanceRGBA_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:jd,meshbasic_vert:Kd,meshbasic_frag:$d,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:tu,meshnormal_vert:eu,meshnormal_frag:nu,meshphong_vert:iu,meshphong_frag:su,meshphysical_vert:ru,meshphysical_frag:ou,meshtoon_vert:au,meshtoon_frag:cu,points_vert:lu,points_frag:hu,shadow_vert:du,shadow_frag:uu,sprite_vert:fu,sprite_frag:pu},at={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},tn={basic:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ce([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ce([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ce([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ce([at.points,at.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ce([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ce([at.common,at.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ce([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ce([at.sprite,at.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ce([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ce([at.lights,at.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};tn.physical={uniforms:Ce([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ps={r:0,b:0,g:0};function mu(s,t,e,n,i,r,a){const o=new Zt(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(m,f){let T=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),T=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===bs)?(h===void 0&&(h=new jt(new de(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ti(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ne.getTransfer(v.colorSpace)!==re,(d!==v||u!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new jt(new ki(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ti(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(ps,Wa(s)),n.buffers.color.setClear(ps.r,ps.g,ps.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function gu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function d(P,O,k,j,q){let Y=!1;if(a){const K=_(j,k,O);l!==K&&(l=K,p(l.object)),Y=f(P,j,k,q),Y&&T(P,j,k,q)}else{const K=O.wireframe===!0;(l.geometry!==j.id||l.program!==k.id||l.wireframe!==K)&&(l.geometry=j.id,l.program=k.id,l.wireframe=K,Y=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,X(P,O,k,j),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,O,k){const j=k.wireframe===!0;let q=o[P.id];q===void 0&&(q={},o[P.id]=q);let Y=q[O.id];Y===void 0&&(Y={},q[O.id]=Y);let K=Y[j];return K===void 0&&(K=m(u()),Y[j]=K),K}function m(P){const O=[],k=[],j=[];for(let q=0;q<i;q++)O[q]=0,k[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:j,object:P,attributes:{},index:null}}function f(P,O,k,j){const q=l.attributes,Y=O.attributes;let K=0;const it=k.getAttributes();for(const ot in it)if(it[ot].location>=0){const $=q[ot];let ht=Y[ot];if(ht===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor)),$===void 0||$.attribute!==ht||ht&&$.data!==ht.data)return!0;K++}return l.attributesNum!==K||l.index!==j}function T(P,O,k,j){const q={},Y=O.attributes;let K=0;const it=k.getAttributes();for(const ot in it)if(it[ot].location>=0){let $=Y[ot];$===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const ht={};ht.attribute=$,$&&$.data&&(ht.data=$.data),q[ot]=ht,K++}l.attributes=q,l.attributesNum=K,l.index=j}function v(){const P=l.newAttributes;for(let O=0,k=P.length;O<k;O++)P[O]=0}function A(P){D(P,0)}function D(P,O){const k=l.newAttributes,j=l.enabledAttributes,q=l.attributeDivisors;k[P]=1,j[P]===0&&(s.enableVertexAttribArray(P),j[P]=1),q[P]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),q[P]=O)}function R(){const P=l.newAttributes,O=l.enabledAttributes;for(let k=0,j=O.length;k<j;k++)O[k]!==P[k]&&(s.disableVertexAttribArray(k),O[k]=0)}function w(P,O,k,j,q,Y,K){K===!0?s.vertexAttribIPointer(P,O,k,q,Y):s.vertexAttribPointer(P,O,k,j,q,Y)}function X(P,O,k,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=j.attributes,Y=k.getAttributes(),K=O.defaultAttributeValues;for(const it in Y){const ot=Y[it];if(ot.location>=0){let G=q[it];if(G===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const $=G.normalized,ht=G.itemSize,xt=e.get(G);if(xt===void 0)continue;const _t=xt.buffer,It=xt.type,Ut=xt.bytesPerElement,wt=n.isWebGL2===!0&&(It===s.INT||It===s.UNSIGNED_INT||G.gpuType===wa);if(G.isInterleavedBufferAttribute){const kt=G.data,U=kt.stride,ee=G.offset;if(kt.isInstancedInterleavedBuffer){for(let St=0;St<ot.locationSize;St++)D(ot.location+St,kt.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let St=0;St<ot.locationSize;St++)A(ot.location+St);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let St=0;St<ot.locationSize;St++)w(ot.location+St,ht/ot.locationSize,It,$,U*Ut,(ee+ht/ot.locationSize*St)*Ut,wt)}else{if(G.isInstancedBufferAttribute){for(let kt=0;kt<ot.locationSize;kt++)D(ot.location+kt,G.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let kt=0;kt<ot.locationSize;kt++)A(ot.location+kt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let kt=0;kt<ot.locationSize;kt++)w(ot.location+kt,ht/ot.locationSize,It,$,ht*Ut,ht/ot.locationSize*kt*Ut,wt)}}else if(K!==void 0){const $=K[it];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(ot.location,$);break;case 3:s.vertexAttrib3fv(ot.location,$);break;case 4:s.vertexAttrib4fv(ot.location,$);break;default:s.vertexAttrib1fv(ot.location,$)}}}}R()}function M(){V();for(const P in o){const O=o[P];for(const k in O){const j=O[k];for(const q in j)g(j[q].object),delete j[q];delete O[k]}delete o[P]}}function y(P){if(o[P.id]===void 0)return;const O=o[P.id];for(const k in O){const j=O[k];for(const q in j)g(j[q].object),delete j[q];delete O[k]}delete o[P.id]}function z(P){for(const O in o){const k=o[O];if(k[P.id]===void 0)continue;const j=k[P.id];for(const q in j)g(j[q].object),delete j[q];delete k[P.id]}}function V(){J(),h=!0,l!==c&&(l=c,p(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:V,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:A,disableUnusedAttributes:R}}function _u(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,u){if(u===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,u),e.update(d,r,u)}function l(h,d,u){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function xu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,A=a||t.has("OES_texture_float"),D=v&&A,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:R}}function vu(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new En,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,v=T*4;let A=f.clippingState||null;c.value=A,A=h(g,u,v,p);for(let D=0;D!==v;++D)A[D]=e[D];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,A=p;v!==_;++v,A+=4)a.copy(d[v]).applyMatrix4(T,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Mu(s){let t=new WeakMap;function e(a,o){return o===pr?a.mapping=Mi:o===mr&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pr||o===mr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Dl(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ja extends Xa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,Vo=[.125,.215,.35,.446,.526,.582],Gn=20,ir=new ja,Wo=new Zt;let sr=null,rr=0,or=0;const Hn=(1+Math.sqrt(5))/2,pi=1/Hn,Xo=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Hn,pi),new L(0,Hn,-pi),new L(pi,0,Hn),new L(-pi,0,Hn),new L(Hn,pi,0),new L(-Hn,pi,0)];class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sr,rr,or),t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Fi,format:$e,colorSpace:mn,depthBuffer:!1},i=Yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Su(r)),this._blurMaterial=Eu(r,t,e)}return i}_compileMaterial(t){const e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,n,i){const o=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wo),h.toneMapping=wn,h.autoClear=!1;const p=new fn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new jt(new de,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Wo),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):T===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;ms(i,T*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Mi||t.mapping===Si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Xo[(i-1)%Xo.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new jt(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const f=[];let T=0;for(let w=0;w<Gn;++w){const X=w/_,M=Math.exp(-X*X/2);f.push(M),w===0?T+=M:w<m&&(T+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const A=this._sizeLods[i],D=3*A*(i>v-gi?i-v+gi:0),R=4*(this._cubeSize-A);ms(e,D,R,3*A,2*A),c.setRenderTarget(e),c.render(d,ir)}}function Su(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+Vo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-gi?c=Vo[a-s+gi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),v=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,X=R>2?0:-1,M=[w,X,0,w+2/3,X,0,w+2/3,X+1,0,w,X,0,w+2/3,X+1,0,w,X+1,0];T.set(M,_*g*R),v.set(u,m*g*R);const y=[R,R,R,R,R,R];A.set(y,f*g*R)}const D=new Ze;D.setAttribute("position",new nn(T,_)),D.setAttribute("uv",new nn(v,m)),D.setAttribute("faceIndex",new nn(A,f)),t.push(D),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yo(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Eu(s,t,e){const n=new Float32Array(Gn),i=new L(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dr(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function jo(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dr(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ko(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Dr(){return`

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
	`}function Tu(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===pr||c===mr,h=c===Mi||c===Si;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new qo(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new qo(s));const u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bu(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let v=0,A=T.length;v<A;v+=3){const D=T[v+0],R=T[v+1],w=T[v+2];u.push(D,R,R,w,w,D)}}else if(g!==void 0){const T=g.array;_=g.version;for(let v=0,A=T.length/3-1;v<A;v+=3){const D=v+0,R=v+1,w=v+2;u.push(D,R,R,w,w,D)}}else return;const m=new(Fa(u)?Va:ka)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Au(s,t,e,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*c),e.update(g,r,1)}function d(p,g,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*c,_),e.update(g,r,_)}function u(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let T=0;T<_;T++)f+=g[T];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function wu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ru(s,t){return s[0]-t[0]}function Cu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Pu(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Se,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let O=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),A===!0&&(M=2),D===!0&&(M=3);let y=h.attributes.position.count*M,z=1;y>t.maxTextureSize&&(z=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const V=new Float32Array(y*z*4*_),J=new za(V,y,z,_);J.type=yn,J.needsUpdate=!0;const P=M*4;for(let k=0;k<_;k++){const j=R[k],q=w[k],Y=X[k],K=y*z*4*k;for(let it=0;it<j.count;it++){const ot=it*P;v===!0&&(a.fromBufferAttribute(j,it),V[K+ot+0]=a.x,V[K+ot+1]=a.y,V[K+ot+2]=a.z,V[K+ot+3]=0),A===!0&&(a.fromBufferAttribute(q,it),V[K+ot+4]=a.x,V[K+ot+5]=a.y,V[K+ot+6]=a.z,V[K+ot+7]=0),D===!0&&(a.fromBufferAttribute(Y,it),V[K+ot+8]=a.x,V[K+ot+9]=a.y,V[K+ot+10]=a.z,V[K+ot+11]=Y.itemSize===4?a.w:1)}}m={count:_,texture:J,size:new Ft(y,z)},r.set(h,m),h.addEventListener("dispose",O)}let f=0;for(let v=0;v<u.length;v++)f+=u[v];const T=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let A=0;A<g;A++)_[A]=[A,0];n[h.id]=_}for(let A=0;A<g;A++){const D=_[A];D[0]=A,D[1]=u[A]}_.sort(Cu);for(let A=0;A<8;A++)A<g&&_[A][1]?(o[A][0]=_[A][0],o[A][1]=_[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(Ru);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let T=0;for(let A=0;A<8;A++){const D=o[A],R=D[0],w=D[1];R!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+A)!==m[R]&&h.setAttribute("morphTarget"+A,m[R]),f&&h.getAttribute("morphNormal"+A)!==f[R]&&h.setAttribute("morphNormal"+A,f[R]),i[A]=w,T+=w):(m&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),f&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),i[A]=0)}const v=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Lu(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ka extends Ne{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Vn,h!==Vn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vn&&(n=Tn),n===void 0&&h===Ei&&(n=kn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=c!==void 0?c:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $a=new Ne,Za=new Ka(1,1);Za.compareFunction=Oa;const Ja=new za,Qa=new ml,tc=new qa,$o=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),ta=new Float32Array(4);function Ai(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=$o[i];if(r===void 0&&(r=new Float32Array(i),$o[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ws(s,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Du(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Iu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function Uu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function Nu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function Ou(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;ta.set(n),s.uniformMatrix2fv(this.addr,!1,ta),xe(e,n)}}function Fu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Qo.set(n),s.uniformMatrix3fv(this.addr,!1,Qo),xe(e,n)}}function Bu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Jo.set(n),s.uniformMatrix4fv(this.addr,!1,Jo),xe(e,n)}}function Hu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function Gu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function ku(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function Vu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function Xu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function qu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function Yu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Za:$a;e.setTexture2D(t||r,i)}function ju(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qa,i)}function Ku(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tc,i)}function $u(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ja,i)}function Zu(s){switch(s){case 5126:return Du;case 35664:return Iu;case 35665:return Uu;case 35666:return Nu;case 35674:return Ou;case 35675:return Fu;case 35676:return Bu;case 5124:case 35670:return Hu;case 35667:case 35671:return zu;case 35668:case 35672:return Gu;case 35669:case 35673:return ku;case 5125:return Vu;case 36294:return Wu;case 36295:return Xu;case 36296:return qu;case 35678:case 36198:case 36298:case 36306:case 35682:return Yu;case 35679:case 36299:case 36307:return ju;case 35680:case 36300:case 36308:case 36293:return Ku;case 36289:case 36303:case 36311:case 36292:return $u}}function Ju(s,t){s.uniform1fv(this.addr,t)}function Qu(s,t){const e=Ai(t,this.size,2);s.uniform2fv(this.addr,e)}function tf(s,t){const e=Ai(t,this.size,3);s.uniform3fv(this.addr,e)}function ef(s,t){const e=Ai(t,this.size,4);s.uniform4fv(this.addr,e)}function nf(s,t){const e=Ai(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sf(s,t){const e=Ai(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rf(s,t){const e=Ai(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function of(s,t){s.uniform1iv(this.addr,t)}function af(s,t){s.uniform2iv(this.addr,t)}function cf(s,t){s.uniform3iv(this.addr,t)}function lf(s,t){s.uniform4iv(this.addr,t)}function hf(s,t){s.uniform1uiv(this.addr,t)}function df(s,t){s.uniform2uiv(this.addr,t)}function uf(s,t){s.uniform3uiv(this.addr,t)}function ff(s,t){s.uniform4uiv(this.addr,t)}function pf(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||$a,r[a])}function mf(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Qa,r[a])}function gf(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||tc,r[a])}function _f(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ja,r[a])}function xf(s){switch(s){case 5126:return Ju;case 35664:return Qu;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return of;case 35667:case 35671:return af;case 35668:case 35672:return cf;case 35669:case 35673:return lf;case 5125:return hf;case 36294:return df;case 36295:return uf;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}class vf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zu(e.type)}}class Mf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xf(e.type)}}class Sf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function ea(s,t){s.seq.push(t),s.map[t.id]=t}function Ef(s,t,e){const n=s.name,i=n.length;for(ar.lastIndex=0;;){const r=ar.exec(n),a=ar.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ea(e,l===void 0?new vf(o,s,t):new Mf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Sf(o),ea(e,d)),e=d}}}class xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Ef(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function na(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Tf=37297;let yf=0;function bf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Af(s){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(s);let n;switch(t===e?n="":t===Es&&e===Ss?n="LinearDisplayP3ToLinearSRGB":t===Ss&&e===Es&&(n="LinearSRGBToLinearDisplayP3"),s){case mn:case As:return[n,"LinearTransferOETF"];case Te:case wr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ia(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+bf(s.getShaderSource(t),a)}else return i}function wf(s,t){const e=Af(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rf(s,t){let e;switch(t){case Fc:e="Linear";break;case Bc:e="Reinhard";break;case Hc:e="OptimizedCineon";break;case zc:e="ACESFilmic";break;case kc:e="AgX";break;case Gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_i).join(`
`)}function Pf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_i).join(`
`)}function Lf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Df(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function _i(s){return s!==""}function sa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ra(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const If=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(s){return s.replace(If,Nf)}const Uf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nf(s,t){let e=Vt[t];if(e===void 0){const n=Uf.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mr(e)}const Of=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oa(s){return s.replace(Of,Ff)}function Ff(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function aa(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ba?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case Si:t="ENVMAP_TYPE_CUBE";break;case bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Si:t="ENVMAP_MODE_REFRACTION";break}return t}function Gf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case br:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case Oc:t="ENVMAP_BLENDING_ADD";break}return t}function kf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vf(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Bf(e),l=Hf(e),h=zf(e),d=Gf(e),u=kf(e),p=e.isWebGL2?"":Cf(e),g=Pf(e),_=Lf(r),m=i.createProgram();let f,T,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(_i).join(`
`),f.length>0&&(f+=`
`),T=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(_i).join(`
`),T.length>0&&(T+=`
`)):(f=[aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_i).join(`
`),T=[p,aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Rf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,wf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_i).join(`
`)),a=Mr(a),a=sa(a,e),a=ra(a,e),o=Mr(o),o=sa(o,e),o=ra(o,e),a=oa(a),o=oa(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,T=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const A=v+f+a,D=v+T+o,R=na(i,i.VERTEX_SHADER,A),w=na(i,i.FRAGMENT_SHADER,D);i.attachShader(m,R),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function X(V){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(R).trim(),O=i.getShaderInfoLog(w).trim();let k=!0,j=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,w);else{const q=ia(i,R,"vertex"),Y=ia(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+q+`
`+Y)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||O==="")&&(j=!1);j&&(V.diagnostics={runnable:k,programLog:J,vertexShader:{log:P,prefix:f},fragmentShader:{log:O,prefix:T}})}i.deleteShader(R),i.deleteShader(w),M=new xs(i,m),y=Df(i,m)}let M;this.getUniforms=function(){return M===void 0&&X(this),M};let y;this.getAttributes=function(){return y===void 0&&X(this),y};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(m,Tf)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}let Wf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qf(t),e.set(t,n)),n}}class qf{constructor(t){this.id=Wf++,this.code=t,this.usedTimes=0}}function Yf(s,t,e,n,i,r,a){const o=new Pr,c=new Xf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,y,z,V,J){const P=V.fog,O=J.geometry,k=M.isMeshStandardMaterial?V.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),q=j&&j.mapping===bs?j.image.height:null,Y=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=K!==void 0?K.length:0;let ot=0;O.morphAttributes.position!==void 0&&(ot=1),O.morphAttributes.normal!==void 0&&(ot=2),O.morphAttributes.color!==void 0&&(ot=3);let G,$,ht,xt;if(Y){const le=tn[Y];G=le.vertexShader,$=le.fragmentShader}else G=M.vertexShader,$=M.fragmentShader,c.update(M),ht=c.getVertexShaderID(M),xt=c.getFragmentShaderID(M);const _t=s.getRenderTarget(),It=J.isInstancedMesh===!0,Ut=J.isBatchedMesh===!0,wt=!!M.map,kt=!!M.matcap,U=!!j,ee=!!M.aoMap,St=!!M.lightMap,Ct=!!M.bumpMap,vt=!!M.normalMap,se=!!M.displacementMap,Ht=!!M.emissiveMap,E=!!M.metalnessMap,x=!!M.roughnessMap,N=M.anisotropy>0,et=M.clearcoat>0,Q=M.iridescence>0,nt=M.sheen>0,Mt=M.transmission>0,ut=N&&!!M.anisotropyMap,gt=et&&!!M.clearcoatMap,Pt=et&&!!M.clearcoatNormalMap,zt=et&&!!M.clearcoatRoughnessMap,Z=Q&&!!M.iridescenceMap,te=Q&&!!M.iridescenceThicknessMap,Wt=nt&&!!M.sheenColorMap,Nt=nt&&!!M.sheenRoughnessMap,bt=!!M.specularMap,ft=!!M.specularColorMap,b=!!M.specularIntensityMap,st=Mt&&!!M.transmissionMap,Et=Mt&&!!M.thicknessMap,mt=!!M.gradientMap,tt=!!M.alphaMap,C=M.alphaTest>0,rt=!!M.alphaHash,dt=!!M.extensions,Lt=!!O.attributes.uv1,Rt=!!O.attributes.uv2,Kt=!!O.attributes.uv3;let $t=wn;return M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&($t=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:$,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ut,instancing:It,instancingColor:It&&J.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:mn,map:wt,matcap:kt,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:q,aoMap:ee,lightMap:St,bumpMap:Ct,normalMap:vt,displacementMap:u&&se,emissiveMap:Ht,normalMapObjectSpace:vt&&M.normalMapType===tl,normalMapTangentSpace:vt&&M.normalMapType===Na,metalnessMap:E,roughnessMap:x,anisotropy:N,anisotropyMap:ut,clearcoat:et,clearcoatMap:gt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:zt,iridescence:Q,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:nt,sheenColorMap:Wt,sheenRoughnessMap:Nt,specularMap:bt,specularColorMap:ft,specularIntensityMap:b,transmission:Mt,transmissionMap:st,thicknessMap:Et,gradientMap:mt,opaque:M.transparent===!1&&M.blending===xi,alphaMap:tt,alphaTest:C,alphaHash:rt,combine:M.combine,mapUv:wt&&_(M.map.channel),aoMapUv:ee&&_(M.aoMap.channel),lightMapUv:St&&_(M.lightMap.channel),bumpMapUv:Ct&&_(M.bumpMap.channel),normalMapUv:vt&&_(M.normalMap.channel),displacementMapUv:se&&_(M.displacementMap.channel),emissiveMapUv:Ht&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:gt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(M.sheenRoughnessMap.channel),specularMapUv:bt&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:b&&_(M.specularIntensityMap.channel),transmissionMapUv:st&&_(M.transmissionMap.channel),thicknessMapUv:Et&&_(M.thicknessMap.channel),alphaMapUv:tt&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(vt||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:Rt,vertexUv3s:Kt,pointsUvs:J.isPoints===!0&&!!O.attributes.uv&&(wt||tt),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:$t,useLegacyLights:s._useLegacyLights,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:dt&&M.extensions.derivatives===!0,extensionFragDepth:dt&&M.extensions.fragDepth===!0,extensionDrawBuffers:dt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)y.push(z),y.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(T(y,M),v(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function A(M){const y=g[M.type];let z;if(y){const V=tn[y];z=Rl.clone(V.uniforms)}else z=M.uniforms;return z}function D(M,y){let z;for(let V=0,J=l.length;V<J;V++){const P=l[V];if(P.cacheKey===y){z=P,++z.usedTimes;break}}return z===void 0&&(z=new Vf(s,y,M,r),l.push(z)),z}function R(M){if(--M.usedTimes===0){const y=l.indexOf(M);l[y]=l[l.length-1],l.pop(),M.destroy()}}function w(M){c.remove(M)}function X(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:X}}function jf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Kf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ca(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function la(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||Kf),n.length>1&&n.sort(u||ca),i.length>1&&i.sort(u||ca)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function $f(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new la,s.set(n,[a])):i>=r.length?(a=new la,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Zf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Zt};break;case"SpotLight":e={position:new L,direction:new L,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Jf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Qf=0;function tp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ep(s,t){const e=new Zf,n=Jf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,a=new me,o=new me;function c(h,d){let u=0,p=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,m=0,f=0,T=0,v=0,A=0,D=0,R=0,w=0,X=0,M=0;h.sort(tp);const y=d===!0?Math.PI:1;for(let V=0,J=h.length;V<J;V++){const P=h[V],O=P.color,k=P.intensity,j=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*k*y,p+=O.g*k*y,g+=O.b*k*y;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],k);M++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const K=P.shadow,it=n.get(P);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,i.directionalShadow[_]=it,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=P.shadow.matrix,A++}i.directional[_]=Y,_++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(k*y),Y.distance=j,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[f]=Y;const K=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&X++),i.spotLightMatrix[f]=K.matrix,P.castShadow){const it=n.get(P);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,i.spotShadow[f]=it,i.spotShadowMap[f]=q,R++}f++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(O).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[T]=Y,T++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*y),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const K=P.shadow,it=n.get(P);it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,it.shadowCameraNear=K.camera.near,it.shadowCameraFar=K.camera.far,i.pointShadow[m]=it,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,D++}i.point[m]=Y,m++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(k*y),Y.groundColor.copy(P.groundColor).multiplyScalar(k*y),i.hemi[v]=Y,v++}}T>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==f||z.rectAreaLength!==T||z.hemiLength!==v||z.numDirectionalShadows!==A||z.numPointShadows!==D||z.numSpotShadows!==R||z.numSpotMaps!==w||z.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=T,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=R+w-X,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=X,i.numLightProbes=M,z.directionalLength=_,z.pointLength=m,z.spotLength=f,z.rectAreaLength=T,z.hemiLength=v,z.numDirectionalShadows=A,z.numPointShadows=D,z.numSpotShadows=R,z.numSpotMaps=w,z.numLightProbes=M,i.version=Qf++)}function l(h,d){let u=0,p=0,g=0,_=0,m=0;const f=d.matrixWorldInverse;for(let T=0,v=h.length;T<v;T++){const A=h[T];if(A.isDirectionalLight){const D=i.directional[u];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),u++}else if(A.isSpotLight){const D=i.spot[g];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),g++}else if(A.isRectAreaLight){const D=i.rectArea[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const D=i.point[p];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(f),p++}else if(A.isHemisphereLight){const D=i.hemi[m];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function ha(s,t){const e=new ep(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function np(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ha(s,t),e.set(r,[c])):a>=o.length?(c=new ha(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class ip extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sp extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,op=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ap(s,t,e){let n=new Lr;const i=new Ft,r=new Ft,a=new Se,o=new ip({depthPacking:Qc}),c=new sp,l={},h=e.maxTextureSize,d={[Cn]:Ue,[Ue]:Cn,[en]:en},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:rp,fragmentShader:op}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let f=this.type;this.render=function(R,w,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),V=s.state;V.setBlending(An),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const J=f!==hn&&this.type===hn,P=f===hn&&this.type!==hn;for(let O=0,k=R.length;O<k;O++){const j=R[O],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||J===!0||P===!0){const it=this.type!==hn?{minFilter:Pe,magFilter:Pe}:{};q.map!==null&&q.map.dispose(),q.map=new Xn(i.x,i.y,it),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const K=q.getViewportCount();for(let it=0;it<K;it++){const ot=q.getViewport(it);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),V.viewport(a),q.updateMatrices(j,it),n=q.getFrustum(),A(w,X,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===hn&&T(q,X),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,z)};function T(R,w){const X=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xn(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(w,null,X,u,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(w,null,X,p,_,null)}function v(R,w,X,M){let y=null;const z=X.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)y=z;else if(y=X.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=y.uuid,J=w.uuid;let P=l[V];P===void 0&&(P={},l[V]=P);let O=P[J];O===void 0&&(O=y.clone(),P[J]=O,w.addEventListener("dispose",D)),y=O}if(y.visible=w.visible,y.wireframe=w.wireframe,M===hn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,X.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=s.properties.get(y);V.light=X}return y}function A(R,w,X,M,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===hn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld);const J=t.update(R),P=R.material;if(Array.isArray(P)){const O=J.groups;for(let k=0,j=O.length;k<j;k++){const q=O[k],Y=P[q.materialIndex];if(Y&&Y.visible){const K=v(R,Y,M,y);R.onBeforeShadow(s,R,w,X,J,K,q),s.renderBufferDirect(X,null,J,K,R,q),R.onAfterShadow(s,R,w,X,J,K,q)}}}else if(P.visible){const O=v(R,P,M,y);R.onBeforeShadow(s,R,w,X,J,O,null),s.renderBufferDirect(X,null,J,O,R,null),R.onAfterShadow(s,R,w,X,J,O,null)}}const V=R.children;for(let J=0,P=V.length;J<P;J++)A(V[J],w,X,M,y)}function D(R){R.target.removeEventListener("dispose",D);for(const X in l){const M=l[X],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function cp(s,t,e){const n=e.isWebGL2;function i(){let C=!1;const rt=new Se;let dt=null;const Lt=new Se(0,0,0,0);return{setMask:function(Rt){dt!==Rt&&!C&&(s.colorMask(Rt,Rt,Rt,Rt),dt=Rt)},setLocked:function(Rt){C=Rt},setClear:function(Rt,Kt,$t,ae,le){le===!0&&(Rt*=ae,Kt*=ae,$t*=ae),rt.set(Rt,Kt,$t,ae),Lt.equals(rt)===!1&&(s.clearColor(Rt,Kt,$t,ae),Lt.copy(rt))},reset:function(){C=!1,dt=null,Lt.set(-1,0,0,0)}}}function r(){let C=!1,rt=null,dt=null,Lt=null;return{setTest:function(Rt){Rt?Ut(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!C&&(s.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(dt!==Rt){switch(Rt){case Rc:s.depthFunc(s.NEVER);break;case Cc:s.depthFunc(s.ALWAYS);break;case Pc:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Lc:s.depthFunc(s.EQUAL);break;case Dc:s.depthFunc(s.GEQUAL);break;case Ic:s.depthFunc(s.GREATER);break;case Uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=Rt}},setLocked:function(Rt){C=Rt},setClear:function(Rt){Lt!==Rt&&(s.clearDepth(Rt),Lt=Rt)},reset:function(){C=!1,rt=null,dt=null,Lt=null}}}function a(){let C=!1,rt=null,dt=null,Lt=null,Rt=null,Kt=null,$t=null,ae=null,le=null;return{setTest:function(Qt){C||(Qt?Ut(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Qt){rt!==Qt&&!C&&(s.stencilMask(Qt),rt=Qt)},setFunc:function(Qt,fe,Je){(dt!==Qt||Lt!==fe||Rt!==Je)&&(s.stencilFunc(Qt,fe,Je),dt=Qt,Lt=fe,Rt=Je)},setOp:function(Qt,fe,Je){(Kt!==Qt||$t!==fe||ae!==Je)&&(s.stencilOp(Qt,fe,Je),Kt=Qt,$t=fe,ae=Je)},setLocked:function(Qt){C=Qt},setClear:function(Qt){le!==Qt&&(s.clearStencil(Qt),le=Qt)},reset:function(){C=!1,rt=null,dt=null,Lt=null,Rt=null,Kt=null,$t=null,ae=null,le=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,_=[],m=null,f=!1,T=null,v=null,A=null,D=null,R=null,w=null,X=null,M=new Zt(0,0,0),y=0,z=!1,V=null,J=null,P=null,O=null,k=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=Y>=2);let it=null,ot={};const G=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ht=new Se().fromArray(G),xt=new Se().fromArray($);function _t(C,rt,dt,Lt){const Rt=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(C,Kt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<dt;$t++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(rt,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(rt+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Kt}const It={};It[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(s.DEPTH_TEST),c.setFunc(vs),Ht(!1),E(Wr),Ut(s.CULL_FACE),vt(An);function Ut(C){u[C]!==!0&&(s.enable(C),u[C]=!0)}function wt(C){u[C]!==!1&&(s.disable(C),u[C]=!1)}function kt(C,rt){return p[C]!==rt?(s.bindFramebuffer(C,rt),p[C]=rt,n&&(C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=rt),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=rt)),!0):!1}function U(C,rt){let dt=_,Lt=!1;if(C)if(dt=g.get(rt),dt===void 0&&(dt=[],g.set(rt,dt)),C.isWebGLMultipleRenderTargets){const Rt=C.texture;if(dt.length!==Rt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,$t=Rt.length;Kt<$t;Kt++)dt[Kt]=s.COLOR_ATTACHMENT0+Kt;dt.length=Rt.length,Lt=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ee(C){return m!==C?(s.useProgram(C),m=C,!0):!1}const St={[zn]:s.FUNC_ADD,[fc]:s.FUNC_SUBTRACT,[pc]:s.FUNC_REVERSE_SUBTRACT};if(n)St[jr]=s.MIN,St[Kr]=s.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(St[jr]=C.MIN_EXT,St[Kr]=C.MAX_EXT)}const Ct={[mc]:s.ZERO,[gc]:s.ONE,[_c]:s.SRC_COLOR,[ur]:s.SRC_ALPHA,[Tc]:s.SRC_ALPHA_SATURATE,[Sc]:s.DST_COLOR,[vc]:s.DST_ALPHA,[xc]:s.ONE_MINUS_SRC_COLOR,[fr]:s.ONE_MINUS_SRC_ALPHA,[Ec]:s.ONE_MINUS_DST_COLOR,[Mc]:s.ONE_MINUS_DST_ALPHA,[yc]:s.CONSTANT_COLOR,[bc]:s.ONE_MINUS_CONSTANT_COLOR,[Ac]:s.CONSTANT_ALPHA,[wc]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(C,rt,dt,Lt,Rt,Kt,$t,ae,le,Qt){if(C===An){f===!0&&(wt(s.BLEND),f=!1);return}if(f===!1&&(Ut(s.BLEND),f=!0),C!==uc){if(C!==T||Qt!==z){if((v!==zn||R!==zn)&&(s.blendEquation(s.FUNC_ADD),v=zn,R=zn),Qt)switch(C){case xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xr:s.blendFunc(s.ONE,s.ONE);break;case qr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,D=null,w=null,X=null,M.set(0,0,0),y=0,T=C,z=Qt}return}Rt=Rt||rt,Kt=Kt||dt,$t=$t||Lt,(rt!==v||Rt!==R)&&(s.blendEquationSeparate(St[rt],St[Rt]),v=rt,R=Rt),(dt!==A||Lt!==D||Kt!==w||$t!==X)&&(s.blendFuncSeparate(Ct[dt],Ct[Lt],Ct[Kt],Ct[$t]),A=dt,D=Lt,w=Kt,X=$t),(ae.equals(M)===!1||le!==y)&&(s.blendColor(ae.r,ae.g,ae.b,le),M.copy(ae),y=le),T=C,z=!1}function se(C,rt){C.side===en?wt(s.CULL_FACE):Ut(s.CULL_FACE);let dt=C.side===Ue;rt&&(dt=!dt),Ht(dt),C.blending===xi&&C.transparent===!1?vt(An):vt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),o.setMask(C.colorWrite);const Lt=C.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),N(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(C){V!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),V=C)}function E(C){C!==lc?(Ut(s.CULL_FACE),C!==J&&(C===Wr?s.cullFace(s.BACK):C===hc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),J=C}function x(C){C!==P&&(q&&s.lineWidth(C),P=C)}function N(C,rt,dt){C?(Ut(s.POLYGON_OFFSET_FILL),(O!==rt||k!==dt)&&(s.polygonOffset(rt,dt),O=rt,k=dt)):wt(s.POLYGON_OFFSET_FILL)}function et(C){C?Ut(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Q(C){C===void 0&&(C=s.TEXTURE0+j-1),it!==C&&(s.activeTexture(C),it=C)}function nt(C,rt,dt){dt===void 0&&(it===null?dt=s.TEXTURE0+j-1:dt=it);let Lt=ot[dt];Lt===void 0&&(Lt={type:void 0,texture:void 0},ot[dt]=Lt),(Lt.type!==C||Lt.texture!==rt)&&(it!==dt&&(s.activeTexture(dt),it=dt),s.bindTexture(C,rt||It[C]),Lt.type=C,Lt.texture=rt)}function Mt(){const C=ot[it];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pt(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function b(C){ht.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),ht.copy(C))}function st(C){xt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),xt.copy(C))}function Et(C,rt){let dt=d.get(rt);dt===void 0&&(dt=new WeakMap,d.set(rt,dt));let Lt=dt.get(C);Lt===void 0&&(Lt=s.getUniformBlockIndex(rt,C.name),dt.set(C,Lt))}function mt(C,rt){const Lt=d.get(rt).get(C);h.get(rt)!==Lt&&(s.uniformBlockBinding(rt,Lt,C.__bindingPointIndex),h.set(rt,Lt))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},it=null,ot={},p={},g=new WeakMap,_=[],m=null,f=!1,T=null,v=null,A=null,D=null,R=null,w=null,X=null,M=new Zt(0,0,0),y=0,z=!1,V=null,J=null,P=null,O=null,k=null,ht.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ut,disable:wt,bindFramebuffer:kt,drawBuffers:U,useProgram:ee,setBlending:vt,setMaterial:se,setFlipSided:Ht,setCullFace:E,setLineWidth:x,setPolygonOffset:N,setScissorTest:et,activeTexture:Q,bindTexture:nt,unbindTexture:Mt,compressedTexImage2D:ut,compressedTexImage3D:gt,texImage2D:bt,texImage3D:ft,updateUBOMapping:Et,uniformBlockBinding:mt,texStorage2D:Wt,texStorage3D:Nt,texSubImage2D:Pt,texSubImage3D:zt,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:b,viewport:st,reset:tt}}function lp(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):ys("canvas")}function _(E,x,N,et){let Q=1;if((E.width>et||E.height>et)&&(Q=et/Math.max(E.width,E.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const nt=x?vr:Math.floor,Mt=nt(Q*E.width),ut=nt(Q*E.height);d===void 0&&(d=g(Mt,ut));const gt=N?g(Mt,ut):d;return gt.width=Mt,gt.height=ut,gt.getContext("2d").drawImage(E,0,0,Mt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Mt+"x"+ut+")."),gt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Ao(E.width)&&Ao(E.height)}function f(E){return o?!1:E.wrapS!==Ke||E.wrapT!==Ke||E.minFilter!==Pe&&E.minFilter!==Ge}function T(E,x){return E.generateMipmaps&&x&&E.minFilter!==Pe&&E.minFilter!==Ge}function v(E){s.generateMipmap(E)}function A(E,x,N,et,Q=!1){if(o===!1)return x;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let nt=x;if(x===s.RED&&(N===s.FLOAT&&(nt=s.R32F),N===s.HALF_FLOAT&&(nt=s.R16F),N===s.UNSIGNED_BYTE&&(nt=s.R8)),x===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(nt=s.R8UI),N===s.UNSIGNED_SHORT&&(nt=s.R16UI),N===s.UNSIGNED_INT&&(nt=s.R32UI),N===s.BYTE&&(nt=s.R8I),N===s.SHORT&&(nt=s.R16I),N===s.INT&&(nt=s.R32I)),x===s.RG&&(N===s.FLOAT&&(nt=s.RG32F),N===s.HALF_FLOAT&&(nt=s.RG16F),N===s.UNSIGNED_BYTE&&(nt=s.RG8)),x===s.RGBA){const Mt=Q?Ms:ne.getTransfer(et);N===s.FLOAT&&(nt=s.RGBA32F),N===s.HALF_FLOAT&&(nt=s.RGBA16F),N===s.UNSIGNED_BYTE&&(nt=Mt===re?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function D(E,x,N){return T(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==Pe&&E.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){return E===Pe||E===$r||E===Is?s.NEAREST:s.LINEAR}function w(E){const x=E.target;x.removeEventListener("dispose",w),M(x),x.isVideoTexture&&h.delete(x)}function X(E){const x=E.target;x.removeEventListener("dispose",X),z(x)}function M(E){const x=n.get(E);if(x.__webglInit===void 0)return;const N=E.source,et=u.get(N);if(et){const Q=et[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(E),Object.keys(et).length===0&&u.delete(N)}n.remove(E)}function y(E){const x=n.get(E);s.deleteTexture(x.__webglTexture);const N=E.source,et=u.get(N);delete et[x.__cacheKey],a.memory.textures--}function z(E){const x=E.texture,N=n.get(E),et=n.get(x);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(N.__webglFramebuffer[Q]))for(let nt=0;nt<N.__webglFramebuffer[Q].length;nt++)s.deleteFramebuffer(N.__webglFramebuffer[Q][nt]);else s.deleteFramebuffer(N.__webglFramebuffer[Q]);N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer[Q])}else{if(Array.isArray(N.__webglFramebuffer))for(let Q=0;Q<N.__webglFramebuffer.length;Q++)s.deleteFramebuffer(N.__webglFramebuffer[Q]);else s.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&s.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&s.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,nt=x.length;Q<nt;Q++){const Mt=n.get(x[Q]);Mt.__webglTexture&&(s.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(x[Q])}n.remove(x),n.remove(E)}let V=0;function J(){V=0}function P(){const E=V;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),V+=1,E}function O(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function k(E,x){const N=n.get(E);if(E.isVideoTexture&&se(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(N,E,x);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+x)}function j(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ht(N,E,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+x)}function q(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ht(N,E,x);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+x)}function Y(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){xt(N,E,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+x)}const K={[Ni]:s.REPEAT,[Ke]:s.CLAMP_TO_EDGE,[gr]:s.MIRRORED_REPEAT},it={[Pe]:s.NEAREST,[$r]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Vc]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},ot={[el]:s.NEVER,[al]:s.ALWAYS,[nl]:s.LESS,[Oa]:s.LEQUAL,[il]:s.EQUAL,[ol]:s.GEQUAL,[sl]:s.GREATER,[rl]:s.NOTEQUAL};function G(E,x,N){if(N?(s.texParameteri(E,s.TEXTURE_WRAP_S,K[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,K[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,K[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,it[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,it[x.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Ke||x.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,R(x.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Pe&&x.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Pe||x.minFilter!==Is&&x.minFilter!==Oi||x.type===yn&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Fi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function $(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));const et=x.source;let Q=u.get(et);Q===void 0&&(Q={},u.set(et,Q));const nt=O(x);if(nt!==E.__cacheKey){Q[nt]===void 0&&(Q[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[nt].usedTimes++;const Mt=Q[E.__cacheKey];Mt!==void 0&&(Q[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&y(x)),E.__cacheKey=nt,E.__webglTexture=Q[nt].texture}return N}function ht(E,x,N){let et=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=s.TEXTURE_3D);const Q=$(E,x),nt=x.source;e.bindTexture(et,E.__webglTexture,s.TEXTURE0+N);const Mt=n.get(nt);if(nt.version!==Mt.__version||Q===!0){e.activeTexture(s.TEXTURE0+N);const ut=ne.getPrimaries(ne.workingColorSpace),gt=x.colorSpace===Ve?null:ne.getPrimaries(x.colorSpace),Pt=x.colorSpace===Ve||ut===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const zt=f(x)&&m(x.image)===!1;let Z=_(x.image,zt,!1,i.maxTextureSize);Z=Ht(x,Z);const te=m(Z)||o,Wt=r.convert(x.format,x.colorSpace);let Nt=r.convert(x.type),bt=A(x.internalFormat,Wt,Nt,x.colorSpace,x.isVideoTexture);G(et,x,te);let ft;const b=x.mipmaps,st=o&&x.isVideoTexture!==!0&&bt!==Ia,Et=Mt.__version===void 0||Q===!0,mt=D(x,Z,te);if(x.isDepthTexture)bt=s.DEPTH_COMPONENT,o?x.type===yn?bt=s.DEPTH_COMPONENT32F:x.type===Tn?bt=s.DEPTH_COMPONENT24:x.type===kn?bt=s.DEPTH24_STENCIL8:bt=s.DEPTH_COMPONENT16:x.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Vn&&bt===s.DEPTH_COMPONENT&&x.type!==Ar&&x.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Tn,Nt=r.convert(x.type)),x.format===Ei&&bt===s.DEPTH_COMPONENT&&(bt=s.DEPTH_STENCIL,x.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=kn,Nt=r.convert(x.type))),Et&&(st?e.texStorage2D(s.TEXTURE_2D,1,bt,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,bt,Z.width,Z.height,0,Wt,Nt,null));else if(x.isDataTexture)if(b.length>0&&te){st&&Et&&e.texStorage2D(s.TEXTURE_2D,mt,bt,b[0].width,b[0].height);for(let tt=0,C=b.length;tt<C;tt++)ft=b[tt],st?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,Wt,Nt,ft.data):e.texImage2D(s.TEXTURE_2D,tt,bt,ft.width,ft.height,0,Wt,Nt,ft.data);x.generateMipmaps=!1}else st?(Et&&e.texStorage2D(s.TEXTURE_2D,mt,bt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,Wt,Nt,Z.data)):e.texImage2D(s.TEXTURE_2D,0,bt,Z.width,Z.height,0,Wt,Nt,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,bt,b[0].width,b[0].height,Z.depth);for(let tt=0,C=b.length;tt<C;tt++)ft=b[tt],x.format!==$e?Wt!==null?st?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,Z.depth,Wt,ft.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,bt,ft.width,ft.height,Z.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,Z.depth,Wt,Nt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,bt,ft.width,ft.height,Z.depth,0,Wt,Nt,ft.data)}else{st&&Et&&e.texStorage2D(s.TEXTURE_2D,mt,bt,b[0].width,b[0].height);for(let tt=0,C=b.length;tt<C;tt++)ft=b[tt],x.format!==$e?Wt!==null?st?e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,Wt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,bt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft.width,ft.height,Wt,Nt,ft.data):e.texImage2D(s.TEXTURE_2D,tt,bt,ft.width,ft.height,0,Wt,Nt,ft.data)}else if(x.isDataArrayTexture)st?(Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,bt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Wt,Nt,Z.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,Z.width,Z.height,Z.depth,0,Wt,Nt,Z.data);else if(x.isData3DTexture)st?(Et&&e.texStorage3D(s.TEXTURE_3D,mt,bt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Wt,Nt,Z.data)):e.texImage3D(s.TEXTURE_3D,0,bt,Z.width,Z.height,Z.depth,0,Wt,Nt,Z.data);else if(x.isFramebufferTexture){if(Et)if(st)e.texStorage2D(s.TEXTURE_2D,mt,bt,Z.width,Z.height);else{let tt=Z.width,C=Z.height;for(let rt=0;rt<mt;rt++)e.texImage2D(s.TEXTURE_2D,rt,bt,tt,C,0,Wt,Nt,null),tt>>=1,C>>=1}}else if(b.length>0&&te){st&&Et&&e.texStorage2D(s.TEXTURE_2D,mt,bt,b[0].width,b[0].height);for(let tt=0,C=b.length;tt<C;tt++)ft=b[tt],st?e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Wt,Nt,ft):e.texImage2D(s.TEXTURE_2D,tt,bt,Wt,Nt,ft);x.generateMipmaps=!1}else st?(Et&&e.texStorage2D(s.TEXTURE_2D,mt,bt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Nt,Z)):e.texImage2D(s.TEXTURE_2D,0,bt,Wt,Nt,Z);T(x,te)&&v(et),Mt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xt(E,x,N){if(x.image.length!==6)return;const et=$(E,x),Q=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+N);const nt=n.get(Q);if(Q.version!==nt.__version||et===!0){e.activeTexture(s.TEXTURE0+N);const Mt=ne.getPrimaries(ne.workingColorSpace),ut=x.colorSpace===Ve?null:ne.getPrimaries(x.colorSpace),gt=x.colorSpace===Ve||Mt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Pt=x.isCompressedTexture||x.image[0].isCompressedTexture,zt=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let tt=0;tt<6;tt++)!Pt&&!zt?Z[tt]=_(x.image[tt],!1,!0,i.maxCubemapSize):Z[tt]=zt?x.image[tt].image:x.image[tt],Z[tt]=Ht(x,Z[tt]);const te=Z[0],Wt=m(te)||o,Nt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),ft=A(x.internalFormat,Nt,bt,x.colorSpace),b=o&&x.isVideoTexture!==!0,st=nt.__version===void 0||et===!0;let Et=D(x,te,Wt);G(s.TEXTURE_CUBE_MAP,x,Wt);let mt;if(Pt){b&&st&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,ft,te.width,te.height);for(let tt=0;tt<6;tt++){mt=Z[tt].mipmaps;for(let C=0;C<mt.length;C++){const rt=mt[C];x.format!==$e?Nt!==null?b?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,0,0,rt.width,rt.height,Nt,rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,ft,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,0,0,rt.width,rt.height,Nt,bt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C,ft,rt.width,rt.height,0,Nt,bt,rt.data)}}}else{mt=x.mipmaps,b&&st&&(mt.length>0&&Et++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,ft,Z[0].width,Z[0].height));for(let tt=0;tt<6;tt++)if(zt){b?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Z[tt].width,Z[tt].height,Nt,bt,Z[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ft,Z[tt].width,Z[tt].height,0,Nt,bt,Z[tt].data);for(let C=0;C<mt.length;C++){const dt=mt[C].image[tt].image;b?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,0,0,dt.width,dt.height,Nt,bt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,ft,dt.width,dt.height,0,Nt,bt,dt.data)}}else{b?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,bt,Z[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ft,Nt,bt,Z[tt]);for(let C=0;C<mt.length;C++){const rt=mt[C];b?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,0,0,Nt,bt,rt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,C+1,ft,Nt,bt,rt.image[tt])}}}T(x,Wt)&&v(s.TEXTURE_CUBE_MAP),nt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function _t(E,x,N,et,Q,nt){const Mt=r.convert(N.format,N.colorSpace),ut=r.convert(N.type),gt=A(N.internalFormat,Mt,ut,N.colorSpace);if(!n.get(x).__hasExternalTextures){const zt=Math.max(1,x.width>>nt),Z=Math.max(1,x.height>>nt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,nt,gt,zt,Z,x.depth,0,Mt,ut,null):e.texImage2D(Q,nt,gt,zt,Z,0,Mt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),vt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,n.get(N).__webglTexture,0,Ct(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,n.get(N).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(E,x,N){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let et=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(N||vt(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===yn?et=s.DEPTH_COMPONENT32F:Q.type===Tn&&(et=s.DEPTH_COMPONENT24));const nt=Ct(x);vt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,et,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,et,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const et=Ct(x);N&&vt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,x.width,x.height):vt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const et=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<et.length;Q++){const nt=et[Q],Mt=r.convert(nt.format,nt.colorSpace),ut=r.convert(nt.type),gt=A(nt.internalFormat,Mt,ut,nt.colorSpace),Pt=Ct(x);N&&vt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,gt,x.width,x.height):vt(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,gt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,gt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const et=n.get(x.depthTexture).__webglTexture,Q=Ct(x);if(x.depthTexture.format===Vn)vt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(x.depthTexture.format===Ei)vt(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function wt(E){const x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]=s.createRenderbuffer(),It(x.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),It(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(E,x,N){const et=n.get(E);x!==void 0&&_t(et.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&wt(E)}function U(E){const x=E.texture,N=n.get(E),et=n.get(x);E.addEventListener("dispose",X),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=x.version,a.memory.textures++);const Q=E.isWebGLCubeRenderTarget===!0,nt=E.isWebGLMultipleRenderTargets===!0,Mt=m(E)||o;if(Q){N.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ut]=[];for(let gt=0;gt<x.mipmaps.length;gt++)N.__webglFramebuffer[ut][gt]=s.createFramebuffer()}else N.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)N.__webglFramebuffer[ut]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(nt)if(i.drawBuffers){const ut=E.texture;for(let gt=0,Pt=ut.length;gt<Pt;gt++){const zt=n.get(ut[gt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&vt(E)===!1){const ut=nt?x:[x];N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const Pt=ut[gt];N.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[gt]);const zt=r.convert(Pt.format,Pt.colorSpace),Z=r.convert(Pt.type),te=A(Pt.internalFormat,zt,Z,Pt.colorSpace,E.isXRRenderTarget===!0),Wt=Ct(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,te,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,N.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),It(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),G(s.TEXTURE_CUBE_MAP,x,Mt);for(let ut=0;ut<6;ut++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)_t(N.__webglFramebuffer[ut][gt],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else _t(N.__webglFramebuffer[ut],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);T(x,Mt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ut=E.texture;for(let gt=0,Pt=ut.length;gt<Pt;gt++){const zt=ut[gt],Z=n.get(zt);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture),G(s.TEXTURE_2D,zt,Mt),_t(N.__webglFramebuffer,E,zt,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),T(zt,Mt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ut=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,et.__webglTexture),G(ut,x,Mt),o&&x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)_t(N.__webglFramebuffer[gt],E,x,s.COLOR_ATTACHMENT0,ut,gt);else _t(N.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,ut,0);T(x,Mt)&&v(ut),e.unbindTexture()}E.depthBuffer&&wt(E)}function ee(E){const x=m(E)||o,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,Q=N.length;et<Q;et++){const nt=N[et];if(T(nt,x)){const Mt=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=n.get(nt).__webglTexture;e.bindTexture(Mt,ut),v(Mt),e.unbindTexture()}}}function St(E){if(o&&E.samples>0&&vt(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,et=E.height;let Q=s.COLOR_BUFFER_BIT;const nt=[],Mt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(E),gt=E.isWebGLMultipleRenderTargets===!0;if(gt)for(let Pt=0;Pt<x.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Pt=0;Pt<x.length;Pt++){nt.push(s.COLOR_ATTACHMENT0+Pt),E.depthBuffer&&nt.push(Mt);const zt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(zt===!1&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),gt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[Pt]),zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Mt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Mt])),gt){const Z=n.get(x[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,N,et,0,0,N,et,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let Pt=0;Pt<x.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[Pt]);const zt=n.get(x[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Ct(E){return Math.min(i.maxSamples,E.samples)}function vt(E){const x=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Ht(E,x){const N=E.colorSpace,et=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===_r||N!==mn&&N!==Ve&&(ne.getTransfer(N)===re?o===!1?t.has("EXT_sRGB")===!0&&et===$e?(E.format=_r,E.minFilter=Ge,E.generateMipmaps=!1):x=Ba.sRGBToLinear(x):(et!==$e||Q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=kt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=vt}function hp(s,t,e){const n=e.isWebGL2;function i(r,a=Ve){let o;const c=ne.getTransfer(a);if(r===Rn)return s.UNSIGNED_BYTE;if(r===Ra)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ca)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Wc)return s.BYTE;if(r===Xc)return s.SHORT;if(r===Ar)return s.UNSIGNED_SHORT;if(r===wa)return s.INT;if(r===Tn)return s.UNSIGNED_INT;if(r===yn)return s.FLOAT;if(r===Fi)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qc)return s.ALPHA;if(r===$e)return s.RGBA;if(r===Yc)return s.LUMINANCE;if(r===jc)return s.LUMINANCE_ALPHA;if(r===Vn)return s.DEPTH_COMPONENT;if(r===Ei)return s.DEPTH_STENCIL;if(r===_r)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Kc)return s.RED;if(r===Pa)return s.RED_INTEGER;if(r===$c)return s.RG;if(r===La)return s.RG_INTEGER;if(r===Da)return s.RGBA_INTEGER;if(r===Us||r===Ns||r===Os||r===Fs)if(c===re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Us)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Us)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Os)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zr||r===Jr||r===Qr||r===to)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Zr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===to)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ia)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===eo||r===no)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===eo)return c===re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===no)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===io||r===so||r===ro||r===oo||r===ao||r===co||r===lo||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===_o)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===io)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===so)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ro)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oo)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ao)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===co)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lo)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ho)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uo)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fo)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===po)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mo)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===go)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_o)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bs||r===xo||r===vo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Bs)return c===re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zc||r===Mo||r===So||r===Eo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Bs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Mo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===So)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===kn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class dp extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class We extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(up)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class fp extends jn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const T=[],v=[],A=new Ft;let D=null;const R=new ke;R.layers.enable(1),R.viewport=new Se;const w=new ke;w.layers.enable(2),w.viewport=new Se;const X=[R,w],M=new dp;M.layers.enable(1),M.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=T[G];return $===void 0&&($=new cr,T[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=T[G];return $===void 0&&($=new cr,T[G]=$),$.getGripSpace()},this.getHand=function(G){let $=T[G];return $===void 0&&($=new cr,T[G]=$),$.getHandSpace()};function V(G){const $=v.indexOf(G.inputSource);if($===-1)return;const ht=T[$];ht!==void 0&&(ht.update(G.inputSource,G.frame,l||a),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",P);for(let G=0;G<T.length;G++){const $=v[G];$!==null&&(v[G]=null,T[G].disconnect($))}y=null,z=null,t.setRenderTarget(m),p=null,u=null,d=null,i=null,f=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",J),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Xn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ht=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?Ei:Vn,ht=_.stencil?kn:Tn);const _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(_t),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new Xn(u.textureWidth,u.textureHeight,{format:$e,type:Rn,depthTexture:new Ka(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const It=t.properties.get(f);It.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let $=0;$<G.removed.length;$++){const ht=G.removed[$],xt=v.indexOf(ht);xt>=0&&(v[xt]=null,T[xt].disconnect(ht))}for(let $=0;$<G.added.length;$++){const ht=G.added[$];let xt=v.indexOf(ht);if(xt===-1){for(let It=0;It<T.length;It++)if(It>=v.length){v.push(ht),xt=It;break}else if(v[It]===null){v[It]=ht,xt=It;break}if(xt===-1)break}const _t=T[xt];_t&&_t.connect(ht)}}const O=new L,k=new L;function j(G,$,ht){O.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(ht.matrixWorld);const xt=O.distanceTo(k),_t=$.projectionMatrix.elements,It=ht.projectionMatrix.elements,Ut=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),kt=(_t[9]+1)/_t[5],U=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],St=(It[8]+1)/It[0],Ct=Ut*ee,vt=Ut*St,se=xt/(-ee+St),Ht=se*-ee;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ht),G.translateZ(se),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const E=Ut+se,x=wt+se,N=Ct-Ht,et=vt+(xt-Ht),Q=kt*wt/x*E,nt=U*wt/x*E;G.projectionMatrix.makePerspective(N,et,Q,nt,E,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;M.near=w.near=R.near=G.near,M.far=w.far=R.far=G.far,(y!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,z=M.far);const $=G.parent,ht=M.cameras;q(M,$);for(let xt=0;xt<ht.length;xt++)q(ht[xt],$);ht.length===2?j(M,R,w):M.projectionMatrix.copy(R.projectionMatrix),Y(G,M,$)};function Y(G,$,ht){ht===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=xr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let K=null;function it(G,$){if(h=$.getViewerPose(l||a),g=$,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let xt=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,xt=!0);for(let _t=0;_t<ht.length;_t++){const It=ht[_t];let Ut=null;if(p!==null)Ut=p.getViewport(It);else{const kt=d.getViewSubImage(u,It);Ut=kt.viewport,_t===0&&(t.setRenderTargetTextures(f,kt.colorTexture,u.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(f))}let wt=X[_t];wt===void 0&&(wt=new ke,wt.layers.enable(_t),wt.viewport=new Se,X[_t]=wt),wt.matrix.fromArray(It.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(It.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),_t===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xt===!0&&M.cameras.push(wt)}}for(let ht=0;ht<T.length;ht++){const xt=v[ht],_t=T[ht];xt!==null&&_t!==void 0&&_t.update(xt,$,l||a)}K&&K(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ot=new Ya;ot.setAnimationLoop(it),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function pp(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wa(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,v,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,T,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mp(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,v){const A=v.program;n.uniformBlockBinding(T,A)}function l(T,v){let A=i[T.id];A===void 0&&(g(T),A=h(T),i[T.id]=A,T.addEventListener("dispose",m));const D=v.program;n.updateUBOMapping(T,D);const R=t.render.frame;r[T.id]!==R&&(u(T),r[T.id]=R)}function h(T){const v=d();T.__bindingPointIndex=v;const A=s.createBuffer(),D=T.__size,R=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,D,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,A),A}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const v=i[T.id],A=T.uniforms,D=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,w=A.length;R<w;R++){const X=Array.isArray(A[R])?A[R]:[A[R]];for(let M=0,y=X.length;M<y;M++){const z=X[M];if(p(z,R,M,D)===!0){const V=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let O=0;O<J.length;O++){const k=J[O],j=_(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,V+P,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,v,A,D){const R=T.value,w=v+"_"+A;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const X=D[w];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return D[w]=R,!0}else if(X.equals(R)===!1)return X.copy(R),!0}return!1}function g(T){const v=T.uniforms;let A=0;const D=16;for(let w=0,X=v.length;w<X;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,z=M.length;y<z;y++){const V=M[y],J=Array.isArray(V.value)?V.value:[V.value];for(let P=0,O=J.length;P<O;P++){const k=J[P],j=_(k),q=A%D;q!==0&&D-q<j.boundary&&(A+=D-q),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=j.storage}}}const R=A%D;return R>0&&(A+=D-R),T.__size=A,T.__cache={},this}function _(T){const v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){const v=T.target;v.removeEventListener("dispose",m);const A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class ec{constructor(t={}){const{canvas:e=hl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const v=this;let A=!1,D=0,R=0,w=null,X=-1,M=null;const y=new Se,z=new Se;let V=null;const J=new Zt(0);let P=0,O=e.width,k=e.height,j=1,q=null,Y=null;const K=new Se(0,0,O,k),it=new Se(0,0,O,k);let ot=!1;const G=new Lr;let $=!1,ht=!1,xt=null;const _t=new me,It=new Ft,Ut=new L,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return w===null?j:1}let U=n;function ee(S,I){for(let B=0;B<S.length;B++){const H=S[B],F=e.getContext(H,I);if(F!==null)return F}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yr}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",rt,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),U=ee(I,S),U===null)throw ee(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let St,Ct,vt,se,Ht,E,x,N,et,Q,nt,Mt,ut,gt,Pt,zt,Z,te,Wt,Nt,bt,ft,b,st;function Et(){St=new yu(U),Ct=new xu(U,St,t),St.init(Ct),ft=new hp(U,St,Ct),vt=new cp(U,St,Ct),se=new wu(U),Ht=new jf,E=new lp(U,St,vt,Ht,Ct,ft,se),x=new Mu(v),N=new Tu(v),et=new Nl(U,Ct),b=new gu(U,St,et,Ct),Q=new bu(U,et,se,b),nt=new Lu(U,Q,et,se),Wt=new Pu(U,Ct,E),zt=new vu(Ht),Mt=new Yf(v,x,N,St,Ct,b,zt),ut=new pp(v,Ht),gt=new $f,Pt=new np(St,Ct),te=new mu(v,x,N,vt,nt,u,c),Z=new ap(v,nt,Ct),st=new mp(U,se,Ct,vt),Nt=new _u(U,St,se,Ct),bt=new Au(U,St,se,Ct),se.programs=Mt.programs,v.capabilities=Ct,v.extensions=St,v.properties=Ht,v.renderLists=gt,v.shadowMap=Z,v.state=vt,v.info=se}Et();const mt=new fp(v,U);this.xr=mt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=St.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=St.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(O,k,!1))},this.getSize=function(S){return S.set(O,k)},this.setSize=function(S,I,B=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,k=I,e.width=Math.floor(S*j),e.height=Math.floor(I*j),B===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(O*j,k*j).floor()},this.setDrawingBufferSize=function(S,I,B){O=S,k=I,j=B,e.width=Math.floor(S*B),e.height=Math.floor(I*B),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,I,B,H){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,I,B,H),vt.viewport(y.copy(K).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(it)},this.setScissor=function(S,I,B,H){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,I,B,H),vt.scissor(z.copy(it).multiplyScalar(j).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(S){vt.setScissorTest(ot=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(S=!0,I=!0,B=!0){let H=0;if(S){let F=!1;if(w!==null){const pt=w.texture.format;F=pt===Da||pt===La||pt===Pa}if(F){const pt=w.texture.type,Tt=pt===Rn||pt===Tn||pt===Ar||pt===kn||pt===Ra||pt===Ca,Dt=te.getClearColor(),Ot=te.getClearAlpha(),Xt=Dt.r,Bt=Dt.g,Gt=Dt.b;Tt?(p[0]=Xt,p[1]=Bt,p[2]=Gt,p[3]=Ot,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Xt,g[1]=Bt,g[2]=Gt,g[3]=Ot,U.clearBufferiv(U.COLOR,0,g))}else H|=U.COLOR_BUFFER_BIT}I&&(H|=U.DEPTH_BUFFER_BIT),B&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),gt.dispose(),Pt.dispose(),Ht.dispose(),x.dispose(),N.dispose(),nt.dispose(),b.dispose(),st.dispose(),Mt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",le),mt.removeEventListener("sessionend",Qt),xt&&(xt.dispose(),xt=null),fe.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=se.autoReset,I=Z.enabled,B=Z.autoUpdate,H=Z.needsUpdate,F=Z.type;Et(),se.autoReset=S,Z.enabled=I,Z.autoUpdate=B,Z.needsUpdate=H,Z.type=F}function rt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function dt(S){const I=S.target;I.removeEventListener("dispose",dt),Lt(I)}function Lt(S){Rt(S),Ht.remove(S)}function Rt(S){const I=Ht.get(S).programs;I!==void 0&&(I.forEach(function(B){Mt.releaseProgram(B)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,B,H,F,pt){I===null&&(I=wt);const Tt=F.isMesh&&F.matrixWorld.determinant()<0,Dt=rc(S,I,B,H,F);vt.setMaterial(H,Tt);let Ot=B.index,Xt=1;if(H.wireframe===!0){if(Ot=Q.getWireframeAttribute(B),Ot===void 0)return;Xt=2}const Bt=B.drawRange,Gt=B.attributes.position;let he=Bt.start*Xt,Oe=(Bt.start+Bt.count)*Xt;pt!==null&&(he=Math.max(he,pt.start*Xt),Oe=Math.min(Oe,(pt.start+pt.count)*Xt)),Ot!==null?(he=Math.max(he,0),Oe=Math.min(Oe,Ot.count)):Gt!=null&&(he=Math.max(he,0),Oe=Math.min(Oe,Gt.count));const ve=Oe-he;if(ve<0||ve===1/0)return;b.setup(F,H,Dt,B,Ot);let sn,oe=Nt;if(Ot!==null&&(sn=et.get(Ot),oe=bt,oe.setIndex(sn)),F.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*kt()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(F.isLine){let qt=H.linewidth;qt===void 0&&(qt=1),vt.setLineWidth(qt*kt()),F.isLineSegments?oe.setMode(U.LINES):F.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else F.isPoints?oe.setMode(U.POINTS):F.isSprite&&oe.setMode(U.TRIANGLES);if(F.isBatchedMesh)oe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)oe.renderInstances(he,ve,F.count);else if(B.isInstancedBufferGeometry){const qt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Cs=Math.min(B.instanceCount,qt);oe.renderInstances(he,ve,Cs)}else oe.render(he,ve)};function Kt(S,I,B){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,Yi(S,I,B),S.side=Cn,S.needsUpdate=!0,Yi(S,I,B),S.side=en):Yi(S,I,B)}this.compile=function(S,I,B=null){B===null&&(B=S),m=Pt.get(B),m.init(),T.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights);const H=new Set;return S.traverse(function(F){const pt=F.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const Dt=pt[Tt];Kt(Dt,B,F),H.add(Dt)}else Kt(pt,B,F),H.add(pt)}),T.pop(),m=null,H},this.compileAsync=function(S,I,B=null){const H=this.compile(S,I,B);return new Promise(F=>{function pt(){if(H.forEach(function(Tt){Ht.get(Tt).currentProgram.isReady()&&H.delete(Tt)}),H.size===0){F(S);return}setTimeout(pt,10)}St.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let $t=null;function ae(S){$t&&$t(S)}function le(){fe.stop()}function Qt(){fe.start()}const fe=new Ya;fe.setAnimationLoop(ae),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(S){$t=S,mt.setAnimationLoop(S),S===null?fe.stop():fe.start()},mt.addEventListener("sessionstart",le),mt.addEventListener("sessionend",Qt),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(I),I=mt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,I,w),m=Pt.get(S,T.length),m.init(),T.push(m),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(_t),ht=this.localClippingEnabled,$=zt.init(this.clippingPlanes,ht),_=gt.get(S,f.length),_.init(),f.push(_),Je(S,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,Y),this.info.render.frame++,$===!0&&zt.beginShadows();const B=m.state.shadowsArray;if(Z.render(B,S,I),$===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(_,S),m.setupLights(v._useLegacyLights),I.isArrayCamera){const H=I.cameras;for(let F=0,pt=H.length;F<pt;F++){const Tt=H[F];Br(_,S,Tt,Tt.viewport)}}else Br(_,S,I);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(v,S,I),b.resetDefaultState(),X=-1,M=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Je(S,I,B,H){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){H&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const Tt=nt.update(S),Dt=S.material;Dt.visible&&_.push(S,Tt,Dt,B,Ut.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){const Tt=nt.update(S),Dt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ut.copy(Tt.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(Dt)){const Ot=Tt.groups;for(let Xt=0,Bt=Ot.length;Xt<Bt;Xt++){const Gt=Ot[Xt],he=Dt[Gt.materialIndex];he&&he.visible&&_.push(S,Tt,he,B,Ut.z,Gt)}}else Dt.visible&&_.push(S,Tt,Dt,B,Ut.z,null)}}const pt=S.children;for(let Tt=0,Dt=pt.length;Tt<Dt;Tt++)Je(pt[Tt],I,B,H)}function Br(S,I,B,H){const F=S.opaque,pt=S.transmissive,Tt=S.transparent;m.setupLightsView(B),$===!0&&zt.setGlobalState(v.clippingPlanes,B),pt.length>0&&sc(F,pt,I,B),H&&vt.viewport(y.copy(H)),F.length>0&&qi(F,I,B),pt.length>0&&qi(pt,I,B),Tt.length>0&&qi(Tt,I,B),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function sc(S,I,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const pt=Ct.isWebGL2;xt===null&&(xt=new Xn(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Fi:Rn,minFilter:Oi,samples:pt?4:0})),v.getDrawingBufferSize(It),pt?xt.setSize(It.x,It.y):xt.setSize(vr(It.x),vr(It.y));const Tt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(J),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Dt=v.toneMapping;v.toneMapping=wn,qi(S,B,H),E.updateMultisampleRenderTarget(xt),E.updateRenderTargetMipmap(xt);let Ot=!1;for(let Xt=0,Bt=I.length;Xt<Bt;Xt++){const Gt=I[Xt],he=Gt.object,Oe=Gt.geometry,ve=Gt.material,sn=Gt.group;if(ve.side===en&&he.layers.test(H.layers)){const oe=ve.side;ve.side=Ue,ve.needsUpdate=!0,Hr(he,B,H,Oe,ve,sn),ve.side=oe,ve.needsUpdate=!0,Ot=!0}}Ot===!0&&(E.updateMultisampleRenderTarget(xt),E.updateRenderTargetMipmap(xt)),v.setRenderTarget(Tt),v.setClearColor(J,P),v.toneMapping=Dt}function qi(S,I,B){const H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,pt=S.length;F<pt;F++){const Tt=S[F],Dt=Tt.object,Ot=Tt.geometry,Xt=H===null?Tt.material:H,Bt=Tt.group;Dt.layers.test(B.layers)&&Hr(Dt,I,B,Ot,Xt,Bt)}}function Hr(S,I,B,H,F,pt){S.onBeforeRender(v,I,B,H,F,pt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,I,B,H,S,pt),F.transparent===!0&&F.side===en&&F.forceSinglePass===!1?(F.side=Ue,F.needsUpdate=!0,v.renderBufferDirect(B,I,H,F,S,pt),F.side=Cn,F.needsUpdate=!0,v.renderBufferDirect(B,I,H,F,S,pt),F.side=en):v.renderBufferDirect(B,I,H,F,S,pt),S.onAfterRender(v,I,B,H,F,pt)}function Yi(S,I,B){I.isScene!==!0&&(I=wt);const H=Ht.get(S),F=m.state.lights,pt=m.state.shadowsArray,Tt=F.state.version,Dt=Mt.getParameters(S,F.state,pt,I,B),Ot=Mt.getProgramCacheKey(Dt);let Xt=H.programs;H.environment=S.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||H.environment),Xt===void 0&&(S.addEventListener("dispose",dt),Xt=new Map,H.programs=Xt);let Bt=Xt.get(Ot);if(Bt!==void 0){if(H.currentProgram===Bt&&H.lightsStateVersion===Tt)return Gr(S,Dt),Bt}else Dt.uniforms=Mt.getUniforms(S),S.onBuild(B,Dt,v),S.onBeforeCompile(Dt,v),Bt=Mt.acquireProgram(Dt,Ot),Xt.set(Ot,Bt),H.uniforms=Dt.uniforms;const Gt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Gt.clippingPlanes=zt.uniform),Gr(S,Dt),H.needsLights=ac(S),H.lightsStateVersion=Tt,H.needsLights&&(Gt.ambientLightColor.value=F.state.ambient,Gt.lightProbe.value=F.state.probe,Gt.directionalLights.value=F.state.directional,Gt.directionalLightShadows.value=F.state.directionalShadow,Gt.spotLights.value=F.state.spot,Gt.spotLightShadows.value=F.state.spotShadow,Gt.rectAreaLights.value=F.state.rectArea,Gt.ltc_1.value=F.state.rectAreaLTC1,Gt.ltc_2.value=F.state.rectAreaLTC2,Gt.pointLights.value=F.state.point,Gt.pointLightShadows.value=F.state.pointShadow,Gt.hemisphereLights.value=F.state.hemi,Gt.directionalShadowMap.value=F.state.directionalShadowMap,Gt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Gt.spotShadowMap.value=F.state.spotShadowMap,Gt.spotLightMatrix.value=F.state.spotLightMatrix,Gt.spotLightMap.value=F.state.spotLightMap,Gt.pointShadowMap.value=F.state.pointShadowMap,Gt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Bt,H.uniformsList=null,Bt}function zr(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=xs.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Gr(S,I){const B=Ht.get(S);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function rc(S,I,B,H,F){I.isScene!==!0&&(I=wt),E.resetTextureUnits();const pt=I.fog,Tt=H.isMeshStandardMaterial?I.environment:null,Dt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:mn,Ot=(H.isMeshStandardMaterial?N:x).get(H.envMap||Tt),Xt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Bt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Gt=!!B.morphAttributes.position,he=!!B.morphAttributes.normal,Oe=!!B.morphAttributes.color;let ve=wn;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ve=v.toneMapping);const sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=sn!==void 0?sn.length:0,qt=Ht.get(H),Cs=m.state.lights;if($===!0&&(ht===!0||S!==M)){const He=S===M&&H.id===X;zt.setState(H,S,He)}let ce=!1;H.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Cs.state.version||qt.outputColorSpace!==Dt||F.isBatchedMesh&&qt.batching===!1||!F.isBatchedMesh&&qt.batching===!0||F.isInstancedMesh&&qt.instancing===!1||!F.isInstancedMesh&&qt.instancing===!0||F.isSkinnedMesh&&qt.skinning===!1||!F.isSkinnedMesh&&qt.skinning===!0||F.isInstancedMesh&&qt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&qt.instancingColor===!1&&F.instanceColor!==null||qt.envMap!==Ot||H.fog===!0&&qt.fog!==pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==zt.numPlanes||qt.numIntersection!==zt.numIntersection)||qt.vertexAlphas!==Xt||qt.vertexTangents!==Bt||qt.morphTargets!==Gt||qt.morphNormals!==he||qt.morphColors!==Oe||qt.toneMapping!==ve||Ct.isWebGL2===!0&&qt.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,qt.__version=H.version);let Dn=qt.currentProgram;ce===!0&&(Dn=Yi(H,I,F));let kr=!1,wi=!1,Ps=!1;const ye=Dn.getUniforms(),In=qt.uniforms;if(vt.useProgram(Dn.program)&&(kr=!0,wi=!0,Ps=!0),H.id!==X&&(X=H.id,wi=!0),kr||M!==S){ye.setValue(U,"projectionMatrix",S.projectionMatrix),ye.setValue(U,"viewMatrix",S.matrixWorldInverse);const He=ye.map.cameraPosition;He!==void 0&&He.setValue(U,Ut.setFromMatrixPosition(S.matrixWorld)),Ct.logarithmicDepthBuffer&&ye.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ye.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,wi=!0,Ps=!0)}if(F.isSkinnedMesh){ye.setOptional(U,F,"bindMatrix"),ye.setOptional(U,F,"bindMatrixInverse");const He=F.skeleton;He&&(Ct.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),ye.setValue(U,"boneTexture",He.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(ye.setOptional(U,F,"batchingTexture"),ye.setValue(U,"batchingTexture",F._matricesTexture,E));const Ls=B.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0&&Ct.isWebGL2===!0)&&Wt.update(F,B,Dn),(wi||qt.receiveShadow!==F.receiveShadow)&&(qt.receiveShadow=F.receiveShadow,ye.setValue(U,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(In.envMap.value=Ot,In.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),wi&&(ye.setValue(U,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&oc(In,Ps),pt&&H.fog===!0&&ut.refreshFogUniforms(In,pt),ut.refreshMaterialUniforms(In,H,j,k,xt),xs.upload(U,zr(qt),In,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xs.upload(U,zr(qt),In,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ye.setValue(U,"center",F.center),ye.setValue(U,"modelViewMatrix",F.modelViewMatrix),ye.setValue(U,"normalMatrix",F.normalMatrix),ye.setValue(U,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const He=H.uniformsGroups;for(let Ds=0,cc=He.length;Ds<cc;Ds++)if(Ct.isWebGL2){const Vr=He[Ds];st.update(Vr,Dn),st.bind(Vr,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function oc(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function ac(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,I,B){Ht.get(S.texture).__webglTexture=I,Ht.get(S.depthTexture).__webglTexture=B;const H=Ht.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const B=Ht.get(S);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,B=0){w=S,D=I,R=B;let H=!0,F=null,pt=!1,Tt=!1;if(S){const Ot=Ht.get(S);Ot.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(U.FRAMEBUFFER,null),H=!1):Ot.__webglFramebuffer===void 0?E.setupRenderTarget(S):Ot.__hasExternalTextures&&E.rebindTextures(S,Ht.get(S.texture).__webglTexture,Ht.get(S.depthTexture).__webglTexture);const Xt=S.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Tt=!0);const Bt=Ht.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[I])?F=Bt[I][B]:F=Bt[I],pt=!0):Ct.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?F=Ht.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?F=Bt[B]:F=Bt,y.copy(S.viewport),z.copy(S.scissor),V=S.scissorTest}else y.copy(K).multiplyScalar(j).floor(),z.copy(it).multiplyScalar(j).floor(),V=ot;if(vt.bindFramebuffer(U.FRAMEBUFFER,F)&&Ct.drawBuffers&&H&&vt.drawBuffers(S,F),vt.viewport(y),vt.scissor(z),vt.setScissorTest(V),pt){const Ot=Ht.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ot.__webglTexture,B)}else if(Tt){const Ot=Ht.get(S.texture),Xt=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,B||0,Xt)}X=-1},this.readRenderTargetPixels=function(S,I,B,H,F,pt,Tt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){vt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const Ot=S.texture,Xt=Ot.format,Bt=Ot.type;if(Xt!==$e&&ft.convert(Xt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Bt===Fi&&(St.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&St.has("EXT_color_buffer_float"));if(Bt!==Rn&&ft.convert(Bt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===yn&&(Ct.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-H&&B>=0&&B<=S.height-F&&U.readPixels(I,B,H,F,ft.convert(Xt),ft.convert(Bt),pt)}finally{const Ot=w!==null?Ht.get(w).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(S,I,B=0){const H=Math.pow(2,-B),F=Math.floor(I.image.width*H),pt=Math.floor(I.image.height*H);E.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,S.x,S.y,F,pt),vt.unbindTexture()},this.copyTextureToTexture=function(S,I,B,H=0){const F=I.image.width,pt=I.image.height,Tt=ft.convert(B.format),Dt=ft.convert(B.type);E.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,S.x,S.y,F,pt,Tt,Dt,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,Tt,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,H,S.x,S.y,Tt,Dt,I.image),H===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,B,H,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=S.max.x-S.min.x+1,Tt=S.max.y-S.min.y+1,Dt=S.max.z-S.min.z+1,Ot=ft.convert(H.format),Xt=ft.convert(H.type);let Bt;if(H.isData3DTexture)E.setTexture3D(H,0),Bt=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Bt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Gt=U.getParameter(U.UNPACK_ROW_LENGTH),he=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Oe=U.getParameter(U.UNPACK_SKIP_PIXELS),ve=U.getParameter(U.UNPACK_SKIP_ROWS),sn=U.getParameter(U.UNPACK_SKIP_IMAGES),oe=B.isCompressedTexture?B.mipmaps[F]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(Bt,F,I.x,I.y,I.z,pt,Tt,Dt,Ot,Xt,oe.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Bt,F,I.x,I.y,I.z,pt,Tt,Dt,Ot,oe.data)):U.texSubImage3D(Bt,F,I.x,I.y,I.z,pt,Tt,Dt,Ot,Xt,oe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Oe),U.pixelStorei(U.UNPACK_SKIP_ROWS,ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,sn),F===0&&H.generateMipmaps&&U.generateMipmap(Bt),vt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),vt.unbindTexture()},this.resetState=function(){D=0,R=0,w=null,vt.reset(),b.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===wr?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===As?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Wn:Ua}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Wn?Te:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class gp extends ec{}gp.prototype.isWebGL1Renderer=!0;class _p extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Sr extends Ne{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ir extends Ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,h=new Ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rs extends Ze{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;T(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(p,2));function T(){const A=new L,D=new L;let R=0;const w=(e-t)/n;for(let X=0;X<=r;X++){const M=[],y=X/r,z=y*(e-t)+t;for(let V=0;V<=i;V++){const J=V/i,P=J*c+o,O=Math.sin(P),k=Math.cos(P);D.x=z*O,D.y=-y*n+m,D.z=z*k,d.push(D.x,D.y,D.z),A.set(O,w,k).normalize(),u.push(A.x,A.y,A.z),p.push(J,1-y),M.push(g++)}_.push(M)}for(let X=0;X<i;X++)for(let M=0;M<r;M++){const y=_[M][X],z=_[M+1][X],V=_[M+1][X+1],J=_[M][X+1];h.push(y,z,J),h.push(z,V,J),R+=6}l.addGroup(f,R,0),f+=R}function v(A){const D=g,R=new Ft,w=new L;let X=0;const M=A===!0?t:e,y=A===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const z=g;for(let V=0;V<=i;V++){const P=V/i*c+o,O=Math.cos(P),k=Math.sin(P);w.x=M*k,w.y=m*y,w.z=M*O,d.push(w.x,w.y,w.z),u.push(0,y,0),R.x=O*.5+.5,R.y=k*.5*y+.5,p.push(R.x,R.y),g++}for(let V=0;V<i;V++){const J=D+V,P=z+V;A===!0?h.push(P,P+1,J):h.push(P+1,P,J),X+=3}l.addGroup(f,X,A===!0?1:2),f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ur extends Ze{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new L,u=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const T=[],v=f/n;let A=0;f===0&&a===0?A=.5/e:f===n&&c===Math.PI&&(A=-.5/e);for(let D=0;D<=e;D++){const R=D/e;d.x=-t*Math.cos(i+R*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(i+R*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(R+A,1-v),T.push(l++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const v=h[f][T+1],A=h[f][T],D=h[f+1][T],R=h[f+1][T+1];(f!==0||a>0)&&p.push(v,A,R),(f!==n-1||c<Math.PI)&&p.push(A,D,R)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nr extends Ze{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new L,d=new L,u=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,T=(i+1)*p+g;a.push(_,m,T),a.push(m,f,T)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qe extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nc extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const lr=new me,da=new L,ua=new L;class xp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;da.setFromMatrixPosition(t.matrixWorld),e.position.copy(da),ua.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ua),e.updateMatrixWorld(),lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vp extends xp{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends nc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new vp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sp extends nc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ep{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fa(){return(typeof performance>"u"?Date:performance).now()}class Tp{constructor(t,e,n=0,i=1/0){this.ray=new Cr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Er(t,this,n,e),n.sort(pa),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Er(t[i],this,n,e);return n.sort(pa),n}}function pa(s,t){return s.distance-t.distance}function Er(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Er(i[r],t,e,!0)}}class ma{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yr);const ga={type:"change"},hr={type:"start"},_a={type:"end"},gs=new Cr,xa=new En,yp=Math.cos(70*ll.DEG2RAD);class bp extends jn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Pt),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ga),n.update(),r=i.NONE},this.update=function(){const b=new L,st=new Pn().setFromUnitVectors(t.up,new L(0,1,0)),Et=st.clone().invert(),mt=new L,tt=new Pn,C=new L,rt=2*Math.PI;return function(Lt=null){const Rt=n.object.position;b.copy(Rt).sub(n.target),b.applyQuaternion(st),o.setFromVector3(b),n.autoRotate&&r===i.NONE&&V(y(Lt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Kt=n.minAzimuthAngle,$t=n.maxAzimuthAngle;isFinite(Kt)&&isFinite($t)&&(Kt<-Math.PI?Kt+=rt:Kt>Math.PI&&(Kt-=rt),$t<-Math.PI?$t+=rt:$t>Math.PI&&($t-=rt),Kt<=$t?o.theta=Math.max(Kt,Math.min($t,o.theta)):o.theta=o.theta>(Kt+$t)/2?Math.max(Kt,o.theta):Math.min($t,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*l),b.setFromSpherical(o),b.applyQuaternion(Et),Rt.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let ae=!1;if(n.zoomToCursor&&R){let le=null;if(n.object.isPerspectiveCamera){const Qt=b.length();le=K(Qt*l);const fe=Qt-le;n.object.position.addScaledVector(A,fe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qt=new L(D.x,D.y,0);Qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ae=!0;const fe=new L(D.x,D.y,0);fe.unproject(n.object),n.object.position.sub(fe).add(Qt),n.object.updateMatrixWorld(),le=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;le!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(le).add(n.object.position):(gs.origin.copy(n.object.position),gs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(gs.direction))<yp?t.lookAt(n.target):(xa.setFromNormalAndCoplanarPoint(n.object.up,n.target),gs.intersectPlane(xa,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ae=!0);return l=1,R=!1,ae||mt.distanceToSquared(n.object.position)>a||8*(1-tt.dot(n.object.quaternion))>a||C.distanceToSquared(n.target)>0?(n.dispatchEvent(ga),mt.copy(n.object.position),tt.copy(n.object.quaternion),C.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",N),n.domElement.removeEventListener("wheel",nt),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",N),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new ma,c=new ma;let l=1;const h=new L,d=new Ft,u=new Ft,p=new Ft,g=new Ft,_=new Ft,m=new Ft,f=new Ft,T=new Ft,v=new Ft,A=new L,D=new Ft;let R=!1;const w=[],X={};let M=!1;function y(b){return b!==null?2*Math.PI/60*n.autoRotateSpeed*b:2*Math.PI/60/60*n.autoRotateSpeed}function z(b){const st=Math.abs(b*.01);return Math.pow(.95,n.zoomSpeed*st)}function V(b){c.theta-=b}function J(b){c.phi-=b}const P=function(){const b=new L;return function(Et,mt){b.setFromMatrixColumn(mt,0),b.multiplyScalar(-Et),h.add(b)}}(),O=function(){const b=new L;return function(Et,mt){n.screenSpacePanning===!0?b.setFromMatrixColumn(mt,1):(b.setFromMatrixColumn(mt,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(Et),h.add(b)}}(),k=function(){const b=new L;return function(Et,mt){const tt=n.domElement;if(n.object.isPerspectiveCamera){const C=n.object.position;b.copy(C).sub(n.target);let rt=b.length();rt*=Math.tan(n.object.fov/2*Math.PI/180),P(2*Et*rt/tt.clientHeight,n.object.matrix),O(2*mt*rt/tt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(Et*(n.object.right-n.object.left)/n.object.zoom/tt.clientWidth,n.object.matrix),O(mt*(n.object.top-n.object.bottom)/n.object.zoom/tt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(b,st){if(!n.zoomToCursor)return;R=!0;const Et=n.domElement.getBoundingClientRect(),mt=b-Et.left,tt=st-Et.top,C=Et.width,rt=Et.height;D.x=mt/C*2-1,D.y=-(tt/rt)*2+1,A.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(b){return Math.max(n.minDistance,Math.min(n.maxDistance,b))}function it(b){d.set(b.clientX,b.clientY)}function ot(b){Y(b.clientX,b.clientX),f.set(b.clientX,b.clientY)}function G(b){g.set(b.clientX,b.clientY)}function $(b){u.set(b.clientX,b.clientY),p.subVectors(u,d).multiplyScalar(n.rotateSpeed);const st=n.domElement;V(2*Math.PI*p.x/st.clientHeight),J(2*Math.PI*p.y/st.clientHeight),d.copy(u),n.update()}function ht(b){T.set(b.clientX,b.clientY),v.subVectors(T,f),v.y>0?j(z(v.y)):v.y<0&&q(z(v.y)),f.copy(T),n.update()}function xt(b){_.set(b.clientX,b.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(_),n.update()}function _t(b){Y(b.clientX,b.clientY),b.deltaY<0?q(z(b.deltaY)):b.deltaY>0&&j(z(b.deltaY)),n.update()}function It(b){let st=!1;switch(b.code){case n.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),st=!0;break;case n.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),st=!0;break;case n.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),st=!0;break;case n.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),st=!0;break}st&&(b.preventDefault(),n.update())}function Ut(b){if(w.length===1)d.set(b.pageX,b.pageY);else{const st=ft(b),Et=.5*(b.pageX+st.x),mt=.5*(b.pageY+st.y);d.set(Et,mt)}}function wt(b){if(w.length===1)g.set(b.pageX,b.pageY);else{const st=ft(b),Et=.5*(b.pageX+st.x),mt=.5*(b.pageY+st.y);g.set(Et,mt)}}function kt(b){const st=ft(b),Et=b.pageX-st.x,mt=b.pageY-st.y,tt=Math.sqrt(Et*Et+mt*mt);f.set(0,tt)}function U(b){n.enableZoom&&kt(b),n.enablePan&&wt(b)}function ee(b){n.enableZoom&&kt(b),n.enableRotate&&Ut(b)}function St(b){if(w.length==1)u.set(b.pageX,b.pageY);else{const Et=ft(b),mt=.5*(b.pageX+Et.x),tt=.5*(b.pageY+Et.y);u.set(mt,tt)}p.subVectors(u,d).multiplyScalar(n.rotateSpeed);const st=n.domElement;V(2*Math.PI*p.x/st.clientHeight),J(2*Math.PI*p.y/st.clientHeight),d.copy(u)}function Ct(b){if(w.length===1)_.set(b.pageX,b.pageY);else{const st=ft(b),Et=.5*(b.pageX+st.x),mt=.5*(b.pageY+st.y);_.set(Et,mt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(_)}function vt(b){const st=ft(b),Et=b.pageX-st.x,mt=b.pageY-st.y,tt=Math.sqrt(Et*Et+mt*mt);T.set(0,tt),v.set(0,Math.pow(T.y/f.y,n.zoomSpeed)),j(v.y),f.copy(T);const C=(b.pageX+st.x)*.5,rt=(b.pageY+st.y)*.5;Y(C,rt)}function se(b){n.enableZoom&&vt(b),n.enablePan&&Ct(b)}function Ht(b){n.enableZoom&&vt(b),n.enableRotate&&St(b)}function E(b){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",N)),Wt(b),b.pointerType==="touch"?zt(b):et(b))}function x(b){n.enabled!==!1&&(b.pointerType==="touch"?Z(b):Q(b))}function N(b){Nt(b),w.length===0&&(n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",N)),n.dispatchEvent(_a),r=i.NONE}function et(b){let st;switch(b.button){case 0:st=n.mouseButtons.LEFT;break;case 1:st=n.mouseButtons.MIDDLE;break;case 2:st=n.mouseButtons.RIGHT;break;default:st=-1}switch(st){case Zn.DOLLY:if(n.enableZoom===!1)return;ot(b),r=i.DOLLY;break;case Zn.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;G(b),r=i.PAN}else{if(n.enableRotate===!1)return;it(b),r=i.ROTATE}break;case Zn.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;it(b),r=i.ROTATE}else{if(n.enablePan===!1)return;G(b),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(hr)}function Q(b){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;$(b);break;case i.DOLLY:if(n.enableZoom===!1)return;ht(b);break;case i.PAN:if(n.enablePan===!1)return;xt(b);break}}function nt(b){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(b.preventDefault(),n.dispatchEvent(hr),_t(Mt(b)),n.dispatchEvent(_a))}function Mt(b){const st=b.deltaMode,Et={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(st){case 1:Et.deltaY*=16;break;case 2:Et.deltaY*=100;break}return b.ctrlKey&&!M&&(Et.deltaY*=10),Et}function ut(b){b.key==="Control"&&(M=!0,document.addEventListener("keyup",gt,{passive:!0,capture:!0}))}function gt(b){b.key==="Control"&&(M=!1,document.removeEventListener("keyup",gt,{passive:!0,capture:!0}))}function Pt(b){n.enabled===!1||n.enablePan===!1||It(b)}function zt(b){switch(bt(b),w.length){case 1:switch(n.touches.ONE){case Jn.ROTATE:if(n.enableRotate===!1)return;Ut(b),r=i.TOUCH_ROTATE;break;case Jn.PAN:if(n.enablePan===!1)return;wt(b),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(b),r=i.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(b),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(hr)}function Z(b){switch(bt(b),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(b),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ct(b),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(b),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ht(b),n.update();break;default:r=i.NONE}}function te(b){n.enabled!==!1&&b.preventDefault()}function Wt(b){w.push(b.pointerId)}function Nt(b){delete X[b.pointerId];for(let st=0;st<w.length;st++)if(w[st]==b.pointerId){w.splice(st,1);return}}function bt(b){let st=X[b.pointerId];st===void 0&&(st=new Ft,X[b.pointerId]=st),st.set(b.pageX,b.pageY)}function ft(b){const st=b.pointerId===w[0]?w[1]:w[0];return X[st]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",N),n.domElement.addEventListener("wheel",nt,{passive:!1}),document.addEventListener("keydown",ut,{passive:!0,capture:!0}),this.update()}}const yt={city:{gridSize:15,cellSize:15,roadWidth:15},building:{baseSizeMin:6,baseSizeMax:10},road:{asphaltColor:3355443,laneMarkingColor:16776960,edgeMarkingColor:16777215,crosswalkColor:16777215,sidewalkColor:11184810,lawnColor:2263074,sidewalkWidth:.6,laneMarkingWidth:.15,laneMarkingLength:2,laneMarkingGap:1,crosswalkStripeWidth:.4,crosswalkStripeGap:.3},car:{spawnCount:60,minSpeed:4,maxSpeed:8},pedestrian:{spawnCount:6,minSpeed:1.5,maxSpeed:2.5,headSize:.25,torsoWidth:.35,torsoHeight:.5,torsoDepth:.2,armWidth:.1,armLength:.45,legWidth:.12,legLength:.5,sidewalkOffset:9.4,animationSpeed:10},trafficLight:{poleHeight:6,poleRadius:.2,armLength:6,armRadius:.15,signalBoxWidth:.5,signalBoxHeight:1.2,signalBoxDepth:.5,visorWidth:.4,visorHeight:.1,visorDepth:.4,lightRadius:.15,cornerOffset:9,colors:{pole:6710886,box:16763904,visor:1118481,redOn:16711680,redOff:3342336,yellowOn:16763904,yellowOff:3351040,greenOn:65280,greenOff:13056},cycleTime:5},tree:{countPerLawn:{min:1,max:2}},scene:{backgroundColor:8900331},lighting:{ambient:{color:16777215,intensity:.6},directional:{color:16777215,intensity:.8,position:{x:20,y:20,z:20},shadowMapSize:1024}},simulation:{maxBoundary:112.5,enableShadows:!1},materials:{skin:{color:16764074}}};class Ap{constructor(t,e){this.size=t,this.cellSize=e,this.grid=[],this.initGrid()}initGrid(){for(let t=0;t<this.size;t++){const e=[];for(let n=0;n<this.size;n++)e.push({type:"EMPTY",entity:null,height:0,area:0,bounds:null});this.grid.push(e)}}register(t,e,n,i,r){if(!this.isValid(t,e))return;const a=this.grid[t][e];if(a.type=n,a.entity=i,a.bounds=r,r){const o=new L;r.getSize(o),a.height=o.y,a.area=o.x*o.z}}getCell(t,e){return this.isValid(t,e)?this.grid[t][e]:null}getCellFromWorldPos(t,e){const n=Math.floor(t/this.cellSize+this.size/2),i=Math.floor(e/this.cellSize+this.size/2);return this.getCell(n,i)}isBuildingAt(t,e=0){const n=this.getCellFromWorldPos(t.x,t.z);return n&&n.type==="BUILDING"?n.bounds?e>0?n.bounds.clone().expandByScalar(e).containsPoint(t):n.bounds.containsPoint(t):!0:!1}isValid(t,e){return t>=0&&t<this.size&&e>=0&&e<this.size}getGrid(){return this.grid}}const Ln={CAR:"CAR",PEDESTRIAN:"PEDESTRIAN",TRAFFIC_LIGHT:"TRAFFIC_LIGHT",BUILDING:"BUILDING",ROAD:"ROAD",TREE:"TREE",LAWN:"LAWN"},Jt={RED:"RED",YELLOW:"YELLOW",GREEN:"GREEN"},ue={NE:"NE",NW:"NW",SE:"SE",SW:"SW"},At={NORTH:"NORTH",SOUTH:"SOUTH",EAST:"EAST",WEST:"WEST"},Ie={HORIZONTAL:"EW",VERTICAL:"NS",BOTH:"BOTH"},ie={NORTH:0,EAST:-Math.PI/2,SOUTH:Math.PI,WEST:Math.PI/2},Tr={NE:{controls:"WESTBOUND",faces:"EAST",incoming:{x:-1,z:0}},NW:{controls:"SOUTHBOUND",faces:"NORTH",incoming:{x:0,z:1}},SW:{controls:"EASTBOUND",faces:"WEST",incoming:{x:1,z:0}},SE:{controls:"NORTHBOUND",faces:"SOUTH",incoming:{x:0,z:-1}}},Ii={ALIGNMENT_TOLERANCE_DEGREES:5,MIN_SIGNAL_ELEVATION:4,MAX_SIGNAL_ELEVATION:7};class wp{constructor(){this.entities=[],this.entitiesByType=new Map,Object.values(Ln).forEach(t=>{this.entitiesByType.set(t,[])})}add(t){if(this.entities.push(t),t.entityType){const e=this.entitiesByType.get(t.entityType);e&&e.push(t)}return t}remove(t){const e=this.entities.indexOf(t);if(e>-1&&this.entities.splice(e,1),t.entityType){const n=this.entitiesByType.get(t.entityType);if(n){const i=n.indexOf(t);i>-1&&n.splice(i,1)}}t.dispose&&t.dispose()}getByType(t){return this.entitiesByType.get(t)||[]}getAll(){return this.entities}update(t,e){this.entities.forEach(n=>{n.active&&n.update&&n.update(t,e)})}getCount(){return this.entities.length}getCountByType(t){const e=this.entitiesByType.get(t);return e?e.length:0}clear(){this.entities.forEach(t=>{t.dispose&&t.dispose()}),this.entities=[],this.entitiesByType.forEach(t=>{t.length=0})}}function Bi(s,t){return s+Math.random()*(t-s)}function yi(s,t){return Math.floor(Bi(s,t+1))}function va(s,t,e){const n=e-t;return s>e?t+(s-e)%n:s<t?e-(t-s)%n:s}class Vi extends We{constructor(t){super(),this.entityType=t,this.speed=0,this.active=!0,this.maxBoundary=yt.simulation.maxBoundary}enableShadows(t=!0,e=!1){this.traverse(n=>{n instanceof jt&&(n.castShadow=t,n.receiveShadow=e)})}wrapPosition(){this.position.x=va(this.position.x,-this.maxBoundary,this.maxBoundary),this.position.z=va(this.position.z,-this.maxBoundary,this.maxBoundary)}isInBounds(){return Math.abs(this.position.x)<=this.maxBoundary&&Math.abs(this.position.z)<=this.maxBoundary}moveForward(t){this.translateZ(this.speed*t)}update(t,e){}dispose(){this.traverse(t=>{t instanceof jt&&(t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()))})}}function Ma(){return new Zt(Math.random(),Math.random(),Math.random())}function mi(s=0,t=360,e=0,n=100,i=0,r=100){const a=s+Math.random()*(t-s),o=e+Math.random()*(n-e),c=i+Math.random()*(r-i);return new Zt(`hsl(${a}, ${o}%, ${c}%)`)}function lt(s,t,e){return new de(s,t,e)}function dn(s,t,e,n=16){return new Rs(s,t,e,n)}function Sa(s,t=16,e=16){return new Ur(s,t,e)}function we(s,t){return new ki(s,t)}function Rp(s,t=16){return new Ir(s,t)}function ct(s,t={}){return new Qe({color:s,...t})}function bn(s,t={}){return new fn({color:s,...t})}function W(s,t,e=!0,n=!1){const i=new jt(s,t);return i.castShadow=e,i.receiveShadow=n,i}class Cp extends Vi{constructor(t=null){super(Ln.BUILDING),this.buildingType=t||this.selectWeightedBuildingType(),this.createBuilding(),this.enableShadows(!0,!0)}selectWeightedBuildingType(){const t=Math.random()*100;return t<35?1:t<45?2:t<50?3:t<55?4:t<70?5:6}createBuilding(){switch(this.buildingType){case 1:this.createClassicBuilding();break;case 2:this.createTwistedTower();break;case 3:this.createClockTower();break;case 4:this.createModernSkyscraper();break;case 5:this.createTownhouse();break;case 6:this.createBrownstone();break;default:this.createClassicBuilding()}}createClassicBuilding(){const t=yt.building,e=Bi(t.baseSizeMin,t.baseSizeMax),n=Bi(t.baseSizeMin,t.baseSizeMax),i=yi(5,10),r=3,a=i*r,o=mi(0,360,40,60,50,70),c=15658734;this.createMainBody(e,n,a,o),this.addCornerQuoins(e,n,a,c),this.addFloorBands(e,n,i,r,c),this.addWindows(e,n,i,r),this.addEntrance(e,n,c),this.addAwnings(e,n),this.addClassicRoof(e,n,a,c)}addClassicRoof(t,e,n,i){const a=ct(i),o=W(lt(t+.3,.8,e+.3),a);o.position.y=n+.8/2,this.add(o);const c=.5,l=ct(i);if([{x:t/2+.2,z:e/2+.2},{x:-t/2-.2,z:e/2+.2},{x:t/2+.2,z:-e/2-.2},{x:-t/2-.2,z:-e/2-.2}].forEach(d=>{const u=W(lt(c,1,c),l);u.position.set(d.x,n+1,d.z),this.add(u)}),Math.random()>.5){const d=ct(6710886),u=2,p=W(dn(.05,.05,u),d);p.position.y=n+.8+u/2,this.add(p);const g=ct(8947848),_=W(lt(1.5,.05,.05),g);_.position.y=n+.8+u-.3,this.add(_);const m=W(lt(1,.05,.05),g);m.position.y=n+.8+u-.6,this.add(m)}}createTwistedTower(){const e=yi(20,30),n=.6,i=e*n,r=Math.PI/2,a=mi(180,220,40,60,40,60),o=14540253;for(let c=0;c<e;c++){const l=c*n,h=c/e*r,d=1-Math.abs(c-e/2)/e*.3;this.addTowerFloor(8*d,n,l,h,a,o)}this.addModernRoof(8*.7,i,r,a,o)}addModernRoof(t,e,n,i,r){const o=ct(r);for(let p=0;p<5;p++){const g=e+p*.4,_=1-p*.15,m=W(lt(t*_,.3,t*_),o);m.position.y=g,m.rotation.y=n+p*.1,this.add(m)}const c=1.5,l=ct(11184810),h=W(dn(.1,.3,c),l);h.position.y=e+2+c/2,this.add(h);const d=ct(16711680),u=W(lt(.2,.2,.2),d);u.position.y=e+2+c,this.add(u)}addTowerFloor(t,e,n,i,r,a){const o=lt(t,e*.8,t),c=ct(r),l=W(o,c,!0,!0);l.position.y=n+e/2,l.rotation.y=i,this.add(l);const h=lt(t+.1,e*.2,t+.1),d=ct(a),u=W(h,d,!0,!0);u.position.y=n+e,u.rotation.y=i,this.add(u)}createMainBody(t,e,n,i){const r=lt(t,n,e),a=ct(i),o=W(r,a,!0,!0);o.position.y=n/2,this.add(o)}addCornerQuoins(t,e,n,i){const c=ct(i),l=Math.floor(n/.6)-1;for(let h=0;h<l;h++){const d=.3+h*.6,u=h%2*.15;[{x:t/2+.3/2-u,z:e/2},{x:-t/2-.3/2+u,z:e/2},{x:t/2+.3/2-u,z:-e/2},{x:-t/2-.3/2+u,z:-e/2}].forEach(g=>{const _=W(lt(.3,.6,.5),c);_.position.set(g.x,d,g.z),this.add(_)})}}addFloorBands(t,e,n,i,r){const o=ct(r);for(let c=1;c<n;c++){const l=c*i,h=W(lt(t+.1,.2,e+.1),o);h.position.y=l,this.add(h)}}addWindows(t,e,n,i){const c=ct(8965375),l=ct(16777215),h=Math.floor(t/2);for(let d=0;d<n;d++){const u=d*i+i/2;for(let g=0;g<h;g++){const _=(g-h/2+.5)*2;this.addSingleWindow(_,u,e/2+.15/2,.8,1.5,.15,c,l),this.addSingleWindow(_,u,-e/2-.15/2,.8,1.5,.15,c,l)}const p=Math.floor(e/2);for(let g=0;g<p;g++){const _=(g-p/2+.5)*2;this.addSingleWindow(t/2+.15/2,u,_,.15,1.5,.8,c,l),this.addSingleWindow(-t/2-.15/2,u,_,.15,1.5,.8,c,l)}}}addSingleWindow(t,e,n,i,r,a,o,c){const l=W(lt(i+.1,r+.1,a+.05),c);l.position.set(t,e,n),this.add(l);const h=W(lt(i,r,a),o);h.position.set(t,e,n),this.add(h)}addEntrance(t,e,n){const o=ct(4863784),c=W(lt(1.2,2,.2),o);c.position.set(0,2/2,e/2+.2/2),this.add(c);const l=ct(n),h=W(lt(1.2+.2,2+.2,.2+.1),l);h.position.set(0,2/2,e/2+.2/2),this.add(h);const d=2,u=1,p=.3,g=ct(13421772);for(let _=0;_<3;_++){const m=W(lt(d,p,u-_*.2),g);m.position.set(0,p/2+_*p,e/2+u/2+.5-_*.3),this.add(m)}}addAwnings(t,e){const n=ct(16763904),i=1,r=.6,a=.1,o=Math.floor(t/2)-1;for(let c=0;c<o;c++){const l=(c-o/2+.5)*2.5;if(Math.abs(l)>1.5){const h=W(lt(i,a,r),n);h.position.set(l,2.3,e/2+r/2),this.add(h)}}}createClockTower(){const e=mi(200,220,30,50,50,70),n=14540253,i=16766720;let r=0;const a=25;this.addTowerSection(7,a,r,e,n,!0),r+=a;const o=5,c=7+1.5;this.addClockSection(c,o,r,e,i),r+=o;const l=3,h=7-.5;this.addTowerSection(h,l,r,e,n,!1),r+=l;const d=2.5,u=7-1.5;this.addTowerSection(u,d,r,e,n,!1),r+=d,this.addClockTowerRoof(5,r,n)}addTowerSection(t,e,n,i,r,a){const o=ct(i),c=W(lt(t,e,t),o,!0,!0);c.position.y=n+e/2,this.add(c);const l=.4,h=ct(r);if([{x:t/2,z:t/2},{x:-t/2,z:t/2},{x:t/2,z:-t/2},{x:-t/2,z:-t/2}].forEach(g=>{const _=W(lt(l,e,l),h,!0,!0);_.position.set(g.x,n+e/2,g.z),this.add(_)}),a){const _=Math.floor(e/3);for(let m=0;m<_;m++){const f=n+m*3+1.5;for(let T=0;T<2;T++){const v=(T-.5)*2;this.addTowerWindow(v,f,t/2+.1,.6,1.2,.1),this.addTowerWindow(v,f,-t/2-.1,.6,1.2,.1)}}}const u=ct(r),p=W(lt(t+.2,.3,t+.2),u,!0,!0);p.position.y=n+e,this.add(p)}addTowerWindow(t,e,n,i,r,a){const o=ct(16777215),c=ct(8965375),l=W(lt(i+.1,r+.1,a),o);l.position.set(t,e,n),this.add(l);const h=W(lt(i,r,a),c);h.position.set(t,e,n),this.add(h)}addClockSection(t,e,n,i,r){const a=ct(i),o=W(lt(t,e,t),a,!0,!0);o.position.y=n+e/2,this.add(o);const c=3,l=.2,h=n+e/2;this.addClockFace(0,h,t/2+l/2,c,r,0),this.addClockFace(0,h,-t/2-l/2,c,r,Math.PI),this.addClockFace(t/2+l/2,h,0,c,r,Math.PI/2),this.addClockFace(-t/2-l/2,h,0,c,r,-Math.PI/2)}addClockFace(t,e,n,i,r,a){const o=ct(r),c=W(lt(i,i,.15),o);c.position.set(t,e,n),a!==0&&(c.rotation.y=a),this.add(c);const l=ct(9127187),h=.2,d=W(lt(i+h,i+h,.1),l);d.position.set(t,e,n),a!==0&&(d.rotation.y=a),this.add(d);const u=ct(3355443),p=W(dn(.2,.2,.1),u);p.rotation.x=Math.PI/2,p.position.set(t,e,n),a!==0&&(p.rotation.y=a),this.add(p)}addClockTowerRoof(t,e,n){for(let h=0;h<8;h++){const d=e+h*.5,u=t*(1-h/8),p=ct(h%2===0?n:10066329),g=W(lt(u,4/8,u),p);g.position.y=d,this.add(g)}const a=3,o=ct(16766720),c=W(dn(.1,.3,a),o);c.position.y=e+4+a/2,this.add(c);const l=W(dn(.3,.3,.4),o);l.position.y=e+4+a,this.add(l)}createModernSkyscraper(){const t=mi(0,360,30,50,60,80),e=mi(180,220,40,60,50,70),n=14737632;let i=0;const r=10,a=10,o=8;this.addSkyscraperBase(r,a,o,i,t,n),i+=o;const c=3;this.addTransitionSection(7,c,i,t,n),i+=c;const h=6,d=6,u=30;this.addTowerBody(h,d,u,i,e,n),i+=u,this.addSlantedTop(h,d,i,e,n)}addSkyscraperBase(t,e,n,i,r,a){const o=ct(r),c=W(lt(t,n,e),o,!0,!0);c.position.y=i+n/2,this.add(c);const l=3,h=n/l;for(let p=0;p<l;p++){const g=i+p*h+h/2;for(let _=0;_<4;_++){const m=(_-1.5)*2.2;this.addLargeWindow(m,g,e/2+.15,1.8,h*.8,.15),this.addLargeWindow(m,g,-e/2-.15,1.8,h*.8,.15)}for(let _=0;_<4;_++){const m=(_-1.5)*2.2;this.addLargeWindow(t/2+.15,g,m,.15,h*.8,1.8),this.addLargeWindow(-t/2-.15,g,m,.15,h*.8,1.8)}if(p<l-1){const _=ct(a),m=W(lt(t+.2,.2,e+.2),_,!0,!0);m.position.y=i+(p+1)*h,this.add(m)}}const d=ct(a);[{x:t/2-.3,z:e/2-.3},{x:-t/2+.3,z:e/2-.3},{x:t/2-.3,z:-e/2+.3},{x:-t/2+.3,z:-e/2+.3}].forEach(p=>{const g=W(lt(.5,n,.5),d,!0,!0);g.position.set(p.x,i+n/2,p.z),this.add(g)})}addLargeWindow(t,e,n,i,r,a){const o=ct(8965375),c=ct(16777215),l=W(lt(i+.15,r+.15,a+.05),c);l.position.set(t,e,n),this.add(l);const h=W(lt(i,r,a),o);h.position.set(t,e,n),this.add(h)}addTransitionSection(t,e,n,i,r){const a=ct(i),o=W(lt(t,e,t),a,!0,!0);o.position.y=n+e/2,this.add(o);const c=ct(r),l=W(lt(t+.3,.3,t+.3),c,!0,!0);l.position.y=n+e,this.add(l)}addTowerBody(t,e,n,i,r,a){const o=ct(r),c=W(lt(t,n,e),o,!0,!0);c.position.y=i+n/2,this.add(c);const l=ct(a),h=3;for(let u=0;u<h;u++){const p=(u-1)*2,g=W(lt(.15,n,.1),l,!0,!0);g.position.set(p,i+n/2,e/2+.05),this.add(g);const _=W(lt(.15,n,.1),l,!0,!0);_.position.set(p,i+n/2,-e/2-.05),this.add(_)}const d=10;for(let u=1;u<d;u++){const p=i+u/d*n,g=W(lt(t+.1,.15,e+.1),l,!0,!0);g.position.y=p,this.add(g)}}addSlantedTop(t,e,n,i,r){for(let u=0;u<8;u++){const p=n+u*.5,g=u*.3,_=t*(1-u/(8*2)),m=e*(1-u/(8*2)),f=ct(u%2===0?i:r),T=W(lt(_,.5,m),f,!0,!0);T.position.set(g,p,0),this.add(T)}const l=1,h=ct(r),d=W(lt(t*.4,l,e*.4),h,!0,!0);d.position.set(8*.3,n+8*.5+l/2,0),this.add(d)}createTownhouse(){const h=ct(10066329),d=W(lt(6,12,5),h,!0,!0);d.position.y=12/2,this.add(d);for(let T=1;T<4;T++){const v=T*3+1.5;this.addGlowingWindow(-1.5,v,5/2+.15,2,2.2,.15,16746496),this.addGlowingWindow(1.5,v,5/2+.15,2,2.2,.15,16746496),this.addGlowingWindow(-1.5,v,-5/2-.15,2,2.2,.15,16746496),this.addGlowingWindow(1.5,v,-5/2-.15,2,2.2,.15,16746496),T>0&&T<3&&(this.addBalcony(6/2+.3,v-.5,0),this.addBalcony(-6/2-.3,v-.5,0))}const u=11;this.addSmallWindow(-2,u,5/2+.1,.8,.6),this.addSmallWindow(0,u,5/2+.1,.8,.6),this.addSmallWindow(2,u,5/2+.1,.8,.6);const p=1.5,g=2.5,_=ct(9127187),m=W(lt(p,g,.2),_);m.position.set(0,g/2,5/2+.1),this.add(m);const f=ct(6636321);for(let T=0;T<3;T++){const v=W(lt(.1,g*.9,.05),f);v.position.set((T-1)*.4,g/2,5/2+.15),this.add(v)}this.addSmallWindow(-2.5,1.5,5/2+.1,.6,.8),this.addSmallWindow(2.5,1.5,5/2+.1,.6,.8),this.addPeakedRoof(6,5,12,3355443)}addGlowingWindow(t,e,n,i,r,a,o){const c=ct(4868682),l=W(lt(i+.2,r+.2,a),c);l.position.set(t,e,n),this.add(l);const h=ct(o),d=W(lt(i,r,a-.05),h);d.position.set(t,e,n),this.add(d);const u=ct(2763306),p=W(lt(.1,r,a+.05),u);p.position.set(t,e,n),this.add(p);const g=W(lt(i,.1,a+.05),u);g.position.set(t,e,n),this.add(g)}addSmallWindow(t,e,n,i,r){const a=ct(4868682),o=W(lt(i,r,.1),a);o.position.set(t,e,n),this.add(o)}addBalcony(t,e,n){const i=ct(6636321),r=W(lt(.4,.3,1),i);r.position.set(t,e,n),this.add(r)}addPeakedRoof(t,e,n,i){const o=ct(i);for(let c=0;c<12;c++){const l=n+c/12*4,h=t*(1-c/12),d=4/12,u=W(lt(h,d,e+.5),o,!0,!0);u.position.y=l,this.add(u)}}createBrownstone(){const a=mi(20,40,40,60,50,70),o=9139029,c=16777215,l=2763306;this.addHorizontalSiding(7,6,12,a,o),this.addBrownstoneQuoins(7,6,12,o);for(let d=1;d<4;d++){const u=d*3+1.5;for(let p=0;p<3;p++){const g=(p-1)*2;this.addBrownstoneWindow(g,u,6/2+.15,1.2,1.8,c,d===1)}}const h=11;for(let d=0;d<3;d++){const u=(d-1)*2;this.addBrownstoneWindow(u,h,6/2+.15,1,1.2,c,!1)}this.addArchedEntrance(0,1.5,6/2+.2,l,o),this.addBasementWindows(7,6,l),this.addEntranceStairs(7,6,o),this.addCornice(7,6,12,o),this.addFlatRoof(7,6,12,o)}addHorizontalSiding(t,e,n,i,r){const a=ct(i),o=W(lt(t,n,e),a,!0,!0);o.position.y=n/2,this.add(o);const c=ct(r),l=Math.floor(n/.8);for(let h=0;h<l;h++){const d=h*.8,u=W(lt(t+.05,.05,e+.05),c,!0,!0);u.position.y=d,this.add(u)}}addBrownstoneQuoins(t,e,n,i){const r=ct(i),a=.4,o=.5,c=Math.floor(n/o);for(let l=0;l<c;l++){const h=l*o+o/2,d=l%2*.2;[{x:t/2+a/2-d,z:e/2},{x:-t/2-a/2+d,z:e/2},{x:t/2+a/2-d,z:-e/2},{x:-t/2-a/2+d,z:-e/2}].forEach(p=>{const g=W(lt(a,o,.6),r);g.position.set(p.x,h,p.z),this.add(g)})}}addBrownstoneWindow(t,e,n,i,r,a,o){const c=ct(a),l=W(lt(i+.15,r+.15,.15),c);l.position.set(t,e,n),this.add(l);const h=ct(8965375),d=W(lt(i,r,.1),h);if(d.position.set(t,e,n),this.add(d),o){const u=ct(a),p=W(lt(i+.15,.3,.2),u);p.position.set(t,e+r/2+.15,n),this.add(p)}}addArchedEntrance(t,e,n,i,r){const a=ct(r),o=W(lt(2,2.5,.3),a);o.position.set(t,e,n),this.add(o);const c=ct(i),l=W(lt(1.5,2,.2),c);l.position.set(t,e,n+.1),this.add(l)}addBasementWindows(t,e,n){const i=ct(n),r=W(lt(1,.6,.1),i);r.position.set(-1.5,.4,e/2+.1),this.add(r);const a=W(lt(1,.6,.1),i);a.position.set(1.5,.4,e/2+.1),this.add(a)}addEntranceStairs(t,e,n){const i=ct(n),r=3,a=1.5,o=.3;for(let u=0;u<4;u++){const p=W(lt(r,o,a-u*.2),i);p.position.set(0,o/2+u*o,e/2+a/2+.3-u*.25),this.add(p)}const c=ct(3355443),l=1,h=W(lt(.1,l,a),c);h.position.set(-r/2,l/2+o*2,e/2+a/2),this.add(h);const d=W(lt(.1,l,a),c);d.position.set(r/2,l/2+o*2,e/2+a/2),this.add(d)}addCornice(t,e,n,i){const r=ct(i),a=W(lt(t+.4,.5,e+.4),r,!0,!0);a.position.y=n-.3,this.add(a);const o=5;for(let c=0;c<o;c++){const l=(c-2)*1.5,h=W(lt(.3,.4,.4),r);h.position.set(l,n-.5,e/2+.3),this.add(h)}}addFlatRoof(t,e,n,i){const r=ct(i),a=.6,o=W(lt(t+.5,a,e+.5),r,!0,!0);o.position.y=n+a/2,this.add(o)}}class Pp extends Vi{constructor(t=Ie.BOTH){super(Ln.ROAD),this.orientation=t;const e=yt.road,n=yt.city.cellSize;this.createAsphalt(n,e),this.createRoadMarkings(n,e,t),t!==Ie.BOTH&&(this.createCurbs(n,e,t),this.createParkways(n,e,t),this.createSidewalks(n,e,t))}createAsphalt(t,e){const n=we(t,t),i=ct(e.asphaltColor),r=W(n,i,!1,!0);r.rotation.x=-Math.PI/2,this.add(r)}createRoadMarkings(t,e,n){const i=bn(e.laneMarkingColor),r=bn(e.edgeMarkingColor),a=this.createDashedMaterial();n===Ie.BOTH?this.createIntersectionMarkings(t,i):n===Ie.VERTICAL?this.createVerticalRoadMarkings(t,i,r,a,e):n===Ie.HORIZONTAL&&this.createHorizontalRoadMarkings(t,i,r,a,e)}createDashedMaterial(){const t=document.createElement("canvas");t.width=64,t.height=512;const e=t.getContext("2d");e.clearRect(0,0,64,512),e.fillStyle="#ffffff";for(let i=0;i<8;i++)e.fillRect(10,i*64+16,44,32);const n=new Sr(t);return n.wrapS=Ni,n.wrapT=Ni,bn(16777215,{map:n,transparent:!0})}createIntersectionMarkings(t,e){}createVerticalRoadMarkings(t,e,n,i,r){const a=yt.city.roadWidth,o=we(.2,t),c=we(.15,t),l=W(o,e,!1);l.rotation.x=-Math.PI/2,l.position.set(-.15,.01,0),this.add(l);const h=W(o,e,!1);h.rotation.x=-Math.PI/2,h.position.set(.15,.01,0),this.add(h);const d=W(c,i,!1);d.rotation.x=-Math.PI/2,d.position.set(-3.75,.01,0),this.add(d);const u=W(c,i,!1);u.rotation.x=-Math.PI/2,u.position.set(3.75,.01,0),this.add(u);const p=we(.15,t),g=W(p,n,!1);g.rotation.x=-Math.PI/2,g.position.set(-a/2+.1,.01,0),this.add(g);const _=W(p,n,!1);_.rotation.x=-Math.PI/2,_.position.set(a/2-.1,.01,0),this.add(_)}createHorizontalRoadMarkings(t,e,n,i,r){const a=yt.city.roadWidth,o=we(t,.2),c=we(t,.15),l=W(o,e,!1);l.rotation.x=-Math.PI/2,l.position.set(0,.01,-.15),this.add(l);const h=W(o,e,!1);h.rotation.x=-Math.PI/2,h.position.set(0,.01,.15),this.add(h);const d=W(c,i.clone(),!1);d.rotation.x=-Math.PI/2,d.position.set(0,.01,-3.75),this.add(d);const u=W(c,i.clone(),!1);u.rotation.x=-Math.PI/2,u.position.set(0,.01,3.75),this.add(u);const p=we(t,.15),g=W(p,n,!1);g.rotation.x=-Math.PI/2,g.position.set(0,.01,-a/2+.1),this.add(g);const _=W(p,n,!1);_.rotation.x=-Math.PI/2,_.position.set(0,.01,a/2-.1),this.add(_)}createCurbs(t,e,n){const i=yt.city.roadWidth,r=ct(8947848),a=.15;if(n!==Ie.HORIZONTAL){const o=lt(.3,a,t),c=W(o,r,!1);c.position.set(-i/2-.15,a/2,0),this.add(c);const l=W(o,r,!1);l.position.set(i/2+.15,a/2,0),this.add(l)}if(n!==Ie.VERTICAL){const o=lt(t,a,.3),c=W(o,r,!1);c.position.set(0,a/2,-i/2-.15),this.add(c);const l=W(o,r,!1);l.position.set(0,a/2,i/2+.15),this.add(l)}}createParkways(t,e,n){const i=yt.city.roadWidth,r=ct(3833134),a=1;if(n!==Ie.HORIZONTAL){const o=we(a,t),c=W(o,r,!1);c.rotation.x=-Math.PI/2,c.position.set(-i/2-.3-a/2,.16,0),this.add(c);const l=W(o,r,!1);l.rotation.x=-Math.PI/2,l.position.set(i/2+.3+a/2,.16,0),this.add(l)}if(n!==Ie.VERTICAL){const o=we(t,a),c=W(o,r,!1);c.rotation.x=-Math.PI/2,c.position.set(0,.16,-i/2-.3-a/2),this.add(c);const l=W(o,r,!1);l.rotation.x=-Math.PI/2,l.position.set(0,.16,i/2+.3+a/2),this.add(l)}}createSidewalks(t,e,n){const i=yt.city.roadWidth,r=ct(e.sidewalkColor),a=1.2,o=1;if(n!==Ie.HORIZONTAL){const c=lt(a,.1,t),l=W(c,r,!1,!0);l.position.set(-i/2-.3-o-a/2,.2,0),this.add(l);const h=W(c,r,!1,!0);h.position.set(i/2+.3+o+a/2,.2,0),this.add(h)}if(n!==Ie.VERTICAL){const c=lt(t,.1,a),l=W(c,r,!1,!0);l.position.set(0,.2,-i/2-.3-o-a/2),this.add(l);const h=W(c,r,!1,!0);h.position.set(0,.2,i/2+.3+o+a/2),this.add(h)}}addApproachArrows(t){const n=this.createArrowMaterial("STRAIGHT_LEFT"),i=this.createArrowMaterial("STRAIGHT_RIGHT"),r=we(2,2*2);let a=[];t==="NORTH"?(a=[{x:1.875,z:-2,mat:n},{x:5.625,z:-2,mat:i}],a.forEach(o=>{const c=W(r,o.mat,!1,!0);c.rotation.x=-Math.PI/2,c.rotation.z=0,c.position.set(o.x,.02,o.z),this.add(c)})):t==="SOUTH"?(a=[{x:-1.875,z:2,mat:n},{x:-5.625,z:2,mat:i}],a.forEach(o=>{const c=W(r,o.mat,!1,!0);c.rotation.x=-Math.PI/2,c.rotation.z=Math.PI,c.position.set(o.x,.02,o.z),this.add(c)})):t==="EAST"?(a=[{x:2,z:1.875,mat:n},{x:2,z:5.625,mat:i}],a.forEach(o=>{const c=W(r,o.mat,!1,!0);c.rotation.x=-Math.PI/2,c.rotation.z=-Math.PI/2,c.position.set(o.x,.02,o.z),this.add(c)})):t==="WEST"&&(a=[{x:-2,z:-1.875,mat:n},{x:-2,z:-5.625,mat:i}],a.forEach(o=>{const c=W(r,o.mat,!1,!0);c.rotation.x=-Math.PI/2,c.rotation.z=Math.PI/2,c.position.set(o.x,.02,o.z),this.add(c)}))}createArrowMaterial(t){const e=document.createElement("canvas");e.width=128,e.height=256;const n=e.getContext("2d");n.clearRect(0,0,128,256),n.fillStyle="#ffffff",n.strokeStyle="#ffffff",n.lineWidth=10;const i=64;n.beginPath(),n.moveTo(i,240),n.lineTo(i,80),n.stroke(),n.beginPath(),n.moveTo(i,80),n.lineTo(i-30,110),n.lineTo(i+30,110),n.fill(),t==="STRAIGHT_LEFT"?(n.beginPath(),n.moveTo(i,160),n.quadraticCurveTo(i,120,20,120),n.stroke(),n.beginPath(),n.moveTo(20,120),n.lineTo(40,100),n.lineTo(40,140),n.fill()):t==="STRAIGHT_RIGHT"&&(n.beginPath(),n.moveTo(i,160),n.quadraticCurveTo(i,120,108,120),n.stroke(),n.beginPath(),n.moveTo(108,120),n.lineTo(88,100),n.lineTo(88,140),n.fill());const r=new Sr(e);return bn(16777215,{map:r,transparent:!0})}}class Lp extends Vi{constructor(t=ue.NE){super(Ln.TRAFFIC_LIGHT),this.corner=t,this.state=Jt.RED,this.timer=0,this.externalControl=!1,this.redMats=[],this.yellowMats=[],this.greenMats=[];const e=yt.trafficLight;this.createStructure(e),this.enableShadows(!0,!1)}createStructure(t){const e=dn(t.poleRadius,t.poleRadius,t.poleHeight),n=ct(t.colors.pole),i=W(e,n,!0,!0);i.position.y=t.poleHeight/2,this.add(i),this.pole=i;let r=0,a=0,o=0;const c=t.cornerOffset;switch(this.corner){case ue.NE:this.position.set(c,0,-c),r=Math.PI/2,r=Math.PI,a=Math.PI,o=Math.PI/2;break;case ue.NW:this.position.set(-c,0,-c),r=-Math.PI/2,a=Math.PI,o=Math.PI,o=Math.PI;break;case ue.SE:this.position.set(c,0,c),r=Math.PI/2,a=Math.PI,o=0;break;case ue.SW:this.position.set(-c,0,c),r=0,a=Math.PI,o=-Math.PI/2;break}const l=dn(t.armRadius,t.armRadius,t.armLength),h=W(l,n,!0,!0);h.rotation.z=-Math.PI/2,h.rotation.y=r,h.position.set(0,t.poleHeight-.5,0);const d=new We;d.position.set(0,t.poleHeight-.5,0),d.rotation.y=r,this.add(d);const u=W(l,n,!0,!0);u.rotation.z=-Math.PI/2,u.position.x=t.armLength/2,d.add(u),this.mastSignal=this.createSignalHead(t,d,t.armLength-1,-1,0,a,!0),this.postSignal=this.createSignalHead(t,this,0,t.poleHeight/2,0,o,!1),this.createPedestrianSignals(t)}createSignalHead(t,e,n,i,r,a,o){const c=lt(t.signalBoxWidth,t.signalBoxHeight,t.signalBoxDepth),l=ct(t.colors.box),h=W(c,l);return h.position.set(n,i,r),h.rotation.y=a,e.add(h),this.createLights(t,h,o),h}createLights(t,e,n){const i=Rp(t.lightRadius,16),r=t.signalBoxDepth/2+.01,a=bn(t.colors.redOff),o=W(i,a,!1);o.position.set(0,.35,r),e.add(o);const c=bn(t.colors.yellowOff),l=W(i,c,!1);l.position.set(0,0,r),e.add(l);const h=bn(t.colors.greenOff),d=W(i,h,!1);d.position.set(0,-.35,r),e.add(d),n?(this.primaryMats||(this.primaryMats={red:[],yellow:[],green:[]}),this.primaryMats.red.push(a),this.primaryMats.yellow.push(c),this.primaryMats.green.push(h)):(this.secondaryMats||(this.secondaryMats={red:[],yellow:[],green:[]}),this.secondaryMats.red.push(a),this.secondaryMats.yellow.push(c),this.secondaryMats.green.push(h));const u=lt(t.visorWidth,t.visorHeight,t.visorDepth),p=ct(t.colors.visor);[.45,.1,-.25].forEach(_=>{const m=W(u,p,!1);m.position.set(0,_,r+t.visorDepth/2),e.add(m)})}update(t,e){if(this.externalControl)return;this.timer+=t;const n=yt.trafficLight.cycleTime;if(this.pedSignals){const i=n-this.timer;this.pedSignals.forEach((r,a)=>{const o=a===0,c=this.state===Jt.GREEN;let l=!1;o?l=c:l=!c,l?i<3?r.setState("COUNTDOWN",i):r.setState("WALK",0):r.setState("DONT_WALK",0)})}this.timer>n&&(this.toggle(),this.timer=0)}toggle(){const t=yt.trafficLight.colors;this.state===Jt.RED?this.state=Jt.GREEN:this.state=Jt.RED,this.updateLightGroup(this.primaryMats,this.state,t);const e=this.state===Jt.RED?Jt.GREEN:Jt.RED;this.updateLightGroup(this.secondaryMats,e,t)}updateLightGroup(t,e,n){t&&(e===Jt.GREEN?(t.red.forEach(i=>i.color.setHex(n.redOff)),t.yellow.forEach(i=>i.color.setHex(n.yellowOff)),t.green.forEach(i=>i.color.setHex(n.greenOn))):(t.red.forEach(i=>i.color.setHex(n.redOn)),t.yellow.forEach(i=>i.color.setHex(n.yellowOff)),t.green.forEach(i=>i.color.setHex(n.greenOff))))}setLightGroupState(t,e){const n=yt.trafficLight.colors,i=t==="primary"?this.primaryMats:this.secondaryMats;i&&(e===Jt.GREEN?(i.red.forEach(r=>r.color.setHex(n.redOff)),i.yellow.forEach(r=>r.color.setHex(n.yellowOff)),i.green.forEach(r=>r.color.setHex(n.greenOn))):e===Jt.YELLOW?(i.red.forEach(r=>r.color.setHex(n.redOff)),i.yellow.forEach(r=>r.color.setHex(n.yellowOn)),i.green.forEach(r=>r.color.setHex(n.greenOff))):(i.red.forEach(r=>r.color.setHex(n.redOn)),i.yellow.forEach(r=>r.color.setHex(n.yellowOff)),i.green.forEach(r=>r.color.setHex(n.greenOff))))}getForwardVector(){switch(new L,this.corner){case ue.NE:return new L(0,0,1);case ue.NW:return new L(1,0,0);case ue.SE:return new L(-1,0,0);case ue.SW:return new L(0,0,-1)}return new L(0,0,1)}getFacingDirection(){return this.getForwardVector()}createPedestrianSignals(t){this.pedSignals=[];const e=[];switch(this.corner){case ue.NE:e.push({rot:Math.PI,label:"South"}),e.push(0),e.push(-Math.PI/2);break;case ue.NW:e.push(0),e.push(Math.PI/2);break;case ue.SE:e.push(Math.PI),e.push(-Math.PI/2);break;case ue.SW:e.push(Math.PI),e.push(Math.PI/2);break}e.forEach(n=>{const i=new Dp(n);i.mesh.position.y=2.5,this.add(i.mesh),this.pedSignals.push(i)})}}class Dp{constructor(t){this.state="DONT_WALK",this.countdown=0,this.mesh=this.createMesh(),this.mesh.rotation.y=t,this.canvas=document.createElement("canvas"),this.canvas.width=128,this.canvas.height=256,this.ctx=this.canvas.getContext("2d"),this.texture=new Sr(this.canvas),this.material.map=this.texture,this.updateTexture()}createMesh(){const t=lt(.4,.6,.3);this.material=new fn({color:16777215});const e=new Qe({color:1118481}),n=new fn({map:null}),i=[e,e,e,e,n,e],r=new jt(t,i);return this.material=n,r}setState(t,e){(this.state!==t||this.countdown!==e)&&(this.state=t,this.countdown=e,this.updateTexture())}updateTexture(){const t=this.ctx,e=128,n=256;t.fillStyle="#000000",t.fillRect(0,0,e,n),this.state==="DONT_WALK"?(t.fillStyle="#ff3300",this.drawHand(t,e/2,64,40)):this.state==="COUNTDOWN"&&(t.fillStyle="#ff3300",t.font="bold 80px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(Math.ceil(this.countdown).toString(),e/2,64)),this.state==="WALK"&&(t.fillStyle="#ffffff",this.drawPerson(t,e/2,192,40)),this.texture.needsUpdate=!0}drawHand(t,e,n,i){t.beginPath(),t.rect(e-i/2,n-i/2,i,i),t.fill()}drawPerson(t,e,n,i){t.beginPath(),t.arc(e,n-i/2,i/4,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(e,n-i/4),t.lineTo(e,n+i/4),t.lineWidth=i/5,t.strokeStyle="#ffffff",t.stroke(),t.beginPath(),t.moveTo(e,n+i/4),t.lineTo(e-i/3,n+i),t.moveTo(e,n+i/4),t.lineTo(e+i/3,n+i),t.stroke()}}class Ip extends We{constructor(t=null){super(),this.treeType=t||yi(1,3),this.createTree()}createTree(){switch(this.treeType){case 1:this.createOakTree();break;case 2:this.createCherryBlossomTree();break;case 3:this.createPineTree();break;default:this.createOakTree()}}createOakTree(){this.addTrunk(0,0,0,.3,3,6636321),this.addBranch(0,2.5,0,.15,1.5,Math.PI/4,0,6636321),this.addBranch(0,2.5,0,.15,1.5,-Math.PI/4,Math.PI/2,6636321),this.addBranch(0,2.5,0,.15,1.5,Math.PI/4,Math.PI,6636321),this.addBranch(0,2.5,0,.15,1.5,-Math.PI/4,-Math.PI/2,6636321),this.addBranch(0,2,0,.1,1,Math.PI/3,Math.PI/4,6636321),this.addBranch(0,2,0,.1,1,Math.PI/3,-Math.PI/4,6636321),this.addFoliageCluster(0,3.5,0,1.5,2263842),this.addFoliageCluster(1,3.2,0,1,2263842),this.addFoliageCluster(-1,3.2,0,1,2263842),this.addFoliageCluster(0,3.2,1,1,2263842),this.addFoliageCluster(0,3.2,-1,1,2263842),this.addFoliageCluster(.7,2.8,.7,.8,2263842),this.addFoliageCluster(-.7,2.8,.7,.8,2263842),this.addFoliageCluster(.7,2.8,-.7,.8,2263842),this.addFoliageCluster(-.7,2.8,-.7,.8,2263842)}createCherryBlossomTree(){this.addTrunk(0,0,0,.25,2.5,4863784),this.addBranch(0,2,0,.12,1.8,Math.PI/3,0,4863784),this.addBranch(0,2,0,.12,1.8,Math.PI/3,Math.PI/3,4863784),this.addBranch(0,2,0,.12,1.8,Math.PI/3,2*Math.PI/3,4863784),this.addBranch(0,2,0,.12,1.8,Math.PI/3,Math.PI,4863784),this.addBranch(0,2,0,.12,1.8,Math.PI/3,-2*Math.PI/3,4863784),this.addBranch(0,2,0,.12,1.8,Math.PI/3,-Math.PI/3,4863784),this.addFoliageCluster(0,3,0,1.2,16738740),this.addFoliageCluster(1.2,2.8,0,.9,16738740),this.addFoliageCluster(-1.2,2.8,0,.9,16738740),this.addFoliageCluster(0,2.8,1.2,.9,16738740),this.addFoliageCluster(0,2.8,-1.2,.9,16738740),this.addFoliageCluster(.8,2.5,.8,.7,16738740),this.addFoliageCluster(-.8,2.5,.8,.7,16738740),this.addFoliageCluster(.8,2.5,-.8,.7,16738740),this.addFoliageCluster(-.8,2.5,-.8,.7,16738740);const n=ct(9498256),i=W(Sa(.8,8,8),n);i.scale.y=.3,i.position.y=.1,this.add(i)}createPineTree(){this.addTrunk(0,0,0,.2,4,4861984);const n=6;for(let i=0;i<n;i++){const r=1.5+i*.6,a=1.5-i*.2;this.addFoliageCluster(0,r,0,a,875533)}for(let i=0;i<4;i++){const r=2+i*.7,a=i*Math.PI/2+Math.PI/4;this.addBranch(0,r,0,.08,.6,Math.PI/2.5,a,4861984)}}addTrunk(t,e,n,i,r,a){const o=ct(a),c=W(dn(i,i+.05,r,8),o);c.position.set(t,e+r/2,n),this.add(c)}addBranch(t,e,n,i,r,a,o,c){const l=ct(c),h=W(dn(i,i*.5,r,6),l);h.position.set(t,e,n),h.rotation.z=a,h.rotation.y=o;const d=new L(0,r/2,0);d.applyEuler(new bi(0,o,a)),h.position.add(d),this.add(h)}addFoliageCluster(t,e,n,i,r){const a=ct(r),o=W(Sa(i,8,8),a);o.position.set(t,e,n),this.add(o)}}class Up{constructor(){this.validationResults=[]}isValid(t,e,n=null){const i={signal:t,corner:t.corner,checks:{},valid:!0,errors:[]},r=this.validateSignalAlignment(t);i.checks.alignment=r,r.valid||(i.valid=!1,i.errors.push(r.error));const a=this.validateElevation(t);i.checks.elevation=a,a.valid||(i.valid=!1,i.errors.push(a.error));const o=this.validateFacingRoad(t);return i.checks.direction=o,o.valid||(i.valid=!1,i.errors.push(o.error)),this.validationResults.push(i),i}validateSignalAlignment(t){const n=Tr[t.corner].incoming,i=t.getForwardVector(),r=new L(n.x,0,n.z),a=new L(i.x,0,i.z);r.normalize(),a.normalize();const o=Math.acos(r.dot(a))*(180/Math.PI),c=Ii.ALIGNMENT_TOLERANCE_DEGREES,l=o<=c;return{valid:l,angleDiff:o.toFixed(2),tolerance:c,error:l?null:`Signal alignment off by ${o.toFixed(2)}° (tolerance: ±${c}°)`}}validateElevation(t){const e=t.mastSignal||t.signalBox;if(!e)return{valid:!1,elevation:"N/A",range:"N/A",error:"Could not find signal box for elevation check"};const n=e.getWorldPosition(new L).y,i=n>=Ii.MIN_SIGNAL_ELEVATION&&n<=Ii.MAX_SIGNAL_ELEVATION;return{valid:i,elevation:n.toFixed(2),range:`${Ii.MIN_SIGNAL_ELEVATION}-${Ii.MAX_SIGNAL_ELEVATION}`,error:i?null:`Signal elevation ${n.toFixed(2)}m outside valid range`}}validateFacingRoad(t){const e=t.getForwardVector(),n=Tr[t.corner],i=n.incoming.x,r=n.incoming.z,a=i!==0&&Math.sign(e.x)===-Math.sign(i)||r!==0&&Math.sign(e.z)===-Math.sign(r);return{valid:a,forwardVector:`(${e.x.toFixed(2)}, ${e.z.toFixed(2)})`,expectedOpposite:`(${-i}, ${-r})`,error:a?null:"Signal not facing incoming traffic"}}getSummary(){const t=this.validationResults.length,e=this.validationResults.filter(i=>i.valid).length,n=t-e;return{total:t,valid:e,invalid:n,validationRate:(e/t*100).toFixed(1)+"%"}}printReport(){console.log(`
╔════════════════════════════════════════╗`),console.log("║  SIGNAL VALIDATION REPORT              ║"),console.log("╚════════════════════════════════════════╝");const t=this.getSummary();console.log(`
📊 Summary:`),console.log(`   Total Signals: ${t.total}`),console.log(`   ✅ Valid: ${t.valid}`),console.log(`   ❌ Invalid: ${t.invalid}`),console.log(`   Validation Rate: ${t.validationRate}`);const e=this.validationResults.filter(n=>!n.valid);e.length>0?(console.log(`
⚠️  Invalid Signals:`),e.forEach((n,i)=>{console.log(`
   ${i+1}. Corner: ${n.corner}`),n.errors.forEach(r=>{console.log(`      ❌ ${r}`)})})):console.log(`
✅ All signals passed validation!`),console.log(`
${"─".repeat(50)}
`)}}class Np{constructor(t,e){this.intersectionId=e,this.position={x:t.x,y:t.y||0,z:t.z},this.lanes=this.initializeLanes(),this.signals=[],this.pedestrianSignals=[],this.timingPlan={redDuration:5,yellowDuration:1,greenDuration:5,cycleTime:11}}initializeLanes(){return[{direction:"NORTHBOUND",incomingVector:{x:0,z:-1},outgoingVector:{x:0,z:1}},{direction:"SOUTHBOUND",incomingVector:{x:0,z:1},outgoingVector:{x:0,z:-1}},{direction:"EASTBOUND",incomingVector:{x:1,z:0},outgoingVector:{x:-1,z:0}},{direction:"WESTBOUND",incomingVector:{x:-1,z:0},outgoingVector:{x:1,z:0}}]}addSignal(t,e,n,i,r=!1){const a=Tr[t];this.signals.push({corner:t,position:{x:e.x,y:e.y,z:e.z},rotation:{x:n.x||0,y:n.y,z:n.z||0},mastArm:{direction:i.direction,length:i.length},controlsLane:a.controls,facingDirection:a.faces,validated:r})}addPedestrianSignal(t,e,n,i){this.pedestrianSignals.push({corner:t,position:{x:e.x,y:e.y,z:e.z},rotation:{x:n.x||0,y:n.y,z:n.z||0},facingDirection:i})}toJSON(){return{intersectionId:this.intersectionId,position:this.position,lanes:this.lanes,signals:this.signals,pedestrianSignals:this.pedestrianSignals,timingPlan:this.timingPlan,validationStatus:{totalSignals:this.signals.length,validatedSignals:this.signals.filter(t=>t.validated).length,validationRate:this.signals.filter(t=>t.validated).length/this.signals.length}}}print(){console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`),console.log(`📍 Intersection ${this.intersectionId}`),console.log(`Position: (${this.position.x}, ${this.position.z})`),console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),console.log(`
🚦 Traffic Signals (${this.signals.length}):`),this.signals.forEach((t,e)=>{const n=t.validated?"✅":"❌";console.log(`  ${e+1}. ${n} Corner: ${t.corner} | Controls: ${t.controlsLane}`),console.log(`     Faces: ${t.facingDirection} | Rotation: ${(t.rotation.y*180/Math.PI).toFixed(1)}°`),console.log(`     Position: (${t.position.x.toFixed(1)}, ${t.position.z.toFixed(1)})`)}),console.log(`
🚶 Pedestrian Signals (${this.pedestrianSignals.length}):`),this.pedestrianSignals.forEach((t,e)=>{console.log(`  ${e+1}. Corner: ${t.corner} | Faces: ${t.facingDirection}`)}),console.log(`
⏱️  Timing Plan:`),console.log(`  Red: ${this.timingPlan.redDuration}s | Yellow: ${this.timingPlan.yellowDuration}s | Green: ${this.timingPlan.greenDuration}s`),console.log(`  Total Cycle: ${this.timingPlan.cycleTime}s`),console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)}}const Ee={NS_STRAIGHT_RIGHT:"NS_STRAIGHT_RIGHT",NS_LEFT:"NS_LEFT",EW_STRAIGHT_RIGHT:"EW_STRAIGHT_RIGHT",EW_LEFT:"EW_LEFT",ALL_RED:"ALL_RED"},Bn={ACTIVE:"ACTIVE",CLEARING:"CLEARING"};class Op{constructor(t){this.intersection=t,this.currentPhase=Ee.NS_STRAIGHT_RIGHT,this.state=Bn.ACTIVE,this.timer=0,this.active=!0,this.entityType="CONTROLLER",this.phaseDurations={[Ee.NS_STRAIGHT_RIGHT]:20,[Ee.NS_LEFT]:10,[Ee.EW_STRAIGHT_RIGHT]:20,[Ee.EW_LEFT]:10,[Ee.ALL_RED]:2},this.phaseSequence=[Ee.NS_STRAIGHT_RIGHT,Ee.NS_LEFT,Ee.EW_STRAIGHT_RIGHT,Ee.EW_LEFT],this.currentPhaseIndex=0,this.lights={north:null,south:null,east:null,west:null}}setLights(t,e,n,i){this.lights.north=t,this.lights.south=e,this.lights.east=n,this.lights.west=i,this.setPhaseLights()}update(t){this.timer+=t;const e=this.state===Bn.CLEARING?this.phaseDurations[Ee.ALL_RED]:this.phaseDurations[this.currentPhase];this.timer>=e&&(this.timer=0,this.advancePhase())}advancePhase(){this.state===Bn.ACTIVE?(this.state=Bn.CLEARING,this.setAllRed()):(this.state=Bn.ACTIVE,this.currentPhaseIndex=(this.currentPhaseIndex+1)%this.phaseSequence.length,this.currentPhase=this.phaseSequence[this.currentPhaseIndex],this.setPhaseLights())}setAllRed(){this.lights.north&&(this.setSignalState(this.lights.north,"primary",Jt.RED),this.setSignalState(this.lights.north,"secondary",Jt.RED),this.setSignalState(this.lights.south,"primary",Jt.RED),this.setSignalState(this.lights.south,"secondary",Jt.RED),this.setSignalState(this.lights.east,"primary",Jt.RED),this.setSignalState(this.lights.east,"secondary",Jt.RED),this.setSignalState(this.lights.west,"primary",Jt.RED),this.setSignalState(this.lights.west,"secondary",Jt.RED))}setPhaseLights(){if(this.lights.north)switch(this.setAllRed(),this.currentPhase){case Ee.NS_STRAIGHT_RIGHT:this.setSignalState(this.lights.north,"primary",Jt.GREEN),this.setSignalState(this.lights.south,"primary",Jt.GREEN);break;case Ee.NS_LEFT:this.setSignalState(this.lights.north,"primary",Jt.GREEN),this.setSignalState(this.lights.south,"primary",Jt.GREEN);break;case Ee.EW_STRAIGHT_RIGHT:this.setSignalState(this.lights.east,"primary",Jt.GREEN),this.setSignalState(this.lights.west,"primary",Jt.GREEN);break;case Ee.EW_LEFT:this.setSignalState(this.lights.east,"primary",Jt.GREEN),this.setSignalState(this.lights.west,"primary",Jt.GREEN);break}}setSignalState(t,e,n){t&&t.setLightGroupState&&t.setLightGroupState(e,n)}getPhaseInfo(){return{phase:this.currentPhase,state:this.state,timeRemaining:this.state===Bn.CLEARING?this.phaseDurations[Ee.ALL_RED]-this.timer:this.phaseDurations[this.currentPhase]-this.timer,duration:this.state===Bn.CLEARING?this.phaseDurations[Ee.ALL_RED]:this.phaseDurations[this.currentPhase]}}setPhaseDuration(t,e){this.phaseDurations[t]!==void 0&&(this.phaseDurations[t]=e)}}class Fp{constructor(t,e,n,i=null){this.cityGroup=t,this.entityManager=e,this.worldGrid=n,this.spawnManager=i,this.signalValidator=new Up,this.intersectionConfigs=[],this.intersectionCount=0,this.trafficControllers=[]}generateCity(t){this.gridSize=t,this.grid=this.createGrid(t);const e=yt.city.cellSize;for(let n=0;n<t;n++)for(let i=0;i<t;i++){const r=this.grid[n][i],a=(n-t/2)*e,o=(i-t/2)*e;r==="BUILDING"?this.createBuildingCell(n,i,a,o,e):r==="ROAD"&&this.createRoadCell(n,i,this.grid,t,a,o,e)}return this.createGroundPlane(t,e),this.pruneInvalidTrafficLights(),this.addIntersectionApproachMarkings(),this.printReport(),this.grid}pruneInvalidTrafficLights(){if(!this.worldGrid)return;const t=this.entityManager.getByType("TRAFFIC_LIGHT"),e=[];t.forEach(n=>{const i=n.getForwardVector();if(!i)return;const r=yt.city.cellSize,a=n.position.clone().add(i.clone().multiplyScalar(r)),o=this.worldGrid.getCellFromWorldPos(a.x,a.z);o&&o.type==="BUILDING"&&(console.log(`⚠️ DETECTED invalid traffic light at (${n.position.x.toFixed(1)}, ${n.position.z.toFixed(1)}) facing building`),console.log(`   Facing: ${i.x.toFixed(1)}, ${i.z.toFixed(1)}`),console.log(`   Check Pos: ${a.x.toFixed(1)}, ${a.z.toFixed(1)}`))}),e.forEach(n=>{this.cityGroup.remove(n),this.entityManager.remove(n)}),e.length>0&&console.log(`🧹 Pruned ${e.length} invalid traffic lights.`)}addIntersectionApproachMarkings(){for(let t=0;t<this.gridSize;t++)for(let e=0;e<this.gridSize;e++){const n=this.grid[t][e];n&&n.type==="INTERSECTION"&&[{dx:0,dz:-1,dir:"SOUTH"},{dx:0,dz:1,dir:"NORTH"},{dx:-1,dz:0,dir:"EAST"},{dx:1,dz:0,dir:"WEST"}].forEach(r=>{const a=t+r.dx,o=e+r.dz;if(a>=0&&a<this.gridSize&&o>=0&&o<this.gridSize){const c=this.grid[a][o];c&&c.type==="ROAD"&&c.entity&&c.entity.addApproachArrows&&c.entity.addApproachArrows(r.dir)}})}console.log("🎯 Added approach arrow markings to roads")}createGrid(t){const e=[];for(let n=0;n<t;n++){const i=[];for(let r=0;r<t;r++)n%3===0||r%3===0?i.push("ROAD"):i.push("BUILDING");e.push(i)}return e}createBuildingCell(t,e,n,i,r){const a=new Cp;a.position.set(n,0,i),this.cityGroup.add(a),this.entityManager.add(a),this.spawnManager&&this.spawnManager.registerBuilding(a),a.updateMatrixWorld(!0);const o=new qn().setFromObject(a);this.worldGrid&&this.worldGrid.register(t,e,"BUILDING",a,o),this.addLawn(n,i,r),this.addTrees(n,i,r)}createRoadCell(t,e,n,i,r,a,o){let c=Ie.BOTH;t%3===0&&e%3!==0?c=Ie.VERTICAL:t%3!==0&&e%3===0&&(c=Ie.HORIZONTAL);const l=new Pp(c);l.position.set(r,.05,a),this.cityGroup.add(l),this.entityManager.add(l),l.updateMatrixWorld(!0);const h=new qn().setFromObject(l);this.worldGrid&&this.worldGrid.register(t,e,"ROAD",l,h),t%3===0&&e%3===0&&this.createIntersection(r,a)}createIntersection(t,e){this.intersectionCount++;const n=`INT-${this.intersectionCount}`,i=new Np({x:t,y:0,z:e},n);console.log(`🚦 Creating intersection ${n} at (${t}, ${e})`);const r=[ue.NE,ue.NW,ue.SE,ue.SW],a={};r.forEach(c=>{const l=new Lp(c);l.position.x+=t,l.position.z+=e,l.externalControl=!0,this.cityGroup.add(l),this.entityManager.add(l),c===ue.NE&&(a.north=l),c===ue.NW&&(a.west=l),c===ue.SE&&(a.east=l),c===ue.SW&&(a.south=l);const h=this.signalValidator.isValid(l,i);h.valid||console.warn(`⚠️  Signal at ${c} corner (${t}, ${e}) failed validation:`,h.errors);const d=new L;l.getWorldPosition(d);const u=new Pn;l.getWorldQuaternion(u);const p=new bi().setFromQuaternion(u);i.addSignal(c,d,p,{direction:l.getFacingDirection(),length:yt.trafficLight.armLength},h.valid)});const o=new Op(i);o.setLights(a.north,a.south,a.east,a.west),this.trafficControllers.push(o),this.entityManager.add(o),this.intersectionConfigs.push(i),this.addCrosswalk(t,e)}addLawn(t,e,n){const i=n*.9,r=we(i,i),a=ct(yt.road.lawnColor),o=W(r,a,!1,!0);o.rotation.x=-Math.PI/2,o.position.set(t,.01,e),this.cityGroup.add(o)}addTrees(t,e,n){const i=yt.tree,r=yi(i.countPerLawn.min,i.countPerLawn.max),a=n*.35;for(let o=0;o<r;o++){const c=this.createTree(),l=o/r*Math.PI*2,h=a+Math.random()*2;c.position.set(t+Math.cos(l)*h,0,e+Math.sin(l)*h),this.cityGroup.add(c)}}createTree(){return new Ip}addCrosswalk(t,e){const n=bn(yt.road.crosswalkColor),i=1.6,r=yt.road.crosswalkStripeWidth,a=yt.road.crosswalkStripeGap+r,o=30,c=yt.city.roadWidth/2+2;for(let l=0;l<o;l++){const h=W(we(r,i),n,!1);h.rotation.x=-Math.PI/2,h.position.set(t-o*a/2+l*a,.07,e-c),this.cityGroup.add(h)}for(let l=0;l<o;l++){const h=W(we(r,i),n,!1);h.rotation.x=-Math.PI/2,h.position.set(t-o*a/2+l*a,.07,e+c),this.cityGroup.add(h)}for(let l=0;l<o;l++){const h=W(we(i,r),n,!1);h.rotation.x=-Math.PI/2,h.position.set(t+c,.07,e-o*a/2+l*a),this.cityGroup.add(h)}for(let l=0;l<o;l++){const h=W(we(i,r),n,!1);h.rotation.x=-Math.PI/2,h.position.set(t-c,.07,e-o*a/2+l*a),this.cityGroup.add(h)}}createGroundPlane(t,e){const n=we(t*e,t*e),i=ct(2263842),r=W(n,i,!1,!0);r.rotation.x=-Math.PI/2,r.position.y=-.1,this.cityGroup.add(r)}printReport(){this.signalValidator.printReport(),console.log(`
╔════════════════════════════════════════╗`),console.log("║  INTERSECTION CONFIGURATIONS           ║"),console.log("╚════════════════════════════════════════╝"),this.intersectionConfigs.forEach(t=>{t.print()}),console.log(`
💾 To export intersection data as JSON, run:`),console.log("   city.generator.getIntersectionData()")}getIntersectionData(){return this.intersectionConfigs.map(t=>t.toJSON())}getTrafficControllers(){return this.trafficControllers}}class Ea extends Vi{constructor(t,e){super(Ln.CAR),this.type=["SEDAN","HATCHBACK","TRUCK"][Math.floor(Math.random()*3)],this.color=new Zt(Math.random(),Math.random(),Math.random()),this.speed=Bi(yt.car.minSpeed,yt.car.maxSpeed),this.direction=this.getDirectionFromRotation(e||0),this.createCar(),t&&this.position.copy(t),e&&(this.rotation.y=e),this.enableShadows(!0,!1),this.path=[],this.targetNode=null,this.isTurning=!1,this.turnProgress=0,this.startRotation=0,this.targetRotation=0,this.turnDuration=1.5,this.isBlocked=!1,this.turnStartPos=new L,this.turnControlPos1=new L,this.turnControlPos2=new L,this.turnEndPos=new L}getDirectionFromRotation(t){let e=t%(Math.PI*2);return e<0&&(e+=Math.PI*2),Math.abs(e-ie.NORTH)<.1?At.NORTH:Math.abs(e-ie.SOUTH)<.1?At.SOUTH:Math.abs(e-ie.EAST)<.1||Math.abs(e-(ie.EAST+Math.PI*2))<.1?At.EAST:Math.abs(e-ie.WEST)<.1?At.WEST:At.NORTH}createCar(){const t=new Qe({color:this.color}),e=new Qe({color:8965375}),n=new Qe({color:1118481}),i=new Qe({color:3355443}),r=new fn({color:16777164});new fn({color:16711680});const a=new de(2,.5,4),o=new jt(a,t);o.position.y=.5,o.castShadow=!0,this.add(o);let c,l,h,d,u,p;if(this.type==="SEDAN")d=2,u=1.8,p=.6,l=0,h=1.05;else if(this.type==="HATCHBACK")d=2.5,u=1.8,p=.6,l=-.5,h=1.05;else if(this.type==="TRUCK"){d=1.5,u=1.9,p=.8,l=1,h=1.15;const U=new de(1.9,.4,2),ee=new jt(U,new Qe({color:5592405}));ee.position.set(0,.9,-.8),this.add(ee)}c=new de(u,p,d);const g=new jt(c,t);g.position.set(0,h,l),g.castShadow=!0,this.add(g);const _=new de(u+.02,p-.2,d-.4),m=new jt(_,n);m.position.set(0,h,l),this.add(m);const f=new de(u+.04,p-.3,d-.5),T=new jt(f,e);T.position.set(0,h,l),this.add(T);const v=new de(u-.2,p-.2,.1),A=new jt(v,n);A.position.set(0,h,l+d/2+.01),this.add(A);const D=new de(u-.3,p-.3,.1),R=new jt(D,e);if(R.position.set(0,h,l+d/2+.02),this.add(R),this.type!=="TRUCK"){const U=new de(u-.2,p-.2,.1),ee=new jt(U,n);ee.position.set(0,h,l-d/2-.01),this.add(ee);const St=new de(u-.3,p-.3,.1),Ct=new jt(St,e);Ct.position.set(0,h,l-d/2-.02),this.add(Ct)}else{const U=new de(u-.2,p-.3,.1),ee=new jt(U,n);ee.position.set(0,h+.1,l-d/2-.01),this.add(ee);const St=new de(u-.3,p-.4,.1),Ct=new jt(St,e);Ct.position.set(0,h+.1,l-d/2-.02),this.add(Ct)}const w=1118481,X=new Nr(.15,.02,8,16),M=new Qe({color:w}),y=new jt(X,M);y.position.set(.45,h-.1,l+d/2-.4),y.rotation.x=-Math.PI/4,this.add(y);const z=new de(.5,.6,.1),V=new Qe({color:3355443}),J=new jt(z,V);J.position.set(.45,h-.1,l-.2),this.add(J);const P=new jt(z,V);P.position.set(-.45,h-.1,l-.2),this.add(P);const O=new Rs(.35,.35,.3,16);O.rotateZ(Math.PI/2),[[1,.35,1.2],[-1,.35,1.2],[1,.35,-1.2],[-1,.35,-1.2]].forEach(U=>{const ee=new jt(O,i);ee.position.set(...U),ee.castShadow=!0,this.add(ee)});const j=new de(.4,.2,.1),q=new jt(j,r);q.position.set(.6,.6,2),this.add(q);const Y=new jt(j,r);Y.position.set(-.6,.6,2),this.add(Y);const K=new de(.4,.2,.1);this.tailLightMat=new Qe({color:16711680,emissive:5570560,emissiveIntensity:.5});const it=new jt(K,this.tailLightMat);it.position.set(.6,.6,-2),this.add(it);const ot=new jt(K,this.tailLightMat);ot.position.set(-.6,.6,-2),this.add(ot),this.brakeLights=[it,ot],this.indicatorMat=new fn({color:16776960}),this.indicators={left:[],right:[]},this.indicatorState="OFF",this.indicatorTimer=0,this.indicatorBlinkRate=.5;const G=new de(.15,.15,.05),$=new jt(G,this.indicatorMat);$.position.set(.9,.6,1.95),$.visible=!1,this.add($),this.indicators.left.push($);const ht=new jt(G,this.indicatorMat);ht.position.set(-.9,.6,1.95),ht.visible=!1,this.add(ht),this.indicators.right.push(ht);const xt=new jt(G,this.indicatorMat);xt.position.set(.9,.6,-1.95),xt.visible=!1,this.add(xt),this.indicators.left.push(xt);const _t=new jt(G,this.indicatorMat);_t.position.set(-.9,.6,-1.95),_t.visible=!1,this.add(_t),this.indicators.right.push(_t);const It=new ki(.6,.2),Ut=new fn({color:16777215,side:en}),wt=new jt(It,Ut);wt.position.set(0,.4,2.01),this.add(wt);const kt=new jt(It,Ut);kt.position.set(0,.4,-2.01),kt.rotation.y=Math.PI,this.add(kt)}update(t,e){if(this.isStopped||this.isBlocked){this.updateIndicators(t);return}this.path.length>0||this.targetNode?this.followPath(t):(this.moveForward(t),this.wrapPosition()),this.updateIndicators(t)}setPath(t){this.path=t,this.path.length>0&&(this.targetNode=this.path.shift())}followPath(t){if(!this.targetNode)return;if(this.isTurning){this.handleTurn(t);return}const e=this.targetNode.x,n=this.targetNode.z,i=e-this.position.x,r=n-this.position.z,a=Math.sqrt(i*i+r*r),o=yt.city.roadWidth/2;if(a<o)if(this.path.length>0){const c=this.path.shift(),l=this.direction,h=this.getDirectionTo(c);l!==h?this.initiateTurn(h,c):this.targetNode=c}else this.onDestinationReached();else this.moveForward(t)}getDirectionTo(t){const e=t.x-this.position.x,n=t.z-this.position.z;return Math.abs(e)>Math.abs(n)?e>0?At.EAST:At.WEST:n>0?At.SOUTH:At.NORTH}initiateTurn(t,e){switch(this.isTurning=!0,this.turnProgress=0,this.startRotation=this.rotation.y,this.targetNode=e,t){case At.NORTH:this.targetRotation=ie.NORTH;break;case At.SOUTH:this.targetRotation=ie.SOUTH;break;case At.EAST:this.targetRotation=ie.EAST;break;case At.WEST:this.targetRotation=ie.WEST;break}let n=this.targetRotation-this.startRotation;n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),this.targetRotation=this.startRotation+n,this.turnStartPos.copy(this.position);const i=this.getTurnDirection(this.direction,t),r=i==="LEFT"?5.625:1.875,a=e.x,o=e.z,c=i==="LEFT"?yt.city.roadWidth/2+4:yt.city.roadWidth/2-1;this.turnEndPos.set(a,0,o),t===At.NORTH?(this.turnEndPos.z-=c,this.turnEndPos.x+=r):t===At.SOUTH?(this.turnEndPos.z+=c,this.turnEndPos.x-=r):t===At.EAST?(this.turnEndPos.x+=c,this.turnEndPos.z+=r):t===At.WEST&&(this.turnEndPos.x-=c,this.turnEndPos.z-=r);let l=0;this.direction===At.NORTH||this.direction===At.SOUTH?l=Math.abs(this.turnStartPos.z-o):l=Math.abs(this.turnStartPos.x-a);const d=l*(i==="LEFT"?.75:.4),u=this.getForwardVector();this.turnControlPos1.copy(this.turnStartPos).add(u.multiplyScalar(d));const p=new L(0,0,1);t===At.NORTH&&p.set(0,0,-1),t===At.SOUTH&&p.set(0,0,1),t===At.EAST&&p.set(1,0,0),t===At.WEST&&p.set(-1,0,0),this.turnControlPos2.copy(this.turnEndPos).sub(p.multiplyScalar(d));const g=this.turnStartPos.distanceTo(this.turnEndPos)*1.5;this.turnDuration=g/this.speed,this.setTurnSignal(i),this.direction=t,console.log(`Car turning ${i} towards (${e.x.toFixed(1)}, ${e.z.toFixed(1)})`)}getTurnDirection(t,e){return t===At.NORTH?e===At.EAST?"RIGHT":"LEFT":t===At.SOUTH?e===At.WEST?"RIGHT":"LEFT":t===At.EAST?e===At.SOUTH?"RIGHT":"LEFT":t===At.WEST?e===At.NORTH?"RIGHT":"LEFT":"STRAIGHT"}handleTurn(t){if(this.turnProgress+=t/this.turnDuration,this.turnProgress>=1)this.turnProgress=1,this.isTurning=!1,this.rotation.y=this.targetRotation,this.position.copy(this.turnEndPos),this.setTurnSignal("OFF");else{const e=this.turnProgress,n=1-e,i=e*e,r=n*n,a=r*n,o=i*e,c=this.turnStartPos,l=this.turnControlPos1,h=this.turnControlPos2,d=this.turnEndPos;this.position.x=a*c.x+3*r*e*l.x+3*n*i*h.x+o*d.x,this.position.z=a*c.z+3*r*e*l.z+3*n*i*h.z+o*d.z;const u=3*r*(l.x-c.x)+6*n*e*(h.x-l.x)+3*i*(d.x-h.x),p=3*r*(l.z-c.z)+6*n*e*(h.z-l.z)+3*i*(d.z-h.z);this.rotation.y=Math.atan2(u,p)}}onDestinationReached(){console.log("Car reached destination. Picking new path..."),this.onReachDestination?this.onReachDestination(this):(this.stop(),this.active=!1)}stop(){if(this.isStopped)return;this.isStopped=!0,this.setBrakeLights(!0);const t=Math.random();t<.3?this.setTurnSignal("LEFT"):t<.6?this.setTurnSignal("RIGHT"):this.setTurnSignal("OFF")}resume(){this.isStopped&&(this.isStopped=!1,this.setBrakeLights(!1),this.setTurnSignal("OFF"))}setBlocked(t){this.isBlocked=t,t?this.setBrakeLights(!0):this.isStopped||this.setBrakeLights(!1)}setBrakeLights(t){this.tailLightMat&&(this.tailLightMat.emissive.setHex(t?16711680:5570560),this.tailLightMat.emissiveIntensity=t?2:.5)}setTurnSignal(t){this.indicatorState=t,t==="OFF"&&(this.indicators.left.forEach(e=>e.visible=!1),this.indicators.right.forEach(e=>e.visible=!1))}updateIndicators(t){if(this.indicatorState!=="OFF"&&(this.indicatorTimer+=t,this.indicatorTimer>=this.indicatorBlinkRate)){this.indicatorTimer=0;const e=!this.indicators[this.indicatorState.toLowerCase()][0].visible;this.indicatorState==="LEFT"?(this.indicators.left.forEach(n=>n.visible=e),this.indicators.right.forEach(n=>n.visible=!1)):this.indicatorState==="RIGHT"&&(this.indicators.right.forEach(n=>n.visible=e),this.indicators.left.forEach(n=>n.visible=!1))}}getForwardVector(){const t=new L(0,0,1);return t.applyAxisAngle(new L(0,1,0),this.rotation.y),t}}class Bp extends Vi{constructor(t=0,e=0,n=0){super(Ln.PEDESTRIAN);const i=yt.pedestrian;this.speed=Bi(i.minSpeed,i.maxSpeed),this.sidewalkOffset=i.sidewalkOffset,this.direction=this.getDirectionFromRotation(n);const r=ct(yt.materials.skin.color),a=ct(Ma()),o=ct(Ma());this.createHead(r),this.createTorso(a),this.createArms(a),this.createLegs(o),this.position.set(t,0,e),this.rotation.y=n,this.enableShadows(!0,!1)}getDirectionFromRotation(t){let e=t%(Math.PI*2);return e<0&&(e+=Math.PI*2),Math.abs(e-ie.NORTH)<.1?At.NORTH:Math.abs(e-ie.SOUTH)<.1?At.SOUTH:Math.abs(e-ie.EAST)<.1||Math.abs(e-(ie.EAST+Math.PI*2))<.1?At.EAST:Math.abs(e-ie.WEST)<.1?At.WEST:At.NORTH}createHead(t){const e=yt.pedestrian,n=lt(e.headSize,e.headSize,e.headSize);this.head=W(n,t),this.head.position.y=1.65,this.add(this.head)}createTorso(t){const e=yt.pedestrian,n=lt(e.torsoWidth,e.torsoHeight,e.torsoDepth);this.torso=W(n,t),this.torso.position.y=1.25,this.add(this.torso)}createArms(t){const e=yt.pedestrian,n=lt(e.armWidth,e.armLength,e.armWidth);this.leftArm=new We;const i=W(n,t);i.position.y=-.2,this.leftArm.add(i),this.leftArm.position.set(.23,1.45,0),this.add(this.leftArm),this.rightArm=new We;const r=W(n,t);r.position.y=-.2,this.rightArm.add(r),this.rightArm.position.set(-.23,1.45,0),this.add(this.rightArm)}createLegs(t){const e=yt.pedestrian,n=lt(e.legWidth,e.legLength,e.legWidth);this.leftLeg=new We;const i=W(n,t);i.position.y=-.25,this.leftLeg.add(i),this.leftLeg.position.set(.1,1,0),this.add(this.leftLeg),this.rightLeg=new We;const r=W(n,t);r.position.y=-.25,this.rightLeg.add(r),this.rightLeg.position.set(-.1,1,0),this.add(this.rightLeg)}update(t,e){this.moveForward(t),this.checkIntersection(),this.animateWalking(e),this.wrapPosition()}checkIntersection(){const t=yt.city.cellSize*3,e=this.sidewalkOffset,n=Math.round(this.position.x/t)*t,i=Math.round(this.position.z/t)*t,r=Math.abs(this.position.x-n),a=Math.abs(r-e)<.5,o=Math.abs(this.position.z-i),c=Math.abs(o-e)<.5;if(a&&c){if(this.justTurned)return;this.decideTurn(n,i,e),this.justTurned=!0;const l=n+(this.position.x>n?e:-e),h=i+(this.position.z>i?e:-e);this.direction===At.NORTH||this.direction===At.SOUTH?this.position.x=l:this.position.z=h}else this.justTurned=!1}decideTurn(t,e,n){const i=Math.random();if(i<.5)return;const r=i<.75;this.direction===At.NORTH?this.setDirection(r?At.WEST:At.EAST):this.direction===At.SOUTH?this.setDirection(r?At.EAST:At.WEST):this.direction===At.EAST?this.setDirection(r?At.NORTH:At.SOUTH):this.direction===At.WEST&&this.setDirection(r?At.SOUTH:At.NORTH)}setDirection(t){switch(this.direction=t,t){case At.NORTH:this.rotation.y=ie.NORTH;break;case At.SOUTH:this.rotation.y=ie.SOUTH;break;case At.EAST:this.rotation.y=ie.EAST;break;case At.WEST:this.rotation.y=ie.WEST;break}}animateWalking(t){const e=yt.pedestrian.animationSpeed;this.leftArm.rotation.x=Math.sin(t*e)*.5,this.rightArm.rotation.x=Math.cos(t*e)*.5,this.leftLeg.rotation.x=Math.cos(t*e)*.5,this.rightLeg.rotation.x=Math.sin(t*e)*.5}}class Hp{constructor(t){this.gridSize=t}findPath(t,e){const n=[t],i=new Map,r=new Map;r.set(this.key(t),0);const a=new Map;for(a.set(this.key(t),this.heuristic(t,e));n.length>0;){let o=this.getLowestFScore(n,a);if(o.x===e.x&&o.z===e.z)return this.reconstructPath(i,o);n.splice(n.indexOf(o),1);const c=this.getNeighbors(o);for(const l of c){const h=r.get(this.key(o))+this.dist(o,l),d=this.key(l);(!r.has(d)||h<r.get(d))&&(i.set(d,o),r.set(d,h),a.set(d,h+this.heuristic(l,e)),this.isInSet(n,l)||n.push(l))}}return null}getNeighbors(t){const e=[],n=[{x:0,z:-1},{x:0,z:1},{x:-1,z:0},{x:1,z:0}];for(const i of n){const r=t.x+i.x,a=t.z+i.z;if(r>=0&&r<this.gridSize&&a>=0&&a<this.gridSize){const o=r%3===0,c=a%3===0;(o||c)&&e.push({x:r,z:a})}}return e}heuristic(t,e){return Math.abs(t.x-e.x)+Math.abs(t.z-e.z)}dist(t,e){return Math.abs(t.x-e.x)+Math.abs(t.z-e.z)}reconstructPath(t,e){const n=[e];let i=this.key(e);for(;t.has(i);)e=t.get(i),i=this.key(e),n.unshift(e);return n}getLowestFScore(t,e){let n=t[0],i=e.get(this.key(n))||1/0;for(let r=1;r<t.length;r++){const a=e.get(this.key(t[r]))||1/0;a<i&&(n=t[r],i=a)}return n}isInSet(t,e){return t.some(n=>n.x===e.x&&n.z===e.z)}key(t){return`${t.x},${t.z}`}simplifyPath(t){if(!t||t.length<3)return t;const e=[t[0]];let n={x:t[1].x-t[0].x,z:t[1].z-t[0].z};for(let i=1;i<t.length-1;i++){const r=t[i],a=t[i+1],o={x:a.x-r.x,z:a.z-r.z};(o.x!==n.x||o.z!==n.z)&&(e.push(r),n=o)}return e.push(t[t.length-1]),e}}class zp{constructor(t,e,n){this.entityManager=t,this.cityGroup=e,this.worldGrid=n,this.buildings=[],this.pathfinder=null}registerBuilding(t){this.buildings.push({x:t.position.x,z:t.position.z,size:yt.building.baseSizeMax})}isOverlappingBuilding(t,e,n=2){for(const i of this.buildings){const r=i.size/2+n;if(Math.abs(t-i.x)<r&&Math.abs(e-i.z)<r)return!0}return!1}spawnCars(t,e){const i=yt.car.spawnCount;this.pathfinder=new Hp(t.length);for(let r=0;r<i;r++){const a=this.createCar(t,e);a&&(this.entityManager.add(a),this.cityGroup.add(a))}}createCar(t,e){const n=[];for(let i=0;i<t.length;i++)for(let r=0;r<t[i].length;r++)if(t[i][r]==="ROAD"){let a="BOTH";i%3===0&&r%3!==0?a="VERTICAL":i%3!==0&&r%3===0&&(a="HORIZONTAL"),n.push({x:i,z:r,orientation:a})}if(n.length===0)return null;for(let i=0;i<50;i++){const r=n[yi(0,n.length-1)],a=(r.x-t.length/2)*e,o=(r.z-t[0].length/2)*e;if(!this.isOverlappingBuilding(a,o,3)&&r.orientation!=="BOTH")return this.createCarAtPosition(a,o,r.orientation)}return null}createCarAtPosition(t,e,n){let i=ie.NORTH,r=0;const o=Math.random()<.5?5.625:1.875;return n==="HORIZONTAL"?(t>0?(i=ie.WEST,r=o):(i=ie.EAST,r=-o),new Ea(new L(t,0,e+r),i)):n==="VERTICAL"?(e>0?(i=ie.SOUTH,r=o):(i=ie.NORTH,r=-o),new Ea(new L(t+r,0,e),i)):null}assignRandomPath(t,e,n,i){const r=[];for(let c=0;c<n.length;c+=3)for(let l=0;l<n[c].length;l+=3)(c!==e.x||l!==e.z)&&r.push({x:c,z:l});if(r.length===0)return;const a=r[yi(0,r.length-1)],o=this.pathfinder.findPath(e,a);if(o){const c=this.pathfinder.simplifyPath(o),l=c.map(h=>({x:(h.x-n.length/2)*i,z:(h.z-n[0].length/2)*i}));if(l.length>0&&l.shift(),t.setPath(l),c.length>1){const h=c[0],d=c[1],u=t.direction;t.getDirectionTo(d);let p="STRAIGHT";const g=d.x-h.x,_=d.z-h.z;let m=null;Math.abs(g)>Math.abs(_)?m=g>0?"EAST":"WEST":m=_>0?"SOUTH":"NORTH",u!==m&&(p=t.getTurnDirection(u,m));const f=1.875,T=5.625;let v=null;if(p==="LEFT"&&(v=f),p==="RIGHT"&&(v=T),v!==null){if(u==="NORTH"||u==="SOUTH"){const A=u==="SOUTH"?1:-1;t.position.x=(h.x-n.length/2)*i+A*v}else{const A=u==="WEST"?1:-1;t.position.z=(h.z-n[0].length/2)*i+A*v}console.log(`Adjusted lane for ${p} turn: Offset ${v}`)}}console.log(`Assigned path with ${l.length} waypoints to car at (${e.x}, ${e.z}) -> (${a.x}, ${a.z})`)}}spawnPedestrians(){const t=yt.pedestrian,e=t.spawnCount,n=t.sidewalkOffset,i=yt.city.cellSize*3,r=[{x:n,z:0,rotation:ie.SOUTH},{x:-n,z:0,rotation:ie.NORTH},{x:0,z:n,rotation:ie.WEST},{x:0,z:-n,rotation:ie.EAST}];let a=0,o=0;const c=e*10;for(;a<e&&o<c;){o++;const l=r[a%r.length],h=i*2,d=(Math.random()-.5)*h;let u=l.x,p=l.z;if(Math.abs(l.x)>Math.abs(l.z)?p+=d:u+=d,this.isOverlappingBuilding(u,p,4))continue;const g=new Bp(u,p,l.rotation);this.entityManager.add(g),this.cityGroup.add(g),a++}a<e&&console.warn(`⚠️  Only spawned ${a}/${e} pedestrians due to space constraints`)}}class Gp{constructor(t){this.entityManager=t,this.stopDistance=8,this.pedestrianStopDistance=10,this.trafficControllers=[],this.intersectionDetectionRange=20,this.stopLineOffset=10,this.stopThreshold=3}setTrafficControllers(t){this.trafficControllers=t}update(t){const e=this.entityManager.getByType(Ln.CAR),n=this.entityManager.getByType(Ln.PEDESTRIAN);e.forEach(i=>{this.checkCollisions(i,e,n)})}checkCollisions(t,e,n){let i=!1;if(this.checkTrafficLights(t)&&(i=!0),!i){for(const r of e)if(t!==r&&this.isObstacleInFront(t,r,this.stopDistance)){i=!0;break}}if(!i){for(const r of n)if(this.isObstacleInFront(t,r,this.pedestrianStopDistance)){i=!0;break}}i?t.stop():t.resume()}checkTrafficLights(t){if(!this.trafficControllers||this.trafficControllers.length===0)return!1;const e=t.position,n=t.direction,i=t.getForwardVector();for(const r of this.trafficControllers){const a=r.intersection;if(!a||!a.position)continue;const o=a.position,c=new L;if(c.subVectors(o,e),c.length()>this.intersectionDetectionRange||(c.normalize(),i.dot(c)<.7))continue;const d=this.findControllingLight(r,n);if(!d)continue;const u=this.getLightState(d);if(u===Jt.RED||u===Jt.YELLOW){const p=this.calculateStopLineDistance(e,o,n);if(p>0&&p<this.stopThreshold)return!0}}return!1}findControllingLight(t,e){const n=t.lights;switch(e){case"NORTH":return n.north;case"SOUTH":return n.south;case"EAST":return n.east;case"WEST":return n.west;default:return null}}getLightState(t){if(!t||!t.primaryMats)return Jt.RED;const e=t.primaryMats.green[0];if(e&&e.color.getHex()!==65280){const n=t.primaryMats.red[0];if(n&&n.color.getHex()===16711680)return Jt.RED;const i=t.primaryMats.yellow[0];return i&&i.color.getHex()===16776960?Jt.YELLOW:Jt.RED}return Jt.GREEN}calculateStopLineDistance(t,e,n){switch(n){case"NORTH":return e.z-this.stopLineOffset-t.z;case"SOUTH":return t.z-(e.z+this.stopLineOffset);case"EAST":return e.x-this.stopLineOffset-t.x;case"WEST":return t.x-(e.x+this.stopLineOffset);default:return 999}}isObstacleInFront(t,e,n){const i=t.getForwardVector(),r=new L;return r.subVectors(e.position,t.position),r.length()>n?!1:(r.normalize(),i.dot(r)>.9)}}class kp{constructor(t){this.entityManager=t,this.minDistance=4}update(t){const e=this.entityManager.getByType("CAR");for(let n=0;n<e.length;n++){const i=e[n];if(!i.active)continue;let r=!1;for(let a=0;a<e.length;a++){if(n===a)continue;const o=e[a];if(o.active&&this.isCarInFront(i,o)){r=!0;break}}r?i.stop():i.setBlocked?i.setBlocked(!1):i.resume(),r&&i.setBlocked&&i.setBlocked(!0)}}isCarInFront(t,e){const n=new L().subVectors(e.position,t.position);return n.length()>this.minDistance?!1:t.getForwardVector().dot(n.normalize())>.8}}class Vp extends We{constructor(t=yt.city.gridSize){super(),this.size=t,this.worldGrid=new Ap(t,yt.city.cellSize),this.entityManager=new wp,this.spawnManager=new zp(this.entityManager,this,this.worldGrid),this.generator=new Fp(this,this.entityManager,this.worldGrid,this.spawnManager),this.trafficSystem=new Gp(this.entityManager),this.collisionSystem=new kp(this.entityManager),this.generateCity()}generateCity(){const t=this.generator.generateCity(this.size);this.trafficSystem.setTrafficControllers(this.generator.getTrafficControllers());const e=yt.city.cellSize;this.spawnManager.spawnCars(t,e),this.spawnManager.spawnPedestrians()}update(t,e){this.entityManager.update(t,e),this.trafficSystem.update(t),this.collisionSystem.update(t)}getEntityManager(){return this.entityManager}getEntitiesByType(t){return this.entityManager.getByType(t)}getEntityCount(){return this.entityManager.getCount()}getIntersectionData(){return this.generator.getIntersectionData()}}const Wi=new _p;Wi.background=new Zt(yt.scene.backgroundColor);const gn=new ke(75,window.innerWidth/window.innerHeight,.1,1e3);gn.position.set(40,20,20);gn.lookAt(10,10,0);const Kn=new ec({antialias:!0,powerPreference:"high-performance"});Kn.setSize(window.innerWidth,window.innerHeight);Kn.setPixelRatio(Math.min(window.devicePixelRatio,2));Kn.shadowMap.enabled=yt.simulation.enableShadows;document.body.appendChild(Kn.domElement);const $n=new bp(gn,Kn.domElement);$n.enableDamping=!0;$n.dampingFactor=.05;$n.maxDistance=150;$n.minDistance=10;const Ta=new Tp,dr=new Ft;let pn=null,Hi=!1;const Wp=new Sp(yt.lighting.ambient.color,yt.lighting.ambient.intensity);Wi.add(Wp);const Xi=new Mp(yt.lighting.directional.color,yt.lighting.directional.intensity);Xi.position.set(yt.lighting.directional.position.x,yt.lighting.directional.position.y,yt.lighting.directional.position.z);Xi.castShadow=yt.simulation.enableShadows;Xi.shadow.mapSize.width=yt.lighting.directional.shadowMapSize;Xi.shadow.mapSize.height=yt.lighting.directional.shadowMapSize;Wi.add(Xi);const Or=new Vp(yt.city.gridSize);Wi.add(Or);const ya=new Ep;function ic(){requestAnimationFrame(ic);const s=ya.getDelta(),t=ya.getElapsedTime();Or.update(s,t),Hi&&pn&&pn.active?Xp():$n.update(),Kn.render(Wi,gn)}ic();function Xp(){if(!pn||!pn.active){Fr();return}const s=pn.position.clone(),t=pn.getForwardVector(),e=4,n=t.clone().multiplyScalar(-8);n.y=e;const i=s.clone().add(n);gn.position.lerp(i,.1);const r=s.clone().add(t.multiplyScalar(5));r.y+=1,gn.lookAt(r)}function Fr(){Hi=!1,pn=null,$n.enabled=!0}function qp(s){dr.x=s.clientX/window.innerWidth*2-1,dr.y=-(s.clientY/window.innerHeight)*2+1,Ta.setFromCamera(dr,gn);const t=Or.entityManager.getByType("CAR"),e=t.filter(i=>i.active).map(i=>i.children).flat(),n=Ta.intersectObjects(e,!0);if(n.length>0){let i=n[0].object;for(;i.parent&&i.parent.type!=="Scene"&&!i.parent.isCity;)if(i=i.parent,i.type==="CAR"||t.includes(i)){pn=i,Hi=!0,$n.enabled=!1,console.log("Following car:",pn);return}}else Hi&&Fr()}function Yp(s){s.key==="Escape"&&Hi&&(Fr(),console.log("Exited follow mode"))}window.addEventListener("click",qp);window.addEventListener("keydown",Yp);window.addEventListener("resize",()=>{gn.aspect=window.innerWidth/window.innerHeight,gn.updateProjectionMatrix(),Kn.setSize(window.innerWidth,window.innerHeight)});
