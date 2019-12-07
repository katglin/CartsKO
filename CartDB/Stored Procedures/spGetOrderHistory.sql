CREATE PROCEDURE [dbo].[spGetOrderHistory]
AS
BEGIN
	SELECT  u.Username, 
			string_agg(concat(p.Name, ':', o.Amount), ', ') AS ProductList,
			SUM(p.Price * o.Amount) AS TotalPrice,
			os.Status,
			o.CreatedDate
	FROM Orders o 
	INNER JOIN Products p ON o.ProductId = p.Id 
	INNER JOIN Users u ON o.UserId = u.Id
	INNER JOIN OrderStatuses os ON os.Id = o.StatusID
	GROUP BY u.Username, os.Status, o.CreatedDate
	ORDER BY o.CreatedDate DESC
END