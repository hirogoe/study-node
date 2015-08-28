var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('step2', { step: 'step2' });
});

module.exports = router;
