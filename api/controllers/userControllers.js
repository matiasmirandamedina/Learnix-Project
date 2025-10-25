// ===================== Importaciones =====================
const { User } = require('../models');

const infoper = async (req,res) => {
    const user = await User.findByPk(req.user.id, {excluide: {
        atributtes: 'password'
    }})
    res.json(user)
}

const Modif_User = async (req,res) => {
    const {name, date_birth, phone, cuil, tuition, email, password} = req.body;
    const cambios = {};
    try {
    if (name) cambios.name = name;
    if (date_birth) cambios.date_of_birth = date_birth;
    if (phone) cambios.phone = phone;
    if (cuil) cambios.cuil = cuil;
    if (tuition) cambios.tuition = tuition;
    if (email) cambios.email = email;
    if (password) cambios.password = password; 
    
    if (Object.keys(cambios).length === 0) {
        return res.json({ message: 'Ingrese al menos un valor a modificar' });
    }

    await User.update(cambios, {
        where: { id: req.user.id }
    });

    res.json({message: 'Se actualizo el usuario'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error interno', error: err });
    }
    
}

module.exports = {
    infoper,
    Modif_User
}