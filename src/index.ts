import * as bodyParser from "body-parser";
import cors from "cors";
import * as express from "express";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import "reflect-metadata";
import IPlanetWriteOnlyRepository from "./application/repositories/IPlanetWriteOnlyRepository";
import PlanetServiceLocator from "./configuration/usecases/PlanetServiceLocator";
import { TYPES } from "./constants/types";
import PlanetRepository from "./infrastructure/data/repositories/PlanetRepository";
// import mongoose from "mongoose";

const container = new Container();

container
  .bind<PlanetServiceLocator>(TYPES.PlanetServiceLocator)
  .to(PlanetServiceLocator);

container
  .bind<IPlanetWriteOnlyRepository>(TYPES.IPlanetWriteOnlyRepository)
  .to(PlanetRepository);

const server = new InversifyExpressServer(container);

server.setConfig((application: express.Application) => {
  application.use(bodyParser.urlencoded({ extended: false }));
  application.use(bodyParser.json());
  application.use(cors());
});

const app = server.build();

// mongoose.connect(
//   process.env.MONGODB_URL || "mongodb://localhost/starwars-nodejs",
//   {
//     useNewUrlParser: true
//   }
// );

app.listen(3000);
