import { Command } from '../types';

export default {
    name: 'beep',
    description: 'Beep!',
    execute(message) {
        message.channel.send('Bop.');
    },
} as Command;
