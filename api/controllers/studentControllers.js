// ===================== Importaciones =====================
const { Grade, Subject, Course } = require('../models');

// ===================== Controladores =====================

// Obtener notas de un estudiante
const studentNotes = async (req, res) => {
    const { studentId } = req.params;

    try {
        const grades = await Grade.findAll({
            where: { studentId },
            include: [Subject, Course]
        });
        res.json(grades);
    } catch (err) {
        res.status(500).json({ message: 'Error interno', error: err });
    }
};

// ===================== Exportaciones =====================
module.exports = {
    studentNotes
};