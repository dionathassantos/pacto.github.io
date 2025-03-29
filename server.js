const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('.'));

// Endpoint para atualizar data.json
app.put('/data.json', async (req, res) => {
    try {
        const data = req.body;
        await fs.writeFile('data.json', JSON.stringify(data, null, 2));
        res.json({ success: true });
    } catch (error) {
        console.error('Erro ao salvar data.json:', error);
        res.status(500).json({ error: 'Erro ao salvar alterações' });
    }
});

// Endpoint para ler data.json
app.get('/data.json', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        if (error.code === 'ENOENT') {
            // Se o arquivo não existir, retornar as iniciativas padrão
            res.json({ Iniciativas: [] });
        } else {
            console.error('Erro ao ler data.json:', error);
            res.status(500).json({ error: 'Erro ao ler dados' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 