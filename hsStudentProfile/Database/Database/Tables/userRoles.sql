CREATE TABLE [dbo].[userRoles]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [role] VARCHAR(10) NOT NULL, 
    [created] DATETIME NOT NULL default getdate(), 
    CONSTRAINT [pk_userRoles_id] PRIMARY KEY CLUSTERED (id)
)
