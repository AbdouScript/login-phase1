const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB)
    } catch (error) {
        console.log(error);
        console.log("impossible de se connecter à la base donnée");
    }
}