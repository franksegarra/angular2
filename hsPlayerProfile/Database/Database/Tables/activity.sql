CREATE TABLE [dbo].[activity]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [activity] VARCHAR(100) NOT NULL, 
    CONSTRAINT [pk_activity_id] PRIMARY KEY CLUSTERED (id)
)
