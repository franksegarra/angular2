CREATE TABLE [dbo].[siteFeedback]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [contactname] VARCHAR(100) NOT NULL, 
    [contactemail] VARCHAR(100) NOT NULL, 
    [contactphone] VARCHAR(10) NULL, 
    [message] VARCHAR(MAX) NOT NULL, 
    [created] DATETIME NOT NULL default getdate(), 
	[ipaddress] varchar(20) null,
    CONSTRAINT [pk_siteFeedback_id] PRIMARY KEY CLUSTERED (id),
)
