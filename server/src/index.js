const app = require('express')();
const routes = require('./routes');
const expressConfig = require("./config/expressConfig");
const dbConfig = require("./config/dbConfig");

expressConfig(app);
dbConfig()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log('DB error!'))

app.use(routes);


app.listen(3000, ()=> console.log('Server is listening on port 3000'))