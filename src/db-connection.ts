import * as mysql from "mysql2";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

const dbConnection: mysql.Connection = mysql.createConnection(dbConfig);

dbConnection.connect(err => {
  if (err) throw err;
  console.log(`Mysql connected. ${dbConfig.host}`);
});

export default dbConnection;