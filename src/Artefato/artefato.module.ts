import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artefato } from 'src/Entities/artefato.entity';
import { ArtefatoService } from 'src/service/artefato.service';
import { ArtefatoController } from './artefato.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Artefato])],
    controllers: [ArtefatoController],
    providers: [ArtefatoService]
})

export class ArtefatoModule { }