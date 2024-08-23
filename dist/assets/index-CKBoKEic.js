/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/const ht="opt-in",ke="opt-out",Ge="show--consent",Ue="show--preferences",Ee="disable--interaction",Oe="data-category",T="div",J="button",V="aria-hidden",Se="btn-group",N="click",ye="data-role",Xe="consentModal",qe="preferencesModal";class mt{constructor(){this.t={mode:ht,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:"cc_cookie",expiresAfterDays:182,domain:"",path:"/",sameSite:"Lax"}},this.o={i:{},l:"",_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:"",D:!0,T:!1,k:!1,A:!1,N:!1,H:[],V:!1,I:!0,L:[],j:!1,F:"",P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:"cc:onFirstConsent",le:"cc:onConsent",de:"cc:onChange",fe:"cc:onModalShow",_e:"cc:onModalHide",ue:"cc:onModalReady"}}}const c=new mt,gt=(t,n)=>t.indexOf(n),M=(t,n)=>gt(t,n)!==-1,ve=t=>Array.isArray(t),oe=t=>typeof t=="string",Ie=t=>!!t&&typeof t=="object"&&!ve(t),W=t=>typeof t=="function",$=t=>Object.keys(t),ze=t=>Array.from(new Set(t)),Pe=()=>document.activeElement,ge=t=>t.preventDefault(),Je=(t,n)=>t.querySelectorAll(n),Me=t=>t.dispatchEvent(new Event("change")),m=t=>{const n=document.createElement(t);return t===J&&(n.type=t),n},v=(t,n,o)=>t.setAttribute(n,o),je=(t,n,o)=>{t.removeAttribute(o?"data-"+n:n)},xe=(t,n,o)=>t.getAttribute(o?"data-"+n:n),p=(t,n)=>t.appendChild(n),x=(t,n)=>t.classList.add(n),A=(t,n)=>x(t,"cm__"+n),_=(t,n)=>x(t,"pm__"+n),ie=(t,n)=>t.classList.remove(n),te=t=>{if(typeof t!="object")return t;if(t instanceof Date)return new Date(t.getTime());let n=Array.isArray(t)?[]:{};for(let o in t){let e=t[o];n[o]=te(e)}return n},Ft=()=>{const t={},{O:n,X:o,Y:e}=c.o;for(const a of n)t[a]=De(e[a],$(o[a]));return t},at=(t,n)=>dispatchEvent(new CustomEvent(t,{detail:n})),O=(t,n,o,e)=>{t.addEventListener(n,o),e&&c.o.m.push({pe:t,me:n,ge:o})},it=()=>{const t=c.t.cookie.expiresAfterDays;return W(t)?t(c.o.F):t},De=(t,n)=>{const o=t||[],e=n||[];return o.filter(a=>!M(e,a)).concat(e.filter(a=>!M(o,a)))},yt=t=>{c.o.R=ze(t),c.o.F=(()=>{let n="custom";const{R:o,O:e,B:a}=c.o,i=o.length;return i===e.length?n="all":i===a.length&&(n="necessary"),n})()},bt=(t,n,o,e)=>{const a="accept-",{show:i,showPreferences:d,hide:r,hidePreferences:s,acceptCategory:g}=n,h=t||document,f=b=>Je(h,`[data-cc="${b}"]`),u=(b,C)=>{ge(b),g(C),s(),r()},y=f("show-preferencesModal"),l=f("show-consentModal"),w=f(a+"all"),k=f(a+"necessary"),S=f(a+"custom"),L=c.t.lazyHtmlGeneration;for(const b of y)v(b,"aria-haspopup","dialog"),O(b,N,C=>{ge(C),d()}),L&&(O(b,"mouseenter",C=>{ge(C),c.o.N||o(n,e)},!0),O(b,"focus",()=>{c.o.N||o(n,e)}));for(let b of l)v(b,"aria-haspopup","dialog"),O(b,N,C=>{ge(C),i(!0)},!0);for(let b of w)O(b,N,C=>{u(C,"all")},!0);for(let b of S)O(b,N,C=>{u(C)},!0);for(let b of k)O(b,N,C=>{u(C,[])},!0)},K=(t,n)=>{t&&(n&&(t.tabIndex=-1),t.focus(),n&&t.removeAttribute("tabindex"))},vt=(t,n)=>{const o=e=>{e.target.removeEventListener("transitionend",o),e.propertyName==="opacity"&&getComputedStyle(t).opacity==="1"&&K((a=>a===1?c.ne.be:c.ne.ve)(n))};O(t,"transitionend",o)};let lt;const wt=t=>{clearTimeout(lt),t?x(c.ne.ye,Ee):lt=setTimeout(()=>{ie(c.ne.ye,Ee)},500)},Gt=["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5","M 3.572 13.406 L 8.281 18.115 L 20.428 5.885","M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "],_e=(t=0,n=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${n}"><path d="${Gt[t]}"/></svg>`,Ct=t=>{const n=c.ne,o=c.o;(e=>{const a=e===n.he,i=o.i.disablePageInteraction?n.ye:a?n.Ce:n.ye;O(i,"keydown",d=>{if(d.key!=="Tab"||!(a?o.k&&!o.A:o.A))return;const r=Pe(),s=a?o.q:o.K;s.length!==0&&(d.shiftKey?r!==s[0]&&e.contains(r)||(ge(d),K(s[1])):r!==s[1]&&e.contains(r)||(ge(d),K(s[0])))},!0)})(t)},Ut=["[href]",J,"input","details","[tabindex]"].map(t=>t+':not([tabindex="-1"])').join(","),kt=t=>{const{o:n,ne:o}=c,e=(a,i)=>{const d=Je(a,Ut);i[0]=d[0],i[1]=d[d.length-1]};t===1&&n.T&&e(o.he,n.q),t===2&&n.N&&e(o.we,n.K)},Q=(t,n,o)=>{const{de:e,le:a,ie:i,_e:d,ue:r,fe:s}=c.ce,g=c.re;if(n){const f={modalName:n};return t===g.fe?W(s)&&s(f):t===g._e?W(d)&&d(f):(f.modal=o,W(r)&&r(f)),at(t,f)}const h={cookie:c.o.p};t===g.ie?W(i)&&i(te(h)):t===g.le?W(a)&&a(te(h)):(h.changedCategories=c.o.L,h.changedServices=c.o.ee,W(e)&&e(te(h))),at(t,te(h))},Le=(t,n)=>{try{return t()}catch(o){return!n&&console.warn("CookieConsent:",o),!1}},Ye=t=>{const{Y:n,ee:o,O:e,X:a,oe:i,p:d,L:r}=c.o;for(const f of e){const u=o[f]||n[f]||[];for(const y of u){const l=a[f][y];if(!l)continue;const{onAccept:w,onReject:k}=l;!l.Se&&M(n[f],y)?(l.Se=!0,W(w)&&w()):l.Se&&!M(n[f],y)&&(l.Se=!1,W(k)&&k())}}if(!c.t.manageScriptTags)return;const s=i,g=t||d.categories||[],h=(f,u)=>{if(u>=f.length)return;const y=i[u];if(y.xe)return h(f,u+1);const l=y.Me,w=y.De,k=y.Te,S=M(g,w),L=!!k&&M(n[w],k);if(!k&&!y.ke&&S||!k&&y.ke&&!S&&M(r,w)||k&&!y.ke&&L||k&&y.ke&&!L&&M(o[w]||[],k)){y.xe=!0;const b=xe(l,"type",!0);je(l,"type",!!b),je(l,Oe);let C=xe(l,"src",!0);C&&je(l,"src",!0);const H=m("script");H.textContent=l.innerHTML;for(const{nodeName:D}of l.attributes)v(H,D,l[D]||xe(l,D));b&&(H.type=b),C?H.src=C:C=l.src;const P=!!C&&(!b||["text/javascript","module"].includes(b));if(P&&(H.onload=H.onerror=()=>{h(f,++u)}),l.replaceWith(H),P)return}h(f,++u)};h(s,0)},He="bottom",Ze="left",St="center",Ve="right",Be="inline",_t="wide",Lt="pm--",Ne=["middle","top",He],dt=[Ze,St,Ve],Xt={box:{Ee:[_t,Be],Ae:Ne,Ne:dt,He,Ve},cloud:{Ee:[Be],Ae:Ne,Ne:dt,He,Ve:St},bar:{Ee:[Be],Ae:Ne.slice(1),Ne:[],He,Ve:""}},qt={box:{Ee:[],Ae:[],Ne:[],He:"",Ve:""},bar:{Ee:[_t],Ae:[],Ne:[Ze,Ve],He:"",Ve:Ze}},Tt=t=>{const n=c.o.i.guiOptions,o=n&&n.consentModal,e=n&&n.preferencesModal;t===0&&ft(c.ne.he,Xt,o,"cm--","box","cm"),t===1&&ft(c.ne.we,qt,e,Lt,"box","pm")},ft=(t,n,o,e,a,i)=>{t.className=i;const d=o&&o.layout,r=o&&o.position,s=o&&o.flipButtons,g=!o||o.equalWeightButtons!==!1,h=d&&d.split(" ")||[],f=h[0],u=h[1],y=f in n?f:a,l=n[y],w=M(l.Ee,u)&&u,k=r&&r.split(" ")||[],S=k[0],L=e===Lt?k[0]:k[1],b=M(l.Ae,S)?S:l.He,C=M(l.Ne,L)?L:l.Ve,H=D=>{D&&x(t,e+D)};H(y),H(w),H(b),H(C),s&&H("flip");const P=i+"__btn--secondary";if(i==="cm"){const{Ie:D,Le:E}=c.ne;D&&(g?ie(D,P):x(D,P)),E&&(g?ie(E,P):x(E,P))}else{const{je:D}=c.ne;D&&(g?ie(D,P):x(D,P))}},be=(t,n)=>{const o=c.o,e=c.ne,{hide:a,hidePreferences:i,acceptCategory:d}=t,r=C=>{d(C),i(),a()},s=o.u&&o.u.preferencesModal;if(!s)return;const g=s.title,h=s.closeIconLabel,f=s.acceptAllBtn,u=s.acceptNecessaryBtn,y=s.savePreferencesBtn,l=s.sections||[],w=f||u||y;if(e.Fe)e.Pe=m(T),_(e.Pe,"body");else{e.Fe=m(T),x(e.Fe,"pm-wrapper");const C=m("div");x(C,"pm-overlay"),p(e.Fe,C),O(C,N,i),e.we=m(T),x(e.we,"pm"),v(e.we,"role","dialog"),v(e.we,V,!0),v(e.we,"aria-modal",!0),v(e.we,"aria-labelledby","pm__title"),O(e.ye,"keydown",H=>{H.keyCode===27&&i()},!0),e.Oe=m(T),_(e.Oe,"header"),e.Re=m("h2"),_(e.Re,"title"),e.Re.id="pm__title",e.Be=m(J),_(e.Be,"close-btn"),v(e.Be,"aria-label",s.closeIconLabel||""),O(e.Be,N,i),e.Ge=m("span"),e.Ge.innerHTML=_e(),p(e.Be,e.Ge),e.Je=m(T),_(e.Je,"body"),e.Ue=m(T),_(e.Ue,"footer");var k=m(T);x(k,"btns");var S=m(T),L=m(T);_(S,Se),_(L,Se),p(e.Ue,S),p(e.Ue,L),p(e.Oe,e.Re),p(e.Oe,e.Be),e.ve=m(T),v(e.ve,"tabIndex",-1),p(e.we,e.ve),p(e.we,e.Oe),p(e.we,e.Je),w&&p(e.we,e.Ue),p(e.Fe,e.we)}let b;g&&(e.Re.innerHTML=g,h&&v(e.Be,"aria-label",h)),l.forEach((C,H)=>{const P=C.title,D=C.description,E=C.linkedCategory,pe=E&&o.P[E],le=C.cookieTable,U=le&&le.body,ne=le&&le.caption,X=U&&U.length>0,j=!!pe,Y=j&&o.X[E],ce=Ie(Y)&&$(Y)||[],R=j&&(!!D||!!X||$(Y).length>0);var z=m(T);if(_(z,"section"),R||D){var q=m(T);_(q,"section-desc-wrapper")}let re=ce.length;if(R&&re>0){const B=m(T);_(B,"section-services");for(const G of ce){const I=Y[G],Z=I&&I.label||G,de=m(T),fe=m(T),we=m(T),he=m(T);_(de,"service"),_(he,"service-title"),_(fe,"service-header"),_(we,"service-icon");const ee=ut(Z,G,pe,!0,E);he.innerHTML=Z,p(fe,we),p(fe,he),p(de,fe),p(de,ee),p(B,de)}p(q,B)}if(P){var se=m(T),F=m(j?J:T);if(_(se,"section-title-wrapper"),_(F,"section-title"),F.innerHTML=P,p(se,F),j){const B=m("span");B.innerHTML=_e(2,3.5),_(B,"section-arrow"),p(se,B),z.className+="--toggle";const G=ut(P,E,pe);let I=s.serviceCounterLabel;if(re>0&&oe(I)){let Z=m("span");_(Z,"badge"),_(Z,"service-counter"),v(Z,V,!0),v(Z,"data-servicecounter",re),I&&(I=I.split("|"),I=I.length>1&&re>1?I[1]:I[0],v(Z,"data-counterlabel",I)),Z.innerHTML=re+(I?" "+I:""),p(F,Z)}if(R){_(z,"section--expandable");var ct=E+"-desc";v(F,"aria-expanded",!1),v(F,"aria-controls",ct)}p(se,G)}else v(F,"role","heading"),v(F,"aria-level","3");p(z,se)}if(D){var Re=m("p");_(Re,"section-desc"),Re.innerHTML=D,p(q,Re)}if(R&&(v(q,V,"true"),q.id=ct,((B,G,I)=>{O(F,N,()=>{G.classList.contains("is-expanded")?(ie(G,"is-expanded"),v(I,"aria-expanded","false"),v(B,V,"true")):(x(G,"is-expanded"),v(I,"aria-expanded","true"),v(B,V,"false"))})})(q,z,F),X)){const B=m("table"),G=m("thead"),I=m("tbody");if(ne){const ee=m("caption");_(ee,"table-caption"),ee.innerHTML=ne,B.appendChild(ee)}_(B,"section-table"),_(G,"table-head"),_(I,"table-body");const Z=le.headers,de=$(Z),fe=e.$e.createDocumentFragment(),we=m("tr");for(const ee of de){const me=Z[ee],ae=m("th");ae.id="cc__row-"+me+H,v(ae,"scope","col"),_(ae,"table-th"),ae.innerHTML=me,p(fe,ae)}p(we,fe),p(G,we);const he=e.$e.createDocumentFragment();for(const ee of U){const me=m("tr");_(me,"table-tr");for(const ae of de){const rt=Z[ae],Zt=ee[ae],Ce=m("td"),st=m(T);_(Ce,"table-td"),v(Ce,"data-column",rt),v(Ce,"headers","cc__row-"+rt+H),st.insertAdjacentHTML("beforeend",Zt),p(Ce,st),p(me,Ce)}p(he,me)}p(I,he),p(B,G),p(B,I),p(q,B)}(R||D)&&p(z,q);const Yt=e.Pe||e.Je;j?(b||(b=m(T),_(b,"section-toggles")),b.appendChild(z)):b=null,p(Yt,b||z)}),f&&(e.ze||(e.ze=m(J),_(e.ze,"btn"),v(e.ze,ye,"all"),p(S,e.ze),O(e.ze,N,()=>r("all"))),e.ze.innerHTML=f),u&&(e.je||(e.je=m(J),_(e.je,"btn"),v(e.je,ye,"necessary"),p(S,e.je),O(e.je,N,()=>r([]))),e.je.innerHTML=u),y&&(e.qe||(e.qe=m(J),_(e.qe,"btn"),_(e.qe,"btn--secondary"),v(e.qe,ye,"save"),p(L,e.qe),O(e.qe,N,()=>r())),e.qe.innerHTML=y),e.Pe&&(e.we.replaceChild(e.Pe,e.Je),e.Je=e.Pe),Tt(1),o.N||(o.N=!0,Q(c.re.ue,qe,e.we),n(t),p(e.Ce,e.Fe),Ct(e.we),setTimeout(()=>x(e.Fe,"cc--anim"),100)),kt(2)};function ut(t,n,o,e,a){const i=c.o,d=c.ne,r=m("label"),s=m("input"),g=m("span"),h=m("span"),f=m("span"),u=m("span"),y=m("span");if(u.innerHTML=_e(1,3),y.innerHTML=_e(0,3),s.type="checkbox",x(r,"section__toggle-wrapper"),x(s,"section__toggle"),x(u,"toggle__icon-on"),x(y,"toggle__icon-off"),x(g,"toggle__icon"),x(h,"toggle__icon-circle"),x(f,"toggle__label"),v(g,V,"true"),e?(x(r,"toggle-service"),v(s,Oe,a),d.se[a][n]=s):d.ae[n]=s,e?(l=>{O(s,"change",()=>{const w=d.se[l],k=d.ae[l];i.Z[l]=[];for(let S in w){const L=w[S];L.checked&&i.Z[l].push(L.value)}k.checked=i.Z[l].length>0})})(a):(l=>{O(s,N,()=>{const w=d.se[l],k=s.checked;i.Z[l]=[];for(let S in w)w[S].checked=k,k&&i.Z[l].push(S)})})(n),s.value=n,f.textContent=t.replace(/<.*>.*<\/.*>/gm,""),p(h,y),p(h,u),p(g,h),i.D)(o.readOnly||o.enabled)&&(s.checked=!0);else if(e){const l=i.Y[a];s.checked=o.readOnly||M(l,n)}else M(i.R,n)&&(s.checked=!0);return o.readOnly&&(s.disabled=!0),p(r,s),p(r,g),p(r,f),r}const Ae=()=>{const t=m("span");return c.ne.Ke||(c.ne.Ke=t),t},We=(t,n)=>{const o=c.o,e=c.ne,{hide:a,showPreferences:i,acceptCategory:d}=t,r=o.u&&o.u.consentModal;if(!r)return;const s=r.acceptAllBtn,g=r.acceptNecessaryBtn,h=r.showPreferencesBtn,f=r.closeIconLabel,u=r.footer,y=r.label,l=r.title,w=S=>{a(),d(S)};if(!e.Qe){e.Qe=m(T),e.he=m(T),e.We=m(T),e.Xe=m(T),e.Ye=m(T),x(e.Qe,"cm-wrapper"),x(e.he,"cm"),A(e.We,"body"),A(e.Xe,"texts"),A(e.Ye,"btns"),v(e.he,"role","dialog"),v(e.he,"aria-modal","true"),v(e.he,V,"false"),v(e.he,"aria-describedby","cm__desc"),y?v(e.he,"aria-label",y):l&&v(e.he,"aria-labelledby","cm__title");const S="box",L=o.i.guiOptions,b=L&&L.consentModal,C=(b&&b.layout||S).split(" ")[0]===S;l&&f&&C&&(e.Le||(e.Le=m(J),e.Le.innerHTML=_e(),A(e.Le,"btn"),A(e.Le,"btn--close"),O(e.Le,N,()=>{w([])}),p(e.We,e.Le)),v(e.Le,"aria-label",f)),p(e.We,e.Xe),(s||g||h)&&p(e.We,e.Ye),e.be=m(T),v(e.be,"tabIndex",-1),p(e.he,e.be),p(e.he,e.We),p(e.Qe,e.he)}l&&(e.Ze||(e.Ze=m("h2"),e.Ze.className=e.Ze.id="cm__title",p(e.Xe,e.Ze)),e.Ze.innerHTML=l);let k=r.description;if(k&&(o.V&&(k=k.replace("{{revisionMessage}}",o.I?"":r.revisionMessage||"")),e.et||(e.et=m("p"),e.et.className=e.et.id="cm__desc",p(e.Xe,e.et)),e.et.innerHTML=k),s&&(e.tt||(e.tt=m(J),p(e.tt,Ae()),A(e.tt,"btn"),v(e.tt,ye,"all"),O(e.tt,N,()=>{w("all")})),e.tt.firstElementChild.innerHTML=s),g&&(e.Ie||(e.Ie=m(J),p(e.Ie,Ae()),A(e.Ie,"btn"),v(e.Ie,ye,"necessary"),O(e.Ie,N,()=>{w([])})),e.Ie.firstElementChild.innerHTML=g),h&&(e.ot||(e.ot=m(J),p(e.ot,Ae()),A(e.ot,"btn"),A(e.ot,"btn--secondary"),v(e.ot,ye,"show"),O(e.ot,"mouseenter",()=>{o.N||be(t,n)}),O(e.ot,N,i)),e.ot.firstElementChild.innerHTML=h),e.nt||(e.nt=m(T),A(e.nt,Se),s&&p(e.nt,e.tt),g&&p(e.nt,e.Ie),(s||g)&&p(e.We,e.nt),p(e.Ye,e.nt)),e.ot&&!e.st&&(e.st=m(T),e.Ie&&e.tt?(A(e.st,Se),p(e.st,e.ot),p(e.Ye,e.st)):(p(e.nt,e.ot),A(e.nt,Se+"--uneven"))),u){if(!e.ct){let S=m(T),L=m(T);e.ct=m(T),A(S,"footer"),A(L,"links"),A(e.ct,"link-group"),p(L,e.ct),p(S,L),p(e.he,S)}e.ct.innerHTML=u}Tt(0),o.T||(o.T=!0,Q(c.re.ue,Xe,e.he),n(t),p(e.Ce,e.Qe),Ct(e.he),setTimeout(()=>x(e.Qe,"cc--anim"),100)),kt(1),bt(e.We,t,be,n)},$e=t=>{if(!oe(t))return null;if(t in c.o._)return t;let n=t.slice(0,2);return n in c.o._?n:null},Ke=()=>c.o.l||c.o.i.language.default,Qe=t=>{t&&(c.o.l=t)},Mt=async t=>{const n=c.o;let o=$e(t)?t:Ke(),e=n._[o];return oe(e)?e=await(async a=>{try{return await(await fetch(a)).json()}catch(i){return console.error(i),!1}})(e):W(e)&&(e=await e()),!!e&&(n.u=e,Qe(o),!0)},xt=()=>{let t=c.o.i.language.rtl,n=c.ne.Ce;t&&n&&(ve(t)||(t=[t]),M(t,c.o.l)?x(n,"cc--rtl"):ie(n,"cc--rtl"))},ue=()=>{const t=c.ne;if(t.Ce)return;t.Ce=m(T),t.Ce.id="cc-main",t.Ce.setAttribute("data-nosnippet",""),xt();let n=c.o.i.root;n&&oe(n)&&(n=document.querySelector(n)),(n||t.$e.body).appendChild(t.Ce)},Dt=t=>Le(()=>localStorage.removeItem(t)),pt=(t,n)=>{if(n instanceof RegExp)return t.filter(o=>n.test(o));{const o=gt(t,n);return o>-1?[t[o]]:[]}},Ht=t=>{const{hostname:n,protocol:o}=location,{name:e,path:a,domain:i,sameSite:d,useLocalStorage:r}=c.t.cookie,s=t?(()=>{const u=c.o.S,y=u?new Date-u:0;return 864e5*it()-y})():864e5*it(),g=new Date;g.setTime(g.getTime()+s),c.o.p.expirationTime=g.getTime();const h=JSON.stringify(c.o.p);let f=e+"="+encodeURIComponent(h)+(s!==0?"; expires="+g.toUTCString():"")+"; Path="+a+"; SameSite="+d;M(n,".")&&(f+="; Domain="+i),o==="https:"&&(f+="; Secure"),r?((u,y)=>{Le(()=>localStorage.setItem(u,y))})(e,h):document.cookie=f,c.o.p},Fe=(t,n,o)=>{if(t.length===0)return;const e=o||c.t.cookie.domain,a=n||c.t.cookie.path,i=e.slice(0,4)==="www.",d=i&&e.substring(4),r=(s,g)=>{document.cookie=s+"=; path="+a+(g?"; domain=."+g:"")+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;"};for(const s of t)r(s),r(s,e),i&&r(s,d)},Ot=t=>{const n=t||c.t.cookie.name,o=c.t.cookie.useLocalStorage;return((a,i)=>{let d;return d=Le(()=>JSON.parse(i?a:decodeURIComponent(a)),!0)||{},d})(o?(e=n,Le(()=>localStorage.getItem(e))||""):et(n,!0),o);var e},et=(t,n)=>{const o=document.cookie.match("(^|;)\\s*"+t+"\\s*=\\s*([^;]+)");return o?n?o.pop():t:""},It=t=>{const n=document.cookie.split(/;\s*/),o=[];for(const e of n){let a=e.split("=")[0];t?Le(()=>{t.test(a)&&o.push(a)}):o.push(a)}return o},tt=(t,n=[])=>{((o,e)=>{const{O:a,R:i,B:d,N:r,Z:s,G:g,X:h}=c.o;let f=[];if(o){ve(o)?f.push(...o):oe(o)&&(f=o==="all"?a:[o]);for(const u of a)s[u]=M(f,u)?$(h[u]):[]}else f=[...i,...g],r&&(f=(()=>{const u=c.ne.ae;if(!u)return[];let y=[];for(let l in u)u[l].checked&&y.push(l);return y})());f=f.filter(u=>!M(a,u)||!M(e,u)),f.push(...d),yt(f)})(t,n),(o=>{const e=c.o,{Z:a,B:i,Y:d,X:r,O:s}=e,g=s;e.te=te(d);for(const h of g){const f=r[h],u=$(f),y=a[h]&&a[h].length>0,l=M(i,h);if(u.length!==0){if(d[h]=[],l)d[h].push(...u);else if(y){const w=a[h];d[h].push(...w)}else d[h]=e.Z[h];d[h]=ze(d[h])}}})(),(()=>{const o=c.o;o.L=c.t.mode===ke&&o.D?De(o.G,o.R):De(o.R,o.p.categories);let e=o.L.length>0,a=!1;for(const s of o.O)o.ee[s]=De(o.Y[s],o.te[s]),o.ee[s].length>0&&(a=!0);const i=c.ne.ae;for(const s in i)i[s].checked=M(o.R,s);for(const s of o.O){const g=c.ne.se[s],h=o.Y[s];for(const f in g)g[f].checked=M(h,f)}o.C||(o.C=new Date),o.M||(o.M=("10000000-1000-4000-8000"+-1e11).replace(/[018]/g,s=>(s^crypto.getRandomValues(new Uint8Array(1))[0]&15>>s/4).toString(16))),o.p={categories:te(o.R),revision:c.t.revision,data:o.h,consentTimestamp:o.C.toISOString(),consentId:o.M,services:te(o.Y)};let d=!1;const r=e||a;(o.D||r)&&(o.D&&(o.D=!1,d=!0),o.S=o.S?new Date:o.C,o.p.lastConsentTimestamp=o.S.toISOString(),Ht(),c.t.autoClearCookies&&(d||r)&&(s=>{const g=c.o,h=It(),f=(u=>{const y=c.o;return(u?y.O:y.L).filter(l=>{const w=y.P[l];return!!w&&!w.readOnly&&!!w.autoClear})})(s);for(const u in g.ee)for(const y of g.ee[u]){const l=g.X[u][y].cookies;if(!M(g.Y[u],y)&&l)for(const w of l){const k=pt(h,w.name);Fe(k,w.path,w.domain)}}for(const u of f){const y=g.P[u].autoClear,l=y&&y.cookies||[],w=M(g.L,u),k=!M(g.R,u),S=w&&k;if(s?k:S){y.reloadPage&&S&&(g.j=!0);for(const L of l){const b=pt(h,L.name);Fe(b,L.path,L.domain)}}}})(d),Ye()),d&&(Q(c.re.ie),Q(c.re.le),c.t.mode===ht)||(r&&Q(c.re.de),o.j&&(o.j=!1,location.reload()))})()},Pt=t=>{const n=c.o.D?[]:c.o.R;return M(n,t)},zt=(t,n)=>{const{O:o,X:e}=c.o;if(!(t&&n&&oe(n)&&M(o,n)&&$(e[n]).length!==0))return!1;((a,i)=>{const d=c.o,{X:r,Z:s,N:g}=d,h=c.ne.se[i]||{},f=c.ne.ae[i]||{},u=$(r[i]);if(s[i]=[],oe(a)){if(a==="all"){if(s[i].push(...u),g)for(let l in h)h[l].checked=!0,Me(h[l])}else if(M(u,a)&&s[i].push(a),g)for(let l in h)h[l].checked=a===l,Me(h[l])}else if(ve(a))for(let l of u){const w=M(a,l);w&&s[i].push(l),g&&(h[l].checked=w,Me(h[l]))}const y=s[i].length===0;d.R=y?d.R.filter(l=>l!==i):ze([...d.R,i]),g&&(f.checked=!y,Me(f))})(t,n),tt()},Rt=(t,n)=>{const o=c.o.D?[]:c.o.Y[n]||[];return M(o,t)},Jt=t=>et(t,!0)!=="",jt=(t,n,o)=>{let e=[];const a=i=>{if(oe(i)){let d=et(i);d!==""&&e.push(d)}else e.push(...It(i))};if(ve(t))for(let i of t)a(i);else a(t);Fe(e,n,o)},ot=t=>{const{ne:n,o}=c;if(!o.k){if(!o.T){if(!t)return;We(Te,ue)}o.k=!0,o.U=Pe(),o.v&&wt(!0),vt(n.he,1),x(n.ye,Ge),v(n.he,V,"false"),setTimeout(()=>{K(c.ne.be)},100),Q(c.re.fe,Xe)}},Bt=()=>{const{ne:t,o:n,re:o}=c;n.k&&(n.k=!1,n.v&&wt(),K(t.Ke,!0),ie(t.ye,Ge),v(t.he,V,"true"),K(n.U),n.U=null,Q(o._e,Xe))},Nt=()=>{const t=c.o;t.A||(t.N||be(Te,ue),t.A=!0,t.k?t.$=Pe():t.U=Pe(),vt(c.ne.we,2),x(c.ne.ye,Ue),v(c.ne.we,V,"false"),setTimeout(()=>{K(c.ne.ve)},100),Q(c.re.fe,qe))},At=()=>{const t=c.o;t.A&&(t.A=!1,(()=>{const n=nt(),o=c.o.P,e=c.ne.ae,a=c.ne.se,i=d=>M(c.o.G,d);for(const d in e){const r=!!o[d].readOnly;e[d].checked=r||(n?Pt(d):i(d));for(const s in a[d])a[d][s].checked=r||(n?Rt(s,d):i(d))}})(),K(c.ne.Ge,!0),ie(c.ne.ye,Ue),v(c.ne.we,V,"true"),t.k?(K(t.$),t.$=null):(K(t.U),t.U=null),Q(c.re._e,qe))};var Te={show:ot,hide:Bt,showPreferences:Nt,hidePreferences:At,acceptCategory:tt};const Vt=async(t,n)=>{if(!$e(t))return!1;const o=c.o;return!(t===Ke()&&n!==!0||!await Mt(t)||(Qe(t),o.T&&We(Te,ue),o.N&&be(Te,ue),xt(),0))},Wt=()=>{const{F:t,Y:n}=c.o,{accepted:o,rejected:e}=(()=>{const{D:a,R:i,O:d}=c.o;return{accepted:i,rejected:a?[]:d.filter(r=>!M(i,r))}})();return te({acceptType:t,acceptedCategories:o,rejectedCategories:e,acceptedServices:n,rejectedServices:Ft()})},$t=(t,n)=>{let o=document.querySelector('script[src="'+t+'"]');return new Promise(e=>{if(o)return e(!0);if(o=m("script"),Ie(n))for(const a in n)v(o,a,n[a]);o.onload=()=>e(!0),o.onerror=()=>{o.remove(),e(!1)},o.src=t,p(document.head,o)})},Kt=t=>{let n,o=t.value,e=t.mode,a=!1;const i=c.o;if(e==="update"){i.h=n=Et("data");const d=typeof n==typeof o;if(d&&typeof n=="object"){!n&&(n={});for(let r in o)n[r]!==o[r]&&(n[r]=o[r],a=!0)}else!d&&n||n===o||(n=o,a=!0)}else n=o,a=!0;return a&&(i.h=n,i.p.data=n,Ht(!0)),a},Et=(t,n)=>{const o=Ot(n);return t?o[t]:o},Qt=t=>{const n=c.t,o=c.o.i;return t?n[t]||o[t]:{...n,...o,cookie:{...n.cookie}}},nt=()=>!c.o.D,eo=async t=>{const{o:n,t:o,re:e}=c,a=window;if(!a._ccRun){if(a._ccRun=!0,(r=>{const{ne:s,t:g,o:h}=c,f=g,u=h,{cookie:y}=f,l=c.ce,w=r.cookie,k=r.categories,S=$(k)||[],L=navigator,b=document;s.$e=b,s.ye=b.documentElement,y.domain=location.hostname,u.i=r,u.P=k,u.O=S,u._=r.language.translations,u.v=!!r.disablePageInteraction,l.ie=r.onFirstConsent,l.le=r.onConsent,l.de=r.onChange,l._e=r.onModalHide,l.fe=r.onModalShow,l.ue=r.onModalReady;const{mode:C,autoShow:H,lazyHtmlGeneration:P,autoClearCookies:D,revision:E,manageScriptTags:pe,hideFromBots:le}=r;C===ke&&(f.mode=C),typeof D=="boolean"&&(f.autoClearCookies=D),typeof pe=="boolean"&&(f.manageScriptTags=pe),typeof E=="number"&&E>=0&&(f.revision=E,u.V=!0),typeof H=="boolean"&&(f.autoShow=H),typeof P=="boolean"&&(f.lazyHtmlGeneration=P),le===!1&&(f.hideFromBots=!1),f.hideFromBots===!0&&L&&(u.J=L.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(L.userAgent)||L.webdriver),Ie(w)&&(f.cookie={...y,...w}),f.autoClearCookies,u.V,f.manageScriptTags,(U=>{const{P:ne,X,Y:j,Z:Y,B:ce}=c.o;for(let R of U){const z=ne[R],q=z.services||{},re=Ie(q)&&$(q)||[];X[R]={},j[R]=[],Y[R]=[],z.readOnly&&(ce.push(R),j[R]=re),c.ne.se[R]={};for(let se of re){const F=q[se];F.Se=!1,X[R][se]=F}}})(S),(()=>{if(!c.t.manageScriptTags)return;const U=c.o,ne=Je(document,"script["+Oe+"]");for(const X of ne){let j=xe(X,Oe),Y=X.dataset.service||"",ce=!1;if(j&&j.charAt(0)==="!"&&(j=j.slice(1),ce=!0),Y.charAt(0)==="!"&&(Y=Y.slice(1),ce=!0),M(U.O,j)&&(U.oe.push({Me:X,xe:!1,ke:ce,De:j,Te:Y}),Y)){const R=U.X[j];R[Y]||(R[Y]={Se:!1})}}})(),Qe((()=>{const U=c.o.i.language.autoDetect;if(U){const ne={browser:navigator.language,document:document.documentElement.lang},X=$e(ne[U]);if(X)return X}return Ke()})())})(t),n.J)return;(()=>{const r=c.o,s=c.t,g=Ot(),{categories:h,services:f,consentId:u,consentTimestamp:y,lastConsentTimestamp:l,data:w,revision:k}=g,S=ve(h);r.p=g,r.M=u;const L=!!u&&oe(u);r.C=y,r.C&&(r.C=new Date(y)),r.S=l,r.S&&(r.S=new Date(l)),r.h=w!==void 0?w:null,r.V&&L&&k!==s.revision&&(r.I=!1),r.D=!(L&&r.I&&r.C&&r.S&&S),s.cookie.useLocalStorage&&!r.D&&(r.D=new Date().getTime()>(g.expirationTime||0),r.D&&Dt(s.cookie.name)),r.D,(()=>{const b=c.o;for(const C of b.O){const H=b.P[C];if(H.readOnly||H.enabled){b.G.push(C);const P=b.X[C]||{};for(let D in P)b.Z[C].push(D),b.i.mode===ke&&b.Y[C].push(D)}}})(),r.D?s.mode===ke&&(r.R=[...r.G]):(r.Z={...r.Y},r.Y={...r.Y,...f},yt([...r.B,...h]))})();const d=nt();if(!await Mt())return!1;if(bt(null,i=Te,be,ue),c.o.D&&We(i,ue),c.t.lazyHtmlGeneration||be(i,ue),o.autoShow&&!d&&ot(!0),d)return Ye(),Q(e.le);o.mode===ke&&Ye(n.G)}var i},to=t=>{const{Ce:n,ye:o}=c.ne,{name:e,path:a,domain:i,useLocalStorage:d}=c.t.cookie;t&&(d?Dt(e):jt(e,a,i));for(const{pe:s,me:g,ge:h}of c.o.m)s.removeEventListener(g,h);n&&n.remove(),o&&o.classList.remove(Ee,Ue,Ge);const r=new mt;for(const s in c)c[s]=r[s];window._ccRun=!1},oo=Object.freeze(Object.defineProperty({__proto__:null,acceptCategory:tt,acceptService:zt,acceptedCategory:Pt,acceptedService:Rt,eraseCookies:jt,getConfig:Qt,getCookie:Et,getUserPreferences:Wt,hide:Bt,hidePreferences:At,loadScript:$t,reset:to,run:eo,setCookieData:Kt,setLanguage:Vt,show:ot,showPreferences:Nt,validConsent:nt,validCookie:Jt},Symbol.toStringTag,{value:"Module"}));window.CookieConsent=oo;