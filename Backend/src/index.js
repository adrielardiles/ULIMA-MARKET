import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Sequelize, DataTypes } from "sequelize"

const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(cors())

app.use(express.static("assets"))



















app.listen(port, () => {
    console.log("Servidor web iniciado en puerto " + port)
})