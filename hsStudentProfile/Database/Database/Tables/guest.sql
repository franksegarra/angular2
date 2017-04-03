CREATE TABLE [dbo].[guest]
(
	[id] int identity(1,1) not null, 
	[password] [nvarchar](128) null,
	[passwordsalt] [nvarchar](128) null,
    [created] datetime not null default getdate(),
    constraint [pk_guest_id] primary key clustered (id)
)
