import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();
import postRoutes from './routes/posts.js';

const CONNECTION_URL = 'mongodb+srv://user:Diogo123@cluster0.qamnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use(express.json());
app.use("/posts", postRoutes);

app.get('/', (req,res)=>{
  res.send('Bem-vindo a esta API');
});

mongoose
  .connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Conectada com sucesso!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 42080, () => {
  console.log("Servidor a correr!");
});
