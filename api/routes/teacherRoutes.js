// ===================== Importaciones =====================
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const teacherControllers = require('../controllers/teacherControllers');

// ===================== Rutas =====================

router.post('/register', teacherControllers.registerTeacher);
router.get('/courses', authMiddleware.verifyToken, authMiddleware.authorizeRole(['teacher']), teacherControllers.teacherCourses);
router.put('/codeCourse', authMiddleware.verifyToken, authMiddleware.authorizeRole(['teacher']), teacherControllers.codeCourse);
router.get('/students/:ClassSection_id', authMiddleware.verifyToken, authMiddleware.authorizeRole(['teacher']), teacherControllers.teacherStudents);
// ===================== Exportaciones =====================
module.exports = router;