CREATE TABLE [dbo].[studentCoaches]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
	[sortorder] INT NOT NULL, 
	[name] varchar(100) not null,
    [description] VARCHAR(100) NOT NULL, 
    [email] VARCHAR(100) NULL, 
    [phone] VARCHAR(10) NULL, 
    [created] DATETIME NOT NULL default getdate(), 
    CONSTRAINT [pk_studentCoaches_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentCoaches_student] FOREIGN KEY (studentid) REFERENCES [student](id), 
)
