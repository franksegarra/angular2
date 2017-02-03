CREATE TABLE [dbo].[playerSports]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [playerid] INT NULL, 
    [sportid] INT NULL, 
    [coachName] VARCHAR(255) NULL, 
    [coachEmail] VARCHAR(255) NULL, 
    [coachPhone] VARCHAR(50) NULL, 
    CONSTRAINT [FK_playerSports_player] FOREIGN KEY (playerid) REFERENCES [player](id), 
    CONSTRAINT [FK_playerSports_sports] FOREIGN KEY (sportid) REFERENCES [sports](id)
)
