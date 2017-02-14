CREATE TABLE [dbo].[studentClasses]
(
	[id] INT IDENTITY(1,1) NOT NULL, 
    [studentid] INT NOT NULL, 
    [grade] INT NOT NULL, 
    [className] VARCHAR(50) NOT NULL, 
    [finalAverage] SMALLINT NULL, 
    [letterGrade] VARCHAR(2) NULL, 
    [collegeCredit] SMALLINT NULL, 
    CONSTRAINT [pk_studentClasses_id] PRIMARY KEY CLUSTERED (id),
    CONSTRAINT [FK_studentClasses_player] FOREIGN KEY ([studentid]) REFERENCES [student](id), 
    CONSTRAINT [CK_studentClasses_finalAverage] CHECK (finalAverage < 105)
)
