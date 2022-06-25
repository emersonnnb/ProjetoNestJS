// Classe utilizada para criar e validar os dados que vão para o banco de dados.

import { IsNumber, IsString } from "class-validator";

export class createArtefatoDto {

    @IsNumber()                 // Valida se o dado que vem do front-end é numero.
    readonly id: number;        // Torna esse campo disponivel somente para leitura

    @IsString()                 // Valida se o dado que vem do front-end é string.
    readonly situacao: string;

    @IsString()
    readonly classe: string;

    @IsString()
    readonly tipo: string;

    @IsNumber()
    readonly quantidade: number;

    @IsString()
    readonly valorEstimado: string;

    @IsString()
    readonly apresentante: string;

    @IsString()
    readonly proprietario: string;

    @IsString()
    readonly descricao: string;

    @IsString()
    readonly observacao: string;

}