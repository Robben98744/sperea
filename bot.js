  const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message',function(message) {
    let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});

client.login(process.env.BOT_TOKEN);
