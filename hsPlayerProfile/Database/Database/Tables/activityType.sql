CREATE TABLE [dbo].[activityType]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [activitytype] VARCHAR(100) NOT NULL, 
    [created] DATETIME NOT NULL default getdate(), 
    CONSTRAINT [pk_activitytype_id] PRIMARY KEY CLUSTERED (id)
)
