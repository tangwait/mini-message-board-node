const express = require("express");
const path = require("path");
const app = express();

const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});