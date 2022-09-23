import { AppError } from './../../../../errors/appError';
import { prisma } from '../../../../prisma/client';
import { CreateRequestAccessDTO } from './../../dtos/CreateRequestAccessDTO';
export class CreateRequestAccessUseCase{
    async execute({placeId, userId }: CreateRequestAccessDTO): Promise<void> {
        //verificar se o local existe
        const placeExists = await prisma.place.findUnique({
            where: {
                id : placeId
            }
        });
            if(!placeExists){
                throw new AppError('Place does not exists!')
            }
        //verificar se o local está cheio
        //const placeAlreadyFull = await prisma.requestAccess.(findMany)?

        //verificar se o usuário existe
        const userExits = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if(!userExits){
            throw new AppError('User does not exits!');
        }
        
        //criar locacao
        await prisma.requestAccess.create({
            data: {
                placeId,
                userId
            }
        });
    }
}