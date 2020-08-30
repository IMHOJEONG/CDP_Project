var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send({
        greeting: 'Hello React & Node'
    });
});

module.exports = router;