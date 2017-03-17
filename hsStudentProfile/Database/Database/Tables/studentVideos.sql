CREATE TABLE [dbo].[studentVideos]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [category] VARCHAR(50) NOT NULL default 'Other Student Videos', 
    [title] VARCHAR(100) NOT NULL, 
    [filename] VARCHAR(100) NOT NULL,
	[description] VARCHAR(255) NULL, 
    [created] DATETIME NOT NULL default getdate(), 
    CONSTRAINT [pk_studentVideos_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentVideos_student] FOREIGN KEY (studentid) REFERENCES [student](id)
)

