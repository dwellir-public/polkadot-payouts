import { Logger } from '@w3f/logger';
import { WebClient } from '@slack/web-api';


export class Slack {
  constructor(
    private readonly slackToken: string,
    private readonly logger: Logger) {}

  async testSlack(channelId: string, message: string): Promise<void> {
    if (this.slackToken) {
      const web = new WebClient(this.slackToken);
      
      this.logger.info("Sending message");
      // Post a message to the channel, and await the result.
      // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
      const result = await web.chat.postMessage({
        text: message,
        channel: channelId,
      });
    
      // The result contains an identifier for the message, `ts`.
      this.logger.info(`Successfully send message ${result.ts} to channel with ID ${channelId}`);
    }
  }
}
