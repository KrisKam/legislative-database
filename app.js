const express = require("express");
const app = express();
const port = process.env.PORT || 5555
const cors = require("cors");
const bodyParser = require("body-parser");
const queries = require("./queries");
const morgan = require("morgan");


app.use(bodyParser.json());
app.use(cors());
app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));

app.get("/", (req, res, next) => {
  res.send("This is a test");
})

app.get("/bills", (req, res, next) => {
  queries.getBillsPageInfo()
    .then(data => res.json(data))
})

app.get("/bills/:id", (req, res, next) => {
  queries.getBillInfo(req.params.id)
    .then(data => res.json(data))
})

app.get("/legislators", (req, res, next) => {
  queries.getLegislators()
    .then(data => res.json(data))
})

app.get("/legislators/:id", (req, res, next) => {
  queries.getLegislator(req.params.id)
    .then(data => res.json(data))
})

app.get("/vote/:id", (req, res, next) => {
  queries.getVoteInfo(req.params.id)
    .then(data => res.json(data))
})

app.listen(port, () => (`Listening on port ${port}`));