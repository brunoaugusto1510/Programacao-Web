import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
   return res.send('<h1>Seja bem-vindo a fatec itapetininga, jovem!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});