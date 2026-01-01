Lead Data Schema Mapping
Source Field	Salesforce Field	Transformation
first_name	FirstName	Trim whitespace
last_name	LastName	Proper Case
email_addr	Email	Lowercase
source_id	LeadSource	Map to Enum
Error Handling Protocol

429 (Rate Limit): Automatic retry with 5-minute backoff.

400 (Bad Request): Route to Slack Alerting module.

500 (Server Error): 3 retries, then store in 'Dead Letter' Data Store.