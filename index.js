import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from the Express Web Server");
});

app.listen(3000);
