import { Request, Response } from "express";

export const sigup = (req:Request, res:Response) => {
  res.send("Register");
};

export const login = (req:Request, res:Response) => {
  res.send("Login");
};

export const logout = (req:Request, res:Response) => {
  res.send("Logout");
};
