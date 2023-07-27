import mysql from 'mysql2'
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
   database:'simple_database'
  });


export default db