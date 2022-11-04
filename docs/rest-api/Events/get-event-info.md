---
id: get-event
slug: /get-event
title: Get Event Info
sidebar_position: 3
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

Retrieves info about a specific event by ID and the associated event history

<Highlight color="#0091ea">GET</Highlight> 'https://app.jiter.dev/api/events/:eventId'

## Request Parameters

| Parameter | Description                          | Example |
| --------- | ------------------------------------ | ------- |
| eventId   | ID of the event you want to retrieve | `47`    |

## Response

| Code | Description                        |
| ---- | ---------------------------------- |
| 200  | Event returned successfully        |
| 404  | Event was not found                |
| 500  | An error ocurred finding the event |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";

const getEvent = async () => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/events/47`, {
      headers: { "x-api-key": "YOUR_API_KEY" },
    });

    console.log("Event found 🎉", data);
  } catch (error) {
    console.log("Unable to find event", error);
  }
};

getEvent();
```

</TabItem>
  <TabItem value="js" label="Javascript" >

```jsx title="index.js"
import Jiter from "@jiter/node"

const getEvent = () => {
  Jiter.init({ apiKey: "YOUR_API_KEY" })

  try {
    const event = await Jiter.Events.getEvent({ id: '47' })
    console.log("Event found 🎉", event);
  } catch (error) {
    console.log("Unable to find event", error);
  }
}

getEvent();
```

  </TabItem>

</Tabs>

## Example Success Response

```json
{
  "id": "9",
  "scheduledTime": "2022-10-27T04:50:26.573Z",
  "destination": "https://your-app.com/webhooks/jiter",
  "org": "5",
  "status": "Pending",
  "payload": "{'action':'buyGroceries','values':['eggs','bacon','pasta','bread']}",
  "createdAt": "2022-10-05T19:51:27.000Z",
  "updatedAt": "2022-10-05T19:51:27.000Z"
}
```

## Example Error Response

```
{
	"message": "Unable to find event"
}
```
