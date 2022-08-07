const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let password = models.Password;

app.post('/create', async (req, res) => {
    if (req.body.utility === "") {
        res.send(JSON.stringify("Preencha o campo de utilidade da senha"));
        return
    }
    const create = await password.create({
        utility: req.body.utility,
        password: req.body.password
    });
    res.send(JSON.stringify("Senha salvada com sucesso!"))
});


app.get('/list', async (req, res) => {
    let read = await password.findAll({
        raw: true
    });
    res.send(read);
})


let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log("Servidor rodando")
})