import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DispositivosMoveis {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    situacao: string;

    @Column()
    apresentante: string;

    @Column()
    proprietario: string;

    @Column()
    bloqueio: string;

    @Column()
    seguro: string;

    @Column()
    observacao: string;

    @Column()
    seguradora: string;
}