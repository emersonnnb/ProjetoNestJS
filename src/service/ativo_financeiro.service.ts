import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateativoFinanceiroDto } from 'src/ativo_financeiro/dto/createativo_financeiro.dto';
import { ativo_financeiro } from 'src/Entities/ativo_financeiro.entity';
import { Repository } from 'typeorm';
import { UpdateativoFinanceiroDto } from 'src/ativo_financeiro/dto/updateativo_financeiro.dto';

@Injectable()
export class AtivoFinanceiroService {
    
    constructor(
        @InjectRepository(ativo_financeiro)
        private readonly ativoFinanceirorepository: Repository<ativo_financeiro>,
    ) {
    }

    listAll() {
        return this.ativoFinanceirorepository.find();
    }

    listOne(id: string) {
        const ativo_financeiro = this.ativoFinanceirorepository.findOne(id)

        if (!ativo_financeiro) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }
        return ativo_financeiro;
    }

    createAtivoFinanceiro(createativo_financeiroDto: CreateativoFinanceiroDto) {

        const ativo_financeiro = this.ativoFinanceirorepository.create(createativo_financeiroDto);
        return this.ativoFinanceirorepository.save(ativo_financeiro)
    }

    async updateAtivoFinanceiro(id: string, updateDTO: UpdateativoFinanceiroDto) {
        const ativo_financeiro = await this.ativoFinanceirorepository.preload({
            id: +id,
            ...updateDTO,
        });

        if (!ativo_financeiro) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }

        return this.ativoFinanceirorepository.save(ativo_financeiro);
    }

    async remove(id: string) {
        const ativo_financeiro = await this.ativoFinanceirorepository.findOne(id);

        if (!ativo_financeiro) {
            throw new NotFoundException(`Course ID ${id} not found`);
        }
        return this.ativoFinanceirorepository.remove(ativo_financeiro);
    }

}
