const db = require("../db/queries");

async function getAllLinks() {
    res.render("variables", { links: links });
}












module.exports = {
    getAllLinks
  };