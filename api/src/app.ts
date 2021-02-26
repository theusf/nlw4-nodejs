import express from 'express';
import 'reflect-metadata';
import createConnection from "./database";
import { router } from './routes';

// Precisamos de um tradutor de import.
// Instalando .. typescript
// yarn add typescript -D
// yarn tsc --init

// Converter yarn add ts-node-dev -D
// Ele em tempo de execução converte o código para JS

createConnection();

const app = express();

app.use(express.json())
app.use(router)

export { app }