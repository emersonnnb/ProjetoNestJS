import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArtefatoService } from 'src/service/artefato.service';

@Controller('artefato')
export class ArtefatoController {
    constructor(private readonly artefato: ArtefatoService) {

    }

    @Get()
    listaArtefato() {
        return this.artefato.listAll();
    }

    @Get(':id')
    lerArtefato(
        @Param('id') id: string) {
        return this.artefato.listOne(id);
    }

    @Post()
    criarArtefato(@Body() body) {
        return this.artefato.createArtefato(body);
    }

    @Put(':id')
    atualizarArtefato(@Param('id') id: string, @Body() body) {
        return this.artefato.updateArtafeto(id, body)
    }

    @Delete(':id')
    apagarArtefato(
        @Param('id') id: string) {
        return this.artefato.remove(id);
    }
}
