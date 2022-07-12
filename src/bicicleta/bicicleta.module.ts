import { Module } from '@nestjs/common';
import { BicicletaController } from './bicicleta.controller';


@Module({
  controllers: [BicicletaController]
})
export class BicicletaModule { }
