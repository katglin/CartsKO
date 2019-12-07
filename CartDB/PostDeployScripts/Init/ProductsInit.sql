IF NOT EXISTS (SELECT 1 FROM Products)
BEGIN
    INSERT INTO PRODUCTS ([Name], Price, ImagePath)
    VALUES ('Scotish beer', 12.55, '/Images/1.jpeg');

    INSERT INTO PRODUCTS ([Name], Price, ImagePath)
    VALUES ('Vegeterian soup', 15.0, '/Images/2.jpeg');

    INSERT INTO PRODUCTS ([Name], Price, ImagePath)
    VALUES ('Gawaii pizza', 7.99, '/Images/3.jpeg');

    INSERT INTO PRODUCTS ([Name], Price, ImagePath)
    VALUES ('Italian pasta', 10.50, '/Images/1.jpeg');

    INSERT INTO PRODUCTS ([Name], Price, ImagePath)
    VALUES ('Mexico burrito', 22.25, '/Images/2.jpeg');

    INSERT INTO PRODUCTS ([Name], Price, ImagePath)
    VALUES ('French pie', 17.90, '/Images/3.jpeg');

    INSERT INTO PRODUCTS ([Name], Price, ImagePath)
    VALUES ('American coffee', 19.0, 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/what-is-kosher-1296x728-feature.jpg');

    INSERT INTO PRODUCTS ([Name], Price)
    VALUES ('Japanese sushi', 22.15);
END