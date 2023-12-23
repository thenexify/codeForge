const express = require('express')
const app = express()
const port = 5000
const {engine} = require('express-handlebars')

app.use('/', require('./routes/routers'))
app.use('/static', express.static('static'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(port, () => {
  console.log(`CodeForge on port http://localhost:${port}`);
});