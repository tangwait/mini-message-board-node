const db = require("../db/queries");
const { links } = require("../utils/variables");

async function getAllLinks() {
    res.render("variables", { links: links });
}

async function getAllMessages(req, res) {
    const { messages } = await db.getAllMessages();
    res.render("index", { messages: messages, links: links});
}










module.exports = {
    getAllLinks,
    getAllMessages
  };