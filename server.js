// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//express configuration - tells node that we are creating an express server
const app = express();
//sets initial port
const port = process.env.PORT || 3001;

//middleware for parsing JSON and urlencoded from incoming data 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//starts the server to begin listenig
app.listen(port, () => {
    console.log(`API server now on port: ${port}!`);
});