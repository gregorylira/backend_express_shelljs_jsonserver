import express from "express";
import cors from "cors";
import jsonServer from "json-server";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use("/api", jsonServer.router("db.json"));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
