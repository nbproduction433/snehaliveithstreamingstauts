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
    .setDetails('Genshin Impact')//تحط اي اسم تبيه يظهر بالحاله
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1107569693373509715/1217851430300553227/ffbab8235ddc5c0290ecd6ceccc0a61a.png?ex=66058787&is=65f31287&hm=37b982b132ecde35987cac720f189c81d780fa1424c0e13acccd1c464f45badf&') //رابط الصوره الكبيره.

    .setAssetsLargeText('action role-playing') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/1215160805755199499/61936d0689708cc7192d5518061ba26b.webp?size=2048') //رابط الصوره الصغيره.
    .setAssetsSmallText('Diaz') //Text when you hover the Small image
    .addButton('Talk With Me 🌸','https://discord.gg/zrQnUCuX')//تقدر تحط رابط سيرفر ديسكورد او اي رابط
    .addButton('Invite me 🌸','https://shorturl.at/sKZ57');//تقدر تحط رابط سيرفر ديسكورد او اي رابط

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = ['MTIxNTE2MDgwNTc1NTE5OTQ5OQ.GrkkIa.9-kQLx9Tek9XRr_78ct84YQdmFbNFoFMYbBAp4'];
client.login('MTIxNTE2MDgwNTc1NTE5OTQ5OQ.GrkkIa.9-kQLx9Tek9XRr_78ct84YQdmFbNFoFMYbBAp4');
