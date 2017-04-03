create table [dbo].[userroles]
(
	[id] int identity(1,1) not null, 
    [role] varchar(10) not null, 
    [created] datetime not null default getdate(), 
    constraint [pk_userroles_id] primary key clustered (id)
)
