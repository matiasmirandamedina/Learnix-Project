// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const userControllers = require('../controllers/userControllers')

// ===================== Rutas =====================

// Ruta para login
router.post('/login', userControllers.login);

// Ruta para información de usuario
router.get('/info', authMiddleware.verifyToken, authMiddleware.authorizeRole(['docente', 'student', 'admin']), userControllers.infoUser);
//router.get('/info', authMiddleware.verifyToken, authMiddleware.authorizeRole(['docente', 'student','admin']), userControllers.infoUser, authMiddleware.BitacoraMiddleware);

// Ruta para actualizar de usuario
router.put('/update', authMiddleware.verifyToken, userControllers.updateUser);
//router.put('/update', authMiddleware.verifyToken, userControllers.updateUser, authMiddleware.BitacoraMiddleware);

// ===================== Exportaciones =====================
module.exports = router;