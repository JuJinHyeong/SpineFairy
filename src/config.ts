import 'dotenv/config';

export default {
  token: process.env.BOT_TOKEN || '',
  prefix: process.env.PREFIX || '$',
  channelId: process.env.TEXT_CHANNEL_ID || '',
};
