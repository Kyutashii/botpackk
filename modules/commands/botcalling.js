const fs = require("fs");
module.exports.config = {
	name: "Botcall",
  version: "1.0.0",
	hasPermssion: 1,
	credits: "Zephyrus Frost", 
	description: "no prefix",
	commandCategory: "ADMIN ONLY",
	usages: "Yo Yo",
    cooldowns: 0, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("KYLESBOT")==0 || event.body.indexOf("Kylesbot")==0 || event.body.indexOf("kylesbot")==0 || event.body.indexOf("kyiesha")==0 || event.body.indexOf("yanzu")==0 || event.body.indexOf("Yanzu")==0 || event.body.indexOf("robot")==0 || event.body.indexOf("ROBOT")==0 || event.body.indexOf("Bot")==0 || event.body.indexOf("bot")==0 || event.body.indexOf("BOT")==0 ) { 
		var msg = {
				body: "Bakit po  master kung pogi?",
				attachment: fs.createReadStream(__dirname + `/noprefix/bot_calling.gift`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙇‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }