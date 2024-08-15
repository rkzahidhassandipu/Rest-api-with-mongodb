const mongoose = require("mongoose");
const config = require("./config");

const DB_URL = config.db.url;

mongoose.connect(DB_URL)
.then(() => {
    console.log('mongodb atlas is connected')
})
.catch((error) => {
    console.log(error);
    process.exit(1)
})