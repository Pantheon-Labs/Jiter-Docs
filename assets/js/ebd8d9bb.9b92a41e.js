"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:b,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,i.U)(),[E,w]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==E&&y.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==E&&(T(t),w(a),null!=b&&N(b,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:j,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5786:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={id:"create-event",slug:"/create-an-event",title:"Create Event",sidebar_position:2},i=void 0,u={unversionedId:"rest-api/Events/create-event",id:"rest-api/Events/create-event",title:"Create Event",description:"",source:"@site/docs/rest-api/Events/create-event.md",sourceDirName:"rest-api/Events",slug:"/create-an-event",permalink:"/create-an-event",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/blob/main/docs/rest-api/Events/create-event.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"create-event",slug:"/create-an-event",title:"Create Event",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Many Cron Jobs",permalink:"/get-many-cron-jobs"},next:{title:"Get Event Info",permalink:"/get-event"}},p={},c=[{value:"Request Body Parameters",id:"request-body-parameters",level:2},{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.4rem",fontWeight:"bold"}},t)},m={toc:c,Highlight:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{color:"#00c853",mdxType:"Highlight"},"POST")," https://app.jiter.dev/api/events",(0,r.kt)("h2",{id:"request-body-parameters"},"Request Body Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"Your stringified payload"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'\'{"action":"buyGroceries","values":["eggs","bacon","pasta","bread"]}\''))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destination"),(0,r.kt)("td",{parentName:"tr",align:null},"The endpoint we should send your event to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://your-app.com/webhooks/jiter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheduledTime"),(0,r.kt)("td",{parentName:"tr",align:null},"An ISO timestamp in the future when you would like to receive your event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T19:10:58.322Z'"))))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a scheduled event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Please make sure your scheduled time is in the future")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Unable to create the event")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.ts"',title:'"index.ts"'},'import axios from "axios";\n\nconst apiBaseUrl = "https://app.jiter.dev/api";\nconst twentyFourHours = 24 * 60 * 60 * 1000;\n\nconst createEvent = async () => {\n  const tomorrow = new Date(Date.now() + twentyFourHours);\n\n  try {\n    const { data } = await axios.post(\n      `${apiBaseUrl}/events`,\n      {\n        destination: "https://your-app.com/webhooks/jiter",\n        scheduledTime: tomorrow,\n        payload: JSON.stringify({\n          action: "buyGroceries",\n          values: ["eggs", "bacon", "pasta", "bread"],\n        }),\n      },\n      { headers: { "x-api-key": "YOUR_API_KEY" } }\n    );\n\n    console.log("Event created \ud83c\udf89", data);\n  } catch (error) {\n    console.log("Unable to create event", error);\n  }\n};\n\ncreateEvent();\n'))),(0,r.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},'import Jiter from "@jiter/node"\n\nconst twentyFourHours = 24 * 60 * 60 * 1000;\nconst tomorrow = new Date(Date.now() + twentyFourHours);\n\n\nconst main = () => {\n  Jiter.init({ apiKey: "YOUR_API_KEY" })\n\n  try {\n    const createdEvent = await Jiter.Events.createEvent({\n      destination: "https://your-app.com/webhooks/jiter",\n      payload: JSON.stringify({\n            action: "buyGroceries",\n            values: ["eggs", "bacon", "pasta", "bread"],\n          }),\n          scheduledTime: tomorrow,\n    })\n    console.log("Event created \ud83c\udf89", data);\n  } catch (error) {\n    console.log("Unable to create event", error);\n  }\n}\n\n')))),(0,r.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "9",\n  "scheduledTime": "2022-10-27T04:50:26.573Z",\n  "destination": "https://your-app.com/webhooks/jiter",\n  "org": "5",\n  "status": "Pending",\n  "payload": "{\'action\':\'buyGroceries\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}",\n  "createdAt": "2022-10-05T19:51:27.000Z",\n  "updatedAt": "2022-10-05T19:51:27.000Z"\n}\n')),(0,r.kt)("h2",{id:"example-error-response"},"Example Error Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "message": "Please enter a valid time"\n}\n')))}b.isMDXComponent=!0}}]);