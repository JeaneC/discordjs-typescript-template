import Discord from 'discord.js';
import dotenv from 'dotenv';

import { initializeCommands } from './commands';
import { Command } from './types';

dotenv.config();

const prefix = process.env.PREFIX || '!';
const botKey = process.env.BOT_KEY;

function processMessages(
    message: Discord.Message,
    commands: Discord.Collection<string, Command>,
) {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/);
    const commandName = args.shift();
    const command =
        commandName && commands.get(commandName.toLowerCase());

    if (!command) {
        message.reply('that command does not exist.');
        return;
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(
            'there was an error trying to execute that command.',
        );
    }
}

async function initializeApp() {
    const client = new Discord.Client();
    const commands = await initializeCommands();

    client.once('ready', () => {
        console.log('Bot Initialized');
    });

    client.on('message', (message) =>
        processMessages(message, commands),
    );

    client.login(botKey);
}

initializeApp();
