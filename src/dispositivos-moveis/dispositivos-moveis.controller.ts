import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DispositivosMoveisService } from 'src/service/dispositivos-moveis';


@Controller('dispositivosmoveis')
export class dispositivosmoveisController {

    constructor(private readonly DispositivosMoveis: DispositivosMoveisService){}

    @Get()
    listaDispositivosMoveis() {
        return this.DispositivosMoveis.listAll();
    }

    @Get(':id')
     lerDispositivosMoveis(
        @Param('id') id: string) {
            return this.DispositivosMoveis.listOne(id);
        }

    @Post()
    criarDispositivosMoveis(@Body() body) {
        return this.DispositivosMoveis.createDispositivosMoveis(body);
    }   

    @Put(':id')
    atualizarDispositivosMoveis(@Param('id') id: string, @Body() body) {
        return this.DispositivosMoveis.updateDispositivosMoveis(id, body);
    }

    @Delete(':id')
    apagarDispositivosMoveis(
        @Param('id') id: string) {
            return this.DispositivosMoveis.remove(id);
        }

}
