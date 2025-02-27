import { Command } from '../types';

export default {
    name: 'args-info',
    description: 'Information about the arguments provided.',
    execute(message, args) {
        if (args[0] === 'foo') return message.channel.send('bar');

        message.channel.send(
            `Arguments: ${args}\nArguments length: ${args.length}`,
        );
    },
} as Command;
