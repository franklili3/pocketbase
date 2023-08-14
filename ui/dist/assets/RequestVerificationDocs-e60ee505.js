import{S as qe,i as we,s as Pe,e as r,w as $,b as v,c as ve,f as b,g as f,h as i,m as he,x as F,O as de,P as ge,k as ye,Q as Be,n as Ce,t as Z,a as x,o as p,d as $e,C as Se,p as Te,r as I,u as Ve,N as Me}from"./index-c017b3ef.js";import{S as Re}from"./SdkTabs-ff39d41e.js";function me(a,l,s){const o=a.slice();return o[5]=l[s],o}function be(a,l,s){const o=a.slice();return o[5]=l[s],o}function _e(a,l){let s,o=l[5].code+"",_,m,n,u;function d(){return l[4](l[5])}return{key:a,first:null,c(){s=r("button"),_=$(o),m=v(),b(s,"class","tab-item"),I(s,"active",l[1]===l[5].code),this.first=s},m(q,w){f(q,s,w),i(s,_),i(s,m),n||(u=Ve(s,"click",d),n=!0)},p(q,w){l=q,w&4&&o!==(o=l[5].code+"")&&F(_,o),w&6&&I(s,"active",l[1]===l[5].code)},d(q){q&&p(s),n=!1,u()}}}function ke(a,l){let s,o,_,m;return o=new Me({props:{content:l[5].body}}),{key:a,first:null,c(){s=r("div"),ve(o.$$.fragment),_=v(),b(s,"class","tab-item"),I(s,"active",l[1]===l[5].code),this.first=s},m(n,u){f(n,s,u),he(o,s,null),i(s,_),m=!0},p(n,u){l=n;const d={};u&4&&(d.content=l[5].body),o.$set(d),(!m||u&6)&&I(s,"active",l[1]===l[5].code)},i(n){m||(Z(o.$$.fragment,n),m=!0)},o(n){x(o.$$.fragment,n),m=!1},d(n){n&&p(s),$e(o)}}}function Ae(a){var re,fe;let l,s,o=a[0].name+"",_,m,n,u,d,q,w,j=a[0].name+"",L,ee,N,P,Q,C,z,g,D,te,H,S,le,G,O=a[0].name+"",J,se,K,T,W,V,X,M,Y,y,R,h=[],oe=new Map,ae,A,k=[],ie=new Map,B;P=new Re({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        await pb.collection('${(re=a[0])==null?void 0:re.name}').requestVerification('test@example.com');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await pb.collection('${(fe=a[0])==null?void 0:fe.name}').requestVerification('test@example.com');
    `}});let E=a[2];const ne=e=>e[5].code;for(let e=0;e<E.length;e+=1){let t=be(a,E,e),c=ne(t);oe.set(c,h[e]=_e(c,t))}let U=a[2];const ce=e=>e[5].code;for(let e=0;e<U.length;e+=1){let t=me(a,U,e),c=ce(t);ie.set(c,k[e]=ke(c,t))}return{c(){l=r("h3"),s=$("Request verification ("),_=$(o),m=$(")"),n=v(),u=r("div"),d=r("p"),q=$("Sends "),w=r("strong"),L=$(j),ee=$(" verification email request."),N=v(),ve(P.$$.fragment),Q=v(),C=r("h6"),C.textContent="API details",z=v(),g=r("div"),D=r("strong"),D.textContent="POST",te=v(),H=r("div"),S=r("p"),le=$("/api/collections/"),G=r("strong"),J=$(O),se=$("/request-verification"),K=v(),T=r("div"),T.textContent="Body Parameters",W=v(),V=r("table"),V.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>email</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The auth record email address to send the verification request (if exists).</td></tr></tbody>`,X=v(),M=r("div"),M.textContent="Responses",Y=v(),y=r("div"),R=r("div");for(let e=0;e<h.length;e+=1)h[e].c();ae=v(),A=r("div");for(let e=0;e<k.length;e+=1)k[e].c();b(l,"class","m-b-sm"),b(u,"class","content txt-lg m-b-sm"),b(C,"class","m-b-xs"),b(D,"class","label label-primary"),b(H,"class","content"),b(g,"class","alert alert-success"),b(T,"class","section-title"),b(V,"class","table-compact table-border m-b-base"),b(M,"class","section-title"),b(R,"class","tabs-header compact left"),b(A,"class","tabs-content"),b(y,"class","tabs")},m(e,t){f(e,l,t),i(l,s),i(l,_),i(l,m),f(e,n,t),f(e,u,t),i(u,d),i(d,q),i(d,w),i(w,L),i(d,ee),f(e,N,t),he(P,e,t),f(e,Q,t),f(e,C,t),f(e,z,t),f(e,g,t),i(g,D),i(g,te),i(g,H),i(H,S),i(S,le),i(S,G),i(G,J),i(S,se),f(e,K,t),f(e,T,t),f(e,W,t),f(e,V,t),f(e,X,t),f(e,M,t),f(e,Y,t),f(e,y,t),i(y,R);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(R,null);i(y,ae),i(y,A);for(let c=0;c<k.length;c+=1)k[c]&&k[c].m(A,null);B=!0},p(e,[t]){var pe,ue;(!B||t&1)&&o!==(o=e[0].name+"")&&F(_,o),(!B||t&1)&&j!==(j=e[0].name+"")&&F(L,j);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(pe=e[0])==null?void 0:pe.name}').requestVerification('test@example.com');
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(ue=e[0])==null?void 0:ue.name}').requestVerification('test@example.com');
    `),P.$set(c),(!B||t&1)&&O!==(O=e[0].name+"")&&F(J,O),t&6&&(E=e[2],h=de(h,t,ne,1,e,E,oe,R,ge,_e,null,be)),t&6&&(U=e[2],ye(),k=de(k,t,ce,1,e,U,ie,A,Be,ke,null,me),Ce())},i(e){if(!B){Z(P.$$.fragment,e);for(let t=0;t<U.length;t+=1)Z(k[t]);B=!0}},o(e){x(P.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);B=!1},d(e){e&&p(l),e&&p(n),e&&p(u),e&&p(N),$e(P,e),e&&p(Q),e&&p(C),e&&p(z),e&&p(g),e&&p(K),e&&p(T),e&&p(W),e&&p(V),e&&p(X),e&&p(M),e&&p(Y),e&&p(y);for(let t=0;t<h.length;t+=1)h[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Ue(a,l,s){let o,{collection:_}=l,m=204,n=[];const u=d=>s(1,m=d.code);return a.$$set=d=>{"collection"in d&&s(0,_=d.collection)},s(3,o=Se.getApiExampleUrl(Te.baseUrl)),s(2,n=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[_,m,n,o,u]}class He extends qe{constructor(l){super(),we(this,l,Ue,Ae,Pe,{collection:0})}}export{He as default};
