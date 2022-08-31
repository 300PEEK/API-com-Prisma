import { AppError } from './../../../../errors/appError';
import { PrismaClient } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';
export class CreateUserUseCase {
    async execute({name, email}: CreateUserDTO): Promise<PrismaClient> {

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user;
    }
}