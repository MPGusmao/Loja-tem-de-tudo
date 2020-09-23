const express = require('express');
const logger = require('./logger')();
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const config = require('./config')();

// routes
// const template = require('./template');

// db2 middleware
const db2Middleware = require('./database/db2.middleware');
const db2Schemas = require('./database/db2.schemas');

//API resources
const produto = require('./produto');
const cliente = require('./cliente');
const vendedor = require('./vendedor');
const venda = require('./venda')



module.exports = (app, dirname) => {
    const { Router } = express;
    const api = Router();
    const port = process.env.PORT || 3000;

    const db2 = db2Middleware(config.db2);
    const db2SchemaNames = db2Schemas(config);

    //read JSON
    app.use(bodyParser.json())

    app.use('/api', api);

    api.use(db2.close, db2.open);
    api.use(db2SchemaNames.set);

    //Endpoints
    api.use('/produto', produto(Router));
    api.use('/cliente', cliente(Router));
    api.use('/vendedor', vendedor(Router));
    api.use('/venda', venda(Router));




    // Serve static files
    app.use('/', express.static(path.join(dirname, 'client', 'dist')));


    // server init
    app.listen(port, () => logger.info(`Server running at ${port}`));
};
