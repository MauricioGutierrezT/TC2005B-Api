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
export const postUser = (req,res) => {};
export const putUser = (req,res) => {};
export const deleteUser = (req,res) => {};
export const login = (req,res) => {};