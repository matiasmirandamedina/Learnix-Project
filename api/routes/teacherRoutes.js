// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const teacherControllers = require('../controllers/teacherControllers');

// ===================== Rutas =====================

// Ruta para login de profesor
router.post('/login', teacherControllers.loginTeacher);

// ===================== Exportaciones =====================
module.exports = router;