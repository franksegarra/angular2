CREATE TABLE [dbo].[studentBaseball]
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
    CONSTRAINT [pk_studentBaseball_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentBaseball_student] FOREIGN KEY (studentid) REFERENCES [student](id), 
)
