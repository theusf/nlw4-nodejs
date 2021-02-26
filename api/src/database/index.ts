import { Connection, createConnection, getConnectionOptions } from "typeorm";

//createConnection();

export default async (): Promise<Connection> => {

    //Verificar se o comando que estou dando é de teste ou de outro ambiente
    // Yarn test ou yarn de execução.

    //Verificar qual ambiente estamos com variaveis de ambiente.
    const defaultOptions = await getConnectionOptions() //Pegando as var do ormconfig.json

    return createConnection(
        Object.assign(defaultOptions, //Sobrepondo o database do objeto
            {
                database: process.env.NODE_ENV === 'teste' ?
                    "./src/database/database.test.sqlite" : defaultOptions.database
            })
    )
}