create table [dbo].[states](
	[id] int identity(1,1) not null, 
	[statecode] [varchar](2) not null,
	[state] [varchar](50) not null,
	[abbreviation] [varchar](30) null,
	[ziplow] [varchar](5) null,
	[ziphigh] [varchar](5) null,
    [created] datetime not null default getdate(), 
	constraint [pk_statecodes] primary key clustered (id),
    constraint [ck_statecode] unique (statecode)
)