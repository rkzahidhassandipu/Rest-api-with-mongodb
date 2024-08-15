const { url } = require("inspector");

require("dotenv").config();

const dev = {
    app: {
        port: process.env.PORT || 4000
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost:2701/userDemoDb"
    }
}

module.exports = dev;