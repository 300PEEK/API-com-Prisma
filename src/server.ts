import { AppError } from './errors/appError';
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) =>{
   if (err instanceof AppError){
    return response.status(err.statusCode).json({
        status:"error",
        message: err.message
    });
   } 
//quando eu tento criar um usuário já registrado(Email), está dando esse erro 500 que era pra ser dado em outra circunstancia adversa, não entendi o porque:/
   return response.status(500).json({
    status:"error",
    message: "User Already Exists"
   });
}
);

app.listen(3000, () => console.log("Server is running in port 3000..."));