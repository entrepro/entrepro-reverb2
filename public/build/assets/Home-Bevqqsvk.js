var he=t=>{throw TypeError(t)};var Y=(t,e,s)=>e.has(t)||he("Cannot "+s);var r=(t,e,s)=>(Y(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>e.has(t)?he("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),g=(t,e,s,a)=>(Y(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s),p=(t,e,s)=>(Y(t,e,"access private method"),s);import{S as Re,r as I,s as J,b as K,n as Se,i as ue,c as de,t as Ce,f as je,d as Oe,e as fe,g as be,h as O,u as oe,k as ve,j as l,l as X,q as Ee,_ as $,Y as De}from"./app-DNE9u5Ct.js";import{A as Qe}from"./AuthenticatedLayout-BdaKqtdp.js";import"./ApplicationLogo-8iZcIz6d.js";import"./transition-DHApRqIX.js";var R,c,B,w,T,U,Q,q,k,L,F,P,N,G,h,A,Z,ee,te,se,re,ae,ie,ye,pe,Ie=(pe=class extends Re{constructor(e,s){super();y(this,h);y(this,R);y(this,c);y(this,B);y(this,w);y(this,T);y(this,U);y(this,Q);y(this,q);y(this,k);y(this,L);y(this,F);y(this,P);y(this,N);y(this,G,new Set);this.options=s,g(this,R,e),g(this,Q,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,c).addObserver(this),ge(r(this,c),this.options)?p(this,h,A).call(this):this.updateResult(),p(this,h,se).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ne(r(this,c),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ne(r(this,c),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,p(this,h,re).call(this),p(this,h,ae).call(this),r(this,c).removeObserver(this)}setOptions(e,s){const a=this.options,f=r(this,c);if(this.options=r(this,R).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof I(this.options.enabled,r(this,c))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");p(this,h,ie).call(this),r(this,c).setOptions(this.options),a._defaulted&&!J(this.options,a)&&r(this,R).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,c),observer:this});const d=this.hasListeners();d&&me(r(this,c),f,this.options,a)&&p(this,h,A).call(this),this.updateResult(s),d&&(r(this,c)!==f||I(this.options.enabled,r(this,c))!==I(a.enabled,r(this,c))||K(this.options.staleTime,r(this,c))!==K(a.staleTime,r(this,c)))&&p(this,h,Z).call(this);const i=p(this,h,ee).call(this);d&&(r(this,c)!==f||I(this.options.enabled,r(this,c))!==I(a.enabled,r(this,c))||i!==r(this,N))&&p(this,h,te).call(this,i)}getOptimisticResult(e){const s=r(this,R).getQueryCache().build(r(this,R),e),a=this.createResult(s,e);return Ne(this,a)&&(g(this,w,a),g(this,U,this.options),g(this,T,r(this,c).state)),a}getCurrentResult(){return r(this,w)}trackResult(e,s){const a={};return Object.keys(e).forEach(f=>{Object.defineProperty(a,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),s==null||s(f),e[f])})}),a}trackProp(e){r(this,G).add(e)}getCurrentQuery(){return r(this,c)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=r(this,R).defaultQueryOptions(e),a=r(this,R).getQueryCache().build(r(this,R),s);return a.isFetchingOptimistic=!0,a.fetch().then(()=>this.createResult(a,s))}fetch(e){return p(this,h,A).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,w)))}createResult(e,s){var ce;const a=r(this,c),f=this.options,d=r(this,w),i=r(this,T),m=r(this,U),v=e!==a?e.state:r(this,B),{state:S}=e;let u={...S},E=!1,x;if(s._optimisticResults){const j=this.hasListeners(),z=!j&&ge(e,s),we=j&&me(e,a,s,f);(z||we)&&(u={...u,...Oe(S.data,e.options)}),s._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:_,errorUpdatedAt:W,status:D}=u;if(s.select&&u.data!==void 0)if(d&&u.data===(i==null?void 0:i.data)&&s.select===r(this,q))x=r(this,k);else try{g(this,q,s.select),x=s.select(u.data),x=fe(d==null?void 0:d.data,x,s),g(this,k,x),g(this,Q,null)}catch(j){g(this,Q,j)}else x=u.data;if(s.placeholderData!==void 0&&x===void 0&&D==="pending"){let j;if(d!=null&&d.isPlaceholderData&&s.placeholderData===(m==null?void 0:m.placeholderData))j=d.data;else if(j=typeof s.placeholderData=="function"?s.placeholderData((ce=r(this,L))==null?void 0:ce.state.data,r(this,L)):s.placeholderData,s.select&&j!==void 0)try{j=s.select(j),g(this,Q,null)}catch(z){g(this,Q,z)}j!==void 0&&(D="success",x=fe(d==null?void 0:d.data,j,s),E=!0)}r(this,Q)&&(_=r(this,Q),x=r(this,k),W=Date.now(),D="error");const n=u.fetchStatus==="fetching",o=D==="pending",b=D==="error",V=o&&n,M=x!==void 0;return{status:D,fetchStatus:u.fetchStatus,isPending:o,isSuccess:D==="success",isError:b,isInitialLoading:V,isLoading:V,data:x,dataUpdatedAt:u.dataUpdatedAt,error:_,errorUpdatedAt:W,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>v.dataUpdateCount||u.errorUpdateCount>v.errorUpdateCount,isFetching:n,isRefetching:n&&!o,isLoadingError:b&&!M,isPaused:u.fetchStatus==="paused",isPlaceholderData:E,isRefetchError:b&&M,isStale:le(e,s),refetch:this.refetch}}updateResult(e){const s=r(this,w),a=this.createResult(r(this,c),this.options);if(g(this,T,r(this,c).state),g(this,U,this.options),r(this,T).data!==void 0&&g(this,L,r(this,c)),J(a,s))return;g(this,w,a);const f={},d=()=>{if(!s)return!0;const{notifyOnChangeProps:i}=this.options,m=typeof i=="function"?i():i;if(m==="all"||!m&&!r(this,G).size)return!0;const C=new Set(m??r(this,G));return this.options.throwOnError&&C.add("error"),Object.keys(r(this,w)).some(v=>{const S=v;return r(this,w)[S]!==s[S]&&C.has(S)})};(e==null?void 0:e.listeners)!==!1&&d()&&(f.listeners=!0),p(this,h,ye).call(this,{...f,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&p(this,h,se).call(this)}},R=new WeakMap,c=new WeakMap,B=new WeakMap,w=new WeakMap,T=new WeakMap,U=new WeakMap,Q=new WeakMap,q=new WeakMap,k=new WeakMap,L=new WeakMap,F=new WeakMap,P=new WeakMap,N=new WeakMap,G=new WeakMap,h=new WeakSet,A=function(e){p(this,h,ie).call(this);let s=r(this,c).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(Se)),s},Z=function(){p(this,h,re).call(this);const e=K(this.options.staleTime,r(this,c));if(ue||r(this,w).isStale||!de(e))return;const a=Ce(r(this,w).dataUpdatedAt,e)+1;g(this,F,setTimeout(()=>{r(this,w).isStale||this.updateResult()},a))},ee=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,c)):this.options.refetchInterval)??!1},te=function(e){p(this,h,ae).call(this),g(this,N,e),!(ue||I(this.options.enabled,r(this,c))===!1||!de(r(this,N))||r(this,N)===0)&&g(this,P,setInterval(()=>{(this.options.refetchIntervalInBackground||je.isFocused())&&p(this,h,A).call(this)},r(this,N)))},se=function(){p(this,h,Z).call(this),p(this,h,te).call(this,p(this,h,ee).call(this))},re=function(){r(this,F)&&(clearTimeout(r(this,F)),g(this,F,void 0))},ae=function(){r(this,P)&&(clearInterval(r(this,P)),g(this,P,void 0))},ie=function(){const e=r(this,R).getQueryCache().build(r(this,R),this.options);if(e===r(this,c))return;const s=r(this,c);g(this,c,e),g(this,B,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},ye=function(e){be.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(r(this,w))}),r(this,R).getQueryCache().notify({query:r(this,c),type:"observerResultsUpdated"})})},pe);function _e(t,e){return I(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function ge(t,e){return _e(t,e)||t.state.data!==void 0&&ne(t,e,e.refetchOnMount)}function ne(t,e,s){if(I(e.enabled,t)!==!1){const a=typeof s=="function"?s(t):s;return a==="always"||a!==!1&&le(t,e)}return!1}function me(t,e,s,a){return(t!==e||I(a.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&le(t,s)}function le(t,e){return I(e.enabled,t)!==!1&&t.isStaleByTime(K(e.staleTime,t))}function Ne(t,e){return!J(t.getCurrentResult(),e)}var xe=O.createContext(!1),Te=()=>O.useContext(xe);xe.Provider;function Fe(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Pe=O.createContext(Fe()),Me=()=>O.useContext(Pe);function Ue(t,e){return typeof t=="function"?t(...e):!!t}var ke=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},Le=t=>{O.useEffect(()=>{t.clearReset()},[t])},Ge=({result:t,errorResetBoundary:e,throwOnError:s,query:a})=>t.isError&&!e.isReset()&&!t.isFetching&&a&&Ue(s,[t.error,a]),We=t=>{t.suspense&&(typeof t.staleTime!="number"&&(t.staleTime=1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},Ae=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,Be=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function qe(t,e,s){var v,S,u,E;const a=oe(),f=Te(),d=Me(),i=a.defaultQueryOptions(t);(S=(v=a.getDefaultOptions().queries)==null?void 0:v._experimental_beforeQuery)==null||S.call(v,i),i._optimisticResults=f?"isRestoring":"optimistic",We(i),ke(i,d),Le(d);const[m]=O.useState(()=>new e(a,i)),C=m.getOptimisticResult(i);if(O.useSyncExternalStore(O.useCallback(x=>{const _=f?()=>{}:m.subscribe(be.batchCalls(x));return m.updateResult(),_},[m,f]),()=>m.getCurrentResult(),()=>m.getCurrentResult()),O.useEffect(()=>{m.setOptions(i,{listeners:!1})},[i,m]),Ae(i,C))throw Be(i,m,d);if(Ge({result:C,errorResetBoundary:d,throwOnError:i.throwOnError,query:a.getQueryCache().get(i.queryHash)}))throw C.error;return(E=(u=a.getDefaultOptions().queries)==null?void 0:u._experimental_afterQuery)==null||E.call(u,i,C),i.notifyOnChangeProps?C:m.trackResult(C)}function $e(t,e){return qe(t,Ie)}const He=()=>{const t=oe(),{modalWinnerIsOpen:e,winner:s,setWinner:a}=ve(),f=async()=>{try{await X.get("/api/resetGameState"),a(""),t.invalidateQueries({queryKey:["fetchGameState"]})}catch(d){console.error("Error updating game state:",d)}};return l.jsx("dialog",{className:`modal ${e?"modal-open":""}`,children:l.jsxs("div",{className:"modal-box w-6/12 max-w-5xl modal-top text-center bg-white/50",children:[l.jsx("h1",{className:"font-bold text-2xl",children:s}),l.jsx("button",{className:"btn bg-yellow-400 border-none w-full text-lg my-5",onClick:f,children:"Reset Game"})]})})},H=({color:t,draggable:e,onDragStart:s})=>l.jsx("div",{className:`w-full h-full rounded-full ${t==="black"?"bg-black ":""}${t==="white"?"bg-white ":""}`,draggable:e,onDragStart:s});function Ze(){const t=oe(),{auth:e}=Ee().props,{setModalWinnerIsOpen:s,setWinner:a}=ve(),f=e.user.name=="Sandy"?"black":"white",d=async()=>{try{const{data:n}=await X.get("/api/gameState");return n}catch{}},{data:i,isLoading:m}=$e({queryKey:["fetchGameState"],queryFn:d}),C=async n=>{try{await X.patch("/api/gameState",{game_state:n,current_mover:f=="white"?1:2}),t.invalidateQueries({queryKey:["fetchGameState"]})}catch(o){console.error("Error updating game state:",o)}},[v,S]=O.useState(null),u=[[0,1,0,1,1,0,0,0,0],[1,0,1,0,1,0,0,0,0],[0,1,0,0,1,1,0,0,0],[1,0,0,0,1,0,1,0,0],[1,1,1,1,0,1,1,1,1],[0,0,1,0,1,0,0,0,1],[0,0,0,1,1,0,0,1,0],[0,0,0,0,1,0,1,0,1],[0,0,0,0,1,1,0,1,0]],E=(n,o)=>u[n][o]===1,x=n=>i.game_state[n]===1&&f==="white"||i.game_state[n]===2&&f==="black",_=(n,o)=>{x(o)?(S(o),n.dataTransfer.setData("pieceIndex",o)):n.preventDefault()},W=(n,o)=>{n.preventDefault(),v!==null&&E(v,o)&&($.error("Illegal move."),n.dataTransfer.dropEffect="move")},D=async(n,o)=>{n.preventDefault();const b=n.dataTransfer.getData("pieceIndex");if((f=="white"?1:2)!==i.current_color){$.error("It's not your turn!");return}if(i.game_state[o]===0&&E(b,o)){const M=[...i.game_state];M[o]=i.game_state[b],M[b]=0,await C(M)}else $.error("Illegal move."),S(null);S(null)};return O.useEffect(()=>{const n=window.Echo.channel("game-room-public");return n.listen("MoveEvent",o=>{t.invalidateQueries(["fetchGameState"])}),n.listen("WonEvent",o=>{a(o.message),t.invalidateQueries(["fetchGameState"]),s(!0)}),n.listen("ResetEvent",o=>{$(o.message),t.invalidateQueries(["fetchGameState"]),s(!1)}),()=>{window.Echo.leave("game-room-public")}},[]),l.jsxs(Qe,{header:l.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Home"}),children:[l.jsx(De,{title:"Home"}),l.jsx(He,{}),l.jsx("div",{className:"py-12",children:l.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:l.jsx("div",{className:"overflow-hidden bg-blue-200 shadow-sm sm:rounded-lg h-[70vh]",children:l.jsxs("div",{className:"p-6 text-gray-900",children:[l.jsx("div",{className:"flex justify-between items-center h-[5vh]",children:m?l.jsx(l.Fragment,{}):l.jsxs("label",{className:`swap swap-flip ${i.current_color==1?"swap-active":""} text-6xl`,children:[l.jsx("div",{className:"swap-on",children:l.jsx("span",{className:"badge bg-white badge-lg border-0 text-black",children:"White's Turn"})}),l.jsx("div",{className:"swap-off",children:l.jsx("span",{className:"badge bg-black badge-lg border-0 text-white",children:"Black's Turn"})})]})}),l.jsx("div",{className:"divider"}),m?l.jsx("div",{className:"grid grid-cols-3 gap-20 aspect-square bg-slate-500 p-5 rounded-xl mx-auto h-[50vh]"}):l.jsx("div",{className:"grid grid-cols-3 gap-20 aspect-square bg-slate-500 p-5 rounded-xl mx-auto h-[50vh]",children:f=="white"?l.jsx(l.Fragment,{children:i.game_state.slice().reverse().map((n,o)=>l.jsxs("div",{className:`p-5 w-full h-full rounded-xl flex items-center justify-center transition duration-200 ease-in ${v!==null&&E(v,i.game_state.length-1-o)&&i.game_state[i.game_state.length-1-o]===0?"bg-green-200":"bg-slate-400 hover:bg-slate-300"}`,onDragOver:n==0?W:null,onDrop:b=>D(b,i.game_state.length-1-o),children:[n===0&&l.jsx("div",{draggable:!1}),n===1&&l.jsx(H,{color:"white",draggable:!0,onDragStart:b=>_(b,i.game_state.length-1-o)}),n===2&&l.jsx(H,{color:"black",draggable:!0,onDragStart:b=>_(b,i.game_state.length-1-o)})]},o))}):l.jsx(l.Fragment,{children:i.game_state.map((n,o)=>l.jsxs("div",{className:`p-5 w-full h-full rounded-xl flex items-center justify-center transition duration-200 ease-in ${v!==null&&E(v,o)&&i.game_state[o]===0?"bg-green-200":"bg-slate-400 hover:bg-slate-300"}`,onDragOver:n==0?W:null,onDrop:b=>D(b,o),children:[n===0&&l.jsx("div",{draggable:!1}),n===1&&l.jsx(H,{color:"white",draggable:!0,onDragStart:b=>_(b,o)}),n===2&&l.jsx(H,{color:"black",draggable:!0,onDragStart:b=>_(b,o)})]},o))})})]})})})})]})}export{Ze as default};
