import  express, { Request, Response }  from "express";
import cors  from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json());
dotenv.config();

app.get("/", (req: any, res: any) => {
    if(res) {
        res.send("Hello world");
    }
});

app.listen(PORT, async () => {
    console.log(`Express Server Is Running And Started On http://localhost:${PORT} Successfully`);
    try {
        await mongoose.connect(process.env.DB_URL as string)
        console.log("Database Connected Successfully.")
    }catch (error: any) {
        console.log(error);
    }
});

//health check route
app.get("/health-check", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is up and running Health is great." });
});

