const { Router } = require('express');
const indexRouter = Router();
const messageController = require("../controllers/messageController");
const links = require("../utils/variables");

indexRouter.get("/", async (req, res) => {
    const messages = await messageController.getAllMessages();
    res.render('index', {
        links, 
        messages
    });
});



module.exports = indexRouter;