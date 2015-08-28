var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('step4', { step: 'step4' });
});

module.exports = router;
