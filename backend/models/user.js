const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema( {
    prenom: {type: String, required: true},
    nom: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this_id}, process.env.JWTPRIVATEKEY, {expiresin: "7d"});
    return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = joi.object({
        prenom: joi.string().required().label("Prénom"),
        nom: joi.string().required().label("Nom"),
        email: joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Mot de passe"),
    });
    return schema.validate(data)
};

module.exports = {User, validate};