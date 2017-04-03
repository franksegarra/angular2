create table [dbo].[student]
(
	[id] int not null, 
    [highschoolid] int null, 
    [graduationyear] int null, 
    [additionalinfo] varchar(max) null, 
    [gpa] decimal(18, 2) null, 
	[sattestdate] datetime null,
    [satscore] int null, 
	[acttestdate] datetime null,
    [actscore] int null, 
    [ncaaid] varchar(50) null, 
    [profilepictureid] int null, 
	[height] varchar(10) null,
	[weight] varchar(10) null,
    [created] datetime not null default getdate(), 
	[collegemajor] varchar(100) null,
    constraint [pk_student_id]  primary key clustered (id),
	constraint [fk_student_userid] foreign key (id) references [users](id),
	constraint [fk_student_highschoolid] foreign key (highschoolid) references [highschool](id)
)
