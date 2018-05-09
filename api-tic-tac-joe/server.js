const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = process.env.PORT || 8000;
const cors = require('cors')
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,"public")));

// require('./config/session.js')(app);



var routes_setter = require('./config/routes.js');
routes_setter(app);



app.listen(port, function() {
  console.log('Listening on', port);
});
