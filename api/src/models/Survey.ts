import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("surveys")
class Survey {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn() //Adiciona uma data.
    created_at: Date;

    constructor() {
        if (!this.id) { //Se tiver id esta editando se não esta criando um usuário
            this.id = uuid()
        }
    }
}

export { Survey }