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

    @IsBoolean()
    readonly bloqueio: boolean;

    @IsBoolean()
    readonly seguro: boolean;

    @IsString()
    readonly observacao: string;

    @IsString()
    readonly seguradora: string;

}