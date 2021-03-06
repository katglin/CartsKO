﻿CREATE TABLE [dbo].[Products]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [Name] NVARCHAR(50) NOT NULL, 
    [Price] MONEY NOT NULL, 
    [Amount] INT NOT NULL DEFAULT 0, 
    [CreatedDate] DATETIME2 NOT NULL DEFAULT (GETDATE()), 
    [ImagePath] NVARCHAR(MAX) NULL
)
