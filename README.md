CRM Automation & Integration Engine
Project Overview

A production-grade integration layer designed to connect landing page webhooks to Salesforce with 100% data reliability.

Key Features

Atomic Upserts: Prevents duplicate leads using Email as the external ID.

Fail-Safe Mechanism: Integrated Slack alerts for any data anomalies.

Scalable Design: Easily add new lead sources by extending the Router logic.

Deployment

Import make-scenario-v1.json into Make.com.

Update Webhook URLs and Salesforce API credentials.

Set up the 'Dead Letter' Data Store for manual recovery.