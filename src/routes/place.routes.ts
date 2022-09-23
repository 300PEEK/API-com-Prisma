import { GetPlaceByAccessDateController } from './../modules/places/useCases/getPlaceByReleaseDate/GetPlaceByAccessDateController';
import { CreateRequestAccessController } from './../modules/places/useCases/createRequestAccess/CreateRequestAccessController';
import { CreatePlaceController } from './../modules/places/useCases/createPlace/CreatePlaceController';
import { Router } from "express";

const createPlaceController = new CreatePlaceController();
const getPlaceByAccessDateController = new GetPlaceByAccessDateController();
const createRequestAccessController = new CreateRequestAccessController();

const placeRoutes = Router();

placeRoutes.post("/", createPlaceController.handle);
placeRoutes.get("/Access", getPlaceByAccessDateController.handle);
placeRoutes.post("/request", createRequestAccessController.handle);

export { placeRoutes };