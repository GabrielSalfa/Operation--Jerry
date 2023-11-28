const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const employRoutes = require("./TemporaryRoutesBack/employs");
/* Ejecutamos express */
const app = express();
const port = process.env.Port || 9000;

/* midleware */
app.use(express.json());
app.use('/api', employRoutes);


/*Connection with mondongoDB */
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.log(error));



/* Escucha en una puerta especifica */
app.listen(9000, () => console.log('server listening on port', port));