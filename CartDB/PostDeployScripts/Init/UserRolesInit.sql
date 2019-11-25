IF NOT EXISTS (SELECT 1 FROM UserRoles WHERE Role = 'Customer')
BEGIN
    INSERT INTO UserRoles (Id, Role)
    VALUES (1, 'Customer');
END

IF NOT EXISTS (SELECT 1 FROM UserRoles WHERE Role = 'Manager')
BEGIN
    INSERT INTO UserRoles (Id, Role)
    VALUES (2, 'Manager');
END

IF NOT EXISTS (SELECT 1 FROM UserRoles WHERE Role = 'Admin')
BEGIN
    INSERT INTO UserRoles (Id, Role)
    VALUES (3, 'Admin');
END