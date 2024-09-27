const { Router } = require('express');
const indexRouter = Router();
const { links, messages } = require('../utils/variables');


indexRouter.get("/", (req, res) => {
    res.render('index', { links: links, messages: messages });
});


module.exports = indexRouter;