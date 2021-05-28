const express = require('express'); //requiero
const app = express(); //requiero la func de express
const port = 3000;
app.listen(port, () => console.log('Servidor func en puerto 3000'))