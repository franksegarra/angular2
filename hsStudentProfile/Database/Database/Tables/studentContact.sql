create table [dbo].[studentcontact]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [contactname] varchar(100) not null, 
    [contactemail] varchar(100) not null, 
    [contactphone] varchar(10) null, 
    [message] varchar(max) not null, 
    [created] datetime not null default getdate(), 
	[ipaddress] varchar(20) null,
    constraint [pk_studentcontact_id] primary key clustered (id),
    constraint [fk_studentcontact_student] foreign key (studentid) references [student](id), 
)
