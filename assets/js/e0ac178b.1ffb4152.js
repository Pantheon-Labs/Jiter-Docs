"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Quotas & Limits",s={unversionedId:"quotes-and-limits",id:"quotes-and-limits",title:"Quotas & Limits",description:"TODO",source:"@site/docs/quotes-and-limits.md",sourceDirName:".",slug:"/quotes-and-limits",permalink:"/docs/quotes-and-limits",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/docs/quotes-and-limits.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Many Events",permalink:"/docs/rest-api/get-many-events"}},c={},l=[{value:"TODO",id:"todo",level:2},{value:"1. Create an account on <strong>jiter.dev</strong>",id:"1-create-an-account-on-jiterdev",level:2},{value:"2. Create an organization",id:"2-create-an-organization",level:2},{value:"3. Get your API Key",id:"3-get-your-api-key",level:2},{value:"4. Install the Jiter SDK and use it in your app",id:"4-install-the-jiter-sdk-and-use-it-in-your-app",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quotas--limits"},"Quotas & Limits"),(0,a.kt)("h2",{id:"todo"},"TODO"),(0,a.kt)("p",null,"You can start scheduling events using the ",(0,a.kt)("strong",{parentName:"p"},"Jiter SDK")," in just a few steps. We also have a ",(0,a.kt)("strong",{parentName:"p"},"REST API")," as well. Let's explore how easy this is."),(0,a.kt)("h2",{id:"1-create-an-account-on-jiterdev"},"1. Create an account on ",(0,a.kt)("strong",{parentName:"h2"},(0,a.kt)("a",{parentName:"strong",href:"https://jiter.dev"},"jiter.dev"))),(0,a.kt)("p",null,"You'll need to create an account to generate your ",(0,a.kt)("a",{parentName:"p",href:"#3-get-your-api-key"},"API key")," in the next steps. You can login using your GitHub account for simple and secure authentication:"),(0,a.kt)("img",{src:"/img/jiter_github.png",alt:"jiter github login",width:"250",height:"400"}),(0,a.kt)("h2",{id:"2-create-an-organization"},"2. Create an organization"),(0,a.kt)("p",null,"Once signed in, you can create an organization which will give you access to your API key. There is currently a soft limit of ",(0,a.kt)("strong",{parentName:"p"},"5")," organizations per account."),(0,a.kt)("img",{src:"/img/create_org_prompt.png",alt:"jiter create org prompt",width:"600",height:"200"}),(0,a.kt)("img",{src:"/img/org_creation_example.png",alt:"jiter org creation example",width:"600",height:"200"}),(0,a.kt)("p",null,"You can optionally create a custom signing secret or generate a random one. As shown above, we will sign the ",(0,a.kt)("strong",{parentName:"p"},"payload")," of your event with this secret so you can verify that the event came from us when we send it back to you."),(0,a.kt)("h2",{id:"3-get-your-api-key"},"3. Get your API Key"),(0,a.kt)("p",null,"Once your org is created, you can see your API key and signing secret:"),(0,a.kt)("img",{src:"/img/org_created_success.png",alt:"jiter org creation success",width:"500",height:"400"}),(0,a.kt)("p",null,"You can also view these values from your dashboard by clicking on each respective button:"),(0,a.kt)("img",{src:"/img/orgs_show_api_key.png",alt:"jiter org show api key",width:"600",height:"300"}),(0,a.kt)("h2",{id:"4-install-the-jiter-sdk-and-use-it-in-your-app"},"4. Install the Jiter SDK and use it in your app"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @jiter/node\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import Jiter, { BaseEvent, JiterConfig } from "@jiter/node";\n\nconst main = async () => {\n  const config: JiterConfig = { apiKey: "YOUR_API_KEY" };\n  Jiter.init(config);\n\n  const fifteenMinutesFromNow = new Date(Date.now() + 1000 * 60 * 15);\n\n  let createdEvent: BaseEvent;\n  try {\n    createdEvent = await Jiter.Events.createEvent({\n      destination: `https://your-app-endpoint-here.com/webhooks/jiter`,\n      payload: "Hello there!",\n      scheduledTime: fifteenMinutesFromNow.toISOString(),\n    });\n\n    console.log(createdEvent);\n  } catch (error) {\n    console.error(error);\n  }\n};\n\nvoid main();\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_API_KEY")," with your actual API key and the ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createEvent")," method with your actual endpoint you want to receive events at."))}p.isMDXComponent=!0}}]);