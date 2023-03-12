const express = require ('express');
const app = express();
const {createConnectionPool} = require('./dbService');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));


const router = require('./index');
app.use("/", router);
app.use(express.static(__dirname + '/src'));

createConnectionPool();
app.listen(3000);