// ===================== Importaciones =====================
const { User, Role } = require('../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

// ===================== Middlewares =====================

// Verificación de tokens
async function verifyToken(req, res, next) {
    const token = req.headers.authorization
    if (!token)
        return res.status(400).json({ message: 'No se envió token' });

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err){
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

// async function BitacoraMiddleware(req, res) {
//     try {
//       const result = req.result; 
//       const method = req.method.toLowerCase();
//       let action;

//       if (method === "post") action = 1;
//       if (method === "get") action = 2;
//       if (method === "put") action = 3;
//       if (method === "delete") action = 4;
  
  
//       return res.status(200).json(result);
  
//     } catch (err) {
//       console.error("Error en bitácora:", err);
//       return res.status(500).json({ message: 'Error al registrar bitácora', error: err.message });
//     }
//   }
// ===================== Exportaciones =====================
module.exports = {
    verifyToken,
    authorizeRole
}