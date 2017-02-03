CREATE TABLE [dbo].[player]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [lastName] VARCHAR(50) NOT NULL, 
    [firstName] VARCHAR(50) NOT NULL, 
    [highSchool] INT NOT NULL, 
    [profileName] VARCHAR(50) NOT NULL, 
    CONSTRAINT [CK_profileName] unique ([profileName]) 
)
