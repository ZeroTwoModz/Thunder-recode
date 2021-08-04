const fs = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Events");
table.setHeading("Events", "Load status");
const allevents = [];
module.exports = async (client) => {
  try{
    const load_dir = (dir) => {
      const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event_files){
        const event = require(`../events/${dir}/${file}`)
        let eventName = file.split(".")[0];
        allevents.push(eventName);
        client.on(eventName, event.bind(null, client));
      }
    }
    await ["client", "guild"].forEach(e=>load_dir(e));
    for (let i = 0; i < allevents.length; i++) {
        try {
            table.addRow(allevents[i], "Ready");
        } catch (e) {
            console.log(String(e.stack).red);
        }
    }
    console.log(table.toString().cyan);
    try{
      }catch{ /* */ }
console.log("passed events.js 1")
    try{
console.log("passed events.js 2")
      }catch{ /* */ }
  }catch (e){

  }
};
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/
