USE employee_tracker;


INSERT INTO departments (name) 
VALUES ("IT"), ("UR"), ("Medical");
INSERT INTO roles (title, salary, department_id)
VALUES ("FRONT END", 50000, 1), ("CLERK", 30000, 2), ("NURSE", 50000, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Lisa", "Marcus", 1, NULL), ("Joel", "Martinez", 1, 1), ("Angelica", "Martinez", 0, NULL)
