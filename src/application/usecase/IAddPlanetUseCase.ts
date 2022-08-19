import IPlanetDto from "./IPlanetDto";

export default interface IAddPlanetUseCase {
  addPlanet(planetDto: IPlanetDto): Promise<IPlanetDto>;
}
