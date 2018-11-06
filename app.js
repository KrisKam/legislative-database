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

app.get("/bills", (req, res, next) => {
  queries.getBillsPageInfo()
    .then(data => res.json(data))
})

app.get("/bills/:bill", (req, res, next) => {
  queries.getBillInfo(req.params.bill)
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

app.get("/votes/:bill", (req, res, next) => {
  queries.getVoteInfo(req.params.bill)
    .then(data => res.json(data))
})

app.get("/votes/:id/:bill", (req, res, next) => {
  queries.getLegislatorVote(req.params.id, req.params.bill)
  .then(data => res.json(data))
})

app.get("/comments", (request, response) => {
  queries.allComments()
    .then(data => response.json(data))
});

app.post("/comments", (request, response) => {
  queries.createComment(request.body)
    .then(newData => response.status(201).json(newData));
});

app.put("/comments/:id", (request, response) => {
  queries.updateComment(request.params.id, request.body)
    .then(data => response.status(200).json(data))

})

app.delete("/comments/:id", (request, response) => {
  queries.deleteComment(request.params.id)
    .then(data => response.status(204).json(data))
});

app.listen(port, () => (`Listening on port ${port}`));