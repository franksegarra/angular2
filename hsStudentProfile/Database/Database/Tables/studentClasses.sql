create table [dbo].[studentclasses]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null, 
    [grade] int not null, 
    [classname] varchar(50) not null, 
    [finalaverage] smallint null, 
    [lettergrade] varchar(2) null, 
    [collegecredit] smallint null, 
    [created] datetime not null default getdate(), 
    constraint [pk_studentclasses_id] primary key clustered (id),
    constraint [fk_studentclasses_player] foreign key ([studentid]) references [student](id), 
    constraint [ck_studentclasses_finalaverage] check (finalaverage < 105)
)
