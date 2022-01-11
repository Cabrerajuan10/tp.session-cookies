var express = require('express');
var router = express.Router();

const {home,procesarRegistro,user,reset} = require('../controllers/indexController');
const registerValidator = require('../validations/registerValidator');


/* GET home page. */
router
.get('/', home)
.post('/',registerValidator,procesarRegistro)
.get('/user',user)
.get('/user/reset',reset)

module.exports = router;
