const express = require("express");
const ErrorHandling = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");




app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true,limit:"7000mb"}));
app.use("/", express.static("uploads"));


//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//Import router
const user=require("./controller/user");

app.use("/api/v2/user",user);

app.use(ErrorHandling);

module.exports = app;