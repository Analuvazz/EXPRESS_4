//como carregar a do mysql através de arquivo externo

const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')

//const mysql_config = require('./mysql_config')

const app = express()
app.listen(3000,()=>{
console.log("Servidor em execução")
})

const connecetion = mysql.createConnection(mysql_config)
