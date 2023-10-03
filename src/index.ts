import express from "express";
import routes from "./routes";
import "reflect-metadata";
import { dataSource } from "./database/data-source";

const app = express();

app.use(express.json());
app.use(routes)

dataSource.initialize().then(async () => {
  console.log("☑️ Connected success with database!")
  app.listen(3333, () => {
    console.log("🔥 Server on!")
  })

})
