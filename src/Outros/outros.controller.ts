import { Body, 
        Controller, 
        Delete, 
        Get, 
        Param, 
        Post, 
        Put } from '@nestjs/common';
import { OutrosService } from '../service/outros.service';

@Controller('outros')
export class OutrosController {
    constructor(private readonly outros: OutrosService) {

    }


    @Get()
    listarOutros(){
        return this.outros.findAll();
    };

    @Get(':id')
    buscarOutros(@Param('id') id: string){
        return this.outros.findOne(id);
    };

    @Post()
    createOutros(@Body() body){
        return this.outros.create(body);
    };

    @Put(':id')
    updataOutros(@Param('id') id: string, @Body() body){
        return this.outros.update(id, body);
    };

    @Delete(':id')
    removeOutros(@Param('id') id: string){
        return this.outros.remove(id);
    };
}
