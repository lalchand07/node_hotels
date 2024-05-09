const express = require('express');
const db = require('./db.js')
const Menu = require('./Models/Menu');
const bodyParser = require('body-parser');
const personRoutes = require('./Routes/personRoutes');
const menuRoutes = require('./Routes/menuRoutes');

const app = express();


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to learning...');
});


app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(8085, () => {
    console.log("Server is running on port 8085");
})
