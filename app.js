const express = require("express");
const cors = require("cors");
require("./config/db");

const userRouter = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routing
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

// route not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found"
    })
});

// handling server error
app.use((error, req, res, next) => {
    res.status(500).json({
        message: "something broke"
    })
})

module.exports = app;