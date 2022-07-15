import { IsDecimal, IsNumber, IsString } from "class-validator";

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

    @IsString()
    readonly valorEstimado: string;

    @IsString()
    readonly chassi: string;

    @IsString()
    readonly apresentante: string;

    @IsString()
    readonly proprietario: string;

    @IsString()
    readonly observacao: string;

}