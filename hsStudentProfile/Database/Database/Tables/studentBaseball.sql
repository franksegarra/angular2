create table [dbo].[studentbaseball]
(
	[id] int identity(1,1) not null, 
    [studentid] int not null unique, 
    [statspictureid] int null, 
	[runningtime] decimal(18,2) null,
	[bats] varchar(1) null,
	[throws] varchar(1) null,
	[travelteam] varchar(100) null,
	[travelurl] varchar(255) null,
	[runningtimelocation] varchar(100) null,
	[runningtimelocationurl] varchar(255) null,
    [created] datetime not null default getdate(), 
    constraint [pk_studentbaseball_id] primary key clustered (id),
    constraint [fk_studentbaseball_student] foreign key (studentid) references [student](id), 
)
