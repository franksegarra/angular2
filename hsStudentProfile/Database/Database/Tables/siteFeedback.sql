create table [dbo].[sitefeedback]
(
	[id] int identity(1,1) not null, 
    [contactname] varchar(100) not null, 
    [contactemail] varchar(100) not null, 
    [contactphone] varchar(10) null, 
    [message] varchar(max) not null, 
    [created] datetime not null default getdate(), 
	[ipaddress] varchar(20) null,
    constraint [pk_sitefeedback_id] primary key clustered (id),
)
