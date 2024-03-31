// import express from "express";
// const app = express();
// import { User } from "../models/user.model";

// const Register = app.post("/auth/register", async (req, res) => {
//     const user = req.body;
    
//     const { name, lastname, email, passowrd  } = user;
    
//     //check the email exists in database
//     const isEmailExistsInDatabase = await User.findOne({
//         email: email
//     })

//     if(isEmailExistsInDatabase) {
//         res.status(400).json({
//             status: 400,
//             message: "This email is an already exists try with diffrent email"
//         });
//         return;
//     }

//     //email not exists then create
//     const newUser = await User.create({
//         name,
//         lastname,
//         email,
//         passowrd
//     });

//     res.status(200).json({
//         status: 201,
//         success: true,
//         message: "User created successfully",
//         user: newUser
//     });
// })

// module.exports = {
//     Register
// };
