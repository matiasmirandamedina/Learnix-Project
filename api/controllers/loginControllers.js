const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

const loginTeacher = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        // Aquí se compararía la contraseña con bcrypt si estuviera encriptada
        if (user.password !== password) return res.status(401).json({ message: 'Contraseña incorrecta' });

        // Crear token JWT
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, role: user.role });
    } catch (err) {
        res.status(500).json({ message: 'Error interno', error: err });
    }
};

module.exports = {
    loginTeacher
};