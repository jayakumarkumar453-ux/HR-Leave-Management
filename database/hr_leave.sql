CREATE DATABASE IF NOT EXISTS hr_leave;

USE hr_leave;

CREATE TABLE IF NOT EXISTS leaves (

    id INT AUTO_INCREMENT PRIMARY KEY,

    employeeName VARCHAR(100) NOT NULL,

    employeeId VARCHAR(20) NOT NULL,

    leaveType VARCHAR(50) NOT NULL,

    fromDate DATE NOT NULL,

    toDate DATE NOT NULL,

    reason TEXT,

    status ENUM('Pending','Approved','Rejected') DEFAULT 'Pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO leaves
(employeeName, employeeId, leaveType, fromDate, toDate, reason, status)

VALUES

('John', 'EMP001', 'Casual', '2026-07-05', '2026-07-06', 'Family Function', 'Pending'),

('Priya', 'EMP002', 'Sick', '2026-07-08', '2026-07-09', 'Medical Leave', 'Approved'),

('Rahul', 'EMP003', 'Annual', '2026-07-10', '2026-07-15', 'Vacation', 'Rejected');

SELECT * FROM leaves;
