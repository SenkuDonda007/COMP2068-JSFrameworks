const express = require('express');
const app = express();
var handlebars = require('express-handlebars');

// setup view engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// static files
app.use(express.static(__dirname + '/public'));

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Het Kevadiya - Portfolio' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
