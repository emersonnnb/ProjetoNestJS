import { IsNumber, IsString } from "class-validator";

export class CreateativoFinanceiroDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly situacao: string;

    @IsString()
    readonly classe: string;

    @IsString()
    readonly tipo: string;

    @IsNumber()
    readonly quantidade: number;

    @IsString()
    readonly unidadedeMedida: string;

    @IsString()
    readonly valorEstimado: string;

    @IsString()
    readonly moeda: string;

    @IsString()
    readonly proprietarioTitular: string;

    @IsString()
    readonly descricao: string;

    @IsString()
    readonly beneficiario: string;

    @IsString()
    readonly proprietarioCotitular: string;

    @IsString()
    readonly proprietarioCootitular: string;

    @IsString()
    readonly observacao: string;
}
