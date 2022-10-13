---
id: quotas-and-limits
title: Quotas and Limits
sidebar_position: 3
---

:::note
All API endpoints are limited to **100 requests per minute**. You will be throttled by CloudFlare if you go beyond this limit, and you won't be able to send another request for 1 minute.

:::

:::info
If you are hitting any of the limits on this page, please [send us some feedback](https://app.jiter.dev/send-us-feedback?prompt=MakeSuggestion) with your use case!

:::

### Org Limits

You can create up to 5 organizations

### User Limits

There are no limits to the number of users in your org

### Creating Events

You can create as many events that you want, however, you can only have 1,000 _scheduled_ events per month. These are events that have a `scheduledDate` within the same month.

### Events Searching - `GET /events` & `getManyEvents`

Per query, you are limited to:

- 1,000 events
- Any event with a `scheduledTime` in the future
- Any event with a `sentAt` or `failedAt` date in the last 7 days
