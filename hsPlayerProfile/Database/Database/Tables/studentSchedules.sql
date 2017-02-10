CREATE TABLE [dbo].[studentSchedules]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [activitydate] DATE NOT NULL, 
    [starttime] TIME NULL, 
    [activityid] INT NOT NULL, 
    [activitydesc] VARCHAR(255) NULL, 
    [activitytypeid] INT NULL, 
    [location] VARCHAR(MAX) NULL, 
    CONSTRAINT [pk_studentSchedules_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentSchedules_student] FOREIGN KEY (studentid) REFERENCES [student](id), 
    CONSTRAINT [FK_studentSchedules_activity] FOREIGN KEY (activityid) REFERENCES [activity](id), 
    CONSTRAINT [FK_studentSchedules_activityType] FOREIGN KEY (activityid) REFERENCES [activityType](id)
)
