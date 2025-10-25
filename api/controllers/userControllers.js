// ===================== Importaciones =====================
const { User } = require('../models');

const infoper = async (req,res) => {
    const user = await User.findByPk(req.user.id, {excluide: {
        atributtes: 'password'
    }})
    res.json(user)
}

module.exports = {
    infoper
}