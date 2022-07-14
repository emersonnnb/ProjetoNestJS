import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtivoFinanceiroController } from './ativo_financeiro.controller';
import { AtivoFinanceiroService } from '../service/ativo_financeiro.service';
import { ativo_financeiro } from 'src/Entities/ativo_financeiro.entity';


@Module({
    imports: [TypeOrmModule.forFeature([ativo_financeiro])],
    controllers: [AtivoFinanceiroController],
    providers: [AtivoFinanceiroService]
})
export class AtivoFinanceiroModule {}
