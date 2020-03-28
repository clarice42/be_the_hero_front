const express = require("express"); // a variável express contém todas as funcionalidades do framework;
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // a aplicação vai rodar na porta 3333;