_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"81Ba":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-post",function(){return n("i48n")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),l=new Map,s=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],v=(0,u.useRouter)(),h=v&&v.pathname||"/",b=i.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),m=b.href,g=b.as;i.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,c.isLocalURL)(m)&&!f[m+"%"+g])return p(o,(function(){d(v,m,g)}))}),[t,o,m,g,v]);var x=e.children,O=e.replace,w=e.shallow,y=e.scroll;"string"===typeof x&&(x=i.default.createElement("a",null,x));var j=i.Children.only(x),E={ref:function(e){e&&l(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,m,g,O,w,y)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(m)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(v,m,g,{priority:!0}))}),!e.passHref&&("a"!==j.type||"href"in j.props)||(E.href=(0,c.addBasePath)(g)),i.default.cloneElement(j,E)};t.default=v},"hGi/":function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return r}))},i48n:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("ODXe"),c=n("hGi/"),u=n("BMxC"),l=n("eJLp"),s=n("KYPV"),f=n("fUhf"),p=n("nOHt"),d=n("q1tI"),v=n.n(d),h=n("yS0j"),b=n("soUV"),m=n("pHx+"),g=n("9LYk"),x=v.a.createElement;t.default=Object(f.a)(g.a)((function(e){Object(c.a)(e);var t=Object(p.useRouter)();!function(){var e=Object(m.h)(),t=Object(i.a)(e,1)[0],n=t.data,r=t.fetching,a=Object(p.useRouter)();Object(d.useEffect)((function(){r||(null===n||void 0===n?void 0:n.me)||a.replace("/login?next="+a.pathname)}),[r,n,a])}();var n=Object(m.c)(),r=Object(i.a)(n,2)[1];return x(b.a,{variant:"small"},x(s.b,{initialValues:{title:"",text:""},onSubmit:function(){var e=Object(o.a)(a.a.mark((function e(n,o){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setErrors,e.next=3,r({input:n});case 3:i=e.sent,i.error||t.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},(function(e){var t=e.isSubmitting;return x(s.a,null,x(h.a,{name:"title",label:"Title",placeholder:"title"}),x(u.a,{mt:4},x(h.a,{name:"text",label:"Body",placeholder:"text...",textarea:!0})),x(l.a,{mt:4,type:"submit",variantColor:"teal",isLoading:t},"Create Post"))})))}))},pboS:function(e,t,n){"use strict";var r=n("pVnL"),a=n.n(r),o=n("8OQS"),i=n.n(o),c=n("qKvR"),u=n("+Cyc"),l=n("q1tI"),s={transition:"all 0.15s ease-out",cursor:"pointer",textDecoration:"none",outline:"none",_focus:{boxShadow:"outline"},_disabled:{opacity:"0.4",cursor:"not-allowed",textDecoration:"none"}},f=Object(l.forwardRef)((function(e,t){var n=e.isDisabled,r=e.isExternal,o=e.onClick,l=i()(e,["isDisabled","isExternal","onClick"]),f=r?{target:"_blank",rel:"noopener noreferrer"}:null;return Object(c.d)(u.a,a()({as:"a",ref:t,tabIndex:n?-1:void 0,"aria-disabled":n,onClick:n?function(e){return e.preventDefault()}:o,_hover:{textDecoration:"underline"}},f,s,l))}));f.displayName="Link",t.a=f},qWyU:function(e,t,n){"use strict";var r=n("pVnL"),a=n.n(r),o=n("8OQS"),i=n.n(o),c=n("qKvR"),u=n("BMxC"),l=n("q1tI"),s={"2xl":["4xl",null,"5xl"],xl:["3xl",null,"4xl"],lg:["xl",null,"2xl"],md:"xl",sm:"md",xs:"sm"},f=Object(l.forwardRef)((function(e,t){var n=e.size,r=void 0===n?"xl":n,o=i()(e,["size"]);return Object(c.d)(u.a,a()({ref:t,as:"h2",fontSize:s[r],lineHeight:"shorter",fontWeight:"bold",fontFamily:"heading"},o))}));f.displayName="Heading",t.a=f},soUV:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n("q1tI"),a=n.n(r),o=n("uHth"),i=n("o0o1"),c=n.n(i),u=n("HaE+"),l=n("ODXe"),s=n("hGi/"),f=n("pboS"),p=n("Weur"),d=n("eJLp"),v=n("BMxC"),h=n("qWyU"),b=n("YFqc"),m=n.n(b),g=n("pHx+"),x=n("OXnp"),O=n("nOHt"),w=a.a.createElement,y=function(e){Object(s.a)(e);var t=Object(O.useRouter)(),n=Object(g.g)(),r=Object(l.a)(n,2),o=r[0].fetching,i=r[1],b=Object(g.h)({pause:Object(x.a)()}),y=Object(l.a)(b,1)[0],j=y.data,E=null;return y.fetching||(E=(null===j||void 0===j?void 0:j.me)?w(p.a,{align:"center"},w(m.a,{href:"/create-post"},w(d.a,{as:f.a,mr:4},"Create Post")),w(v.a,{mr:2},j.me.username),w(d.a,{onClick:Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:t.reload();case 3:case"end":return e.stop()}}),e)}))),isLoading:o,variant:"link"},"logout")):w(a.a.Fragment,null,w(m.a,{href:"/login"},w(f.a,{color:"black",mr:2},"login")),w(m.a,{href:"/register"},w(f.a,{color:"black"},"register")))),w(p.a,{zIndex:1,position:"sticky",top:0,bg:"tan",p:4},w(p.a,{flex:1,maxW:800,m:"auto",align:"center"},w(m.a,{href:"/"},w(f.a,null,w(h.a,null,"Reddit"))),w(v.a,{ml:"auto"},E)))},j=a.a.createElement,E=function(e){var t=e.children,n=e.variant;return j(a.a.Fragment,null,j(y,null),j(o.a,{variant:n},t))}}},[["81Ba",1,2,0,3,4,5]]]);