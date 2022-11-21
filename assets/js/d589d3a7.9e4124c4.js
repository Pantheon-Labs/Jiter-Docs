"use strict";(self.webpackChunkjiter_docs=self.webpackChunkjiter_docs||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,y=g["".concat(c,".").concat(d)]||g[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"getting-started",title:"Getting Started",sidebar_position:1},o="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"You can start scheduling events using the Jiter SDK in just a few steps. We also have a REST API as well. Let's explore how easy this is.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/blob/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting Started",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"REST API",permalink:"/category/rest-api"}},c={},l=[{value:"1. Create an account on <strong>jiter.dev</strong>",id:"1-create-an-account-on-jiterdev",level:2},{value:"2. Create an organization",id:"2-create-an-organization",level:2},{value:"3. Get your API Key",id:"3-get-your-api-key",level:2},{value:"4. Install the Jiter SDK and use it in your app",id:"4-install-the-jiter-sdk-and-use-it-in-your-app",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"You can start scheduling events using the ",(0,a.kt)("strong",{parentName:"p"},"Jiter SDK")," in just a few steps. We also have a ",(0,a.kt)("strong",{parentName:"p"},"REST API")," as well. Let's explore how easy this is."),(0,a.kt)("h2",{id:"1-create-an-account-on-jiterdev"},"1. Create an account on ",(0,a.kt)("strong",{parentName:"h2"},(0,a.kt)("a",{parentName:"strong",href:"https://jiter.dev"},"jiter.dev"))),(0,a.kt)("p",null,"You'll need to create an account to generate your ",(0,a.kt)("a",{parentName:"p",href:"#3-get-your-api-key"},"API key")," in the next steps. Login using your GitHub account for simple and secure authentication:"),(0,a.kt)("img",{src:"/img/jiter_github.png",alt:"jiter github login",width:"250",height:"400"}),(0,a.kt)("h2",{id:"2-create-an-organization"},"2. Create an organization"),(0,a.kt)("p",null,"Once signed in, you can create an organization which will give you access to your API key. There is currently a soft limit of ",(0,a.kt)("strong",{parentName:"p"},"5")," organizations per account."),(0,a.kt)("img",{src:"/img/create_org_prompt.png",alt:"jiter create org prompt",width:"600",height:"200"}),(0,a.kt)("img",{src:"/img/org_creation_example.png",alt:"jiter org creation example",width:"600",height:"200"}),(0,a.kt)("p",null,"You can optionally create a custom signing secret or generate a random one. As shown above, we will sign the ",(0,a.kt)("strong",{parentName:"p"},"payload")," of your event with this secret so you can verify that the event came from us when we send it back to you."),(0,a.kt)("h2",{id:"3-get-your-api-key"},"3. Get your API Key"),(0,a.kt)("p",null,"Once your org is created, you can see your API key and signing secret:"),(0,a.kt)("img",{src:"/img/org_created_success.png",alt:"jiter org creation success",width:"500",height:"400"}),(0,a.kt)("p",null,"You can also view these values from your dashboard by clicking on each respective button:"),(0,a.kt)("img",{src:"/img/orgs_show_api_key.png",alt:"jiter org show api key",width:"600",height:"300"}),(0,a.kt)("h2",{id:"4-install-the-jiter-sdk-and-use-it-in-your-app"},"4. Install the Jiter SDK and use it in your app"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @jiter/node\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import Jiter, { BaseEvent, JiterConfig } from "@jiter/node";\n\nconst main = async () => {\n  const config: JiterConfig = { apiKey: "YOUR_API_KEY" };\n  Jiter.init(config);\n\n  const fifteenMinutesFromNow = new Date(Date.now() + 1000 * 60 * 15);\n\n  let createdEvent: BaseEvent;\n  try {\n    createdEvent = await Jiter.Events.createEvent({\n      destination: `https://your-app.com/webhooks/jiter`,\n      payload: "Hello there!",\n      scheduledTime: fifteenMinutesFromNow.toISOString(),\n    });\n\n    console.log(createdEvent);\n  } catch (error) {\n    console.error(error);\n  }\n};\n\nvoid main();\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_API_KEY")," with your actual API key and the ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createEvent")," method with your actual endpoint you want to receive events at."))}u.isMDXComponent=!0}}]);