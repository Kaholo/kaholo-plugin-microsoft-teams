# kaholo-plugin-microsoft-teams
Kaholo plugin for Microsoft Teams

## Method: Send Incoming Webhook
Send an incuming webhook message to your Microsoft Teams channel. 

**Parameters**

1. Webhook URL - The incoming webhook URL (see [Microsoft documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook))
2. Message - The message to send. This can be either a string and then it will be considered to be a text message or pass a complex object to send other message types (see [Microsoft documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using))
