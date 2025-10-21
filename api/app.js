const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');

//  const appController = require('./controllers/appControllers');

const { db, Role, User, Period, ReportCard, Subject, Grade, Year, Course, ClassSection, ClassSubject, StudentClass, Entity, Action, Permission, RolePermission, Binnacle } = require('./models');

//  const isAuth = require('./middlewares/auth');

//  ==================================================

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.listen(PORT, async () => {
    try {
        await db.sync({ force: false });
        console.log(`El server está corriendo en el puerto ${PORT}.`);
    } catch (err) {
        console.error('Error al sincronizar la base de datos:', err);
    }
});