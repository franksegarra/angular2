create table [dbo].[activitytype]
(
	[id] int identity(1,1) not null, 
    [activitytype] varchar(100) not null, 
    [created] datetime not null default getdate(), 
    constraint [pk_activitytype_id] primary key clustered (id)
)
