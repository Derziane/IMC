import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/res-imc", (req, res) => {
    const peso = req.query.pesoUser;
    const altura = req.query.alturaUser;

    res.redirect(`/resultado.html?peso=${peso}&altura=${altura}`);
});

app.listen(8000, () => {
    console.log("Servidor respondendo na porta 8000!");
});