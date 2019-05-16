var express = require('express');
var router = express.Router();
var config = require('../bin/config');
var queries = require('../models/queries')

router.use('/', function(req, res, next) {

  var courseID = parseInt(req.session.course_id)
  var userID = parseInt(req.session.user_id)

  console.log('Course and User IDs')

  console.log(courseID)
  console.log(userID)

  if (req.session.admin){
    queries.badgesAdminQuery(courseID, function(badges){
      res.render('badges', {
        title: 'Badges | CONEX',
        badges: badges,
      });
    });
  }else{
    queries.badgesQuery(userID, courseID, function(badges){
      res.render('badges', {
        title: 'Badges | CONEX',
        badges: badges,
      });
    });
    console.log(queries);
  }
});

module.exports = router;
