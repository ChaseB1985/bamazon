DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB; 

USE bamazonDB; 

CREATE TABLE products(
    item_id INT (11) NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR (45) NULL,
    department_name VARCHAR (45) NULL, 
    price DECIMAL (10,2) NULL, 
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("old shoe", "sports department", 7.23, 1), ("half eaten hamburger", "food department", 3.75, 23), ("onion", "food department", 0.75, 100),
("moldy hotdog", "food department", 17.23, 14), ("cell phone", "tech department", 3.75, 23), ("bad soup", "food department", 2.75, 100),
("X-men poster", "sports department", 43.23, 345), ("real Thanos glove", "tech department", 3000.75, 1), ("broken HDMI cable", "tech department", 10.35, 100),
("sports bra", "sports department", 13.23, 100); 



