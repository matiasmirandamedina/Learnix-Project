// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const teacherControllers = require('../controllers/teacherControllers');

// ===================== Rutas =====================

// Ruta para registro de profe
router.post('/register', teacherControllers.registerTeacher);

// Ruta para obtener cursos
router.get('/courses', authMiddleware.verifyToken, authMiddleware.authorizeRole(['teacher']), teacherControllers.teacherCourses);

// ===================== Exportaciones =====================
module.exports = router;