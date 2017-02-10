CREATE TABLE [dbo].[highSchool]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [highSchoolName] VARCHAR(100) NOT NULL, 
    CONSTRAINT [pk_highSchool_id] PRIMARY KEY CLUSTERED (id)
)
