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
    .setState('Playing')//تحط اي اسم تبيه يظهر بالحاله
    .setName('♪ I get knocked down, but I get up again! You are never gonna keep me down! ♫')//تحط اي اسم تبيه يظهر بالحاله
    .setDetails('Valorant')//تحط اي اسم تبيه يظهر بالحاله
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://i.pinimg.com/originals/b7/cf/62/b7cf62846ae6ae5e96b35cf9d5e05a7c.png') //رابط الصوره الكبيره.

    .setAssetsLargeText('Playing') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/920938695060774922/a_4c03dee80d0e42e23664cb1d4add4e04.gif?size=2048') //رابط الصوره الصغيره.
    .setAssetsSmallText('Maharani#xoxo') //Text when you hover the Small image
    .addButton('➕Add App','https://shorturl.at/svH37')//تقدر تحط رابط سيرفر ديسكورد او اي رابط
    .addButton('🔗Join Now','https://discord.gg/UwTJGG5jNc ');//تقدر تحط رابط سيرفر ديسكورد او اي رابط

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = ['OTIwOTM4Njk1MDYwNzc0OTIy.G5-7ds.4zy_mvuMKRQULGl_TBAMhUdk9kMynW6BaCn4mI'];
client.login('OTIwOTM4Njk1MDYwNzc0OTIy.G5-7ds.4zy_mvuMKRQULGl_TBAMhUdk9kMynW6BaCn4mI');
