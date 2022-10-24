---
id: retries
title: Retries
sidebar_position: 4
---

In the event of failures, Jiter will try to send your events and CRON jobs to your desired endpoint at least 3 more times:

The `first` retry will occur 3 seconds after the `scheduledTime` for events and `nextScheduledDate` for CRON jobs.

The `second` retry will occur 5 seconds after the `first` retry.

The `third` retry will occur 10 seconds after the `second` retry.

Example:

If you have an event scheduled for `12:00:00 AM` but we receive a `500` status code from your server:

The first retry will occur at `12:00:03 AM`

The second retry will occur at `12:00:08 AM`

The third retry will occur at `12:00:18 AM`

You need to return any status code between `200` - `299` for Jiter to consider the event or CRON job successfully delivered.

You can view the event and CRON job history by using the `GET /events/:id` and `GET /cronjobs/:id` endpoints.
