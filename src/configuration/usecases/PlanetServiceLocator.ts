import { inject, injectable } from "inversify";
import IPlanetWriteOnlyRepository from "../../application/repositories/IPlanetWriteOnlyRepository";
import AddPlanetUseCase from "../../application/usecase/addplanetusecase";
import { TYPES } from "../../constants/types";

@injectable()
export default class PlanetServiceLocator {
  constructor(@inject(TYPES.IPlanetWriteOnlyRepository) private writeRepository: IPlanetWriteOnlyRepository) {}

  public GetAddPlanetUseCase() {
    return new AddPlanetUseCase(this.writeRepository);
  }
}
