const { Telegraf } = require("telegraf");

const bot = new Telegraf('TOKEN');

const ID_CHAT = "-580971624"; //id do teu chat
const LIST_SENT = [];
let interval = 10000;
let pesquisa = "";
//setConfig TECLADO = [setconfig, teclado]
bot.command("ping", (ctx) => {
  bot.telegram.sendMessage(ID_CHAT, 'pong');
});

bot.launch().then(() => {
  console.log("Bot iniciado!");
});
