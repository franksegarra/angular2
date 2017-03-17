CREATE TABLE [dbo].[studentContact]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [contactname] VARCHAR(100) NOT NULL, 
    [contactemail] VARCHAR(100) NOT NULL, 
    [contactphone] VARCHAR(10) NULL, 
    [message] VARCHAR(MAX) NOT NULL, 
    [created] DATETIME NOT NULL default getdate(), 
	[ipaddress] varchar(20) null,
    CONSTRAINT [pk_studentcontact_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentcontact_student] FOREIGN KEY (studentid) REFERENCES [student](id), 
)
