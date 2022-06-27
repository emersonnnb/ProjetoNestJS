import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArtefatoDto } from 'src/Artefato/dto/createArtefato.dto';
import { UpdateArtefatoDto } from 'src/Artefato/dto/updateArtefato.dto';
import { Artefato } from 'src/Artefato/Entities/artefato.entity';

import { Repository } from 'typeorm';


@Injectable()
export class ApiService {

    constructor(
        @InjectRepository(Artefato)
        private readonly artefatorepository: Repository<Artefato>,
    ) {
    }

    listAll() {
        return this.artefatorepository.find();
    }

    listOne(id: string) {
        const artefato = this.artefatorepository.findOne(id)

        if (!artefato) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }
        return artefato;
    }

    createArtefato(createArtefatoDto: CreateArtefatoDto) {

        const artefato = this.artefatorepository.create(createArtefatoDto);
        return this.artefatorepository.save(artefato)
    }

    async updateArtafeto(id: string, updateDTO: UpdateArtefatoDto) {
        const artefato = await this.artefatorepository.preload({
            id: +id,
            ...updateDTO,
        });

        if (!artefato) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }

        return this.artefatorepository.save(artefato);
    }

    async remove(id: string) {
        const artefato = await this.artefatorepository.findOne(id);

        if (!artefato) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }
        return this.artefatorepository.remove(artefato);
    }


}
