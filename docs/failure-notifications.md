---
id: failure-notifications
title: Failure Notifications
sidebar_position: 4
---

Every hour, we check to see if any of your events have failed to send. If so, we will send an email to the person who created the Org notifying them of the failures. You need to return any status code between HTTP 200 to 299 for Jiter to consider the webhook event successfully delivered.
