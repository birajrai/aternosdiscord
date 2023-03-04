const { Q9erig } = require('./aternos.js');
const { iHalloweenBotForAternos } = require('./discord.js');

async function main() {
    let bot = new iHalloweenBotForAternos();
    let server = new Q9erig(() => bot.onServerStatusUpdate());
    bot.setMinecraftServer(server);
    await server.initialize();
    bot.login();
}

main();
