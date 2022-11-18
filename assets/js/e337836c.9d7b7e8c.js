"use strict";(self.webpackChunkjiter_docs=self.webpackChunkjiter_docs||[]).push([[85],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={id:"quotas-and-limits",title:"Quotas and Limits",sidebar_position:3},o=void 0,l={unversionedId:"quotas-and-limits",id:"quotas-and-limits",title:"Quotas and Limits",description:"All API endpoints are limited to 100 requests per minute. You will be throttled by CloudFlare if you go beyond this limit, and you won't be able to send another request for 1 minute.",source:"@site/docs/quotas-and-limits.md",sourceDirName:".",slug:"/quotas-and-limits",permalink:"/quotas-and-limits",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/blob/main/docs/quotas-and-limits.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"quotas-and-limits",title:"Quotas and Limits",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Many Events",permalink:"/get-many-events"},next:{title:"Failure Notifications",permalink:"/failure-notifications"}},s={},u=[{value:"Org Limits",id:"org-limits",level:3},{value:"User Limits",id:"user-limits",level:3},{value:"Creating Events",id:"creating-events",level:3},{value:"Payload Size",id:"payload-size",level:3},{value:"Events Searching",id:"events-searching",level:3},{value:"Creating Cron Jobs",id:"creating-cron-jobs",level:3},{value:"Cron Job Searching",id:"cron-job-searching",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All API endpoints are limited to ",(0,a.kt)("strong",{parentName:"p"},"100 requests per minute"),". You will be throttled by CloudFlare if you go beyond this limit, and you won't be able to send another request for 1 minute.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are hitting any of the limits on this page, please ",(0,a.kt)("a",{parentName:"p",href:"https://app.jiter.dev/send-us-feedback?prompt=MakeSuggestion"},"send us some feedback")," with your use case!")),(0,a.kt)("h3",{id:"org-limits"},"Org Limits"),(0,a.kt)("p",null,"You can create up to 5 organizations"),(0,a.kt)("h3",{id:"user-limits"},"User Limits"),(0,a.kt)("p",null,"There are no limits to the number of users in your org"),(0,a.kt)("h3",{id:"creating-events"},"Creating Events"),(0,a.kt)("p",null,"You can create as many events that you want, however, you can only have 1,000 ",(0,a.kt)("em",{parentName:"p"},"scheduled")," events per month per org. These are events that have a ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduledDate")," within the same month"),(0,a.kt)("h3",{id:"payload-size"},"Payload Size"),(0,a.kt)("p",null,"The max ",(0,a.kt)("inlineCode",{parentName:"p"},"payload")," size for an Event or Cron Job cannot exceed 1kb (1024 bytes)"),(0,a.kt)("h3",{id:"events-searching"},"Events Searching"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"get-events--getmanyevents"},(0,a.kt)("inlineCode",{parentName:"h4"},"GET /events")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"getManyEvents")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1,000 events"),(0,a.kt)("li",{parentName:"ul"},"Any event with a ",(0,a.kt)("inlineCode",{parentName:"li"},"scheduledTime")," in the future"),(0,a.kt)("li",{parentName:"ul"},"Any event with a ",(0,a.kt)("inlineCode",{parentName:"li"},"sentAt")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"failedAt")," date in the last 7 days"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"get-eventseventid--getevent"},(0,a.kt)("inlineCode",{parentName:"h4"},"GET /events/:eventId")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"getEvent")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Event history is limited to the past 30 days"),(0,a.kt)("li",{parentName:"ul"},"Event must have a ",(0,a.kt)("inlineCode",{parentName:"li"},"scheduledTime")," in the future OR"),(0,a.kt)("li",{parentName:"ul"},"Event must have a ",(0,a.kt)("inlineCode",{parentName:"li"},"sentAt")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"failedAt")," date in the last 7 days")))),(0,a.kt)("h3",{id:"creating-cron-jobs"},"Creating Cron Jobs"),(0,a.kt)("p",null,"You can create up to 3 cron jobs per organization"),(0,a.kt)("h3",{id:"cron-job-searching"},"Cron Job Searching"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"get-cronjobs--getmanycronjobs"},(0,a.kt)("inlineCode",{parentName:"h4"},"GET /cronjobs")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"getManyCronJobs")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"There are no limits on the above endpoint, you will retrieve all of the cron jobs for your org"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"get-cronjobscronjobid--getcronjob"},(0,a.kt)("inlineCode",{parentName:"h4"},"GET /cronjobs/:cronjobId")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"getCronJob")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cron job history is limited to the past 30 days")))))}d.isMDXComponent=!0}}]);