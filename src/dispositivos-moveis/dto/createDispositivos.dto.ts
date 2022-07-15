import { IsNumber, IsString, IsBoolean } from "class-validator";

export class CreateDispositivosMoveisDto {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly situacao: string;

    @IsString()
    readonly apresentante: string;

    @IsString()
    readonly proprietario: string;

    @IsString()
    readonly bloqueio: string;

    @IsString()
    readonly seguro: string;

    @IsString()
    readonly observacao: string;

    @IsString()
    readonly seguradora: string;

}