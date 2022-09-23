import { Place, User } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

export class GetPlaceByAccessDateUseCase {
    async execute(): Promise<Place[]> {
        const places = await prisma.place.findMany({
            orderBy: {
                access_date: 'desc'
            },
            include: {
                request_access: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            },
        });

        return places;
    }
}