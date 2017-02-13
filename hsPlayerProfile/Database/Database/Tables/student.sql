CREATE TABLE [dbo].[student]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [lastName] VARCHAR(50) NOT NULL, 
    [firstName] VARCHAR(50) NOT NULL, 
    [highSchoolId] INT NOT NULL, 
    [profileName] VARCHAR(50) NOT NULL, 
    [primaryEmail] VARCHAR(100) NOT NULL, 
    [graduationYear] INT NOT NULL, 
    [additionalInfo] VARCHAR(MAX) NULL, 
    CONSTRAINT [pk_student_id]  PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [CK_profileName] unique (profileName),
	CONSTRAINT [FK_student_highSchoolId] FOREIGN KEY (highSchoolId) REFERENCES highSchool(id)
)
