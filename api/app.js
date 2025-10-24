// ===================== Importaciones =====================
const express = require('express');
const cors = require('cors');

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