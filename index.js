import express from "express";
import "dotenv/config";
import indexRoutes from "./routes/index.routes.js";
import { pool } from "./database/database.js";
import usersRoutes from "./routes/users.routes.js";
//console.log(process.env.HOST);
/* pool.query('SELECT * from users', (error, results) => {
    if (error) throw error;
    console.log('The solution is: ', results)
  }); */
const app = express();
app.use(express.json())
app.use(indexRoutes);
app.use(usersRoutes);

const port = 5000;
app.listen(port,console.log("http://localhost:"+port));
