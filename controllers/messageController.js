const db = require("../db/queries"); 
const { links } = require("../utils/variables");

async function getAllMessages(req, res) {
        const messages = await db.getAllMessages();
        console.log(messages);
        return messages;  

}

module.exports = { getAllMessages };
