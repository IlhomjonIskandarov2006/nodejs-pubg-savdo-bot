const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "5583248408:AAFcP-t8FpYvJNWalJK1FNbcylfGVXw1f4I";
const bot = new TelegramBot(TOKEN, { polling: true });


bot.onText(/\/start/, (msg) =>{
    bot.sendMessage(msg.chat.id, `Assalomu aleykum ${msg.chat.first_name} bizning botga xush kelibsiz`)
});
bot.on('message', (msg) =>{
    bot.sendMessage(msg.chat.id, `Assalomu aleykum ${msg.chat.first_name} bizning botga xush kelibsiz`)
})