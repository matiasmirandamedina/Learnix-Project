USE Learnix;

-- ====================================================
-- INSERT: roles
-- ====================================================
INSERT INTO roles (name) VALUES
	('Administrador'),
	('Profesor'),
	('Alumno');

-- ====================================================
-- INSERT: users
-- ====================================================
INSERT INTO users (role_id, name, date_of_birth, phone, cuil, tuition, email, password) VALUES
	(1, 'Laura Fernández', '1985-03-14', "1122334455", 20123456789, NULL, 'laura.fernandez@learnix.edu', 'admin123'),
	(2, 'Carlos Pérez', '1990-07-22', "1133445566", 20234567891, NULL, 'carlos.perez@learnix.edu', 'profesor123'),
	(2, 'María López', '1988-11-05', "1144556677", 20345678912, NULL, 'maria.lopez@learnix.edu', 'profesor123'),
	(3, 'Ana García', '2008-04-10', "1155667788", 20456789123, 1001, 'ana.garcia@learnix.edu', 'alumno123'),
	(3, 'Juan Torres', '2008-09-15', "1166778899", 20567891234, 1002, 'juan.torres@learnix.edu', 'alumno123'),
	(3, 'Lucía Ramos', '2007-12-01', "1177889900", 20678912345, 1003, 'lucia.ramos@learnix.edu', 'alumno123');

-- ====================================================
-- INSERT: periods
-- ====================================================
INSERT INTO periods (name, date_init, date_end) VALUES
	('Primer Trimestre 2025', '2025-03-01', '2025-06-30'),
	('Segundo Trimestre 2025', '2025-07-01', '2025-10-31');

-- ====================================================
-- INSERT: years
-- ====================================================
INSERT INTO years (name) VALUES
	('1° Año'),
	('2° Año'),
	('3° Año');

-- ====================================================
-- INSERT: courses
-- ====================================================
INSERT INTO courses (name) VALUES
	('Ciclo Básico'),
	('Ciclo Orientado');

-- ====================================================
-- INSERT: subjects
-- ====================================================
INSERT INTO subjects (name) VALUES
	('Matemática'),
	('Lengua y Literatura'),
	('Historia'),
	('Inglés'),
	('Ciencias Naturales');

-- ====================================================
-- INSERT: class_sections
-- ====================================================
INSERT INTO class_sections (year_id, courses_id, teacher_id, name, code) VALUES
	(1, 1, 2, '1°A', 101),
	(1, 1, 3, '1°B', 102);

-- ====================================================
-- INSERT: class_subjects
-- ====================================================
INSERT INTO class_subjects (class_section_id, subject_id) VALUES
	(1, 1), -- 1°A - Matemática
	(1, 2), -- 1°A - Lengua
	(1, 3), -- 1°A - Historia
	(1, 4), -- 1°A - Inglés
	(1, 5), -- 1°A - Ciencias
	(2, 1),
	(2, 2),
	(2, 3);

-- ====================================================
-- INSERT: student_class
-- ====================================================
INSERT INTO student_class (student_id, class_sections_id) VALUES
	(4, 1), -- Ana García -> 1°A
	(5, 1), -- Juan Torres -> 1°A
	(6, 2); -- Lucía Ramos -> 1°B

-- ====================================================
-- INSERT: report_cards
-- ====================================================
INSERT INTO report_cards (student_id, period_id) VALUES
	(4, 1),
	(4, 2),
	(5, 1),
	(5, 2),
	(6, 1);

-- ====================================================
-- INSERT: grades
-- ====================================================
INSERT INTO grades (subject_id, report_card_id, grade_value, comment) VALUES
	(1, 1, 9, 'Excelente desempeño'),
	(2, 1, 8, 'Muy buena redacción'),
	(3, 1, 7, 'Cumple con los contenidos'),
	(4, 1, 9, 'Buena participación'),
	(1, 3, 6, 'Debe mejorar en resolución de problemas'),
	(2, 3, 7, 'Buen progreso'),
	(1, 5, 10, 'Excelente comprensión de conceptos'),
	(2, 5, 9, 'Excelente escritura');

-- ====================================================
-- INSERT: entities
-- ====================================================
INSERT INTO entities (name) VALUES
	('Usuarios'),
	('Cursos'),
	('Materias'),
	('Notas'),
	('Reportes');

-- ====================================================
-- INSERT: actions
-- ====================================================
INSERT INTO actions (name) VALUES
	('Crear'),
	('Leer'),
	('Actualizar'),
	('Eliminar');

-- ====================================================
-- INSERT: permissions
-- ====================================================
INSERT INTO permissions (entity_id, action_id) VALUES
	(1, 1), -- Usuarios -> Crear
	(1, 2), -- Usuarios -> Leer
	(1, 3), -- Usuarios -> Actualizar
	(1, 4), -- Usuarios -> Eliminar
	(4, 2), -- Notas -> Leer
	(5, 2); -- Reportes -> Leer

-- ====================================================
-- INSERT: role_permissions
-- ====================================================
INSERT INTO role_permissions (role_id, permission_id) VALUES
	(1, 1), (1, 2), (1, 3), (1, 4), -- Admin total acceso usuarios
	(2, 5), (2, 6),                 -- Profesor puede leer notas y reportes
	(3, 6);                         -- Alumno puede leer reportes

-- ====================================================
-- INSERT: binnacles
-- ====================================================
INSERT INTO binnacles (action_id, fact, old_value, new_value, created_at) VALUES
	(3, 4, 'nota: 7', 'nota: 8', '2025-06-15'),
	(1, 5, NULL, 'nuevo alumno agregado', '2025-03-02'),
	(4, 6, 'usuario activo', 'usuario eliminado', '2025-08-20');