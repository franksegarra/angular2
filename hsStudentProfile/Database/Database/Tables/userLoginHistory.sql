create table [dbo].[userloginhistory]
(
	[id] [int] not null,
	[created] [datetime] not null default (getdate()),
	[logouttime] [datetime] null,
	[ipaddress] [varchar](15) null,
    constraint [pk_userloginhistory] primary key (id, created),
    constraint [fk_userloginhistory_user] foreign key (id) references [users](id), 
)
