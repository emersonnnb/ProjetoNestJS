import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBicicletaDto {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly situacao: string;

    @IsString()
    readonly marca: string;

    @IsString()
    readonly modelo: string;

    @IsString()
    readonly cor: string;

    @IsNumber()
    readonly valorEstimado: number;
    
    //@IsNotEmpty se é obrigatorio

    @IsString()
    readonly chassi: string;

    @IsString()
    readonly apresentante: string;

    @IsString()
    readonly proprietario: string;

    @IsString()
    readonly observacao: string;

}