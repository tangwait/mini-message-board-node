const { Router } = require('express');
const indexRouter = Router();
const messageController = require("../controllers/messageController");
const links = require("../utils/variables");

indexRouter.get("/", (req, res) => {
    res.render('index', {
        links
    });
});

indexRouter.get("/messages", messageController.getAllMessages);


module.exports = indexRouter;