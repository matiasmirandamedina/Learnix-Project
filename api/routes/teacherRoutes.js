// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const teacherControllers = require('../controllers/teacherControllers');

// ===================== Rutas =====================

// Ruta para registro de profe
router.post('/register', teacherControllers.registerTeacher);

// ===================== Exportaciones =====================
module.exports = router;