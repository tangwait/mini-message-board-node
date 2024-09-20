const { Router } = require('express');
const newRouter = Router();
const { links, messages } = require('../utils/variables');


newRouter.get("/", (req, res) => {
    res.render('new', { links: links, messages: messages });
});



module.exports = newRouter;