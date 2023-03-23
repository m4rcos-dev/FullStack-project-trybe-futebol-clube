<h1 align="center">🎉 Boas-vindas ao meu repositório do proejto TFC - Trybe Futebol Clube </h1>

![swagger documetation blogs api](https://user-images.githubusercontent.com/104791582/227270241-972e482f-f3f8-46c5-a4a5-43fb2d7bc9e3.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20Node.js-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript|%20TypeScript-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Express%20|%20JWT%20|%20React-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Sequelize-blue)![flag architecture](https://img.shields.io/badge/Architecture-P.O.O-orange) ![flag desing](https://img.shields.io/badge/Design%20Patterns-S.O.L.I.D-brown)![flag test](https://img.shields.io/badge/Test%20Patterns-T.D.D%20|%20Mocha%20|%20Chai%20|%20Sinon-purple)


### [DEPLOY](https://tfc.up.railway.app/)

<p>Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web full-stack Trybe.</p>
<p>O TFC é um site informativo sobre partidas e classificações de futebol!⚽</p>
<p>Foi desenvolvido uma API (utilizando o métodoTDD) e também integrado através do docker-compose as aplicações para que elas funcionem consumindo um banco de dados em MySql.</p>
<p>Nesse projeto, foi construido um back-end dockerizado utilizando modelagem de dados através do Sequelize. Foi respeitado regras de negócio para a API se conectar corretamente com o Front-End.</p>
<p>Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. Tem um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas</p>
<p>O back-end segue regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema</p>

## 🔨 Recursos do projeto

<ul>
<h3>O projeto é composto de 4 entidades importantes para sua estrutura</h3>
<p>1️⃣Banco de dados</p>
<li>✅É um container dockerMySQL já configurado no docker-compose através de um serviço definido como db.</li>
<li>✅Tem o papel de fornecer dados para o serviço de backend.</li>
<br>
<p>2️⃣Back-End</p>
<li>✅EndPoint para usuário realizar Login com seu e-mail e senha validados pelo token via Jwt</li>
<li>✅EndPoint para listar todas as partidas cadastradas, utilizando o método GET</li>
<li>✅EndPoint para cadastrar uma nova partida, utilizando o método POST.</li>
<li>✅EndPoint para atualizar os gols de uma partida, utilizando o método PATCH.</li>
<li>✅EndPoint para atualizar os status de uma partida, utilizando o método PATCH.</li>
<li>✅EndPoint para listas a informações das partidas jogadas em casa pelos times e sua classificação no placar geral, utilizando o método GET</li>
<li>✅EndPoint para listas a informações das partidas jogadas fora pelos times e sua classificação no placar geral, utilizando o método GET</li>
<li>✅EndPoint para listas a informações de todas as partidas e a classificação dos times no placar geral, utilizando o método GET</li>
<br>
<p>3️⃣Front-End</p>
<li>✅Desenvolvido em React</li>
<li>✅Se comunica com serviço de back-end pela url http://localhost:3001 através dos endpoints criados no back-end.</li>
<br>
<p>4️⃣Docker</p>
<li>✅O docker-compose tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontendedb) e subir o projeto completo com o comando npm run compose:up ou npm run compose:up:dev</li>
</ul>

## ▶️ Executando aplicação
<details>
  <summary><strong>🐋 Rodando no Docker</strong></summary>

> ℹ️ Instale as dependências com `npm run install:apps`.

**⚠️ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

> ℹ️ Rode os serviços `backend`, `frontend` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `app-backend`, `app-frontend` e outro chamado `db`;

  - A partir daqui você pode acessar a aplicação em `http://localhost:3000`;

  - Os endpoints dos back-end se encontram em `http://localhost:3001`;

  - **⚠️ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos.

  - ✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

</details>
<details>
  <summary  id="diagrama"><strong>🎲 Diagrama ER e Entidades</strong></summary>

  #### Diagrama de Entidade-Relacionamento

  ![der](https://user-images.githubusercontent.com/104791582/227309223-b1ad518d-b31f-4546-8b31-eb429df8d0d2.jpg)

  ---

⚠️ O package.json do diretório `app/backend` contém um `scriptdb:reset` que é responsável por "dropar" o banco, recriar e executar asmigrations e seeders.Você pode executá-lo como commando `npm run db:reset` se por algum motivo precisar recriar a base de dados.

⚠️ Quaisquer execução referente ao sequelize-cli deve ser realizada dentro do diretóri o `app/backend`. Certifique-se de que antes de rodar comandos do sequelize já exista uma versão compiladado back-end (diretório `app/build`), caso contrário basta executar `npm run build` para compilar.O sequelize só funcionará corretamente se o projeto estiver compilado.

⚠️ O sequelize já foi inicializado, portanto NÃO é necessário executar o `sequelize init` novamente.

<br />
</details>
<details>
   <summary><strong>🏦 Usuários e Senhas</strong></summary>

  A aplicação possui usuário e senha padrão pré cadastrado e com suas permições de admins ativadas no banco. Utilize para testar a aplicação.

  > Email: admin@admin.com

  > Senha: secret_admin

<br />
</details>
<details>
   <summary><strong>🧪 Rodando os testes de cobertura do backend</strong></summary><br />

   Para rodar testes de cobertura no back-end, utilize o comando: `npm run test:coverage`.

⚠️ Para que o comando acima funcione localmente (fora do container) você deverá configurar na raiz do back-end o arquivo `.env` com as variáveis de ambientes abaixo.

```
  JWT_SECRET =jwt_secret
  APP_PORT=3001
  DB_USER=seu_user
  DB_PASS=sua_senha
  DB_HOST=localhost
  DB_PORT=3306
```

</details>
</br>

## 🧔 Autor

<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
