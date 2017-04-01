CREATE TABLE [dbo].[userLoginHistory]
(
	[userid] [int] NOT NULL,
	[logintime] [datetime] NOT NULL DEFAULT (getdate()),
	[logouttime] [datetime] NULL,
	[ipaddress] [varchar](15) NULL,
    CONSTRAINT [pk_userLoginHistory] PRIMARY KEY (userid, logintime),
    CONSTRAINT [FK_userLoginHistory_user] FOREIGN KEY (userid) REFERENCES [users](id), 
)
