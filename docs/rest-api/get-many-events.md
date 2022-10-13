---
id: get-many-events
title: Get Many Events
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.4rem',
      fontWeight: 'bold'
    }}>
{children}
</span>
);

<Highlight color="#0091ea">GET</Highlight> https://app.jiter.dev/api/events

>

You can retrieve up to 1,000 events per query and filter them based on the parameters below.

## Request Query Parameters

| Parameter | Description | Example |
| ------------------ | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| status | Status of the events you would like to retrieve | One of **OR** an array of: `Pending`, `Cancelled`, `Queued`, `Sent`, `Failed To Send`, `Failed To Queue` |
| scheduledStartDate | An ISO timestamp in the _future_ to get any events scheduled **after** this time | `'2022-10-05T21:15:30.258Z'` |
| scheduledEndDate | An ISO timestamp in the _future_ to get any events scheduled **before** this time | `'2022-10-05T22:15:30.258Z'` |
| sentAtStartDate | An ISO timestamp in the _past_ to get any events sent **after** this time | `'2022-10-05T23:15:30.258Z'` |
| sentAtEndDate | An ISO timestamp in the _past_ to get any events sent **before** this time | `'2022-10-05T24:15:30.258Z'` |
| failedAtStartDate | An ISO timestamp in the _past_ to get any events that failed **after** this time | `'2022-10-05T25:15:30.258Z'` |
| failedAtEndDate | An ISO timestamp in the _past_ to get any events that failed **before** this time | `'2022-10-05T26:15:30.258Z'` |


:::note
If an event has a `sentAt` or `failedAt` date, it will only be retrieved if that date is within the last 7 days. If you would like to search for events farther back than this, please [send us some feedback](https://app.jiter.dev/send-us-feedback?prompt=MakeSuggestion) with your use case!

:::

## Response

| Code | Description                                        |
| ---- | -------------------------------------------------- |
| 200  | Events returned successfully                       |
| 400  | sentAtStartDate is outside of the searchable range |
| 500  | Unable to get events                               |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";

const getManyEvents = async () => {
  const query = new URLSearchParams({
    scheduledStartDate: "2022-10-27T04:50:26.573Z",
    status: "Pending", // For multiple statuses, use: ["Pending", "Sent"].toString()
  }).toString();

  try {
    const { data } = await axios.get(`${apiBaseUrl}/events?${query}`, {
      headers: { "x-api-key": "YOUR_API_KEY" },
    });

    console.log("Events found 🎉", data);
  } catch (error) {
    console.log("Unable to find events", error);
  }
};

getManyEvents();
```

</TabItem>
  <TabItem value="js" label="Javascript" >

```jsx title="index.js"
import Jiter from "@jiter/node"

const getManyEvents = () => {
  Jiter.init({ apiKey: "YOUR_API_KEY" })

  try {
    const events = await Jiter.Events.getManyEvents({ scheduledStartDate: '2022-10-27T04:50:26.573Z' , status: 'Pending' }) // For multiple statuses, use: ["Pending", "Sent"].toString()
    console.log("Events found 🎉", events);
  } catch (error) {
    console.log("Unable to find event", error);
  }
}

getManyEvents();
```

  </TabItem>

</Tabs>

## Example Success Response

```json
[
  {
    "id": "9",
    "scheduledTime": "2022-10-27T04:50:26.573Z",
    "destination": "https://your-app.com/webhooks/jiter",
    "org": "5",
    "status": "Pending",
    "payload": "{'action':'buyGroceries','values':['eggs','bacon','pasta','bread']}",
    "createdAt": "2022-10-05T19:51:27.000Z",
    "updatedAt": "2022-10-05T19:51:27.000Z"
  },
  {
    "id": "10",
    "scheduledTime": "2022-10-27T04:50:26.573Z",
    "destination": "https://your-app.com/webhooks/jiter",
    "org": "5",
    "status": "Pending",
    "payload": "{'action':'buyGroceriesAgain','values':['eggs','bacon','pasta','bread']}",
    "createdAt": "2022-10-05T20:51:27.000Z",
    "updatedAt": "2022-10-05T20:51:27.000Z"
  },
  {
    "id": "11",
    "scheduledTime": "2022-10-27T04:50:26.573Z",
    "destination": "https://your-app.com/webhooks/jiter",
    "org": "5",
    "status": "Pending",
    "payload": "{'action':'buyGroceriesOneMoreTime','values':['eggs','bacon','pasta','bread']}",
    "createdAt": "2022-10-05T20:53:27.000Z",
    "updatedAt": "2022-10-05T20:53:27.000Z"
  }
]
```

## Example Error Response

```
Unable to get events
```
