const express = require('express');
const minhaApi = express();

minhaApi.use(express.json());



const listaReceitas = [
    {
        id : 1,
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
    let receitasInfo = '';

    
    
   
    for(const receitas of listaReceitas){
        receitasInfo += '<p>';
        receitasInfo += "id: "+receitas.id+"<br>";
        receitasInfo += "descrição: "+receitas.descricao+"<br>";
        receitasInfo += "valor: "+receitas.valor+"<br>";
        receitasInfo += "categoria: "+receitas.categoria+"<br>";
        receitasInfo += '</p><br>';
    }
    res.send(receitasInfo);
  
});



// Rota para consulta de um receita pelo código
minhaApi.get('/receitas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = listaReceitas.find(user => user.id === id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).send('Usuário não encontrado.');
    }
});

// Rota para cadastro de uma receita
minhaApi.post('/receitas', (req, res) => {
    const novoReceita = req.body;
    listaReceita.push(novoReceita);
    res.status(201).send();
});


// Rota para atualização de uma receita pelo código
minhaApi.put('/receitas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaReceita.findIndex(receita => receita.id === id);
    if (index !== -1) {
        listaReceita[index] = req.body;
        res.send();
    } else {
        res.status(404).send('Usuário não encontrado.');
    }
});

// Rota para remoção de um receita pelo código
minhaApi.delete('/receitas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaReceita.findIndex(receita => receita.id === id);
    if (index !== -1) {
        listaReceita.splice(index, 1);
        res.send();
    } else {
        res.status(404).send('Usuário não encontrado.');
    }
});







//________________________________________________
//             despesa      
//________________________________________________



minhaApi.listen(4300, () => {
    console.log("API rodando na porta 4300");
});