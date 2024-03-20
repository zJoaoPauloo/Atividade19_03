const express = require('express');
const minhaApi = express();

minhaApi.use(express.json());

const listaReceitas = [
  
];

// Rota para consulta de todas as receitas
minhaApi.get('/receitas', (req, res) => {
    let receitasInfo = '';

    for(const receita of listaReceitas){
        receitasInfo += '<p>';
        receitasInfo += "id: "+receita.id+"<br>";
        receitasInfo += "descrição: "+receita.descricao+"<br>";
        receitasInfo += "valor: "+receita.valor+"<br>";
        receitasInfo += "categoria: "+receita.categoria+"<br>";
        receitasInfo += '</p><br>';
    }
    res.send(receitasInfo);
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

// Adiciona uma nova receita
minhaApi.post('/receitas/add', (req, res) => {
    let maiorID = Math.max(...listaReceitas.map(({ id }) => id));
    const objReceita = {
        id: maiorID + 1,
        descricao: req.body.descricao,
        valor: req.body.valor,
        categoria: req.body.categoria
    };
    if (!listaReceitas.length) {
        maiorID = 0;
    }

    listaReceitas.push(objReceita);
    res.send('receita adicionada');
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
 
];

// Rota para consulta de todas as despesas
minhaApi.get('/despesas', (req, res) => {
    let despesasInfo = '';

    for(const despesa of listaDespesas){
        despesasInfo += '<p>';
        despesasInfo += "id: "+despesa.id+"<br>";
        despesasInfo += "descrição: "+despesa.descricao+"<br>";
        despesasInfo += "valor: "+despesa.valor+"<br>";
        despesasInfo += "categoria: "+despesa.categoria+"<br>";
        despesasInfo += '</p><br>';
    }
    res.send(despesasInfo);
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

// Adiciona uma nova despesa
minhaApi.post('/despesas/add', (req, res) => {
    let maiorID = Math.max(...listaDespesas.map(({ id }) => id));
    if (!listaDespesas.length) {
        maiorID = 0;
    }

    const novaDespesa = {
        id: maiorID + 1,
        descricao: req.body.descricao,
        valor: req.body.valor,
        categoria: req.body.categoria
    };
    
    listaDespesas.push(novaDespesa);
    res.send('despesa adicionada');
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
