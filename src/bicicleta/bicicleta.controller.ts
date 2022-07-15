import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BicicletaService } from 'src/service/bicicleta.service';

@Controller('bicicleta')
export class BicicletaController {

    constructor(private readonly bicicleta: BicicletaService){}

    @Get()
    listaBicicleta() {
        return this.bicicleta.listAll();
    }

    @Get(':id')
     lerBicicleta(
        @Param('id') id: string) {
            return this.bicicleta.listOne(id);
        }

    @Post()
    criarBicicleta(@Body() body) {
        return this.bicicleta.createBicicleta(body);
    }   

    @Put(':id')
    atualizarBicicleta(@Param('id') id: string, @Body() body) {
        return this.bicicleta.updateBicicleta(id, body)
    }

    @Delete(':id')
    apagarBicicleta(
        @Param('id') id: string) {
            return this.bicicleta.remove(id);
        }

}
