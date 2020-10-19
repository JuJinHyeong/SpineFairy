import Discord from 'discord.js';
import config from './config';
import commandMapper from './commands';

const client = new Discord.Client();

client.on('ready', () => {
  client.guilds.fetch(config.channelId).then((guild) => {
    guild.systemChannel?.send(
      `안녕하세요. 척추요정이에요!\n당신의 척추를 지켜줄게요\n'${config.prefix}start' 를 적어 시작해주세요!`
    );
  });
});

client.on('message', async (message) => {
  if (message.content.startsWith(config.prefix)) {
    const argv = message.content.slice(config.prefix.length).trim().split(' ');
    const command = argv[0].toLowerCase();
    argv.shift();

    const handler = commandMapper[command];
    if (handler) {
      message.channel.send(handler.description);
      handler.execute(client, message, ...argv);
    }
  }
});

client.login(config.token);
