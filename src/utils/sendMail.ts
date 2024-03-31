import nodemailer from "nodemailer";
import APIError from "./errors";

const sendMail = async (mailOptions: any) => {
    const transporter = await nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    await transporter.sendMail(mailOptions, (error: any, info: any) => {
        if(error) {
            console.log("error while sending email: ", error);
            throw new APIError("Mail not send");
        }
        console.log("info: ", info);
        return true;

    })
} 

module.exports = sendMail;
