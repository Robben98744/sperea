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

client.login("NDkyNzI2MzMxNDk1NDE1ODE5.DobP0Q.o4brtyt95JOdHBbHBBlYU0wWfM4");
