import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
import { AtivoFinanceiroModule } from './ativo_financeiro/ativo_financeiro.module';
import { BicicletaModule } from './bicicleta/bicicleta.module';
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
                                  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
