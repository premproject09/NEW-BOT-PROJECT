const fs = require("fs");
const request = require("request");
module.exports.config = {
  name: "autoreact",
  version: "1.0.0", 
  hasPermssion: 1,
  credits: "MR CHAND",
  description: "...",
  commandCategory: "...", 
  usages: "", 
  cooldowns: 0,
  dependencies: [] 
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body ? event.body.toLowerCase() : '';
if (haha.includes(" ") || haha.includes("")){
const dipto = ['😆','🐸','🙃','😈','🤖','🙄','🐣','🍎','🐰','🦟','🧐','😐','🙂','🤐','♥️','😘','😻','😍','😸','💦','🤨','😭','😁','😜','🤫','😶','🥱','😤','🥵','😇','💋','🙈','🙀','🦵','💛','🖤','🤎','💙','💜','🦶','🙆','😏','🌸','🏵️','🍁','🌼','🔥','🐍','👄','✈️','🦛','🦐','🐇','🐮','🐰','🦃','🫦','🦋','🍒','🍓','🐼','🍊','🫤','🍍','🍌','🌚','🥥','🐛','🥕','😳','👻','😾','🧀','😒','🥹','☠️','👊','😴','😦','😷','🫣','🫂','🤕','😵','🫢','🤭','😔','💩','💣','👀','🌝','🍼','🐤','😋','😻','😕','🙀']

const r = dipto[Math.floor(Math.random() * dipto.length)];
return api.setMessageReaction(r, event.messageID, (err) => {}, true)
}
    };
module.exports.run = function (){}
