import { Logger } from '@w3f/logger';
import { WebClient } from '@slack/web-api';


export async function testSlack(logger: Logger) {
  const web = new WebClient('');

  // Given some known conversation ID (representing a public channel, private channel, DM or group DM)
  const conversationId = '';
  
  logger.info("Sending message");
  // Post a message to the channel, and await the result.
  // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: conversationId,
  });

  // The result contains an identifier for the message, `ts`.
  console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
}
