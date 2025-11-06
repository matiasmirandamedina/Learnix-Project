// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const adminControllers = require('../controllers/rectorControllers')

//Ruta para obtener cursos
router.get('/class_section', authMiddleware.verifyToken, authMiddleware.authorizeRole(['rector']), adminControllers.ClassSection_List);

//Ruta para obtener materias
router.get('/subjects', authMiddleware.verifyToken, authMiddleware.authorizeRole(['rector']), adminControllers.Subject_List);

//Ruta para obtener bimestres
router.get('/periods', authMiddleware.verifyToken, authMiddleware.authorizeRole(['rector']), adminControllers.Period_List);

//Ruta para obtener permisos
router.get('/permission', authMiddleware.verifyToken, authMiddleware.authorizeRole(['rector']), adminControllers.Permission_List);

//Ruta para obtener boletines
router.get('/report_card', authMiddleware.verifyToken, authMiddleware.authorizeRole(['rector']), adminControllers.ReportCard_List);

//Ruta para obtener usuarios excepto admin
router.get('/users', authMiddleware.verifyToken, authMiddleware.authorizeRole(['rector']), adminControllers.User_List);

module.exports = router;