import { Request, Response } from "express";
import { GetPlaceByAccessDateUseCase } from "./GetPlaceByAccessDateUseCase";

export class GetPlaceByAccessDateController {
    async handle(req: Request, res: Response){

        const getPlaceByAccessDateUseCase = new GetPlaceByAccessDateUseCase();

        const result = await getPlaceByAccessDateUseCase.execute();
        return res.status(201).json(result);
    }
}