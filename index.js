import express from "express";
import path from "path";
import cors from "cors";
import aerolineaRoutes from "./routes/aerolineaRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/aerolineas", aerolineaRoutes);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "aerolineas.html"));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
