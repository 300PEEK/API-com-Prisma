import { CreateRequestAccessUseCase } from './CreateRequestAccessUseCase';
import { Request, Response } from "express";

export class CreateRequestAccessController {
    async handle(req: Request, res: Response){
        const { placeId, userId } = req.body;

        const createRequestAccessUseCase = new CreateRequestAccessUseCase();

        await createRequestAccessUseCase.execute({ placeId, userId });
        return res.status(201).send();
    }
}