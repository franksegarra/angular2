﻿CREATE TABLE [dbo].[student]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [profileName] VARCHAR(50) NOT NULL, 
    [firstName] VARCHAR(50) NOT NULL, 
    [lastName] VARCHAR(50) NOT NULL, 
    [primaryEmail] VARCHAR(100) NOT NULL, 
    [highSchoolId] INT NOT NULL, 
    [graduationYear] INT NOT NULL, 
    [additionalInfo] VARCHAR(MAX) NULL, 
    [gpa] DECIMAL NULL, 
	[satTestDate] datetime null,
    [satScore] INT NULL, 
	[actTestDate] datetime null,
    [actScore] INT NULL, 
    [ncaaid] VARCHAR(50) NULL, 
    [phone] VARCHAR(10) NULL, 
    [streetAddress1] VARCHAR(255) NULL, 
    [streetAddress2] VARCHAR(255) NULL, 
    [city] VARCHAR(255) NULL, 
    [state] VARCHAR(2) NULL, 
    [zip] VARCHAR(10) NULL, 
    [displayAddrAndPhone] SMALLINT NULL, 
    CONSTRAINT [pk_student_id]  PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [CK_profileName] unique (profileName),
	CONSTRAINT [FK_student_highSchoolId] FOREIGN KEY (highSchoolId) REFERENCES highSchool(id)
)