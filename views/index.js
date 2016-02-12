// npm install express app [on console]

var express = require('express');
var app = express();
var PORT = 3000;

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quick_notes_db'
})

app.get("/", function(req, res){
    connection.query("SELECT * FROM quick_notes", function(err, data){
        if (err) throw err;

        res.render('index', data);
    });
});

app.listen(PORT, function(){
    console.log("running on port %s", PORT);
});

//npm install ?