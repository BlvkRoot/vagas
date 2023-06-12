import "reflect-metadata";
import { userRoutes } from "./routes/userRoutes";
import express from "express";
const app = express();

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use(userRoutes);

export { app };
