---
id: authentication
title: Authentication
sidebar_position: 1
---

# Authentication

To use the Jiter REST API, you must pass in an `x-api-key` header in your request with your API key. In Node, using [Axios](https://www.npmjs.com/package/axios), this would look like:

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

Make sure to replace `YOUR_API_KEY` with your actual API key and the `destination` with your actual endpoint you want to receive events at.
