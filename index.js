const { Telegraf } = require('telegraf')
process.env.BOT_TOKEN= 'YOUR_TOKEN'
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome', {
  "reply_markup": {
      "keyboard": [["1", "2", "3"],   ["4", "5"]]
      }
  }))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))