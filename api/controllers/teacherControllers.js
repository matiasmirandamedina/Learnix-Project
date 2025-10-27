// ===================== Importaciones =====================
const { User, Course, ClassSection, Subject } = require('../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

// ===================== Controladores =====================

// Login de profesor
const loginTeacher = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user)
            return res.status(404).json({ message: 'Usuario no encontrado' });

        if (user.password !== password)
            return res.status(401).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, role: user.role });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};

// Registro de profesor
const registerTeacher = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser)
            return res.status(400).json({ message: 'El correo ya está registrado' });

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
    loginTeacher,
    registerTeacher,
    teacherCourses
};