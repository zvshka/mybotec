const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var prefix = '!';
const roles = config.roles
const CLEAR_MESSAGES = '!clear';

client.login('NDQxMTQwOTYyNDY3NjQzMzk0.Dcr8OQ.Pku_q24YHqP8kFC4WgiZFlpmiSA');

client.on("message", message => {
function multicolors() {
  let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  roles.forEach((role) => {
    let theRole = message.guild.roles.find("name", role);
    theRole.edit({color: random}).catch(e => {
      return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
    });
  });
 }

 if(message.content.startsWith(prefix + "multicolor")) {
   setInterval(() => { multicolors(); }, 200);
   }
   
 if(message.content.startsWith(prefix + "stopmulti")) {
  clearInterval(() => { multicolors(); }, 0);
}
})



client.on("ready", () => {
  client.user.setPresence({ game: { name: `Гордость клана Craft is life` }, type: 0 });
  
});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'invite')) {
		message.channel.sendMessage('https://discordapp.com/oauth2/authorize?permissions=0&client_id=%20441140962467643394&scope=bot');
	}
});

client.on('ready', () => {
  console.log('ClearMessagesBot is Ready!');
  client.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Удаление прошло успешно. Удалено Всего: "+messagesDeleted);
            console.log('Удаление прошло успешно. Удалено Всего: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Ошибка');
            console.log(err);
          });
      }
    }
  });
});



client.on("message", message => {

  function rainbow() {
    let color1 = '#'+["fdfdfd"];
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: color1}).catch(e => {
        return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }

  function rainbow1() {
    let color1 = '#'+["0000ff"];
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: color1}).catch(e => {
        return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }


	function rainbow2() {
    let color2 = '#'+["ff0000"];
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: color2}).catch(e => {
        return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }

  if(message.content.startsWith(prefix + "russia")) {
    setInterval(() => { rainbow(), rainbow1(), rainbow2()}, 3000);
  }
   
  if(message.content.startsWith(prefix + "russiastop")) {
   setTimeout(() => { console.log(process.exit(0)); }, 300);
 
  }
  
});

client.on('message', message => {
  function test() {
  var n = 0
  var n2 = 0
  var n3 = 0
  var n4 = 0
  while(n=0)
  n = n+1
  console.log(n)
  while(n=1)
  n2 = n2+1
  console.log(n2)
  while(n2=1)
  n3 = n3+1
  console.log(n3)
  while(n3=1)
  n4 = n4+1
  console.log(n4)
  while(n4=1)
  console.log(n)
  n = n-1
  n2= n2-1
  n3= n3-1
  n4= n4-1
  if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'test')) {
		message.channel.sendMessage(n);
   }
  }

 if(message.content.startsWith(prefix + "test3")) {
  setInterval(() => { test()}, 300);
 }
 
 if(message.content.startsWith(prefix + "test5")) {
  setTimeout(() => { console.log(process.exit(0)); }, 300);
 }

	function rainbow2() {
    color2 = n
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: color2}).catch(e => {
        return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }

  if(message.content.startsWith(prefix + "test2")) {
    setInterval(() => { rainbow2()}, 300);
  }
   
  if(message.content.startsWith(prefix + "test1")) {
   setTimeout(() => { console.log(process.exit(0)); }, 300);
  }
  
});

var r = 255
var g = 255
var b = 255
var r2 = 0
var g2 = 0
var b2 = 0
var r3 = 0
var g3 = 0
var b3 = 0
var a
var b  
var c
var d
var e
var f
var color = '#'+'a'+'b'+'c'+'d'+'e'+'f'
function lol() {
  b = r%16
  if(r2=15) {
    b = 'f'
  }
  console.log(b)
}

client.on("ready", () => {
  function lol() {
    b = r%16
    if(r2=15) {
      b = 'f'
    }
    console.log(b)
  }
  
});

client.on("message", (message) => {

  function multicolors() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: random}).catch(e => {
        return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }

 if(message.content == '!multicolor2') {
	 setInterval(() => { multicolors(); }, 200);
	 }
	 
 if(message.content.startsWith(prefix + "stopmulti")) {
  setTimeout(() => { console.log(process.exit(0)); }, 300);
}
});

