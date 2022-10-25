---
id: update-event
title: Update Event
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

<Highlight color="#ff6d00">PUT</Highlight> https://app.jiter.dev/api/cronjobs/:cronJobId

>

## Request Parameters

| Parameter | Description                           | Example |
| --------- | ------------------------------------- | ------- |
| cronJobId | ID of the CRON job you want to update | `3`     |

## Request Body Parameters

| Parameter   | Description                                    | Example                                                                         |
| ----------- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| payload     | Your stringified payload                       | `'{"action":"buyGroceriesReminder","values":["eggs","bacon","pasta","bread"]}'` |
| destination | The endpoint we should send your CRON event to | `https://your-app.com/webhooks/jiter`                                           |
| expression  | A cron expression                              | `* * * * *`                                                                     |
| status      | The CRON job status, `Active` or `Disabled`    | `Disabled`                                                                      |

## Response

| Code | Description                         |
| ---- | ----------------------------------- |
| 200  | CRON job updated successfully       |
| 404  | We were unable to find the CRON job |
| 500  | Unable to edit the cron job         |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";

const updateCronJob = async () => {
  try {
    const { data } = await axios.put(
      `${apiBaseUrl}/cronjobs/3`,
      {
        status: "Disabled",
      },
      { headers: { "x-api-key": "YOUR_API_KEY" } }
    );

    console.log("CRON job updated 🎉", data);
  } catch (error) {
    console.log("Unable to update CRON job", error);
  }
};

updaupdateCronJobteEvent();
```

</TabItem>

</Tabs>

## Example Success Response

```json
{
  "id": "9",
  "history": [],
  "status": "Disabled",
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
	"message": "'status' must be one of 'Active' or 'Disabled'"
}
```
