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

//pagina inicial /
app.get('/', (req,res) => {
    res.status(200).send("Pagina inicial");
})

//consultar cliente
app.get('/clientes', (req,res) =>{
    res.status(200).json(clientes); 
})

//consulta funcionario
app.get('/funcionarios', (req,res) =>{
    res.status(200).json(funcionarios); 
})

//cadastrar cliente
app.post('/clientes', (req,res) =>{
    clientes.push(req.body)
    res.status(200).send("Cliente cadastrado com sucesso!")
})

//casatrar funcionario
app.post('/funcionarios', (req,res) =>{
    funcionarios.push(req.body)
    res.status(200).send("Funcionario cadastrado com sucesso!")
})

//função para realizar a busca por id
function buscarCliente(id){
    return clientes.findIndex(cliente => cliente.id ==id)
}

//função para realizar a busca por id funcionario
function buscarFuncionario(id){
    return funcionarios.findIndex(funcionario => funcionario.id ==id)
}

//consultar cliente por id
app.get('/clientes/:id', (req,res) =>{
    let index = buscarCliente(req.params.id)
    res.json(clientes[index])
})

//consultar funcionarios por id
app.get('/funcionarios/:id', (req,res) =>{
    let index = buscarFuncionario(req.params.id)
    res.json(funcionarios[index])
})

//atualizar os clientes
app.put('/clientes/:id', (req,res) =>{
    let index = buscarCliente(req.params.id)
    clientes[index] = req.body
    res.json(clientes)
})

//atualizar os funcionarios
app.put('/funcionarios/:id', (req,res) =>{
    let index = buscarFuncionario(req.params.id)
    funcionarios[index] = req.body
    res.json(funcionarios)
})

//Excluir cliente por id
app.delete('/clientes/:id',(req,res) =>{
    let index = buscarCliente(req.params.id)
    clientes.splice(index,1)
    res.send("Cliente excluido com sucesso")
})

//Excluir funcionarios por id
app.delete('/funcionarios/:id',(req,res) =>{
    let index = buscarFuncionario(req.params.id)
    res.send("Funcionario excluido com sucesso")
})

export default app
