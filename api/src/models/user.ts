import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users") //Definindo que essa classe é uma entidade de user
export class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn() //Adiciona uma data.
    created_at: Date;

    constructor() {
        if (!this.id) { //Se tiver id esta editando se não esta criando um usuário
            this.id = uuid()
        }
    }
}

