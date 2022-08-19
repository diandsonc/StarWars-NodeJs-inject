import "reflect-metadata";
import Planet from "../../domain/Planet";
import IPlanetWriteOnlyRepository from "../repositories/IPlanetWriteOnlyRepository";
import IAddPlanetUseCase from "./IAddPlanetUseCase";
import IPlanetDto from "./IPlanetDto";

export default class AddPlanetUseCase implements IAddPlanetUseCase {
  private planetWriteOnlyRepository: IPlanetWriteOnlyRepository;

  constructor(planetWriteOnlyRepository: IPlanetWriteOnlyRepository) {
    this.planetWriteOnlyRepository = planetWriteOnlyRepository;
  }

  public async addPlanet(planetDto: IPlanetDto): Promise<IPlanetDto> {
    if (planetDto == null || planetDto.name == null) { throw Error("Erro aqui"); }

    let planet = new Planet(
      planetDto.id,
      planetDto.name,
      planetDto.terrain,
      planetDto.climate
    );

    planet = await this.planetWriteOnlyRepository.addPlanet(planet);

    return planet;
  }
}
