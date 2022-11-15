"use strict";(self.webpackChunkjiter_docs=self.webpackChunkjiter_docs||[]).push([[85],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={id:"quotas-and-limits",title:"Quotas and Limits",sidebar_position:3},o=void 0,s={unversionedId:"quotas-and-limits",id:"quotas-and-limits",title:"Quotas and Limits",description:"All API endpoints are limited to 100 requests per minute. You will be throttled by CloudFlare if you go beyond this limit, and you won't be able to send another request for 1 minute.",source:"@site/docs/quotas-and-limits.md",sourceDirName:".",slug:"/quotas-and-limits",permalink:"/docs/quotas-and-limits",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/blob/main/docs/quotas-and-limits.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"quotas-and-limits",title:"Quotas and Limits",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Many Events",permalink:"/docs/rest-api/Events/get-many-events"},next:{title:"Failure Notifications",permalink:"/docs/failure-notifications"}},l={},u=[{value:"Org Limits",id:"org-limits",level:3},{value:"User Limits",id:"user-limits",level:3},{value:"Creating Events",id:"creating-events",level:3},{value:"Events Searching - <code>GET /events</code> &amp; <code>getManyEvents</code>",id:"events-searching---get-events--getmanyevents",level:3},{value:"Creating Cron Jobs",id:"creating-cron-jobs",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"All API endpoints are limited to ",(0,i.kt)("strong",{parentName:"p"},"100 requests per minute"),". You will be throttled by CloudFlare if you go beyond this limit, and you won't be able to send another request for 1 minute.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you are hitting any of the limits on this page, please ",(0,i.kt)("a",{parentName:"p",href:"https://app.jiter.dev/send-us-feedback?prompt=MakeSuggestion"},"send us some feedback")," with your use case!")),(0,i.kt)("h3",{id:"org-limits"},"Org Limits"),(0,i.kt)("p",null,"You can create up to 5 organizations"),(0,i.kt)("h3",{id:"user-limits"},"User Limits"),(0,i.kt)("p",null,"There are no limits to the number of users in your org"),(0,i.kt)("h3",{id:"creating-events"},"Creating Events"),(0,i.kt)("p",null,"You can create as many events that you want, however, you can only have 1,000 ",(0,i.kt)("em",{parentName:"p"},"scheduled")," events per month per org. These are events that have a ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledDate")," within the same month."),(0,i.kt)("h3",{id:"events-searching---get-events--getmanyevents"},"Events Searching - ",(0,i.kt)("inlineCode",{parentName:"h3"},"GET /events")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"getManyEvents")),(0,i.kt)("p",null,"Per query, you are limited to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1,000 events"),(0,i.kt)("li",{parentName:"ul"},"Any event with a ",(0,i.kt)("inlineCode",{parentName:"li"},"scheduledTime")," in the future"),(0,i.kt)("li",{parentName:"ul"},"Any event with a ",(0,i.kt)("inlineCode",{parentName:"li"},"sentAt")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"failedAt")," date in the last 7 days")),(0,i.kt)("h3",{id:"creating-cron-jobs"},"Creating Cron Jobs"),(0,i.kt)("p",null,"You can create up to 3 cron jobs per organization"))}d.isMDXComponent=!0}}]);