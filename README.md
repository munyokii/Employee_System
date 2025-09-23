# Employee Management System
An Employee Management System (EMS) is a software application designed to streamline and automate various HR and administrative tasks related to managing employees within an organization. It allows admin to create, read, update, and delete employee records.

## Features
- Admin Authentication (Login/Logout)
- Add, View, Edit, and Delete Employees
- Categorize Employees by Department or Role
- Responsive Design using Bootstrap
- RESTful API Endpoints
- Secure Password Storage with bcrypt
- CORS Enabled for Cross-Origin Requests
- Cookie-based Session Management

## Technologies Used
- Frontend: React, Bootstrap
- Backend: Node.js, Express
- Database: MySQL
- Authentication: bcrypt, JSON Web Tokens (JWT)
- Others: Axios, CORS, cookie-parser

## Installation
1. Clone the repository:
   ```bash
    git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
    cd Employee_System
   ```
3. Install frontend dependencies:
   ```bash
    cd ems_frontend
    npm install
   ```
4. Install backend dependencies:
   ```bash
    cd ems_backend
    npm install
   ```
5. Set up the MySQL database and create the necessary tables (see Database Tables section and also insert admin credentials directly to the admin table to use for login).

## Database Tables
### Admin Table
```sql
CREATE TABLE admin
    -> (id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    -> email VARCHAR(50) NOT NULL,     
    -> password VARCHAR(255) NOT NULL);
```
Insert Admin Credentials to use for login e.g.
```sql
INSERT INTO admin(email, password) VALUES ('admin@gmail.com', '12345678');
```

### Category Table
```sql
CREATE TABLE category
    -> (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    -> name VARCHAR(255) NOT NULL);
```
### Employee Table
```sql
CREATE TABLE employee (
    -> id INT PRIMARY KEY AUTO_INCREMENT,
    -> name VARCHAR(30) NOT NULL,
    -> email VARCHAR(40) NOT NULL,
    -> password VARCHAR(150) NOT NULL,
    -> salary INT NOT NULL,
    -> address VARCHAR(30) NOT NULL,
    -> image VARCHAR(60) NOT NULL,
    -> category_id INT NOT NULL,  
    -> FOREIGN KEY (category_id) REFERENCES category(id));
```
## Running the Application
Create the database and tables as mentioned above, then follow these steps to run the application:
1. Start the backend server:
   ```bash
   cd ems_backend
   npm start
   ```
2. Start the frontend server:
   ```bash
   cd ems_frontend
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000` to access the application.
## API Endpoints
- `GET /category` - Get all categories
- `POST /add_category` - Add a new category
- `POST /add_employee` - Add a new employee
- `GET /employee` - Get all employees
- `GET /employee/:id` - Get employee by ID
- `PUT /edit_employee/:id` - Update employee by ID
- `DELETE /delete_employee/:id` - Delete employee by ID
