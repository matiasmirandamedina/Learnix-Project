// ===================== Importaciones =====================
const { User } = require('../models');

const Userdelete = async(req,res) =>{
    try {
        const id = req.body.id;

        if (!id) {
          return res.status(400).json({ message: 'Debe enviar un ID' });
        }
    
        const result = await User.destroy({
          where: { id: id }
        });
    
        // `destroy` devuelve el número de filas eliminadas
        if (result === 0) {
          return res.status(404).json({ message: 'El ID del usuario no existe' });
        }
    
        res.json({ message: 'Usuario eliminado correctamente' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

module.exports = {
    Userdelete
}