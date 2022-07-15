import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { AtivoFinanceiroService } from 'src/service/ativo_financeiro.service';

@Controller('financeiro')
export class AtivoFinanceiroController {
    constructor(private readonly ativoFinanceiro: AtivoFinanceiroService) {

    }

    @Get()
    listaAtivoFinanceiro() {
        return this.ativoFinanceiro.listAll();
    }

    @Get(':id')
    lerAtivoFinanceiro(
        @Param('id') id: string) {
        return this.ativoFinanceiro.listOne(id);
    }

    @Post()
    criarAtivoFinanceiro(@Body() body) {
        return this.ativoFinanceiro.createAtivoFinanceiro(body);
    }

    @Put(':id')
    atualizarAtivoFinanceiro(@Param('id') id: string, @Body() body) {
        return this.ativoFinanceiro.updateAtivoFinanceiro(id, body)
    }

    @Delete(':id')
    apagarAtivoFinanceiro(
        @Param('id') id: string) {
        return this.ativoFinanceiro.remove(id);
    }

}
