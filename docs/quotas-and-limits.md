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

You can create as many events that you want, however, you can only have 1,000 _scheduled_ events per month per org. These are events that have a `scheduledDate` within the same month.

### Events Searching

- #### `GET /events` & `getManyEvents`

  - 1,000 events
  - Any event with a `scheduledTime` in the future
  - Any event with a `sentAt` or `failedAt` date in the last 7 days

- #### `GET /events/:eventId` & `getEvent`

  - Event history is limited to the past 30 days
  - Event must have a `scheduledTime` in the future OR
  - Event must have a `sentAt` or `failedAt` date in the last 7 days

### Creating Cron Jobs

You can create up to 3 cron jobs per organization

### Cron Job Searching

- #### `GET /cronjobs` & `getManyCronJobs`

  - There are no limits on the above endpoint, you will retrieve all of the cron jobs for your org

- #### `GET /cronjobs/:cronjobId` & `getCronJob`
  - Cron job history is limited to the past 30 days
