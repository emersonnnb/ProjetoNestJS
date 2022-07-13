import { PartialType } from "@nestjs/mapped-types";
import { CreateBicicletaDto } from "./createBicicleta.dto";

export class UpdateBicicletaDto extends PartialType(CreateBicicletaDto) {}