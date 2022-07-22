import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bicicleta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    situacao: string;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    cor: string;

    @Column({type: 'numeric'})
    valorEstimado: number;

    @Column()
    chassi: string;

    @Column()
    apresentante: string;

    @Column()
    proprietario: string;

    @Column()
    observacao: string;
}