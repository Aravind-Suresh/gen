var express = require('express');
var path = require('path');
var qs = require('qs');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(global.cwd, 'public/uber.html'));
});

router.post('/deeplink', function(req, res) {
  var s = "uber://?" + qs.stringify(req.body);
  // action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&dropoff[latitude]=37.802374&dropoff[longitude]=-122.40581&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d"
  // res.redirect(s);
  res.status(200).send(decodeURIComponent(s));
});

module.exports = router;
