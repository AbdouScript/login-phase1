const express = require ('express');
const app = express();
app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' })
});

// API MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));



// API ROUTES
app.get('./register', (req, res) => {

    res.sendFile(__dirname + '../register.html');

})

app.post('/formPost', (req, res) => {
    console.log(req.body);
})

module.exports = app;