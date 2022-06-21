import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Artefato } from 'src/Entities/artefato.entity';


@Injectable()
export class ApiService {

    private artefato: Artefato[] = [
        {
            "id": 2,
            "situacao": "Ativo",
            "classe": "Inativo",
            "tipo": "Inativo",
            "quantidade": 234,
            "valorEstimado": "3234",
            "apresentante": "asc",
            "proprietario": "xz zx",
            "descricao": "zx z ",
            "observacao": "zx z ",
        }
    ]

    listAll() {
        return this.artefato;
    }

    listOne(id: string) {
        const artefato = this.artefato.find((Artefato: Artefato) => Artefato.id === Number(id));
        if (!artefato) {
            throw new HttpException(
                `Course ID ${id} not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        return artefato;
    }

    createArtefato(createArtefatoDto: any) {
        this.artefato.push(createArtefatoDto);
    }

    updateArtafeto(id: string, updateDTO: any) {
        const indexVariavel = this.artefato.findIndex((artefato: Artefato) => artefato.id === Number(id));
        this.artefato[indexVariavel] = updateDTO;
    }

    remove(id: string) {
        const index = this.artefato.findIndex(
            (artefato: Artefato) => artefato.id === Number(id)
        );

        if (index >= 0) {
            this.artefato.splice(index, 1);

        }
    }


}
