import { Module } from '@nestjs/common';
import { AtivoFinanceiroController } from './ativo_financeiro.controller';


@Module({
    controllers: [AtivoFinanceiroController]
})
export class AtivoFinanceiroModule {}
