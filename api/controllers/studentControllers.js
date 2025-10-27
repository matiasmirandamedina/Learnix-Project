// ===================== Importaciones =====================
const { Grade, Subject, ReportCard, Period } = require('../models');

// ===================== Controladores =====================

// Obtener notas de un estudiante
const studentNotes = async (req, res) => {
    const { report_card_id } = req.params;

    try {

        const grades = await Grade.findAll({
            where: { report_card_id: report_card_id },
            include:  [
                { model: Subject, as: 'subject' } 
            ]
        });

        if (!grades) {
            return res.status(404).json({ message: 'No se encontro ninguna nota en el boletin' });
        }

        res.json(grades);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

// Obtener boletines de un estudiante
const studentReports = async (req, res) => {
    const { student_id } = req.params;

    try {

        const report = await ReportCard.findAll({
            where: { student_id: student_id },
            include: [
                { model: Period, as: 'period' } 
            ]
        });

        if (!report) {
            return res.status(404).json({ message: 'No se encontro ninguna nota en el boletin' });
        }

        res.json(report);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

// ===================== Exportaciones =====================
module.exports = {
    studentNotes,
    studentReports
};