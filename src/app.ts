import  express  from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: any, res: any) => {
    if(res) {
        res.send("Hello world");
    }
});

app.listen(PORT, () => {
    return console.log(`Express server is running and started on http://localhost:${PORT} Successfully`);
});

