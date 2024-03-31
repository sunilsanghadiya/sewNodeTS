import  express from "express";
import { User } from "../models/user.model";

const app = express();

const register = async (req: any, res: any) => {
    try {
        app.post("/auth/register", async () => {
            const user = req.body;
            
            const { name, lastname, email, passowrd  } = user;
            
            //check the email exists in database
            const isEmailExistsInDatabase = await User.findOne({
                email: email
            })

            if(isEmailExistsInDatabase) {
                res.status(400).json({
                    status: 400,
                    message: "This email is an already exists try with diffrent email"
                });
                return;
            }

            //email not exists then create
            const newUser = await User.create({
                name,
                lastname,
                email,
                passowrd
            });

            res.status(200).json({
                status: 201,
                success: true,
                message: "User created successfully",
                user: newUser
            });
        })
    } catch (error: any) {
        console.log(error);
        // Send the error message to the client
        res.status(400).json({
        status: 400,
        message: error.message.toString(),
      });
    }
}

module.exports = register;
