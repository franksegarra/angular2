create table [dbo].[studentschedules]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
	[activityid] int not null, 
    [activitytypeid] int null, 
    [activitydesc] varchar(255) null, 
    [venue] varchar(255) null, 
    [address] varchar(255) null, 
    [city] varchar(255) null, 
	[statecode] [varchar](2) null,
    [zipcode] varchar(5) null, 
	[activitydate] date not null, 
    [starttime] varchar(10) null, 
    [created] datetime not null default getdate(), 
    constraint [pk_studentschedules_id] primary key clustered (id),
    constraint [fk_studentschedules_student] foreign key (studentid) references [student](id), 
    constraint [fk_studentschedules_activity] foreign key (activityid) references [activity](id), 
    constraint [fk_studentschedules_activitytype] foreign key (activityid) references [activitytype](id)
)
