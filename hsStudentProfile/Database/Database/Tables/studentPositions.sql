create table [dbo].[studentpositions]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
	[activityid] int not null, 
	[position] varchar(30) not null,
	[isprimary] int not null default 0,
    [created] datetime not null default getdate(), 
    constraint [pk_studentpositions_id] primary key clustered (id),
    constraint [fk_studentpositions_student] foreign key (studentid) references [student](id), 
    constraint [fk_studentpositions_activity] foreign key (activityid) references [activity](id), 
)
