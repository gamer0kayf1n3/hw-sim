const client = require('discord-rich-presence')('1042406355866222643');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const express = require('express');
const app = express();

app.post('/', urlencodedParser, function(req, res) {
    console.log(req.body)
    client.updatePresence({
        details: 'Doing homework',
        state: req.body.state,
        //startTimestamp: Date.now(),
        //endTimestamp: Date.now() + 1337,
        largeImageKey: 'clip',
        //smallImageKey: 'clip',
        instance: true,
    });
    res.sendStatus(200);
})

app.listen(80, function() {
    console.log("server started");
})