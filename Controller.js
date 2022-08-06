const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
let password = models.Password;

app.get('/create', async (req, res) => {
    let create = await password.create({
        utility: "Facebook",
        password: "GswtwGGFs428!",
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    res.send("Senha criada com sucesso")
});


app.get('/read', async (req, res) => {
    let read = await password.findAll({
        raw: true
    });
    console.log(read);
})


let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log("Servidor rodando")
})