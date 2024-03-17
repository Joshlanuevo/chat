const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});