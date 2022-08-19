import { injectable } from "inversify";
import "reflect-metadata";
import IPlanetWriteOnlyRepository from "../../../application/repositories/iplanetwriteonlyrepository";
import Planet from "../../../domain/planet";

@injectable()
export default class PlanetRepository implements IPlanetWriteOnlyRepository {
  public async addPlanet(planet: Planet): Promise<Planet> {
    throw new Error("Method not implemented.");
  }

  // public async get_all () {
  //     const result = await Planet.find()

  //     return result
  //   }

  //   public async find_by_name (name: string) {
  //     const result = Planet.find(name)

  //     return result
  //   }

  //   public async find_by_id (id: number) {
  //     const result = Planet.findById(id)

  //     return result
  //   }

  //   public async add (planet: Planet) {
  //     Planet.create(planet)

  //     return planet
  //   }

  //   public async update (planet: Planet) {
  //     Planet.findByIdAndUpdate(planet.Planet.name, planet)

  //     return planet
  //   }

  //   public async remove (id: number) {
  //     Planet.findByIdAndDelete(id)
  //   }
}
