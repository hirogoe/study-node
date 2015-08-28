var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('step1', { step: 'step1' });
});

module.exports = router;
