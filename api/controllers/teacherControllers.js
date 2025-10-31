// ===================== Importaciones =====================
const { User, Course, ClassSection, Subject, ClassSubject, StudentClass } = require('../models');
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
        const courses = await ClassSection.findAll({
            where: { teacherId:  teacherId}
        });

        if (!courses)
      return res.status(400).json('No hay cursos registrados');

        res.json(courses);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};

// Obtener materias de un profesor
const teacherSubject = async (req, res) => {
    const { ClassSection_id } = req.params;

    try {
        const subjects = await ClassSubject.findAll({
            where: { class_section_id:  ClassSection_id},
            include:  [
                { model: Subject, as: 'subject' } 
            ]
        });

        if (!subjects)
      return res.status(400).json('No hay sectiones de materia registrado');

        if(subjects.length > 1) return res.status(300).json(subjects);

        res.status(417).json(subjects)
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};

// Obtener alumnos de la seccion de un profesor
const teacherStudents = async (req, res) => {
    const { ClassSection_id } = req.params;

    try {
        const Students = await StudentClass.findAll({
            where: { class_sections_id:  ClassSection_id},
            include:  [
                { model: User, as: 'student' } 
            ]
        });

        if (!Students)
      return res.status(400).json('No hay estudiantes en la seccion registrados');

        res.status(417).json(Students)
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