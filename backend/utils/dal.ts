import mysql from "mysql";
import config from "./config";

let connection = <mysql.Pool>{};
//creating a connection object
try{
  connection = mysql.createPool({
    host: config.mysqlHost,
    user: config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatabase,
  });
  console.log("we are connected to mysql server");
} catch (e) {
  console.log("failed to connect to mysql server" + e);
}
function execute(sql: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    //execute the sql query in sql server
    connection.query(sql, (err, result) => {
      //query => SELECT * FROM table
      //if there is an error
      if (err) {
        reject(err);
        return;
      }

      //no error - report data:
      resolve(result);
    });
  });
}

export default { execute };
