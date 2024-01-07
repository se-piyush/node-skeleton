// src/app.ts

import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import userRoutes from "./route/users.route";
import "./config/passport.config";
import BaseError from "./error";

const app = express();
const PORT = parseInt(process.env.PORT || "3000");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/users", userRoutes);

app.use((err: BaseError, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.message);
  return res.status(err.httpCode).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
