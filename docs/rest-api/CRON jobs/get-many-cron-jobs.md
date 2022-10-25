---
id: get-many-cron-jobs
slug: /get-many-cron-jobs
title: Get Many Cron Jobs
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

<Highlight color="#0091ea">GET</Highlight> https://app.jiter.dev/api/cronjobs

This endpoint will return all cron jobs for your org.

## Response

| Code | Description                     |
| ---- | ------------------------------- |
| 200  | Cron jobs returned successfully |
| 500  | Unable to retrieve cron jobs    |

## Example Usage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```jsx title="index.ts"
import axios from "axios";

const apiBaseUrl = "https://app.jiter.dev/api";

const getManyCronJobs = async () => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/cronJobs`, {
      headers: { "x-api-key": "YOUR_API_KEY" },
    });

    console.log("Cron jobs found 🎉", data);
  } catch (error) {
    console.log("Unable to find cron jobs", error);
  }
};

getManyCronJobs();
```

</TabItem>

</Tabs>

## Example Success Response

```json
[
  {
    "id": "3",
    "createdAt": "2022-10-25T18:23:32.000Z",
    "updatedAt": "2022-10-25T18:23:32.000Z",
    "status": "Active",
    "nextExecutionStatus": "Pending",
    "expression": "* * * * *",
    "nextExecutionDate": "2022-10-25T18:24:00.000Z",
    "destination": "https://your-app.com/webhooks/jiter",
    "org": "3",
    "payload": "{'action':'buyGroceriesReminder','values':['eggs','bacon','pasta','bread']}"
  },
  {
    "id": "4",
    "createdAt": "2022-10-25T18:25:12.000Z",
    "updatedAt": "2022-10-25T18:25:12.000Z",
    "status": "Active",
    "nextExecutionStatus": "Pending",
    "expression": "* * * * *",
    "nextExecutionDate": "2022-10-25T18:26:00.000Z",
    "destination": "https://your-app.com/webhooks/jiter",
    "org": "3",
    "payload": "{'action':'buyGroceriesReminder','values':['eggs','bacon','pasta','bread']}"
  },
  {
    "id": "5",
    "createdAt": "2022-10-25T18:25:14.000Z",
    "updatedAt": "2022-10-25T18:25:14.000Z",
    "status": "Active",
    "nextExecutionStatus": "Pending",
    "expression": "* * * * *",
    "nextExecutionDate": "2022-10-25T18:26:00.000Z",
    "destination": "https://your-app.com/webhooks/jiter",
    "org": "3",
    "payload": "{'action':'buyGroceriesReminder','values':['eggs','bacon','pasta','bread']}"
  }
]
```

## Example Error Response

```
{
	"message": "Unable to retrieve cron jobs"
}
```
