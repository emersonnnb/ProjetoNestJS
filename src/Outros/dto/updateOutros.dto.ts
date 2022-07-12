import { PartialType } from "@nestjs/mapped-types";
import { CreateOutrosDto } from "./createOutros.dto";

export class UpdateOutrosDto extends PartialType(CreateOutrosDto) {
    
}