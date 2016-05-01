/**
 * Environment variables
*/
var PORT = process.env.PORT || 8080;

/**
 * Initialize express
 */
var express = require('express');
var app = express();

require('./middleware.js')(app, express);
require('./routes.js')(app, express);
console.log('Server listening on port: ' + PORT);
app.listen(PORT);
