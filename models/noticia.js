const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  autor: { type: String },
  titulo: { type: String },
  descricao: { type: String },
  data_publicacao: { type: String },
  conteudo: { type: String }

})

const Noticia = mongoose.model("Tests", NoticiaSchema);
module.exports = Noticia;