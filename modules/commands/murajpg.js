const fs = require("fs");
module.exports.config = {
	name: "mura",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "kyle", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pota")==0 || (event.body.indexOf("POTA")==0 || 
(event.body.indexOf("INAMO")==0 ||
(event.body.indexOf("inamo")==0 ||
(event.body.indexOf("GAGU")==0 ||
(event.body.indexOf("gagu")==0 ||
(event.body.indexOf("GAGO")==0 ||
(event.body.indexOf("gago")==0 ||
(event.body.indexOf("TANGINAMO")==0 ||
(event.body.indexOf("tanginamo")==0 ||
(event.body.indexOf("TANGINA")==0 ||
(event.body.indexOf("tangina")==0 ||
(event.body.indexOf("BOBO")==0 ||
 (event.body.indexOf("bobo")==0)))) {
		var msg = {
				body: "ang sama mo idol di kana madadala sa langit😡"
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
