import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
<<<<<<< HEAD
import { AtivoFinanceiroController } from './ativo_financeiro/ativo_financeiro.controller';
import { AtivoFinanceiroModule } from './ativo_financeiro/ativo_financeiro.module';
=======
import { BicicletaController } from './bicicleta/bicicleta.controller';
import { BicicletaModule } from './bicicleta/bicicleta.module';
>>>>>>> dff95c532df1fd70f5de65adaa4ef4c4f7f714ad

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

<<<<<<< HEAD
  }), AtivoFinanceiroModule],
  controllers: [AppController, AtivoFinanceiroController],
=======
  }), BicicletaModule],
  controllers: [AppController, BicicletaController],
>>>>>>> dff95c532df1fd70f5de65adaa4ef4c4f7f714ad
  providers: [AppService],
})
export class AppModule { }
