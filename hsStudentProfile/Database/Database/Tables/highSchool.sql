create table [dbo].[highschool]
(
	[id] int identity(1,1) not null, 
    [highschoolname] varchar(100) not null, 
    [created] datetime not null default getdate(), 
    constraint [pk_highschool_id] primary key clustered (id)
)
