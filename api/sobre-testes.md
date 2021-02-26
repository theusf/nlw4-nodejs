# 🧪 Testes Automatizados

## 1 Testes unitários

### TDD

Desenvolver a partir dos testes.
Primeiro os testes depois os desenvolvimento com base no que precisa.

Nunca testa acessando APIs externas e Bancos de dados

## 2 Testes de integração

Testa a funcionalidade de todo o fluxa da aplicação.

Testar:

`request -> routes -> controller -> repository`
`<- repository <- controller <- response `

Todo o processo ate a volta ao cliente.

## 3 Testes de integração (Frontend)

Ponta a ponta (E2E)

Mais usado quando temos frontend, por exemplo clicks do usuário
