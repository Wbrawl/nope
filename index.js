const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
//const prefix = "ir!"
const fs = require("fs");
let bot = client
const db = require("quick.db");
bot.commands = new Discord.Collection();
fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("Keine Commands Gefunden!");
        return;
    }

    console.log(`${jsfiles.length} commands geladen!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} Geladen!`);
        bot.commands.set(props.help.name, props);
    });
});

  
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args, prefix);
    
});




client.on("ready", () => {
  console.log(`${client.user.tag} ist gestartet!`);
  let statuses = [`Made by rbxBotShop`, "Created by revoX / Cooler_bot"];

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
    type: "WATCHING"
    });
  }, 10000);
});

client.on("message", async message => {
if(message.content.startsWith(prefix + "ticket")){
        let rawusername = message.author.username.split("").slice(0);

        let username = "";
var i = 0
        for(i=0;i<rawusername.length;i++){
            if(rawusername[i].toLowerCase() == "a"
            || rawusername[i].toLowerCase() == "b"
            || rawusername[i].toLowerCase() == "c"
            || rawusername[i].toLowerCase() == "d"
            || rawusername[i].toLowerCase() == "e"
            || rawusername[i].toLowerCase() == "f"
            || rawusername[i].toLowerCase() == "g"
            || rawusername[i].toLowerCase() == "h"
            || rawusername[i].toLowerCase() == "i"
            || rawusername[i].toLowerCase() == "j"
            || rawusername[i].toLowerCase() == "k"
            || rawusername[i].toLowerCase() == "l"
            || rawusername[i].toLowerCase() == "m"
            || rawusername[i].toLowerCase() == "n"
            || rawusername[i].toLowerCase() == "o"
            || rawusername[i].toLowerCase() == "p"
            || rawusername[i].toLowerCase() == "q"
            || rawusername[i].toLowerCase() == "r"
            || rawusername[i].toLowerCase() == "s"
            || rawusername[i].toLowerCase() == "t"
            || rawusername[i].toLowerCase() == "u"
            || rawusername[i].toLowerCase() == "v"
            || rawusername[i].toLowerCase() == "w"
            || rawusername[i].toLowerCase() == "x"
            || rawusername[i].toLowerCase() == "y"
            || rawusername[i].toLowerCase() == "z"
            || rawusername[i].toLowerCase() == "0"
            || rawusername[i].toLowerCase() == "1"
            || rawusername[i].toLowerCase() == "2"
            || rawusername[i].toLowerCase() == "3"
            || rawusername[i].toLowerCase() == "4"
            || rawusername[i].toLowerCase() == "5"
            || rawusername[i].toLowerCase() == "6"
            || rawusername[i].toLowerCase() == "7"
            || rawusername[i].toLowerCase() == "8"
            || rawusername[i].toLowerCase() == "9"){
                username+=rawusername[i].toLowerCase();
            }
        }

       // if(message.channel.id !== "Kanal ID") return message.reply("Du kannst kein Ticket in diesem Kanal erstellen").then(msg=>msg.delete({timeout:"5000"}));

        message.delete();

        let category = message.guild.channels.cache.find(ct=>ct.name === "tickets" && ct.type === "category");

        if(!category) await message.guild.channels.create("tickets", {type:"category"}).then(cat=>category = cat);

        if(message.guild.channels.cache.find(cha=>cha.name===`ticket-${username.toLowerCase()}`)) return message.reply("Du hast schon ein Ticket").then(msg=>msg.delete({timeout:"5000"}));

        let supporterRole = message.guild.roles.cache.find(rl=>rl.name ==="Supporter");

        if(!supporterRole) return message.reply("Ich konnte keine Supporter rolle finden!").then(msg=>msg.delete({timeout:"5000"}));

        await message.guild.channels.create(`ticket-${message.author.username}`,{type:"text"}).then(ch=>{
            ch.setParent(category);
            ch.overwritePermissions([
                {
                    id:message.guild.id,
                    deny:["SEND_MESSAGES","VIEW_CHANNEL","ATTACH_FILES"]
                },
                {
                    id:message.author.id,
                    allow:["SEND_MESSAGES","VIEW_CHANNEL","ATTACH_FILES"]
                }
            ]);

            ch.send(`Hey <@&${supporterRole.id}>, Hier braucht jemand Hilfe`);
        }).catch(err=>{
            if(err) return message.channel.send("Ein Fehler ist aufgetreten"+err);
        })

        message.reply("Ein Ticket wurde erstellt, gehe in das Ticket und beschreibe dein Problem").then(msg=>msg.delete({timeout:"9000"}));
    }


    if(message.content.startsWith(prefix + "close")){
        let rawusername = message.author.username.split("").slice(0);

        let username = "";
var i = 0
        for(i=0;i<rawusername.length;i++){
            if(rawusername[i].toLowerCase() == "a"
            || rawusername[i].toLowerCase() == "b"
            || rawusername[i].toLowerCase() == "c"
            || rawusername[i].toLowerCase() == "d"
            || rawusername[i].toLowerCase() == "e"
            || rawusername[i].toLowerCase() == "f"
            || rawusername[i].toLowerCase() == "g"
            || rawusername[i].toLowerCase() == "h"
            || rawusername[i].toLowerCase() == "i"
            || rawusername[i].toLowerCase() == "j"
            || rawusername[i].toLowerCase() == "k"
            || rawusername[i].toLowerCase() == "l"
            || rawusername[i].toLowerCase() == "m"
            || rawusername[i].toLowerCase() == "n"
            || rawusername[i].toLowerCase() == "o"
            || rawusername[i].toLowerCase() == "p"
            || rawusername[i].toLowerCase() == "q"
            || rawusername[i].toLowerCase() == "r"
            || rawusername[i].toLowerCase() == "s"
            || rawusername[i].toLowerCase() == "t"
            || rawusername[i].toLowerCase() == "u"
            || rawusername[i].toLowerCase() == "v"
            || rawusername[i].toLowerCase() == "w"
            || rawusername[i].toLowerCase() == "x"
            || rawusername[i].toLowerCase() == "y"
            || rawusername[i].toLowerCase() == "z"
            || rawusername[i].toLowerCase() == "0"
            || rawusername[i].toLowerCase() == "1"
            || rawusername[i].toLowerCase() == "2"
            || rawusername[i].toLowerCase() == "3"
            || rawusername[i].toLowerCase() == "4"
            || rawusername[i].toLowerCase() == "5"
            || rawusername[i].toLowerCase() == "6"
            || rawusername[i].toLowerCase() == "7"
            || rawusername[i].toLowerCase() == "8"
            || rawusername[i].toLowerCase() == "9"){
                username+=rawusername[i].toLowerCase();
            }
        }

        if(!message.channel.name.includes("ticket") || message.channel.name === "ticket") return;

        if(message.channel.name !== `ticket-${username.toLowerCase()}` && !message.member.roles.cache.find(rl=>rl.name==="Supporter")) return message.reply("Das ist nicht dein Ticket, deswegen kannst es auch nett schließen").then(msg=>msg.delete({timeout:"5000"}));

        await message.channel.send("Ticket wird geschlossen...");

        await message.channel.delete().catch(err=>{
            if(err) return console.error("Ein Fehler ist aufgetreten "+err);
        })

    }
});


client.on("message", async message => {
  if(message.author.bot) return;
  db.add(`xp_${message.guild.id}_${message.author.id}`, 2);
  if(db.fetch(`xp_${message.guild.id}_${message.author.id}`)+1  >  "100" ) {
       db.add(`xp_${message.guild.id}_${message.author.id}`, -db.fetch(`xp_${message.guild.id}_${message.author.id}`)) 
         db.add(`lvl_${message.guild.id}_${message.author.id}`, 1)
    message.channel.send(`${message.author}, du hast soeben level ${db.fetch(`lvl_${message.guild.id}_${message.author.id}`)} erreicht! 🎉`).then(msg=>msg.delete({timeout:"20000"}));//d
     }
  
});
    client.login("ODA1NDk1ODAwNjk1ODgxNzI5.YBbubA.IKzzBbA7umS16TNCo4kBNPx6UC8");

    client.on("message", async message => {
        const prxjso = JSON.parse(fs.readFileSync("./JSON/prefix.json", "utf8"));
    
        const prefix = prxjso[message.guild.id]
      if(!prefix) {
        prxjso[message.guild.id] = {
          prefix: "/"
        }
      }
      const lang = JSON.parse(fs.readFileSync("./JSON/lang.json", "utf8"));
    
      const ranks = JSON.parse(fs.readFileSync("./JSON/ranks.json", "utf8"));
      if (!ranks[message.author.id]) {
        ranks[message.author.id] = {
          rank: "user"
        };
      }
    
      if (ranks[message.author.id].rank == "admin") {
         const args = message.content
            .slice(prefix.prefix.length)
            .trim()
            .split(+/g /);
          const glo = JSON.parse(fs.readFileSync("./JSON/global_ger.json", "utf8"));
          const glo2 = glo[message.guild.id];
          if (!glo2) return;
          if (message.channel.id === glo2.globalchat) {
            try {
              const embed_ger = new Discord.MessageEmbed();
              embed_ger.setColor("RED");
              embed_ger.setTitle("Admin: " + message.author.username);
              embed_ger.addField("Nachricht:", message.content);
              embed_ger.setFooter(
                "ID:" + message.author.id + "\nServer: " + message.guild.name
              );
              message.delete();
              client.guilds.cache.forEach(g => {
                try {
                  client.channels.cache.get(glo[g.id].globalchat).send(embed_ger);
                } catch (e) {
                  return;
                }
              });
            } catch (e) {
              return;
          }
        }
      }
    });
    
    client.on("message", async message => {
        const prxjso = JSON.parse(fs.readFileSync("./JSON/prefix.json", "utf8"));
    
        const prefix = prxjso[message.guild.id]
      if(!prefix) {
        prxjso[message.guild.id] = {
          prefix: "/"
        }
      }
      const lang = JSON.parse(fs.readFileSync("./JSON/lang.json", "utf8"));
    
      const ranks = JSON.parse(fs.readFileSync("./JSON/ranks.json", "utf8"));
      if (!ranks[message.author.id]) {
        ranks[message.author.id] = {
          rank: "user"
        };
      }
    
      if (ranks[message.author.id].rank == "dev") {
          const args = message.content
            .slice(prefix.prefix.length)
            .trim()
            .split(+/g /);
          const glo = JSON.parse(fs.readFileSync("./JSON/global_ger.json", "utf8"));
          const glo2 = glo[message.guild.id];
          if (!glo2) return;
          if (message.channel.id === glo2.globalchat) {
            try {
              const embed_ger = new Discord.MessageEmbed();
              embed_ger.setColor("RED");
              embed_ger.setTitle("Entwickler: " + message.author.username);
              embed_ger.addField("Nachricht:", message.content);
              embed_ger.setFooter(
                "ID:" + message.author.id + "\nServer: " + message.guild.name
              );
              message.delete();
              client.guilds.cache.forEach(g => {
                try {
                  client.channels.cache.get(glo[g.id].globalchat).send(embed_ger);
                } catch (e) {
                  return;
                }
              });
            } catch (e) {
              return;
            }
        }
      }
    });
    client.on("message", async message => {
        const prxjso = JSON.parse(fs.readFileSync("./JSON/prefix.json", "utf8"));
        const prefix = prxjso[message.guild.id]
      if(!prefix) {
        prxjso[message.guild.id] = {
          prefix: "/"
        }
      }
      const lang = JSON.parse(fs.readFileSync("./JSON/lang.json", "utf8"));
    
      const ranks = JSON.parse(fs.readFileSync("./JSON/ranks.json", "utf8"));
      if (!ranks[message.author.id]) {
        ranks[message.author.id] = {
          rank: "user"
        };
      }
    
      if (ranks[message.author.id].rank == "partner") {
          const args = message.content
            .slice(prefix.prefix.length)
            .trim()
            .split(+/g /);
          const glo = JSON.parse(fs.readFileSync("./JSON/global_ger.json", "utf8"));
          const glo2 = glo[message.guild.id];
          if (!glo2) return;
          if (message.channel.id === glo2.globalchat) {
            try {
              const embed_ger = new Discord.MessageEmbed();
              embed_ger.setColor("RED");
              embed_ger.setTitle("Partner: " + message.author.username);
              embed_ger.addField("Nachricht:", message.content);
              embed_ger.setFooter(
                "ID:" + message.author.id + "\nServer: " + message.guild.name
              );
              message.delete();
              client.guilds.cache.forEach(g => {
                try {
                  client.channels.cache.get(glo[g.id].globalchat).send(embed_ger);
                } catch (e) {
                  return;
                }
              });
            } catch (e) {
              return;
            }
          }
      }
    });

    client.on("message", async message => {
        const prxjso = JSON.parse(fs.readFileSync("./JSON/prefix.json", "utf8"));
    
      const lang = JSON.parse(fs.readFileSync("./JSON/lang.json", "utf8"));
    
      const ranks = JSON.parse(fs.readFileSync("./JSON/ranks.json", "utf8"));
      if (!ranks[message.author.id]) {
        ranks[message.author.id] = {
          rank: "user"
        };
      }
        const prefix = prxjso[message.guild.id]
      if(!prefix) {
        prxjso[message.guild.id] = {
          prefix: "/"
        }
      }
    
      if (ranks[message.author.id].rank == "sup") {
          const args = message.content
            .slice(prefix.prefix.length)
            .trim()
            .split(+/g /);
          const glo = JSON.parse(fs.readFileSync("./JSON/global_ger.json", "utf8"));
          const glo2 = glo[message.guild.id];
          if (!glo2) return;
          if (message.channel.id === glo2.globalchat) {
            try {
              const embed_ger = new Discord.MessageEmbed();
              embed_ger.setColor("RED");
              embed_ger.setTitle("Supporter: " + message.author.username);
              embed_ger.addField("Nachricht:", message.content);
              embed_ger.setFooter(
                "ID:" + message.author.id + "\nServer: " + message.guild.name
              );
              message.delete();
              client.guilds.cache.forEach(g => {
                try {
                  client.channels.cache.get(glo[g.id].globalchat).send(embed_ger);
                } catch (e) {
                  return;
                }
              });
            } catch (e) {
              return;
          }
        }
      }
    });
