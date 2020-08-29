import Discord from 'discord.js';
import fs from 'fs';

import { Command } from '../types';

async function initializeCommands() {
    const commands = new Discord.Collection<string, Command>();
    const commandFiles = fs.readdirSync(__dirname);

    for (const file of commandFiles) {
        if (file.startsWith('index')) {
            continue;
        }

        const data = await import(`./${file}`);
        const command = data.default as Command;
        commands.set(command.name, command);
    }

    return commands;
}

export { initializeCommands };
