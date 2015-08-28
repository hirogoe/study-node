var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('step3', { step: 'step3' });
});

module.exports = router;
