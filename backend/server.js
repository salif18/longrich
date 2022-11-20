//importation du module http
const http =require('http');
const app = require('./app');
const dotenv = require('dotenv');

//configuration
dotenv.config()
app.set(process.env.PORT || 3006)

const server = http.createServer(app);

server.listen(process.env.PORT,()=>{
    console.log('-----> "SERVER EN MARCHE" ')
})