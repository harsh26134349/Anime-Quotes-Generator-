import express from 'express';

const app=express();
const port=3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const response = await fetch('https://api.animechan.io/v1/quotes/random');
    const quote = await response.json();
    res.render("./index.ejs", {quote});//
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});