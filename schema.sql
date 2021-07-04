DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE  employee_tracker;

CREATE TABLE  departments (

id INT PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(30)
);

CREATE TABLE roles (
id INT AUTO_INCREMENT PRIMARY KEY, 
 title VARCHAR(30),
 salary DECIMAL,
 department_id INT,
 FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
id INT PRIMARY KEY AUTO_INCREMENT, 
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);