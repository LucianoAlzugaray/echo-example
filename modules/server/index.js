const config = require('~modules/config');
const express = require('express');
const http = require('http');

const bodyParser = require('body-parser');
const logger = require('morgan');

const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

app.use(helmet())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(logger('dev'));

module.exports = {
    router: app,
    startServer: () => {
        server.listen(config.server.port, () => console.log(`Server running at port ${config.server.port}`));    
    }
}