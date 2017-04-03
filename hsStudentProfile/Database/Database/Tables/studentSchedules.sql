create table [dbo].[studentschedules]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [activitydate] date not null, 
    [starttime] varchar(10) null, 
    [activityid] int not null, 
    [activitydesc] varchar(255) null, 
    [activitytypeid] int null, 
    [location] varchar(max) null, 
    [linktext] varchar(100) null, 
    [created] datetime not null default getdate(), 
    constraint [pk_studentschedules_id] primary key clustered (id),
    constraint [fk_studentschedules_student] foreign key (studentid) references [student](id), 
    constraint [fk_studentschedules_activity] foreign key (activityid) references [activity](id), 
    constraint [fk_studentschedules_activitytype] foreign key (activityid) references [activitytype](id)
)
