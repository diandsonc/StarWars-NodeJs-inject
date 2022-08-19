import IPlanetWriteOnlyRepository from '../../src/application/repositories/IPlanetWriteOnlyRepository'
import Planet from '../../src/domain/Planet'

export default class FakePlanetRepository
implements IPlanetWriteOnlyRepository {
  public planets = [
    {
      id: '123456',
      name: 'Didi',
      terrain: 'plano',
      climate: 'frio'
    },
    {
      id: '98754',
      name: 'Didi 2',
      terrain: 'plano 2',
      climate: 'frio 2'
    }
  ]

  public async addPlanet (planet: Planet): Promise<Planet> {
    this.planets.push(planet)

    return planet
  }
}
