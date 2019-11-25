CREATE TABLE [dbo].[OrderStatuses]
(
    [Id] INT NOT NULL PRIMARY KEY, 
    [Status] NVARCHAR(50) NOT NULL UNIQUE
)
