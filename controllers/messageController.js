const db = require("../db/queries"); 
const { links } = require("../utils/variables");

async function getAllMessages(req, res) {
    try {
        const messages = await db.getAllMessages(); 
        res.render("index", { links, messages });  
    } catch (err) {
        console.error("Error fetching messages:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { getAllMessages };
