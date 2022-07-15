import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity() 
export class ativo_financeiro {

    @PrimaryGeneratedColumn()   
    id: number;

    @Column()               
    situacao: string;

    @Column()
    classe: string;

    @Column()
    tipo: string;

    @Column()
    quantidade: number;

    @Column()
    unidadedeMedida: number;

    @Column()
    valorEstimado: string;

    @Column()
    moeda: string;

    @Column()
    proprietarioTitular: string;

    @Column()
    descricao: string;

    @Column()
    benificiario: string;

    @Column()
    proprietarioCotitular: string;

    @Column()
    proprietarioCootitular: string;

    @Column()
    observacao: string;

}