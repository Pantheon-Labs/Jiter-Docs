"use strict";(self.webpackChunkjiter_docs=self.webpackChunkjiter_docs||[]).push([[5501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,v=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),s=n(7392),i=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:m,groupId:v,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,i.U)(),[E,x]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=v){const e=f[v];null!=e&&e!==E&&k.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),a=k[n].value;a!==E&&(T(t),x(a),null!=v&&N(v,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6060:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>u,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const s={id:"update-event",title:"Update Event",slug:"/update-event",sidebar_position:4},i=void 0,p={unversionedId:"rest-api/Events/update-event",id:"rest-api/Events/update-event",title:"Update Event",description:"",source:"@site/docs/rest-api/Events/update-event.md",sourceDirName:"rest-api/Events",slug:"/update-event",permalink:"/update-event",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/blob/main/docs/rest-api/Events/update-event.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"update-event",title:"Update Event",slug:"/update-event",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get Event Info",permalink:"/get-event"},next:{title:"Get Many Events",permalink:"/get-many-events"}},u={},d=[{value:"Request Parameters",id:"request-parameters",level:2},{value:"Request Body Parameters",id:"request-body-parameters",level:2},{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.4rem",fontWeight:"bold"}},t)},m={toc:d,Highlight:c};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{color:"#ff6d00",mdxType:"Highlight"},"PUT")," https://app.jiter.dev/api/events/:eventId",(0,r.kt)("blockquote",null),(0,r.kt)("p",null,"You can update any events that have a status of ",(0,r.kt)("inlineCode",{parentName:"p"},"Pending"),"."),(0,r.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventId"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the event you want to update"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"47"))))),(0,r.kt)("h2",{id:"request-body-parameters"},"Request Body Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"Your stringified payload"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'\'{"action":"buyGroceries","values":["eggs","bacon","pasta","bread"]}\''))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destination"),(0,r.kt)("td",{parentName:"tr",align:null},"The endpoint we should send your event to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://your-app.com/webhooks/jiter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"The event status - can only be set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Cancelled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Cancelled"))))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Event updated successfully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Bad request - either in the body or trying to update an event that is not ",(0,r.kt)("inlineCode",{parentName:"td"},"Pending"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"We were unable to find the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Unable to update the event")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.ts"',title:'"index.ts"'},'import axios from "axios";\n\nconst apiBaseUrl = "https://app.jiter.dev/api";\n\nconst updateEvent = async () => {\n  try {\n    const { data } = await axios.put(\n      `${apiBaseUrl}/events/47`,\n      {\n        destination: "https://your-new-app-url.com/webhooks/jiter",\n        payload: JSON.stringify({\n          action: "returnGroceries",\n          values: [{ bacon: "Too addictive" }, { eggs: "Break too easily" }],\n        }),\n        status: "Cancelled",\n      },\n      { headers: { "x-api-key": "YOUR_API_KEY" } }\n    );\n\n    console.log("Event updated \ud83c\udf89", data);\n  } catch (error) {\n    console.log("Unable to update event", error);\n  }\n};\n\nupdateEvent();\n'))),(0,r.kt)(o.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import Jiter from "@jiter/node";\n\nconst main = () => {\n  Jiter.init({ apiKey: "YOUR_API_KEY" });\n\n  try {\n    const updatedEvent = await Jiter.Events.updateEvent({\n      id: "47",\n      destination: "https://your-new-app-url.com/webhooks/jiter",\n      payload: JSON.stringify({\n        action: "returnGroceries",\n        values: [{ bacon: "Too addictive" }, { eggs: "Break too easily" }],\n      }),\n      status: "Cancelled",\n    });\n    console.log("Event updated \ud83c\udf89", updatedEvent);\n  } catch (error) {\n    console.log("Unable to update event", error);\n  }\n};\n')))),(0,r.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "47",\n  "scheduledTime": "2022-10-27T04:50:26.573Z",\n  "destination": "https://your-new-app-url.com/webhooks/jiter",\n  "org": "5",\n  "status": "Cancelled",\n  "payload": "{\'action\':\'returnGroceries\',\'values\':[{\'bacon\':\'Too addictive\'},{\'eggs\':\'Break too easily\'}]}",\n  "createdAt": "2022-10-05T19:51:27.000Z",\n  "updatedAt": "2022-10-05T24:17:12.000Z"\n}\n')),(0,r.kt)("h2",{id:"example-error-response"},"Example Error Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "message": "Please make sure your scheduled time is in the future."\n}\n')))}v.isMDXComponent=!0}}]);