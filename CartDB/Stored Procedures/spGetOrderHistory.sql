CREATE PROCEDURE [dbo].[spGetOrderHistory]
AS
BEGIN
	SELECT o.Id, u.Username, o.CreatedDate, p.Name AS ProductName, o.Amount
	FROM Orders o 
	INNER JOIN Products p ON o.ProductId = p.Id 
	INNER JOIN Users u ON o.UserId = u.Id
END
