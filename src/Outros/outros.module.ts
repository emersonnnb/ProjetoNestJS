import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outros } from 'src/Entities/outros.entity';
import { OutrosService } from 'src/service/outros.service';
import { OutrosController } from './outros.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Outros])],
    controllers: [OutrosController],
    providers: [OutrosService]
})
export class OutrosModule { }
