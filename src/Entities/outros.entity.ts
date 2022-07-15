import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Outros {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    situacao: string;

    @Column()
    classe: string;

    @Column()
    tipo: string;

    @Column()
    valorEstimado: string;

    @Column()
    numerodeSerie: number;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    quantidade: number;

    @Column()
    unidadedeMedida: string;

    @Column()
    acondicionamento: string;

    @Column()
    descricao: string;

    @Column()
    apresentante: string;

    @Column()
    proprietario: string;

    @Column()
    observacao: string;
}