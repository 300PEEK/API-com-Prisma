import { User } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export class GetAllUsersUseCase{
    async execute():Promise<User[]>{
        const users = await prisma.user.findMany({
            include: {
                request_access: {
                    select: {
                        place: {
                            select: {
                                name: true,
                            }
                        }
                    }
                }
            },
        });

        return users;
    }
}