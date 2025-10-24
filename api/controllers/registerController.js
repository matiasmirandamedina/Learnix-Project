const { User } = require('../models');

const registerTeacher = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar que no exista el correo
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'El correo ya está registrado' });

        const newUser = await User.create({
            name,
            email,
            password, // luego encriptar con bcrypt
            role: 'profesor'
        });

        res.status(201).json({ message: 'Profesor registrado', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Error interno', error: err });
    }
};

module.exports = {
    registerTeacher
};