const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tanksRouter = require("./tanks/router");

const PORT = process.env.PORT || 4000;

const app = express();
const corsMiddleware = cors();
const jsonParser = bodyParser.json();

app.use(corsMiddleware);
app.use(jsonParser);
app.use(tanksRouter);

app.get('/', (req, res) => res.send('Welcome to Tanks API'));
app.listen(PORT, () => console.log(`Example App listening on port ${PORT}`));