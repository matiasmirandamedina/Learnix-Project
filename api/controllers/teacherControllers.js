const { Course, ClassSection, Subject } = require('../models');

// Ejemplo: cursos de profesor
const teacherCourses = async (req, res) => {
    const { teacherId } = req.params;
    try {
        const courses = await Course.findAll({
            where: { teacherId },
            include: [ClassSection, Subject]
        });
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error interno', error: err });
    }
};

module.exports = {
    teacherCourses
};