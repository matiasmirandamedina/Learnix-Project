// ===================== Importaciones =====================
const { where } = require('sequelize');
const { Role, User, Course, ClassSection, Subject, ClassSubject, StudentClass, Year } = require('../models');
const bcrypt = require('bcrypt');

// ===================== Controladores =====================

// Registro de profesor
const registerTeacher = async (req, res) => {
    const { name, date_of_birth, phone, cuil, email, password } = req.body;

    try {
        if (!name || !date_of_birth || !phone || !cuil || !email || !password)
            return res.status(400).json({ message: 'Faltan datos obligatorios' });

        if (isNaN(Date.parse(date_of_birth)))
            return res.status(400).json({ message: 'La fecha de nacimiento no es válida' });

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser)
            return res.status(400).json({ message: 'El correo ya está registrado' });

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            role_id: 2,
            name,
            date_of_birth,
            phone,
            cuil,
            email,
            password: passwordHash
        });

        const userData = newUser.toJSON();
        delete userData.password;
        delete userData.tuition;

        res.status(201).json({ message: `Profesor creado correctamente`, user: userData });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};

// Obtener cursos de un profesor
const teacherCourses = async (req, res) => {
    const id = req.user.id;

    if (!id)
        return res.status(404).json({ message: "No hay id registrado" });

    try {
        const courses = await ClassSection.findAll({
            where: { teacher_id: id },
            include: [
                { model: Year, as: "year", attributes: ["name"] },
                { model: Course, as: "course", attributes: ["name"] },
                { model: User, as: "teacher", attributes: ["name"] }
            ]
        });

        if (!courses || courses.length === 0)
            return res.status(404).json('No hay cursos registrados');

        res.json(courses);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Error interno del servidor',
            error: err.message
        });
    }
};

// Ingresar código de curso
const codeCourse = async (req, res) => {
    const id = req.user.id;
    const code = Number(req.body.code);

    if (isNaN(code) || code <= 0)
        return res.status(400).json({ message: "Código inválido" });

    try {
        const course = await ClassSection.findOne({
            where: { code }
        });

        if (!course)
            return res.status(404).json({ message: "No se encontró el curso" });

        if (course.teacher_id)
            return res.status(400).json({ message: "Este curso ya tiene profesor asignado" });

        await course.update({
            teacher_id: id
        });

        return res.json({
            message: "Profesor asignado correctamente",
            course
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Error interno del servidor",
            error: err.message
        });
    }
};

// // Obtener materias de un profesor
// const teacherSubject = async (req, res) => {
//     const { ClassSection_id } = req.params;

//     try {
//         const subjects = await ClassSubject.findAll({
//             where: { class_section_id: ClassSection_id },
//             include: [
//                 { model: Subject, as: 'subject' }
//             ]
//         });

//         if (!subjects)
//             return res.status(400).json('No hay sectiones de materia registrado');

//         if (subjects.length > 1) return res.status(300).json(subjects);

//         res.status(417).json(subjects)
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
//     }
// };

// // Obtener alumnos de la seccion de un profesor
// const teacherStudents = async (req, res) => {
//     const { ClassSection_id } = req.params;

//     try {
//         const Students = await StudentClass.findAll({
//             where: { class_sections_id: ClassSection_id },
//             include: [
//                 { model: User, as: 'student' }
//             ]
//         });

//         if (!Students)
//             return res.status(400).json('No hay estudiantes en la seccion registrados');

//         res.status(417).json(Students)
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
//     }
// };

// ===================== Exportaciones =====================
module.exports = {
    registerTeacher,
    teacherCourses,
    codeCourse
};