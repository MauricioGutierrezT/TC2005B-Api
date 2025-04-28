import { pool } from "../database/database.js"

export const getUsers = (req,res) => {
    pool.query('SELECT * from users', (error, results) => {
    if (error) {
        res.status(500).json({msg:error, users: []});
        return;
    }
    res.status(200).json({msg:'ok', users: results});
  }); 
};
export const getUser = (req,res) => {
    const id = req.params.id;
    pool.query('SELECT * from users where id_user = ?', [id], (error, results) => {
    if (error) {
        res.status(500).json({msg:error, user: []});
        return;
    }
    res.status(200).json({msg:'ok', users: results});
  }); 
};
export const postUser = (req,res) => {
  const {username, password, age} = req.body;
  pool.execute("insert into users (username, password, age) values (?,?,?)",
     [username, password, age], 
     (error, results) => {
    if (error) {
        res.status(500).json({msg:error, user: []});
        return;
    }
    res.status(200).json({msg:'ok', users: results});
  }); 
};
export const putUser = (req,res) => {
  const {username, password, age} = req.body;
  pool.execute("update users set username=?, password=?, age=? where id_user = ?",
     [username, password, age, req.params.id], 
     (error, results) => {
    if (error) {
        res.status(500).json({msg:error, user: []});
        return;
    }
    res.status(200).json({msg:'ok', users: results});
  }); 

};
export const deleteUser = (req,res) => {
  
  pool.execute("delete from users where id_user = ?",
     [req.params.id], 
     (error, results) => {
    if (error) {
        res.status(500).json({msg:error, user: []});
        return;
    }
    res.status(200).json({msg:'Deleted user', users: results});
  }); 

};
export const login = (req,res) => {
  const {username, password} = req.body;
  pool.execute("select * from users where username = ?",
     [username], 
     (error, results) => {
    if (error) {
        res.status(500).json({msg:error, user: []});
        return;
    }
    if (results.length < 1){
      res
      .status(401)
      .json({isLogin: false, msg: "Username Invalido", user: {}})
      return;
    }
    if(results[0].password === password){
      res.status(200).json({isLogin: true , msg:'ok', user: results[0].username});
    } else{
      res
      .status(401)
      .json({isLogin: false, msg: "Credenciales Invalidas", user: {}})
    }
   
  }); 
};