CREATE TABLE [dbo].[studentActivities]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [activityid] INT NOT NULL, 
    [coachName] VARCHAR(255) NULL, 
    [coachEmail] VARCHAR(100) NULL, 
    [coachPhone] VARCHAR(50) NULL, 
    [created] DATETIME NOT NULL default getdate(), 
    CONSTRAINT [pk_studentActivity_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentActivity_student] FOREIGN KEY (studentid) REFERENCES [student](id), 
    CONSTRAINT [FK_studentActivity_activity] FOREIGN KEY (activityid) REFERENCES [activity](id)
)
