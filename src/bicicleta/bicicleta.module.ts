import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bicicleta } from 'src/Entities/bicicleta.entity';
import { BicicletaService } from 'src/service/bicicleta.service';
import { BicicletaController } from './bicicleta.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Bicicleta])],
  controllers: [BicicletaController],
  providers: [BicicletaService]
})
export class BicicletaModule { }
