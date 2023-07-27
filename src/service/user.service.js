import db from "../configs/db.config.js";
export const getAllUser = () => {
  const q = "SELECT * FROM users";
  return new Promise((resolve, reject) => {
    db.query(q, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
export const findById = (id)=>{
    const q = `SELECT * FROM users WHERE id ='${id}'`
    return new Promise((resolve, reject) => {
        db.query(q, (err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
export const findByUsername = (username)=>{
    const q = `SELECT * FROM users WHERE username ='${username}'`
    return new Promise((resolve, reject) => {
        db.query(q, (err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
export const findByEmail = (email)=>{
    const q = `SELECT * FROM users WHERE email ='${email}'`
    return new Promise((resolve, reject) => {
        db.query(q, (err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

export const register = (newUser)=>{
    const q= 'INSERT INTO users ( `fullName`, `username`, `email`, `password`, `role`) VALUE (?)'
    return new Promise((resolve, reject) => {
        db.query(q,[[newUser.fullName,newUser.username,newUser.email,newUser.password,newUser.role]], (err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

export const updateUser= (userUpdate,id)=>{
    Object.keys(userUpdate).forEach(key=>{
        if (!userUpdate[key]) delete userUpdate[key]
    })
    const q = "UPDATE users SET ? WHERE `id` = ?";  
    return new Promise((resolve, reject) => {
        db.query(q,[userUpdate,id],(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

export const deleteUser = (id)=>{
    const q= "DELETE FROM users WHERE id =?"
    return new Promise((resolve, reject) => {
        db.query(q,[id],(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}