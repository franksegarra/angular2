create table [dbo].[studentcoaches]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
	[sortorder] int not null, 
	[name] varchar(100) not null,
    [description] varchar(100) not null, 
    [email] varchar(100) null, 
    [phone] varchar(10) null, 
    [created] datetime not null default getdate(), 
    constraint [pk_studentcoaches_id] primary key clustered (id),
    constraint [fk_studentcoaches_student] foreign key (studentid) references [student](id), 
)
