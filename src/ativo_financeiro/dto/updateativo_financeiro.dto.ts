import { PartialType } from "@nestjs/mapped-types";
import { CreateativoFinanceiroDto } from "./createativo_financeiro.dto";

export class UpdateativoFinanceiroDto extends PartialType(CreateativoFinanceiroDto) {}
