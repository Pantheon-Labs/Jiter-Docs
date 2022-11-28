"use strict";(self.webpackChunkjiter_docs=self.webpackChunkjiter_docs||[]).push([[7186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),s=n(2389),l=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:b,className:g}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,l.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[j,E]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==j&&v.some((t=>t.value===e))&&E(e)}const w=e=>{const t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==j&&(N(t),E(r),null!=b&&x(b,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},g)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:w,onClick:w},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},4036:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),s=n(5162);const l={id:"get-many-cron-jobs",slug:"/get-many-cron-jobs",title:"Get Many Cron Jobs",sidebar_position:5},i=void 0,c={unversionedId:"rest-api/Cron Jobs \u26a0\ufe0f/get-many-cron-jobs",id:"rest-api/Cron Jobs \u26a0\ufe0f/get-many-cron-jobs",title:"Get Many Cron Jobs",description:"",source:"@site/docs\\rest-api\\Cron Jobs \u26a0\ufe0f\\get-many-cron-jobs.md",sourceDirName:"rest-api/Cron Jobs \u26a0\ufe0f",slug:"/get-many-cron-jobs",permalink:"/get-many-cron-jobs",draft:!1,editUrl:"https://github.com/Pantheon-Labs/Jiter-Docs/blob/main/docs/rest-api/Cron Jobs \u26a0\ufe0f/get-many-cron-jobs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"get-many-cron-jobs",slug:"/get-many-cron-jobs",title:"Get Many Cron Jobs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Update a Cron Job",permalink:"/update-cron-job"},next:{title:"Create Event",permalink:"/create-an-event"}},u={},p=[{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2}],d=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.4rem",fontWeight:"bold"}},t)},m={toc:p,Highlight:d};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Cron jobs are currently in ",(0,a.kt)("strong",{parentName:"p"},"ALPHA")," and ",(0,a.kt)("em",{parentName:"p"},"are not")," considered stable. This feature may change at any time, please use with caution.")),(0,a.kt)("p",null,"Retrieves the Cron jobs in your org"),(0,a.kt)(d,{color:"#0091ea",mdxType:"Highlight"},"GET")," https://app.jiter.dev/api/cronjobs",(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"Cron jobs returned successfully")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"Unable to retrieve cron jobs")))),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.ts"',title:'"index.ts"'},'import axios from "axios";\n\nconst apiBaseUrl = "https://app.jiter.dev/api";\n\nconst getManyCronJobs = async () => {\n  try {\n    const { data } = await axios.get(`${apiBaseUrl}/cronJobs`, {\n      headers: { "x-api-key": "YOUR_API_KEY" },\n    });\n\n    console.log("Cron jobs found \ud83c\udf89", data);\n  } catch (error) {\n    console.log("Unable to find cron jobs", error);\n  }\n};\n\ngetManyCronJobs();\n')))),(0,a.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "3",\n    "createdAt": "2022-10-25T18:23:32.000Z",\n    "updatedAt": "2022-10-25T18:23:32.000Z",\n    "status": "Active",\n    "nextExecutionStatus": "Pending",\n    "expression": "* * * * *",\n    "nextExecutionDate": "2022-10-25T18:24:00.000Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "3",\n    "payload": "{\'action\':\'buyGroceriesReminder\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}"\n  },\n  {\n    "id": "4",\n    "createdAt": "2022-10-25T18:25:12.000Z",\n    "updatedAt": "2022-10-25T18:25:12.000Z",\n    "status": "Active",\n    "nextExecutionStatus": "Pending",\n    "expression": "* * * * *",\n    "nextExecutionDate": "2022-10-25T18:26:00.000Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "3",\n    "payload": "{\'action\':\'buyGroceriesReminder\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}"\n  },\n  {\n    "id": "5",\n    "createdAt": "2022-10-25T18:25:14.000Z",\n    "updatedAt": "2022-10-25T18:25:14.000Z",\n    "status": "Active",\n    "nextExecutionStatus": "Pending",\n    "expression": "* * * * *",\n    "nextExecutionDate": "2022-10-25T18:26:00.000Z",\n    "destination": "https://your-app.com/webhooks/jiter",\n    "org": "3",\n    "payload": "{\'action\':\'buyGroceriesReminder\',\'values\':[\'eggs\',\'bacon\',\'pasta\',\'bread\']}"\n  }\n]\n')),(0,a.kt)("h2",{id:"example-error-response"},"Example Error Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "message": "Unable to retrieve cron jobs"\n}\n')))}b.isMDXComponent=!0}}]);