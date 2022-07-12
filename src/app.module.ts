import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
import { AtivoFinanceiroModule } from './ativo_financeiro/ativo_financeiro.module';
import { BicicletaModule } from './bicicleta/bicicleta.module';
<<<<<<< HEAD
import { DispositivosMoveisController } from './dispositivos-moveis/dispositivos-moveis.controller';
import { DispositivosMoveisModule } from './dispositivos-moveis/dispositivos-moveis.module';
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
  }), AtivoFinanceiroModule, DispositivosMoveisModule],
  controllers: [AppController, AtivoFinanceiroController, DispositivosMoveisController],
=======
  }), BicicletaModule],
  controllers: [AppController, BicicletaController],
>>>>>>> dff95c532df1fd70f5de65adaa4ef4c4f7f714ad
=======
import { OutrosModule } from './outros/outros.module';

@Module({
  imports: [ArtefatoModule, 
            AtivoFinanceiroModule, 
            BicicletaModule, 
            OutrosModule, 
            TypeOrmModule.forRoot({
                  type: 'postgres',
                  host: 'localhost',
                  port: 5432,
                  username: 'docker',
                  password: 'Docker@123',
                  database: 'docker',
                  autoLoadEntities: true,    
                  synchronize: true,
                      }),],
  controllers: [AppController],
>>>>>>> develop
  providers: [AppService],
})
export class AppModule { }
