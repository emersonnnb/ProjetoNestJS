import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
import { BicicletaController } from './bicicleta/bicicleta.controller';
import { BicicletaModule } from './bicicleta/bicicleta.module';

@Module({
  imports: [ArtefatoModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'docker',
    password: 'Docker@123',
    database: 'docker',
    autoLoadEntities: true,
    synchronize: true,

  }), BicicletaModule],
  controllers: [AppController, BicicletaController],
  providers: [AppService],
})
export class AppModule { }
