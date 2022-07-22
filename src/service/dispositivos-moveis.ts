import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDispositivosMoveisDto } from 'src/dispositivos-moveis/dto/createDispositivos.dto';
import { UpdateDispositivosMoveisDto } from 'src/dispositivos-moveis/dto/uptadeDispositivos.dtos';
import { DispositivosMoveis } from 'src/Entities/dispositivos.entity';

import { Repository } from 'typeorm';

@Injectable()
export class DispositivosMoveisService {

    constructor(
        @InjectRepository(DispositivosMoveis)
        private readonly dispositivosMoveisrepository: Repository<DispositivosMoveis>,
    ) {

    }

    listAll() {
        return this.dispositivosMoveisrepository.find();
    }

    listOne(id: string) {
        const DispositivosMoveis = this.dispositivosMoveisrepository.findOneById(id)

        if (!DispositivosMoveis) {
            throw new NotFoundException(`Curso do ID ${id} não encontrado`);
        }
        return DispositivosMoveis;
    }

    createDispositivosMoveis(createDispositivosMoveisDto: CreateDispositivosMoveisDto) {
        const DispositivosMoveis = this.dispositivosMoveisrepository.create(createDispositivosMoveisDto);
        return this.dispositivosMoveisrepository.save(DispositivosMoveis)
    }

    async updateDispositivosMoveis(id: string, updateDTO: UpdateDispositivosMoveisDto) {
        const DispositivosMoveis = await this.dispositivosMoveisrepository.preload({
            id: +id,
            ...updateDTO,
        });

        if (!DispositivosMoveis) {
            throw new NotFoundException(`Curso do ID ${id} não encontrado`);
        }
        return this.dispositivosMoveisrepository.save(DispositivosMoveis);
    }

    async remove(id: string) {
        const DispositivosMoveis = await this.dispositivosMoveisrepository.findOneById(id);

        if (!DispositivosMoveis) {
            throw new NotFoundException(`Curso do ID ${id} não encontrado`)
        }
        return this.dispositivosMoveisrepository.remove(DispositivosMoveis);
    }
}