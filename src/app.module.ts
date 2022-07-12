import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoModule } from './Artefato/artefato.module';
import { OutrosModule } from './outros/outros.module';

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

  }), OutrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
