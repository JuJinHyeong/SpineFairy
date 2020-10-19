import Discord from 'discord.js';
import config from '../config';
import CommandHandler from './CommandHandler';

// eslint-disable-next-line no-undef
let spineTimer: NodeJS.Timeout | null = null;

const startExecute = (client: Discord.Client) => {
  client.guilds.fetch(config.channelId).then((guild) => {
    guild.systemChannel?.send('스트레칭 할 시간이에요', {
      tts: true,
    });
  });
  spineTimer = setInterval(() => {
    client.guilds.fetch(config.channelId).then((guild) => {
      guild.systemChannel?.send('스트레칭 할 시간이에요', {
        tts: true,
      });
    });
  }, 1800000);
};

export const endTimer = () => {
  if (spineTimer) {
    clearInterval(spineTimer);
  }
};

export default new CommandHandler('start', '허리 펼 시간!', startExecute);
