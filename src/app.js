import express from 'express';

const app = express();
app.use(express.json())

const clientes = [
    {id: 1, nome: "Bruno", cpf: "123.456.789-78"},
    {id: 2, nome: "Joao", cpf: "123.456.789-78"}
]
const funcionarios = [
    {id: 1, nome: "Paulo", cpf: "123.456.789-78"},
    {id: 2, nome: "Sara", cpf: "123.456.789-78"}
]

app.get('/', (req,res) => {
    res.status(200).send("Pagina inicial");
})

app.get('/clientes', (req,res) =>{
    res.status(200).json(clientes); 
})
//funcionario
app.get('/funcionarios', (req,res) =>{
    res.status(200).json(funcionarios); 
})

app.post('/clientes', (req,res) =>{
    clientes.push(req.body)
    res.status(200).send("Cliente cadastrado com sucesso!")
})
//funcionario
app.post('/funcionarios', (req,res) =>{
    funcionarios.push(req.body)
    res.status(200).send("Funcionario cadastrado com sucesso!")
})

export default app
