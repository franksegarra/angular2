create table [dbo].[studentpictures]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [category] varchar(50) not null default 'other student videos', 
    [title] varchar(100) not null, 
    [filename] varchar(100) not null,
	[description] varchar(255) null, 
    [created] datetime not null default getdate(), 
    constraint [pk_studentpictures_id] primary key clustered (id),
    constraint [fk_studentpictures_student] foreign key (studentid) references [student](id)
)
