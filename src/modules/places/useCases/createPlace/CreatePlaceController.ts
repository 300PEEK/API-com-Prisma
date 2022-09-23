import { Request, Response } from "express";
import { CreatePlaceUseCase } from './CreatePlaceUseCase';

export class CreatePlaceController {
    async handle(req: Request, res: Response){
        const { name, access_date} = req.body;

        const createPlaceUseCase = new CreatePlaceUseCase();

        const result = await createPlaceUseCase.execute({ name, access_date});
        return res.status(201).json(result);
    }
}