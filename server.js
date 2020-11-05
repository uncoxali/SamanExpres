const express = require('express');
const serverStatic = require('server-static')
const path = require('path')

const app = express();

app.use('/', serverStatic(path.join(__dirname, '/dist/index.html')))

const port = process.env.PORT || 8080

app.listen(port)
console.log('listening on port ', +port);