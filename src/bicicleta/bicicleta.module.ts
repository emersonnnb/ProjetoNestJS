import { Module } from '@nestjs/common';
import { BicicletaService } from '../service/bicicleta.service';

@Module({
  providers: [BicicletaService]
})
export class BicicletaModule {}
