const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const indexRouter = require('./routes/index.routes');

app.use(express.static(path.join(__dirname, 'public')));

/* settings view engine */
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/',indexRouter);

app.listen(PORT, console.log(`Server running in http://localhost:${PORT}`))
