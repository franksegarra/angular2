create table [dbo].[studentextracurricular]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [ecname] varchar(100) not null, 
    [ecdescription] varchar(max) null, 
    [created] datetime not null default getdate(), 
    constraint [pk_ec_id] primary key clustered (id),
    constraint [fk_ec_student] foreign key (studentid) references [student](id)
)
