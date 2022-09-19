import { Router } from "express";
import AppController from "./controller/AppController";

const routes = Router();

routes.get('/games', AppController.listGames);
routes.post('/games/:gameId/ads', AppController.createNewAD);
routes.get('/games/:id/ads', AppController.listAdsByGame);
routes.get('/ads/:id/discord', AppController.showDiscord)

export default routes;