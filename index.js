const express = require('express');
const minhaApi = express();

minhaApi.use(express.json());

const listaReceitas = [
    {
        id: 1,
        descricao: 'salario',
        valor: 'Responsável pelo desenvolvimento de software.',
        categoria: 'Trabalho fixo'
    },
    {
        id: 2,
        descricao: 'extras',
        valor: 'Responsável pelo desenvolvimento de software.',
        categoria: 'motoboy'
    },
    {
        id: 3,
        descricao: 'venda',
        valor: 'Responsável pelo desenvolvimento de software.',
        categoria: 'vendas de camisas'
    }
];

// Rota para consulta de todas as receitas
minhaApi.get('/receitas', (req, res) => {
    res.json(listaReceitas);
});

// Rota para consulta de uma receita pelo código
minhaApi.get('/receitas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const receita = listaReceitas.find(item => item.id === id);
    if (receita) {
        res.json(receita);
    } else {
        res.status(404).send('Receita não encontrada.');
    }
});

// Rota para cadastro de uma receita
minhaApi.post('/receitas', (req, res) => {
    const novaReceita = req.body;
    listaReceitas.push(novaReceita);
    res.status(201).send();
});

// Rota para atualização de uma receita pelo código
minhaApi.put('/receitas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaReceitas.findIndex(receita => receita.id === id);
    if (index !== -1) {
        listaReceitas[index] = req.body;
        res.send();
    } else {
        res.status(404).send('Receita não encontrada.');
    }
});

// Rota para remoção de uma receita pelo código
minhaApi.delete('/receitas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaReceitas.findIndex(receita => receita.id === id);
    if (index !== -1) {
        listaReceitas.splice(index, 1);
        res.send();
    } else {
        res.status(404).send('Receita não encontrada.');
    }
});

//________________________________________________
//             Despesas      
//________________________________________________

const listaDespesas = [
    {
        id: 1,
        descricao: 'aluguel',
        valor: 1000,
        categoria: 'Moradia'
    },
    {
        id: 2,
        descricao: 'compras',
        valor: 500,
        categoria: 'Alimentação'
    }
];

// Rota para consulta de todas as despesas
minhaApi.get('/despesas', (req, res) => {
    res.json(listaDespesas);
});

// Rota para consulta de uma despesa pelo código
minhaApi.get('/despesas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const despesa = listaDespesas.find(item => item.id === id);
    if (despesa) {
        res.json(despesa);
    } else {
        res.status(404).send('Despesa não encontrada.');
    }
});

// Rota para cadastro de uma despesa
minhaApi.post('/despesas', (req, res) => {
    const novaDespesa = req.body;
    listaDespesas.push(novaDespesa);
    res.status(201).send();
});

// Rota para atualização de uma despesa pelo código
minhaApi.put('/despesas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaDespesas.findIndex(despesa => despesa.id === id);
    if (index !== -1) {
        listaDespesas[index] = req.body;
        res.send();
    } else {
        res.status(404).send('Despesa não encontrada.');
    }
});

// Rota para remoção de uma despesa pelo código
minhaApi.delete('/despesas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaDespesas.findIndex(despesa => despesa.id === id);
    if (index !== -1) {
        listaDespesas.splice(index, 1);
        res.send();
    } else {
        res.status(404).send('Despesa não encontrada.');
    }
});

minhaApi.listen(4300, () => {
    console.log("API rodando na porta 4300");
});
