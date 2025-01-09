import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`⚙️  Server is running at port : ${port}`);
});
