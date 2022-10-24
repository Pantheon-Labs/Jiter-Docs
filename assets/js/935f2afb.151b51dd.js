"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"category","label":"REST API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Authentication","href":"/docs/rest-api/authentication","docId":"rest-api/authentication"},{"type":"link","label":"Create Event","href":"/docs/rest-api/create-event","docId":"rest-api/create-event"},{"type":"link","label":"Get Event Info","href":"/docs/rest-api/get-event-info","docId":"rest-api/get-event-info"},{"type":"link","label":"Update Event","href":"/docs/rest-api/update-event","docId":"rest-api/update-event"},{"type":"link","label":"Get Many Events","href":"/docs/rest-api/get-many-events","docId":"rest-api/get-many-events"}],"href":"/docs/category/rest-api"},{"type":"link","label":"Quotas and Limits","href":"/docs/quotas-and-limits","docId":"quotas-and-limits"},{"type":"link","label":"Failure Notifications","href":"/docs/failure-notifications","docId":"failure-notifications"},{"type":"link","label":"Retries","href":"/docs/retries","docId":"retries"}]},"docs":{"failure-notifications":{"id":"failure-notifications","title":"Failure Notifications","description":"Every hour, we check to see if any of your events have failed to send. If so, we will send an email to the person who created the Org notifying them of the failures. You need to return any status code between HTTP 200 to 299 for Jiter to consider the webhook event successfully delivered.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"You can start scheduling events using the Jiter SDK in just a few steps. We also have a REST API as well. Let\'s explore how easy this is.","sidebar":"tutorialSidebar"},"quotas-and-limits":{"id":"quotas-and-limits","title":"Quotas and Limits","description":"All API endpoints are limited to 100 requests per minute. You will be throttled by CloudFlare if you go beyond this limit, and you won\'t be able to send another request for 1 minute.","sidebar":"tutorialSidebar"},"rest-api/authentication":{"id":"rest-api/authentication","title":"Authentication","description":"To use the Jiter REST API, you must pass in an x-api-key header in your request with your API key. In Node, using Axios, this would look like:","sidebar":"tutorialSidebar"},"rest-api/create-event":{"id":"rest-api/create-event","title":"Create Event","description":"","sidebar":"tutorialSidebar"},"rest-api/get-event-info":{"id":"rest-api/get-event-info","title":"Get Event Info","description":"","sidebar":"tutorialSidebar"},"rest-api/get-many-events":{"id":"rest-api/get-many-events","title":"Get Many Events","description":"","sidebar":"tutorialSidebar"},"rest-api/update-event":{"id":"rest-api/update-event","title":"Update Event","description":"","sidebar":"tutorialSidebar"},"retries":{"id":"retries","title":"Retries","description":"In the event of failures, Jiter will try to send your events and CRON jobs to your desired endpoint at least 3 more times:","sidebar":"tutorialSidebar"}}}')}}]);