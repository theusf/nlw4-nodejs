import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs'; //Nativo do node

class SendMailService {

    private client: Transporter

    constructor() {
        nodemailer.createTestAccount().then(account => {  //Conta de teste
            let transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            })


            this.client = transporter;

        })
    }


    async execute(to: string, subject: string, variables: object, path: string) {

        // Lendo o arquivo.
        const templateFileContent = fs.readFileSync(path).toString("utf8")

        const mailTemplateParse = handlebars.compile(templateFileContent)

        const html = mailTemplateParse(variables)

        const message = await this.client.sendMail({
            to,
            subject,
            html: html,
            from: "NPS <noreply@nps.shiro.dev>"
        });

        console.log(message)


       console.log("Message sent: %s", message.messageId)
       console.log("Previw URL: %s", nodemailer.getTestMessageUrl(message))


    }


}

export default new SendMailService(); 