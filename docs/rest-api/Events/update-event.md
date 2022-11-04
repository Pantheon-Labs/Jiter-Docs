---
id: update-event
title: Update Event
slug: /update-event
sidebar_position: 4
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

<Highlight color="#ff6d00">PUT</Highlight> https://app.jiter.dev/api/events/:eventId

>

You can update any events that have a status of `Pending`.

## Request Parameters

| Parameter | Description                        | Example |
| --------- | ---------------------------------- | ------- |
| eventId   | ID of the event you want to update | `47`    |

## Request Body Parameters

| Parameter   | Description                                       | Example                                                                 |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------------------- |
| payload     | Your stringified payload                          | `'{"action":"buyGroceries","values":["eggs","bacon","pasta","bread"]}'` |
| destination | The endpoint we should send your event to         | `https://your-app.com/webhooks/jiter`                                   |
| status      | The event status - can only be set to `Cancelled` | `Cancelled`                                                             |

## Response

| Code | Description                                                                         |
| ---- | ----------------------------------------------------------------------------------- |
| 200  | Event updated successfully                                                          |
| 400  | Bad request - either in the body or trying to update an event that is not `Pending` |
| 404  | We were unable to find the event                                                    |
| 500  | Unable to update the event                                                          |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";

const updateEvent = async () => {
  try {
    const { data } = await axios.put(
      `${apiBaseUrl}/events/47`,
      {
        destination: "https://your-new-app-url.com/webhooks/jiter",
        payload: JSON.stringify({
          action: "returnGroceries",
          values: [{ bacon: "Too addictive" }, { eggs: "Break too easily" }],
        }),
        status: "Cancelled",
      },
      { headers: { "x-api-key": "YOUR_API_KEY" } }
    );

    console.log("Event updated 🎉", data);
  } catch (error) {
    console.log("Unable to update event", error);
  }
};

updateEvent();
```

</TabItem>
  <TabItem value="js" label="Javascript" >

```js title="index.js"
import Jiter from "@jiter/node";

const main = () => {
  Jiter.init({ apiKey: "YOUR_API_KEY" });

  try {
    const updatedEvent = await Jiter.Events.updateEvent({
      id: "47",
      destination: "https://your-new-app-url.com/webhooks/jiter",
      payload: JSON.stringify({
        action: "returnGroceries",
        values: [{ bacon: "Too addictive" }, { eggs: "Break too easily" }],
      }),
      status: "Cancelled",
    });
    console.log("Event updated 🎉", updatedEvent);
  } catch (error) {
    console.log("Unable to update event", error);
  }
};
```

  </TabItem>

</Tabs>

## Example Success Response

```json
{
  "id": "47",
  "scheduledTime": "2022-10-27T04:50:26.573Z",
  "destination": "https://your-new-app-url.com/webhooks/jiter",
  "org": "5",
  "status": "Cancelled",
  "payload": "{'action':'returnGroceries','values':[{'bacon':'Too addictive'},{'eggs':'Break too easily'}]}",
  "createdAt": "2022-10-05T19:51:27.000Z",
  "updatedAt": "2022-10-05T24:17:12.000Z"
}
```

## Example Error Response

```
{
	"message": "Please make sure your scheduled time is in the future."
}
```
