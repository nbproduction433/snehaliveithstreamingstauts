const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});










const keepAlive = require('./server.js');
keepAlive();



client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1204154123025387573')//
    .setType('STREAMING')//
    .setURL('https://www.youtube.com/') //
    .setState('an open-world')//تحط اي اسم تبيه يظهر بالحاله
    .setName('I fail in your love')//تحط اي اسم تبيه يظهر بالحاله
    .setDetails('Hey there!')//تحط اي اسم تبيه يظهر بالحاله
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/avatars/1215160805755199499/61936d0689708cc7192d5518061ba26b.webp?size=2048') //رابط الصوره الكبيره.

    .setAssetsLargeText('action role-playing') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/651095740390834176/7ac317a9c2fc3540d9dd7d8536cdc749.webp?size=2048') //رابط الصوره الصغيره.
    .setAssetsSmallText('Diaz') //Text when you hover the Small image
    .addButton('Talk With Me 🌸','https://discord.gg/zrQnUCuX')//تقدر تحط رابط سيرفر ديسكورد او اي رابط
    .addButton('Invite me 🌸','https://shorturl.at/sKZ57');//تقدر تحط رابط سيرفر ديسكورد او اي رابط

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = ['OTIwOTM4Njk1MDYwNzc0OTIy.G-2Gfs.UWBvr9RuTMpqv0MeYvk9gM0iAg3QcORpjfTGjY'];
client.login('OTIwOTM4Njk1MDYwNzc0OTIy.G-2Gfs.UWBvr9RuTMpqv0MeYvk9gM0iAg3QcORpjfTGjY');
