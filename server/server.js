const express = require("express");
const crypto = require('crypto');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 3000;
const path = require('path');
const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/dist/browser')));
app.use(express.urlencoded({ extended: true }));
const user = {
    username: 'admin',
    password: 'admin',
    email: 'admin@secret.com'
}

let csrfToken = '';

app.use((req, res, next) => {
    if (!req.cookies['XSRF-TOKEN']) {
        // Erzeugung eines zufälligen Tokens
        const token = crypto.randomBytes(24).toString('hex');
        // Speicherung des Tokens in einem Cookie
        csrfToken = token;
        res.cookie('XSRF-TOKEN', token);
    }
    next();
});

// Alle Anfragen an die Angular App umleiten
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'browser', 'index.html'));
});

app.get('/api/profile', function (req, res) {
    res.json(user);
});


app.post('/api/profile', function (req, res) {
    const cookie = req.cookies["XSRF-TOKEN"];
    if (req.headers["x-xsrf-token"] !== cookie) {
      res.status(403).send({ text: "Invalid CSRF Token" });
      return;
    }
    
        user.username = req.body.username || user.username,
        user.password = req.body.password || user.password,
        user.email = req.body.email || user.email

    res.send({ text: `Post Request Successfully`});
});

app.post('/login', function (req, res) {
    res.send({ text: `Login Successfully`});
});


app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
