import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artefato } from 'src/Artefato/Entities/artefato.entity';
import { ApiService } from 'src/service/api/api.service';

import { ArtefatoController } from './artefato.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Artefato])],
    controllers: [ArtefatoController],
    providers: [ApiService]
})

export class ArtefatoModule { }