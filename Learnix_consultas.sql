USE Learnix;

-- ====================================================
-- CONSULTAS DE PRUEBA - LEARNIX
-- ====================================================

-- 1️ Listar todos los usuarios con su rol
-- Muestra todos los usuarios junto a su rol asignado.
SELECT 
    u.id,
    u.name AS usuario,
    r.name AS rol,
    u.email
FROM users u
JOIN roles r ON u.role_id = r.id
ORDER BY r.name, u.name;

-- ====================================================
-- 2️ Listar alumnos y la clase en la que están inscriptos
-- Incluye el año y curso de cada clase.
SELECT 
    u.name AS alumno,
    cs.name AS clase,
    y.name AS año,
    c.name AS curso
FROM student_class sc
JOIN users u ON sc.student_id = u.id
JOIN class_sections cs ON sc.class_sections_id = cs.id
JOIN years y ON cs.year_id = y.id
JOIN courses c ON cs.courses_id = c.id
ORDER BY cs.name, u.name;

-- ====================================================
-- 3️ Mostrar los profesores y las clases que enseñan
-- Lista todos los profesores asignados a cada clase.
SELECT 
    u.name AS profesor,
    cs.name AS clase,
    y.name AS año,
    c.name AS curso
FROM class_sections cs
JOIN users u ON cs.teacher_id = u.id
JOIN years y ON cs.year_id = y.id
JOIN courses c ON cs.courses_id = c.id
ORDER BY profesor;

-- ====================================================
-- 4️ Mostrar las materias de cada clase
-- Muestra qué materias se dictan en cada división.
SELECT 
    cs.name AS clase,
    s.name AS materia
FROM class_subjects csub
JOIN class_sections cs ON csub.class_section_id = cs.id
JOIN subjects s ON csub.subject_id = s.id
ORDER BY cs.name, s.name;

-- ====================================================
-- 5️ Mostrar los boletines de cada alumno por período
-- Permite visualizar los boletines creados por alumno.
SELECT 
    u.name AS alumno,
    p.name AS periodo,
    rc.id AS id_boletin
FROM report_cards rc
JOIN users u ON rc.student_id = u.id
JOIN periods p ON rc.period_id = p.id
ORDER BY u.name, p.date_init;

-- ====================================================
-- 6️ Mostrar las notas de los alumnos (con materias y comentarios)
-- Incluye alumno, materia, nota y comentario del profesor.
SELECT 
    u.name AS alumno,
    p.name AS periodo,
    s.name AS materia,
    g.grade_value AS nota,
    g.comment AS observacion
FROM grades g
JOIN subjects s ON g.subject_id = s.id
JOIN report_cards rc ON g.report_card_id = rc.id
JOIN users u ON rc.student_id = u.id
JOIN periods p ON rc.period_id = p.id
ORDER BY u.name, s.name;

-- ====================================================
-- 7️ Promedio de notas por alumno y período
-- Calcula el promedio de cada alumno en cada trimestre.
SELECT 
    u.name AS alumno,
    p.name AS periodo,
    ROUND(AVG(g.grade_value), 2) AS promedio
FROM grades g
JOIN report_cards rc ON g.report_card_id = rc.id
JOIN users u ON rc.student_id = u.id
JOIN periods p ON rc.period_id = p.id
GROUP BY u.name, p.name
ORDER BY alumno, periodo;

-- ====================================================
-- 8️ Promedio general por materia
-- Muestra el promedio general de notas para cada materia.
SELECT 
    s.name AS materia,
    ROUND(AVG(g.grade_value), 2) AS promedio_general
FROM grades g
JOIN subjects s ON g.subject_id = s.id
GROUP BY s.name
ORDER BY promedio_general DESC;

-- ====================================================
-- 9️ Cantidad de alumnos por clase
-- Informa cuántos alumnos están inscriptos en cada clase.
SELECT 
    cs.name AS clase,
    COUNT(sc.student_id) AS cantidad_alumnos
FROM class_sections cs
LEFT JOIN student_class sc ON cs.id = sc.class_sections_id
GROUP BY cs.name
ORDER BY cantidad_alumnos DESC;

-- ====================================================
-- 10 Listar todos los períodos con su duración en días
-- Calcula la duración de cada período lectivo.
SELECT 
    name AS periodo,
    date_init,
    date_end,
    DATEDIFF(date_end, date_init) AS duracion_dias
FROM periods;

-- ====================================================
-- 11️ Promedio general de cada alumno (todos los períodos)
-- Mide el rendimiento global del alumno en toda la base.
SELECT 
    u.name AS alumno,
    ROUND(AVG(g.grade_value), 2) AS promedio_general
FROM grades g
JOIN report_cards rc ON g.report_card_id = rc.id
JOIN users u ON rc.student_id = u.id
GROUP BY u.name
ORDER BY promedio_general DESC;

-- ====================================================
-- 12️ Materias con notas más altas por período
-- Muestra las mejores notas de cada materia en cada trimestre.
SELECT 
    p.name AS periodo,
    s.name AS materia,
    MAX(g.grade_value) AS nota_maxima
FROM grades g
JOIN report_cards rc ON g.report_card_id = rc.id
JOIN subjects s ON g.subject_id = s.id
JOIN periods p ON rc.period_id = p.id
GROUP BY p.name, s.name
ORDER BY p.name, nota_maxima DESC;

-- ====================================================
-- 13️ Alumnos con materias desaprobadas (nota < 6)
-- Muestra quiénes deben recuperar materias.
SELECT 
    u.name AS alumno,
    s.name AS materia,
    g.grade_value AS nota,
    p.name AS periodo
FROM grades g
JOIN subjects s ON g.subject_id = s.id
JOIN report_cards rc ON g.report_card_id = rc.id
JOIN users u ON rc.student_id = u.id
JOIN periods p ON rc.period_id = p.id
WHERE g.grade_value < 6
ORDER BY alumno, materia;