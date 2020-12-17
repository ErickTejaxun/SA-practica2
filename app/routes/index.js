var express = require('express');
var router = express.Router();

//5170336204

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Software avanzado Diciembre 2020' });
});

router.get('/error', function(req, res, next)
{
  res.send('Error page');
});

module.exports = router;
