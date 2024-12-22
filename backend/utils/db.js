import mysql from'mysql';  
import dotenv from 'dotenv';
dotenv.config();

const con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

con.connect(function(err) {
    if(err) {
        console.log("connection error",err)
    } else {
        console.log("Connected")
    }
})

export default con;

