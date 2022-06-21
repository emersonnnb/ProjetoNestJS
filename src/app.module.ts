import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtefatoController } from './artefato/artefato/artefato.controller';
import { ApiService } from './service/api/api.service';

@Module({
  imports: [],
  controllers: [AppController, ArtefatoController],
  providers: [AppService, ApiService],
})
export class AppModule { }
