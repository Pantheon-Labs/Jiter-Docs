"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),s=n(2389),o=n(7392),i=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:s,defaultValue:c,values:m,groupId:g,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,i.U)(),[T,E]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=f[g];null!=e&&e!==T&&y.some((t=>t.value===e))&&E(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==T&&(O(t),E(a),null!=g&&N(g,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:j,onFocus:w,onClick:w},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},4747:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),s=n(5162);const o={id:"get-many-events",title:"Get Many Events",sidebar_position:5},i=void 0,p={unversionedId:"rest-api/get-many-events",id:"rest-api/get-many-events",title:"Get Many Events",description:"GET https://app.jiter.dev/api/events",source:"@site/docs/rest-api/get-many-events.md",sourceDirName:"rest-api",slug:"/rest-api/get-many-events",permalink:"/docs/rest-api/get-many-events",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/docs/rest-api/get-many-events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"get-many-events",title:"Get Many Events",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Update Event",permalink:"/docs/rest-api/update-event"},next:{title:"Quotas and Limits",permalink:"/docs/quotas-and-limits"}},d={},u=[{value:"Request Query Parameters",id:"request-query-parameters",level:2},{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.4rem",fontWeight:"bold"}},t)},m={toc:u,Highlight:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{color:"#0091ea",mdxType:"Highlight"},"GET")," https://app.jiter.dev/api/events",(0,r.kt)("blockquote",null),(0,r.kt)("p",null,"You can retrieve many events at once and filter them based on statuses. This endpoint will return up to 1,000 future events and 1,000 past events from the last 7 days. You can filter events based on the parameters below."),(0,r.kt)("h2",{id:"request-query-parameters"},"Request Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the events you would like to retrieve"),(0,r.kt)("td",{parentName:"tr",align:null},"One of: ",(0,r.kt)("inlineCode",{parentName:"td"},"Pending"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Cancelled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Queued"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Sent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Failed To Send"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Failed To Queue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheduledStartTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO timestamp to get any events scheduled ",(0,r.kt)("strong",{parentName:"td"},"after")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T21:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheduledEndTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO timestamp to get any events scheduled ",(0,r.kt)("strong",{parentName:"td"},"before")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T22:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createdAtStartTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO timestamp to get any events created ",(0,r.kt)("strong",{parentName:"td"},"after")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T23:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createdAtEndTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO timestamp to get any events created ",(0,r.kt)("strong",{parentName:"td"},"before")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T24:15:30.258Z'"))))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Events returned successfully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Unable to get events")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.ts"',title:'"index.ts"'},'import axios from "axios";\n\nconst apiBaseUrl = "https://app.jiter.dev/api";\n\nconst getManyEvents = async () => {\n  const query = new URLSearchParams({\n    scheduledStartTime: "2022-10-27T04:50:26.573Z",\n    status: "Pending",\n  }).toString();\n\n  try {\n    const { data } = await axios.get(`${apiBaseUrl}/events?${query}`, {\n      headers: { "x-api-key": "YOUR_API_KEY" },\n    });\n\n    console.log("Events found \ud83c\udf89", data);\n  } catch (error) {\n    console.log("Unable to find events", error);\n  }\n};\n\ngetManyEvents();\n'))),(0,r.kt)(s.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},'import Jiter from "@jiter/node"\n\nconst getEvent = () => {\n  Jiter.init({ apiKey: "YOUR_API_KEY" })\n\n\n  try {\n    const createdEvent = await Jiter.Events.getManyEvents({ scheduledStartTime: \'2022-10-27T04:50:26.573Z\' , status: \'Pending\' })\n    console.log("Events found \ud83c\udf89", data);\n  } catch (error) {\n    console.log("Unable to find event", error);\n  }\n}\n\ngetEvent();\n')))),(0,r.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "9",\n    "scheduledTime": "2022-10-27T04:50:26.573Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "5",\n    "status": "Pending",\n    "payload": "{\'action\':\'buyGroceries\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}",\n    "createdAt": "2022-10-05T19:51:27.000Z",\n    "updatedAt": "2022-10-05T19:51:27.000Z"\n  },\n  {\n    "id": "10",\n    "scheduledTime": "2022-10-27T04:50:26.573Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "5",\n    "status": "Pending",\n    "payload": "{\'action\':\'buyGroceriesAgain\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}",\n    "createdAt": "2022-10-05T20:51:27.000Z",\n    "updatedAt": "2022-10-05T20:51:27.000Z"\n  },\n  {\n    "id": "11",\n    "scheduledTime": "2022-10-27T04:50:26.573Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "5",\n    "status": "Pending",\n    "payload": "{\'action\':\'buyGroceriesOneMoreTime\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}",\n    "createdAt": "2022-10-05T20:53:27.000Z",\n    "updatedAt": "2022-10-05T20:53:27.000Z"\n  }\n]\n')),(0,r.kt)("h2",{id:"example-error-response"},"Example Error Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Unable to get events\n")))}g.isMDXComponent=!0}}]);