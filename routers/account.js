"use strict";

var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res) {
  var name = req.params.name;
  res.json({ "name": name });
});

module.exports = router;