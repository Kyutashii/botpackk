module.exports.config = {
  name: "uid",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Mirai Team",
  description: "Get the user's Facebook UID.",
  usePrefix: true,
  commandCategory: "other",
  cooldowns: 5
};

module.exports.run = function ({ api, event }) {
  if (Object.keys(event.mentions).length === 0) {
    if (event.messageReply) {
      const senderID = event.messageReply.senderID;
      return api.sendMessage(senderID, event.threadID);
    } else {
      return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
    }
  } else {
    for (const mentionID in event.mentions) {
      const mentionName = event.mentions[mentionID];
      api.sendMessage(`𝗛𝗠𝗠 𝗬𝗢𝗨𝗥 𝗨𝗜𝗗? 🤔\n\n${mentionName.replace('@', '')}: ${mentionID}`, event.threadID);
    }
  }
};
