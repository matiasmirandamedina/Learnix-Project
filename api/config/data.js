// ===================== Importaciones =====================
const {
    Role,
    User,
    Period,
    Subject,
    Year,
    Course,
    ClassSection,
    ClassSubject,
    StudentClass,
    ReportCard,
    Grade,
    Entity,
    Action,
    Permission,
    RolePermission,
    Binnacle
} = require('../models');
const bcrypt = require('bcrypt');

// ===================== Seeder =====================
async function seedDatabase() {
    try {
        console.log('🌱 Iniciando carga de datos de prueba...');

        // === 1. ROLES ===
        const roleNames = ['admin', 'teacher', 'rector', 'student'];
        const roles = {};

        for (const name of roleNames) {
            const [role] = await Role.findOrCreate({ where: { name } });
            roles[name] = role;
        }

        // === 2. USUARIOS ===
        const usersData = [
            {
                role: 'admin',
                name: 'Administrador General',
                email: 'admin@learnix.com',
                password: await bcrypt.hash('admin123', 10),
                date_of_birth: '1980-01-01',
                phone: '1111111111',
                cuil: '20111111111',
                tuition: 1000
            },
            {
                role: 'rector',
                name: 'Rector Principal',
                email: 'rector@learnix.com',
                password: await bcrypt.hash('rector123', 10),
                date_of_birth: '1975-06-15',
                phone: '2222222222',
                cuil: '20222222222',
                tuition: 2000
            },
            {
                role: 'teacher',
                name: 'Profesor García',
                email: 'teacher@learnix.com',
                password: await bcrypt.hash('teacher123', 10),
                date_of_birth: '1990-03-21',
                phone: '3333333333',
                cuil: '20333333333',
                tuition: 3000
            },
            {
                role: 'student',
                name: 'Alumno Pérez',
                email: 'student@learnix.com',
                password: await bcrypt.hash('student123', 10),
                date_of_birth: '2008-09-10',
                phone: '4444444444',
                cuil: '20444444444',
                tuition: 4000
            }
        ];

        const users = {};
        for (const u of usersData) {
            const { role, ...userData } = u; // saca 'role' de u
            const [user] = await User.findOrCreate({
                where: { email: u.email },
                defaults: {
                    role_id: roles[role].id,
                    ...userData
                }
            });
            users[role] = user;
        }

        // === 3. PERIODOS ===
        const periodsData = [
            { name: 'Primer Trimestre', date_init: '2025-03-01', date_end: '2025-05-31' },
            { name: 'Segundo Trimestre', date_init: '2025-06-01', date_end: '2025-08-31' },
            { name: 'Tercer Trimestre', date_init: '2025-09-01', date_end: '2025-11-30' }
        ];
        for (const p of periodsData) await Period.findOrCreate({ where: { name: p.name }, defaults: p });

        // === 4. MATERIAS ===
        const subjectNames = ['Matemática', 'Lengua', 'Historia', 'Ciencias Naturales', 'Educación Física'];
        const subjects = {};
        for (const s of subjectNames) {
            const [subject] = await Subject.findOrCreate({ where: { name: s } });
            subjects[s] = subject;
        }

        // === 5. AÑOS ESCOLARES ===
        const yearNames = ['1er Año', '2do Año', '3er Año'];
        const years = {};
        for (const y of yearNames) {
            const [year] = await Year.findOrCreate({ where: { name: y } });
            years[y] = year;
        }

        // === 6. CURSOS ===
        const courseNames = ['A', 'B'];
        const courses = {};
        for (const c of courseNames) {
            const [course] = await Course.findOrCreate({ where: { name: c } });
            courses[c] = course;
        }

        // === 7. SECCIONES DE CLASE ===
        const [classSection] = await ClassSection.findOrCreate({
            where: { name: '1A' },
            defaults: {
                year_id: years['1er Año'].id,
                courses_id: courses['A'].id,
                teacher_id: users['teacher'].id,
                code: 101
            }
        });

        // === 8. RELACIÓN CLASES ↔ MATERIAS ===
        for (const s of Object.values(subjects)) {
            await ClassSubject.findOrCreate({
                where: {
                    class_section_id: classSection.id,
                    subject_id: s.id
                }
            });
        }

        // === 9. RELACIÓN ESTUDIANTE ↔ CLASE ===
        const [studentClass] = await StudentClass.findOrCreate({
            where: {
                student_id: users['student'].id,
                class_sections_id: classSection.id
            }
        });

        // === 10. BOLETINES ===
        const period = await Period.findOne();
        const [reportCard] = await ReportCard.findOrCreate({
            where: {
                student_id: users['student'].id,
                period_id: period.id
            }
        });

        // === 11. CALIFICACIONES ===
        for (const s of Object.values(subjects)) {
            await Grade.findOrCreate({
                where: {
                    subject_id: s.id,
                    report_card_id: reportCard.id
                },
                defaults: {
                    grade_value: Math.floor(Math.random() * 10) + 1,
                    comment: 'Desempeño satisfactorio'
                }
            });
        }

        // === 12. ENTIDADES, ACCIONES, PERMISOS, ROLES ===
        const entities = ['users', 'grades', 'report_cards', 'subjects'];
        const actions = ['create', 'read', 'update', 'delete'];

        const entityRecords = {};
        for (const e of entities) {
            const [entity] = await Entity.findOrCreate({ where: { name: e } });
            entityRecords[e] = entity;
        }

        const actionRecords = {};
        for (const a of actions) {
            const [action] = await Action.findOrCreate({ where: { name: a } });
            actionRecords[a] = action;
        }

        for (const e of entities) {
            for (const a of actions) {
                const [permission] = await Permission.findOrCreate({
                    where: { entity_id: entityRecords[e].id, action_id: actionRecords[a].id }
                });

                // Solo admin y rector tienen todos los permisos
                await RolePermission.findOrCreate({ where: { role_id: roles['admin'].id, permission_id: permission.id } });
                await RolePermission.findOrCreate({ where: { role_id: roles['rector'].id, permission_id: permission.id } });
            }
        }

        // === 13. BITÁCORA (BINNACLES) ===
        await Binnacle.findOrCreate({
            where: { id: 1 },
            defaults: {
                action_id: actionRecords['create'].id,
                fact: 1,
                old_value: null,
                new_value: 'Base de datos inicializada',
                created_at: new Date()
            }
        });

        console.log('Datos de prueba creados exitosamente.');

    } catch (error) {
        console.error('Error al insertar datos de prueba:', error);
    }
}

module.exports = seedDatabase;