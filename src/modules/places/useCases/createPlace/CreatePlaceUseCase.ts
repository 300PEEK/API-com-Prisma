import { CreatePlaceDTO } from './../../dtos/CreatePlaceDTO';
import { AppError } from './../../../../errors/appError';
import { Place, PrismaClient } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
export class CreatePlaceUseCase {
    async execute({name, access_date}: CreatePlaceDTO): Promise<Place> {

        const placeAlreadyExists = await prisma.place.findUnique({
            where: {
                name,
            }
        });

        if(placeAlreadyExists) {
            throw new AppError("Place already exists!");
        }

        const place = await prisma.place.create({
            data: {
                name,
                access_date,
            }
        });

        return place;
   }
}