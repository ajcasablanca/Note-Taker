const path = require('path');
const router = require('express').Router();

//routing 
//module.exports = (app) => {
    //Get /notes returns notes.html file
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //Get * returns index.html file
    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
//};
module.exports = router;