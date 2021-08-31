import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import fileLoad from "express-fileupload";
import router from "./router.js";

const LOGIN_DB = "user";
const PASSWORD_DB = "user";

const port = 5000;
const DATA_BASE = `mongodb+srv://${LOGIN_DB}:${PASSWORD_DB}@cluster0.jh2qs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(fileLoad({}));
app.use(cors());
app.use("/api", router);

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
