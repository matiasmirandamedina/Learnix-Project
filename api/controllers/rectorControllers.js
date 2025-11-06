const { Op } = require('sequelize');
const { ClassSection, Subject, Period, Permission, ReportCard, User } = require('../models')

//Lista de Cursos
const ClassSection_List = async (req, res) => {
    try {
        const cursos = await ClassSection.findAll();

        if (!cursos)
            return res.status(400).json('No hay roles registrados');

        res.status(200).json(cursos);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

//Lista de materias
const Subject_List = async (req, res) => {
    try {
        const materias = await Subject.findAll();

        if (!materias)
            return res.status(400).json('No hay roles registrados');

        res.status(200).json(materias);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

//Lista de bimestres
const Period_List = async (req, res) => {
    try {
        const bimestres = await Period.findAll();

        if (!bimestres)
            return res.status(400).json('No hay roles registrados');

        res.status(200).json(bimestres);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

//Lista de permisos
const Permission_List = async (req, res) => {
    try {
        const permisos = await Permission.findAll();

        if (!permisos)
            return res.status(400).json('No hay roles registrados');

        res.status(200).json(permisos);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

//Lista de boletines
const ReportCard_List = async (req, res) => {
    try {
        const boletines = await ReportCard.findAll();

        if (!boletines)
            return res.status(400).json('No hay roles registrados');

        res.status(200).json(boletines);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

//Lista de Usuarios
const User_List = async (req, res) => {
    try {
        const boletines = await User.findAll({
            where: {
                role_id: {
                    [Op.ne]: 1
                }
            }
        });

        if (!boletines)
            return res.status(400).json('No hay roles registrados');

        res.status(200).json(boletines);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
}

module.exports = {
    ClassSection_List,
    Subject_List,
    Period_List,
    Permission_List,
    ReportCard_List,
    User_List
}