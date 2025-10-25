// ===================== Importaciones =====================
const { User, Role } = require('../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

function desencript(req, res, next) {
    const token = req.headers.authorization
    if(!token) res.status(400).json('No se mando nada como token')
    
    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Error al acceder' })

        const user = await User.findByPk(decoded.id, {include: { model: Role, as: 'role' }})

        req.user = {
            id: user.id,
            email: user.email,
            role: user.role.name
        }
        next()
    });
}

function Rol(roles = []){ return (req, res, next) => {

    if (!req.user) {
        return res.status(401).json({ message: "Usuario no autenticado" });
    }

    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Acceso denegado" });
    }
    next();
}}

module.exports ={
    desencript,
    Rol
}