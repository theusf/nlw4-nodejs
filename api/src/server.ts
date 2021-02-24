import express from 'express';
// Precisamos de um tradutor de import.
// Instalando .. typescript
// yarn add typescript -D
// yarn tsc --init

// Converter yarn add ts-node-dev -D
// Ele em tempo de execução converte o código para JS


//Metodos HTTP

const app = express();

app.get("/", (req, res) => {
    return res.json({message: "#NLW04"})
})

app.post("/", (req, res) => {
    //Recebeu dados
    return res.json({message: "Os dados foram salvos com sucesso"})
})

app.listen(7777, () => console.log('Server is running! 👩‍🚀') )