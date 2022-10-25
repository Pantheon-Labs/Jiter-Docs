---
id: get-cron-job-info
slug: /get-cron-job-info
title: Get Cron Job Info
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

Retrieves info about a specific cron job by ID

<Highlight color="#0091ea">GET</Highlight> https://app.jiter.dev/api/cronjobs/:cronJobId

## Request Parameters

| Parameter | Description                             | Example |
| --------- | --------------------------------------- | ------- |
| cronJobId | ID of the cron job you want to retrieve | `9`     |

## Response

| Code | Description                           |
| ---- | ------------------------------------- |
| 200  | Cron job returned successfully        |
| 404  | Cron job was not found                |
| 500  | An error ocurred finding the cron job |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";

const getCronJob = async () => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/cronjobs/9`, {
      headers: { "x-api-key": "YOUR_API_KEY" },
    });

    console.log("Cron job found 🎉", data);
  } catch (error) {
    console.log("Unable to find cron job", error);
  }
};

getCronJob();
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
	"message": "Unable to find cron job"
}
```
