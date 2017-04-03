insert into activity (activity)
select [activity]
from hsPPBackup..activity
GO

insert into activityType (activityType)
select [activitytype]
from hsPPBackup..activityType
GO

DBCC CHECKIDENT ('[highschool]', RESEED, 0);
GO

insert into highSchool (highschoolname)
select [highschoolname]
from hsPPBackup..highSchool
GO

insert into userRoles (role)
select role
from hsPPBackup..userRoles
GO

DBCC CHECKIDENT ('[users]', RESEED, 0);
GO

insert into users (
[profilename],[primaryemail],[firstname],[lastname],[phone],[streetaddress1],[streetaddress2],[city],[state],[zip]
,[displayaddrandphone],[roleid],[password],[passwordsalt]
)
SELECT 
[profilename],[primaryemail],[firstname],[lastname],[phone],[streetaddress1],[streetaddress2],[city],[state],[zip]
,[displayaddrandphone],2,[profilename],[profilename]
  FROM [hsPPBackup].[dbo].[student]
GO

insert into student (
[id],[highschoolid],[graduationyear],[additionalinfo],[gpa],[sattestdate],[satscore],[acttestdate],[actscore]
,[ncaaid],[profilepictureid],[height],[weight],[collegemajor]
)
SELECT 
[id],[highschoolid],[graduationyear],[additionalinfo],[gpa],[sattestdate],[satscore],[acttestdate],[actscore]
,[ncaaid],[profilepictureid],[height],[weight],[collegemajor]
  FROM [hsPPBackup].[dbo].[student]
GO

insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit)
select studentid,grade,className,finalAverage,letterGrade,collegeCredit
from hsPPBackup..studentClasses
GO

Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText)
select studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText
from hsPPBackup..studentSchedules
GO

INSERT INTO studentLinks (studentid, activityid, linkName, linkDescription, linkUrl)
select studentid, activityid, linkName, linkDescription, linkUrl from hsPPBackup..studentLinks
GO

insert into studentActivities (studentid, activityid)
select studentid, activityid from hsPPBackup..studentActivities
GO

INSERT INTO studentVideos (studentid,category,title,filename,description) 
select studentid,category,title,filename,description from hsPPBackup..studentVideos
GO

INSERT INTO studentPictures (studentid,category,title,filename,description) 
select studentid,category,title,filename,description from hsPPBackup..studentPictures
Go

INSERT INTO studentExtraCurricular (studentid, ecName, ecDescription) 
select studentid, ecName, ecDescription from hsPPBackup..studentExtraCurricular
GO

INSERT INTO studentBaseball (studentid,statsPictureId,runningTime,bats,throws,travelTeam,travelUrl, runningtimelocation, runningtimelocationUrl)
select studentid,statsPictureId,runningTime,bats,throws,travelTeam,travelUrl, runningtimelocation, runningtimelocationUrl from hsPPBackup..studentBaseball
GO

INSERT INTO studentPositions (studentid,activityid,position,isprimary) 
select studentid,activityid,position,isprimary from hsPPBackup..studentPositions
GO

insert into studentBBHitting (studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases)
select studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases from hsPPBackup..studentBBHitting
GO

insert into studentCoaches(studentid, sortorder, name, description, email, phone) 
select studentid, sortorder, name, description, email, phone from hsPPBackup..studentCoaches
GO

insert into studentContact ([studentid],[contactname],[contactemail],[contactphone],[message],[created],[ipaddress])
select [studentid],[contactname],[contactemail],[contactphone],[message],[created],[ipaddress] from hsPPBackup..studentContact
GO


