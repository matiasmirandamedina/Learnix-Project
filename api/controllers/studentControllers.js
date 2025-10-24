const { Grade, Subject, Course } = require('../models');

// Ejemplo: notas de estudiante
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

module.exports = {
    studentNotes
};