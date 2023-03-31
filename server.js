const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://koushik6692:Koushik5122@cluster0.3cdnlai.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB cONNECTED"))
  .catch((e) => console.log(e));

app.use(express.json());

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("KOUSHIK ");
});

app.post("/register", async (req, res) => {
  const { username, password, cpassword } = req.body;
  user = await User.create({ username, password, cpassword });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const exist = await User.findOne({ username });
  if (exist) console.log("User EXist");
  else console.log("INVALID USERNAME OR PASSWORD");
  if (password == exist.password) console.log("LOgin SuccessFul");
});

app.listen(8000, () => console.log("PORT IS RUNNING ON http://localhost:8000"));
