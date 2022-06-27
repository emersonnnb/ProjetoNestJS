// Classe utilizada para validar os dados que serão atualizados no banco de dados, extendendo o modelo de validação da classe "createArtefatoDto"

import { PartialType } from "@nestjs/mapped-types";
import { CreateArtefatoDto } from "./createArtefato.dto";


export class UpdateArtefatoDto extends PartialType(CreateArtefatoDto) { }