// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const userControllers = require('../controllers/userControllers')

// ===================== Rutas =====================

// Ruta para login
router.post('/login', userControllers.login);

// Ruta para información de usuario
router.get('/info', authMiddleware.verifyToken, userControllers.infoUser);
//router.get('/info', authMiddleware.verifyToken,  userControllers.infoUser, authMiddleware.BitacoraMiddleware);

// Ruta para actualizar de usuario
router.put('/update', authMiddleware.verifyToken, userControllers.updateUser);
//router.put('/update', authMiddleware.verifyToken, userControllers.updateUser, authMiddleware.BitacoraMiddleware);
//router.get('/practica', authMiddleware.BitacoraMiddleware);

// ===================== Exportaciones =====================
module.exports = router;