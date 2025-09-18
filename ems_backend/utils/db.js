import mysql from 'mysql2'

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql123!@#",
  database: "employeems"
})

con.connect(function(err) {
  if(err) {
    console.log('Connection error', err)
  } else {
    console.log('Connected to MySQL database')
  }
})

export default con;