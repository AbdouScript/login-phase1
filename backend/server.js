const express = require('express');

const app = express();

const mongoose = require('mongoose');

app.use(express.urlencoded());

mongoose.connect("mongodb+srv://abdou:test1234@cluster-oc.i6au4jw.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Schéma de données

const notesSchema = {
    email: String,
    password: String
}

const Note = mongoose.model("Note", notesSchema);

app.get('/', function(request, response, next){

	response.send(`
    <form>
    <h1>login-phase1</h1>
    <div class="inputs">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name = "password" placeholder="Mot de passe">
    </div>

    <p class="inscription"><a href="register.html">Créer un compte</a></p>
    <div align="center">
        <button type="submit">Se connecter</button>
    </div>
</form>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');

h1 {
    text-align: center;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: bisque;
    font-family: 'Work Sans', sans-serif;
}

form {
    margin-top: 20px;
    background-color: #fff;
    padding: 40px 60px;
    border-radius: 10px;
    min-width: 300px;
}

form h1 {
    color: black;
    text-align: center;
}

form .inputs {
    display: flex;
    flex-direction: column;
}

form .inputs input[type="email"], input[type="password"], [type="text"], [type="date"], [type="checkbox"] {
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f2;
    margin-bottom: 15px;
    outline: none;
}

form p.inscription {
    font-size: 14px;
    margin-bottom: 20px;
    color: gray;
}

form p.inscription a {
    color: red;
}

form button {
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    color: black;
    background-color: lightskyblue;
    outline: none;
    cursor: pointer;
}



    </style>
	`);


});

app.post('/', function(request, response, next,){

    let newNote = new Note({
        email: request.body.email,
        password: request.body.password
    });
    newNote.save();
	// response.send(request.body);
    response.redirect("/");

});

app.listen(3000);