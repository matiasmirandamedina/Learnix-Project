// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const userControllers = require('../controllers/userControllers')

// ===================== Rutas =====================

// Ruta para información de usuario
router.get('/info', authMiddleware.verifyToken, authMiddleware.authorizeRole(['docente', 'estudiante']), userControllers.infoUser);

// Ruta para actualizar de usuario
router.put('/update', authMiddleware.verifyToken, userControllers.updateUser);

// ===================== Exportaciones =====================
module.exports = router;