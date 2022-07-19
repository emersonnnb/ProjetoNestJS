import { PartialType } from "@nestjs/mapped-types";
import { CreateDispositivosMoveisDto } from "./createDispositivos.dto";


export class UpdateDispositivosMoveisDto extends PartialType(CreateDispositivosMoveisDto) {}