import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBicicletaDto } from 'src/bicicleta/dto/createBicicleta.dto';
import { UpdateBicicletaDto } from 'src/bicicleta/dto/updateBicicleta.dto';
import { Bicicleta } from 'src/Entities/bicicleta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BicicletaService {

    constructor(
        @InjectRepository(Bicicleta)
        private readonly bicicletarepository: Repository<Bicicleta>,
    )  {

    }

    listAll() {
        return this.bicicletarepository.find();
    }

    listOne(id: string) {
        const bicicleta = this.bicicletarepository.findOne(id)

        if (!bicicleta) {
            throw new NotFoundException(`Curso do ID ${id} não encontrado`);
        }
        return bicicleta;
    }

    createBicicleta(createBicicletaDto: CreateBicicletaDto) {
        const bicicleta = this.bicicletarepository.create(createBicicletaDto);
        return this.bicicletarepository.save(bicicleta)
    }

    async updateBicicleta(id: string, updateDTO: UpdateBicicletaDto) {
        const bicicleta = await this.bicicletarepository.preload({
            id: +id,
            ...updateDTO,
        });

        if (!bicicleta) {
            throw new NotFoundException(`Curso do ID ${id} não encontrado`);
        }
        return this.bicicletarepository.save(bicicleta);
    }

    async remove(id: string) {
        const bicicleta = await this.bicicletarepository.findOne(id);

        if (!bicicleta) {
            throw new NotFoundException(`Curso do ID ${id} não encontrado`)
        }
        return this.bicicletarepository.remove(bicicleta);
    }
}
