---
id: create-event
title: Create Event
sidebar_position: 2
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

<Highlight color="#00c853">POST</Highlight> https://app.jiter.dev/api/events

## Request Body Parameters

| Parameter     | Description                                                              | Example                                                                 |
| ------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| payload       | Your stringified payload                                                 | `'{"action":"buyGroceries","values":["eggs","bacon","pasta","bread"]}'` |
| destination   | The endpoint we should send your event to                                | `https://your-app.com/webhooks/jiter`                                   |
| scheduledTime | An ISO timestamp in the future when you would like to receive your event | `'2022-10-05T19:10:58.322Z'`                                            |

## Response

| Code | Description                                           |
| ---- | ----------------------------------------------------- |
| 200  | Creates a scheduled event                             |
| 400  | Please make sure your scheduled time is in the future |
| 500  | Unable to create the event                            |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";
const twentyFourHours = 24 * 60 * 60 * 1000;

const createEvent = async () => {
  const tomorrow = new Date(Date.now() + twentyFourHours);

  try {
    const { data } = await axios.post(
      `${apiBaseUrl}/events`,
      {
        destination: "https://your-app.com/webhooks/jiter",
        scheduledTime: tomorrow,
        payload: JSON.stringify({
          action: "buyGroceries",
          values: ["eggs", "bacon", "pasta", "bread"],
        }),
      },
      { headers: { "x-api-key": "YOUR_API_KEY" } }
    );

    console.log("Event created 🎉", data);
  } catch (error) {
    console.log("Unable to create event", error);
  }
};

createEvent();
```

</TabItem>
  <TabItem value="js" label="Javascript" >

```jsx title="index.js"
import Jiter from "@jiter/node"

const twentyFourHours = 24 * 60 * 60 * 1000;
const tomorrow = new Date(Date.now() + twentyFourHours);


const main = () => {
  Jiter.init({ apiKey: "YOUR_API_KEY" })

  try {
    const createdEvent = await Jiter.Events.createEvent({
      destination: "https://your-app.com/webhooks/jiter",
      payload: JSON.stringify({
            action: "buyGroceries",
            values: ["eggs", "bacon", "pasta", "bread"],
          }),
          scheduledTime: tomorrow,
    })
    console.log("Event created 🎉", data);
  } catch (error) {
    console.log("Unable to create event", error);
  }
}

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
	"message": "Please enter a valid time"
}
```
