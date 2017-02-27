CREATE TABLE [dbo].[studentPictures]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [category] VARCHAR(50) NOT NULL default 'Other Student Videos', 
    [title] VARCHAR(100) NOT NULL, 
    [filename] VARCHAR(100) NOT NULL,
	[description] VARCHAR(255) NULL, 
    CONSTRAINT [pk_studentPictures_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentPictures_student] FOREIGN KEY (studentid) REFERENCES [student](id)
)
