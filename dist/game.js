(()=>{var gc="169";var zh=0,$c=1,Hh=2;var ih=1,_c=2,vn=3,kn=0,Ae=1,Ve=2,On=0,Di=1,Zc=2,Jc=3,Kc=4,Vh=5,ei=100,Gh=101,Wh=102,Xh=103,qh=104,Yh=200,$h=201,Zh=202,Jh=203,ta=204,ea=205,Kh=206,Qh=207,jh=208,tu=209,eu=210,nu=211,iu=212,su=213,ru=214,na=0,ia=1,sa=2,Bi=3,ra=4,oa=5,aa=6,ca=7,sh=0,ou=1,au=2,Bn=0,cu=1,lu=2,hu=3,Ss=4,uu=5,du=6,fu=7;var rh=300,ki=301,zi=302,la=303,ha=304,qr=306,fs=1e3,ii=1001,ua=1002,Te=1003,pu=1004;var Os=1005;var Ge=1006,Mo=1007;var si=1008;var Sn=1009,oh=1010,ah=1011,ps=1012,xc=1013,ri=1014,cn=1015,bs=1016,vc=1017,yc=1018,Hi=1020,ch=35902,lh=1021,hh=1022,sn=1023,uh=1024,dh=1025,Ui=1026,Vi=1027,Mc=1028,Sc=1029,fh=1030,bc=1031;var Ec=1033,fr=33776,pr=33777,mr=33778,gr=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,xa=37496,va=37808,ya=37809,Ma=37810,Sa=37811,ba=37812,Ea=37813,wa=37814,Ta=37815,Aa=37816,Ra=37817,Ca=37818,Pa=37819,Ia=37820,La=37821,_r=36492,Da=36494,Ua=36495,ph=36283,Na=36284,Fa=36285,Oa=36286;var vr=2300,Ba=2301,So=2302,Qc=2400,jc=2401,tl=2402;var mu=3200,gu=3201;var mh=0,_u=1,Nn="",me="srgb",Gn="srgb-linear",wc="display-p3",Yr="display-p3-linear",yr="linear",ae="srgb",Mr="rec709",Sr="p3";var gi=7680;var el=519,xu=512,vu=513,yu=514,gh=515,Mu=516,Su=517,bu=518,Eu=519,nl=35044,_h=35048;var il="300 es",Mn=2e3,br=2001,zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=1234567,Ni=Math.PI/180,ms=180/Math.PI;function Ji(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Tc(s,t){return(s%t+t)%t}function wu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Tu(s,t,e){return s!==t?(e-s)/(t-s):0}function us(s,t,e){return(1-e)*s+e*t}function Au(s,t,e,n){return us(s,t,1-Math.exp(-e*n))}function Ru(s,t=1){return t-Math.abs(Tc(s,t*2)-t)}function Cu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Pu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Iu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Lu(s,t){return s+Math.random()*(t-s)}function Du(s){return s*(.5-Math.random())}function Uu(s){s!==void 0&&(sl=s);let t=sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nu(s){return s*Ni}function Fu(s){return s*ms}function Ou(s){return(s&s-1)===0&&s!==0}function Bu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ku(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zu(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ci={DEG2RAD:Ni,RAD2DEG:ms,generateUUID:Ji,clamp:Pe,euclideanModulo:Tc,mapLinear:wu,inverseLerp:Tu,lerp:us,damp:Au,pingpong:Ru,smoothstep:Cu,smootherstep:Pu,randInt:Iu,randFloat:Lu,randFloatSpread:Du,seededRandom:Uu,degToRad:Nu,radToDeg:Fu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:ku,setQuaternionFromProperEuler:zu,normalize:Re,denormalize:Ii},Yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],S=i[1],y=i[4],E=i[7],L=i[2],R=i[5],T=i[8];return r[0]=o*_+a*S+c*L,r[3]=o*m+a*y+c*R,r[6]=o*f+a*E+c*T,r[1]=l*_+h*S+d*L,r[4]=l*m+h*y+d*R,r[7]=l*f+h*E+d*T,r[2]=u*_+p*S+g*L,r[5]=u*m+p*y+g*R,r[8]=u*f+p*E+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bo.makeScale(t,e)),this}rotate(t){return this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bo=new Ut;function xh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hu(){let s=Er("canvas");return s.style.display="block",s}var rl={};function xr(s){s in rl||(rl[s]=!0,console.warn(s))}function Vu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gu(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wu(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ol=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),al=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[Gn]:{transfer:yr,primaries:Mr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[me]:{transfer:ae,primaries:Mr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Yr]:{transfer:yr,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(al),fromReference:s=>s.applyMatrix3(ol)},[wc]:{transfer:ae,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(al),fromReference:s=>s.applyMatrix3(ol).convertLinearToSRGB()}},Xu=new Set([Gn,Yr]),Qt={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Xu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=es[t].toReference,i=es[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return es[s].primaries},getTransfer:function(s){return s===Nn?yr:es[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(es[t].luminanceCoefficients)}};function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var _i,ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Er("canvas")),_i.width=t.width,_i.height=t.height;let n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qu=0,wr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(wo(i[o].image)):r.push(wo(i[o]))}else r=wo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yu=0,Fe=class s extends zn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ii,i=ii,r=Ge,o=si,a=sn,c=Sn,l=s.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Ji(),this.name="",this.source=new wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=rh;Fe.DEFAULT_ANISOTROPY=1;var ee=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,E=(p+1)/2,L=(f+1)/2,R=(h+u)/4,T=(d+_)/4,U=(g+m)/4;return y>E&&y>L?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=R/n,r=T/n):E>L?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=R/i,r=U/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=U/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-a,f=c*u+l*p+h*g+d*_,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let L=Math.sqrt(y),R=Math.atan2(L,f*S);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}let E=a*S;if(c=c*m+u*E,l=l*m+p*E,h=h*m+g*E,d=d*m+_*E,m===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-a*p,t[e+2]=l*g+h*p+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new A,cl=new Hn,En=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),ks.subVectors(this.max,ns),xi.subVectors(t.a,ns),vi.subVectors(t.b,ns),yi.subVectors(t.c,ns),Cn.subVectors(vi,xi),Pn.subVectors(yi,vi),$n.subVectors(xi,yi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-$n.z,$n.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,$n.z,0,-$n.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-$n.y,$n.x,0];return!Ao(e,xi,vi,yi,ks)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,xi,vi,yi,ks))?!1:(zs.crossVectors(Cn,Pn),e=[zs.x,zs.y,zs.z],Ao(e,xi,vi,yi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pn=[new A,new A,new A,new A,new A,new A,new A,new A],tn=new A,Bs=new En,xi=new A,vi=new A,yi=new A,Cn=new A,Pn=new A,$n=new A,ns=new A,ks=new A,zs=new A,Zn=new A;function Ao(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zn.fromArray(s,r);let a=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $u=new En,is=new A,Ro=new A,wn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);let e=is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Ro)),this.expandByPoint(is.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new A,Co=new A,Hs=new A,In=new A,Po=new A,Vs=new A,Io=new A,gs=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Co.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Co);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Hs),a=In.dot(this.direction),c=-In.dot(Hs),l=In.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Co).addScaledVector(Hs,u),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),i=mn.dot(mn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,r){Po.subVectors(e,t),Vs.subVectors(n,t),Io.crossVectors(Po,Vs);let o=this.direction.dot(Io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);let c=a*this.direction.dot(Vs.crossVectors(In,Vs));if(c<0)return null;let l=a*this.direction.dot(Po.cross(In));if(l<0||c+l>o)return null;let h=-a*In.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class s{constructor(t,e,n,i,r,o,a,c,l,h,d,u,p,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,p,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,Ju)}lookAt(t,e,n){let i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Ln.crossVectors(n,ze),Ln.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Ln.crossVectors(n,ze)),Ln.normalize(),Gs.crossVectors(ze,Ln),i[0]=Ln.x,i[4]=Gs.x,i[8]=ze.x,i[1]=Ln.y,i[5]=Gs.y,i[9]=ze.y,i[2]=Ln.z,i[6]=Gs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],y=n[7],E=n[11],L=n[15],R=i[0],T=i[4],U=i[8],q=i[12],x=i[1],b=i[5],z=i[9],k=i[13],H=i[2],V=i[6],N=i[10],J=i[14],W=i[3],lt=i[7],st=i[11],mt=i[15];return r[0]=o*R+a*x+c*H+l*W,r[4]=o*T+a*b+c*V+l*lt,r[8]=o*U+a*z+c*N+l*st,r[12]=o*q+a*k+c*J+l*mt,r[1]=h*R+d*x+u*H+p*W,r[5]=h*T+d*b+u*V+p*lt,r[9]=h*U+d*z+u*N+p*st,r[13]=h*q+d*k+u*J+p*mt,r[2]=g*R+_*x+m*H+f*W,r[6]=g*T+_*b+m*V+f*lt,r[10]=g*U+_*z+m*N+f*st,r[14]=g*q+_*k+m*J+f*mt,r[3]=S*R+y*x+E*H+L*W,r[7]=S*T+y*b+E*V+L*lt,r[11]=S*U+y*z+E*N+L*st,r[15]=S*q+y*k+E*J+L*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*p-n*c*p)+_*(+e*c*p-e*l*u+r*o*u-i*o*p+i*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=d*m*l-_*u*l+_*c*p-a*m*p-d*c*f+a*u*f,y=g*u*l-h*m*l-g*c*p+o*m*p+h*c*f-o*u*f,E=h*_*l-g*d*l+g*a*p-o*_*p-h*a*f+o*d*f,L=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,R=e*S+n*y+i*E+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=S*T,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*T,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*T,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*p-n*c*p)*T,t[4]=y*T,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*T,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*f-e*c*f)*T,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*p+e*c*p)*T,t[8]=E*T,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*T,t[12]=L*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,S=c*l,y=c*h,E=c*d,L=n.x,R=n.y,T=n.z;return i[0]=(1-(_+f))*L,i[1]=(p+E)*L,i[2]=(g-y)*L,i[3]=0,i[4]=(p-E)*R,i[5]=(1-(u+f))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(g+y)*T,i[9]=(m-S)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Mi.set(i[0],i[1],i[2]).length(),o=Mi.set(i[4],i[5],i[6]).length(),a=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);let l=1/r,h=1/o,d=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Mn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,g;if(a===Mn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Mn){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,p=(n+i)*h,g,_;if(a===Mn)g=(o+r)*d,_=-2*d;else if(a===br)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mi=new A,en=new ne,Zu=new A(0,0,0),Ju=new A(1,1,1),Ln=new A,Gs=new A,ze=new A,ll=new ne,hl=new Hn,ln=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ku=0,ul=new A,Si=new Hn,gn=new ne,Ws=new A,ss=new A,Qu=new A,ju=new Hn,dl=new A(1,0,0),fl=new A(0,1,0),pl=new A(0,0,1),ml={type:"added"},td={type:"removed"},bi={type:"childadded",child:null},Lo={type:"childremoved",child:null},le=class s extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new ln,n=new Hn,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ut}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ss,Ws,this.up):gn.lookAt(Ws,ss,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(gn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ml),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ml),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};le.DEFAULT_UP=new A(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=new A,_n=new A,Do=new A,xn=new A,Ei=new A,wi=new A,gl=new A,Uo=new A,No=new A,Fo=new A,Oo=new ee,Bo=new ee,ko=new ee,Fn=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){nn.subVectors(i,e),_n.subVectors(n,e),Do.subVectors(t,e);let o=nn.dot(nn),a=nn.dot(_n),c=nn.dot(Do),l=_n.dot(_n),h=_n.dot(Do),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Oo.setScalar(0),Bo.setScalar(0),ko.setScalar(0),Oo.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),ko.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Oo,r.x),o.addScaledVector(Bo,r.y),o.addScaledVector(ko,r.z),o}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),_n.subVectors(t,e),nn.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),nn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ei.subVectors(i,n),wi.subVectors(r,n),Uo.subVectors(t,n);let c=Ei.dot(Uo),l=wi.dot(Uo);if(c<=0&&l<=0)return e.copy(n);No.subVectors(t,i);let h=Ei.dot(No),d=wi.dot(No);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ei,o);Fo.subVectors(t,r);let p=Ei.dot(Fo),g=wi.dot(Fo);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(wi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return gl.subVectors(r,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(gl,a);let f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(Ei,o).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function zo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Tc(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zo(o,r,t+1/3),this.g=zo(o,r,t),this.b=zo(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Qt.fromWorkingColorSpace(we.copy(this),t),Math.round(Pe(we.r*255,0,255))*65536+Math.round(Pe(we.g*255,0,255))*256+Math.round(Pe(we.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(we.copy(this),e);let n=we.r,i=we.g,r=we.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=me){Qt.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,i=we.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Xs);let n=us(Dn.h,Xs.h,e),i=us(Dn.s,Xs.s,e),r=us(Dn.l,Xs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new St;St.NAMES=vh;var ed=0,Tn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Di,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==el&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new A,qs=new Yt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),t}};var Rr=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},nd=0,Ze=new ne,Ho=new le,Ti=new A,He=new En,rs=new En,xe=new A,Me=class s extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Cr:Rr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(He.min,rs.min),He.expandByPoint(xe),xe.addVectors(He.max,rs.max),He.expandByPoint(xe)):(He.expandByPoint(rs.min),He.expandByPoint(rs.max))}He.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xe.fromBufferAttribute(a,l),c&&(Ti.fromBufferAttribute(t,l),xe.add(Ti)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new A,c[U]=new A;let l=new A,h=new A,d=new A,u=new Yt,p=new Yt,g=new Yt,_=new A,m=new A;function f(U,q,x){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,q),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,U),p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,x),h.sub(l),d.sub(l),p.sub(u),g.sub(u);let b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),a[U].add(_),a[q].add(_),a[x].add(_),c[U].add(m),c[q].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let U=0,q=S.length;U<q;++U){let x=S[U],b=x.start,z=x.count;for(let k=b,H=b+z;k<H;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new A,E=new A,L=new A,R=new A;function T(U){L.fromBufferAttribute(i,U),R.copy(L);let q=a[U];y.copy(q),y.sub(L.multiplyScalar(L.dot(q))).normalize(),E.crossVectors(R,q);let b=E.dot(c[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,b)}for(let U=0,q=S.length;U<q;++U){let x=S[U],b=x.start,z=x.count;for(let k=b,H=b+z;k<H;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,d=new A;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new Ie(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_l=new ne,Jn=new gs,Ys=new wn,xl=new A,$s=new A,Zs=new A,Js=new A,Vo=new A,Ks=new A,vl=new A,Qs=new A,bt=class extends le{constructor(t=new Me,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Vo.fromBufferAttribute(d,t),o?Ks.addScaledVector(Vo,h):Ks.addScaledVector(Vo.sub(e),h))}e.add(Ks)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Ys.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ys,xl)===null||Jn.origin.distanceToSquared(xl)>(t.far-t.near)**2))&&(_l.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(_l),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,L=y;E<L;E+=3){let R=a.getX(E),T=a.getX(E+1),U=a.getX(E+2);i=js(this,f,t,n,l,h,d,R,T,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=a.getX(m),y=a.getX(m+1),E=a.getX(m+2);i=js(this,o,t,n,l,h,d,S,y,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,L=y;E<L;E+=3){let R=E,T=E+1,U=E+2;i=js(this,f,t,n,l,h,d,R,T,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=m,y=m+1,E=m+2;i=js(this,o,t,n,l,h,d,S,y,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function id(s,t,e,n,i,r,o,a){let c;if(t.side===Ae?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===kn,a),c===null)return null;Qs.copy(a),Qs.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:s}}function js(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,$s),s.getVertexPosition(c,Zs),s.getVertexPosition(l,Js);let h=id(s,t,e,n,$s,Zs,Js,vl);if(h){let d=new A;Fn.getBarycoord(vl,$s,Zs,Js,d),i&&(h.uv=Fn.getInterpolatedAttribute(i,a,c,l,d,new Yt)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,c,l,d,new Yt)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,c,l,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new A,materialIndex:0};Fn.getNormal($s,Zs,Js,u.normal),h.face=u,h.barycoord=d}return h}var Ot=class s extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(_,m,f,S,y,E,L,R,T,U,q){let x=E/T,b=L/U,z=E/2,k=L/2,H=R/2,V=T+1,N=U+1,J=0,W=0,lt=new A;for(let st=0;st<N;st++){let mt=st*b-k;for(let Bt=0;Bt<V;Bt++){let $t=Bt*x-z;lt[_]=$t*S,lt[m]=mt*y,lt[f]=H,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[f]=R>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(Bt/T),d.push(1-st/U),J+=1}}for(let st=0;st<U;st++)for(let mt=0;mt<T;mt++){let Bt=u+mt+V*st,$t=u+mt+V*(st+1),X=u+(mt+1)+V*(st+1),Q=u+(mt+1)+V*st;c.push(Bt,$t,Q),c.push($t,X,Q),W+=6}a.addGroup(p,W,q),p+=W,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){let t={};for(let e=0;e<s.length;e++){let n=Gi(s[e]);for(let i in n)t[i]=n[i]}return t}function sd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var rd={clone:Gi,merge:Ce},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pr=class extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new A,yl=new Yt,Ml=new Yt,ve=class extends Pr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,yl,Ml),e.subVectors(Ml,yl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ai=-90,Ri=1,Va=class extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ve(Ai,Ri,t,e);i.layers=this.layers,this.add(i);let r=new ve(Ai,Ri,t,e);r.layers=this.layers,this.add(r);let o=new ve(Ai,Ri,t,e);o.layers=this.layers,this.add(o);let a=new ve(Ai,Ri,t,e);a.layers=this.layers,this.add(a);let c=new ve(Ai,Ri,t,e);c.layers=this.layers,this.add(c);let l=new ve(Ai,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ir=class extends Fe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ga=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ir(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ot(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:On});r.uniforms.tEquirect.value=e;let o=new bt(i,r),a=e.minFilter;return e.minFilter===si&&(e.minFilter=Ge),new Va(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Go=new A,cd=new A,ld=new Ut,yn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Go.subVectors(n,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ld.getNormalMatrix(t),i=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new wn,tr=new A,_s=class{constructor(t=new yn,e=new yn,n=new yn,i=new yn,r=new yn,o=new yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],S=i[13],y=i[14],E=i[15];if(n[0].setComponents(c-r,u-l,m-p,E-f).normalize(),n[1].setComponents(c+r,u+l,m+p,E+f).normalize(),n[2].setComponents(c+o,u+h,m+g,E+S).normalize(),n[3].setComponents(c-o,u-h,m-g,E-S).normalize(),n[4].setComponents(c-a,u-d,m-_,E-y).normalize(),e===Mn)n[5].setComponents(c+a,u+d,m+_,E+y).normalize();else if(e===br)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(tr.x=i.normal.x>0?t.max.x:t.min.x,tr.y=i.normal.y>0?t.max.y:t.min.y,tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function hd(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Le=class s extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let S=f*u-o;for(let y=0;y<l;y++){let E=y*d-r;g.push(E,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let y=S+l*f,E=S+l*(f+1),L=S+1+l*(f+1),R=S+1+l*f;p.push(y,E,R),p.push(E,L,R)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
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
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`
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
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
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
#endif`,hf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,uf=`
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mf=`#if defined( USE_POINTS_UV )
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
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,op=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
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
}`,Cp=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,Bp=`#define TOON
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
}`,kp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Gp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:ud,alphahash_pars_fragment:dd,alphamap_fragment:fd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:_d,aomap_pars_fragment:xd,batching_pars_vertex:vd,batching_vertex:yd,begin_vertex:Md,beginnormal_vertex:Sd,bsdfs:bd,iridescence_fragment:Ed,bumpmap_pars_fragment:wd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Cd,color_fragment:Pd,color_pars_fragment:Id,color_pars_vertex:Ld,color_vertex:Dd,common:Ud,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:kd,emissivemap_pars_fragment:zd,colorspace_fragment:Hd,colorspace_pars_fragment:Vd,envmap_fragment:Gd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:sf,envmap_vertex:Yd,fog_vertex:$d,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:Kd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:jd,lights_lambert_fragment:tf,lights_lambert_pars_fragment:ef,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:cf,lights_physical_fragment:lf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:df,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:xf,map_pars_fragment:vf,map_particle_fragment:yf,map_particle_pars_fragment:Mf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Ef,morphcolor_vertex:wf,morphnormal_vertex:Tf,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:If,normal_pars_vertex:Lf,normal_vertex:Df,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Bf,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Hf,project_vertex:Vf,dithering_fragment:Gf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:$f,shadowmap_vertex:Zf,shadowmask_pars_fragment:Jf,skinbase_vertex:Kf,skinning_pars_vertex:Qf,skinning_vertex:jf,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:op,uv_pars_fragment:ap,uv_pars_vertex:cp,uv_vertex:lp,worldpos_vertex:hp,background_vert:up,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distanceRGBA_vert:vp,distanceRGBA_frag:yp,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:bp,linedashed_frag:Ep,meshbasic_vert:wp,meshbasic_frag:Tp,meshlambert_vert:Ap,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Ip,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:kp,points_frag:zp,shadow_vert:Hp,shadow_frag:Vp,sprite_vert:Gp,sprite_frag:Wp},nt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},an={basic:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new St(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ce([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ce([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ce([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new St(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ce([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ce([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ce([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ce([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ce([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ce([nt.common,nt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ce([nt.lights,nt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};an.physical={uniforms:Ce([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var er={r:0,b:0,g:0},Qn=new ln,Xp=new ne;function qp(s,t,e,n,i,r,o){let a=new St(0),c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1,E=g(S);E===null?f(a,c):E&&E.isColor&&(f(E,1),y=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,y){let E=g(y);E&&(E.isCubeTexture||E.mapping===qr)?(h===void 0&&(h=new bt(new Ot(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Gi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qn.copy(y.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Qn)),h.material.toneMapped=Qt.getTransfer(E.colorSpace)!==ae,(d!==E||u!==E.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new bt(new Le(2,2),new Je({name:"BackgroundMaterial",uniforms:Gi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(E.colorSpace)!==ae,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=E,u=E.version,p=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,y){S.getRGB(er,yh(s)),n.buffers.color.setClear(er.r,er.g,er.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:_,addToRenderList:m}}function Yp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(x,b,z,k,H){let V=!1,N=d(k,z,b);r!==N&&(r=N,l(r.object)),V=p(x,k,z,H),V&&g(x,k,z,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,E(x,b,z,k),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function d(x,b,z){let k=z.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let V=H[b.id];V===void 0&&(V={},H[b.id]=V);let N=V[k];return N===void 0&&(N=u(c()),V[k]=N),N}function u(x){let b=[],z=[],k=[];for(let H=0;H<e;H++)b[H]=0,z[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,b,z,k){let H=r.attributes,V=b.attributes,N=0,J=z.getAttributes();for(let W in J)if(J[W].location>=0){let st=H[W],mt=V[W];if(mt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),st===void 0||st.attribute!==mt||mt&&st.data!==mt.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function g(x,b,z,k){let H={},V=b.attributes,N=0,J=z.getAttributes();for(let W in J)if(J[W].location>=0){let st=V[W];st===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));let mt={};mt.attribute=st,st&&st.data&&(mt.data=st.data),H[W]=mt,N++}r.attributes=H,r.attributesNum=N,r.index=k}function _(){let x=r.newAttributes;for(let b=0,z=x.length;b<z;b++)x[b]=0}function m(x){f(x,0)}function f(x,b){let z=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;z[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),H[x]!==b&&(s.vertexAttribDivisor(x,b),H[x]=b)}function S(){let x=r.newAttributes,b=r.enabledAttributes;for(let z=0,k=b.length;z<k;z++)b[z]!==x[z]&&(s.disableVertexAttribArray(z),b[z]=0)}function y(x,b,z,k,H,V,N){N===!0?s.vertexAttribIPointer(x,b,z,H,V):s.vertexAttribPointer(x,b,z,k,H,V)}function E(x,b,z,k){_();let H=k.attributes,V=z.getAttributes(),N=b.defaultAttributeValues;for(let J in V){let W=V[J];if(W.location>=0){let lt=H[J];if(lt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){let st=lt.normalized,mt=lt.itemSize,Bt=t.get(lt);if(Bt===void 0)continue;let $t=Bt.buffer,X=Bt.type,Q=Bt.bytesPerElement,gt=X===s.INT||X===s.UNSIGNED_INT||lt.gpuType===xc;if(lt.isInterleavedBufferAttribute){let ht=lt.data,It=ht.stride,wt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<W.locationSize;Ht++)f(W.location+Ht,ht.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)m(W.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Ht=0;Ht<W.locationSize;Ht++)y(W.location+Ht,mt/W.locationSize,X,st,It*Q,(wt+mt/W.locationSize*Ht)*Q,gt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)f(W.location+ht,lt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<W.locationSize;ht++)m(W.location+ht);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ht=0;ht<W.locationSize;ht++)y(W.location+ht,mt/W.locationSize,X,st,mt*Q,mt/W.locationSize*ht*Q,gt)}}else if(N!==void 0){let st=N[J];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(W.location,st);break;case 3:s.vertexAttrib3fv(W.location,st);break;case 4:s.vertexAttrib4fv(W.location,st);break;default:s.vertexAttrib1fv(W.location,st)}}}}S()}function L(){U();for(let x in n){let b=n[x];for(let z in b){let k=b[z];for(let H in k)h(k[H].object),delete k[H];delete b[z]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;let b=n[x.id];for(let z in b){let k=b[z];for(let H in k)h(k[H].object),delete k[H];delete b[z]}delete n[x.id]}function T(x){for(let b in n){let z=n[b];if(z[x.id]===void 0)continue;let k=z[x.id];for(let H in k)h(k[H].object),delete k[H];delete z[x.id]}}function U(){q(),o=!0,r!==i&&(r=i,l(r.object))}function q(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:q,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function $p(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==sn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let U=T===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Sn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!U)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:L,maxSamples:R}}function Jp(s){let t=this,e=null,n=0,i=!1,r=!1,o=new yn,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,y=S*4,E=f.clippingState||null;c.value=E,E=h(g,u,y,p);for(let L=0;L!==y;++L)E[L]=e[L];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,E=p;y!==_;++y,E+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Kp(s){let t=new WeakMap;function e(o,a){return a===la?o.mapping=ki:a===ha&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===la||a===ha)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ga(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lr=class extends Pr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Li=4,Sl=[.125,.215,.35,.446,.526,.582],ni=20,Wo=new Lr,bl=new St,Xo=null,qo=0,Yo=0,$o=!1,ti=(1+Math.sqrt(5))/2,Ci=1/ti,El=[new A(-ti,Ci,0),new A(ti,Ci,0),new A(-Ci,0,ti),new A(Ci,0,ti),new A(0,ti,-Ci),new A(0,ti,Ci),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Dr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=$o,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:bs,format:sn,colorSpace:Gn,depthBuffer:!1},i=wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=jp(r,t,e)}return i}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,i){let a=new ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(bl),h.toneMapping=Bn,h.autoClear=!1;let p=new We({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new bt(new Ot,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(bl),_=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let y=this._cubeSize;nr(i,S*y,f>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ki||t.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=El[(i-r-1)%El.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new bt(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ni-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);let f=[],S=0;for(let T=0;T<ni;++T){let U=T/_,q=Math.exp(-U*U/2);f.push(q),T===0?S+=q:T<m&&(S+=2*q)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;let E=this._sizeLods[i],L=3*E*(i>y-Li?i-y+Li:0),R=4*(this._cubeSize-E);nr(e,L,R,3*E,2*E),c.setRenderTarget(e),c.render(d,Wo)}};function Qp(s){let t=[],e=[],n=[],i=s,r=s-Li+1+Sl.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Li?c=Sl[o-s+Li-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),y=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let R=0;R<p;R++){let T=R%3*2/3-1,U=R>2?0:-1,q=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];S.set(q,_*g*R),y.set(u,m*g*R);let x=[R,R,R,R,R,R];E.set(x,f*g*R)}let L=new Me;L.setAttribute("position",new Ie(S,_)),L.setAttribute("uv",new Ie(y,m)),L.setAttribute("faceIndex",new Ie(E,f)),t.push(L),i>Li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wl(s,t,e){let n=new bn(s,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jp(s,t,e){let n=new Float32Array(ni),i=new A(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Tl(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Al(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function tm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===la||c===ha,h=c===ki||c===zi;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Dr(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Dr(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function em(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nm(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],s.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let S=p.array;_=p.version;for(let y=0,E=S.length;y<E;y+=3){let L=S[y+0],R=S[y+1],T=S[y+2];u.push(L,R,R,T,T,L)}}else if(g!==void 0){let S=g.array;_=g.version;for(let y=0,E=S.length/3-1;y<E;y+=3){let L=y+0,R=y+1,T=y+2;u.push(L,R,R,T,T,L)}}else return;let m=new(xh(u)?Cr:Rr)(u,1);m.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function im(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){s.drawElements(n,p,r,u*o),e.update(p,n,1)}function l(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S];for(let S=0;S<_.length;S++)e.update(f,n,_[S])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function sm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function rm(s,t,e){let n=new WeakMap,i=new ee;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let q=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",q)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let E=a.attributes.position.count*y,L=1;E>t.maxTextureSize&&(L=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let R=new Float32Array(E*L*4*d),T=new Tr(R,E,L,d);T.type=cn,T.needsUpdate=!0;let U=y*4;for(let x=0;x<d;x++){let b=m[x],z=f[x],k=S[x],H=E*L*4*x;for(let V=0;V<b.count;V++){let N=V*U;p===!0&&(i.fromBufferAttribute(b,V),R[H+N+0]=i.x,R[H+N+1]=i.y,R[H+N+2]=i.z,R[H+N+3]=0),g===!0&&(i.fromBufferAttribute(z,V),R[H+N+4]=i.x,R[H+N+5]=i.y,R[H+N+6]=i.z,R[H+N+7]=0),_===!0&&(i.fromBufferAttribute(k,V),R[H+N+8]=i.x,R[H+N+9]=i.y,R[H+N+10]=i.z,R[H+N+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new Yt(E,L)},n.set(a,u),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function om(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ur=class extends Fe{constructor(t,e,n,i,r,o,a,c,l,h=Ui){if(h!==Ui&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ri),n===void 0&&h===Vi&&(n=Hi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=c!==void 0?c:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Sh=new Fe,Rl=new Ur(1,1),bh=new Tr,Eh=new Ha,wh=new Ir,Cl=[],Pl=[],Il=new Float32Array(16),Ll=new Float32Array(9),Dl=new Float32Array(4);function Ki(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Cl[i];if(r===void 0&&(r=new Float32Array(i),Cl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $r(s,t){let e=Pl[t];e===void 0&&(e=new Int32Array(t),Pl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function am(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function lm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function um(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Dl.set(n),s.uniformMatrix2fv(this.addr,!1,Dl),_e(e,n)}}function dm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ll.set(n),s.uniformMatrix3fv(this.addr,!1,Ll),_e(e,n)}}function fm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Il.set(n),s.uniformMatrix4fv(this.addr,!1,Il),_e(e,n)}}function pm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function gm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function _m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function xm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function ym(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Mm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Sm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Rl.compareFunction=gh,r=Rl):r=Sh,e.setTexture2D(t||r,i)}function bm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Eh,i)}function Em(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wh,i)}function wm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bh,i)}function Tm(s){switch(s){case 5126:return am;case 35664:return cm;case 35665:return lm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return vm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return wm}}function Am(s,t){s.uniform1fv(this.addr,t)}function Rm(s,t){let e=Ki(t,this.size,2);s.uniform2fv(this.addr,e)}function Cm(s,t){let e=Ki(t,this.size,3);s.uniform3fv(this.addr,e)}function Pm(s,t){let e=Ki(t,this.size,4);s.uniform4fv(this.addr,e)}function Im(s,t){let e=Ki(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lm(s,t){let e=Ki(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dm(s,t){let e=Ki(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Um(s,t){s.uniform1iv(this.addr,t)}function Nm(s,t){s.uniform2iv(this.addr,t)}function Fm(s,t){s.uniform3iv(this.addr,t)}function Om(s,t){s.uniform4iv(this.addr,t)}function Bm(s,t){s.uniform1uiv(this.addr,t)}function km(s,t){s.uniform2uiv(this.addr,t)}function zm(s,t){s.uniform3uiv(this.addr,t)}function Hm(s,t){s.uniform4uiv(this.addr,t)}function Vm(s,t,e){let n=this.cache,i=t.length,r=$r(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Sh,r[o])}function Gm(s,t,e){let n=this.cache,i=t.length,r=$r(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Eh,r[o])}function Wm(s,t,e){let n=this.cache,i=t.length,r=$r(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||wh,r[o])}function Xm(s,t,e){let n=this.cache,i=t.length,r=$r(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||bh,r[o])}function qm(s){switch(s){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Im;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return km;case 36295:return zm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}var Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tm(e.type)}},Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qm(e.type)}},qa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Zo=/(\w+)(\])?(\[|\.)?/g;function Ul(s,t){s.seq.push(t),s.map[t.id]=t}function Ym(s,t,e){let n=s.name,i=n.length;for(Zo.lastIndex=0;;){let r=Zo.exec(n),o=Zo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ul(e,l===void 0?new Wa(a,s,t):new Xa(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new qa(a),Ul(e,d)),e=d}}}var Oi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Ym(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Nl(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var $m=37297,Zm=0;function Jm(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Km(s){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s),n;switch(t===e?n="":t===Sr&&e===Mr?n="LinearDisplayP3ToLinearSRGB":t===Mr&&e===Sr&&(n="LinearSRGBToLinearDisplayP3"),s){case Gn:case Yr:return[n,"LinearTransferOETF"];case me:case wc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Fl(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Jm(s.getShaderSource(t),o)}else return i}function Qm(s,t){let e=Km(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jm(s,t){let e;switch(t){case cu:e="Linear";break;case lu:e="Reinhard";break;case hu:e="Cineon";break;case Ss:e="ACESFilmic";break;case du:e="AgX";break;case fu:e="Neutral";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ir=new A;function t0(){Qt.getLuminanceCoefficients(ir);let s=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function n0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function hs(s){return s!==""}function Ol(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(s0,o0)}var r0=new Map;function o0(s,t){let e=Dt[t];if(e===void 0){let n=r0.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}var a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(s){return s.replace(a0,c0)}function c0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function l0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case zi:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case ou:t="ENVMAP_BLENDING_MIX";break;case au:t="ENVMAP_BLENDING_ADD";break}return t}function f0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=l0(e),l=h0(e),h=u0(e),d=d0(e),u=f0(e),p=e0(e),g=n0(r),_=i.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(m=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),t0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=Ya(o),o=Ol(o,e),o=Bl(o,e),a=Ya(a),a=Ol(a,e),a=Bl(a,e),o=kl(o),a=kl(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=S+m+o,E=S+f+a,L=Nl(i,i.VERTEX_SHADER,y),R=Nl(i,i.FRAGMENT_SHADER,E);i.attachShader(_,L),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(b){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(L).trim(),H=i.getShaderInfoLog(R).trim(),V=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,R);else{let J=Fl(i,L,"vertex"),W=Fl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+J+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||H==="")&&(N=!1);N&&(b.diagnostics={runnable:V,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(L),i.deleteShader(R),U=new Oi(i,_),q=i0(i,_)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let q;this.getAttributes=function(){return q===void 0&&T(this),q};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,$m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}var m0=0,$a=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Za(t),e.set(t,n)),n}},Za=class{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}};function g0(s,t,e,n,i,r,o){let a=new Ar,c=new $a,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,p=i.vertexTextures,g=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function f(x,b,z,k,H){let V=k.fog,N=H.geometry,J=x.isMeshStandardMaterial?k.environment:null,W=(x.isMeshStandardMaterial?e:t).get(x.envMap||J),lt=W&&W.mapping===qr?W.image.height:null,st=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let mt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Bt=mt!==void 0?mt.length:0,$t=0;N.morphAttributes.position!==void 0&&($t=1),N.morphAttributes.normal!==void 0&&($t=2),N.morphAttributes.color!==void 0&&($t=3);let X,Q,gt,ht;if(st){let Ne=an[st];X=Ne.vertexShader,Q=Ne.fragmentShader}else X=x.vertexShader,Q=x.fragmentShader,c.update(x),gt=c.getVertexShaderID(x),ht=c.getFragmentShaderID(x);let It=s.getRenderTarget(),wt=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,te=!!x.map,Vt=!!x.matcap,C=!!W,Oe=!!x.aoMap,kt=!!x.lightMap,Xt=!!x.bumpMap,At=!!x.normalMap,re=!!x.displacementMap,Pt=!!x.emissiveMap,w=!!x.metalnessMap,v=!!x.roughnessMap,F=x.anisotropy>0,$=x.clearcoat>0,K=x.dispersion>0,Y=x.iridescence>0,vt=x.sheen>0,it=x.transmission>0,ut=F&&!!x.anisotropyMap,qt=$&&!!x.clearcoatMap,j=$&&!!x.clearcoatNormalMap,dt=$&&!!x.clearcoatRoughnessMap,Rt=Y&&!!x.iridescenceMap,Ct=Y&&!!x.iridescenceThicknessMap,ft=vt&&!!x.sheenColorMap,zt=vt&&!!x.sheenRoughnessMap,Lt=!!x.specularMap,ie=!!x.specularColorMap,P=!!x.specularIntensityMap,at=it&&!!x.transmissionMap,G=it&&!!x.thicknessMap,Z=!!x.gradientMap,rt=!!x.alphaMap,ct=x.alphaTest>0,Gt=!!x.alphaHash,fe=!!x.extensions,Ue=Bn;x.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(Ue=s.toneMapping);let Zt={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:Q,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&H._colorsTexture!==null,instancing:wt,instancingColor:wt&&H.instanceColor!==null,instancingMorph:wt&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:It===null?s.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Gn,alphaToCoverage:!!x.alphaToCoverage,map:te,matcap:Vt,envMap:C,envMapMode:C&&W.mapping,envMapCubeUVHeight:lt,aoMap:Oe,lightMap:kt,bumpMap:Xt,normalMap:At,displacementMap:p&&re,emissiveMap:Pt,normalMapObjectSpace:At&&x.normalMapType===_u,normalMapTangentSpace:At&&x.normalMapType===mh,metalnessMap:w,roughnessMap:v,anisotropy:F,anisotropyMap:ut,clearcoat:$,clearcoatMap:qt,clearcoatNormalMap:j,clearcoatRoughnessMap:dt,dispersion:K,iridescence:Y,iridescenceMap:Rt,iridescenceThicknessMap:Ct,sheen:vt,sheenColorMap:ft,sheenRoughnessMap:zt,specularMap:Lt,specularColorMap:ie,specularIntensityMap:P,transmission:it,transmissionMap:at,thicknessMap:G,gradientMap:Z,opaque:x.transparent===!1&&x.blending===Di&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:Gt,combine:x.combine,mapUv:te&&m(x.map.channel),aoMapUv:Oe&&m(x.aoMap.channel),lightMapUv:kt&&m(x.lightMap.channel),bumpMapUv:Xt&&m(x.bumpMap.channel),normalMapUv:At&&m(x.normalMap.channel),displacementMapUv:re&&m(x.displacementMap.channel),emissiveMapUv:Pt&&m(x.emissiveMap.channel),metalnessMapUv:w&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:ut&&m(x.anisotropyMap.channel),clearcoatMapUv:qt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:j&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:zt&&m(x.sheenRoughnessMap.channel),specularMapUv:Lt&&m(x.specularMap.channel),specularColorMapUv:ie&&m(x.specularColorMap.channel),specularIntensityMapUv:P&&m(x.specularIntensityMap.channel),transmissionMapUv:at&&m(x.transmissionMap.channel),thicknessMapUv:G&&m(x.thicknessMap.channel),alphaMapUv:rt&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(At||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!N.attributes.uv&&(te||rt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:$t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:te&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ve,flipSided:x.side===Ae,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function S(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let z in x.defines)b.push(z),b.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(y(b,x),E(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function L(x){let b=_[x.type],z;if(b){let k=an[b];z=rd.clone(k.uniforms)}else z=x.uniforms;return z}function R(x,b){let z;for(let k=0,H=h.length;k<H;k++){let V=h[k];if(V.cacheKey===b){z=V,++z.usedTimes;break}}return z===void 0&&(z=new p0(s,b,x,r),h.push(z)),z}function T(x){if(--x.usedTimes===0){let b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function U(x){c.remove(x)}function q(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:L,acquireProgram:R,releaseProgram:T,releaseShaderCache:U,programs:h,dispose:q}}function _0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function x0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Hl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vl(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){let f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,_,m){let f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||x0),n.length>1&&n.sort(u||Hl),i.length>1&&i.sort(u||Hl)}function h(){for(let d=t,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function v0(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Vl,s.set(n,[o])):i>=r.length?(o=new Vl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function y0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new St};break;case"SpotLight":e={position:new A,direction:new A,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function M0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var S0=0;function b0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function E0(s){let t=new y0,e=M0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let i=new A,r=new ne,o=new ne;function a(l){let h=0,d=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,y=0,E=0,L=0,R=0,T=0;l.sort(b0);for(let q=0,x=l.length;q<x;q++){let b=l[q],z=b.color,k=b.intensity,H=b.distance,V=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(b.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(b.sh.coefficients[N],k);T++}else if(b.isDirectionalLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let J=b.shadow,W=e.get(b);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=b.shadow.matrix,S++}n.directional[p]=N,p++}else if(b.isSpotLight){let N=t.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(z).multiplyScalar(k),N.distance=H,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,n.spot[_]=N;let J=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,J.updateMatrices(b),b.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,b.castShadow){let W=e.get(b);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,E++}_++}else if(b.isRectAreaLight){let N=t.get(b);N.color.copy(z).multiplyScalar(k),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=N,m++}else if(b.isPointLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){let J=b.shadow,W=e.get(b);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=N,g++}else if(b.isHemisphereLight){let N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(k),N.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[f]=N,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==S||U.numPointShadows!==y||U.numSpotShadows!==E||U.numSpotMaps!==L||U.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=E+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=S,U.numPointShadows=y,U.numSpotShadows=E,U.numSpotMaps=L,U.numLightProbes=T,n.version=S0++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){let y=l[f];if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),d++}else if(y.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let E=n.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let E=n.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Gl(s){let t=new E0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function w0(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Gl(s),t.set(i,[a])):r>=o.length?(a=new Gl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ja=class extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
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
}`;function R0(s,t,e){let n=new _s,i=new Yt,r=new Yt,o=new ee,a=new Ja({depthPacking:gu}),c=new Ka,l={},h=e.maxTextureSize,d={[kn]:Ae,[Ae]:kn,[Ve]:Ve},u=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:T0,fragmentShader:A0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new bt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let f=this.type;this.render=function(R,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let q=s.getRenderTarget(),x=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),z=s.state;z.setBlending(On),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==vn&&this.type===vn,H=f===vn&&this.type!==vn;for(let V=0,N=R.length;V<N;V++){let J=R[V],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let lt=W.getFrameExtents();if(i.multiply(lt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/lt.x),i.x=r.x*lt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/lt.y),i.y=r.y*lt.y,W.mapSize.y=r.y)),W.map===null||k===!0||H===!0){let mt=this.type!==vn?{minFilter:Te,magFilter:Te}:{};W.map!==null&&W.map.dispose(),W.map=new bn(i.x,i.y,mt),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let st=W.getViewportCount();for(let mt=0;mt<st;mt++){let Bt=W.getViewport(mt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(o),W.updateMatrices(J,mt),n=W.getFrustum(),E(T,U,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===vn&&S(W,U),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(q,x,b)};function S(R,T){let U=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new bn(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,U,u,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,U,p,_,null)}function y(R,T,U,q){let x=null,b=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)x=b;else if(x=U.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=x.uuid,k=T.uuid,H=l[z];H===void 0&&(H={},l[z]=H);let V=H[k];V===void 0&&(V=x.clone(),H[k]=V,T.addEventListener("dispose",L)),x=V}if(x.visible=T.visible,x.wireframe=T.wireframe,q===vn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let z=s.properties.get(x);z.light=U}return x}function E(R,T,U,q,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let k=t.update(R),H=R.material;if(Array.isArray(H)){let V=k.groups;for(let N=0,J=V.length;N<J;N++){let W=V[N],lt=H[W.materialIndex];if(lt&&lt.visible){let st=y(R,lt,q,x);R.onBeforeShadow(s,R,T,U,k,st,W),s.renderBufferDirect(U,null,k,st,R,W),R.onAfterShadow(s,R,T,U,k,st,W)}}}else if(H.visible){let V=y(R,H,q,x);R.onBeforeShadow(s,R,T,U,k,V,null),s.renderBufferDirect(U,null,k,V,R,null),R.onAfterShadow(s,R,T,U,k,V,null)}}let z=R.children;for(let k=0,H=z.length;k<H;k++)E(z[k],T,U,q,x)}function L(R){R.target.removeEventListener("dispose",L);for(let U in l){let q=l[U],x=R.target.uuid;x in q&&(q[x].dispose(),delete q[x])}}}var C0={[na]:ia,[sa]:aa,[ra]:ca,[Bi]:oa,[ia]:na,[aa]:sa,[ca]:ra,[oa]:Bi};function P0(s){function t(){let P=!1,at=new ee,G=null,Z=new ee(0,0,0,0);return{setMask:function(rt){G!==rt&&!P&&(s.colorMask(rt,rt,rt,rt),G=rt)},setLocked:function(rt){P=rt},setClear:function(rt,ct,Gt,fe,Ue){Ue===!0&&(rt*=fe,ct*=fe,Gt*=fe),at.set(rt,ct,Gt,fe),Z.equals(at)===!1&&(s.clearColor(rt,ct,Gt,fe),Z.copy(at))},reset:function(){P=!1,G=null,Z.set(-1,0,0,0)}}}function e(){let P=!1,at=!1,G=null,Z=null,rt=null;return{setReversed:function(ct){at=ct},setTest:function(ct){ct?gt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(ct){G!==ct&&!P&&(s.depthMask(ct),G=ct)},setFunc:function(ct){if(at&&(ct=C0[ct]),Z!==ct){switch(ct){case na:s.depthFunc(s.NEVER);break;case ia:s.depthFunc(s.ALWAYS);break;case sa:s.depthFunc(s.LESS);break;case Bi:s.depthFunc(s.LEQUAL);break;case ra:s.depthFunc(s.EQUAL);break;case oa:s.depthFunc(s.GEQUAL);break;case aa:s.depthFunc(s.GREATER);break;case ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){P=ct},setClear:function(ct){rt!==ct&&(s.clearDepth(ct),rt=ct)},reset:function(){P=!1,G=null,Z=null,rt=null}}}function n(){let P=!1,at=null,G=null,Z=null,rt=null,ct=null,Gt=null,fe=null,Ue=null;return{setTest:function(Zt){P||(Zt?gt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(Zt){at!==Zt&&!P&&(s.stencilMask(Zt),at=Zt)},setFunc:function(Zt,Ne,fn){(G!==Zt||Z!==Ne||rt!==fn)&&(s.stencilFunc(Zt,Ne,fn),G=Zt,Z=Ne,rt=fn)},setOp:function(Zt,Ne,fn){(ct!==Zt||Gt!==Ne||fe!==fn)&&(s.stencilOp(Zt,Ne,fn),ct=Zt,Gt=Ne,fe=fn)},setLocked:function(Zt){P=Zt},setClear:function(Zt){Ue!==Zt&&(s.clearStencil(Zt),Ue=Zt)},reset:function(){P=!1,at=null,G=null,Z=null,rt=null,ct=null,Gt=null,fe=null,Ue=null}}}let i=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,S=null,y=null,E=null,L=null,R=new St(0,0,0),T=0,U=!1,q=null,x=null,b=null,z=null,k=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,N=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=N>=1):J.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=N>=2);let W=null,lt={},st=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),Bt=new ee().fromArray(st),$t=new ee().fromArray(mt);function X(P,at,G,Z){let rt=new Uint8Array(4),ct=s.createTexture();s.bindTexture(P,ct),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<G;Gt++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(at+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return ct}let Q={};Q[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(s.DEPTH_TEST),r.setFunc(Bi),kt(!1),Xt($c),gt(s.CULL_FACE),C(On);function gt(P){l[P]!==!0&&(s.enable(P),l[P]=!0)}function ht(P){l[P]!==!1&&(s.disable(P),l[P]=!1)}function It(P,at){return h[P]!==at?(s.bindFramebuffer(P,at),h[P]=at,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=at),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(P,at){let G=u,Z=!1;if(P){G=d.get(at),G===void 0&&(G=[],d.set(at,G));let rt=P.textures;if(G.length!==rt.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Gt=rt.length;ct<Gt;ct++)G[ct]=s.COLOR_ATTACHMENT0+ct;G.length=rt.length,Z=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Z=!0);Z&&s.drawBuffers(G)}function Ht(P){return p!==P?(s.useProgram(P),p=P,!0):!1}let te={[ei]:s.FUNC_ADD,[Gh]:s.FUNC_SUBTRACT,[Wh]:s.FUNC_REVERSE_SUBTRACT};te[Xh]=s.MIN,te[qh]=s.MAX;let Vt={[Yh]:s.ZERO,[$h]:s.ONE,[Zh]:s.SRC_COLOR,[ta]:s.SRC_ALPHA,[eu]:s.SRC_ALPHA_SATURATE,[jh]:s.DST_COLOR,[Kh]:s.DST_ALPHA,[Jh]:s.ONE_MINUS_SRC_COLOR,[ea]:s.ONE_MINUS_SRC_ALPHA,[tu]:s.ONE_MINUS_DST_COLOR,[Qh]:s.ONE_MINUS_DST_ALPHA,[nu]:s.CONSTANT_COLOR,[iu]:s.ONE_MINUS_CONSTANT_COLOR,[su]:s.CONSTANT_ALPHA,[ru]:s.ONE_MINUS_CONSTANT_ALPHA};function C(P,at,G,Z,rt,ct,Gt,fe,Ue,Zt){if(P===On){g===!0&&(ht(s.BLEND),g=!1);return}if(g===!1&&(gt(s.BLEND),g=!0),P!==Vh){if(P!==_||Zt!==U){if((m!==ei||y!==ei)&&(s.blendEquation(s.FUNC_ADD),m=ei,y=ei),Zt)switch(P){case Di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zc:s.blendFunc(s.ONE,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,S=null,E=null,L=null,R.set(0,0,0),T=0,_=P,U=Zt}return}rt=rt||at,ct=ct||G,Gt=Gt||Z,(at!==m||rt!==y)&&(s.blendEquationSeparate(te[at],te[rt]),m=at,y=rt),(G!==f||Z!==S||ct!==E||Gt!==L)&&(s.blendFuncSeparate(Vt[G],Vt[Z],Vt[ct],Vt[Gt]),f=G,S=Z,E=ct,L=Gt),(fe.equals(R)===!1||Ue!==T)&&(s.blendColor(fe.r,fe.g,fe.b,Ue),R.copy(fe),T=Ue),_=P,U=!1}function Oe(P,at){P.side===Ve?ht(s.CULL_FACE):gt(s.CULL_FACE);let G=P.side===Ae;at&&(G=!G),kt(G),P.blending===Di&&P.transparent===!1?C(On):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),i.setMask(P.colorWrite);let Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(P){q!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),q=P)}function Xt(P){P!==zh?(gt(s.CULL_FACE),P!==x&&(P===$c?s.cullFace(s.BACK):P===Hh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),x=P}function At(P){P!==b&&(V&&s.lineWidth(P),b=P)}function re(P,at,G){P?(gt(s.POLYGON_OFFSET_FILL),(z!==at||k!==G)&&(s.polygonOffset(at,G),z=at,k=G)):ht(s.POLYGON_OFFSET_FILL)}function Pt(P){P?gt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function w(P){P===void 0&&(P=s.TEXTURE0+H-1),W!==P&&(s.activeTexture(P),W=P)}function v(P,at,G){G===void 0&&(W===null?G=s.TEXTURE0+H-1:G=W);let Z=lt[G];Z===void 0&&(Z={type:void 0,texture:void 0},lt[G]=Z),(Z.type!==P||Z.texture!==at)&&(W!==G&&(s.activeTexture(G),W=G),s.bindTexture(P,at||Q[P]),Z.type=P,Z.texture=at)}function F(){let P=lt[W];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(P){Bt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Bt.copy(P))}function ft(P){$t.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),$t.copy(P))}function zt(P,at){let G=c.get(at);G===void 0&&(G=new WeakMap,c.set(at,G));let Z=G.get(P);Z===void 0&&(Z=s.getUniformBlockIndex(at,P.name),G.set(P,Z))}function Lt(P,at){let Z=c.get(at).get(P);a.get(at)!==Z&&(s.uniformBlockBinding(at,Z,P.__bindingPointIndex),a.set(at,Z))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},W=null,lt={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,S=null,y=null,E=null,L=null,R=new St(0,0,0),T=0,U=!1,q=null,x=null,b=null,z=null,k=null,Bt.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:gt,disable:ht,bindFramebuffer:It,drawBuffers:wt,useProgram:Ht,setBlending:C,setMaterial:Oe,setFlipSided:kt,setCullFace:Xt,setLineWidth:At,setPolygonOffset:re,setScissorTest:Pt,activeTexture:w,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:dt,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:qt,texStorage3D:j,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:it,compressedTexSubImage3D:ut,scissor:Ct,viewport:ft,reset:ie}}function Wl(s,t,e,n){let i=I0(n);switch(e){case lh:return s*t;case uh:return s*t;case dh:return s*t*2;case Mc:return s*t/i.components*i.byteLength;case Sc:return s*t/i.components*i.byteLength;case fh:return s*t*2/i.components*i.byteLength;case bc:return s*t*2/i.components*i.byteLength;case hh:return s*t*3/i.components*i.byteLength;case sn:return s*t*4/i.components*i.byteLength;case Ec:return s*t*4/i.components*i.byteLength;case fr:case pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(s,16)*Math.max(t,8)/4;case da:case pa:return Math.max(s,8)*Math.max(t,8)/2;case ga:case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _r:case Da:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ph:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I0(s){switch(s){case Sn:case oh:return{byteLength:1,components:1};case ps:case ah:case bs:return{byteLength:2,components:1};case vc:case yc:return{byteLength:2,components:4};case ri:case xc:case cn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function L0(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):Er("canvas")}function _(w,v,F){let $=1,K=Pt(w);if((K.width>F||K.height>F)&&($=F/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor($*K.width),vt=Math.floor($*K.height);d===void 0&&(d=g(Y,vt));let it=v?g(Y,vt):d;return it.width=Y,it.height=vt,it.getContext("2d").drawImage(w,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+vt+")."),it}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==Te&&w.minFilter!==Ge}function f(w){s.generateMipmap(w)}function S(w,v,F,$,K=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=v;if(v===s.RED&&(F===s.FLOAT&&(Y=s.R32F),F===s.HALF_FLOAT&&(Y=s.R16F),F===s.UNSIGNED_BYTE&&(Y=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.R8UI),F===s.UNSIGNED_SHORT&&(Y=s.R16UI),F===s.UNSIGNED_INT&&(Y=s.R32UI),F===s.BYTE&&(Y=s.R8I),F===s.SHORT&&(Y=s.R16I),F===s.INT&&(Y=s.R32I)),v===s.RG&&(F===s.FLOAT&&(Y=s.RG32F),F===s.HALF_FLOAT&&(Y=s.RG16F),F===s.UNSIGNED_BYTE&&(Y=s.RG8)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RG8UI),F===s.UNSIGNED_SHORT&&(Y=s.RG16UI),F===s.UNSIGNED_INT&&(Y=s.RG32UI),F===s.BYTE&&(Y=s.RG8I),F===s.SHORT&&(Y=s.RG16I),F===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),F===s.UNSIGNED_INT&&(Y=s.RGB32UI),F===s.BYTE&&(Y=s.RGB8I),F===s.SHORT&&(Y=s.RGB16I),F===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),F===s.UNSIGNED_INT&&(Y=s.RGBA32UI),F===s.BYTE&&(Y=s.RGBA8I),F===s.SHORT&&(Y=s.RGBA16I),F===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),v===s.RGBA){let vt=K?yr:Qt.getTransfer($);F===s.FLOAT&&(Y=s.RGBA32F),F===s.HALF_FLOAT&&(Y=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Y=vt===ae?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(w,v){let F;return w?v===null||v===ri||v===Hi?F=s.DEPTH24_STENCIL8:v===cn?F=s.DEPTH32F_STENCIL8:v===ps&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===Hi?F=s.DEPTH_COMPONENT24:v===cn?F=s.DEPTH_COMPONENT32F:v===ps&&(F=s.DEPTH_COMPONENT16),F}function E(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Te&&w.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function L(w){let v=w.target;v.removeEventListener("dispose",L),T(v),v.isVideoTexture&&h.delete(v)}function R(w){let v=w.target;v.removeEventListener("dispose",R),q(v)}function T(w){let v=n.get(w);if(v.__webglInit===void 0)return;let F=w.source,$=u.get(F);if($){let K=$[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(w),Object.keys($).length===0&&u.delete(F)}n.remove(w)}function U(w){let v=n.get(w);s.deleteTexture(v.__webglTexture);let F=w.source,$=u.get(F);delete $[v.__cacheKey],o.memory.textures--}function q(w){let v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let K=0;K<v.__webglFramebuffer[$].length;K++)s.deleteFramebuffer(v.__webglFramebuffer[$][K]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=w.textures;for(let $=0,K=F.length;$<K;$++){let Y=n.get(F[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(w)}let x=0;function b(){x=0}function z(){let w=x;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),x+=1,w}function k(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function H(w,v){let F=n.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(F,w,v);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function V(w,v){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$t(F,w,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function N(w,v){let F=n.get(w);if(w.version>0&&F.__version!==w.version){$t(F,w,v);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function J(w,v){let F=n.get(w);if(w.version>0&&F.__version!==w.version){X(F,w,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}let W={[fs]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},lt={[Te]:s.NEAREST,[pu]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Mo]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},st={[xu]:s.NEVER,[Eu]:s.ALWAYS,[vu]:s.LESS,[gh]:s.LEQUAL,[yu]:s.EQUAL,[bu]:s.GEQUAL,[Mu]:s.GREATER,[Su]:s.NOTEQUAL};function mt(w,v){if(v.type===cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===Mo||v.magFilter===Os||v.magFilter===si||v.minFilter===Ge||v.minFilter===Mo||v.minFilter===Os||v.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,W[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,W[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,W[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,lt[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,st[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Te||v.minFilter!==Os&&v.minFilter!==si||v.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Bt(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",L));let $=v.source,K=u.get($);K===void 0&&(K={},u.set($,K));let Y=k(v);if(Y!==w.__cacheKey){K[Y]===void 0&&(K[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[Y].usedTimes++;let vt=K[w.__cacheKey];vt!==void 0&&(K[w.__cacheKey].usedTimes--,vt.usedTimes===0&&U(v)),w.__cacheKey=Y,w.__webglTexture=K[Y].texture}return F}function $t(w,v,F){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);let K=Bt(w,v),Y=v.source;e.bindTexture($,w.__webglTexture,s.TEXTURE0+F);let vt=n.get(Y);if(Y.version!==vt.__version||K===!0){e.activeTexture(s.TEXTURE0+F);let it=Qt.getPrimaries(Qt.workingColorSpace),ut=v.colorSpace===Nn?null:Qt.getPrimaries(v.colorSpace),qt=v.colorSpace===Nn||it===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let j=_(v.image,!1,i.maxTextureSize);j=re(v,j);let dt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type),Ct=S(v.internalFormat,dt,Rt,v.colorSpace,v.isVideoTexture);mt($,v);let ft,zt=v.mipmaps,Lt=v.isVideoTexture!==!0,ie=vt.__version===void 0||K===!0,P=Y.dataReady,at=E(v,j);if(v.isDepthTexture)Ct=y(v.format===Vi,v.type),ie&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,Ct,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,Ct,j.width,j.height,0,dt,Rt,null));else if(v.isDataTexture)if(zt.length>0){Lt&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let G=0,Z=zt.length;G<Z;G++)ft=zt[G],Lt?P&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,G,Ct,ft.width,ft.height,0,dt,Rt,ft.data);v.generateMipmaps=!1}else Lt?(ie&&e.texStorage2D(s.TEXTURE_2D,at,Ct,j.width,j.height),P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,dt,Rt,j.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,j.width,j.height,0,dt,Rt,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,zt[0].width,zt[0].height,j.depth);for(let G=0,Z=zt.length;G<Z;G++)if(ft=zt[G],v.format!==sn)if(dt!==null)if(Lt){if(P)if(v.layerUpdates.size>0){let rt=Wl(ft.width,ft.height,v.format,v.type);for(let ct of v.layerUpdates){let Gt=ft.data.subarray(ct*rt/ft.data.BYTES_PER_ELEMENT,(ct+1)*rt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ct,ft.width,ft.height,1,dt,Gt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,j.depth,dt,ft.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Ct,ft.width,ft.height,j.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,j.depth,dt,Rt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Ct,ft.width,ft.height,j.depth,0,dt,Rt,ft.data)}else{Lt&&ie&&e.texStorage2D(s.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let G=0,Z=zt.length;G<Z;G++)ft=zt[G],v.format!==sn?dt!==null?Lt?P&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Ct,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(s.TEXTURE_2D,G,Ct,ft.width,ft.height,0,dt,Rt,ft.data)}else if(v.isDataArrayTexture)if(Lt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,j.width,j.height,j.depth),P)if(v.layerUpdates.size>0){let G=Wl(j.width,j.height,v.format,v.type);for(let Z of v.layerUpdates){let rt=j.data.subarray(Z*G/j.data.BYTES_PER_ELEMENT,(Z+1)*G/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,dt,Rt,rt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,Rt,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,j.width,j.height,j.depth,0,dt,Rt,j.data);else if(v.isData3DTexture)Lt?(ie&&e.texStorage3D(s.TEXTURE_3D,at,Ct,j.width,j.height,j.depth),P&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,Rt,j.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,j.width,j.height,j.depth,0,dt,Rt,j.data);else if(v.isFramebufferTexture){if(ie)if(Lt)e.texStorage2D(s.TEXTURE_2D,at,Ct,j.width,j.height);else{let G=j.width,Z=j.height;for(let rt=0;rt<at;rt++)e.texImage2D(s.TEXTURE_2D,rt,Ct,G,Z,0,dt,Rt,null),G>>=1,Z>>=1}}else if(zt.length>0){if(Lt&&ie){let G=Pt(zt[0]);e.texStorage2D(s.TEXTURE_2D,at,Ct,G.width,G.height)}for(let G=0,Z=zt.length;G<Z;G++)ft=zt[G],Lt?P&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,dt,Rt,ft):e.texImage2D(s.TEXTURE_2D,G,Ct,dt,Rt,ft);v.generateMipmaps=!1}else if(Lt){if(ie){let G=Pt(j);e.texStorage2D(s.TEXTURE_2D,at,Ct,G.width,G.height)}P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Rt,j)}else e.texImage2D(s.TEXTURE_2D,0,Ct,dt,Rt,j);m(v)&&f($),vt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function X(w,v,F){if(v.image.length!==6)return;let $=Bt(w,v),K=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);let Y=n.get(K);if(K.version!==Y.__version||$===!0){e.activeTexture(s.TEXTURE0+F);let vt=Qt.getPrimaries(Qt.workingColorSpace),it=v.colorSpace===Nn?null:Qt.getPrimaries(v.colorSpace),ut=v.colorSpace===Nn||vt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let qt=v.isCompressedTexture||v.image[0].isCompressedTexture,j=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!qt&&!j?dt[Z]=_(v.image[Z],!0,i.maxCubemapSize):dt[Z]=j?v.image[Z].image:v.image[Z],dt[Z]=re(v,dt[Z]);let Rt=dt[0],Ct=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),zt=S(v.internalFormat,Ct,ft,v.colorSpace),Lt=v.isVideoTexture!==!0,ie=Y.__version===void 0||$===!0,P=K.dataReady,at=E(v,Rt);mt(s.TEXTURE_CUBE_MAP,v);let G;if(qt){Lt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,zt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){G=dt[Z].mipmaps;for(let rt=0;rt<G.length;rt++){let ct=G[rt];v.format!==sn?Ct!==null?Lt?P&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,zt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,ct.width,ct.height,Ct,ft,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,zt,ct.width,ct.height,0,Ct,ft,ct.data)}}}else{if(G=v.mipmaps,Lt&&ie){G.length>0&&at++;let Z=Pt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Ct,ft,dt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,dt[Z].width,dt[Z].height,0,Ct,ft,dt[Z].data);for(let rt=0;rt<G.length;rt++){let Gt=G[rt].image[Z].image;Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Gt.width,Gt.height,Ct,ft,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,zt,Gt.width,Gt.height,0,Ct,ft,Gt.data)}}else{Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,ft,dt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,Ct,ft,dt[Z]);for(let rt=0;rt<G.length;rt++){let ct=G[rt];Lt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Ct,ft,ct.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,zt,Ct,ft,ct.image[Z])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),Y.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Q(w,v,F,$,K,Y){let vt=r.convert(F.format,F.colorSpace),it=r.convert(F.type),ut=S(F.internalFormat,vt,it,F.colorSpace);if(!n.get(v).__hasExternalTextures){let j=Math.max(1,v.width>>Y),dt=Math.max(1,v.height>>Y);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,ut,j,dt,v.depth,0,vt,it,null):e.texImage2D(K,Y,ut,j,dt,0,vt,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Xt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,n.get(F).__webglTexture,0,kt(v)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,K,n.get(F).__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(w,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){let $=v.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=y(v.stencilBuffer,K),vt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=kt(v);Xt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,Y,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Y,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Y,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,w)}else{let $=v.textures;for(let K=0;K<$.length;K++){let Y=$[K],vt=r.convert(Y.format,Y.colorSpace),it=r.convert(Y.type),ut=S(Y.internalFormat,vt,it,Y.colorSpace),qt=kt(v);F&&Xt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,ut,v.width,v.height):Xt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,ut,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ut,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);let $=n.get(v.depthTexture).__webglTexture,K=kt(v);if(v.depthTexture.format===Ui)Xt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(v.depthTexture.format===Vi)Xt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function It(w){let v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ht(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=s.createRenderbuffer(),gt(v.__webglDepthbuffer[$],w,!1);else{let K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),gt(v.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(w,v,F){let $=n.get(w);v!==void 0&&Q($.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&It(w)}function Ht(w){let v=w.texture,F=n.get(w),$=n.get(v);w.addEventListener("dispose",R);let K=w.textures,Y=w.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let ut=0;ut<v.mipmaps.length;ut++)F.__webglFramebuffer[it][ut]=s.createFramebuffer()}else F.__webglFramebuffer[it]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<v.mipmaps.length;it++)F.__webglFramebuffer[it]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(vt)for(let it=0,ut=K.length;it<ut;it++){let qt=n.get(K[it]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Xt(w)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){let ut=K[it];F.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[it]);let qt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),dt=S(ut.internalFormat,qt,j,ut.colorSpace,w.isXRRenderTarget===!0),Rt=kt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,dt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,F.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),mt(s.TEXTURE_CUBE_MAP,v);for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)Q(F.__webglFramebuffer[it][ut],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut);else Q(F.__webglFramebuffer[it],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let it=0,ut=K.length;it<ut;it++){let qt=K[it],j=n.get(qt);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),mt(s.TEXTURE_2D,qt),Q(F.__webglFramebuffer,w,qt,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,0),m(qt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,$.__webglTexture),mt(it,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)Q(F.__webglFramebuffer[ut],w,v,s.COLOR_ATTACHMENT0,it,ut);else Q(F.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,it,0);m(v)&&f(it),e.unbindTexture()}w.depthBuffer&&It(w)}function te(w){let v=w.textures;for(let F=0,$=v.length;F<$;F++){let K=v[F];if(m(K)){let Y=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(K).__webglTexture;e.bindTexture(Y,vt),f(Y),e.unbindTexture()}}}let Vt=[],C=[];function Oe(w){if(w.samples>0){if(Xt(w)===!1){let v=w.textures,F=w.width,$=w.height,K=s.COLOR_BUFFER_BIT,Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(w),it=v.length>1;if(it)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),it){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let qt=n.get(v[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,F,$,0,0,F,$,K,s.NEAREST),c===!0&&(Vt.length=0,C.length=0,Vt.push(s.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Vt.push(Y),C.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let qt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function kt(w){return Math.min(i.maxSamples,w.samples)}function Xt(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function re(w,v){let F=w.colorSpace,$=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Gn&&F!==Nn&&(Qt.getTransfer(F)===ae?($!==sn||K!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=J,this.rebindTextures=wt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Xt}function D0(s,t){function e(n,i=Nn){let r,o=Qt.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return s.BYTE;if(n===ah)return s.SHORT;if(n===ps)return s.UNSIGNED_SHORT;if(n===xc)return s.INT;if(n===ri)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===bs)return s.HALF_FLOAT;if(n===lh)return s.ALPHA;if(n===hh)return s.RGB;if(n===sn)return s.RGBA;if(n===uh)return s.LUMINANCE;if(n===dh)return s.LUMINANCE_ALPHA;if(n===Ui)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===Mc)return s.RED;if(n===Sc)return s.RED_INTEGER;if(n===fh)return s.RG;if(n===bc)return s.RG_INTEGER;if(n===Ec)return s.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===_a)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===ya||n===Ma||n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===Na||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Qa=class extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}},U0={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
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

}`,ja=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Fe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:N0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Le(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tc=class extends zn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null,_=new ja,m=e.getContextAttributes(),f=null,S=null,y=[],E=[],L=new Yt,R=null,T=new ve;T.layers.enable(1),T.viewport=new ee;let U=new ve;U.layers.enable(2),U.viewport=new ee;let q=[T,U],x=new Qa;x.layers.enable(1),x.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=y[X];return Q===void 0&&(Q=new ds,y[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=y[X];return Q===void 0&&(Q=new ds,y[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=y[X];return Q===void 0&&(Q=new ds,y[X]=Q),Q.getHandSpace()};function k(X){let Q=E.indexOf(X.inputSource);if(Q===-1)return;let gt=y[Q];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",V);for(let X=0;X<y.length;X++){let Q=E[X];Q!==null&&(E[X]=null,y[X].disconnect(Q))}b=null,z=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,S=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",H),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new bn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,gt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Vi:Ui,gt=m.stencil?Hi:ri);let It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(It),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new bn(u.textureWidth,u.textureHeight,{format:sn,type:Sn,depthTexture:new Ur(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(X){for(let Q=0;Q<X.removed.length;Q++){let gt=X.removed[Q],ht=E.indexOf(gt);ht>=0&&(E[ht]=null,y[ht].disconnect(gt))}for(let Q=0;Q<X.added.length;Q++){let gt=X.added[Q],ht=E.indexOf(gt);if(ht===-1){for(let wt=0;wt<y.length;wt++)if(wt>=E.length){E.push(gt),ht=wt;break}else if(E[wt]===null){E[wt]=gt,ht=wt;break}if(ht===-1)break}let It=y[ht];It&&It.connect(gt)}}let N=new A,J=new A;function W(X,Q,gt){N.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(gt.matrixWorld);let ht=N.distanceTo(J),It=Q.projectionMatrix.elements,wt=gt.projectionMatrix.elements,Ht=It[14]/(It[10]-1),te=It[14]/(It[10]+1),Vt=(It[9]+1)/It[5],C=(It[9]-1)/It[5],Oe=(It[8]-1)/It[0],kt=(wt[8]+1)/wt[0],Xt=Ht*Oe,At=Ht*kt,re=ht/(-Oe+kt),Pt=re*-Oe;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),It[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let w=Ht+re,v=te+re,F=Xt-Pt,$=At+(ht-Pt),K=Vt*te/v*w,Y=C*te/v*w;X.projectionMatrix.makePerspective(F,$,K,Y,w,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function lt(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Q=X.near,gt=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),x.near=U.near=T.near=Q,x.far=U.far=T.far=gt,(b!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,z=x.far);let ht=X.parent,It=x.cameras;lt(x,ht);for(let wt=0;wt<It.length;wt++)lt(It[wt],ht);It.length===2?W(x,T,U):x.projectionMatrix.copy(T.projectionMatrix),st(X,x,ht)};function st(X,Q,gt){gt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ms*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let mt=null;function Bt(X,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ht=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let wt=0;wt<gt.length;wt++){let Ht=gt[wt],te=null;if(p!==null)te=p.getViewport(Ht);else{let C=d.getViewSubImage(u,Ht);te=C.viewport,wt===0&&(t.setRenderTargetTextures(S,C.colorTexture,u.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(S))}let Vt=q[wt];Vt===void 0&&(Vt=new ve,Vt.layers.enable(wt),Vt.viewport=new ee,q[wt]=Vt),Vt.matrix.fromArray(Ht.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ht.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(te.x,te.y,te.width,te.height),wt===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(Vt)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){let wt=d.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,i.renderState)}}for(let gt=0;gt<y.length;gt++){let ht=E[gt],It=y[gt];ht!==null&&It!==void 0&&It.update(ht,Q,l||o)}mt&&mt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let $t=new Mh;$t.setAnimationLoop(Bt),this.setAnimationLoop=function(X){mt=X},this.dispose=function(){}}},jn=new ln,O0=new ne;function B0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,S,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ae&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ae&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),y=S.envMap,E=S.envMapRotation;y&&(m.envMap.value=y,jn.copy(E),jn.x*=-1,jn.y*=-1,jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(jn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ae&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){let E=y.program;n.uniformBlockBinding(S,E)}function l(S,y){let E=i[S.id];E===void 0&&(g(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",m));let L=y.program;n.updateUBOMapping(S,L);let R=t.render.frame;r[S.id]!==R&&(u(S),r[S.id]=R)}function h(S){let y=d();S.__bindingPointIndex=y;let E=s.createBuffer(),L=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let y=i[S.id],E=S.uniforms,L=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let R=0,T=E.length;R<T;R++){let U=Array.isArray(E[R])?E[R]:[E[R]];for(let q=0,x=U.length;q<x;q++){let b=U[q];if(p(b,R,q,L)===!0){let z=b.__offset,k=Array.isArray(b.value)?b.value:[b.value],H=0;for(let V=0;V<k.length;V++){let N=k[V],J=_(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,z+H,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,y,E,L){let R=S.value,T=y+"_"+E;if(L[T]===void 0)return typeof R=="number"||typeof R=="boolean"?L[T]=R:L[T]=R.clone(),!0;{let U=L[T];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return L[T]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(S){let y=S.uniforms,E=0,L=16;for(let T=0,U=y.length;T<U;T++){let q=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,b=q.length;x<b;x++){let z=q[x],k=Array.isArray(z.value)?z.value:[z.value];for(let H=0,V=k.length;H<V;H++){let N=k[H],J=_(N),W=E%L,lt=W%J.boundary,st=W+lt;E+=lt,st!==0&&L-st<J.storage&&(E+=L-st),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=J.storage}}}let R=E%L;return R>0&&(E+=L-R),S.__size=E,S.__cache={},this}function _(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}var Wi=class{constructor(t={}){let{canvas:e=Hu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=Bn,this.toneMappingExposure=1;let y=this,E=!1,L=0,R=0,T=null,U=-1,q=null,x=new ee,b=new ee,z=null,k=new St(0),H=0,V=e.width,N=e.height,J=1,W=null,lt=null,st=new ee(0,0,V,N),mt=new ee(0,0,V,N),Bt=!1,$t=new _s,X=!1,Q=!1,gt=new ne,ht=new ne,It=new A,wt=new ee,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function Vt(){return T===null?J:1}let C=n;function Oe(M,I){return e.getContext(M,I)}try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),C===null){let I="webgl2";if(C=Oe(I,M),C===null)throw Oe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let kt,Xt,At,re,Pt,w,v,F,$,K,Y,vt,it,ut,qt,j,dt,Rt,Ct,ft,zt,Lt,ie,P;function at(){kt=new em(C),kt.init(),Lt=new D0(C,kt),Xt=new Zp(C,kt,t,Lt),At=new P0(C),Xt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),re=new sm(C),Pt=new _0,w=new L0(C,kt,At,Pt,Xt,Lt,re),v=new Kp(y),F=new tm(y),$=new hd(C),ie=new Yp(C,$),K=new nm(C,$,re,ie),Y=new om(C,K,$,re),Ct=new rm(C,Xt,w),j=new Jp(Pt),vt=new g0(y,v,F,kt,Xt,ie,j),it=new B0(y,Pt),ut=new v0,qt=new w0(kt),Rt=new qp(y,v,F,At,Y,u,c),dt=new R0(y,Y,Xt),P=new k0(C,re,Xt,At),ft=new $p(C,kt,re),zt=new im(C,kt,re),re.programs=vt.programs,y.capabilities=Xt,y.extensions=kt,y.properties=Pt,y.renderLists=ut,y.shadowMap=dt,y.state=At,y.info=re}at();let G=new tc(y,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=kt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=kt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(V,N,!1))},this.getSize=function(M){return M.set(V,N)},this.setSize=function(M,I,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,N=I,e.width=Math.floor(M*J),e.height=Math.floor(I*J),O===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(V*J,N*J).floor()},this.setDrawingBufferSize=function(M,I,O){V=M,N=I,J=O,e.width=Math.floor(M*O),e.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(st)},this.setViewport=function(M,I,O,B){M.isVector4?st.set(M.x,M.y,M.z,M.w):st.set(M,I,O,B),At.viewport(x.copy(st).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(mt)},this.setScissor=function(M,I,O,B){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,I,O,B),At.scissor(b.copy(mt).multiplyScalar(J).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(M){At.setScissorTest(Bt=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(M=!0,I=!0,O=!0){let B=0;if(M){let D=!1;if(T!==null){let tt=T.texture.format;D=tt===Ec||tt===bc||tt===Sc}if(D){let tt=T.texture.type,ot=tt===Sn||tt===ri||tt===ps||tt===Hi||tt===vc||tt===yc,pt=Rt.getClearColor(),_t=Rt.getClearAlpha(),Et=pt.r,Tt=pt.g,yt=pt.b;ot?(p[0]=Et,p[1]=Tt,p[2]=yt,p[3]=_t,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Et,g[1]=Tt,g[2]=yt,g[3]=_t,C.clearBufferiv(C.COLOR,0,g))}else B|=C.COLOR_BUFFER_BIT}I&&(B|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),qt.dispose(),Pt.dispose(),v.dispose(),F.dispose(),Y.dispose(),ie.dispose(),P.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",zc),G.removeEventListener("sessionend",Hc),Yn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=re.autoReset,I=dt.enabled,O=dt.autoUpdate,B=dt.needsUpdate,D=dt.type;at(),re.autoReset=M,dt.enabled=I,dt.autoUpdate=O,dt.needsUpdate=B,dt.type=D}function ct(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gt(M){let I=M.target;I.removeEventListener("dispose",Gt),fe(I)}function fe(M){Ue(M),Pt.remove(M)}function Ue(M){let I=Pt.get(M).programs;I!==void 0&&(I.forEach(function(O){vt.releaseProgram(O)}),M.isShaderMaterial&&vt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,B,D,tt){I===null&&(I=Ht);let ot=D.isMesh&&D.matrixWorld.determinant()<0,pt=Fh(M,I,O,B,D);At.setMaterial(B,ot);let _t=O.index,Et=1;if(B.wireframe===!0){if(_t=K.getWireframeAttribute(O),_t===void 0)return;Et=2}let Tt=O.drawRange,yt=O.attributes.position,jt=Tt.start*Et,oe=(Tt.start+Tt.count)*Et;tt!==null&&(jt=Math.max(jt,tt.start*Et),oe=Math.min(oe,(tt.start+tt.count)*Et)),_t!==null?(jt=Math.max(jt,0),oe=Math.min(oe,_t.count)):yt!=null&&(jt=Math.max(jt,0),oe=Math.min(oe,yt.count));let he=oe-jt;if(he<0||he===1/0)return;ie.setup(D,B,pt,O,_t);let Be,Jt=ft;if(_t!==null&&(Be=$.get(_t),Jt=zt,Jt.setIndex(Be)),D.isMesh)B.wireframe===!0?(At.setLineWidth(B.wireframeLinewidth*Vt()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(D.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),At.setLineWidth(Mt*Vt()),D.isLineSegments?Jt.setMode(C.LINES):D.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else D.isPoints?Jt.setMode(C.POINTS):D.isSprite&&Jt.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Jt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Mt=D._multiDrawStarts,ye=D._multiDrawCounts,Kt=D._multiDrawCount,je=_t?$.get(_t).bytesPerElement:1,mi=Pt.get(B).currentProgram.getUniforms();for(let ke=0;ke<Kt;ke++)mi.setValue(C,"_gl_DrawID",ke),Jt.render(Mt[ke]/je,ye[ke])}else if(D.isInstancedMesh)Jt.renderInstances(jt,he,D.count);else if(O.isInstancedBufferGeometry){let Mt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ye=Math.min(O.instanceCount,Mt);Jt.renderInstances(jt,he,ye)}else Jt.render(jt,he)};function Zt(M,I,O){M.transparent===!0&&M.side===Ve&&M.forceSinglePass===!1?(M.side=Ae,M.needsUpdate=!0,Fs(M,I,O),M.side=kn,M.needsUpdate=!0,Fs(M,I,O),M.side=Ve):Fs(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),m=qt.get(O),m.init(I),S.push(m),O.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),M!==O&&M.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();let B=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let tt=D.material;if(tt)if(Array.isArray(tt))for(let ot=0;ot<tt.length;ot++){let pt=tt[ot];Zt(pt,O,D),B.add(pt)}else Zt(tt,O,D),B.add(tt)}),S.pop(),m=null,B},this.compileAsync=function(M,I,O=null){let B=this.compile(M,I,O);return new Promise(D=>{function tt(){if(B.forEach(function(ot){Pt.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){D(M);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ne=null;function fn(M){Ne&&Ne(M)}function zc(){Yn.stop()}function Hc(){Yn.start()}let Yn=new Mh;Yn.setAnimationLoop(fn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(M){Ne=M,G.setAnimationLoop(M),M===null?Yn.stop():Yn.start()},G.addEventListener("sessionstart",zc),G.addEventListener("sessionend",Hc),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,T),m=qt.get(M,S.length),m.init(I),S.push(m),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$t.setFromProjectionMatrix(ht),Q=this.localClippingEnabled,X=j.init(this.clippingPlanes,Q),_=ut.get(M,f.length),_.init(),f.push(_),G.enabled===!0&&G.isPresenting===!0){let tt=y.xr.getDepthSensingMesh();tt!==null&&_o(tt,I,-1/0,y.sortObjects)}_o(M,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(W,lt),te=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,te&&Rt.addToRenderList(_,M),this.info.render.frame++,X===!0&&j.beginShadows();let O=m.state.shadowsArray;dt.render(O,M,I),X===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=_.opaque,D=_.transmissive;if(m.setupLights(),I.isArrayCamera){let tt=I.cameras;if(D.length>0)for(let ot=0,pt=tt.length;ot<pt;ot++){let _t=tt[ot];Gc(B,D,M,_t)}te&&Rt.render(M);for(let ot=0,pt=tt.length;ot<pt;ot++){let _t=tt[ot];Vc(_,M,_t,_t.viewport)}}else D.length>0&&Gc(B,D,M,I),te&&Rt.render(M),Vc(_,M,I);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(y,M,I),ie.resetDefaultState(),U=-1,q=null,S.pop(),S.length>0?(m=S[S.length-1],X===!0&&j.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function _o(M,I,O,B){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$t.intersectsSprite(M)){B&&wt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);let ot=Y.update(M),pt=M.material;pt.visible&&_.push(M,ot,pt,O,wt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$t.intersectsObject(M))){let ot=Y.update(M),pt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),wt.copy(M.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),wt.copy(ot.boundingSphere.center)),wt.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(pt)){let _t=ot.groups;for(let Et=0,Tt=_t.length;Et<Tt;Et++){let yt=_t[Et],jt=pt[yt.materialIndex];jt&&jt.visible&&_.push(M,ot,jt,O,wt.z,yt)}}else pt.visible&&_.push(M,ot,pt,O,wt.z,null)}}let tt=M.children;for(let ot=0,pt=tt.length;ot<pt;ot++)_o(tt[ot],I,O,B)}function Vc(M,I,O,B){let D=M.opaque,tt=M.transmissive,ot=M.transparent;m.setupLightsView(O),X===!0&&j.setGlobalState(y.clippingPlanes,O),B&&At.viewport(x.copy(B)),D.length>0&&Ns(D,I,O),tt.length>0&&Ns(tt,I,O),ot.length>0&&Ns(ot,I,O),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Gc(M,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new bn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?bs:Sn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let tt=m.state.transmissionRenderTarget[B.id],ot=B.viewport||x;tt.setSize(ot.z,ot.w);let pt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(k),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),te&&Rt.render(O);let _t=y.toneMapping;y.toneMapping=Bn;let Et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),X===!0&&j.setGlobalState(y.clippingPlanes,B),Ns(M,O,B),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let yt=0,jt=I.length;yt<jt;yt++){let oe=I[yt],he=oe.object,Be=oe.geometry,Jt=oe.material,Mt=oe.group;if(Jt.side===Ve&&he.layers.test(B.layers)){let ye=Jt.side;Jt.side=Ae,Jt.needsUpdate=!0,Wc(he,O,B,Be,Jt,Mt),Jt.side=ye,Jt.needsUpdate=!0,Tt=!0}}Tt===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}y.setRenderTarget(pt),y.setClearColor(k,H),Et!==void 0&&(B.viewport=Et),y.toneMapping=_t}function Ns(M,I,O){let B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,tt=M.length;D<tt;D++){let ot=M[D],pt=ot.object,_t=ot.geometry,Et=B===null?ot.material:B,Tt=ot.group;pt.layers.test(O.layers)&&Wc(pt,I,O,_t,Et,Tt)}}function Wc(M,I,O,B,D,tt){M.onBeforeRender(y,I,O,B,D,tt),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(y,I,O,B,M,tt),D.transparent===!0&&D.side===Ve&&D.forceSinglePass===!1?(D.side=Ae,D.needsUpdate=!0,y.renderBufferDirect(O,I,B,D,M,tt),D.side=kn,D.needsUpdate=!0,y.renderBufferDirect(O,I,B,D,M,tt),D.side=Ve):y.renderBufferDirect(O,I,B,D,M,tt),M.onAfterRender(y,I,O,B,D,tt)}function Fs(M,I,O){I.isScene!==!0&&(I=Ht);let B=Pt.get(M),D=m.state.lights,tt=m.state.shadowsArray,ot=D.state.version,pt=vt.getParameters(M,D.state,tt,I,O),_t=vt.getProgramCacheKey(pt),Et=B.programs;B.environment=M.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Et===void 0&&(M.addEventListener("dispose",Gt),Et=new Map,B.programs=Et);let Tt=Et.get(_t);if(Tt!==void 0){if(B.currentProgram===Tt&&B.lightsStateVersion===ot)return qc(M,pt),Tt}else pt.uniforms=vt.getUniforms(M),M.onBeforeCompile(pt,y),Tt=vt.acquireProgram(pt,_t),Et.set(_t,Tt),B.uniforms=pt.uniforms;let yt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=j.uniform),qc(M,pt),B.needsLights=Bh(M),B.lightsStateVersion=ot,B.needsLights&&(yt.ambientLightColor.value=D.state.ambient,yt.lightProbe.value=D.state.probe,yt.directionalLights.value=D.state.directional,yt.directionalLightShadows.value=D.state.directionalShadow,yt.spotLights.value=D.state.spot,yt.spotLightShadows.value=D.state.spotShadow,yt.rectAreaLights.value=D.state.rectArea,yt.ltc_1.value=D.state.rectAreaLTC1,yt.ltc_2.value=D.state.rectAreaLTC2,yt.pointLights.value=D.state.point,yt.pointLightShadows.value=D.state.pointShadow,yt.hemisphereLights.value=D.state.hemi,yt.directionalShadowMap.value=D.state.directionalShadowMap,yt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,yt.spotShadowMap.value=D.state.spotShadowMap,yt.spotLightMatrix.value=D.state.spotLightMatrix,yt.spotLightMap.value=D.state.spotLightMap,yt.pointShadowMap.value=D.state.pointShadowMap,yt.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Tt,B.uniformsList=null,Tt}function Xc(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=Oi.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function qc(M,I){let O=Pt.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Fh(M,I,O,B,D){I.isScene!==!0&&(I=Ht),w.resetTextureUnits();let tt=I.fog,ot=B.isMeshStandardMaterial?I.environment:null,pt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gn,_t=(B.isMeshStandardMaterial?F:v).get(B.envMap||ot),Et=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Tt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!O.morphAttributes.position,jt=!!O.morphAttributes.normal,oe=!!O.morphAttributes.color,he=Bn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(he=y.toneMapping);let Be=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Jt=Be!==void 0?Be.length:0,Mt=Pt.get(B),ye=m.state.lights;if(X===!0&&(Q===!0||M!==q)){let $e=M===q&&B.id===U;j.setState(B,M,$e)}let Kt=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==ye.state.version||Mt.outputColorSpace!==pt||D.isBatchedMesh&&Mt.batching===!1||!D.isBatchedMesh&&Mt.batching===!0||D.isBatchedMesh&&Mt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Mt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Mt.instancing===!1||!D.isInstancedMesh&&Mt.instancing===!0||D.isSkinnedMesh&&Mt.skinning===!1||!D.isSkinnedMesh&&Mt.skinning===!0||D.isInstancedMesh&&Mt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Mt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Mt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Mt.instancingMorph===!1&&D.morphTexture!==null||Mt.envMap!==_t||B.fog===!0&&Mt.fog!==tt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==j.numPlanes||Mt.numIntersection!==j.numIntersection)||Mt.vertexAlphas!==Et||Mt.vertexTangents!==Tt||Mt.morphTargets!==yt||Mt.morphNormals!==jt||Mt.morphColors!==oe||Mt.toneMapping!==he||Mt.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,Mt.__version=B.version);let je=Mt.currentProgram;Kt===!0&&(je=Fs(B,I,D));let mi=!1,ke=!1,xo=!1,de=je.getUniforms(),Rn=Mt.uniforms;if(At.useProgram(je.program)&&(mi=!0,ke=!0,xo=!0),B.id!==U&&(U=B.id,ke=!0),mi||q!==M){Xt.reverseDepthBuffer?(gt.copy(M.projectionMatrix),Gu(gt),Wu(gt),de.setValue(C,"projectionMatrix",gt)):de.setValue(C,"projectionMatrix",M.projectionMatrix),de.setValue(C,"viewMatrix",M.matrixWorldInverse);let $e=de.map.cameraPosition;$e!==void 0&&$e.setValue(C,It.setFromMatrixPosition(M.matrixWorld)),Xt.logarithmicDepthBuffer&&de.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&de.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,ke=!0,xo=!0)}if(D.isSkinnedMesh){de.setOptional(C,D,"bindMatrix"),de.setOptional(C,D,"bindMatrixInverse");let $e=D.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),de.setValue(C,"boneTexture",$e.boneTexture,w))}D.isBatchedMesh&&(de.setOptional(C,D,"batchingTexture"),de.setValue(C,"batchingTexture",D._matricesTexture,w),de.setOptional(C,D,"batchingIdTexture"),de.setValue(C,"batchingIdTexture",D._indirectTexture,w),de.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&de.setValue(C,"batchingColorTexture",D._colorsTexture,w));let vo=O.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0)&&Ct.update(D,O,je),(ke||Mt.receiveShadow!==D.receiveShadow)&&(Mt.receiveShadow=D.receiveShadow,de.setValue(C,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Rn.envMap.value=_t,Rn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Rn.envMapIntensity.value=I.environmentIntensity),ke&&(de.setValue(C,"toneMappingExposure",y.toneMappingExposure),Mt.needsLights&&Oh(Rn,xo),tt&&B.fog===!0&&it.refreshFogUniforms(Rn,tt),it.refreshMaterialUniforms(Rn,B,J,N,m.state.transmissionRenderTarget[M.id]),Oi.upload(C,Xc(Mt),Rn,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Oi.upload(C,Xc(Mt),Rn,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&de.setValue(C,"center",D.center),de.setValue(C,"modelViewMatrix",D.modelViewMatrix),de.setValue(C,"normalMatrix",D.normalMatrix),de.setValue(C,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let $e=B.uniformsGroups;for(let yo=0,kh=$e.length;yo<kh;yo++){let Yc=$e[yo];P.update(Yc,je),P.bind(Yc,je)}}return je}function Oh(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Bh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,I,O){Pt.get(M.texture).__webglTexture=I,Pt.get(M.depthTexture).__webglTexture=O;let B=Pt.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){let O=Pt.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){T=M,L=I,R=O;let B=!0,D=null,tt=!1,ot=!1;if(M){let _t=Pt.get(M);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(_t.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(_t.__hasExternalTextures)w.rebindTextures(M,Pt.get(M.texture).__webglTexture,Pt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let yt=M.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&Pt.has(yt)&&(M.width!==yt.image.width||M.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ot=!0);let Tt=Pt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?D=Tt[I][O]:D=Tt[I],tt=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?D=Pt.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?D=Tt[O]:D=Tt,x.copy(M.viewport),b.copy(M.scissor),z=M.scissorTest}else x.copy(st).multiplyScalar(J).floor(),b.copy(mt).multiplyScalar(J).floor(),z=Bt;if(At.bindFramebuffer(C.FRAMEBUFFER,D)&&B&&At.drawBuffers(M,D),At.viewport(x),At.scissor(b),At.setScissorTest(z),tt){let _t=Pt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,O)}else if(ot){let _t=Pt.get(M.texture),Et=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.__webglTexture,O||0,Et)}U=-1},this.readRenderTargetPixels=function(M,I,O,B,D,tt,ot){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){At.bindFramebuffer(C.FRAMEBUFFER,pt);try{let _t=M.texture,Et=_t.format,Tt=_t.type;if(!Xt.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-B&&O>=0&&O<=M.height-D&&C.readPixels(I,O,B,D,Lt.convert(Et),Lt.convert(Tt),tt)}finally{let _t=T!==null?Pt.get(T).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(M,I,O,B,D,tt,ot){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){let _t=M.texture,Et=_t.format,Tt=_t.type;if(!Xt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-B&&O>=0&&O<=M.height-D){At.bindFramebuffer(C.FRAMEBUFFER,pt);let yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),C.readPixels(I,O,B,D,Lt.convert(Et),Lt.convert(Tt),0);let jt=T!==null?Pt.get(T).__webglFramebuffer:null;At.bindFramebuffer(C.FRAMEBUFFER,jt);let oe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Vu(C,oe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(yt),C.deleteSync(oe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,O=0){M.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);let B=Math.pow(2,-O),D=Math.floor(M.image.width*B),tt=Math.floor(M.image.height*B),ot=I!==null?I.x:0,pt=I!==null?I.y:0;w.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,ot,pt,D,tt),At.unbindTexture()},this.copyTextureToTexture=function(M,I,O=null,B=null,D=0){M.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],I=arguments[2],D=arguments[3]||0,O=null);let tt,ot,pt,_t,Et,Tt;O!==null?(tt=O.max.x-O.min.x,ot=O.max.y-O.min.y,pt=O.min.x,_t=O.min.y):(tt=M.image.width,ot=M.image.height,pt=0,_t=0),B!==null?(Et=B.x,Tt=B.y):(Et=0,Tt=0);let yt=Lt.convert(I.format),jt=Lt.convert(I.type);w.setTexture2D(I,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let oe=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Be=C.getParameter(C.UNPACK_SKIP_PIXELS),Jt=C.getParameter(C.UNPACK_SKIP_ROWS),Mt=C.getParameter(C.UNPACK_SKIP_IMAGES),ye=M.isCompressedTexture?M.mipmaps[D]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ye.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ye.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,_t),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Et,Tt,tt,ot,yt,jt,ye.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Et,Tt,ye.width,ye.height,yt,ye.data):C.texSubImage2D(C.TEXTURE_2D,D,Et,Tt,tt,ot,yt,jt,ye),C.pixelStorei(C.UNPACK_ROW_LENGTH,oe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Mt),D===0&&I.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O=null,B=null,D=0){M.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,M=arguments[2],I=arguments[3],D=arguments[4]||0);let tt,ot,pt,_t,Et,Tt,yt,jt,oe,he=M.isCompressedTexture?M.mipmaps[D]:M.image;O!==null?(tt=O.max.x-O.min.x,ot=O.max.y-O.min.y,pt=O.max.z-O.min.z,_t=O.min.x,Et=O.min.y,Tt=O.min.z):(tt=he.width,ot=he.height,pt=he.depth,_t=0,Et=0,Tt=0),B!==null?(yt=B.x,jt=B.y,oe=B.z):(yt=0,jt=0,oe=0);let Be=Lt.convert(I.format),Jt=Lt.convert(I.type),Mt;if(I.isData3DTexture)w.setTexture3D(I,0),Mt=C.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)w.setTexture2DArray(I,0),Mt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let ye=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),je=C.getParameter(C.UNPACK_SKIP_PIXELS),mi=C.getParameter(C.UNPACK_SKIP_ROWS),ke=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,he.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,Et),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Mt,D,yt,jt,oe,tt,ot,pt,Be,Jt,he.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Mt,D,yt,jt,oe,tt,ot,pt,Be,he.data):C.texSubImage3D(Mt,D,yt,jt,oe,tt,ot,pt,Be,Jt,he),C.pixelStorei(C.UNPACK_ROW_LENGTH,ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,je),C.pixelStorei(C.UNPACK_SKIP_ROWS,mi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ke),D===0&&I.generateMipmaps&&C.generateMipmap(Mt),At.unbindTexture()},this.initRenderTarget=function(M){Pt.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),At.unbindTexture()},this.resetState=function(){L=0,R=0,T=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===wc?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Yr?"display-p3":"srgb"}};var Nr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xi=class extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ec=class extends Fe{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Te,h=Te,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Pi=new ne,Xl=new ne,sr=[],ql=new En,z0=new ne,os=new bt,as=new wn,rn=class extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,z0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),ql.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(ql)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),as.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pi),Xl.multiplyMatrices(n,Pi),os.matrixWorld=Xl,os.raycast(t,sr);for(let o=0,a=sr.length;o<a;o++){let c=sr[o];c.instanceId=r,c.object=this,e.push(c)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ec(new Float32Array(i*this.count),i,this.count,Mc,cn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var xs=class extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Or=new A,Br=new A,Yl=new ne,cs=new gs,rr=new wn,Jo=new A,$l=new A,nc=class extends le{constructor(t=new Me,e=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Or.fromBufferAttribute(e,i-1),Br.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Or.distanceTo(Br);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Yl.copy(i).invert(),cs.copy(t.ray).applyMatrix4(Yl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=h.getX(_),S=h.getX(_+1),y=or(this,t,cs,c,f,S);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=or(this,t,cs,c,_,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=or(this,t,cs,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=or(this,t,cs,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function or(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Or.fromBufferAttribute(o,i),Br.fromBufferAttribute(o,r),e.distanceSqToSegment(Or,Br,Jo,$l)>n)return;Jo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Jo);if(!(c<t.near||c>t.far))return{distance:c,point:$l.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Zl=new A,Jl=new A,kr=class extends nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Zl.fromBufferAttribute(e,i),Jl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zl.distanceTo(Jl);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vs=class extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kl=new ne,ic=new gs,ar=new wn,cr=new A,zr=class extends le{constructor(t=new Me,e=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(i),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Kl.copy(i).invert(),ic.copy(t.ray).applyMatrix4(Kl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=u,_=p;g<_;g++){let m=l.getX(g);cr.fromBufferAttribute(d,m),Ql(cr,m,c,i,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)cr.fromBufferAttribute(d,g),Ql(cr,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ql(s,t,e,n,i,r,o){let a=ic.distanceSqToPoint(s);if(a<e){let c=new A;ic.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vn=class extends Fe{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Se=class s extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,_=[],m=n/2,f=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(p,2));function S(){let E=new A,L=new A,R=0,T=(e-t)/n;for(let U=0;U<=r;U++){let q=[],x=U/r,b=x*(e-t)+t;for(let z=0;z<=i;z++){let k=z/i,H=k*c+a,V=Math.sin(H),N=Math.cos(H);L.x=b*V,L.y=-x*n+m,L.z=b*N,d.push(L.x,L.y,L.z),E.set(V,T,N).normalize(),u.push(E.x,E.y,E.z),p.push(k,1-x),q.push(g++)}_.push(q)}for(let U=0;U<i;U++)for(let q=0;q<r;q++){let x=_[q][U],b=_[q+1][U],z=_[q+1][U+1],k=_[q][U+1];t>0&&(h.push(x,b,k),R+=3),e>0&&(h.push(b,z,k),R+=3)}l.addGroup(f,R,0),f+=R}function y(E){let L=g,R=new Yt,T=new A,U=0,q=E===!0?t:e,x=E===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*x,0),u.push(0,x,0),p.push(.5,.5),g++;let b=g;for(let z=0;z<=i;z++){let H=z/i*c+a,V=Math.cos(H),N=Math.sin(H);T.x=q*N,T.y=m*x,T.z=q*V,d.push(T.x,T.y,T.z),u.push(0,x,0),R.x=V*.5+.5,R.y=N*.5*x+.5,p.push(R.x,R.y),g++}for(let z=0;z<i;z++){let k=L+z,H=b+z;E===!0?h.push(H,H+1,k):h.push(H+1,H,k),U+=3}l.addGroup(f,U,E===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hr=class s extends Se{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var lr=new A,hr=new A,Ko=new A,ur=new Fn,Vr=class extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Ni*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:m,c:f}=ur;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),ur.getNormal(Ko),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){let y=(S+1)%3,E=d[S],L=d[y],R=ur[h[S]],T=ur[h[y]],U=`${E}_${L}`,q=`${L}_${E}`;q in u&&u[q]?(Ko.dot(u[q].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(T.x,T.y,T.z)),u[q]=null):U in u||(u[U]={index0:l[S],index1:l[y],normal:Ko.clone()})}}for(let g in u)if(u[g]){let{index0:_,index1:m}=u[g];lr.fromBufferAttribute(a,_),hr.fromBufferAttribute(a,m),p.push(lr.x,lr.y,lr.z),p.push(hr.x,hr.y,hr.z)}this.setAttribute("position",new se(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var qi=class s extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new A,u=new A,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let S=[],y=f/n,E=0;f===0&&o===0?E=.5/e:f===n&&c===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){let R=L/e;d.x=-t*Math.cos(i+R*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+R*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(R+E,1-y),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let y=h[f][S+1],E=h[f][S],L=h[f+1][S],R=h[f+1][S+1];(f!==0||o>0)&&p.push(y,E,R),(f!==n-1||c<Math.PI)&&p.push(E,L,R)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ys=class s extends Me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new A,d=new A,u=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,S=(i+1)*p+g;o.push(_,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Nt=class extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function H0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Yi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sc=class extends Yi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:r=t,a=2*e-n;break;case tl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case jc:o=t,c=2*n-e;break;case tl:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,E=p*m-p*_;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+S*o[l+L]+y*o[c+L]+E*o[d+L];return r}},rc=class extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},oc=class extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Ba:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&H0(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===So,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Ba;var oi=class extends on{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=vr;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends on{};ac.prototype.ValueTypeName="color";var cc=class extends on{};cc.prototype.ValueTypeName="number";var lc=class extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gr=class extends on{InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends on{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=vr;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends on{};hc.prototype.ValueTypeName="vector";var uc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},V0=new uc,dc=class{constructor(t){this.manager=t!==void 0?t:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms=class extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$i=class extends Ms{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qo=new ne,jl=new A,th=new A,Wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(jl),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var eh=new ne,ls=new A,jo=new A,fc=class extends Wr{constructor(){super(new ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),jo.copy(n.position),jo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-ls.x,-ls.y,-ls.z),eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh)}},Zi=class extends Ms{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pc=class extends Wr{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hn=class extends Ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function nh(){return performance.now()}var Rc="\\[\\]\\.:\\/",G0=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",W0="[^"+Rc.replace("\\.","")+"]",X0=/((?:WC+[\/:])*)/.source.replace("WC",Cc),q0=/(WCOD+)?/.source.replace("WCOD",W0),Y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Z0=new RegExp("^"+X0+q0+Y0+$0+"$"),J0=["material","materials","bones","map"],mc=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(t){let e=Z0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);J0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=mc;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);var Zr=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.dragDX=0,this.dragDY=0,this.wheel=0,this.dragging=!1,this.locked=!1,this.lockPending=!1,this.lastUnlock=0,this.lockTime=0,this.onLockChange=null,window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")||((["Space","Tab","Enter"].includes(e.code)||e.code.startsWith("Arrow"))&&e.preventDefault(),this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code))}),window.addEventListener("keyup",e=>{(e.code==="Space"||e.code==="Enter")&&e.preventDefault(),this.down.delete(e.code)}),window.addEventListener("blur",()=>{this.down.clear(),this.dragging=!1}),document.addEventListener("click",e=>{let n=e.target.closest?.("button");n&&n.blur()}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("pointerdown",e=>{this.locked||(this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY,t.setPointerCapture?.(e.pointerId))}),window.addEventListener("pointermove",e=>{this.locked||this.dragging&&(this.dragDX+=e.clientX-this.lastX,this.dragDY+=e.clientY-this.lastY,this.lastX=e.clientX,this.lastY=e.clientY)}),document.addEventListener("mousemove",e=>{this.locked&&(performance.now()-this.lockTime<150||Math.abs(e.movementX)>300||Math.abs(e.movementY)>300||(this.dragDX+=e.movementX*.5,this.dragDY+=e.movementY*.5))}),window.addEventListener("pointerup",()=>{this.dragging=!1}),window.addEventListener("wheel",e=>{(this.locked||e.target===t)&&(e.preventDefault(),this.wheel+=Math.sign(e.deltaY))},{passive:!1}),document.addEventListener("pointerlockchange",()=>{let e=this.locked;this.locked=document.pointerLockElement===t,this.lockPending=!1,e&&!this.locked&&(this.lastUnlock=performance.now()),!e&&this.locked&&(this.lockTime=performance.now()),this.dragging=!1,this.dragDX=this.dragDY=0,this.onLockChange?.(this.locked)}),document.addEventListener("pointerlockerror",()=>{this.lockPending=!1})}get lockSupported(){return"requestPointerLock"in this.canvas}lock(){if(!(this.locked||this.lockPending||!this.lockSupported)){this.lockPending=!0;try{let t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>{this.lockPending=!1})}catch{this.lockPending=!1}})}catch{this.lockPending=!1}setTimeout(()=>{this.lockPending=!1},1200)}}unlock(){this.locked&&document.exitPointerLock()}isDown(...t){return t.some(e=>this.down.has(e))}wasPressed(...t){return t.some(e=>this.pressed.has(e))}consumeDrag(){let t=[this.dragDX,this.dragDY];return this.dragDX=0,this.dragDY=0,t}consumeWheel(){let t=this.wheel;return this.wheel=0,t}endFrame(){this.pressed.clear()}};var be=s=>440*Math.pow(2,(s-69)/12),Jr=class{constructor(){this.ctx=null,this.musicVol=.5,this.sfxVol=.7,this.musicOn=!1}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e).connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=this.musicVol*.55;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,this.musicBus.connect(n).connect(this.master);let i=this.ctx.createDelay();i.delayTime.value=.33;let r=this.ctx.createGain();r.gain.value=.22;let o=this.ctx.createGain();o.gain.value=.25,n.connect(i),i.connect(r).connect(i),i.connect(o).connect(this.master),this.noiseBuf=this.ctx.createBuffer(1,this.ctx.sampleRate*.5,this.ctx.sampleRate);let a=this.noiseBuf.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1}setMusicVolume(t){this.musicVol=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t*.55,this.ctx.currentTime,.1)}setSfxVolume(t){this.sfxVol=t,this.sfxBus&&this.sfxBus.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}tone(t,e,n,{type:i="sine",vol:r=.3,slideTo:o=null,attack:a=.005,bus:c=this.sfxBus}={}){let l=this.ctx,h=l.createOscillator(),d=l.createGain();h.type=i,h.frequency.setValueAtTime(t,e),o&&h.frequency.exponentialRampToValueAtTime(o,e+n),d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(r,e+a),d.gain.exponentialRampToValueAtTime(1e-4,e+n),h.connect(d).connect(c),h.start(e),h.stop(e+n+.02)}noise(t,e,{vol:n=.2,freq:i=1200,q:r=1,type:o="bandpass"}={}){let a=this.ctx,c=a.createBufferSource();c.buffer=this.noiseBuf;let l=a.createBiquadFilter();l.type=o,l.frequency.value=i,l.Q.value=r;let h=a.createGain();h.gain.setValueAtTime(n,t),h.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(l).connect(h).connect(this.sfxBus),c.start(t),c.stop(t+e+.02)}play(t){if(!this.ctx)return;let e=this.ctx.currentTime;switch(t){case"jump":this.tone(320,e,.16,{type:"square",vol:.09,slideTo:640});break;case"land":this.noise(e,.08,{vol:.12,freq:400});break;case"step":this.noise(e,.05,{vol:.045,freq:700+Math.random()*300,q:2});break;case"coin":this.tone(be(83),e,.09,{type:"square",vol:.08}),this.tone(be(88),e+.07,.28,{type:"square",vol:.08}),this.tone(be(88),e+.07,.3,{type:"sine",vol:.12});break;case"talk":this.tone(660,e,.07,{type:"triangle",vol:.2,slideTo:990}),this.tone(880,e+.06,.09,{type:"triangle",vol:.15});break;case"blip":this.tone(500+Math.random()*300,e,.04,{type:"square",vol:.03});break;case"click":this.tone(700,e,.05,{type:"triangle",vol:.18,slideTo:1e3});break;case"hover":this.tone(1200,e,.03,{type:"sine",vol:.05});break;case"checkpoint":[72,76,79,84].forEach((n,i)=>this.tone(be(n),e+i*.07,.25,{type:"triangle",vol:.18}));break;case"finish":[72,76,79,84,79,84,88].forEach((n,i)=>this.tone(be(n),e+i*.1,.35,{type:"square",vol:.07})),[60,64,67].forEach(n=>this.tone(be(n),e+.6,.9,{type:"triangle",vol:.12}));break;case"levelup":[67,72,76,79,84].forEach((n,i)=>this.tone(be(n),e+i*.08,.4,{type:"triangle",vol:.16}));break;case"death":this.tone(420,e,.35,{type:"sawtooth",vol:.09,slideTo:90}),this.noise(e,.25,{vol:.1,freq:300});break;case"lava":this.noise(e,.4,{vol:.2,freq:900,type:"highpass"}),this.tone(300,e,.35,{type:"sawtooth",vol:.08,slideTo:60});break;case"buy":this.tone(be(76),e,.1,{type:"square",vol:.07}),this.tone(be(81),e+.08,.1,{type:"square",vol:.07}),this.tone(be(88),e+.16,.3,{type:"square",vol:.07});break;case"error":this.tone(220,e,.12,{type:"square",vol:.07}),this.tone(180,e+.1,.18,{type:"square",vol:.07});break;case"vanish":this.tone(900,e,.2,{type:"sine",vol:.08,slideTo:300});break;case"equip":this.tone(be(79),e,.08,{type:"triangle",vol:.16}),this.tone(be(86),e+.06,.14,{type:"triangle",vol:.16});break}}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0,this.bpm=112,this.step=0,this.nextTime=this.ctx.currentTime+.1;let t=60/this.bpm/2,e=[[48,55,64,67],[43,55,62,67],[45,52,60,64],[41,53,60,65]],n=[76,null,79,76,74,null,72,null,74,null,76,null,79,null,null,null,74,null,76,74,71,null,67,null,71,null,74,null,76,null,null,null,72,null,76,72,69,null,72,null,76,null,79,null,81,null,79,null,77,null,76,null,74,null,72,null,74,null,72,null,72,null,null,null],i=()=>{if(this.musicOn){for(;this.nextTime<this.ctx.currentTime+.25;){let r=this.step%64,o=e[Math.floor(r/16)],a=this.nextTime;r%4===0&&this.tone(be(o[0]),a,t*1.8,{type:"triangle",vol:.22,bus:this.musicBus}),r%4===2&&this.tone(be(o[1]-12),a,t*.9,{type:"triangle",vol:.12,bus:this.musicBus}),r%4===2&&o.slice(1).forEach(h=>this.tone(be(h),a,t*.8,{type:"sine",vol:.035,bus:this.musicBus}));let c=Math.floor(this.step/64)%2,l=n[r];l&&c===0&&this.tone(be(l),a,t*1.6,{type:"square",vol:.035,bus:this.musicBus}),l&&c===1&&r%2===0&&this.tone(be(l+12),a,t*.6,{type:"sine",vol:.04,bus:this.musicBus}),r%8===0&&this.tone(140,a,.12,{type:"sine",vol:.18,slideTo:50,bus:this.musicBus}),r%8===4&&this.noiseMusic(a,.09,.05,2500),r%2===1&&this.noiseMusic(a,.03,.015,8e3),this.nextTime+=t,this.step++}this.musicTimer=setTimeout(i,60)}};i()}noiseMusic(t,e,n,i){let r=this.ctx,o=r.createBufferSource();o.buffer=this.noiseBuf;let a=r.createBiquadFilter();a.type="highpass",a.frequency.value=i;let c=r.createGain();c.gain.setValueAtTime(n,t),c.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(a).connect(c).connect(this.musicBus),o.start(t),o.stop(t+e+.02)}stopMusic(){this.musicOn=!1,clearTimeout(this.musicTimer)}};var Kr=class{constructor(t,e){this.camera=t,this.col=e,this.yaw=0,this.pitch=.32,this.distance=13,this.targetDistance=13,this.currentDist=13,this.focus=new A,this.sensitivity=1,this.invertY=!1}snap(t){this.focus.copy(t),this.currentDist=this.targetDistance,this.apply(1)}update(t,e,n){let[i,r]=e.consumeDrag(),o=.005*this.sensitivity;this.yaw-=i*o,this.pitch+=r*o*(this.invertY?-1:1),this.pitch=ci.clamp(this.pitch,-.5,1.35);let a=e.consumeWheel();a&&(this.targetDistance=ci.clamp(this.targetDistance+a*1.6,4,32)),this.distance+=(this.targetDistance-this.distance)*(1-Math.exp(-10*t));let c=1-Math.exp(-14*t);this.focus.x+=(n.x-this.focus.x)*c,this.focus.z+=(n.z-this.focus.z)*c,this.focus.y+=(n.y-this.focus.y)*(1-Math.exp(-8*t)),this.apply(t)}apply(t){let e=Math.cos(this.pitch),n=new A(Math.sin(this.yaw)*e,Math.sin(this.pitch),Math.cos(this.yaw)*e),i=this.col.raycast(this.focus.x,this.focus.y,this.focus.z,n.x,n.y,n.z,this.distance),r=Math.max(1.5,i-.4);r<this.currentDist?this.currentDist=r:this.currentDist+=(r-this.currentDist)*(1-Math.exp(-4*t)),this.camera.position.copy(this.focus).addScaledVector(n,this.currentDist),this.camera.position.y<-60&&(this.camera.position.y=-60),this.camera.lookAt(this.focus)}};var Qr=["#FFDCB5","#F5C99B","#EAB98A","#D69E6F","#C68642","#A86B3C","#8D5524","#6B3E1E","#4A2A14","#F8D25C","#B8E0F5","#C9F2C1"],Qi=["#E53935","#FF7043","#FFB300","#FDD835","#7CB342","#2E9E57","#00ACC1","#1E88E5","#3949AB","#5E35B1","#8E24AA","#D81B60","#F48FB1","#FFFFFF","#B0BEC5","#546E7A","#37474F","#212121","#6D4C41","#A1887F"],jr=["#2B1B12","#4E342E","#8D6E63","#D7A35E","#F6E27F","#E8E8E8","#C62828","#FF7043","#EC407A","#7E57C2","#29B6F6","#43A047"],li=[{id:"smile",name:"Classic Smile",price:0,level:1},{id:"grin",name:"Big Grin",price:0,level:1},{id:"happy",name:"Joyful",price:0,level:1},{id:"wink",name:"Winky",price:25,level:1},{id:"cool",name:"Shades",price:40,level:2},{id:"surprised",name:"Gasp",price:30,level:1},{id:"determined",name:"Determined",price:50,level:3},{id:"sleepy",name:"Sleepy",price:35,level:2},{id:"silly",name:"Silly",price:60,level:4},{id:"star",name:"Starstruck",price:120,level:5}],hi=[{id:"none",name:"Bald",price:0,level:1},{id:"short",name:"Short Cut",price:0,level:1},{id:"spiky",name:"Spiky",price:0,level:1},{id:"long",name:"Long Hair",price:0,level:1},{id:"bob",name:"Bob",price:30,level:1},{id:"ponytail",name:"Ponytail",price:40,level:2},{id:"mohawk",name:"Mohawk",price:60,level:3},{id:"curly",name:"Curly",price:50,level:2},{id:"buns",name:"Space Buns",price:80,level:4}],ui=[{id:"none",name:"No Hat",price:0,level:1},{id:"cap",name:"Baseball Cap",price:0,level:1},{id:"beanie",name:"Cozy Beanie",price:30,level:1},{id:"tophat",name:"Top Hat",price:60,level:2},{id:"cowboy",name:"Ranch Hat",price:75,level:3},{id:"headphones",name:"Headphones",price:90,level:3},{id:"cone",name:"Traffic Cone",price:50,level:2},{id:"crown",name:"Golden Crown",price:250,level:6},{id:"halo",name:"Halo",price:300,level:8}],di=[{id:"none",name:"Nothing",price:0,level:1},{id:"backpack",name:"Backpack",price:0,level:1},{id:"glasses",name:"Nerd Glasses",price:25,level:1},{id:"scarf",name:"Scarf",price:40,level:2},{id:"cape",name:"Hero Cape",price:120,level:4},{id:"sword",name:"Foam Sword",price:90,level:3},{id:"wings",name:"Angel Wings",price:220,level:7}],Ke=[{id:"speed",name:"Speed Coil",desc:"Run 40% faster",price:80,level:2,color:"#29B6F6",key:"1"},{id:"gravity",name:"Gravity Coil",desc:"Jump way higher",price:150,level:4,color:"#AB47BC",key:"2"}],fi={face:li,hair:hi,hat:ui,accessory:di},Es={skin:"#F5C99B",shirt:"#1E88E5",pants:"#37474F",hair:"short",hairColor:"#4E342E",face:"smile",hat:"none",accessory:"none"};function Pc(s,t){return s==="gear"?Ke.find(e=>e.id===t):fi[s]?.find(e=>e.id===t)}var Ic="blockverse.profile.v1",K0={musicVolume:.45,sfxVolume:.75,sensitivity:1,fov:70,shadows:!0,quality:"high",invertY:!1,showFps:!1};function to(){return{name:"Blocky"+Math.floor(1e3+Math.random()*9e3),level:1,xp:0,coins:0,avatar:{...Es},owned:[],gear:null,bestTime:null,stats:{coinsCollected:0,obbyCompletions:0,npcsMet:[],deaths:0,playSeconds:0},settings:{...K0}}}function Th(){try{let s=localStorage.getItem(Ic);if(!s)return to();let t=JSON.parse(s),e=to();return{...e,...t,avatar:{...e.avatar,...t.avatar||{}},stats:{...e.stats,...t.stats||{}},settings:{...e.settings,...t.settings||{}},owned:Array.isArray(t.owned)?t.owned:[]}}catch{return to()}}function Ah(s){try{localStorage.setItem(Ic,JSON.stringify(s))}catch{}}function Rh(){try{localStorage.removeItem(Ic)}catch{}return to()}var pi=2,eo=.35,no=class{constructor(){this.pos=[],this.nrm=[],this.uv=[],this.col=[],this.idx=[]}get vcount(){return this.pos.length/3}toGeometry(){let t=new Me;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("normal",new se(this.nrm,3)),t.setAttribute("uv",new se(this.uv,2)),t.setAttribute("color",new se(this.col,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t}},ws=new St,ji=class{constructor(){this.studs=new no,this.smooth=new no}addBox(t,e,n,i,r,o,a,c={}){let{studs:l=!1,rot:h=0,shade:d=.78,faces:u={},topColor:p=null,jitter:g=0}=c,_=Math.cos(h),m=Math.sin(h),f=i/2,S=r/2,y=o/2;ws.set(a),g&&ws.offsetHSL(0,0,(Math.random()-.5)*g);let E=[ws.r,ws.g,ws.b],L=E;if(p){let V=new St(p);g&&V.offsetHSL(0,0,(Math.random()-.5)*g),L=[V.r,V.g,V.b]}let R=(V,N,J)=>[t+V*_+J*m,e+N,n-V*m+J*_],T=(V,N,J)=>[V*_+J*m,N,-V*m+J*_],U=(V,N,J,W,lt)=>{let st=V.vcount,mt=T(...J);N.forEach((Bt,$t)=>{let X=R(...Bt);V.pos.push(...X),V.nrm.push(...mt),V.uv.push(...lt(X,Bt)),V.col.push(...W[$t])}),V.idx.push(st,st+1,st+2,st,st+2,st+3)},q=(V,N)=>[V[0]*N,V[1]*N,V[2]*N],x=[q(E,d),q(E,d),E,E],b=u.top!==!1,z=u.bottom===!0,k=u.sides!==!1;if(b){let V=l?this.studs:this.smooth,N=l?pi:eo;U(V,[[-f,S,y],[f,S,y],[f,S,-y],[-f,S,-y]],[0,1,0],[L,L,L,L],J=>[J[0]*N,-J[2]*N])}if(z&&U(this.smooth,[[-f,-S,-y],[f,-S,-y],[f,-S,y],[-f,-S,y]],[0,-1,0],[q(E,.6),q(E,.6),q(E,.6),q(E,.6)],V=>[V[0]*eo,V[2]*eo]),!k)return;let H=eo;U(this.smooth,[[-f,-S,y],[f,-S,y],[f,S,y],[-f,S,y]],[0,0,1],x,(V,N)=>[(N[0]+t)*H,V[1]*H]),U(this.smooth,[[f,-S,-y],[-f,-S,-y],[-f,S,-y],[f,S,-y]],[0,0,-1],x,(V,N)=>[(-N[0]+t)*H,V[1]*H]),U(this.smooth,[[f,-S,y],[f,-S,-y],[f,S,-y],[f,S,y]],[1,0,0],x,(V,N)=>[(-N[2]+n)*H,V[1]*H]),U(this.smooth,[[-f,-S,-y],[-f,-S,y],[-f,S,y],[-f,S,-y]],[-1,0,0],x,(V,N)=>[(N[2]+n)*H,V[1]*H])}build(t,e){let n=new Wt;for(let[i,r]of[[this.studs,t],[this.smooth,e]]){if(!i.vcount)continue;let o=new bt(i.toGeometry(),r);o.castShadow=!0,o.receiveShadow=!0,n.add(o)}return n}};function io(s,t,e){let n=new Ot(s,t,e),i=n.attributes.uv,r=n.attributes.position,o=n.attributes.normal;for(let a=0;a<i.count;a++){let c=Math.abs(o.getX(a)),l=Math.abs(o.getY(a)),h=r.getX(a),d=r.getY(a),u=r.getZ(a);l>.5?i.setXY(a,h*pi,u*pi):c>.5?i.setXY(a,u*pi,d*pi):i.setXY(a,h*pi,d*pi)}return i.needsUpdate=!0,n}var un=class s{constructor(t,e,n,i,r,o,a="solid",c=null){this.minX=t,this.minY=e,this.minZ=n,this.maxX=i,this.maxY=r,this.maxZ=o,this.type=a,this.data=c,this.active=!0,this.stamp=0,this.vx=0,this.vy=0,this.vz=0,this.dx=0,this.dy=0,this.dz=0}static fromCenter(t,e,n,i,r,o,a,c){return new s(t-i/2,e-r/2,n-o/2,t+i/2,e+r/2,n+o/2,a,c)}setCenter(t,e,n){let i=(this.maxX-this.minX)/2,r=(this.maxY-this.minY)/2,o=(this.maxZ-this.minZ)/2;this.minX=t-i,this.maxX=t+i,this.minY=e-r,this.maxY=e+r,this.minZ=n-o,this.maxZ=n+o}get solid(){return this.type!=="trigger"}},so=class s{constructor(){this.grid=new Map,this.dynamic=[],this.stamp=1,this._out=[]}add(t){let e=Math.floor(t.minX/8),n=Math.floor(t.maxX/8),i=Math.floor(t.minZ/8),r=Math.floor(t.maxZ/8);for(let o=e;o<=n;o++)for(let a=i;a<=r;a++){let c=o*73856093^a*19349663,l=this.grid.get(c);l||this.grid.set(c,l=[]),l.push(t)}return t}addBox(t,e,n,i,r,o,a="solid",c=null){return this.add(un.fromCenter(t,e,n,i,r,o,a,c))}addDynamic(t){return this.dynamic.push(t),t}query(t,e,n,i){let r=this._out;r.length=0;let o=++this.stamp,a=Math.floor(t/8),c=Math.floor(n/8),l=Math.floor(e/8),h=Math.floor(i/8);for(let d=a;d<=c;d++)for(let u=l;u<=h;u++){let p=this.grid.get(d*73856093^u*19349663);if(p)for(let g of p)g.stamp!==o&&(g.stamp=o,r.push(g))}for(let d of this.dynamic)d.active&&r.push(d);return r}static overlaps(t,e,n,i,r,o){return t.active&&e+r>t.minX+1e-4&&e-r<t.maxX-1e-4&&n+o>t.minY+1e-4&&n<t.maxY-1e-4&&i+r>t.minZ+1e-4&&i-r<t.maxZ-1e-4}boxFree(t,e,n,i,r,o){for(let a of o)if(a.solid&&s.overlaps(a,t,e,n,i,r))return!1;return!0}move(t,e,n,i,r,{stepHeight:o=1.05,wasGrounded:a=!1}={}){let c={grounded:!1,ground:null,hitHead:!1,touched:[],stepped:0},l=Math.max(Math.abs(e.x),Math.abs(e.z))*n+i+2,h=this.query(t.x-l,t.z-l,t.x+l,t.z+l).slice(),d=u=>{let p=u==="x"?e.x:e.z;t[u]+=p*n;for(let g of h){if(!g.solid||!s.overlaps(g,t.x,t.y,t.z,i,r))continue;let _=g.maxY-t.y;if(a&&_>0&&_<=o&&this.boxFree(t.x,g.maxY+1e-4,t.z,i,r,h)){t.y=g.maxY+1e-4,c.stepped=Math.max(c.stepped,_);continue}let m=u==="x"?g.minX:g.minZ,f=u==="x"?g.maxX:g.maxZ,S=(m+f)/2,y=p!==0?Math.sign(p):t[u]<S?1:-1;t[u]=y>0?m-i-1e-4:f+i+1e-4,u==="x"?e.x=0:e.z=0,g.type!=="solid"&&c.touched.push(g)}};d("x"),d("z"),t.y+=e.y*n;for(let u of h){if(!u.solid||!s.overlaps(u,t.x,t.y,t.z,i,r))continue;let p=(u.minY+u.maxY)/2;e.y<=0||t.y>p?(t.y=u.maxY,e.y=0,c.grounded=!0,c.ground=u):(t.y=u.minY-r-1e-4,e.y=Math.min(0,e.y),c.hitHead=!0),u.type!=="solid"&&c.touched.push(u)}if(!c.grounded&&e.y<=0){for(let u of h)if(u.solid&&u.active&&s.overlaps(u,t.x,t.y-.06,t.z,i*.98,.05)){c.grounded=!0,c.ground=u,u.type!=="solid"&&c.touched.push(u);break}}for(let u of h)u.type==="trigger"&&s.overlaps(u,t.x,t.y,t.z,i,r)&&c.touched.push(u);return c}groundHeight(t,e,n=1e9){let i=-1/0;for(let r of this.query(t,e,t,e))!r.solid||!r.active||t>=r.minX&&t<=r.maxX&&e>=r.minZ&&e<=r.maxZ&&r.maxY<=n&&r.maxY>i&&(i=r.maxY);return i}raycast(t,e,n,i,r,o,a){let c=t+i*a,l=n+o*a,h=this.query(Math.min(t,c),Math.min(n,l),Math.max(t,c),Math.max(n,l)),d=a;for(let u of h){if(!u.solid||!u.active||u.data?.noCamera)continue;let p=0,g=d,_=[[t,i,u.minX,u.maxX],[e,r,u.minY,u.maxY],[n,o,u.minZ,u.maxZ]],m=!0;for(let[f,S,y,E]of _){if(Math.abs(S)<1e-8){if(f<y||f>E){m=!1;break}continue}let L=(y-f)/S,R=(E-f)/S;if(L>R&&([L,R]=[R,L]),L>p&&(p=L),R<g&&(g=R),p>g){m=!1;break}}m&&p>0&&p<d&&(d=p)}return d}};function ts(s,t=s){let e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function ro(s,t,e=!0){let n=new Vn(s);return n.colorSpace=me,e&&(n.wrapS=n.wrapT=fs),n.anisotropy=t?Math.min(8,t.capabilities.getMaxAnisotropy()):4,n.needsUpdate=!0,n}function Ch(s){let[e,n]=ts(128);n.fillStyle="#e9e9e9",n.fillRect(0,0,128,128),n.strokeStyle="rgba(0,0,0,0.05)",n.lineWidth=2,n.strokeRect(1,1,126,126);let i=128/2,r=128/2,o=128*.29;n.fillStyle="rgba(0,0,0,0.13)",n.beginPath(),n.arc(i+5,r+6,o,0,Math.PI*2),n.fill();let a=n.createRadialGradient(i-o*.4,r-o*.4,o*.1,i,r,o);return a.addColorStop(0,"#ffffff"),a.addColorStop(1,"#e2e2e2"),n.fillStyle=a,n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=3,n.beginPath(),n.arc(i,r,o-2,Math.PI*.9,Math.PI*1.6),n.stroke(),n.strokeStyle="rgba(0,0,0,0.12)",n.beginPath(),n.arc(i,r,o-1,Math.PI*1.9,Math.PI*.6),n.stroke(),ro(e,s)}function Ph(s){let[e,n]=ts(128),i=n.createImageData(128,128),r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let c=0;c<128*128;c++){let l=232+Math.floor(o()*23);i.data[c*4]=l,i.data[c*4+1]=l,i.data[c*4+2]=l,i.data[c*4+3]=255}n.putImageData(i,0,0);for(let c=0;c<40;c++)n.fillStyle=`rgba(0,0,0,${.02+o()*.03})`,n.fillRect(Math.floor(o()*128),Math.floor(o()*128),2+o()*6,2+o()*6);let a=ro(e,s);return a.magFilter=Ge,a}function Ih(s){let[e,n]=ts(128);n.fillStyle="#ff5a00",n.fillRect(0,0,128,128);for(let i=0;i<26;i++){let r=Math.random()*128,o=Math.random()*128,a=6+Math.random()*18,c=n.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,"rgba(255,230,90,0.95)"),c.addColorStop(1,"rgba(255,120,0,0)"),n.fillStyle=c;for(let l of[-128,0,128])for(let h of[-128,0,128])n.beginPath(),n.arc(r+l,o+h,a,0,Math.PI*2),n.fill()}for(let i=0;i<14;i++){n.fillStyle="rgba(160,20,0,0.35)";let r=Math.random()*128,o=Math.random()*128;n.beginPath(),n.arc(r,o,3+Math.random()*6,0,Math.PI*2),n.fill()}return ro(e,s)}function Lh(s){let[e,n]=ts(64);for(let r=0;r<4;r++)for(let o=0;o<4;o++)n.fillStyle=(o+r)%2?"#111":"#fff",n.fillRect(o*16,r*16,16,16);let i=ro(e,s);return i.magFilter=Te,i}var Lc=new Map;function Dc(s,t,e){s.clearRect(0,0,e,e);let n=e/128,i="#1d1d1f";s.fillStyle=i,s.strokeStyle=i,s.lineCap="round",s.lineJoin="round";let r=(c,l,h=9,d=15)=>{s.beginPath(),s.ellipse(c*n,l*n,h*n,d*n,0,0,Math.PI*2),s.fill(),s.fillStyle="#fff",s.beginPath(),s.ellipse((c-h*.3)*n,(l-d*.4)*n,h*.38*n,d*.28*n,0,0,Math.PI*2),s.fill(),s.fillStyle=i},o=(c=78,l=30,h=18,d=7)=>{s.lineWidth=d*n,s.beginPath(),s.moveTo((64-l)*n,c*n),s.quadraticCurveTo(64*n,(c+h*1.6)*n,(64+l)*n,c*n),s.stroke()},a=()=>{s.fillStyle="rgba(255,90,110,0.28)",s.beginPath(),s.ellipse(32*n,76*n,10*n,6*n,0,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(96*n,76*n,10*n,6*n,0,0,Math.PI*2),s.fill(),s.fillStyle=i};switch(t){case"grin":{r(46,52),r(82,52),s.beginPath(),s.moveTo(34*n,74*n),s.quadraticCurveTo(64*n,116*n,94*n,74*n),s.closePath(),s.fill(),s.fillStyle="#fff",s.fillRect(42*n,75*n,44*n,8*n),s.fillStyle=i;break}case"happy":{s.lineWidth=7*n,s.beginPath(),s.arc(46*n,58*n,10*n,Math.PI*1.1,Math.PI*1.9),s.stroke(),s.beginPath(),s.arc(82*n,58*n,10*n,Math.PI*1.1,Math.PI*1.9),s.stroke(),a(),o(78,26,16);break}case"wink":{r(46,52),s.lineWidth=7*n,s.beginPath(),s.moveTo(72*n,54*n),s.lineTo(92*n,50*n),s.stroke(),o(78,28,14),s.fillStyle="#ff6f8a",s.beginPath(),s.ellipse(72*n,92*n,7*n,6*n,0,0,Math.PI*2),s.fill();break}case"cool":{s.fillStyle="#111",s.beginPath(),s.moveTo(22*n,40*n),s.lineTo(106*n,40*n),s.lineTo(100*n,64*n),s.quadraticCurveTo(84*n,70*n,70*n,56*n),s.lineTo(58*n,56*n),s.quadraticCurveTo(44*n,70*n,28*n,64*n),s.closePath(),s.fill(),s.fillStyle="rgba(255,255,255,0.5)",s.fillRect(32*n,44*n,14*n,4*n),s.fillRect(76*n,44*n,14*n,4*n),s.strokeStyle=i,o(82,20,8,6);break}case"surprised":{r(44,50,10,13),r(84,50,10,13),s.lineWidth=5*n,s.beginPath(),s.moveTo(34*n,30*n),s.lineTo(52*n,26*n),s.stroke(),s.beginPath(),s.moveTo(76*n,26*n),s.lineTo(94*n,30*n),s.stroke(),s.beginPath(),s.ellipse(64*n,88*n,10*n,13*n,0,0,Math.PI*2),s.fill();break}case"determined":{r(46,56,8,11),r(82,56,8,11),s.lineWidth=7*n,s.beginPath(),s.moveTo(32*n,36*n),s.lineTo(56*n,44*n),s.stroke(),s.beginPath(),s.moveTo(96*n,36*n),s.lineTo(72*n,44*n),s.stroke(),s.beginPath(),s.moveTo(46*n,88*n),s.quadraticCurveTo(64*n,82*n,82*n,88*n),s.stroke();break}case"sleepy":{s.lineWidth=6*n,s.beginPath(),s.arc(46*n,52*n,10*n,Math.PI*.1,Math.PI*.9),s.stroke(),s.beginPath(),s.arc(82*n,52*n,10*n,Math.PI*.1,Math.PI*.9),s.stroke(),s.beginPath(),s.ellipse(64*n,88*n,6*n,5*n,0,0,Math.PI*2),s.fill(),s.font=`bold ${20*n}px sans-serif`,s.fillText("z",98*n,30*n),s.font=`bold ${14*n}px sans-serif`,s.fillText("z",112*n,18*n);break}case"silly":{r(44,50,9,14),s.beginPath(),s.ellipse(84*n,54*n,6*n,9*n,0,0,Math.PI*2),s.fill(),o(76,28,14),s.fillStyle="#ff6f8a",s.beginPath(),s.roundRect(62*n,86*n,18*n,18*n,8*n),s.fill(),s.strokeStyle="#d94c68",s.lineWidth=2*n,s.beginPath(),s.moveTo(71*n,88*n),s.lineTo(71*n,98*n),s.stroke();break}case"star":{let c=(l,h,d)=>{s.fillStyle="#FFC107",s.beginPath();for(let u=0;u<10;u++){let p=-Math.PI/2+u*Math.PI/5,g=u%2?d*.45:d;s.lineTo((l+Math.cos(p)*g)*n,(h+Math.sin(p)*g)*n)}s.closePath(),s.fill(),s.strokeStyle="#7a5200",s.lineWidth=2*n,s.stroke()};c(44,52,15),c(84,52,15),s.fillStyle=i,s.strokeStyle=i,s.beginPath(),s.moveTo(40*n,78*n),s.quadraticCurveTo(64*n,112*n,88*n,78*n),s.closePath(),s.fill();break}case"smile":default:r(46,52,7,12),r(82,52,7,12),o(80,26,14)}}function Uc(s){if(Lc.has(s))return Lc.get(s);let[t,e]=ts(256);Dc(e,s,256);let n=new Vn(t);return n.colorSpace=me,n.anisotropy=4,Lc.set(s,n),n}function Ts(s,{bg:t="#2b2f3a",fg:e="#ffffff",accent:n="#ffcc33",w:i=512,h:r=160}={}){let[o,a]=ts(i,r);a.fillStyle=t,a.beginPath(),a.roundRect(0,0,i,r,26),a.fill(),a.strokeStyle=n,a.lineWidth=10,a.beginPath(),a.roundRect(10,10,i-20,r-20,18),a.stroke(),a.fillStyle=e;let c=d=>`900 ${d}px "Fredoka", "Arial Rounded MT Bold", Arial, sans-serif`,l=Math.floor(r*.42);for(a.font=c(l);a.measureText(s).width>i-70&&l>12;)a.font=c(--l);a.textAlign="center",a.textBaseline="middle",a.fillText(s,i/2,r/2+4);let h=new Vn(o);return h.colorSpace=me,h.anisotropy=4,h}function Nc(s){return()=>(s=s*16807%2147483647,(s-1)/2147483646)}var qe=110,ue=4,Q0=[{id:"plaza",name:"Spawn Plaza",x:0,z:0,r:20},{id:"village",name:"Maple Village",x:0,z:-68,r:32},{id:"forest",name:"Whispering Woods",x:-72,z:-2,r:36},{id:"lake",name:"Crystal Lake",x:-55,z:62,r:28},{id:"hills",name:"Sunny Hills",x:58,z:64,r:34},{id:"obby",name:"Sky Obby",x:180,z:0,r:80},{id:"meadow",name:"Flower Meadow",x:62,z:-60,r:28}],j0=[[0,0,0,-50,5],[0,0,104,0,5],[0,0,-46,0,4],[0,0,0,38,5],[0,38,40,62,4],[0,38,-34,52,4],[0,-50,50,-58,3.5]],De={x:-55,z:62,rx:20,rz:15},Rs=[{x:58,z:66,r:30,h:5},{x:88,z:-88,r:16,h:4},{x:-88,z:-86,r:18,h:5},{x:86,z:30,r:12,h:3},{x:-92,z:92,r:14,h:4}];function tg(s,t,e,n,i,r){let o=i-e,a=r-n,c=Math.max(0,Math.min(1,((s-e)*o+(t-n)*a)/(o*o+a*a)));return Math.hypot(s-(e+o*c),t-(n+a*c))}function oo(s,t,e=0){return j0.some(([n,i,r,o,a])=>tg(s,t,n,i,r,o)<a/2+e)}function Wn(s,t){return((s-De.x)/De.rx)**2+((t-De.z)/De.rz)**2}function As(s,t){let e=0;for(let n of Rs){let i=Math.hypot(s-n.x,t-n.z);i<n.r&&(e=Math.max(e,Math.min(n.h,Math.floor((n.r-i)/4.2))))}return e}var ao=class{constructor(t,e){this.scene=t,this.renderer=e,this.col=new so,this.batch=new ji,this.rand=Nc(1337),this.occupied=[],this.coinSpots=[],this.npcSpots={},this.animated=[],this.time=0,this.studTex=Ch(e),this.smoothTex=Ph(e),this.studMat=new Nt({map:this.studTex,vertexColors:!0,roughness:.82,metalness:0}),this.smoothMat=new Nt({map:this.smoothTex,vertexColors:!0,roughness:.85,metalness:0}),this.buildSky(),this.buildLights(),this.buildIsland(),this.buildPlaza(),this.buildVillage(),this.buildForest(),this.buildLake(),this.buildHills(),this.buildMeadow(),this.occupy(100,0,12),this.buildScatter(),this.buildSigns();let n=this.batch.build(this.studMat,this.smoothMat);t.add(n),this.buildFlowersAndGrass(),this.buildClouds()}r(t=0,e=1){return t+this.rand()*(e-t)}isFree(t,e,n){if(Math.abs(t)>qe-n-2||Math.abs(e)>qe-n-2||Math.hypot(t,e)<22+n||oo(t,e,n+.5)||Wn(t,e)<1.5)return!1;for(let[i,r,o]of this.occupied)if(Math.hypot(t-i,e-r)<n+o)return!1;return!0}occupy(t,e,n){this.occupied.push([t,e,n])}groundAt(t,e){return As(t,e)}block(t,e,n,i,r,o,a,c={}){this.batch.addBox(t,e+r/2,n,i,r,o,a,c),c.collide!==!1&&this.col.addBox(t,e+r/2,n,i,r,o,c.type||"solid",c.data||null)}deco(t,e,n,i,r,o,a,c={}){this.block(t,e,n,i,r,o,a,{...c,collide:!1})}buildSky(){let t=new qi(900,32,16),e=new Je({side:Ae,depthWrite:!1,fog:!1,uniforms:{top:{value:new St("#2f7fe0")},mid:{value:new St("#7fc3ff")},bottom:{value:new St("#d9f0ff")},sunDir:{value:new A(.45,.62,.35).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec3 sunDir; varying vec3 vDir;
        void main(){
          float h = vDir.y;
          vec3 col = h > 0.0 ? mix(mid, top, pow(clamp(h,0.0,1.0), 0.6)) : mix(mid, bottom, clamp(-h*3.0,0.0,1.0));
          col = mix(bottom, col, smoothstep(-0.05, 0.25, h) * 0.85 + 0.15);
          float s = max(dot(normalize(vDir), sunDir), 0.0);
          col += vec3(1.0,0.95,0.8) * pow(s, 900.0) * 3.0;
          col += vec3(1.0,0.9,0.6) * pow(s, 12.0) * 0.25;
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`});this.sky=new bt(t,e),this.sky.renderOrder=-1,this.scene.add(this.sky),this.scene.fog=new Nr("#cfe9ff",140,520),this.scene.background=new St("#9fd3ff")}buildLights(){let t=new $i("#dff1ff","#5f8f3a",1.05);this.scene.add(t);let e=new hn("#fff4e0",2.3);e.position.set(45,62,35),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=70;Object.assign(e.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:1,far:240}),e.shadow.bias=-4e-4,e.shadow.normalBias=.04,this.scene.add(e,e.target),this.sun=e,this.sunOffset=new A(45,62,35);let i=new hn("#bcd7ff",.35);i.position.set(-40,30,-50),this.scene.add(i)}followShadow(t){let n=Math.round(t.x/.5)*.5,i=Math.round(t.z/.5)*.5;this.sun.target.position.set(n,t.y,i),this.sun.position.set(n+this.sunOffset.x,t.y+this.sunOffset.y,i+this.sunOffset.z)}buildIsland(){let t=qe*2/ue,e=new St("#5cbd45"),n=new St("#4ea83b"),i=new St("#77c94f"),r=new St;this.water=[];for(let c=0;c<t;c++){let l=null,h=d=>{if(l===null)return;let u=-qe+l*ue,p=-qe+d*ue,g=-qe+c*ue+ue/2;this.col.addBox((u+p)/2,-2,g,p-u,4,ue),l=null};for(let d=0;d<t;d++){let u=-qe+d*ue+ue/2,p=-qe+c*ue+ue/2,g=Wn(u,p),_=As(u,p);if(g<1){h(d);let L=g<.45?-1:-.6;this.block(u,L-3,p,ue,3,ue,g<.45?"#d8c690":"#e3d39f",{studs:!0,faces:{sides:!1}}),this.water.push([u,p]);continue}l===null&&(l=d);let m=Math.sin(u*.07)*Math.cos(p*.09)+Math.sin((u+p)*.031)*.6;r.copy(m>.45?i:m<-.4?n:e);let f="#"+r.getHexString(),S=.035;Math.hypot(u,p)<17.5?(f=(Math.floor(u/ue)+Math.floor(p/ue))%2?"#c9ccd2":"#b8bcc4",S=.01):oo(u,p)?(f="#d6c29a",S=.04):g<1.6&&(f="#e8d9a6",S=.03);let E=Wn(u+ue,p)<1||Wn(u-ue,p)<1||Wn(u,p+ue)<1||Wn(u,p-ue)<1;_>0?this.block(u,-2,p,ue,_+2,ue,"#a06a3c",{studs:!0,topColor:f,jitter:S,shade:.7}):this.batch.addBox(u,-2,p,ue,4,ue,E?"#a06a3c":f,{studs:!0,topColor:f,jitter:S,faces:{sides:E}})}h(t)}let o=qe*2,a=(c,l,h,d,u)=>{let p=o-h*2;this.batch.addBox(0,c+l/2,0,p,l,p,d,{faces:{top:!1,bottom:u},shade:.75})};this.batch.addBox(0,-.4,0,o+.02,.8,o+.02,"#4ea83b",{faces:{top:!1},shade:1}),a(-4,3.2,0,"#8a5a32",!1),this.batch.addBox(0,-4,0,o-4,.01,o-4,"#6d4527",{faces:{top:!1,sides:!1,bottom:!0}}),a(-9,5,4,"#7d6a5a",!0),a(-15,6,16,"#6e625a",!0),a(-22,7,34,"#5f5752",!0),a(-28,6,60,"#544e4a",!0)}buildPlaza(){this.occupy(0,0,18),this.block(0,0,8,6,.4,6,"#e8eef7",{studs:!0}),this.block(0,.4,8,4.4,.06,4.4,"#1E88E5",{studs:!0,collide:!1}),this.spawnPoint=new A(0,.5,8);let t=new bt(new Le(3,3),new We({map:eg(),transparent:!0}));t.rotation.x=-Math.PI/2,t.position.set(0,.47,8),this.scene.add(t);let e=0,n=-6;for(let o=0;o<16;o++){let a=o/16*Math.PI*2;this.block(e+Math.cos(a)*4.6,0,n+Math.sin(a)*4.6,2,1.1,1,"#d5d9e0",{studs:!0,rot:-a+Math.PI/2})}this.col.addBox(e,.55,n,9.4,1.1,9.4,"solid",{noCamera:!0}),this.deco(e,0,n,8.4,.3,8.4,"#9aa3ad"),this.block(e,0,n,1.6,2.6,1.6,"#cfd4dc",{studs:!0}),this.block(e,2.6,n,3.2,.5,3.2,"#cfd4dc",{studs:!0}),this.block(e,3.1,n,.8,1.2,.8,"#cfd4dc",{studs:!0});let i=new bt(new Se(4.2,4.2,.1,32),new Nt({color:"#4fc3f7",transparent:!0,opacity:.8,roughness:.1,metalness:.1}));i.position.set(e,.85,n),this.scene.add(i);let r=new bt(new Se(1.45,1.45,.08,24),i.material);r.position.set(e,3.05,n),this.scene.add(r),this.fountain=this.makeFountainParticles(e,4.3,n),this.coinSpots.push([e,4.9,n]);for(let o=0;o<8;o++){let a=o/8*Math.PI*2+Math.PI/8,c=Math.cos(a)*14,l=Math.sin(a)*14;o%2===0?this.lamp(c,l):this.bench(c,l,-a-Math.PI/2)}for(let[o,a]of[[9,9],[-9,9],[9,-12],[-9,-12]])this.planter(o,a);for(let o=0;o<8;o++){if(o===2)continue;let a=o/8*Math.PI*2;this.coinSpots.push([Math.cos(a)*11,1.4,Math.sin(a)*11])}this.npcSpots.plaza=[[6,2],[-7,3],[4,-14]]}makeFountainParticles(t,e,n){let r=new Me,o=new Float32Array(120*3),a=[];for(let h=0;h<120;h++)o.set([t,e,n],h*3),a.push([0,0,0,Math.random()*1.4]);r.setAttribute("position",new Ie(o,3));let c=new zr(r,new vs({color:"#bfeaff",size:.22,transparent:!0,opacity:.85}));this.scene.add(c);let l={pts:c,vel:a,x:t,y:e,z:n};return this.animated.push(h=>{for(let d=0;d<120;d++){let u=a[d];if(u[3]-=h,u[3]<=0){let p=Math.random()*Math.PI*2,g=1+Math.random()*.8;u[0]=Math.cos(p)*g,u[1]=4+Math.random()*1.5,u[2]=Math.sin(p)*g,u[3]=1.2+Math.random()*.3,o[d*3]=t,o[d*3+1]=e,o[d*3+2]=n}u[1]-=9.8*h,o[d*3]+=u[0]*h,o[d*3+1]+=u[1]*h,o[d*3+2]+=u[2]*h,o[d*3+1]<.9&&(u[3]=0)}r.attributes.position.needsUpdate=!0}),l}lamp(t,e){this.block(t,0,e,.5,.3,.5,"#37474f"),this.block(t,.3,e,.25,3.4,.25,"#455a64"),this.deco(t,3.7,e,.8,.12,.8,"#37474f");let n=new bt(new Ot(.55,.6,.55),new Nt({color:"#fff3c4",emissive:"#ffd54f",emissiveIntensity:.9}));n.position.set(t,3.52,e),this.scene.add(n),this.deco(t,3.82,e,.5,.18,.5,"#37474f")}bench(t,e,n){let i=Math.cos(n),r=Math.sin(n),o=(l,h)=>[t+l*i+h*r,e-l*r+h*i];for(let l of[-1.1,1.1]){let[h,d]=o(l,0);this.deco(h,0,d,.25,.55,.8,"#5d4037",{rot:n})}this.deco(t,.55,e,3,.18,.95,"#a1673a",{rot:n});let[a,c]=o(0,-.42);this.deco(a,.73,c,3,.7,.14,"#a1673a",{rot:n}),this.col.addBox(t,.4,e,2.6,.8,2.6)}planter(t,e){this.block(t,0,e,3,.9,3,"#8d6e63",{studs:!0}),this.deco(t,.9,e,2.6,.12,2.6,"#5d4037");let n=["#f06292","#ffd54f","#ba68c8","#ff8a65"];for(let i=0;i<9;i++){let r=t-.8+i%3*.8,o=e-.8+Math.floor(i/3)*.8;this.deco(r,1,o,.12,.45,.12,"#388e3c"),this.deco(r,1.4,o,.38,.3,.38,n[i%4])}}buildVillage(){this.occupy(0,-68,30),this.block(0,0,-68,3.4,1.2,3.4,"#9e9e9e",{studs:!0}),this.deco(0,1.2,-68,2.6,.05,2.6,"#29b6f6");for(let i of[-1.4,1.4])this.deco(0+i,1.2,-68,.3,2.2,.3,"#6d4c41");this.deco(0,3.4,-68,4.2,.3,2.4,"#c62828",{studs:!0}),this.deco(0,3.7,-68,3.2,.3,1.8,"#c62828",{studs:!0});let n=[{x:-20,z:-58,rot:0,wall:"#f3e5c8",roof:"#d84315"},{x:20,z:-58,rot:0,wall:"#d7ecff",roof:"#1565c0"},{x:-22,z:-82,rot:0,wall:"#ffe0e9",roof:"#8e24aa"},{x:22,z:-82,rot:0,wall:"#e6f5d6",roof:"#2e7d32"},{x:0,z:-92,rot:0,wall:"#fff3c4",roof:"#6d4c41",big:!0}];for(let i of n)this.house(i);this.stall(-9,-48,"#e53935"),this.stall(9,-48,"#1e88e5");for(let i=-3;i<=3;i++)Math.abs(i)<=1||(this.fence(0+i*2.2,-60,0),this.fence(0+i*2.2,-76,0));for(let[i,r]of[[-13,-50],[-12,-51.5],[13,-51],[14,-49.5]])this.block(i,0,r,1.2,1.2,1.2,"#a1887f",{rot:this.r(0,.5)});for(let[i,r]of[[27,-66],[-28,-70],[7,-98]])this.block(i,0,r,1.1,1.5,1.1,"#795548",{rot:.785}),this.deco(i,.6,r,1.2,.12,1.2,"#424242",{rot:.785});for(let[i,r]of[[-11,-62],[11,-62],[-11,-76],[11,-76]])this.lamp(i,r);for(let[i,r]of[[-6,-86],[6,-86],[-30,-50],[30,-50]])this.tree(i,r,"cherry");this.coinSpots.push([0,4.6,-68],[-20,8.7,-58],[20,8.7,-58],[0,11,-92],[-9,4.6,-48],[9,4.6,-48]),this.npcSpots.village=[[-6,-62],[8,-70],[-4,-78],[12,-56],[0,-54]]}house({x:t,z:e,wall:n,roof:i,big:r}){let o=r?12:9,a=r?9:8,c=r?6:4.6;this.occupy(t,e,Math.max(o,a)*.7),this.block(t,0,e,o+.6,.4,a+.6,"#9e9e9e",{studs:!0}),this.block(t,.4,e,o,c,a,n);for(let m of[-1,1])for(let f of[-1,1])this.deco(t+m*(o/2),.4,e+f*(a/2),.5,c,.5,"#6d4c41");let l=e<-68?e+a/2:e-a/2,h=e<-68?1:-1;this.deco(t,.4,l+h*.06,1.6,2.6,.14,"#5d4037"),this.deco(t+.5,1.6,l+h*.14,.15,.15,.08,"#ffca28");let d=new Nt({color:"#b3e5fc",emissive:"#4fc3f7",emissiveIntensity:.25,roughness:.1});for(let m of[-1,1]){let f=new bt(new Ot(1.6,1.4,.12),d);f.position.set(t+m*(o/4+.6),.4+c*.58,l+h*.07),this.scene.add(f),this.deco(t+m*(o/4+.6),.4+c*.58-.85,l+h*.18,2,.2,.3,"#6d4c41"),this.deco(t+m*(o/4+.6),.4+c*.58-.65,l+h*.26,1.7,.3,.25,"#e91e63")}let u=r?5:4;for(let m=0;m<u;m++){let f=.4+c+m*.7;this.block(t,f,e,o+1.4-m*(o/u),.7,a+1.4,i,{studs:!0})}this.block(t+o/4,.4+c,e-a/4,1,3.6,1,"#8d6e63");let p=.4+c+.7,g=Math.ceil(p-1),_=t-(o/2+.7+.62);for(let m=0;m<g;m++){let f=e+a/2-.6-m*1.22;for(let S=0;S<=m;S++)this.block(_,S,f,1.2,1,1.2,S%2?"#b08a62":"#a1774f",{studs:!0})}this.occupy(_,e,3)}stall(t,e,n){this.occupy(t,e,3.5),this.block(t,0,e,4.4,1.2,1.6,"#a1673a",{studs:!0});for(let r of[-2,2])this.deco(t+r,1.2,e-.6,.25,2.4,.25,"#6d4c41");for(let r=0;r<6;r++)this.deco(t-2.2+r*.8+.4,3.6,e-.4,.8,.3,2.6,r%2?"#ffffff":n);let i=["#e53935","#fdd835","#7cb342","#ff7043"];for(let r=0;r<4;r++)this.deco(t-1.5+r,1.2,e+.1,.7,.4,.7,i[r],{studs:!0})}fence(t,e,n){this.block(t,0,e,.3,1.4,.3,"#efebe9"),this.deco(t,.5,e,2.2,.18,.12,"#efebe9",{rot:n}),this.deco(t,1,e,2.2,.18,.12,"#efebe9",{rot:n})}tree(t,e,n="oak",i=1){let r=this.groundAt(t,e);this.occupy(t,e,2.5*i);let o=i,a={jitter:.06};if(n==="pine"){this.block(t,r,e,.9*o,3*o,.9*o,"#6d4c41");let g=[[4.2,2],[3.2,1.8],[2.2,1.6],[1.1,1.2]],_=r+2.2*o;return g.forEach(([m,f],S)=>{this.block(t,_,e,m*o,f*o,m*o,S%2?"#2e7d32":"#357a38",a),_+=f*o*.85}),_}let c=n==="birch"?"#efebe9":"#7a5232",l={oak:["#43a047","#4caf50"],birch:["#9ccc65","#aed581"],cherry:["#f48fb1","#f8bbd0"],autumn:["#fb8c00","#ffa726"]}[n],h=(n==="birch"?4.5:3.6)*o;if(this.block(t,r,e,.9*o,h,.9*o,c),n==="birch")for(let g=0;g<4;g++)this.deco(t+.46*o,r+.6+g*.9*o,e,.04,.2,.5*o,"#424242");let d=r+h-.6*o;this.block(t,d,e,4.2*o,2.4*o,4.2*o,l[0],a),this.block(t,d+2.4*o,e,2.8*o,1.4*o,2.8*o,l[1],a);let u=this.r(-1,1)*o,p=this.r(-1,1)*o;if(this.deco(t+u+1.4*o,d+.5*o,e+p,1.6*o,1.6*o,1.6*o,l[1],{jitter:.06}),this.deco(t-u-1.2*o,d+.9*o,e-p-.8*o,1.4*o,1.4*o,1.4*o,l[0],{jitter:.06}),n==="cherry"||n==="oak")for(let g=0;g<3;g++)this.deco(t+this.r(-1.8,1.8)*o,d+this.r(.6,2.2)*o,e+2.12*o,.3,.3,.06,n==="oak"?"#e53935":"#ffffff",{});return d+3.8*o}buildForest(){let t=["oak","pine","pine","birch","oak","autumn"],e=0;for(let h=0;h<900&&e<70;h++){let d=this.r(-106,-34),u=this.r(-48,40),p=this.r(.85,1.3);if(!this.isFree(d,u,3.2*p))continue;let g=this.tree(d,u,t[Math.floor(this.r(0,t.length))],p);e%9===0&&this.coinSpots.push([d,g+1.2,u]),e++}for(let h=0;h<26;h++){let d=this.r(-104,-36),u=this.r(-46,40);if(this.isFree(d,u,1.2))if(this.occupy(d,u,1.2),h%3===0){let p=this.r(.8,1.6);this.block(d,0,u,.45*p,.9*p,.45*p,"#f5f5f5"),this.block(d,.9*p,u,1.5*p,.6*p,1.5*p,"#e53935",{studs:!0}),this.deco(d+.35*p,1.5*p,u+.2*p,.3*p,.05,.3*p,"#ffffff"),this.deco(d-.3*p,1.5*p,u-.35*p,.25*p,.05,.25*p,"#ffffff")}else if(h%3===1){let p=this.r(0,Math.PI);this.deco(d,0,u,4,.9,.9,"#6d4c41",{rot:p}),this.col.addBox(d,.45,u,2.5,.9,2.5),this.deco(d,.9,u,.5,.25,.5,"#7cb342",{rot:p})}else this.block(d,0,u,1.3,.8,1.3,"#795548",{studs:!0,topColor:"#d7b98a"})}let n=-70,i=6;this.occupy(n,i,6);for(let h=0;h<8;h++){let d=h/8*Math.PI*2;this.block(n+Math.cos(d)*1.6,0,i+Math.sin(d)*1.6,.7,.45,.7,"#90a4ae",{rot:d})}this.deco(n,0,i,1.8,.35,.4,"#5d4037",{rot:.6}),this.deco(n,.1,i,1.8,.35,.4,"#5d4037",{rot:-.6});let r=new Wt,o=new Nt({color:"#ff9800",emissive:"#ff6d00",emissiveIntensity:1.6}),a=new Nt({color:"#ffeb3b",emissive:"#ffc107",emissiveIntensity:1.8}),c=[];for(let h=0;h<5;h++){let d=new bt(new Ot(.45,.8,.45),h%2?a:o);d.position.set(Math.cos(h*1.3)*.3,.6,Math.sin(h*1.3)*.3),r.add(d),c.push(d)}r.position.set(n,0,i),this.scene.add(r);let l=new Zi("#ff9800",18,14,2);l.position.set(n,1.6,i),this.scene.add(l),this.animated.push((h,d)=>{c.forEach((u,p)=>{let g=.7+Math.sin(d*9+p*2.1)*.3;u.scale.set(1,g*1.2,1),u.position.y=.3+g*.45,u.rotation.y=d*2+p}),l.intensity=16+Math.sin(d*13)*3});for(let[h,d,u]of[[-66,9,.3],[-74,3,1.8]])this.deco(h,0,d,2.4,.6,.6,"#6d4c41",{rot:u});this.coinSpots.push([n,1.6,i+3.5],[n+3.5,1.6,i]),this.npcSpots.forest=[[-64,4],[-78,12]]}buildLake(){let t=new Le(De.rx*2+4,De.rz*2+4,1,1),e=this.smoothTex.clone();e.repeat.set(6,5),e.needsUpdate=!0;let n=new Nt({color:"#3fb6ea",transparent:!0,opacity:.72,roughness:.05,metalness:.2,map:e}),i=new bt(t,n);i.rotation.x=-Math.PI/2,i.position.set(De.x,-.28,De.z),i.receiveShadow=!0,this.scene.add(i),this.animated.push((c,l)=>{e.offset.set(l*.02,Math.sin(l*.3)*.05)});let r=De.x+6,o=De.z-De.rz+1;for(let c=0;c<6;c++)this.block(r,-.05,o+c*1.5,2.6,.3,1.4,c%2?"#a1673a":"#8d5a2e",{studs:!0});for(let c of[-1.3,1.3])for(let l of[2,5])this.deco(r+c,-1.2,o+l*1.5,.3,1.8,.3,"#5d4037");this.coinSpots.push([r,1.3,o+8.5]);let a=[[-60,58],[-50,66],[-62,68],[-46,58],[-57,54]];for(let[c,l]of a)this.block(c,-.32,l,1.6,.12,1.6,"#66bb6a",{studs:!0,rot:c*l}),this.coinSpots.push([c,1.1,l]);this.block(De.x-6,-1,De.z+4,6,1.4,6,"#e3d39f",{studs:!0,topColor:"#7cc957"}),this.tree(De.x-6,De.z+4,"cherry",.9),this.npcSpots.lake=[[-40,46],[-30,60]]}buildHills(){let t=Rs[0],e=t.x,n=t.z,i=t.h;this.occupy(e,n,7),this.block(e,i,n,3,9,3,"#bcaaa4",{studs:!0});for(let r=0;r<16;r++){let o=r*1.8+5.2,a=Math.floor(o/9.2),c=o%9.2-4.6,[l,h]=[[c,-4.6],[4.6,c],[-c,4.6],[-4.6,-c]][a];this.block(e+l,i+r*.6,n+h,2.2,.5,2.2,r%2?"#8d6e63":"#a1887f",{studs:!0})}this.block(e,i+9,n,7,.6,7,"#8d6e63",{studs:!0});for(let[r,o]of[[-3.3,-3.3],[3.3,-3.3],[-3.3,3.3],[3.3,3.3]])this.block(e+r,i+9.6,n+o,.4,1.2,.4,"#5d4037");this.block(e,i+12.6,n,8,.5,8,"#e53935",{studs:!0}),this.block(e,i+13.1,n,5,.5,5,"#e53935",{studs:!0});for(let[r,o]of[[-3.3,-3.3],[3.3,-3.3],[-3.3,3.3],[3.3,3.3]])this.deco(e+r,i+10.8,n+o,.3,1.8,.3,"#5d4037");this.coinSpots.push([e,i+10.8,n],[e+1.5,i+10.8,n+1.5],[e-1.5,i+10.8,n-1.5]);for(let r of Rs)this.coinSpots.push([r.x+r.r*.45,As(r.x+r.r*.45,r.z)+1.3,r.z]),r!==t&&this.coinSpots.push([r.x,r.h+1.3,r.z]);for(let r=0;r<40;r++){let o=Rs[r%Rs.length],a=this.r(0,Math.PI*2),c=this.r(.35,.95)*o.r,l=o.x+Math.cos(a)*c,h=o.z+Math.sin(a)*c;this.isFree(l,h,3)&&(r%3===0?this.rock(l,h,this.r(.8,1.6)):this.tree(l,h,r%2?"pine":"oak",this.r(.8,1.1)))}this.npcSpots.hills=[[40,52],[70,80]]}rock(t,e,n){let i=this.groundAt(t,e);this.occupy(t,e,2*n);let r=this.r(0,Math.PI);this.block(t,i,e,2.2*n,1.4*n,1.8*n,"#9e9e9e",{rot:r,jitter:.08}),this.deco(t+.4*n,i+1.2*n,e-.2*n,1.3*n,.8*n,1.1*n,"#bdbdbd",{rot:r+.4,jitter:.08}),this.deco(t-1.1*n,i,e+.6*n,.9*n,.6*n,.9*n,"#8a8a8a",{rot:r+1,jitter:.08})}buildMeadow(){this.occupy(72,-66,6);let n=72,i=-66;this.block(n,0,i,5,8,5,"#fafafa",{studs:!0}),this.block(n,8,i,5.8,1,5.8,"#c62828",{studs:!0}),this.block(n,9,i,4,1,4,"#c62828",{studs:!0}),this.block(n,10,i,2,1,2,"#c62828",{studs:!0}),this.deco(n,0,i+2.52,1.4,2.2,.1,"#5d4037");let r=new Wt,o=new Nt({color:"#efebe9",roughness:.8}),a=new Nt({color:"#8d6e63",roughness:.8});for(let l=0;l<4;l++){let h=new Wt;h.rotation.z=l*Math.PI/2;let d=new bt(new Ot(.3,5.5,.2),a);d.position.y=2.9,d.castShadow=!0;let u=new bt(new Ot(1.4,4.2,.1),o);u.position.set(.85,3.4,0),u.castShadow=!0,h.add(d,u),r.add(h)}let c=new bt(new Ot(.8,.8,.8),a);r.add(c),r.position.set(n,6.5,i+2.9),this.scene.add(r),this.animated.push(l=>{r.rotation.z+=l*.6});for(let[l,h]of[[54,-54],[52,-56]])this.block(l,0,h,1.4,1.6,1.4,"#ffd54f",{studs:!0}),this.deco(l,1.6,h,1.7,.25,1.7,"#8d6e63");for(let[l,h]of[[66,-50],[68,-51]])this.block(l,0,h,2,1.4,1.4,"#e6c25a",{studs:!0});for(let l=0;l<3;l++)for(let h=0;h<=l;h++)this.block(n-3.4,h*1.6,i+4.6-l*1.7,1.6,1.6,1.6,h%2?"#b08a62":"#a1774f",{studs:!0});this.coinSpots.push([n,11.6,i],[53,2.6,-55],[62,1.3,-60],[67,2.4,-60+9.5]),this.npcSpots.meadow=[[60,-58],[66,-70]],this.meadow={x:62,z:-60}}buildScatter(){let t=0;for(let e=0;e<260&&t<60;e++){let n=this.r(-105,105),i=this.r(-105,105);if(n<-34&&i>-48&&i<40||!this.isFree(n,i,3))continue;let r=this.rand();if(r<.45)this.tree(n,i,r<.15?"birch":r<.3?"oak":"pine",this.r(.85,1.2));else if(r<.7)this.rock(n,i,this.r(.6,1.3));else{let o=this.groundAt(n,i);this.occupy(n,i,1.6),this.block(n,o,i,2,1.3,2,"#43a047",{jitter:.08}),this.deco(n+.5,o+.6,i+.3,1.3,1.1,1.3,"#66bb6a",{jitter:.08})}t++}for(let e=1;e<=5;e++)this.coinSpots.push([16+e*14,1.3,0]);for(let e=1;e<=3;e++)this.coinSpots.push([0,1.3,-18-e*8]);for(let e=1;e<=3;e++)this.coinSpots.push([-16-e*8,1.3,0]);for(let e=1;e<=2;e++)this.coinSpots.push([0,1.3,18+e*8])}buildSigns(){let t=(e,n,i,r,o)=>{this.block(e,0,n,.3,2.4,.3,"#6d4c41");let a=new bt(new Le(3.2,1),new Nt({map:Ts(r,o),roughness:.7}));a.position.set(e,2.3,n),a.rotation.y=i,this.scene.add(a);let c=new bt(new Ot(3.3,1.1,.1),new Nt({color:"#4e342e"}));c.position.set(e,2.3,n),c.rotation.y=i,c.translateZ(-.07),c.castShadow=!0,this.scene.add(c)};t(5,-20,0,"VILLAGE \u25B2",{accent:"#ff7043"}),t(20,4.5,0,"SKY OBBY \u25BA",{accent:"#ffcc33",bg:"#c62828"}),t(-20,4.5,0,"\u25C4 WOODS",{accent:"#7cb342"}),t(5,22,Math.PI,"HILLS & LAKE \u25BC",{accent:"#29b6f6"})}buildFlowersAndGrass(){let t=new le,e=new St,n=["#ff5252","#ffd740","#e040fb","#ffffff","#40c4ff","#ff6e40","#f48fb1"],i=[],r=Nc(99);for(let g=0;g<9e3&&i.length<1400;g++){let _=(r()*2-1)*(qe-3),m=(r()*2-1)*(qe-3),f=this.meadow&&Math.hypot(_-this.meadow.x,m-this.meadow.z)<24;!f&&r()<.55||Math.hypot(_,m)<18||oo(_,m,.6)||Wn(_,m)<1.3||this.occupied.some(([S,y,E])=>Math.hypot(_-S,m-y)<E*.7)||i.push([_,m,f])}let o=new Ot(.08,.5,.08),a=new Ot(.3,.22,.3),c=i.filter((g,_)=>g[2]||_%3===0),l=new rn(o,new Nt({color:"#2e7d32"}),c.length),h=new rn(a,new Nt({roughness:.6}),c.length);c.forEach(([g,_],m)=>{let f=As(g,_),S=.8+r()*.6;t.position.set(g,f+.25*S,_),t.scale.set(1,S,1),t.rotation.set(0,r()*3,0),t.updateMatrix(),l.setMatrixAt(m,t.matrix),t.position.y=f+.55*S,t.scale.set(1,1,1),t.updateMatrix(),h.setMatrixAt(m,t.matrix),h.setColorAt(m,e.set(n[Math.floor(r()*n.length)]))}),l.castShadow=h.castShadow=!0,this.scene.add(l,h);let d=new Ot(.1,.5,.1),u=new rn(d,new Nt({roughness:.9}),2400),p=0;for(let g=0;g<12e3&&p<2400;g++){let _=(r()*2-1)*(qe-2),m=(r()*2-1)*(qe-2);if(Math.hypot(_,m)<18||oo(_,m,.3)||Wn(_,m)<1.4)continue;let f=As(_,m);for(let S=0;S<3&&p<2400;S++)t.position.set(_+(S-1)*.14,f+.2,m+(r()-.5)*.15),t.rotation.set((r()-.5)*.5,r()*3,(S-1)*.35),t.scale.set(1,.6+r()*.7,1),t.updateMatrix(),u.setMatrixAt(p,t.matrix),u.setColorAt(p,e.set(r()<.5?"#4caf50":"#66bb6a")),p++}u.count=p,u.receiveShadow=!0,this.scene.add(u)}buildClouds(){this.clouds=[];let t=new Nt({color:"#ffffff",roughness:1,emissive:"#ffffff",emissiveIntensity:.35,transparent:!0,opacity:.95}),e=Nc(5);for(let n=0;n<22;n++){let i=new Wt,r=3+Math.floor(e()*4);for(let o=0;o<r;o++){let a=8+e()*12,c=3+e()*3,l=6+e()*8,h=new bt(new Ot(a,c,l),t);h.position.set((o-r/2)*6+e()*3,e()*2,e()*6-3),i.add(h)}i.position.set((e()*2-1)*400,70+e()*40,(e()*2-1)*400),i.userData.speed=1+e()*2,this.scene.add(i),this.clouds.push(i)}}update(t,e){this.time=e;for(let n of this.clouds)n.position.x+=n.userData.speed*t,n.position.x>450&&(n.position.x=-450);for(let n of this.animated)n(t,e)}areaAt(t,e){for(let n of Q0)if(Math.hypot(t-n.x,e-n.z)<n.r)return n;return null}};function eg(){let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d");t.strokeStyle="#ffffff",t.lineWidth=18,t.beginPath(),t.arc(128,128,96,0,Math.PI*2),t.stroke(),t.fillStyle="#ffffff",t.save(),t.translate(128,128),t.rotate(Math.PI/12),t.beginPath(),t.roundRect(-46,-46,92,92,14),t.fill(),t.fillStyle="#1E88E5",t.beginPath(),t.roundRect(-14,-14,28,28,4),t.fill(),t.restore();let e=new Vn(s);return e.colorSpace=me,e}var Dh=["#ff4d5e","#ffb020","#36d07a","#2f9bff","#a96bff","#ff6fb5","#18c9c9"],co=class{constructor(t,e){this.scene=t,this.world=e,this.col=e.col,this.batch=new ji,this.movers=[],this.vanishers=[],this.spinners=[],this.checkpoints=[],this.coinSpots=[],this.lavaMats=[],this.state="idle",this.time=0,this.currentCheckpoint=0,this.t=0,this.build(),t.add(this.batch.build(e.studMat,e.smoothMat))}plat(t,e,n,i,r,o,a=1){this.batch.addBox(t,e-a/2,n,i,a,r,o,{studs:!0,shade:.7}),this.col.addBox(t,e-a/2,n,i,a,r)}build(){let t=0,e=()=>Dh[t++%Dh.length];this.plat(116,0,0,12,12,"#e8eef7"),this.archway(110.5,0,"SKY OBBY","#c62828"),this.checkpoint(118,0,0,0,!0),[[127,1,0],[133,2,3],[139,3,-2],[145.5,3,2.5],[152,4,-3],[158,5,0]].forEach(([g,_,m])=>this.plat(g,_,m,4,4,e())),this.coinSpots.push([139,4.3,-2],[152,5.3,-3]),this.plat(167,5,0,8,8,"#eceff1"),this.checkpoint(167,5,0,1),this.mover(176.5,5,0,4,4,e(),{axis:"z",amp:5,speed:1.2,phase:0}),this.mover(183.5,5,0,4,4,e(),{axis:"z",amp:5,speed:1.2,phase:Math.PI}),this.mover(190.5,5,0,4,4,e(),{axis:"z",amp:5,speed:1.4,phase:.6}),this.plat(198,5.5,0,5,5,e()),this.mover(208,6,0,4.5,4.5,e(),{axis:"x",amp:4.5,speed:1,phase:0}),this.coinSpots.push([198,6.8,0],[208,7.3,0]),this.plat(222,6,0,8,8,"#eceff1"),this.checkpoint(222,6,0,2),[[231,6,0],[236.5,6.5,2],[242,7,-1],[247.5,7.5,2],[253,8,0],[258.5,8,-2]].forEach(([g,_,m])=>this.vanisher(g,_,m,3.6,e())),this.plat(266,8,0,6,6,e()),this.coinSpots.push([242,8.3,-1],[253,9.3,0]),this.plat(287,8,0,30,7,"#eceff1");for(let g of[276.5,287,297.5])this.batch.addBox(g,8.3,0,.1,.6,7,"#ffd54f",{studs:!1});this.spinner(280,8,0,3.4,1.8,1),this.spinner(292,8,0,3.4,-2.3,2),this.coinSpots.push([286,9.3,2.6],[286,9.3,-2.6]),this.plat(308,8,0,8,8,"#eceff1"),this.checkpoint(308,8,0,3),this.plat(331,8,0,38,8,"#546e7a");let r=Ih(this.world.renderer);this.lavaTex=r;let o=(g,_,m,f)=>{let S=new Ot(m,.08,f),y=new Nt({map:r,emissive:"#ff4500",emissiveIntensity:.9,emissiveMap:r,roughness:.4}),E=new bt(S,y);E.position.set(g,8.04,_),E.receiveShadow=!0,this.scene.add(E);let L=.5;this.col.add(un.fromCenter(g,8.2,_,Math.max(.2,m-L*2),.4,Math.max(.2,f-L*2),"trigger",{lava:!0}))};o(318,0,2,8),o(323.5,0,2.4,8),o(329,0,2.6,8),o(337,0,10,8);for(let[g,_]of[[333.6,1.6],[337,-1.6],[340.4,1.6]])this.plat(g,8.5,_,2.6,2.6,"#8d6e63",.6);o(346,0,2.2,8),this.coinSpots.push([323.5,9.9,0],[337,9.9,-1.6],[346,9.9,0]),this.lavaLight=new Zi("#ff6a00",30,26,2),this.lavaLight.position.set(331,11,0),this.scene.add(this.lavaLight),this.mover(354,8,0,5,5,"#ffd54f",{axis:"y",amp:4.5,speed:.8,phase:-Math.PI/2,base:12.5}),this.plat(362,17,0,4,4,e()),this.mover(369,18,0,4,4,e(),{axis:"z",amp:4,speed:1.6,phase:0}),this.vanisher(375.5,18.5,0,3.6,e()),this.coinSpots.push([362,18.3,0],[354,19,0]),this.plat(385,19,0,12,12,"#eceff1");let a=Lh(this.world.renderer);a.repeat.set(3,3);let c=new bt(new Le(10,3),new Nt({map:a,roughness:.8}));c.rotation.x=-Math.PI/2,c.position.set(381,19.02,0),c.receiveShadow=!0,this.scene.add(c),this.archway(381,19,"FINISH","#2e7d32"),this.finishCollider=this.col.add(un.fromCenter(382,20.5,0,3,3,10,"trigger",{finish:!0})),this.finishPos=new A(386,19,0);let l=new Nt({color:"#ffc107",metalness:.8,roughness:.25,emissive:"#6b4a00",emissiveIntensity:.3}),h=new Wt,d=new bt(new Se(1.1,.6,1.6,20),l);d.position.y=2.6;let u=new bt(new Se(.22,.22,1,12),l);u.position.y=1.4;let p=new bt(new Ot(1.6,.6,1.6),new Nt({color:"#37474f"}));p.position.y=.6,h.add(d,u,p),h.traverse(g=>{g.castShadow=!0}),h.position.set(389,19,0),this.trophy=h,this.scene.add(h),this.col.addBox(389,19.6,0,1.6,1.2,1.6),this.portal=this.makePortal(386,19,-4.2),this.portalCollider=this.col.add(un.fromCenter(386,20.5,-4.2,2,3,1.2,"trigger",{portal:!0}));for(let[g,_]of[[167,5],[222,6],[308,8],[385,19]])this.batch.addBox(g,_-1-6,0,2,12,2,"#90a4ae",{shade:.6,faces:{bottom:!0}})}archway(t,e,n,i){for(let o of[-5.5,5.5])this.batch.addBox(t,e+3,o,1.2,6,1.2,"#eceff1",{studs:!0}),this.col.addBox(t,e+3,o,1.2,6,1.2);this.batch.addBox(t,e+6.5,0,1.4,1,12.4,i,{studs:!0});let r=Ts(n,{bg:i,accent:"#ffffff",w:768,h:160});for(let o of[-1,1]){let a=new bt(new Le(9,1.9),new We({map:r}));a.position.set(t+o*.72,e+6.5,0),a.rotation.y=o*Math.PI/2,this.scene.add(a)}}checkpoint(t,e,n,i,r=!1){let o=new bt(io(3.2,.1,3.2),new Nt({map:this.world.studTex,color:r?"#1E88E5":"#9e9e9e",roughness:.6}));o.position.set(t,e+.05,n),o.receiveShadow=!0,this.scene.add(o);let a=new bt(new Se(.1,.1,4.2,10),new Nt({color:"#eceff1",metalness:.4,roughness:.4}));a.position.set(t+2.2,e+2.1,n+2.2),a.castShadow=!0,this.scene.add(a);let c=new bt(new Ot(1.4,.9,.06),new Nt({color:r?"#1E88E5":"#e53935",roughness:.7}));c.position.set(t+2.2-.75,e+3.7,n+2.2),c.castShadow=!0,this.scene.add(c);let l=this.col.add(un.fromCenter(t,e+1.5,n,3.2,3,3.2,"trigger",{checkpoint:i}));this.checkpoints[i]={index:i,pos:new A(t,e+.3,n),pad:o,flag:c,collider:l,reached:r},r&&(this.startCollider=l)}mover(t,e,n,i,r,o,{axis:a,amp:c,speed:l,phase:h,base:d}){let u=new bt(io(i,1,r),new Nt({map:this.world.studTex,color:o,roughness:.75}));u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);let p=new bt(new Ot(i*.7,.08,r*.7),new We({color:"#ffffff"}));p.position.y=-.52,u.add(p);let g=this.col.addDynamic(un.fromCenter(t,e-.5,n,i,1,r)),_=new A(t,(d??e)-.5,n);this.movers.push({mesh:u,c:g,origin:_,axis:a,amp:c,speed:l,phase:h,last:_.clone()})}vanisher(t,e,n,i,r){let o=new Nt({map:this.world.studTex,color:r,roughness:.75,transparent:!0,opacity:1}),a=new bt(io(i,1,i),o);a.position.set(t,e-.5,n),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a);let c=new kr(new Vr(new Ot(i+.04,1.04,i+.04)),new xs({color:"#ffffff",transparent:!0,opacity:.8}));a.add(c);let l=this.col.addDynamic(un.fromCenter(t,e-.5,n,i,1,i));this.vanishers.push({mesh:a,mat:o,edges:c,c:l,state:"solid",timer:0,baseColor:new St(r)})}spinner(t,e,n,i,r,o){let a=new Wt;a.position.set(t,e,n);let c=new bt(new Se(.45,.6,1.6,16),new Nt({color:"#37474f",roughness:.5,metalness:.3}));c.position.y=.8,c.castShadow=!0,a.add(c),this.col.addBox(t,e+.8,n,.9,1.6,.9,"solid",{noCamera:!0});let l=new Wt;l.position.y=1,a.add(l);let h=new Nt({color:"#ff1744",emissive:"#7f0000",emissiveIntensity:.4,roughness:.35}),d=new Nt({color:"#ffffff",roughness:.4});for(let p=0;p<o;p++){let g=new Wt;g.rotation.y=p*Math.PI*2/o,l.add(g);let _=new bt(new Ot(i*2,.55,.55),h);_.castShadow=!0,g.add(_);for(let m=-2;m<=2;m++){let f=new bt(new Ot(.3,.57,.57),d);f.position.x=m*i*.4,g.add(f)}}let u=new bt(new Se(.5,.5,.3,16),h);u.position.y=1.35,a.add(u),this.scene.add(a),this.spinners.push({rotor:l,x:t,y:e,z:n,radius:i,speed:r,arms:o})}makePortal(t,e,n){let i=new Wt,r=new Nt({color:"#5e35b1",roughness:.4});for(let l of[-1.3,1.3]){let h=new bt(new Ot(.5,3.6,.5),r);h.position.set(l,1.8,0),h.castShadow=!0,i.add(h)}let o=new bt(new Ot(3.1,.5,.5),r);o.position.y=3.6,i.add(o);let a=new bt(new Le(2.1,3.2),new We({color:"#b388ff",transparent:!0,opacity:.75,side:Ve}));a.position.y=1.8,i.add(a);let c=new bt(new Le(3,.7),new We({map:Ts("BACK TO SPAWN",{bg:"#5e35b1",accent:"#fff",w:512,h:120}),transparent:!0}));return c.position.y=4.4,i.add(c),i.position.set(t,e,n),this.scene.add(i),this.portalSwirl=a,i}update(t,e){this.t+=t,this.state==="running"&&(this.time+=t);for(let i of this.movers){let r=Math.sin(this.t*i.speed+i.phase)*i.amp,o=i.origin.clone();o[i.axis]+=r,i.c.dx=o.x-i.last.x,i.c.dy=o.y-i.last.y,i.c.dz=o.z-i.last.z,i.c.setCenter(o.x,o.y,o.z),i.mesh.position.copy(o),i.last.copy(o)}for(let i of this.vanishers){let r=e.grounded&&e.ground===i.c;if(i.state==="solid"&&r&&(i.state="fading",i.timer=.7),i.state==="fading"){i.timer-=t;let o=Math.max(0,i.timer/.7);i.mat.opacity=.25+.75*o,i.mesh.position.x+=Math.sin(this.t*60)*.02,i.timer<=0&&(i.state="gone",i.timer=2.6,i.c.active=!1,i.mesh.visible=!1,this.onVanish?.())}else i.state==="gone"&&(i.timer-=t,i.timer<=0&&(i.state="solid",i.c.active=!0,i.mesh.visible=!0,i.mat.opacity=1,i.mesh.position.set((i.c.minX+i.c.maxX)/2,(i.c.minY+i.c.maxY)/2,(i.c.minZ+i.c.maxZ)/2)))}for(let i of this.spinners){i.rotor.rotation.y+=i.speed*t;let r=e.pos.y;if(r>i.y+1.3||r+2.6<i.y+.7)continue;let o=e.pos.x-i.x,a=e.pos.z-i.z;if(!(Math.hypot(o,a)>i.radius+.9))for(let c=0;c<i.arms;c++){let l=i.rotor.rotation.y+c*Math.PI*2/i.arms,h=Math.cos(l),d=-Math.sin(l),u=ci.clamp(o*h+a*d,-i.radius,i.radius),p=h*u,g=d*u,_=o-p,m=a-g,f=Math.hypot(_,m);if(f<.85){let S=i.speed*g,y=-i.speed*p,E=Math.hypot(S,y);E>.3?(S/=E,y/=E):f>.01?(S=_/f,y=m/f):(S=1,y=0),e.applyKnockback(S*22,9,y*22),this.onHit?.();break}}}this.lavaTex.offset.set(this.t*.05,this.t*.03),this.lavaLight.intensity=26+Math.sin(this.t*3)*6,this.trophy.rotation.y+=t*1.2,this.portalSwirl.material.opacity=.55+Math.sin(this.t*4)*.2;for(let i of this.checkpoints)i&&(i.flag.rotation.y=Math.sin(this.t*3+i.index)*.15);let n=e.pos.x;this.state!=="running"&&n>122.5&&n<125&&this.currentCheckpoint===0&&e.pos.y>-2&&this.start(),this.state==="running"&&n<109&&this.cancel()}start(){this.state="running",this.time=0,this.onStart?.()}cancel(){this.state="idle",this.time=0,this.resetCheckpoints(),this.onCancel?.()}resetCheckpoints(){this.currentCheckpoint=0,this.checkpoints.forEach((t,e)=>{e>0&&(t.reached=!1,t.pad.material.color.set("#9e9e9e"),t.flag.material.color.set("#e53935"))})}reachCheckpoint(t){let e=this.checkpoints[t];return!e||t<=this.currentCheckpoint?!1:(this.currentCheckpoint=t,e.reached=!0,e.pad.material.color.set("#43a047"),e.flag.material.color.set("#43a047"),this.state!=="running"&&(this.state="running"),!0)}finish(){return this.state!=="running"?null:(this.state="finished",this.time)}respawnPoint(){return this.checkpoints[this.currentCheckpoint].pos.clone()}contains(t){return t.x>109}};var Cs=new A;function Qe(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Cs.copy(t),Cs[n]=0,Cs.normalize();let l=.5*o/(o+a),h=1-Cs.angleTo(s)/c;return Math.sign(Cs[e])===1?h*l:a/(o+a)+l+l*(1-h)}var dn=class extends Ot{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,g=new A,_=.5/i;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),u[f+0]=Qe(g,c,"z","y",r,n),u[f+1]=1-Qe(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),u[f+0]=1-Qe(g,c,"z","y",r,n),u[f+1]=1-Qe(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),u[f+0]=1-Qe(g,c,"x","z",r,t),u[f+1]=Qe(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),u[f+0]=1-Qe(g,c,"x","z",r,t),u[f+1]=1-Qe(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),u[f+0]=1-Qe(g,c,"x","y",r,t),u[f+1]=1-Qe(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),u[f+0]=Qe(g,c,"x","y",r,t),u[f+1]=1-Qe(g,c,"y","x",r,e);break}}};var xt={head:new dn(.74,.68,.68,4,.17),torso:new dn(1,1,.5,2,.06),sleeve:new dn(.48,.58,.48,2,.06),hand:new dn(.46,.44,.46,2,.08),leg:new dn(.48,.84,.48,2,.05),shoe:new dn(.5,.2,.54,2,.06),box:new Ot(1,1,1),rbox:new dn(1,1,1,2,.12),cyl:new Se(.5,.5,1,24),cone:new Hr(.5,1,20),sphere:new qi(.5,16,12),facePlane:new Le(.62,.62),torus:new ys(.32,.05,10,32)},Ft=(s,t={})=>new Nt({color:s,roughness:.55,metalness:.02,...t});function Ye(s,t,e=0,n=0,i=0,r=1,o=1,a=1){let c=new bt(s,t);return c.position.set(e,n,i),c.scale.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,c}var Ps=(s,t,e,n)=>s+(t-s)*(1-Math.exp(-e*n)),Xn=class{constructor(t=Es){this.root=new Wt,this.body=new Wt,this.root.add(this.body),this.mats={skin:Ft("#F5C99B"),shirt:Ft("#1E88E5"),pants:Ft("#37474F"),shoe:Ft("#2a2a2a",{roughness:.7}),hair:Ft("#4E342E",{roughness:.75})},this.torso=Ye(xt.torso,this.mats.shirt,0,1.5,0),this.body.add(this.torso),this.collar=Ye(xt.box,this.mats.skin,0,1.96,.14,.34,.08,.2),this.body.add(this.collar),this.headPivot=new Wt,this.headPivot.position.set(0,2,0),this.body.add(this.headPivot),this.head=Ye(xt.head,this.mats.skin,0,.36,0),this.headPivot.add(this.head),this.faceMat=new Nt({map:Uc("smile"),transparent:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2}),this.face=new bt(xt.facePlane,this.faceMat),this.face.position.set(0,.36,.342),this.headPivot.add(this.face),this.hairGroup=new Wt,this.hatGroup=new Wt,this.headPivot.add(this.hairGroup,this.hatGroup);let e=i=>{let r=new Wt;return r.position.set(i*.74,1.94,0),r.add(Ye(xt.sleeve,this.mats.shirt,0,-.27,0)),r.add(Ye(xt.hand,this.mats.skin,0,-.76,0)),this.body.add(r),r},n=i=>{let r=new Wt;return r.position.set(i*.25,1,0),r.add(Ye(xt.leg,this.mats.pants,0,-.42,0)),r.add(Ye(xt.shoe,this.mats.shoe,0,-.9,.02)),this.body.add(r),r};this.armL=e(1),this.armR=e(-1),this.legL=n(1),this.legR=n(-1),this.accGroup=new Wt,this.body.add(this.accGroup),this.gearGroup=new Wt,this.gearGroup.position.set(0,-.95,.12),this.armR.add(this.gearGroup),this.phase=0,this.time=Math.random()*10,this.pose={lean:0,bob:0,armSwing:0,legSwing:0,armUp:0,legAir:0},this.wave=0,this.cape=null,this.wings=null,this.config=null,this.setConfig(t)}setConfig(t){let e={...Es,...t},n=this.config||{};this.mats.skin.color.set(e.skin),this.mats.shirt.color.set(e.shirt),this.mats.pants.color.set(e.pants),this.mats.shoe.color.set(e.pants).multiplyScalar(.45),this.mats.hair.color.set(e.hairColor),n.face!==e.face&&(this.faceMat.map=Uc(e.face),this.faceMat.needsUpdate=!0),(n.hair!==e.hair||n.hat!==e.hat)&&this.buildHair(e.hair,e.hat),n.hat!==e.hat&&this.buildHat(e.hat),n.accessory!==e.accessory&&this.buildAccessory(e.accessory),this.config=e}clear(t){for(let e of[...t.children])t.remove(e),e.traverse(n=>{n.material&&n.material!==this.mats.hair&&!Object.values(this.mats).includes(n.material)&&n.material.dispose?.()})}buildHair(t,e){let n=this.hairGroup;this.clear(n);let i=this.mats.hair,r=(c,l,h,d,u,p,g=xt.rbox,_=0,m=0)=>{let f=Ye(g,i,c,l,h,d,u,p);return f.rotation.x=_,f.rotation.z=m,n.add(f),f},o=e&&e!=="none"&&e!=="headphones"&&e!=="halo";if(t==="none")return;let a=()=>{r(0,.66,-.03,.8,.18,.76),r(0,.46,-.34,.8,.5,.12),r(.37,.52,-.06,.1,.3,.64),r(-.37,.52,-.06,.1,.3,.64),r(-.08,.6,.33,.62,.12,.08,xt.rbox,0,.12)};switch(t){case"short":a();break;case"spiky":if(a(),!o)for(let c=0;c<6;c++){let l=c/6*Math.PI*2,h=r(Math.cos(l)*.2,.86,Math.sin(l)*.18-.03,.22,.32,.22,xt.cone);h.rotation.z=-Math.cos(l)*.5,h.rotation.x=Math.sin(l)*.5}o||r(0,.9,0,.24,.36,.24,xt.cone);break;case"long":a(),r(0,.12,-.36,.82,.9,.14),r(.39,.2,-.08,.1,.7,.5),r(-.39,.2,-.08,.1,.7,.5);break;case"bob":a(),r(0,.3,-.36,.84,.6,.14),r(.4,.32,0,.12,.56,.6),r(-.4,.32,0,.12,.56,.6);break;case"ponytail":a(),r(0,.62,-.44,.22,.22,.18);{let c=r(0,.3,-.52,.2,.6,.16);c.rotation.x=-.25}break;case"mohawk":if(r(.37,.46,-.06,.06,.2,.6),r(-.37,.46,-.06,.06,.2,.6),!o)for(let c=0;c<5;c++)r(0,.86-Math.abs(c-1.5)*.04,.26-c*.15,.14,.42,.16,xt.rbox,-.25);break;case"curly":for(let c=0;c<14;c++){let l=c/14*Math.PI*2;r(Math.cos(l)*.32,.6+c%2*.08,Math.sin(l)*.3-.04,.28,.28,.28,xt.sphere)}o||(r(0,.76,0,.6,.3,.6,xt.sphere),r(.1,.84,.12,.3,.3,.3,xt.sphere)),r(0,.4,-.34,.74,.46,.16,xt.rbox);break;case"buns":a(),o||(r(.28,.86,-.05,.3,.3,.3,xt.sphere),r(-.28,.86,-.05,.3,.3,.3,xt.sphere));break}}buildHat(t){let e=this.hatGroup;this.clear(e),this.halo=null;let n=(i,r,o,a,c,l,h,d)=>{let u=Ye(i,r,o,a,c,l,h,d);return e.add(u),u};switch(t){case"cap":{let i=Ft("#E53935");n(xt.sphere,i,0,.7,-.02,.82,.42,.78),n(xt.box,i,0,.66,.4,.62,.04,.34),n(xt.box,Ft("#ffffff"),0,.92,0,.08,.04,.08);break}case"beanie":{let i=Ft("#FFB300",{roughness:.9});n(xt.sphere,i,0,.72,0,.84,.56,.8),n(xt.cyl,Ft("#F57C00",{roughness:.9}),0,.6,0,.86,.14,.82),n(xt.sphere,Ft("#fff",{roughness:1}),0,1.02,0,.2,.2,.2);break}case"tophat":{let i=Ft("#1b1b1f",{roughness:.4});n(xt.cyl,i,0,.74,0,1,.05,1),n(xt.cyl,i,0,1.02,0,.6,.56,.6),n(xt.cyl,Ft("#c62828"),0,.82,0,.62,.1,.62);break}case"cowboy":{let i=Ft("#8D6E63",{roughness:.8}),r=n(xt.cyl,i,0,.74,0,1.25,.05,1.1);r.rotation.x=.05,n(xt.rbox,i,0,.92,0,.6,.36,.58),n(xt.cyl,Ft("#3E2723"),0,.79,0,.62,.08,.62);break}case"headphones":{let i=Ye(new ys(.42,.045,8,24,Math.PI),Ft("#212121"),0,.42,0);e.add(i);let r=Ft("#E91E63");n(xt.cyl,r,.42,.4,0,.3,.12,.3).rotation.z=Math.PI/2,n(xt.cyl,r,-.42,.4,0,.3,.12,.3).rotation.z=Math.PI/2;break}case"cone":{n(xt.cone,Ft("#FF6D00"),0,1.05,0,.66,.72,.66),n(xt.cyl,Ft("#fff"),0,1,0,.42,.1,.42),n(xt.box,Ft("#FF6D00"),0,.72,0,.8,.06,.8);break}case"crown":{let i=Ft("#FFC107",{metalness:.7,roughness:.25,emissive:"#5a3a00",emissiveIntensity:.3});n(xt.cyl,i,0,.8,0,.72,.16,.72);for(let r=0;r<6;r++){let o=r/6*Math.PI*2;n(xt.cone,i,Math.cos(o)*.3,.98,Math.sin(o)*.3,.14,.24,.14),n(xt.sphere,Ft(r%2?"#E53935":"#1E88E5",{roughness:.2}),Math.cos(o)*.36,.8,Math.sin(o)*.36,.08,.08,.08)}break}case"halo":{let i=n(xt.torus,new Nt({color:"#FFF59D",emissive:"#FFEB3B",emissiveIntensity:1.4}),0,1.05,0,.9,.9,.9);i.rotation.x=Math.PI/2,i.castShadow=!1,this.halo=i;break}}}buildAccessory(t){let e=this.accGroup;this.clear(e),this.cape=null,this.wings=null,this.headFollow=null;let n=(i,r,o,a,c,l,h,d,u=e)=>{let p=Ye(i,r,o,a,c,l,h,d);return u.add(p),p};switch(t){case"backpack":{let i=Ft("#FF7043");n(xt.rbox,i,0,1.52,-.38,.72,.8,.3),n(xt.rbox,Ft("#E64A19"),0,1.36,-.55,.5,.34,.1),n(xt.box,Ft("#5D4037"),.26,1.6,-.02,.08,.9,.54),n(xt.box,Ft("#5D4037"),-.26,1.6,-.02,.08,.9,.54);break}case"glasses":{let i=Ft("#212121"),r=new Wt;r.position.copy(this.headPivot.position),e.add(r),this.headFollow=r,n(xt.torus,i,.17,.42,.37,.42,.42,.42,r),n(xt.torus,i,-.17,.42,.37,.42,.42,.42,r),n(xt.box,i,0,.44,.37,.12,.03,.03,r);break}case"scarf":{let i=Ft("#D32F2F",{roughness:.95});n(xt.rbox,i,0,2.02,0,.84,.18,.62),n(xt.rbox,i,.22,1.72,.28,.2,.5,.08),n(xt.box,Ft("#FFFFFF",{roughness:1}),.22,1.58,.33,.21,.06,.02);break}case"cape":{let i=new Wt;i.position.set(0,1.98,-.28),e.add(i);let r=Ft("#C62828",{side:Ve,roughness:.8});n(xt.box,r,0,-.85,-.03,1.1,1.7,.05,i),n(xt.box,Ft("#FFC107",{metalness:.6,roughness:.3}),.4,0,.05,.16,.16,.08,i),n(xt.box,Ft("#FFC107",{metalness:.6,roughness:.3}),-.4,0,.05,.16,.16,.08,i),this.cape=i;break}case"sword":{let i=new Wt;i.position.set(0,1.5,-.32),i.rotation.z=.7,e.add(i),n(xt.box,Ft("#90CAF9",{emissive:"#1565C0",emissiveIntensity:.25}),0,.3,0,.16,1.3,.06,i),n(xt.box,Ft("#FFB300"),0,-.36,0,.5,.08,.1,i),n(xt.box,Ft("#5D4037"),0,-.56,0,.1,.34,.1,i);break}case"wings":{let i=Ft("#FFFFFF",{roughness:.9}),r=o=>{let a=new Wt;a.position.set(o*.18,1.72,-.3),e.add(a);for(let c=0;c<4;c++)n(xt.rbox,i,o*(.35+c*.18),.25-c*.12,-.05,.36,.7-c*.12,.08,a);return a};this.wings=[r(1),r(-1)];break}}}setGear(t){this.clear(this.gearGroup);let e=Ke.find(i=>i.id===t);if(!e)return;let n=Ft(e.color,{emissive:e.color,emissiveIntensity:.35,roughness:.3});for(let i=0;i<5;i++){let r=Ye(xt.torus,n,0,-.05-i*.08,0,.35,.35,.35);r.rotation.x=Math.PI/2,this.gearGroup.add(r)}this.gearGroup.add(Ye(xt.cyl,Ft("#424242"),0,.08,0,.12,.2,.12))}update(t,e){this.time+=t;let{speed:n=0,grounded:i=!0,vy:r=0,runRatio:o=0}=e,a=Math.min(1,n/6),c=i?0:1;this.phase+=t*(4+n*.75)*(i?1:.3);let l=this.pose,h=(.55+o*.45)*a*(1-c);l.armSwing=Ps(l.armSwing,h,12,t),l.legSwing=Ps(l.legSwing,h*1.05,12,t),l.armUp=Ps(l.armUp,c?r>0?1:.8:0,10,t),l.legAir=Ps(l.legAir,c,10,t),l.lean=Ps(l.lean,a*(.04+o*.12)*(1-c),6,t);let d=Math.sin(this.phase),u=1-a,p=Math.sin(this.time*2.2)*.02*u;this.legL.rotation.x=d*l.legSwing-l.legAir*.35,this.legR.rotation.x=-d*l.legSwing+l.legAir*.25;let g=this.wave>0?1:0;if(this.armL.rotation.x=-d*l.armSwing*.9-l.armUp*2.7+p,this.armR.rotation.x=d*l.armSwing*.9-l.armUp*2.7-p,this.armL.rotation.z=.05+u*Math.sin(this.time*1.6)*.03+l.armUp*.25,this.armR.rotation.z=-.05-u*Math.sin(this.time*1.6+1)*.03-l.armUp*.25,g&&(this.wave-=t,this.armR.rotation.x=-2.8,this.armR.rotation.z=-.35+Math.sin(this.time*14)*.35),this.body.position.y=Math.abs(Math.sin(this.phase))*.09*a*(1-c)+p*.8,this.body.rotation.x=l.lean,this.headPivot.rotation.x=-l.lean*.6+Math.sin(this.time*1.3)*.02*u,this.headPivot.rotation.y=Math.sin(this.time*.5)*.12*u,this.headFollow&&this.headFollow.rotation.copy(this.headPivot.rotation),this.cape&&(this.cape.rotation.x=.08+a*(.35+o*.45)+Math.sin(this.time*6)*.05*(.3+a)+c*.4),this.wings){let _=Math.sin(this.time*(c?14:2))*(c?.5:.12);this.wings[0].rotation.y=-.35-_,this.wings[1].rotation.y=.35+_}this.halo&&(this.halo.position.y=1.05+Math.sin(this.time*2)*.04)}doWave(t=1.6){this.wave=t}};var ng=.55,ig=2.6,lo=class{constructor(t,e,n){this.col=e,this.avatar=new Xn(n),t.add(this.avatar.root),this.pos=new A,this.vel=new A,this.yaw=0,this.grounded=!1,this.ground=null,this.coyote=0,this.jumpBuffer=0,this.visualY=0,this.stepTimer=0,this.airTime=0,this.frozen=!1,this.gear=null,this.walkSpeed=9,this.runSpeed=15,this.jumpVel=14,this.gravity=42,this.events={},this.knock=new A}on(t,e){var n;((n=this.events)[t]||(n[t]=[])).push(e)}emit(t,...e){(this.events[t]||[]).forEach(n=>n(...e))}teleport(t,e=this.yaw){this.pos.copy(t),this.vel.set(0,0,0),this.knock.set(0,0,0),this.visualY=t.y,this.yaw=e,this.avatar.root.position.copy(t),this.avatar.root.rotation.y=e}setGear(t){this.gear=t,this.avatar.setGear(t)}applyKnockback(t,e,n){this.knock.set(t,0,n),this.vel.y=Math.max(this.vel.y,e),this.grounded=!1}update(t,e,n){let i=this.gear==="speed"?1.4:1,r=this.gear==="gravity"?.55:1,o=0,a=0;this.frozen||(e.isDown("KeyW","ArrowUp")&&(a-=1),e.isDown("KeyS","ArrowDown")&&(a+=1),e.isDown("KeyA","ArrowLeft")&&(o-=1),e.isDown("KeyD","ArrowRight")&&(o+=1));let c=Math.hypot(o,a),h=(e.isDown("ShiftLeft","ShiftRight")?this.runSpeed:this.walkSpeed)*i,d=0,u=0;if(c>0){o/=c,a/=c;let q=Math.sin(n),x=Math.cos(n);d=(o*x+a*q)*h,u=(-o*q+a*x)*h}let p=this.grounded?70:28,g=d-this.vel.x,_=u-this.vel.z,m=Math.hypot(g,_),f=p*t;m>f?(this.vel.x+=g/m*f,this.vel.z+=_/m*f):(this.vel.x=d,this.vel.z=u),this.coyote=this.grounded?.12:this.coyote-t,this.jumpBuffer=!this.frozen&&e.wasPressed("Space")?.14:this.jumpBuffer-t,this.jumpBuffer>0&&this.coyote>0&&(this.vel.y=this.jumpVel*(this.gear==="gravity"?1.12:1),this.grounded=!1,this.coyote=0,this.jumpBuffer=0,this.emit("jump")),!e.isDown("Space")&&this.vel.y>4&&!this.grounded&&(this.vel.y-=60*t*r),this.vel.y-=this.gravity*r*t,this.vel.y<-60&&(this.vel.y=-60),this.grounded&&this.ground&&(this.ground.dx||this.ground.dy||this.ground.dz)&&(this.pos.x+=this.ground.dx,this.pos.z+=this.ground.dz,this.ground.dy>0&&(this.pos.y+=this.ground.dy));let S=new A(this.vel.x+this.knock.x,this.vel.y,this.vel.z+this.knock.z);this.knock.multiplyScalar(Math.exp(-3*t));let y=this.grounded,E=this.vel.y,L=this.col.move(this.pos,S,t,ng,ig,{wasGrounded:y});this.vel.y=S.y,S.x===0&&(this.vel.x=0,this.knock.x=0),S.z===0&&(this.vel.z=0,this.knock.z=0),this.grounded=L.grounded,this.ground=L.ground,this.grounded&&!y&&this.airTime>.25&&this.emit("land",E),this.airTime=this.grounded?0:this.airTime+t;for(let q of L.touched)this.emit("touch",q);let R=Math.hypot(this.vel.x,this.vel.z);if(R>.5){let x=Math.atan2(this.vel.x,this.vel.z)-this.yaw;x=Math.atan2(Math.sin(x),Math.cos(x)),this.yaw+=x*(1-Math.exp(-14*t))}L.stepped>0||this.grounded&&this.visualY<this.pos.y?this.visualY+=(this.pos.y-this.visualY)*(1-Math.exp(-18*t)):this.visualY=this.pos.y,Math.abs(this.visualY-this.pos.y)>1.5&&(this.visualY=this.pos.y);let T=this.avatar.root;T.position.set(this.pos.x,this.visualY,this.pos.z),T.rotation.y=this.yaw;let U=ci.clamp((R-this.walkSpeed)/(this.runSpeed-this.walkSpeed),0,1);this.avatar.update(t,{speed:R,grounded:this.grounded,vy:this.vel.y,runRatio:U}),this.grounded&&R>1&&(this.stepTimer-=t*R,this.stepTimer<=0&&(this.stepTimer=3.2,this.emit("step"))),this.pos.y<-45&&this.emit("fall")}get head(){return new A(this.pos.x,this.visualY+2.4,this.pos.z)}};var Oc=[{name:"Mayor Brickley",area:"plaza",idx:0,wander:0,avatar:{skin:"#EAB98A",shirt:"#3949AB",pants:"#212121",hair:"short",hairColor:"#E8E8E8",face:"happy",hat:"tophat",accessory:"none"},lines:["Welcome to Blockverse, friend!","Collect coins all over the island to level up and buy cool stuff.","Feeling brave? The Sky Obby is east of here \u2014 follow the red sign!","Press C anytime to open your Avatar Editor."]},{name:"Pixel",area:"plaza",idx:1,wander:9,avatar:{skin:"#FFDCB5",shirt:"#D81B60",pants:"#5E35B1",hair:"buns",hairColor:"#EC407A",face:"grin",hat:"none",accessory:"backpack"},lines:["Hiii! Did you know you can run by holding Shift?","Tip: you can let go of Space early for a tiny hop!","I found a coin on top of the fountain once. Shhh."]},{name:"Coach Stud",area:"plaza",idx:2,wander:6,action:"obby",avatar:{skin:"#8D5524",shirt:"#E53935",pants:"#FFFFFF",hair:"none",hairColor:"#2B1B12",face:"determined",hat:"cap",accessory:"none"},lines:["The Sky Obby is no joke. Checkpoints save your progress!","Watch out for the spinners and do NOT touch the lava.","Beat it fast and I'll be very impressed. Best times are saved!"]},{name:"Baker Bea",area:"village",idx:0,wander:5,avatar:{skin:"#F5C99B",shirt:"#FFFFFF",pants:"#6D4C41",hair:"bob",hairColor:"#D7A35E",face:"smile",hat:"none",accessory:"scarf"},lines:["Fresh bread! Well... fresh blocks of bread.","The windmill in Flower Meadow grinds all my flour.","Have you climbed the roofs? There are coins up there!"]},{name:"Shopkeeper Sol",area:"village",idx:1,wander:0,action:"shop",avatar:{skin:"#C68642",shirt:"#FFB300",pants:"#3E2723",hair:"curly",hairColor:"#2B1B12",face:"grin",hat:"cowboy",accessory:"none"},lines:["Looking sharp! Want to browse my wares?","Opening the Avatar Shop for you now!"]},{name:"Grandpa Oak",area:"village",idx:2,wander:3,avatar:{skin:"#D69E6F",shirt:"#6D4C41",pants:"#546E7A",hair:"short",hairColor:"#E8E8E8",face:"sleepy",hat:"beanie",accessory:"glasses"},lines:["Back in my day, bricks only came in grey.","The Whispering Woods are west. Lovely campfire there.","zzz... oh! Hello there."]},{name:"Ziggy",area:"village",idx:3,wander:10,avatar:{skin:"#FFDCB5",shirt:"#7CB342",pants:"#1E88E5",hair:"spiky",hairColor:"#29B6F6",face:"silly",hat:"none",accessory:"none"},lines:["Race you to the lake! Just kidding, I walk slowly.","Ever tried the Gravity Coil? You can jump to the moon!"]},{name:"Ranger Fern",area:"forest",idx:0,wander:8,avatar:{skin:"#A86B3C",shirt:"#2E9E57",pants:"#6D4C41",hair:"ponytail",hairColor:"#4E342E",face:"happy",hat:"cowboy",accessory:"backpack"},lines:["Shh, listen... the woods are whispering.","Some trees hide coins in their leaves. Jump up and look!","Mind the mushrooms \u2014 they make great platforms."]},{name:"Marina",area:"lake",idx:0,wander:6,avatar:{skin:"#F5C99B",shirt:"#00ACC1",pants:"#FFFFFF",hair:"long",hairColor:"#F6E27F",face:"wink",hat:"none",accessory:"none"},lines:["The water is only knee-deep. Go for a paddle!","Hop across the lily pads \u2014 each one has a coin!"]},{name:"Climber Kai",area:"hills",idx:0,wander:7,avatar:{skin:"#6B3E1E",shirt:"#FF7043",pants:"#37474F",hair:"mohawk",hairColor:"#C62828",face:"determined",hat:"none",accessory:"backpack"},lines:["Climb the lookout tower for the best view on the island.","Three coins wait at the very top!"]},{name:"Daisy",area:"meadow",idx:0,wander:8,avatar:{skin:"#FFDCB5",shirt:"#F48FB1",pants:"#8E24AA",hair:"long",hairColor:"#FF7043",face:"happy",hat:"none",accessory:"wings"},lines:["Aren't the flowers beautiful today?","The bees here make the sweetest honey blocks."]},{name:"Farmer Joe",area:"meadow",idx:1,wander:4,avatar:{skin:"#EAB98A",shirt:"#1E88E5",pants:"#A1887F",hair:"short",hairColor:"#8D6E63",face:"smile",hat:"cowboy",accessory:"none"},lines:["That windmill has been spinning for a hundred years.","There is a coin on the very top of it, if you can get there!"]}],sg=.5,rg=2.6,Fc=class{constructor(t,e,n,i,r){this.def=n,this.name=n.name,this.col=e,this.avatar=new Xn(n.avatar),t.add(this.avatar.root);let o=Math.max(0,e.groundHeight(i,r,50));this.home=new A(i,o,r),this.pos=this.home.clone(),this.vel=new A,this.yaw=Math.random()*Math.PI*2,this.state="idle",this.timer=1+Math.random()*3,this.target=null,this.talkTimer=0,this.lineIdx=0,this.grounded=!0,this.stuck=0,this.lookAt=null,this.avatar.root.position.copy(this.pos)}nextLine(){let t=this.def.lines[this.lineIdx%this.def.lines.length];return this.lineIdx++,t}talk(t){this.talkTimer=5,this.lookAt=t.clone(),this.state="idle",this.vel.set(0,0,0),this.avatar.doWave(1.2)}pickTarget(){let t=this.def.wander;if(!t)return null;for(let e=0;e<8;e++){let n=Math.random()*Math.PI*2,i=2+Math.random()*t,r=this.home.x+Math.cos(n)*i,o=this.home.z+Math.sin(n)*i,a=this.col.groundHeight(r,o,this.pos.y+1.1);if(a>-.1&&Math.abs(a-this.pos.y)<=1.05)return new A(r,a,o)}return null}update(t){let e=0;if(this.talkTimer>0){if(this.talkTimer-=t,this.lookAt){let n=Math.atan2(this.lookAt.x-this.pos.x,this.lookAt.z-this.pos.z),i=Math.atan2(Math.sin(n-this.yaw),Math.cos(n-this.yaw));this.yaw+=i*(1-Math.exp(-8*t))}}else if(this.state==="idle")this.timer-=t,this.timer<=0&&(this.target=this.pickTarget(),this.target?(this.state="walk",this.stuck=0):this.timer=2+Math.random()*3);else if(this.state==="walk"){let n=this.target.x-this.pos.x,i=this.target.z-this.pos.z,r=Math.hypot(n,i);if(r<.6||this.stuck>1.2)this.state="idle",this.timer=2+Math.random()*4,this.vel.x=this.vel.z=0;else{this.vel.x=n/r*3.6,this.vel.z=i/r*3.6;let a=Math.atan2(n,i),c=Math.atan2(Math.sin(a-this.yaw),Math.cos(a-this.yaw));this.yaw+=c*(1-Math.exp(-6*t))}}if(this.state==="walk"||!this.grounded){this.vel.y-=40*t;let n=this.pos.clone(),i=this.col.move(this.pos,this.vel,t,sg,rg,{wasGrounded:this.grounded});this.grounded=i.grounded,e=Math.hypot(this.pos.x-n.x,this.pos.z-n.z)/Math.max(t,1e-4),this.state==="walk"&&e<.8?this.stuck+=t:this.stuck=0,this.pos.y<-5&&(this.pos.copy(this.home),this.vel.set(0,0,0))}this.avatar.root.position.lerp(this.pos,1-Math.exp(-20*t)),this.avatar.root.rotation.y=this.yaw,this.avatar.update(t,{speed:e,grounded:this.grounded,vy:this.vel.y,runRatio:0})}get headPos(){return new A(this.avatar.root.position.x,this.avatar.root.position.y+3.4,this.avatar.root.position.z)}};function Uh(s,t,e){return Oc.map(n=>{let i=e[n.area]||[[0,0]],[r,o]=i[n.idx%i.length];return new Fc(s,t,n,r,o)})}var og=90,ho=class{constructor(t,e){this.coins=e.map(([o,a,c],l)=>({pos:new A(o,a,c),active:!0,timer:0,phase:l*.7}));let n=this.coins.length,i=new Se(.5,.5,.12,24);i.rotateX(Math.PI/2);let r=new Se(.34,.34,.16,6);r.rotateX(Math.PI/2),this.rim=new rn(i,new Nt({color:"#ffc928",metalness:.75,roughness:.25,emissive:"#7a5200",emissiveIntensity:.45}),n),this.face=new rn(r,new Nt({color:"#fff176",metalness:.6,roughness:.3,emissive:"#a07800",emissiveIntensity:.5}),n),this.rim.castShadow=!0,this.rim.frustumCulled=this.face.frustumCulled=!1,t.add(this.rim,this.face),this.dummy=new le,this.t=0}get remaining(){return this.coins.filter(t=>t.active).length}update(t,e,n){this.t+=t;let i=this.dummy,r=e.x,o=e.y+1.3,a=e.z;this.coins.forEach((c,l)=>{if(!c.active)c.timer-=t,c.timer<=0&&(c.active=!0);else{let d=c.pos.x-r,u=c.pos.y-o,p=c.pos.z-a;d*d+p*p<1.6&&Math.abs(u)<1.9&&(c.active=!1,c.timer=og,n(c))}let h=c.active?1:0;i.position.set(c.pos.x,c.pos.y+Math.sin(this.t*2.5+c.phase)*.18,c.pos.z),i.rotation.set(0,this.t*2.6+c.phase,0),i.scale.setScalar(h||1e-4),i.updateMatrix(),this.rim.setMatrixAt(l,i.matrix),this.face.setMatrixAt(l,i.matrix)}),this.rim.instanceMatrix.needsUpdate=!0,this.face.instanceMatrix.needsUpdate=!0}};var Bc=600,uo=class{constructor(t){this.mesh=new rn(new Ot(1,1,1),new We({toneMapped:!1}),Bc),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(_h),t.add(this.mesh),this.parts=[],this.dummy=new le,this.color=new St;for(let e=0;e<Bc;e++)this.mesh.setColorAt(e,this.color.set("#fff"))}burst(t,{count:e=20,colors:n=["#ffd54f"],speed:i=6,up:r=4,gravity:o=14,life:a=.8,size:c=.2,spin:l=8}={}){for(let h=0;h<e;h++){this.parts.length>=Bc&&this.parts.shift();let d=Math.random()*Math.PI*2,u=Math.random()*.8+.2;this.parts.push({p:t.clone(),v:new A(Math.cos(d)*i*u,r+Math.random()*r,Math.sin(d)*i*u),r:new A(Math.random()*6,Math.random()*6,Math.random()*6),life:a,max:a,size:c*(.6+Math.random()*.8),gravity:o,spin:l,color:n[Math.floor(Math.random()*n.length)]})}}update(t){let e=this.dummy;this.parts=this.parts.filter(n=>(n.life-=t)>0),this.parts.forEach((n,i)=>{n.v.y-=n.gravity*t,n.v.multiplyScalar(Math.exp(-1.2*t)),n.p.addScaledVector(n.v,t),n.r.addScalar(n.spin*t),e.position.copy(n.p),e.rotation.set(n.r.x,n.r.y,n.r.z),e.scale.setScalar(n.size*Math.min(1,n.life/n.max*2.5)),e.updateMatrix(),this.mesh.setMatrixAt(i,e.matrix),this.mesh.setColorAt(i,this.color.set(n.color))}),this.mesh.count=this.parts.length,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}};var Is=s=>60+s*40,An={coin:5,npc:20,checkpoint:15,obby:120,obbyBest:60},fo=class{constructor(t,e){this.p=t,this.save=e,this.listeners=[]}onChange(t){this.listeners.push(t)}changed(t){this.save(),this.listeners.forEach(e=>e(t))}addXP(t){let e=this.p;e.xp+=t;let n=0;for(;e.xp>=Is(e.level);)e.xp-=Is(e.level),e.level++,n++;return this.changed({type:"xp",amount:t,levelUp:n>0,level:e.level}),n}addCoins(t){this.p.coins+=t,this.changed({type:"coins",amount:t})}owns(t,e){let n=kc(t,e);return n?t!=="gear"&&n.price===0?!0:this.p.owned.includes(`${t}:${e}`):!1}canBuy(t,e){let n=kc(t,e);return n?this.owns(t,e)?{ok:!1,why:"Owned"}:this.p.level<n.level?{ok:!1,why:`Reach level ${n.level}`}:this.p.coins<n.price?{ok:!1,why:`Need ${n.price-this.p.coins} more coins`}:{ok:!0}:{ok:!1,why:"Unknown item"}}buy(t,e){let n=this.canBuy(t,e);if(!n.ok)return n;let i=kc(t,e);return this.p.coins-=i.price,this.p.owned.push(`${t}:${e}`),this.changed({type:"buy",cat:t,id:e}),{ok:!0}}nextUnlock(){let t=[...li.map(e=>["face",e]),...hi.map(e=>["hair",e]),...ui.map(e=>["hat",e]),...di.map(e=>["accessory",e]),...Ke.map(e=>["gear",e])].filter(([,e])=>e.level>this.p.level).sort((e,n)=>e[1].level-n[1].level);return t[0]?{cat:t[0][0],item:t[0][1]}:null}};function kc(s,t){return{face:li,hair:hi,hat:ui,accessory:di,gear:Ke}[s]?.find(n=>n.id===t)}var et=s=>document.getElementById(s),qn=s=>String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Ls(s){if(s==null)return"\u2014";let t=Math.floor(s/60),e=s-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`}var ag={skin:{title:"Skin Tone",colors:Qr,key:"skin"},shirt:{title:"Shirt Colour",colors:Qi,key:"shirt"},pants:{title:"Pants Colour",colors:Qi,key:"pants"},face:{title:"Faces",items:li,key:"face"},hair:{title:"Hair Styles",items:hi,key:"hair"},hat:{title:"Hats",items:ui,key:"hat",view:"head"},accessory:{title:"Accessories",items:di,key:"accessory"},gear:{title:"Gear",items:Ke}},cg=new Set(["backpack","cape","wings","sword"]),po=class{constructor(t){this.game=t,this.labels=new Map,this.custCat="skin",this.invTab="gear",this.bindMenu(),this.bindHud(),this.bindSettings(),this.bindCustomize(),this.bindModals(),document.addEventListener("pointerdown",e=>{e.target.closest("button, .swatch, .item, .slot")&&t.audio.play("click")})}show(t){et(t).classList.add("show"),et(t).classList.remove("hidden")}hide(t){et(t).classList.remove("show")}modal(t,e){et(t).classList.toggle("hidden",!e)}isModalOpen(){return["inventory","settings","pause","finish","confirm"].some(t=>!et(t).classList.contains("hidden"))}isOpen(t){return!et(t).classList.contains("hidden")}setLockHint(t){et("lock-hint").classList.toggle("hidden",!t)}closeModals(){["inventory","settings","pause","finish","confirm"].forEach(t=>this.modal(t,!1))}setLoading(t,e){et("load-fill").style.width=`${Math.round(t*100)}%`,e&&(et("load-text").textContent=e)}hideLoading(){et("loading").classList.remove("show")}fade(t){et("fade").classList.toggle("on",t)}toast(t,{icon:e="\u2728",cls:n=""}={}){let i=document.createElement("div");for(i.className=`toast ${n}`,i.innerHTML=`<span class="t-ico">${e}</span><span>${qn(t)}</span>`,et("toasts").appendChild(i),setTimeout(()=>i.remove(),3700);et("toasts").children.length>4;)et("toasts").firstChild.remove()}areaBanner(t){let e=et("area-banner");e.innerHTML=`<small>NOW ENTERING</small>${qn(t)}`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}confirm(t,e,n,{yes:i="Yes",danger:r=!0}={}){et("confirm-yes").textContent=i,et("confirm-yes").className=`btn small ${r?"btn-red":"btn-play"}`,et("confirm-title").textContent=t,et("confirm-text").textContent=e,this.modal("confirm",!0),et("confirm-yes").onclick=()=>{this.modal("confirm",!1),n()},et("confirm-no").onclick=()=>this.modal("confirm",!1)}bindMenu(){let t=this.game;et("btn-play").onclick=()=>t.play(),et("btn-avatar").onclick=()=>t.openCustomize(),et("btn-settings").onclick=()=>this.openSettings();let e=et("profile-name");e.addEventListener("change",()=>{let n=e.value.trim().replace(/[^\w\- ]/g,"").slice(0,16);t.profile.name=n||t.profile.name,e.value=t.profile.name,t.saveProfile(),this.refreshProfile()}),e.addEventListener("keydown",n=>{n.key==="Enter"&&e.blur(),n.stopPropagation()})}showMenu(t){et("menu").classList.toggle("show",t),t&&this.refreshProfile()}refreshProfile(){let t=this.game.profile;et("profile-name").value=t.name,et("profile-level").textContent=t.level;let e=Is(t.level);et("profile-xp-fill").style.width=`${t.xp/e*100}%`,et("profile-xp-text").textContent=`${t.xp} / ${e} XP`,et("stat-coins").textContent=t.coins,et("stat-best").textContent=Ls(t.bestTime),et("stat-clears").textContent=t.stats.obbyCompletions,et("stat-friends").textContent=`${t.stats.npcsMet.length}/${Oc.length}`;let n=this.game.progression.nextUnlock();et("next-unlock").textContent=n?`\u{1F513} Next unlock at level ${n.item.level}: ${n.item.name}`:"\u{1F3C5} Everything unlocked \u2014 you legend!",this.game.thumbs&&(et("profile-thumb").style.backgroundImage=`url(${this.game.thumbs.shot(t.avatar,"head")})`),this.refreshHud()}bindHud(){let t=this.game;et("hud-menu").onclick=()=>t.togglePause(!0),et("hud-bag").onclick=()=>this.toggleInventory(),et("hud-avatar").onclick=()=>t.openCustomize(),document.querySelectorAll(".hotbar .slot[data-gear]").forEach(e=>{e.style.pointerEvents="auto",e.onclick=()=>t.toggleGear(e.dataset.gear)})}showHud(t){et("hud").classList.toggle("hidden",!t)}refreshHud(t=!1){let e=this.game.profile;if(et("hud-name").textContent=e.name,et("hud-level").textContent=e.level,et("hud-xp-fill").style.width=`${e.xp/Is(e.level)*100}%`,et("hud-coins").textContent=e.coins,et("cust-coins").textContent=e.coins,t){let n=et("coin-chip");n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}document.querySelectorAll(".hotbar .slot[data-gear]").forEach(n=>{let i=n.dataset.gear;n.classList.toggle("locked",!this.game.progression.owns("gear",i)),n.classList.toggle("equipped",e.gear===i)})}setTimer(t,e,n,i){et("obby-timer").classList.toggle("hidden",!t),t&&(et("timer-value").textContent=Ls(e),et("timer-cp").textContent=`Checkpoint ${n}/${i}`)}setPrompt(t){let e=et("interact-prompt");if(!t){e.classList.add("hidden");return}et("interact-text").textContent=t,e.classList.remove("hidden")}setFps(t,e){et("fps").classList.toggle("hidden",!t),t&&(et("fps").textContent=`${e} FPS`)}updateLabels(t,e,n){let i=window.innerWidth,r=window.innerHeight,o=new A,a=et("labels");for(let c of e){let l=this.labels.get(c);if(!l){let g=document.createElement("div");g.className="nametag",g.textContent=c.name,a.appendChild(g),l={tag:g,bubble:null,bubbleUntil:0},this.labels.set(c,l)}o.copy(c.headPos);let h=o.distanceTo(n);o.project(t);let d=o.z<1&&h<60,u=(o.x*.5+.5)*i,p=(-o.y*.5+.5)*r;l.tag.style.display=d&&h<40?"":"none",l.tag.style.left=`${u}px`,l.tag.style.top=`${p}px`,l.tag.style.opacity=String(Math.min(1,(40-h)/10)),l.bubble&&(performance.now()>l.bubbleUntil||h>24?(l.bubble.remove(),l.bubble=null,l.tag.style.visibility=""):(l.bubble.style.left=`${u}px`,l.bubble.style.top=`${p-6}px`,l.bubble.style.display=d?"":"none",l.tag.style.visibility="hidden"))}}speak(t,e,n=4.8){let i=this.labels.get(t);if(!i)return;i.bubble?.remove();let r=document.createElement("div");r.className="bubble",r.innerHTML=`<b>${qn(t.name)}</b>`;let o=document.createElement("span");r.appendChild(o),et("labels").appendChild(r),i.bubble=r,i.bubbleUntil=performance.now()+n*1e3;let a=0;clearInterval(i.typer),i.typer=setInterval(()=>{if(!r.isConnected||a>=e.length){clearInterval(i.typer);return}a=Math.min(e.length,a+2),o.textContent=e.slice(0,a),a%6===0&&this.game.audio.play("blip")},28)}toggleInventory(t){let e=t??et("inventory").classList.contains("hidden");this.modal("inventory",e),e&&this.renderInventory()}renderInventory(){let t=this.game,e=t.profile;document.querySelectorAll("#inv-tabs .tab").forEach(i=>i.classList.toggle("active",i.dataset.tab===this.invTab));let n=et("inv-grid");if(n.innerHTML="",this.invTab==="gear")for(let i of Ke){let r=t.progression.owns("gear",i.id),o=document.createElement("button");o.className=`item ${e.gear===i.id?"selected":""} ${r?"":"locked"}`,o.innerHTML=`<div class="thumb"><div class="slot-ico" style="--c:${i.color};width:40px;height:40px;border-width:7px"></div></div>${qn(i.name)}<span class="muted" style="font-size:11px">${qn(i.desc)}</span>${r?`<span class="tag ${e.gear===i.id?"equipped":"owned"}">${e.gear===i.id?"Equipped":"Equip"}</span>`:`<span class="tag lock">Shop \xB7 Lv ${i.level}</span>`}`,o.onclick=()=>{r?(t.toggleGear(i.id),this.renderInventory()):this.toast("Buy this in the Avatar Shop (Gear tab).",{icon:"\u{1F6D2}"})},n.appendChild(o)}else{let i=[["hat",ui],["accessory",di],["hair",hi],["face",li]],r=!1;for(let[o,a]of i)for(let c of a){if(c.id==="none"||!t.progression.owns(o,c.id))continue;r=!0;let l=e.avatar[o]===c.id,h=document.createElement("button");h.className=`item ${l?"selected":""}`,h.innerHTML=`<div class="thumb" style="background-image:url(${this.thumbFor(o,c.id,e.avatar)})"></div>${qn(c.name)}<span class="tag ${l?"equipped":"owned"}">${l?"Wearing":"Wear"}</span>`,h.onclick=()=>{e.avatar[o]=l&&(o==="hat"||o==="accessory")?"none":c.id,t.applyAvatar(e.avatar),t.saveProfile(),t.audio.play("equip"),this.renderInventory()},n.appendChild(h)}r||(n.innerHTML='<div class="empty">Your wardrobe is empty. Visit the Avatar Shop!</div>')}}thumbFor(t,e,n){let i=this.game.thumbs;if(t==="face")return i.face(e,n.skin);let r={...n,[t]:e};return t==="hair"&&(r.hat="none"),t==="accessory"?i.shot(r,cg.has(e)?"back":"body"):i.shot(r,"head")}bindCustomize(){document.querySelectorAll("#cust-tabs .tab").forEach(t=>{t.onclick=()=>{this.custCat=t.dataset.cat,this.renderCustomize()}}),et("cust-save").onclick=()=>this.game.closeCustomize(!0),et("cust-cancel").onclick=()=>this.game.closeCustomize(!1),et("cust-random").onclick=()=>this.game.randomizeDraft(),document.querySelectorAll("#inv-tabs .tab").forEach(t=>{t.onclick=()=>{this.invTab=t.dataset.tab,this.renderInventory()}})}showCustomize(t){et("customize").classList.toggle("show",t),t&&this.renderCustomize()}renderCustomize(){let t=this.game,e=t.draft,n=t.progression,i=ag[this.custCat];document.querySelectorAll("#cust-tabs .tab").forEach(c=>c.classList.toggle("active",c.dataset.cat===this.custCat)),et("cust-title").textContent=i.title,et("cust-coins").textContent=t.profile.coins;let r=et("cust-grid"),o=et("cust-extra");r.innerHTML="",o.innerHTML="",r.className="cust-grid"+(i.colors?" colors":"");let a=(c,l,h)=>{for(let d of l){let u=document.createElement("button");u.className=`swatch ${e[h].toLowerCase()===d.toLowerCase()?"selected":""}`,u.style.background=d,u.title=d,u.onclick=()=>{e[h]=d,t.updateDraft(),this.renderCustomize()},c.appendChild(u)}};if(i.colors){a(r,i.colors,i.key);return}for(let c of i.items){let l=this.custCat==="gear",h=n.owns(this.custCat,c.id),d=l?t.profile.gear===c.id:e[i.key]===c.id,u=t.profile.level<c.level&&!h,p=document.createElement("button");p.className=`item ${d?"selected":""} ${u?"locked":""}`;let g;d&&(h||c.price===0)?g=`<span class="tag equipped">${l?"Equipped":"Wearing"}</span>`:h?g='<span class="tag owned">Owned</span>':u?g=`<span class="tag lock">\u{1F512} Level ${c.level}</span>`:g=`<span class="tag price">\u{1FA99} ${c.price}</span>`;let _=l?`<div class="thumb"><div class="slot-ico" style="--c:${c.color};width:38px;height:38px;border-width:7px"></div></div>`:c.id==="none"?'<div class="thumb">\u2205</div>':`<div class="thumb" style="background-image:url(${this.thumbFor(this.custCat,c.id,e)})"></div>`;p.innerHTML=`${_}<span>${qn(c.name)}</span>${g}`,p.onclick=()=>t.selectItem(this.custCat,c.id),r.appendChild(p)}if(this.custCat==="hair"){o.innerHTML='<div class="sub">Hair Colour</div>';let c=document.createElement("div");c.className="cust-grid colors",o.appendChild(c),a(c,jr,"hairColor")}}bindSettings(){let t=this.game;document.querySelectorAll("[data-set]").forEach(e=>{let n=e.dataset.set;e.addEventListener("input",()=>{t.profile.settings[n]=e.type==="checkbox"?e.checked:parseFloat(e.value),t.applySettings(),t.saveProfile()})}),document.querySelectorAll("[data-seg] button").forEach(e=>{e.onclick=()=>{let n=e.parentElement.dataset.seg;t.profile.settings[n]=e.dataset.v,t.applySettings(),t.saveProfile(),this.syncSettings()}}),et("reset-progress").onclick=()=>this.confirm("Reset progress?","This wipes your level, coins, items and best time. This cannot be undone.",()=>t.resetProgress())}openSettings(){this.syncSettings(),this.modal("settings",!0)}syncSettings(){let t=this.game.profile.settings;document.querySelectorAll("[data-set]").forEach(e=>{let n=t[e.dataset.set];e.type==="checkbox"?e.checked=!!n:e.value=n}),document.querySelectorAll("[data-seg]").forEach(e=>{e.querySelectorAll("button").forEach(n=>n.classList.toggle("active",t[e.dataset.seg]===n.dataset.v))})}bindModals(){let t=this.game;document.querySelectorAll("[data-close]").forEach(e=>{e.addEventListener("click",()=>e.closest(".modal").classList.add("hidden"))}),et("pause-resume").onclick=()=>t.togglePause(!1),et("pause-avatar").onclick=()=>{this.modal("pause",!1),t.openCustomize()},et("pause-settings").onclick=()=>this.openSettings(),et("pause-respawn").onclick=()=>{t.togglePause(!1),t.killPlayer("reset")},et("pause-leave").onclick=()=>{this.modal("pause",!1),t.toMenu()},et("finish-again").onclick=()=>{this.modal("finish",!1),t.restartObby()},et("finish-close").onclick=()=>this.modal("finish",!1)}showFinish(t,e,n,i){et("finish-time").textContent=Ls(t);let r=et("finish-best");r.textContent=n?"\u2605 NEW PERSONAL BEST! \u2605":`Personal best: ${Ls(e)}`,r.classList.toggle("new",n),et("finish-rewards").innerHTML=i.map(o=>`<div class="reward">${qn(o)}</div>`).join(""),this.modal("finish",!0)}};var mo=class{constructor(){this.size=160,this.renderer=new Wi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(this.size,this.size,!1),this.renderer.outputColorSpace=me,this.renderer.toneMapping=Ss,this.renderer.toneMappingExposure=1.1,this.scene=new Xi,this.scene.add(new $i("#ffffff","#8aa0b8",1.6));let t=new hn("#ffffff",2.2);t.position.set(3,5,4),this.scene.add(t);let e=new hn("#bfe0ff",1);e.position.set(-4,3,-4),this.scene.add(e),this.camera=new ve(30,1,.1,50),this.avatar=new Xn,this.scene.add(this.avatar.root),this.cache=new Map}shot(t,e="head"){let n=JSON.stringify(t)+e;if(this.cache.has(n))return this.cache.get(n);this.avatar.setConfig(t),this.avatar.update(.016,{speed:0,grounded:!0}),this.avatar.headPivot.rotation.set(0,0,0),this.avatar.body.position.y=0;let i=this.avatar.root;e==="head"?(i.rotation.y=.45,this.camera.position.set(0,2.62,3.6),this.camera.lookAt(0,2.5,0)):e==="back"?(i.rotation.y=Math.PI-.7,this.camera.position.set(0,2,7.2),this.camera.lookAt(0,1.55,0)):(i.rotation.y=.5,this.camera.position.set(0,2,7.2),this.camera.lookAt(0,1.45,0)),this.renderer.render(this.scene,this.camera);let r=this.renderer.domElement.toDataURL("image/png");return this.cache.set(n,r),r}face(t,e){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");return i.fillStyle=e,i.beginPath(),i.roundRect(4,4,120,120,30),i.fill(),i.fillStyle="rgba(0,0,0,0.08)",i.beginPath(),i.roundRect(4,96,120,28,[0,0,30,30]),i.fill(),i.save(),i.translate(14,12),Dc(i,t,100),i.restore(),n.toDataURL()}};var Ds=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0))),Us=s=>s[Math.floor(Math.random()*s.length)],go=class{async init(){this.profile=Th(),this.progression=new fo(this.profile,()=>this.saveProfile()),this.audio=new Jr,this.ui=new po(this),this.state="loading",this.paused=!1;let t=document.getElementById("game");this.renderer=new Wi({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=me,this.renderer.toneMapping=Ss,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_c,this.scene=new Xi,this.camera=new ve(70,1,.1,1200),this.input=new Zr(t),this.resize(),window.addEventListener("resize",()=>this.resize()),this.ui.setLoading(.1,"Planting trees\u2026"),document.fonts?.ready&&await Promise.race([document.fonts.ready,new Promise(n=>setTimeout(n,1500))]),await Ds(),this.world=new ao(this.scene,this.renderer),this.ui.setLoading(.45,"Building the Sky Obby\u2026"),await Ds(),this.obby=new co(this.scene,this.world),this.ui.setLoading(.6,"Waking up the villagers\u2026"),await Ds(),this.player=new lo(this.scene,this.world.col,this.profile.avatar),this.player.setGear(this.progression.owns("gear",this.profile.gear)?this.profile.gear:null),this.npcs=Uh(this.scene,this.world.col,this.world.npcSpots),this.coins=new ho(this.scene,[...this.world.coinSpots,...this.obby.coinSpots]),this.effects=new uo(this.scene),this.cam=new Kr(this.camera,this.world.col),this.studio=new hn("#ffffff",0),this.scene.add(this.studio,this.studio.target),this.ui.setLoading(.8,"Polishing avatars\u2026"),await Ds(),this.thumbs=new mo,this.input.onLockChange=n=>{!n&&this.state==="play"&&!this.paused&&!this.ui.isModalOpen()&&this.togglePause(!0)},this.wirePlayerEvents(),this.wireObbyEvents(),this.applySettings(),this.player.teleport(this.world.spawnPoint,Math.PI),this.cam.snap(this.player.head),this.renderer.compile(this.scene,this.camera),this.ui.setLoading(1,"Ready!"),await Ds();let e=()=>{this.audio.unlock(),this.audio.startMusic()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),this.clock=new Xr,this.elapsed=0,this.areaTimer=0,this.currentArea=null,this.saveTimer=0,this.fpsFrames=0,this.fpsTime=0,this.deadTimer=0,this.toMenu(!0),this.ui.hideLoading(),this.renderer.setAnimationLoop(()=>this.frame())}saveProfile(){Ah(this.profile)}applySettings(){let t=this.profile.settings;this.audio.setMusicVolume(t.musicVolume),this.audio.setSfxVolume(t.sfxVolume),this.camera.fov=t.fov,this.camera.updateProjectionMatrix(),this.cam&&(this.cam.sensitivity=t.sensitivity,this.cam.invertY=t.invertY);let e={low:.7,medium:1,high:Math.min(window.devicePixelRatio||1,2)}[t.quality]??1;this.renderer.setPixelRatio(e),this.resize();let n=!!t.shadows;if(this.renderer.shadowMap.enabled!==n&&(this.renderer.shadowMap.enabled=n,this.scene.traverse(i=>{i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>{r.needsUpdate=!0})})),this.world){let i=t.quality==="low"?1024:2048;this.world.sun.shadow.mapSize.x!==i&&(this.world.sun.shadow.mapSize.set(i,i),this.world.sun.shadow.map?.dispose(),this.world.sun.shadow.map=null)}}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}resetProgress(){this.profile=Rh(),this.progression.p=this.profile,this.saveProfile(),this.applyAvatar(this.profile.avatar),this.player.setGear(null),this.applySettings(),this.ui.closeModals(),this.ui.refreshProfile(),this.ui.toast("Progress reset. Fresh start!",{icon:"\u{1F9F9}"})}applyAvatar(t){this.player.avatar.setConfig(t),this.ui.refreshProfile()}toMenu(t=!1){this.state="menu",this.paused=!1,this.ui.closeModals(),this.ui.showHud(!1),this.ui.showCustomize(!1),this.ui.showMenu(!0),this.ui.setTimer(!1),this.obby.state==="running"&&this.obby.cancel(),this.player.teleport(this.world.spawnPoint,Math.PI*.15),this.menuAngle=.4,t||this.saveProfile()}play(){this.audio.unlock(),this.audio.startMusic(),this.state="play",this.ui.showMenu(!1),this.ui.showHud(!0),this.ui.refreshHud(),this.player.teleport(this.world.spawnPoint,Math.PI),this.cam.yaw=0,this.cam.pitch=.3,this.cam.snap(this.player.head),this.currentArea=null,this.ui.toast("Welcome to Blockverse! Talk to the villagers with E.",{icon:"\u{1F44B}",cls:"blue"})}wantsLock(){return this.state==="play"&&!this.paused&&!this.ui.isModalOpen()&&this.input.lockSupported}togglePause(t){this.state==="play"&&(this.paused=t??!this.paused,this.ui.modal("pause",this.paused),this.paused&&this.ui.modal("inventory",!1))}openCustomize(){if(this.state==="customize")return;this.prevState=this.state==="menu"?"menu":"play",this.ui.closeModals(),this.paused=!1,this.state="customize",this.draft={...this.profile.avatar},this.ui.showMenu(!1),this.ui.showHud(!1),this.ui.showCustomize(!0);let t=this.cam.yaw;this.custYaw=t,this.player.yaw=t,this.player.vel.set(0,0,0),this.custSpin=0}closeCustomize(t){if(t){let e=[];for(let n of Object.keys(fi))this.progression.owns(n,this.draft[n])||(e.push(Pc(n,this.draft[n]).name),this.draft[n]=this.profile.avatar[n]);this.profile.avatar={...this.draft},this.saveProfile(),this.audio.play("equip"),e.length?this.ui.toast(`Not owned, not saved: ${e.join(", ")}`,{icon:"\u{1F512}"}):this.ui.toast("Avatar saved! Looking good.",{icon:"\u2728",cls:"blue"})}this.player.avatar.setConfig(this.profile.avatar),this.ui.showCustomize(!1),this.prevState==="menu"?(this.state="menu",this.ui.showMenu(!0)):(this.state="play",this.ui.showHud(!0),this.ui.refreshHud()),this.ui.refreshProfile()}updateDraft(){this.player.avatar.setConfig(this.draft)}selectItem(t,e){let n=this.progression,i=Pc(t,e);if(t==="gear"){if(n.owns("gear",e)){this.toggleGear(e),this.ui.renderCustomize();return}this.offerPurchase(t,i);return}this.draft[t]=e,this.updateDraft(),this.ui.renderCustomize(),n.owns(t,e)||this.offerPurchase(t,i)}offerPurchase(t,e){let n=this.progression.canBuy(t,e.id);if(!n.ok){this.audio.play("error"),this.ui.toast(`${e.name}: ${n.why}`,{icon:"\u{1F512}"});return}this.ui.confirm(`Buy ${e.name}?`,`This costs ${e.price} coins. You have ${this.profile.coins}.`,()=>{this.progression.buy(t,e.id).ok&&(this.audio.play("buy"),this.ui.toast(`You bought ${e.name}!`,{icon:"\u{1F6CD}\uFE0F",cls:"gold"}),t==="gear"&&this.toggleGear(e.id,!0)),this.ui.renderCustomize(),this.ui.refreshHud()},{yes:"\u{1FA99} Buy",danger:!1})}randomizeDraft(){let t=this.draft;t.skin=Us(Qr),t.shirt=Us(Qi),t.pants=Us(Qi),t.hairColor=Us(jr);for(let e of Object.keys(fi)){let n=fi[e].filter(i=>this.progression.owns(e,i.id));t[e]=Us(n).id}this.updateDraft(),this.ui.renderCustomize()}toggleGear(t,e=!1){if(!this.progression.owns("gear",t)){let n=Ke.find(i=>i.id===t);this.audio.play("error"),this.ui.toast(`${n.name} is locked. Buy it in the Avatar Shop (Lv ${n.level}).`,{icon:"\u{1F512}"});return}this.profile.gear=this.profile.gear===t&&!e?null:t,this.player.setGear(this.profile.gear),this.audio.play("equip"),this.saveProfile(),this.ui.refreshHud()}wirePlayerEvents(){let t=this.player;t.on("jump",()=>this.audio.play("jump")),t.on("land",e=>{this.audio.play("land"),e<-25&&this.effects.burst(t.pos.clone(),{count:8,colors:["#ffffff","#dddddd"],speed:4,up:1,life:.4,size:.18})}),t.on("step",()=>this.audio.play("step")),t.on("fall",()=>this.killPlayer("fall")),t.on("touch",e=>{if(this.state!=="play"||this.deadTimer>0)return;if(e.type==="lava"||e.data?.lava)return this.killPlayer("lava");let n=e.data||{};n.checkpoint!==void 0&&this.obby.reachCheckpoint(n.checkpoint)&&(this.audio.play("checkpoint"),this.effects.burst(this.obby.checkpoints[n.checkpoint].pos.clone().add(new A(0,1,0)),{count:30,colors:["#43a047","#a5d6a7","#ffffff"],speed:6,up:6}),this.ui.toast(`Checkpoint ${n.checkpoint} reached!`,{icon:"\u{1F6A9}",cls:"blue"}),this.progression.addXP(An.checkpoint)),n.finish&&this.finishObby(),n.portal&&this.teleportTo(this.world.spawnPoint,0)})}wireObbyEvents(){this.obby.onStart=()=>this.ui.toast("Timer started \u2014 GO GO GO!",{icon:"\u23F1\uFE0F"}),this.obby.onCancel=()=>this.ui.setTimer(!1),this.obby.onHit=()=>{(!this.hitCooldown||this.elapsed>this.hitCooldown)&&(this.audio.play("land"),this.audio.play("death"),this.hitCooldown=this.elapsed+.6)},this.obby.onVanish=()=>this.audio.play("vanish")}finishObby(){let t=this.obby.finish();if(t==null)return;let e=this.profile,n=e.bestTime==null||t<e.bestTime;n&&(e.bestTime=t),e.stats.obbyCompletions++;let i=30+(n?20:0);this.progression.addCoins(i);let r=this.progression.addXP(An.obby+(n?An.obbyBest:0));this.audio.play("finish");let o=this.obby.finishPos.clone().add(new A(0,2,0)),a=["#ff4d5e","#ffb020","#36d07a","#2f9bff","#a96bff","#ff6fb5"];for(let l=0;l<3;l++)setTimeout(()=>this.effects.burst(o,{count:70,colors:a,speed:9,up:10,gravity:9,life:2.2,size:.28}),l*250);this.ui.setTimer(!1);let c=[`\u{1FA99} +${i} coins`,`\u2B50 +${An.obby+(n?An.obbyBest:0)} XP`];r&&c.push(`\u{1F389} Level ${e.level}!`),setTimeout(()=>this.ui.showFinish(t,e.bestTime,n,c),700),this.obby.resetCheckpoints(),this.ui.refreshHud(!0)}restartObby(){this.obby.cancel(),this.teleportTo(this.obby.checkpoints[0].pos,-Math.PI/2)}teleportTo(t,e){this.ui.fade(!0),this.player.frozen=!0,setTimeout(()=>{this.player.teleport(t,e+Math.PI),this.cam.yaw=e,this.cam.snap(this.player.head),this.player.frozen=!1,this.ui.fade(!1)},260)}killPlayer(t){if(this.deadTimer>0)return;let e=this.player;this.deadTimer=1,e.frozen=!0,e.vel.set(0,0,0),this.profile.stats.deaths++,this.audio.play(t==="lava"?"lava":"death");let n=e.pos.clone().add(new A(0,1.3,0)),i=this.profile.avatar;t!=="fall"&&this.effects.burst(n,{count:40,colors:[i.shirt,i.pants,i.skin,t==="lava"?"#ff6d00":"#ffffff"],speed:8,up:7,life:1.1,size:.35}),e.avatar.root.visible=!1,this.respawnAt=this.obby.contains(e.pos)&&this.obby.state==="running"?this.obby.respawnPoint():this.obby.contains(e.pos)?this.obby.checkpoints[0].pos.clone():this.world.spawnPoint.clone(),this.respawnYaw=this.obby.contains(e.pos)?-Math.PI/2:this.cam.yaw}respawn(){let t=this.player;t.teleport(this.respawnAt,this.respawnYaw+Math.PI),t.avatar.root.visible=!0,t.frozen=!1,this.cam.yaw=this.respawnYaw,this.cam.snap(t.head),this.effects.burst(t.pos.clone().add(new A(0,1,0)),{count:24,colors:["#ffffff","#bbdefb"],speed:4,up:3,life:.6})}interact(){let t=this.nearNpc;if(!t)return;t.talk(this.player.pos),this.audio.play("talk"),this.ui.speak(t,t.nextLine());let e=this.profile.stats.npcsMet;if(!e.includes(t.name)){e.push(t.name);let n=this.progression.addXP(An.npc);this.ui.toast(`New friend: ${t.name}  (+${An.npc} XP)`,{icon:"\u{1F91D}",cls:"blue"}),n&&this.onLevelUp()}t.def.action==="shop"&&setTimeout(()=>{this.state==="play"&&(this.ui.custCat="hat",this.openCustomize())},1600)}onLevelUp(){this.audio.play("levelup"),this.ui.toast(`LEVEL UP! You are now level ${this.profile.level}`,{icon:"\u{1F389}",cls:"gold"}),this.effects.burst(this.player.head,{count:50,colors:["#ffd54f","#fff59d","#ffffff","#4fc3f7"],speed:6,up:8,life:1.4});let t=[];for(let e of[...Object.keys(fi),"gear"])(e==="gear"?Ke:fi[e]).filter(i=>i.level===this.profile.level).forEach(i=>t.push(i.name));t.length&&setTimeout(()=>this.ui.toast(`Unlocked in shop: ${t.join(", ")}`,{icon:"\u{1F513}",cls:"gold"}),600)}frame(){let t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t;let e=this.input;this.state==="play"?(e.wasPressed("Escape")&&performance.now()-e.lastUnlock>400&&(!this.paused&&this.ui.isModalOpen()?this.ui.closeModals():this.paused&&(this.ui.isOpen("settings")||this.ui.isOpen("confirm"))?(this.ui.modal("settings",!1),this.ui.modal("confirm",!1)):this.togglePause()),this.paused||(e.wasPressed("KeyI")&&this.ui.toggleInventory(),e.wasPressed("KeyC")&&this.openCustomize(),e.wasPressed("Digit1")&&this.toggleGear("speed"),e.wasPressed("Digit2")&&this.toggleGear("gravity"),e.wasPressed("KeyE")&&this.interact())):this.state==="customize"&&e.wasPressed("Escape")?this.ui.isModalOpen()?this.ui.closeModals():this.closeCustomize(!1):this.state==="menu"&&e.wasPressed("Escape")&&this.ui.closeModals();let n=this.wantsLock(),i=navigator.userActivation?navigator.userActivation.isActive:!0;n&&!e.locked&&i&&e.lock(),!n&&e.locked&&e.unlock(),this.ui.setLockHint(n&&!e.locked);let r=this.state==="play"&&!this.paused;if(this.world.update(t,this.elapsed),!this.paused){this.obby.update(t,this.player);for(let o of this.npcs)o.update(t)}if(r){this.deadTimer>0&&(this.deadTimer-=t,this.deadTimer<=.25&&!this.fadedForRespawn&&(this.ui.fade(!0),this.fadedForRespawn=!0),this.deadTimer<=0&&(this.respawn(),this.ui.fade(!1),this.fadedForRespawn=!1)),this.player.update(t,e,this.cam.yaw),this.cam.update(t,e,this.player.head),this.coins.update(t,this.player.pos,l=>{this.audio.play("coin"),this.effects.burst(l.pos,{count:14,colors:["#ffd54f","#fff59d","#ffffff"],speed:4,up:4,life:.6,size:.16}),this.profile.stats.coinsCollected++,this.progression.addCoins(1),this.progression.addXP(An.coin)&&this.onLevelUp(),this.ui.refreshHud(!0)});let o=null,a=4.8;for(let l of this.npcs){let h=l.pos.distanceTo(this.player.pos);h<a&&(a=h,o=l)}this.nearNpc=o,this.ui.setPrompt(o&&!this.ui.isModalOpen()?`Talk to ${o.name}`:null);let c=this.obby.state==="running";if(this.ui.setTimer(c,this.obby.time,this.obby.currentCheckpoint,3),this.areaTimer-=t,this.areaTimer<=0){this.areaTimer=.5;let l=this.world.areaAt(this.player.pos.x,this.player.pos.z);l&&l!==this.currentArea&&this.ui.areaBanner(l.name),l&&(this.currentArea=l)}this.profile.stats.playSeconds+=t,this.saveTimer+=t,this.saveTimer>10&&(this.saveTimer=0,this.saveProfile())}else if(this.state==="menu"){this.menuAngle+=t*.06;let o=this.player.pos,a=o.x-2.5,c=o.z-2;this.camera.position.set(a+Math.sin(this.menuAngle)*13,o.y+4.2,c+Math.cos(this.menuAngle)*13),this.camera.lookAt(a-Math.cos(this.menuAngle)*3.2,o.y+2.2,c+Math.sin(this.menuAngle)*3.2),this.player.yaw+=t*0,this.player.update(t,{isDown:()=>!1,wasPressed:()=>!1},0),this.coins.update(t,new A(1e5,0,0),()=>{}),this.input.consumeDrag(),this.input.consumeWheel()}else if(this.state==="customize"){let[o]=e.consumeDrag();e.consumeWheel(),this.custSpin=o*.012,this.player.yaw+=this.custSpin,this.player.update(t,{isDown:()=>!1,wasPressed:()=>!1},0);let a=this.player.pos,c=this.custYaw,l=Math.sin(c),h=Math.cos(c),d=Math.cos(c),u=-Math.sin(c),p=window.innerWidth<860,g=p?0:1.9,_=p?8.5:7.4,m=new A(a.x+l*_+d*g,a.y+(p?.6:2.2),a.z+h*_+u*g);this.camera.position.lerp(m,1-Math.exp(-8*t));let f=new A(a.x+d*g,a.y+(p?-.4:1.45),a.z+u*g);this.camera.lookAt(f),this.studio.position.copy(this.camera.position).add(new A(0,3,0)),this.studio.target.position.copy(a).add(new A(0,1.5,0)),this.coins.update(t,new A(1e5,0,0),()=>{})}else this.state==="play"&&this.paused&&(this.input.consumeDrag(),this.input.consumeWheel());this.coins.rim.visible=this.coins.face.visible=this.state!=="customize",this.studio.intensity+=((this.state==="customize"?1.5:0)-this.studio.intensity)*(1-Math.exp(-6*t)),this.effects.update(t),this.world.followShadow(this.player.pos),this.state!=="customize"?this.ui.updateLabels(this.camera,this.npcs,this.player.pos):this.ui.updateLabels(this.camera,[],this.player.pos),this.renderer.render(this.scene,this.camera),this.fpsFrames++,this.fpsTime+=t,this.fpsTime>.5&&(this.ui.setFps(this.profile.settings.showFps&&this.state==="play",Math.round(this.fpsFrames/this.fpsTime)),this.fpsFrames=0,this.fpsTime=0),e.endFrame()}};var Nh=new go;window.blockverse=Nh;Nh.init().catch(s=>{console.error(s);let t=document.getElementById("load-text");t&&(t.textContent="Oops \u2014 the game failed to start: "+(s&&s.message?s.message:s)+". Your browser may not support WebGL.")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
