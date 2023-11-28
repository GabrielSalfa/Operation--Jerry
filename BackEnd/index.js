import express from 'express'

const app = express();
const port = 3001;


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const startServer = () => {
  app.listen(port, () => {
    console.log(`Currently Runing`)
  })
}

startServer()