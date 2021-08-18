import express from "express";
import mongoose from "mongoose";
import Member from "./Members.js";
import router from "./router.js";

const LOGIN_DB = "user";
const PASSWORD_DB = "user";

const port = 5000;
const DATA_BASE = `mongodb+srv://${LOGIN_DB}:${PASSWORD_DB}@cluster0.jh2qs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use("/api", router);

// app.post('/', async (req, res)=> {
//     const { member, title, income, photo } = req.body;
//     const data = await Member.create({member, title, income, photo})
//     res.json(data)
// })

async function startApp() {
  try {
    await mongoose.connect(DATA_BASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

startApp();
