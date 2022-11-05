---
id: verifying-signatures
title: Verifying Signatures
sidebar_position: 5
---

To verify that the webhooks that you receive at your endpoint came from Jiter, we provide a `X-Jiter-Signature` header as well as a `X-Jiter-Request-Timestamp`.

:::note
The `Jiter-Signature` header is deprecated, please use the `X-Jiter-Signature` header going forward.

:::

Take a look at this example event below:

```json
{
  "headers": {
    "Jiter-Signature": "l8gsSg2UgivhPJ302ywQ6Vc7NHn3HWhwzW0iswSEp8c=",
    "X-Jiter-Signature": "R9MLg3fv09c2zFnZTb52lxiChzMMOqtsJglZjVU4NVs=",
    "X-Jiter-Request-Timestamp": 1667402838551,
    "Content-Type": "application/json"
  },
  "body": {
    "payload": "{\"action\":\"buyGroceries\",\"values\":[\"eggs\",\"bacon\",\"pasta\",\"bread\"]}",
    "scheduledTime": "2022-11-02T15:27:00.000Z"
  }
}
```

To verify this was sent by Jiter, you can use the Jiter SDK in Express.
You can also view our example project [here](https://github.com/.Pantheon-Labs/Jiter-Node-Example)

```typescript
// In index.js with your routes

import { jiterWebhookEvent } from "./webhooks";

api.use("/webhooks/jiter", jiterWebhookEvent);
```

```typescript
// In webhooks.js
const Jiter = require("@jiter/node").default;

module.exports = {
  jiterWebhookEvent: jiter.Middleware.webhookHandler(
    ({ payload }) => {
      console.log("Signed, valid Jiter event received");
      // Now that the event was verified and a response was sent, you can continue with the payload:
      if (payload.action === "buyGroceries") {
        console.log("Purchased the following groceries:", payload.items);
        // await db.purchases.insertOne({
        //     items: payload.items
        // }))
      } else if (payload.action === "returnGroceries") {
        const returns = payload.returns.map(
          (item) => `${item.itemName} - ${item.reason}`
        );
        console.log("Returned the following groceries:", returns);
        // await db.returns.insertOne({
        //     items: payload.returns
        // }))
      }
    },
    { parse: true }
  ),
};
```

or verify the event manually

```typescript
const signingSecret = process.env.SIGNING_SECRET;
const millisecondsUntilWebhookExpiration = 1000 * 60 * 2;

const body = typeof rawBody === "string" ? rawBody : JSON.stringify(rawBody);

const timeSinceRequest = Math.abs(Date.now() - Number(requestTimestamp));
if (Number.isNaN(timeSinceRequest)) {
  // Invalid request timestamp
  res.sendStatus(401);
  return;
}

if (timeSinceRequest > millisecondsUntilWebhookExpiration) {
  // The request timestamp expired
  res.sendStatus(401);
  return;
}

if (!body.trim()) {
  // Invalid request body
  res.sendStatus(401);
  return;
}

if (!requestSignature.trim()) {
  // Invalid request signature
  res.sendStatus(401);
  return;
}

const baseString = `${requestTimestamp}:${body}`;
const localSignature = createHmac("sha256", signingSecret)
  .update(baseString)
  .digest("base64");

if (requestSignature === localSignature) {
  res.sendStatus(200);
}

const parsedBody = JSON.parse(body);
// Continue processing your event here
// await db.insertOne(body)
```
