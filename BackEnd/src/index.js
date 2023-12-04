const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const employRoutes = require("./TemporaryRoutesBack/employs");
const insuredRoutes = require("./TemporaryRoutesBack/insured");
const accidentRoutes = require("./TemporaryRoutesBack/accidents");
const gruasRoutes = require("./TemporaryRoutesBack/gruas");
const presupRepRoutes = require("./TemporaryRoutesBack/presupuestoRep");
const reportsRoutes = require("./TemporaryRoutesBack/report");
/* Ejecutamos express */
const app = express();
const port = process.env.Port || 9000;

/* midleware */
app.use(express.json());
app.use('/api', employRoutes);
app.use('/api', insuredRoutes);
app.use('/api', accidentRoutes);
app.use('/api', gruasRoutes);
app.use('/api', presupRepRoutes);
app.use('/api', reportsRoutes);


/*Connection with mondongoDB */
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.log(error));



/* Escucha en una puerta especifica */
app.listen(9000, () => console.log('server listening on port', port));