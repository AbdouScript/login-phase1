var http = require('http');
var fs = require('fs');
const mongoose = require('mongoose');
http.createServer(function(request, response) {  

   fs.readFile('register.html', function (err, html) {
     if (err) {
        throw err; 
     }

    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();  

   });       

})
const server = http.createServer((req, res) => {
    res.end ('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000, () => {
console.log('Server started at 3000');
});


// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://abdou:<password>@cluster-oc.i6au4jw.mongodb.net/?retryWrites=true&w=majority');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
// 	console.log("connection succeeded");
// })

// var app=express()


// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

// app.post('/register', function(req,res){
// 	var name = req.body.name;
// 	var email =req.body.email;
// 	var pass = req.body.password;
// 	var phone =req.body.phone;

// 	var data = {
// 		"name": name,
// 		"email":email,
// 		"password":pass,
// 		"phone":phone
// 	}
// db.collection('details').insertOne(data,function(err, collection){
// 		if (err) throw err;
// 		console.log("Record inserted Successfully");
			
// 	});
		
// 	return res.redirect('../frontend/register.html');
// })


// app.get('/',function(req,res){
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// return res.redirect('../frontend/login.html');
// }).listen(3000)


// console.log("server listening at port 3000");
