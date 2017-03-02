CREATE TABLE [dbo].[studentLinks]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [activityid] INT NULL, 
    [linkName] VARCHAR(100) NOT NULL, 
    [linkDescription] VARCHAR(100) NULL, 
    [linkUrl] VARCHAR(255) NOT NULL 
    CONSTRAINT [pk_studentLinks_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentlinks_student] FOREIGN KEY (studentid) REFERENCES [student](id), 
    CONSTRAINT [FK_studentlinks_activity] FOREIGN KEY (activityid) REFERENCES [activity](id)
)
