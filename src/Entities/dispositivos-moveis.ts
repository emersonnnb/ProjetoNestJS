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
    bloqueio: boolean;

    @Column()
    seguro: boolean;

    @Column()
    observacao: string;

    @Column()
    seguradora: string;
}