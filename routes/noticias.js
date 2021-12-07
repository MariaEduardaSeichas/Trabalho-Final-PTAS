var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var noticias = await Noticia.find();
  res.json(noticias);
});

router.get('/visualizar', async function (req, res, next){
  visualizar = await Noticia.findById(req.query.id);
  res.json(visualizar);
});

router.get('/contador', async function (req, res, next){
  quantidade = await Noticia.find().count();
  res.json({quantidade:quantidade});
});

module.exports = router;