// here we import the mariadb
import mariadb from "mariadb";
import dotenv from "dotenv";

// here we are exposing the ability to creating new connections
dotenv.config();

var conndb = await mariadb
  .createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .then((conn) => {
    console.log("MariaDB connected");
    return conn;
  })
  .catch((e) => {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  });

export default conndb;
