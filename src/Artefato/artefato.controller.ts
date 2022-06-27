import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { ApiService } from 'src/service/api/api.service';

@Controller('artefato')
export class ArtefatoController {
    constructor(private readonly api: ApiService) {

    }

    @Get()
    listaArtefato() {
        return this.api.listAll();
    }

    @Get(':id')
    lerArtefato(
        @Param('id') id: string) {
        return this.api.listOne(id);
    }

    @Post()
    criarArtefato(@Body() body) {
        return this.api.createArtefato(body);
    }

    @Put(':id')
    atualizarArtefato(@Param('id') id: string, @Body() body) {
        return this.api.updateArtafeto(id, body)
    }

    @Delete(':id')
    apagarArtefato(
        @Param('id') id: string) {
        return this.api.remove(id);
    }
}
