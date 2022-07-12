import { IsNumber, IsString } from "class-validator";

export class CreateOutrosDto {
    @IsNumber()
    readonly id:                number;

    @IsString()
    readonly situacao:          string;

    @IsString()
    readonly classe:            string;

    @IsString()
    readonly tipo:              string;

    @IsNumber()
    readonly valorEstimado:     number;

    @IsNumber()
    readonly numerodeSerie:     number;

    @IsString()
    readonly marca:             string;

    @IsString()
    readonly modelo:            string;

    @IsNumber()
    readonly quantidade:        number;

    @IsString()
    readonly unidadedeMedida:   string;

    @IsString()
    readonly acondicionamento:  string;

    @IsString()
    readonly descricao:         string;
    
    @IsString()
    readonly apresentante:      string;
    
    @IsString()
    readonly proprietario:      string;
    
    @IsString()
    readonly observacao:        string;
}