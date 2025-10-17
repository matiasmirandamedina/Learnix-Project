-- ====================================================
-- CREACIÓN DE BASE DE DATOS
-- ====================================================
DROP DATABASE IF EXISTS Learnix;
CREATE DATABASE IF NOT EXISTS Learnix;
USE Learnix;

-- ====================================================
-- TABLA: roles
-- ====================================================
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- ====================================================
-- TABLA: users
-- ====================================================
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    name VARCHAR(150) NOT NULL,
    date_of_birth DATE,
    phone BIGINT,
    cuil BIGINT,
    tuition INT UNIQUE,
    email VARCHAR(150) UNIQUE,
    password VARCHAR(255),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- ====================================================
-- TABLA: periods
-- ====================================================
CREATE TABLE periods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    date_init DATE NOT NULL,
    date_end DATE NOT NULL
);

-- ====================================================
-- TABLA: report_cards
-- ====================================================
CREATE TABLE report_cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    period_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES users(id),
    FOREIGN KEY (period_id) REFERENCES periods(id)
);

-- ====================================================
-- TABLA: subjects
-- ====================================================
CREATE TABLE subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- ====================================================
-- TABLA: grades
-- ====================================================
CREATE TABLE grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subject_id INT NOT NULL,
    report_card_id INT NOT NULL,
    grade_value INT,
    comment VARCHAR(255),
    FOREIGN KEY (subject_id) REFERENCES subjects(id),
    FOREIGN KEY (report_card_id) REFERENCES report_cards(id)
);

-- ====================================================
-- TABLA: years
-- ====================================================
CREATE TABLE years (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- ====================================================
-- TABLA: courses
-- ====================================================
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- ====================================================
-- TABLA: class_sections
-- ====================================================
CREATE TABLE class_sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year_id INT NOT NULL,
    courses_id INT NOT NULL,
    teacher_id INT,
    name VARCHAR(100) NOT NULL,
    FOREIGN KEY (year_id) REFERENCES years(id),
    FOREIGN KEY (courses_id) REFERENCES courses(id),
    FOREIGN KEY (teacher_id) REFERENCES users(id)
);

-- ====================================================
-- TABLA: class_subjects
-- ====================================================
CREATE TABLE class_subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_section_id INT NOT NULL,
    subject_id INT NOT NULL,
    FOREIGN KEY (class_section_id) REFERENCES class_sections(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

-- ====================================================
-- TABLA: student_class
-- ====================================================
CREATE TABLE student_class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    class_sections_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES users(id),
    FOREIGN KEY (class_sections_id) REFERENCES class_sections(id)
);