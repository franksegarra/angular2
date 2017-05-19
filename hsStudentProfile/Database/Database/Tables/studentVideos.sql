﻿create table [dbo].[studentvideos]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [category] varchar(50) not null default 'other student videos', 
    [title] varchar(100) not null, 
    [filename] varchar(100) not null,
	[description] varchar(255) null, 
    [created] datetime not null default getdate(), 
    [filesize] BIGINT NULL, 
    constraint [pk_studentvideos_id] primary key clustered (id),
    constraint [fk_studentvideos_student] foreign key (studentid) references [student](id)
)

