import { Module } from '@nestjs/common';
import { BicicletaService } from '../service/bicicleta.service';

@Module({
  controllers: [BicicletaService]
})
export class BicicletaModule {}
