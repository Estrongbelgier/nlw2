import express from "express";

const app = express();
app.use(express.json());

app.get("/user", (req, res) => {
  return res.json("olá mundo");
});

app.listen(3333);
