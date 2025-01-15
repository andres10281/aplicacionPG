// import pool from "../database/db.js";

// // Obtener todas las aerolíneas
// export const getAerolineas = async (req, res) => {
//     try {
//         const result = await pool.query("SELECT * FROM aerolinea");
//         res.json(result.rows);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Crear una nueva aerolínea
// export const createAerolinea = async (req, res) => {
//     const { nombre } = req.body;
//     try {
//         const result = await pool.query(
//             "INSERT INTO aerolinea (nombre) VALUES ($1) RETURNING *",
//             [nombre]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Eliminar una aerolínea
// export const deleteAerolinea = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const result = await pool.query(
//             "DELETE FROM aerolinea WHERE id_aerolinea = $1 RETURNING *",
//             [id]
//         );
//         if (result.rowCount === 0) {
//             return res.status(404).json({ error: "Aerolínea no encontrada" });
//         }
//         res.json({ message: "Aerolínea eliminada correctamente" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };



import pool from "../database/db.js";


export const getAerolineas = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM aerolinea");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const createAerolinea = async (req, res) => {
    const { nombre } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO aerolinea (nombre) VALUES ($1) RETURNING *",
            [nombre]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const deleteAerolinea = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            "DELETE FROM aerolinea WHERE id_aerolinea = $1 RETURNING *",
            [id]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Aerolínea no encontrada" });
        }
        res.json({ message: "Aerolínea eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const updateAerolinea = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    try {
        const result = await pool.query(
            "UPDATE aerolinea SET nombre = $1 WHERE id_aerolinea = $2 RETURNING *",
            [nombre, id]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Aerolínea no encontrada" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
