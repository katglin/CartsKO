﻿CREATE TABLE [dbo].[Users]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    [Username] VARCHAR(50) NOT NULL UNIQUE,
    [Email] VARCHAR(50) NULL UNIQUE,
    [Phone] VARCHAR(50) NULL UNIQUE,
    [PasswordHash] VARCHAR(50) NULL, 
    [CreatedDate] DATETIME2 NOT NULL DEFAULT (GETDATE()),
    [RoleID] INT NOT NULL DEFAULT 1,

	CONSTRAINT [FK_Users_UserRoles] FOREIGN KEY ([RoleID]) REFERENCES UserRoles([Id])
)
