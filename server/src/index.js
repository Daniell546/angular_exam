const app = require('express')();
require('dotenv').config()
const cors = require('cors');

const routes = require('./routes');
const expressConfig = require("./config/expressConfig");
const dbConfig = require("./config/dbConfig");
const config = require('./config/config');

expressConfig(app);
app.use(cors({
    origin: config.origin,
    credentials: true
  }));
dbConfig()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log('DB error! ', err.message))

app.use(routes);


app.listen(config.port, console.log(`Listening on port ${config.port}!`));
