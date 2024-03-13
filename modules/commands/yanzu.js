const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Kazuro",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Jasper Wu",
  description: "noprefix",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["bakit boss", "ano yun boss", "tara jakol", "lovey, missyou", "Love you", "ano nanamn ba", "missmonabako", "Bakit boss ?", "ano yon?boss", "missyou", "pm,may sasabihin ako" ,"suntukan inamo" ,"kiss moko gago", "bot ngako para kang gago.", "oo na bot nako putanginamo namn", "nag jajakol pako", ""];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("️ Good Night, wifey", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage(` Good morning ${name} `, threadID);
   };

  
   if ((event.body.toLowerCase() == "may bot") || (event.body.toLowerCase() == "May bot")) {
     return api.sendMessage("Tanga kaba?", threadID);
   };
  
   if ((event.body.toLowerCase() == "Angas") || (event.body.toLowerCase() == "angas")) {
     return api.sendMessage("Uwu ako lang to idol", threadID);
   };
if ((event.body.toLowerCase() == "pogi") || (event.body.toLowerCase() == "Pogi")) {
     return api.sendMessage("pag pogi usapan si master Kyle na yan, pogi nun e lalo na pagnakita mo sa personal apaka aesthetic talaga..marami pang babae nagkakagusto sa kanya crush din sya ng bayan😉", threadID);
   };
  
   if ((event.body.toLowerCase() == "HAHAHA") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("PM, mas sasaya ka lalo", threadID);
   };

if ((event.body.toLowerCase() == "Kyle") || (event.body.toLowerCase() == "kyle")) {
     return api.sendMessage("Bakit mo hinahanap pogi kung master ha? kaylangan mo sa kanya?", threadID);
   };
  
   if ((event.body.toLowerCase() == "loveyou") || (event.body.toLowerCase() == "Loveyou")) {
     return api.sendMessage("Loveyoumore", threadID);
   };

  
   if ((event.body.toLowerCase() == "brb") || (event.body.toLowerCase() == "Brb")) {
     return api.sendMessage(`Tyt,loveu ${name}`, threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Kazuro") == 0 || (event.body.indexOf("kazuro") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }