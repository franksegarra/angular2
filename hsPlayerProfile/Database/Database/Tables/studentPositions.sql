CREATE TABLE [dbo].[studentPositions]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
	[activityid] INT NOT NULL, 
	[position] varchar(30) not null,
	[isprimary] int NOT NULL default 0,
    CONSTRAINT [pk_studentPositions_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentPositions_student] FOREIGN KEY (studentid) REFERENCES [student](id), 
    CONSTRAINT [FK_studentPositions_activity] FOREIGN KEY (activityid) REFERENCES [activity](id), 
)
