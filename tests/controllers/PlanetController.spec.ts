import 'reflect-metadata'
import { it } from 'mocha'
import chai from 'chai'
import sinon, { SinonSandbox } from 'sinon'
import sinonChai from 'sinon-chai'
import PlanetController from '../../src/entrypoint/controllers/PlanetController'
import PlanetServiceLocator from '../../src/configuration/usecases/PlanetServiceLocator'
import FakePlanetRepository from '../helpers/FakePlanetRepository'
import { mockRequest, mockResponse } from '../helpers/helpers'
import Planet from '../../src/domain/Planet';

const { expect } = chai

chai.use(sinonChai)

describe('Planet Controller', () => {
  let sut: PlanetController
  let sandbox: SinonSandbox = null
  let serviceLocator: PlanetServiceLocator
  let fakeRepository: FakePlanetRepository

  const planet: Planet = {
    id: '123456',
    name: 'Didi',
    terrain: 'plano',
    climate: 'frio'
  }

  const req: any = mockRequest(planet)
  const res: any = mockResponse()

  beforeEach(() => {
    fakeRepository = new FakePlanetRepository()
    serviceLocator = new PlanetServiceLocator(fakeRepository)
    sandbox = sinon.createSandbox()

    sut = new PlanetController(serviceLocator)
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('add', () => {
    it('should return 400 on empty request', async () => {
      sandbox.spy(res, 'status')
      sandbox.spy(res, 'json')

      const emptyRequest: any = { body: {} }
      await sut.add(emptyRequest, res)

      expect(res.status).to.have.been.calledWith(400)
    })

    it('should return 200 on add a planet', async () => {
      sandbox.spy(res, 'status')
      sandbox.spy(res, 'json')

      await sut.add(req, res)

      expect(res.status).to.have.been.calledWith(200)
    //   expect(res.json).to.have.been.calledWith(planet)
    })
  })
})
