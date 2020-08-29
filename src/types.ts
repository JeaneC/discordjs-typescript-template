import Discord from 'discord.js';

export type Command = {
    name: string;
    description: string;
    execute: (message: Discord.Message, args: string[]) => void;
    args?: string[];
};
