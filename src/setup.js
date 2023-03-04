const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../config');

const rest = new REST({ version: '9' }).setToken(config.token);

const commands = [
    new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Sends control pane to the current channel.')
        .setDefaultPermission(false)
        .toJSON(),
];

async function main() {
    // Register the slash command
    await rest.put(Routes.applicationGuildCommands(config.client_id, config.guild_id), { body: commands });
}
main();
