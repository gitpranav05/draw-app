import { JWT_SECRET } from "@repo/backend-common/imp";

import {
  CreateUserSchema,
  SignInSchema,
  CreateRoomSchema,
} from "@repo/common/types";

import express from "express";

import { auth } from "./auth";

import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect input",
    });
    return;
  }
  res.json({
    id: "123",
  });
});

app.post("/signin", (req, res) => {
  const data = SignInSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }

  const id = 1;
  const token = jwt.sign(
    {
      id,
    },
    JWT_SECRET,
  );

  res.json({
    token,
  });
});

app.post("/create-room",auth,  (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  res.json({
    roomId: 123,
  });
});

app.listen(3001);
