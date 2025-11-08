// ===================== Importaciones =====================
const { User, Role, Binnacle } = require('../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

// ===================== Middlewares =====================

// Verificación de tokens
async function verifyToken(req, res, next) {
    const token = req.headers.authorization
    if (!token)
        return res.status(400).json({ message: 'No se envió token' });

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) {
            console.log("se fallo el acceso por token");
            return res.status(401).json({ message: 'Token inválido o expirado' });

        }


        const user = await User.findByPk(decoded.id, { include: { model: Role, as: 'role' } });
        if (!user)
            return res.status(404).json({ message: 'Usuario no encontrado' });

        req.user = {
            id: user.id,
            email: user.email,
            role: user.role.name
        }

        next()
    });
}

// Autorización de roles
function authorizeRole(roles = []) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Usuario no autenticado" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Acceso denegado: rol no autorizado" });
        }

        next();
    };
}

async function BitacoraMiddleware(req, res) {
    try {
        //acordions
        //middleware global
        const method = req.method.toLowerCase();
        const table = req.table;
        const facts = req.facts || {};
        const old_value = req.old_value || {};
        const result = req.result || {};

        let payload = {
            table: table,
            created_at: new Date(),
            action: method
        };


        payload.facts = Object.keys(facts).length === 0
            ? JSON.stringify(Object.keys(result))
            : JSON.stringify(Object.keys(facts));

        payload.old_value = (
            method == "put"
                ? JSON.stringify(old_value)
                : method == "delete"
                    ? JSON.stringify(facts)
                    : null
        )

        payload.new_value = (
            method === "put" || method === "post"
                ? JSON.stringify(facts)
                : method === "get"
                    ? JSON.stringify(result)
                    : null
        );

        await Binnacle.create(payload);
        console.log("Insercion en bitacora exitosa");


        return res.json({ message: "Se ejecuto el midd" });

    } catch (err) {
        console.error("Error en bitácora:", err);
        return res.status(500).json({ message: 'Error al registrar bitácora', error: err.message });
    }
}

// ===================== Exportaciones =====================
module.exports = {
    verifyToken,
    authorizeRole,
    BitacoraMiddleware
}