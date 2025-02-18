import mySql from 'mysql'
// let mysql = require('mysql')

// creating connection object
const con = mySql.createConnection({
    user: 'root',
    password: 'root',
    host : 'localhost',
    database : "db_weekend"
})

//create connection with mysql

con.connect((error)=>{
    console.log(error?error:"data base connected......")
})
// if error
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';


// create table

// let sql = "CREATE TABLE product_cart(slno INTEGER(3), prod_name VARCHAR(30), price INTEGER(5), quantity INTEGER(2), discount INTEGER(3))"
// con.query(sql,(error)=>{
//     console.log(error?error:"table is created......")
// })

//ADDING DATA TO TABLE

let data = "INSERT INTO product_cart(slno,prod_name,price,quantity,discount) VALUES(1, 'Phone', 15000,3,10)"
con.query(data,(error)=>{
    console.log(error? error:"Data inserted to table...........")
})