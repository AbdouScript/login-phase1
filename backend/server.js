// const http = require('http');
// const app = require('./app');
// app.set('port', process.env.PORT || 3000);

// const server = http.createServer((req, res) => {
//     res.end ('Voilà la réponse du serveur !');
// });

// server.listen(process.env.PORT || 3000, () => {
//     console.log('Server started at 3000');
//    });

const express = require ('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb+srv://abdou:test1234@cluster-oc.i6au4jw.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



// Create a data  schema

const notesSchema = {
    nom: String,
    prenom: String,
    email: String,
    password: String,
    date: Date,
}


const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/register.html");
})

app.post("/", function(req, res) {
    let newNote = new Note({
        nom: req.body.nom,
        prenom: req.body.prenom,
        password: req.body.password,
        date: req.body.date
    });
    newNote.save();
})

// app.post

app.listen(3000, function() {
    console.log("server is running on 3000");
})
