import Planet from "../../domain/Planet";

export default interface IPlanetWriteOnlyRepository {
  addPlanet(planet: Planet): Promise<Planet>;
}
