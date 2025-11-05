// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const adminControllers = require('../controllers/adminControllers')

// ===================== Rutas =====================

// Ruta para crear ROL
router.post('/createRole', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.createRole);
//router.post('/createRole', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.createRole , authMiddleware.BitacoraMiddleware);

// Ruta para listar roles
router.get('/roles', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.roleList);

// Ruta para crear usuario
router.post('/createUser', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.createUser);

// Ruta para eliminar usuario
router.delete('/deleteUser', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.deleteUser);
//router.delete('/deleteUser', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.deleteUser, authMiddleware.BitacoraMiddleware);

// ===================== Exportaciones =====================
module.exports = router;