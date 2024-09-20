const { Router } = require('express');
const indexRouter = Router();
const { links } = require('../utils/variables');


indexRouter.get("/", (req, res) => {
    res.render('index', { links: links });
});



module.exports = indexRouter;