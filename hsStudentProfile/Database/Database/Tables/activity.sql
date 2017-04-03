create table [dbo].[activity]
(
	[id] int identity(1,1) not null, 
    [activity] varchar(100) not null, 
    [created] datetime not null default getdate(), 
    constraint [pk_activity_id] primary key clustered (id)
)
