const { Router } = require('express');
const indexRouter = Router();
const pool = require('../db/pool');
const { links } = require('../utils/variables');


indexRouter.get("/", async (req, res) => {
    const result = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    res.render('index', { messages: result.rows, links: links });
});


module.exports = indexRouter;