// UUID => Universally unique identifier

/* function enviarEmail(para, id_usuario, assunto, texto) {
    //Biblioteca de envio de email
    console.log(para, id_usuario, assunto, texto)
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail("dani@gmail.com", 9899, "Olá!", "Tudo bem?")
    }
} */

// Agora sim.

interface DadosEnviaEmail { 
    para: string, 
    id_usuario: string, 
    assunto: string, 
    texto: string
}

/* function enviarEmail(dados: DadosEnviaEmail) { //Permite o auto-complete
        //Biblioteca de envio de email
        console.log(dados.para, dados.id_usuario, dados.assunto, dados.texto)
} */

//Desustruração
function enviarEmail({para, id_usuario, assunto, texto }) { 

    //Biblioteca de envio de email
    console.log(para, id_usuario, assunto, texto)
}


class EnviarEmailParaUsuario {
    send() {
        //enviarEmail("dani@gmail.com", 9899, "Olá!", "Tudo bem?")

        enviarEmail({para: "dani@gmail.com",id_usuario:  "9899", assunto: "Olá!",texto: "Tudo bem?"})
    }
}