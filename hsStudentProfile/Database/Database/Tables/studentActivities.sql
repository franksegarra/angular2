create table [dbo].[studentactivities]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [activityid] int not null, 
    [coachname] varchar(255) null, 
    [coachemail] varchar(100) null, 
    [coachphone] varchar(50) null, 
    [created] datetime not null default getdate(), 
    constraint [pk_studentactivity_id] primary key clustered (id),
    constraint [fk_studentactivity_student] foreign key (studentid) references [student](id), 
    constraint [fk_studentactivity_activity] foreign key (activityid) references [activity](id)
)
