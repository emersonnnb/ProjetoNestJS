import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
import { AtivoFinanceiroController } from './ativo_financeiro/ativo_financeiro.controller';
import { AtivoFinanceiroModule } from './ativo_financeiro/ativo_financeiro.module';

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

  }), AtivoFinanceiroModule],
  controllers: [AppController, AtivoFinanceiroController],
  providers: [AppService],
})
export class AppModule { }
