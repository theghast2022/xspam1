const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "M1";

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});


client.on('ready', async() => {
var server = "508255957629796372"; // ايدي السررفر
var channel = "508255957629796374";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login('NTA3OTE2MjIyOTAyMzA0Nzc4.Dr8mwA.GLjv7n29VHP-vzYEnqKE-EgOK2Y');
