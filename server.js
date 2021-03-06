const express = require("express");
const app = express();
const db = require("./api/database/database");
const md5 = require("md5")

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const HTTP_PORT = 4200;

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});

routes();

app.use((req, res) => res.status(404).json({ "Error": "Page not founded" }));

function routes() {
    const userRoute = require('./api/routes/user-route');
    const productRoute = require('./api/routes/product-route');
    const categoryRoute = require('./api/routes/category-route');

    userRoute(app);
    productRoute(app);
    categoryRoute(app);
}
