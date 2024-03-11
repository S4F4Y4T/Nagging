const fs = require('fs');
const path = require('path')


// const clientDir = path.join(__dirname, 'client')

function reqResHandler(req, res){
    // res.sendFile(__dirname + '/../client/index.html');
    res.send('hello')
    // res.sendFile();

}
module.exports = reqResHandler