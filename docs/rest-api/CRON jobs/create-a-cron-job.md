---
id: create-a-cron-job
slug: /create-a-cron-job
title: Create a Cron Job
sidebar_position: 1
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

Creates a Cron job to trigger on a set schedule

<Highlight color="#00c853">POST</Highlight> https://app.jiter.dev/api/cronjobs

## Request Body Parameters

| Parameter   | Description                                 | Example                                                                         |
| ----------- | ------------------------------------------- | ------------------------------------------------------------------------------- |
| payload     | Your stringified payload                    | `'{"action":"buyGroceriesReminder","values":["eggs","bacon","pasta","bread"]}'` |
| destination | The endpoint we should send your payload to | `https://your-app.com/webhooks/jiter`                                           |
| expression  | A cron expression                           | `'* * * * *'`                                                                   |

## Response

| Code | Description                   |
| ---- | ----------------------------- |
| 200  | Cron job created              |
| 400  | Invalid request body          |
| 500  | Unable to create the cron job |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";

const createCronJob = async () => {
  try {
    const { data } = await axios.post(
      `${apiBaseUrl}/cronjobs`,
      {
        destination: "https://your-app.com/webhooks/jiter",
        expression: "* * * * *",
        payload: JSON.stringify({
          action: "buyGroceriesReminder",
          values: ["eggs", "bacon", "pasta", "bread"],
        }),
      },
      { headers: { "x-api-key": "YOUR_API_KEY" } }
    );

    console.log("Cron Job created 🎉", data);
  } catch (error) {
    console.log("Unable to create Cron Job", error);
  }
};

createCronJob();
```

</TabItem>

</Tabs>

## Example Success Response

```json
{
  "id": "9",
  "history": [],
  "status": "Active",
  "destination": "https://your-app.com/webhooks/jiter",
  "org": "3",
  "payload": "{'action':'buyGroceriesReminder','values':['eggs','bacon','pasta','bread']}",
  "expression": "* * * * *",
  "nextExecutionStatus": "Pending",
  "nextExecutionDate": "2022-10-25T18:27:00.000Z",
  "createdAt": "2022-10-25T18:26:04.000Z",
  "updatedAt": "2022-10-25T18:26:04.000Z"
}
```

## Example Error Response

```
{
	"message": "Please enter a valid cron expression"
}
```
