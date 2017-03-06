CREATE TABLE [dbo].[studentExtraCurricular]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [ecName] VARCHAR(100) NOT NULL, 
    [ecDescription] VARCHAR(MAX) NULL, 
    [created] DATETIME NOT NULL default getdate(), 
    CONSTRAINT [pk_ec_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_ec_student] FOREIGN KEY (studentid) REFERENCES [student](id)
)
