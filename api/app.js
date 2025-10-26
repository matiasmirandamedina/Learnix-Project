// ===================== Importaciones =====================
const express = require('express');
const cors = require('cors');
const {desencript, Rol} = require('./controllers/middleware')
const {infoper, Modif_User} = require('./controllers/userControllers')
const {Userdelete} = require('./controllers/adminControllers')

// Importar rutas
const teacherRoutes = require('./routes/teacherRoutes');

// Importar modelos y base de datos
const { db, Role, User, Period, ReportCard, Subject, Grade, Year, Course, ClassSection, ClassSubject, StudentClass, Entity, Action, Permission, RolePermission, Binnacle } = require('./models');

// ===================== Configuración del servidor =====================
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// ===================== Rutas =====================
app.use('/api/teacher', teacherRoutes);

//Prueba de control de Roles
//app.get('/infoper', desencript, Rol(['docente', 'estudiante']) ,infoper);

//prueba de modificacion de usuarios
//app.put('/modif', desencript, Modif_User);

// Prueba de eliminacion de usuarios
//app.delete('/delete', desencript, Rol(['admin']) , Userdelete);

// ===================== Inicialización =====================
app.listen(PORT, async () => {
    try {
        // Sincronizar base de datos
        await db.sync({ force: false });
        console.log(`Servidor corriendo en el puerto ${PORT}.`);
    } catch (err) {
        console.error('Error al sincronizar la base de datos:', err);
    }
});