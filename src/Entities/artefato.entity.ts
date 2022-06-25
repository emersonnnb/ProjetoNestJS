import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity() // decorator utilizado para mapear as tabelas do banco
export class Artefato {

    @PrimaryGeneratedColumn()  // cria uma PRIMARY KEY AUTO_INCREMENT 
    id: number;

    @Column()                // Criar uma coluna no banco de dados
    situacao: string;

    @Column()
    classe: string;

    @Column()
    tipo: string;

    @Column()
    quantidade: number;

    @Column()
    valorEstimado: string;

    @Column()
    apresentante: string;

    @Column()
    proprietario: string;

    @Column()
    descricao: string;

    @Column()
    observacao: string;

}