CREATE TABLE [dbo].[users]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [profileName] VARCHAR(50) NOT NULL, 
    [roleid] int NOT NULL, 
	[confirmationtoken] [nvarchar](128) NULL,
	[isconfirmed] [bit] NULL DEFAULT ((0)),
	[lastpasswordfailuredate] [datetime] NULL,
	[passwordfailuressincelastsuccess] [int] NOT NULL DEFAULT ((0)),
	[password] [nvarchar](128) NOT NULL,
	[passwordchangeddate] [datetime] NULL,
	[passwordsalt] [nvarchar](128) NOT NULL,
	[passwordverificationtoken] [nvarchar](128) NULL,
	[passwordverificationtokenexpirationdate] [datetime] NULL,
    [created] DATETIME NOT NULL default getdate(), 
    CONSTRAINT [pk_users_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [CK_profileName] unique (profileName),
    CONSTRAINT [FK_users_userrole] FOREIGN KEY (roleid) REFERENCES [userRoles](id), 
)
