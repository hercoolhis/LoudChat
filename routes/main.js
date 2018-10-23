const router = require('express').Router();
const async = require('async');


router.get('/', (req, res, next) => {
  if (req.user) { 
     res.render('main/home');
     
  } else {
    res.render('main/landing');
  }


});

module.exports = router;
