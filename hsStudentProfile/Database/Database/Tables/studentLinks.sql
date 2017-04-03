create table [dbo].[studentlinks]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [activityid] int null, 
    [linkname] varchar(100) not null, 
    [linkdescription] varchar(100) null, 
    [linkurl] varchar(255) not null,
    [created] datetime not null default getdate(), 
    constraint [pk_studentlinks_id] primary key clustered (id),
    constraint [fk_studentlinks_student] foreign key (studentid) references [student](id), 
    constraint [fk_studentlinks_activity] foreign key (activityid) references [activity](id)
)
