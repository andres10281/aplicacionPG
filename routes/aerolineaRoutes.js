

import { Router } from "express";
import {
    getAerolineas,
    createAerolinea,
    deleteAerolinea,
    updateAerolinea, 
} from "../controllers/aerolineaController.js";

const router = Router();


router.get("/", getAerolineas);


router.post("/", createAerolinea);


router.delete("/:id", deleteAerolinea);


router.put("/:id", updateAerolinea); 

export default router;

