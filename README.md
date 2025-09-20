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