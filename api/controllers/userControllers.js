// ===================== Importaciones =====================
const { User } = require('../models');

// ===================== Controladores =====================

// Información de usuario
const infoUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] }
        });

        if (!user)
            return res.status(404).json({ message: 'Usuario no encontrado' });

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener información del usuario' });
    }
};

// Actualizar usuario
const updateUser = async (req, res) => {
    const { name, date_of_birth, phone, cuil, tuition, email, password } = req.body;
    const changes = {};

    try {
        if (name) changes.name = name;
        if (date_of_birth) changes.date_of_birth = date_of_birth;
        if (phone) changes.phone = phone;
        if (cuil) changes.cuil = cuil;
        if (tuition) changes.tuition = tuition;
        if (email) changes.email = email;
        if (password) changes.password = password;

        if (Object.keys(changes).length === 0)
            return res.json({ message: 'Ingrese al menos un valor a modificar' });

        const [updated] = await User.update(changes, {
            where: { id: req.user.id }
        });

        if (!updated)
            return res.status(404).json({ message: 'Usuario no encontrado' });

        return res.json({ message: 'Se actualizó el usuario correctamente' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err });
    }
};

// ===================== Exportaciones =====================
module.exports = {
    infoUser,
    updateUser
}