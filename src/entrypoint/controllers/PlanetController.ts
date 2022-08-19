import * as express from "express";
import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  interfaces,
  request,
  response
} from "inversify-express-utils";
import AddPlanetUseCase from "../../application/usecase/addplanetusecase";
import IPlanetDto from "../../application/usecase/IPlanetDto";
import PlanetServiceLocator from "../../configuration/usecases/PlanetServiceLocator";
import { TYPES } from "../../constants/types";

@controller("/api/v1/planets")
export default class PlanetController implements interfaces.Controller {
  private readonly addPlanetUseCase: AddPlanetUseCase;

  constructor(
  @inject(TYPES.PlanetServiceLocator) serviceLocator: PlanetServiceLocator
  ) {
    this.addPlanetUseCase = serviceLocator.GetAddPlanetUseCase();
  }

  @httpPost("/teste")
  public async add(@request() req: express.Request, @response() res: express.Response) {
    const planetDto: IPlanetDto = req.body;

    return this.addPlanetUseCase
      .addPlanet(planetDto)
      .then((newPlanetDto: IPlanetDto) => res.status(200).json(newPlanetDto))
      .catch((err: Error) => res.status(400).json({ error: err.message }));
  }

  @httpGet("/")
  public get_all(@request() req: express.Request, @response() res: express.Response) {
    return "OK";
  }
}
