// ===================== Importaciones =====================
const { User, Course, ClassSection, Subject } = require('../models');
const bcrypt = require('bcrypt');

// ===================== Controladores =====================

// Registro de profesor
const registerTeacher = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser)
            return res.status(400).json({ message: 'El correo ya está registrado' });

        if (password) changes.password = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password,
            role: 'profesor'
        });

        res.status(201).json({ message: 'Profesor registrado', user: newUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};

// Obtener cursos de un profesor
const teacherCourses = async (req, res) => {
    const { teacherId } = req.params;

    try {
        const courses = await Course.findAll({
            where: { teacherId },
            include: [ClassSection, Subject] // Incluye secciones y asignaturas relacionadas
        });
        res.json(courses);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};

// ===================== Exportaciones =====================
module.exports = {
    registerTeacher,
    teacherCourses
};