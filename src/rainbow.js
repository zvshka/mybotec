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
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  }
  });
  
  client.on("message", message => {
  
    function rainbow() {
      let color1 = '#'+["#ff0000"];
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color1}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow60() {
      let color1 = '#'+["ff1a00"];
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color1}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
      function rainbow2() {
      let color2 = '#'+["ff3300"];
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color2}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
      function rainbow3() {
      let color3 = '#'+["ff4d00"];
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow4() {
      let color3 = '#'+["ff6600"];
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
    
    function rainbow5() {
      let color3 = '#'+["ff8000"];
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow6() {
      let color3 = '#'+["ff9900"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow7() {
      let color3 = '#'+["ffb300"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow8() {
      let color3 = '#'+["ffcc00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow9() {
      let color3 = '#'+["ffe600"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow10() {
      let color3 = '#'+["ffff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow11() {
      let color3 = '#'+["e5ff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow12() {
      let color3 = '#'+["ccff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow13() {
      let color3 = '#'+["b3ff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow14() {
      let color3 = '#'+["99ff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow15() {
      let color3 = '#'+["80ff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow16() {
      let color3 = '#'+["66ff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow18() {
      let color3 = '#'+["4cff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow19() {
      let color3 = '#'+["33ff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow20() {
      let color3 = '#'+["1aff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow21() {
      let color3 = '#'+["00ff00"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow22() {
      let color3 = '#'+["00ff1a"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow23() {
      let color3 = '#'+["00ff33"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow24() {
      let color3 = '#'+["00ff4c"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow25() {
      let color3 = '#'+["00ff66"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow26() {
      let color3 = '#'+["00ff80"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow27() {
      let color3 = '#'+["00ff99"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow28() {
      let color3 = '#'+["00ffb3"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow29() {
      let color3 = '#'+["00ffcc"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow30() {
      let color3 = '#'+["00ffe5"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow31() {
      let color3 = '#'+["00ffff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow32() {
      let color3 = '#'+["00e5ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow33() {
      let color3 = '#'+["00ccff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow34() {
      let color3 = '#'+["00b3ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow35() {
      let color3 = '#'+["0099ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow36() {
      let color3 = '#'+["0080ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow37() {
      let color3 = '#'+["0066ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow38() {
      let color3 = '#'+["004cff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow39() {
      let color3 = '#'+["0033ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow40() {
      let color3 = '#'+["001aff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow41() {
      let color3 = '#'+["0000ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow42() {
      let color3 = '#'+["1900ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow43() {
      let color3 = '#'+["3300ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow44() {
      let color3 = '#'+["4c00ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow45() {
      let color3 = '#'+["6600ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow46() {
      let color3 = '#'+["8000ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow46() {
      let color3 = '#'+["8000ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow47() {
      let color3 = '#'+["b300ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
    function rainbow48() {
      let color3 = '#'+["cc00ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow49() {
      let color3 = '#'+["e600ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow50() {
      let color3 = '#'+["ff00ff"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow51() {
      let color3 = '#'+["ff00e6"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow52() {
      let color3 = '#'+["ff00cc"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow53() {
      let color3 = '#'+["ff00b3"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow54() {
      let color3 = '#'+["ff0099"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow55() {
      let color3 = '#'+["ff0080"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow56() {
      let color3 = '#'+["ff0066"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow57() {
      let color3 = '#'+["ff004c"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow58() {
      let color3 = '#'+["ff0033"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
    function rainbow59() {
      let color3 = '#'+["#ff0019"]
      roles.forEach((role) => {
        let theRole = message.guild.roles.find("name", role);
        theRole.edit({color: color3}).catch(e => {
          return message.channel.sendMessage(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
        });
      });
    }
  
  
  
   if(message.content.startsWith(prefix + "rainbow")) {
       setInterval(() => { rainbow(), rainbow60(), rainbow2(), rainbow3(), rainbow4(), rainbow5(), rainbow6(), rainbow7(), rainbow8(), rainbow9(), rainbow10(), rainbow11(), rainbow12(), rainbow13(), rainbow14(), rainbow15(), rainbow16(), rainbow18(), rainbow19(), rainbow20(), rainbow21(), rainbow22(), rainbow23(), rainbow24(), rainbow25(), rainbow26(), rainbow27(), rainbow28(), rainbow29(), rainbow30(), rainbow31(), rainbow32(), rainbow33(), rainbow34(), rainbow35(), rainbow36(), rainbow37(), rainbow38(), rainbow39(), rainbow40(), rainbow41(), rainbow42(), rainbow43(), rainbow44(), rainbow45(), rainbow46(), rainbow47(), rainbow48(), rainbow49(), rainbow50(), rainbow51(), rainbow52(), rainbow53(), rainbow54(), rainbow55(), rainbow56(), rainbow57(), rainbow58(), rainbow59()  }, 300);
    }
       
   if(message.content.startsWith(prefix + "stoprain")) {
    clearInterval(() => {rainbow(), rainbow60(), rainbow2(), rainbow3(), rainbow4(), rainbow5(), rainbow6(), rainbow7(), rainbow8(), rainbow9(), rainbow10(), rainbow11(), rainbow12(), rainbow13(), rainbow14(), rainbow15(), rainbow16(), rainbow18(), rainbow19(), rainbow20(), rainbow21(), rainbow22(), rainbow23(), rainbow24(), rainbow25(), rainbow26(), rainbow27(), rainbow28(), rainbow29(), rainbow30(), rainbow31(), rainbow32(), rainbow33(), rainbow34(), rainbow35(), rainbow36(), rainbow37(), rainbow38(), rainbow39(), rainbow40(), rainbow41(), rainbow42(), rainbow43(), rainbow44(), rainbow45(), rainbow46(), rainbow47(), rainbow48(), rainbow49(), rainbow50(), rainbow51(), rainbow52(), rainbow53(), rainbow54(), rainbow55(), rainbow56(), rainbow57(), rainbow58(), rainbow59()  })
  };
  });