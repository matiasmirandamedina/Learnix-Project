// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const adminControllers = require('../controllers/adminControllers')

// ===================== Rutas =====================

router.post('/createRole', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.createRole);
//router.post('/createRole', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.createRole , authMiddleware.BitacoraMiddleware);
router.get('/roles', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.roleList);
router.post('/createUser', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), authMiddleware.checkPermission(1, 1), adminControllers.createUser);
router.delete('/deleteUser', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.deleteUser);
//router.delete('/deleteUser', authMiddleware.verifyToken, authMiddleware.authorizeRole(['admin']), adminControllers.deleteUser, authMiddleware.BitacoraMiddleware);

// ===================== Exportaciones =====================
module.exports = router;