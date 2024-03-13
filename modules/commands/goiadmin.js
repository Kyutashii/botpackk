module.exports.config = {
  name: "goiadmin",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Jasper",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100052395031835") {
    var aid = ["61554255335359"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tinatag mo master ko ano kaylangan mo ha? ", "kaylangan mo sa master ko? ", "sinasabi ko sayo iba ako magalit bat moba tinatag mo admin ko","hala sorry idolo wala pa si Kyle ih"," lods pinapsabi ni Kyle wag modaw sya meniment kasi busy sa pag jajackol","busy si master Kyle bat mo sya hinahanap?miss mo?"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}