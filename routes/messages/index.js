var express = require('express');
var router = express.Router( {mergeParams: true} );
const checkAuth = require("../../middleware/check-auth");
 
let get = require('./get');
let post = require('./post');

//post requests 
router.get('/', checkAuth, get.fetchMessages); 
router.get('/all', checkAuth, get.fetchAllMessages);
router.post('/', checkAuth, post.createMessage); 

module.exports = router;
