# nodejs-queue
Exmplo de filas (background jobs) em NodeJS

### Descrição
Um exemplo de utilização das filas para executar tarefas em segundo plano em NodeJS, atribuíndo a responsabilidade para outro serviço, assim não bloqueando e agilizando a resposta da requisição.
No exemplo deste projeto, ao receber uma requisição com as informações do usuário, é registrado na fila um *job* de envio de e-mail de confirmação. Como o envio do e-mail será feito separadamente, a requisição é retornada instantaneamente.

### Técnologias
[Redis](https://redis.io/) - Banco de dados integrado ao Bull, para registrar as filas e *jobs*.

[Express](https://expressjs.com/pt-br/) - *Framework* utilizado para criar o servidor HTTP e assim responder as rotas.

[Bull](https://optimalbits.github.io/bull/) - Biblioteca responsavel por criar e gerenciar as filas.

[Bull-board](https://optimalbits.github.io/bull/) - Biblioteca utilizada para demonstrar um *dashbord* com as filas e os *jobs*.

[Nodemailer](https://nodemailer.com/about/) - Biblioteca utilizada para fazer os envíos de e-mail.

### Execução

Clone o repositório deste projeto, instale as dependências, usando o **npm install** ou **yarn**, e execute-o com o scritp **dev**, depois disso seu servidor estará ouvindo em **localhost:3333**.

**Obs**
Você precisa estar com o banco de dados Redis instalado e rodando em sua máquina.
Você precisa configurar o arquivo **.env** na raiz do projeto, conforme exemplo do arquivo **.env-example**

#### Rotas

Para registrar um usuário e enviar o e-mail:

post => http://localhost:3333/users {
  body(json): {
    "name": "user name",
    "email": "email@email.com",
    "password": "1234"
  }
}

--------

Para vizualizar o dashborad das filas e *jobs*:

Abara em seu navegador a url: http://localhost:3333/admin/queues
