import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
import { AtivoFinanceiroModule } from './ativo_financeiro/ativo_financeiro.module';
import { BicicletaModule } from './bicicleta/bicicleta.module';
import { DispositivosMoveisModule } from './dispositivos-moveis/dispositivos-moveis.module';
import { OutrosModule } from './Outros/outros.module';

@Module({

  imports: [
    ConfigModule.forRoot(),
    ArtefatoModule,
    AtivoFinanceiroModule,
    BicicletaModule,
    OutrosModule,
    DispositivosMoveisModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'databse',
      // host: 'localhost', rodar no nestjs
      port: 5432,
      username: 'docker',
      password: 'Docker@123',
      database: 'docker',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }