const { Router } = require('express');
const newRouter = Router();
const { links, messages } = require('../utils/variables');


newRouter.get("/", (req, res) => {
    res.render('new', { links: links });
});

newRouter.post('/', (req, res) => {
    const { user, message } = req.body;

    messages.push({
        text: message,
        user: user,
        added: new Date()
    });
    res.redirect('/')
});

module.exports = newRouter;