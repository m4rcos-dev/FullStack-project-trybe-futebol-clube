<h1 align="center">🎉 Welcome to my TFC - Trybe Futebol Clube project repository </h1>

![swagger documetation blogs api](https://user-images.githubusercontent.com/104791582/227270241-972e482f-f3f8-46c5-a4a5-43fb2d7bc9e3.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20Node.js-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript|%20TypeScript-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Express%20|%20JWT%20|%20React-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Sequelize-blue)![flag architecture](https://img.shields.io/badge/Architecture-P.O.O-orange) ![flag desing](https://img.shields.io/badge/Design%20Patterns-S.O.L.I.D-brown)![flag test](https://img.shields.io/badge/Test%20Patterns-T.D.D%20|%20Mocha%20|%20Chai%20|%20Sinon-purple)


### [DEPLOY](https://tfc.up.railway.app/)

<p>Project developed during the back-end module of the Trybe full-stack web development course.</p>
<p>TFC is an informational website about football matches and rankings!⚽</p>
<p>An API was developed (using the TDD method) and also integrated through docker-compose the applications so that they work consuming a MySQL database.</p>
<p>In this project, a dockerized back-end was built using data modeling through Sequelize. Business rules were respected for the API to connect correctly with the Front-End.</p>
<p>To add a match you need a token, so the person must be logged in to make the changes. It has a relationship between teams and matches tables to make updates to matches</p>
<p>The backend follows business rules to properly populate the table available in the frontend that will be displayed to the person using the system</p>

## 🔨 Project Resources

<ul>
<h3>The project is composed of 4 important entities for its structure</h3>
<p>1️⃣Database</p>
<li>✅It's a dockerMySQL container already configured in docker-compose through a service defined as db.</li>
<li>✅Has the role of providing data to the backend service.</li>
<br>
<p>2️⃣Back-End</p>
<li>✅EndPoint for user to login with their email and password validated by token via Jwt</li>
<li>✅EndPoint to list all registered matches, using the GET method</li>
<li>✅EndPoint to register a new game, using the POST method.</li>
<li>✅EndPoint to update the goals of a match, using the PATCH method.</li>
<li>✅EndPoint to update the status of a match, using the PATCH method.</li>
<li>✅EndPoint for lists the information of the matches played at home by the teams and their classification in the general scoreboard, using the GET method</li>
<li>✅EndPoint for lists information on matches played away by teams and their ranking on the overall scoreboard, using the GET method</li>
<li>✅EndPoint for lists the information of all matches and the ranking of teams on the overall scoreboard, using the GET method</li>
<br>
<p>3️⃣Front-End</p>
<li>✅Developed in React</li>
<li>✅Communicates with the backend service via the url http://localhost:3001 through the endpoints created in the backend.</li>
<br>
<p>4️⃣Docker</p>
<li>✅docker-compose is responsible for uniting all containerized services (backend, frontendb) and uploading the complete project with the command npm run compose:up or npm run compose:up:dev</li>
</ul>

## ▶️ Running application
<details>
   <summary><strong>🐋 Running on Docker</strong></summary>

> ℹ️ Install dependencies with `npm run install:apps`.

**⚠️ Before starting, your docker-compose needs to be at version 1.29 or higher. [See here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [in the documentation](https://docs.docker.com/compose/install/) how to install it. In the first article, you can replace where you are with `1.26.0` with `1.29.2`.**

> ℹ️ Run the `backend`, `frontend` and `db` services with the `docker-compose up -d --build` command.

   - Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it, if you want to use the application in containers;

   - These services will initialize a container named `app-backend`, `app-frontend` and another named `db`;

   - From here you can access the application at `http://localhost:3000`;

   - The back-end endpoints are found at `http://localhost:3001`;

   - **⚠️ Attention:** Do not run the npm audit fix command! It updates several project dependencies, and this update causes conflicts.

   - ✨ **Tip:** The `Remote - Containers` extension is indicated so that you can develop your application in the Docker container directly in VS Code, as you do with your local files.

   <img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

</details>
<details>
   <summary id="diagram"><strong>🎲 ER and Entities Diagram</strong></summary>

   #### Entity-Relationship Diagram

   ![der](https://user-images.githubusercontent.com/104791582/227309223-b1ad518d-b31f-4546-8b31-eb429df8d0d2.jpg)

   ---

⚠️ The package.json in the `app/backend` directory contains a `scriptdb:reset` which is responsible for "dropping" the database, recreating and executing the migrations and seeders. You can execute it with the command `npm run db:reset` if for some reason you need to recreate the database.

⚠️ Any execution referring to sequelize-cli must be performed inside the `app/backend` directory. Make sure that before running sequelize commands there already exists a compiled back-end version (`app/build` directory), otherwise just run `npm run build` to compile. Sequelize will only work correctly if the project is compiled .

⚠️ sequelize has already been initialized, so it is NOT necessary to run `sequelize init` again.

<br />
</details>
<details>
    <summary><strong>🏦 Users and Passwords</strong></summary>

   The application has a pre-registered default user and password and with its admin permissions activated in the bank. Use to test the application.

   > Email: admin@admin.com

   > Password: secret_admin

<br />
</details>
<details>
    <summary><strong>🧪 Running backend coverage tests</strong></summary><br />

    To run coverage tests on the backend, use the command: `npm run test:coverage`.

⚠️ For the above command to work locally (outside the container) you must configure the `.env` file in the root of the back-end with the environment variables below.

```
   JWT_SECRET =jwt_secret
   APP_PORT=3001
   DB_USER=your_user
   DB_PASS=your_password
   DB_HOST=localhost
   DB_PORT=3306
```

</details>
</br>

## 🧔 Author

<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo " data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
