require("dotenv").config();
const fetcher = require("./fetcher");
const messenger = require("./messenger");
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TOKEN);

const ID_CHAT = "-580971624";
const LIST_SENT = [];
let interval = 10000;
let pesquisa = "";
//setConfig TECLADO = [setconfig, teclado]
bot.command("setConfig", (ctx) => {
  const params = ctx.update.message.text.split(" ");
  pesquisa = params[1];
  send_message();
});

async function send_message() {
  const lista_fetch = await do_fetch();
  let i = 0;
  lista_fetch.every((produto) => {
    if (!LIST_SENT.includes(produto.id)) {
      bot.telegram.sendMessage(ID_CHAT, produto.texto);
      LIST_SENT.push(produto.id);
      i++;
    }
    if (i === 5) {
      return false;
    }
    return true;
  });

  setTimeout(send_message, interval);
}

async function do_fetch() {
  const result_fetch = await fetcher(pesquisa).then((data) => data);
  return await messenger(result_fetch).then((data) => data);
}

bot.launch().then(() => {
  console.log("Bot iniciado!");
});
