import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispositivosMoveis } from 'src/Entities/dispositivos-moveis';
import { DispositivosMoveisService } from 'src/service/dispositivos-moveis';
import { dispositivosmoveisController } from './dispositivos-moveis.controller';



@Module({
  imports: [TypeOrmModule.forFeature([DispositivosMoveis])],
  controllers: [dispositivosmoveisController],
  providers: [DispositivosMoveisService]
})
export class DispositivosMoveisModule { }
