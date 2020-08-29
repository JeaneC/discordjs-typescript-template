import { Command } from '../types';

export default {
    name: 'ping',
    description: 'Ping!',
    execute(message) {
        message.channel.send('Pong.');
    },
} as Command;
