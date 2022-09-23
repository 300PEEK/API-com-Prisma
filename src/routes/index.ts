import { Place } from '@prisma/client';
import { Router } from "express";
import { placeRoutes } from './place.routes';
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/places', placeRoutes);

export{routes};