module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "/admin",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/xp7bxaH.jpeg",
"https://i.imgur.com/HYs02Cd.jpeg"];
  
var callback = () => api.sendMessage({body:`DO NOT TRUST THE BOT OPERATOR
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐌𝐝 𝐉𝐮𝐛𝐚𝐞𝐝 𝐀𝐡𝐦𝐞𝐝 𝐉𝐨𝐲 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐉𝐨𝐲 𝐀𝐡𝐦𝐞𝐝 
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐒𝐚𝐫𝐢𝐬𝐡𝐚𝐛𝐚𝐫𝐢, 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫, 𝐌𝐲𝐦𝐞𝐧𝐬𝐢𝐧𝐠𝐡 
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 16+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : 𝐣𝐨𝐲𝐚𝐡𝐦𝐞𝐝𝐭𝐭@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801709045888
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/JOY_AHMED_88
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100000121528628
 https://www.facebook.com/pinikjoy4200
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
