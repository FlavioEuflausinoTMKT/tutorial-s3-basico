import express  from "express";
import {uploadArchive} from '../scripts/upload.js';
import {downloadArchive} from '../scripts/download.js';
import {deleteArchive} from '../scripts/delete.js';


const PORT = process.env.PORT || 3001;

const app = express();


app.post("/api/upload", async (req, res) => {
  const path = req.query.path;
  const nome = req.query.nome;
  const retorno = await uploadArchive(path,nome)
  console.log('response: ', retorno);
  res.json(retorno);
});

app.get("/api/download", async (req,res) => {

  const file = req.query.file;
  const retorno = await downloadArchive(file)
  console.log('response: ', retorno);
  res.json('Arquivo salvo em downloads/photo.jpg');
});

app.post("/api/delete", async (req,res) => {

  const file = req.query.file;
  const retorno = await deleteArchive(file)
  console.log('response: ', retorno);
  res.json(retorno);
  

});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});