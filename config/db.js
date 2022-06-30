// here we import the mariadb
import mariadb from "mariadb";
import dotenv from "dotenv";

// here we are exposing the ability to creating new connections
dotenv.config();

var conndb = await mariadb
  .createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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
