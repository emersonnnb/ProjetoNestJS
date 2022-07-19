import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
import { AtivoFinanceiroModule } from './ativo_financeiro/ativo_financeiro.module';
import { BicicletaModule } from './bicicleta/bicicleta.module';
import { DispositivosMoveisModule } from './dispositivos-moveis/dispositivos-moveis.module';
import { OutrosModule } from './Outros/outros.module';

@Module({

  imports: [ArtefatoModule,
            AtivoFinanceiroModule,
            BicicletaModule,
            OutrosModule,
            DispositivosMoveisModule,
            TypeOrmModule.forRoot({
                  type: 'postgres',
                  host: 'localhost',
                  port: 5432,
                  username: 'docker',
                  password: 'Docker@123',
                  database: 'four',
                  autoLoadEntities: false,    
                  synchronize: false,
                                  })
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }