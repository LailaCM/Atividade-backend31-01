const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/salariofamilia', (req,res)=>{
    const {salario, numFilhos} = req.body;

    if(salario < 2000){
        const salarioFamilia = numFilhos * 45;
        const salarioFinal = salario + salarioFamilia;
        res.json({ salarioFinal: salarioFinal }); 
    } else{
        res.json({ salarioFinal: salario})
    }

})