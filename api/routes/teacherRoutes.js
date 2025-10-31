// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const teacherControllers = require('../controllers/teacherControllers');

// ===================== Rutas =====================

// Ruta para registro de profe
router.post('/register', teacherControllers.registerTeacher);

// Ruta para obtener cursos
router.post('/courses', teacherControllers.teacherCourses);

// ===================== Exportaciones =====================
module.exports = router;