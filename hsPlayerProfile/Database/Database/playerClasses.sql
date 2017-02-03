CREATE TABLE [dbo].[playerClasses]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [playerid] INT NULL, 
    [grade] INT NULL, 
    [className] VARCHAR(50) NULL, 
    [finalAverage] SMALLINT NULL, 
    [letterGrade] VARCHAR(2) NULL, 
    CONSTRAINT [FK_playerClasses_player] FOREIGN KEY (playerid) REFERENCES [player](id), 
    CONSTRAINT [CK_playerClasses_finalAverage] CHECK (finalAverage < 105)
)
