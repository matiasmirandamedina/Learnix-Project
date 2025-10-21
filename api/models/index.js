const db = require('../config/db');

const Role = require('./Role');
const User = require('./User');
const Period = require('./Period');
const ReportCard = require('./ReportCard');
const Subject = require('./Subject');
const Grade = require('./Grade');
const Year = require('./Year');
const Course = require('./Course');
const ClassSection = require('./ClassSection');
const ClassSubject = require('./ClassSubject');
const StudentClass = require('./StudentClass');
const Entity = require('./Entity');
const Action = require('./Action');
const Permission = require('./Permission');
const RolePermission = require('./RolePermission');
const Binnacle = require('./Binnacle');

// ==================== Relaciones ====================

// Roles y Users
Role.hasMany(User, { foreignKey: 'role_id', as: 'users' });
User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });

// ReportCards
User.hasMany(ReportCard, { foreignKey: 'student_id', as: 'report_cards' });
ReportCard.belongsTo(User, { foreignKey: 'student_id', as: 'student' });

Period.hasMany(ReportCard, { foreignKey: 'period_id', as: 'report_cards' });
ReportCard.belongsTo(Period, { foreignKey: 'period_id', as: 'period' });

// Grades
Subject.hasMany(Grade, { foreignKey: 'subject_id', as: 'grades' });
Grade.belongsTo(Subject, { foreignKey: 'subject_id', as: 'subject' });

ReportCard.hasMany(Grade, { foreignKey: 'report_card_id', as: 'grades' });
Grade.belongsTo(ReportCard, { foreignKey: 'report_card_id', as: 'report_card' });

// ClassSections
Year.hasMany(ClassSection, { foreignKey: 'year_id', as: 'class_sections' });
ClassSection.belongsTo(Year, { foreignKey: 'year_id', as: 'year' });

Course.hasMany(ClassSection, { foreignKey: 'courses_id', as: 'class_sections' });
ClassSection.belongsTo(Course, { foreignKey: 'courses_id', as: 'course' });

User.hasMany(ClassSection, { foreignKey: 'teacher_id', as: 'teaching_sections' });
ClassSection.belongsTo(User, { foreignKey: 'teacher_id', as: 'teacher' });

// ClassSubjects
ClassSection.hasMany(ClassSubject, { foreignKey: 'class_section_id', as: 'class_subjects' });
ClassSubject.belongsTo(ClassSection, { foreignKey: 'class_section_id', as: 'class_section' });

Subject.hasMany(ClassSubject, { foreignKey: 'subject_id', as: 'class_subjects' });
ClassSubject.belongsTo(Subject, { foreignKey: 'subject_id', as: 'subject' });

// StudentClass
User.hasMany(StudentClass, { foreignKey: 'student_id', as: 'student_classes' });
StudentClass.belongsTo(User, { foreignKey: 'student_id', as: 'student' });

ClassSection.hasMany(StudentClass, { foreignKey: 'class_sections_id', as: 'student_classes' });
StudentClass.belongsTo(ClassSection, { foreignKey: 'class_sections_id', as: 'class_section' });

// Permissions
Entity.hasMany(Permission, { foreignKey: 'entity_id', as: 'permissions' });
Permission.belongsTo(Entity, { foreignKey: 'entity_id', as: 'entity' });

Action.hasMany(Permission, { foreignKey: 'action_id', as: 'permissions' });
Permission.belongsTo(Action, { foreignKey: 'action_id', as: 'action' });

Role.hasMany(RolePermission, { foreignKey: 'role_id', as: 'role_permissions' });
RolePermission.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });

Permission.hasMany(RolePermission, { foreignKey: 'permission_id', as: 'role_permissions' });
RolePermission.belongsTo(Permission, { foreignKey: 'permission_id', as: 'permission' });

// Binnacles
Action.hasMany(Binnacle, { foreignKey: 'action_id', as: 'binnacles' });
Binnacle.belongsTo(Action, { foreignKey: 'action_id', as: 'action' });

// ==================== Exportar ====================

module.exports = {
    db,
    Role,
    User,
    Period,
    ReportCard,
    Subject,
    Grade,
    Year,
    Course,
    ClassSection,
    ClassSubject,
    StudentClass,
    Entity,
    Action,
    Permission,
    RolePermission,
    Binnacle
};