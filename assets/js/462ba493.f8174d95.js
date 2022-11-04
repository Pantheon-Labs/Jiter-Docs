"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(i,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),s=n(2389),o=n(7392),i=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:c,groupId:g,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,i.U)(),[E,T]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=f[g];null!=e&&e!==E&&b.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==E&&(O(t),T(a),null!=g&&N(g,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},k)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:S,onFocus:w,onClick:w},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function c(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},5676:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),s=n(5162);const o={id:"get-many-events",slug:"/get-many-events",title:"Get Many Events",sidebar_position:5},i=void 0,p={unversionedId:"rest-api/Events/get-many-events",id:"rest-api/Events/get-many-events",title:"Get Many Events",description:"",source:"@site/docs/rest-api/Events/get-many-events.md",sourceDirName:"rest-api/Events",slug:"/get-many-events",permalink:"/get-many-events",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/blob/main/docs/rest-api/Events/get-many-events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"get-many-events",slug:"/get-many-events",title:"Get Many Events",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Update Event",permalink:"/update-event"},next:{title:"Quotas and Limits",permalink:"/quotas-and-limits"}},d={},u=[{value:"Request Query Parameters",id:"request-query-parameters",level:2},{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.4rem",fontWeight:"bold"}},t)},c={toc:u,Highlight:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{color:"#0091ea",mdxType:"Highlight"},"GET")," https://app.jiter.dev/api/events",(0,r.kt)("blockquote",null),(0,r.kt)("p",null,"You can retrieve up to 1,000 events per query and filter them based on the parameters below."),(0,r.kt)("h2",{id:"request-query-parameters"},"Request Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the events you would like to retrieve"),(0,r.kt)("td",{parentName:"tr",align:null},"One of ",(0,r.kt)("strong",{parentName:"td"},"OR")," an array of: ",(0,r.kt)("inlineCode",{parentName:"td"},"Pending"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Cancelled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Queued"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Sent"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Failed To Send"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Failed To Queue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheduledStartDate"),(0,r.kt)("td",{parentName:"tr",align:null},"An ISO timestamp in the ",(0,r.kt)("em",{parentName:"td"},"future")," to get any events scheduled ",(0,r.kt)("strong",{parentName:"td"},"after")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T21:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheduledEndDate"),(0,r.kt)("td",{parentName:"tr",align:null},"An ISO timestamp in the ",(0,r.kt)("em",{parentName:"td"},"future")," to get any events scheduled ",(0,r.kt)("strong",{parentName:"td"},"before")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T22:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sentAtStartDate"),(0,r.kt)("td",{parentName:"tr",align:null},"An ISO timestamp in the ",(0,r.kt)("em",{parentName:"td"},"past")," to get any events sent ",(0,r.kt)("strong",{parentName:"td"},"after")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T23:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sentAtEndDate"),(0,r.kt)("td",{parentName:"tr",align:null},"An ISO timestamp in the ",(0,r.kt)("em",{parentName:"td"},"past")," to get any events sent ",(0,r.kt)("strong",{parentName:"td"},"before")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T24:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failedAtStartDate"),(0,r.kt)("td",{parentName:"tr",align:null},"An ISO timestamp in the ",(0,r.kt)("em",{parentName:"td"},"past")," to get any events that failed ",(0,r.kt)("strong",{parentName:"td"},"after")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T25:15:30.258Z'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failedAtEndDate"),(0,r.kt)("td",{parentName:"tr",align:null},"An ISO timestamp in the ",(0,r.kt)("em",{parentName:"td"},"past")," to get any events that failed ",(0,r.kt)("strong",{parentName:"td"},"before")," this time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'2022-10-05T26:15:30.258Z'"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If an event has a ",(0,r.kt)("inlineCode",{parentName:"p"},"sentAt")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"failedAt")," date, it will only be retrieved if that date is within the last 7 days. If you would like to search for events farther back than this, please ",(0,r.kt)("a",{parentName:"p",href:"https://app.jiter.dev/send-us-feedback?prompt=MakeSuggestion"},"send us some feedback")," with your use case!")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Events returned successfully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"sentAtStartDate is outside of the searchable range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Unable to get events")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.ts"',title:'"index.ts"'},'import axios from "axios";\n\nconst apiBaseUrl = "https://app.jiter.dev/api";\n\nconst getManyEvents = async () => {\n  const query = new URLSearchParams({\n    scheduledStartDate: "2022-10-27T04:50:26.573Z",\n    status: "Pending", // For multiple statuses, use: ["Pending", "Sent"].toString()\n  }).toString();\n\n  try {\n    const { data } = await axios.get(`${apiBaseUrl}/events?${query}`, {\n      headers: { "x-api-key": "YOUR_API_KEY" },\n    });\n\n    console.log("Events found \ud83c\udf89", data);\n  } catch (error) {\n    console.log("Unable to find events", error);\n  }\n};\n\ngetManyEvents();\n'))),(0,r.kt)(s.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},'import Jiter from "@jiter/node"\n\nconst getManyEvents = () => {\n  Jiter.init({ apiKey: "YOUR_API_KEY" })\n\n  try {\n    const events = await Jiter.Events.getManyEvents({ scheduledStartDate: \'2022-10-27T04:50:26.573Z\' , status: \'Pending\' }) // For multiple statuses, use: ["Pending", "Sent"].toString()\n    console.log("Events found \ud83c\udf89", events);\n  } catch (error) {\n    console.log("Unable to find event", error);\n  }\n}\n\ngetManyEvents();\n')))),(0,r.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "9",\n    "scheduledTime": "2022-10-27T04:50:26.573Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "5",\n    "status": "Pending",\n    "payload": "{\'action\':\'buyGroceries\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}",\n    "createdAt": "2022-10-05T19:51:27.000Z",\n    "updatedAt": "2022-10-05T19:51:27.000Z"\n  },\n  {\n    "id": "10",\n    "scheduledTime": "2022-10-27T04:50:26.573Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "5",\n    "status": "Pending",\n    "payload": "{\'action\':\'buyGroceriesAgain\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}",\n    "createdAt": "2022-10-05T20:51:27.000Z",\n    "updatedAt": "2022-10-05T20:51:27.000Z"\n  },\n  {\n    "id": "11",\n    "scheduledTime": "2022-10-27T04:50:26.573Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "5",\n    "status": "Pending",\n    "payload": "{\'action\':\'buyGroceriesOneMoreTime\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}",\n    "createdAt": "2022-10-05T20:53:27.000Z",\n    "updatedAt": "2022-10-05T20:53:27.000Z"\n  }\n]\n')),(0,r.kt)("h2",{id:"example-error-response"},"Example Error Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "message": "Unable to get events"\n}\n')))}g.isMDXComponent=!0}}]);