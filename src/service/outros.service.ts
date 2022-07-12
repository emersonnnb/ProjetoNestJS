import { Injectable, NotFoundException } from '@nestjs/common';
import { Outros } from 'src/Entities/outros.entity';
import { CreateOutrosDto } from 'src/Outros/dto/createOutros.dto';
import { UpdateOutrosDto } from 'src/Outros/dto/updateOutros.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OutrosService {
    constructor(
        @InjectRepository(Outros)
        private readonly outrosrepository: Repository<Outros>,
    ) {}

    findAll() {
        return this.outrosrepository.find();
    };

    findOne(id: string){
        const outros = this.outrosrepository.findOne(id);
        if(!outros){
            throw new NotFoundException(`O objeto de ID ${id} não encontrado`);
        };
        return outros;
    };

    create(createDto: CreateOutrosDto){
        const outros = this.outrosrepository.create(createDto);
        return this.outrosrepository.save(outros);
    };

    async update(id: string, updateDto: UpdateOutrosDto) {
        const outros = await this.outrosrepository.preload({
            id: +id,
            ...updateDto,
        });
        if(!outros){
            throw new NotFoundException(`O objeto de ID ${id} não encontrado`);
        };
        return this.outrosrepository.save(outros)
    };

    async remove(id: string) {
        const outros = await this.outrosrepository.findOne(id);
        if(!outros){
            throw new NotFoundException(`O objeto de ID ${id} não encontrado`);
        };
        return this.outrosrepository.remove(outros)
    };

}
