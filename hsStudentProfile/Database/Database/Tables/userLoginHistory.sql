create table [dbo].[userloginhistory]
(
	[userid] [int] not null,
	[created] [datetime] not null default (getdate()),
	[logouttime] [datetime] null,
	[ipaddress] [varchar](15) null,
    constraint [pk_userloginhistory] primary key (userid, created),
    constraint [fk_userloginhistory_user] foreign key (userid) references [users](id), 
)
