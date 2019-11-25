CREATE TABLE [dbo].[Orders]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [ProductID] INT NOT NULL, 
    [UserID] INT NOT NULL, 
    [CreatedDate] DATETIME2 NOT NULL DEFAULT (GETDATE()), 
    [UpdatedDate] DATETIME2 NULL, 
    [StatusID] INT NOT NULL DEFAULT 1,

    CONSTRAINT [FK_Orders_Products] FOREIGN KEY ([ProductID]) REFERENCES Products([Id]),
    CONSTRAINT [FK_Orders_Users] FOREIGN KEY ([UserID]) REFERENCES Users([Id]),
    CONSTRAINT [FK_Orders_OrderStatuses] FOREIGN KEY ([StatusID]) REFERENCES OrderStatuses([Id])
)
