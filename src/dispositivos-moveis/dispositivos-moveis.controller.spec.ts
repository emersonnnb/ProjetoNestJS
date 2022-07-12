import { Test, TestingModule } from '@nestjs/testing';
import { DispositivosMoveisController } from './dispositivos-moveis.controller';

describe('DispositivosMoveisController', () => {
  let controller: DispositivosMoveisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispositivosMoveisController],
    }).compile();

    controller = module.get<DispositivosMoveisController>(DispositivosMoveisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
