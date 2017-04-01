/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
/*
INSERT INTO highSchool (highSchoolName) VALUES ('Carmel High School')
GO

INSERT INTO student (profileName, lastName, firstName, primaryEmail, highSchoolId, graduationYear, additionalInfo
,gpa,satTestDate,satScore,actTestDate,actScore,ncaaid,phone,streetAddress1,streetAddress2,city,state,zip,displayAddrAndPhone, profilePictureId,
height, weight) 
VALUES ('FrancisSegarra', 'Segarra', 'Francis', 'segarraf18@gmail.com', 1, 2018,
'Former Red Sox slugger David Ortiz retired last summer, but his legions of fans won’t have to wait long to relive his career, as his book “Papi” will be released May 16. Thanks to Big Papi himself, let’s get a look at the headline and cover:  I like it. Just simple and to the point. There’s no reason to splash a 24-word headline over the entire cover here. Of course, I wouldn’t have argued with a reference to his “This is our f------ city” moment. Something like “This Was My F------ Career” would have been a pretty cool title, and if they censored it like that, the bookstores would surely have been fine with it.',
3.51, '3/11/2017', 1250, null, null, null, '8453067067', '93 Sparrow Ridge Rd', null, 'Carmel', 'NY', '10512', 1, 4,
'6''', 150)

INSERT INTO student (profileName, lastName, firstName, primaryEmail, highSchoolId, graduationYear, additionalInfo
,gpa,satTestDate,satScore,actTestDate,actScore,ncaaid,phone,streetAddress1,streetAddress2,city,state,zip,displayAddrAndPhone, profilePictureId,
height, weight) 
VALUES ('KatherineSegarra', 'Segarra', 'Katherine', 'krsegarra@gmail.com', 1, 2015, 'I am offspring #1',
3.51, '3/11/2017', 1250, null, null, null, '8453067067', '93 Sparrow Ridge Rd', null, 'Carmel', 'NY', '10512', 1, null,
'5'' 6"', 120)
GO

INSERT INTO activity (activity) VALUES ('Baseball')
INSERT INTO activity (activity) VALUES ('Basketball')
INSERT INTO activity (activity) VALUES ('Football')
INSERT INTO activity (activity) VALUES ('Soccer')
INSERT INTO activity (activity) VALUES ('Violin')
INSERT INTO activity (activity) VALUES ('Graphic Arts')
GO

INSERT INTO activityType (activitytype) VALUES ('High School Game')
INSERT INTO activityType (activitytype) VALUES ('Tournament')
INSERT INTO activityType (activitytype) VALUES ('Showcase')
GO

insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'Algebra I',87,'B+',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'Design and Drawing I',90,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'Earth Science',89,'B+',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'English',79,'C+',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'French II',88,'B+',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'Global History I',89,'B+',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'Physical Education',100,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,9,'World of Technology',95,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'Architecture',83,'B-',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'Biology',91,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'English 10',91,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'French III',86,'B',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'Geometry',89,'B+',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'Global History II Honors',84,'B',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'Physical Education',100,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,10,'PLTW - Introduction to Engineering',91,'A',1)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,11,'Algebra II',86,'B',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,11,'AP English Language & Composition',90,'A',1)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,11,'Chemistry',86,'B',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,11,'Physical Education',100,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,11,'PLTW - Civil Engineering',88,'B+',1)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,11,'PLTW - Principals of Engineering',95,'A',1)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,11,'US History',95,'A',0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,12,'DCC English',NULL,NULL,1)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,12,'Economics',NULL,NULL,0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,12,'Health',NULL,NULL,0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,12,'Physical Education',NULL,NULL,0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,12,'Physics',NULL,NULL,0)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,12,'PLTW - Project',NULL,NULL,1)
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade,collegeCredit) values (1,12,'Pre Calculus',NULL,NULL,0)
GO

Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'03/25/2017','11:00 AM',1,'@Briarcliff High School',1,'Briarcliff High School, 444 Pleasantville Rd, Briarcliff Manor, NY 10510, USA', 'Briarcliff High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'03/31/2017','04:30 PM',1,'@Ramapo High School',1,'Ramapo High School, 400 Viola Rd, Spring Valley, NY 10977, USA', 'Ramapo High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/03/2017','04:00 PM',1,'@Lakeland High School',1,'Lakeland High School, 1349 E Main St, Shrub Oak, NY 10588, USA', 'Lakeland High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/04/2017','04:30 PM',1,'New Rochelle',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/06/2017','04:30 PM',1,'@Portchester High School',1,'Port Chester High School, 1 Tamarack Rd, Port Chester, NY 10573, USA', 'Portchester High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/08/2017','11:30 AM',1,'@Horace Greely',1,'Horace Greeley High School, 70 Roaring Brook Rd, Chappaqua, NY 10514, USA','Horace Greely') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/10/2017','11:00 AM',1,'Mahopac',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/12/2017','11:00 AM',1,'@Mahopac High School',1,'Mahopac High School, 421 Baldwin Place Rd, Mahopac, NY 10541, USA', 'Mahopac High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/15/2017','11:00 AM',1,'Pawling High School',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/18/2017','04:30 PM',1,'Ketcham',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/20/2017','04:30 PM',1,'@Ketcham',1,'Roy C Ketcham Senior High School, 99 Myers Corners Rd, Wappingers Falls, NY 12590, USA', 'Roy C Ketcham Senior High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/22/2017','02:00 PM',1,'Croton Harmon',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/24/2017','04:00 PM',1,'Yorktown',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/26/2017','04:30 PM',1,'@John Jay East Fishkill',1,'John Jay Senior High School, 2012 NY-52, Hopewell Junction, NY 12533, USA','John Jay Senior High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'04/28/2017','04:30 PM',1,'John Jay East Fishkill',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'05/02/2017','04:30 PM',1,'Arlington High School',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'05/04/2017','04:30 PM',1,'@Arlington High School',1,'Arlington High School, 1157 State Rte 55, Lagrangeville, NY 12540, USA', 'Arlington High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'05/06/2017','01:30 PM',1,'@Fox Lane',1,'Fox Lane High School, Mt Kisco, NY 10549, USA','Fox Lane High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'05/08/2017','04:30 PM',1,'@Brewster',1,'Brewster High School, 50 Foggintown Rd, Brewster, NY 10509, USA','Brewster High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'05/09/2017','04:00 PM',1,'@Somers',1,'Somers High School, 120 Primrose St, Lincolndale, NY 10540, USA','Somers High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'05/11/2017','04:00 PM',1,'Walter Panas',1,'Carmel High School, County Center, Carmel, NY 10512, USA', 'Carmel High School') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'06/19/2017', null,1,'Diamond Nation',2,'Diamond Nation, 5 Bartles Corner Rd, Flemington, NJ 08822, USA', 'Diamond Nation') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'06/26/2017', null,1,'Diamond Nation',2,'Diamond Nation, 5 Bartles Corner Rd, Flemington, NJ 08822, USA', 'Diamond Nation') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'07/10/2017', null,1,'Boston Invitational - NorthBorough MA',2,'New England Baseball Complex, 333 SW Cutoff, Northborough, MA 01532, USA','New England Baseball Complex') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'07/13/2017', null,1,'Boston Open Northborough, MA',2,'New England Baseball Complex, 333 SW Cutoff, Northborough, MA 01532, USA','New England Baseball Complex') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'07/21/2017', null,1,'Fordham Showcase Camp',2,'Fordham University, Bronx, NY 10458, USA','Fordham University') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'07/31/2017', null,1,'Blue Chip Wood Bat',2,'Diamond Nation, 5 Bartles Corner Rd, Flemington, NJ 08822, USA', 'Diamond Nation')
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location, linkText) values (1,'08/15/2017', null,1,'Evolution Showcase',3,'TBD', null) 
GO

INSERT INTO studentLinks (studentid, activityid, linkName, linkDescription, linkUrl) VALUES (1, 1, 'Evolution Baseball', 'My Travel Baseball Team', 'http://www.evolutionbaseballny.com')
INSERT INTO studentLinks (studentid, activityid, linkName, linkDescription, linkUrl) VALUES (1, 1, 'Sal Agostinelli', 'DR Trip - Hitting Info', 'http://www.salsbaseball.com/index.html')
INSERT INTO studentLinks (studentid, activityid, linkName, linkDescription, linkUrl) VALUES (1, 1, 'Perfect Game Profile', 'My Profile on Perfect Game',  'http://www.perfectgame.org/Players/Playerprofile.aspx?ID=504429')
INSERT INTO studentLinks (studentid, activityid, linkName, linkDescription, linkUrl) VALUES (1, 1, 'Carmel High School Varsity Baseball Schedule', 'Carmel High School Varsity Baseball Schedule', 'http://158927.digitalsports.com/pages/schedule/schedule.php?level_id=696828')
INSERT INTO studentLinks (studentid, activityid, linkName, linkDescription, linkUrl) VALUES (1, 1, 'Boy Scout Troop 5', 'Troop 5 Bronxville, my boyscount troop', 'https://troop5.net/')
GO

insert into studentActivities (studentid, activityid) values (1, 1)
GO

INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Fielding', 'Backhand.mp4', 'Backhand.mp4', 'Backhand.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 1', 'Day1Ab1.mp4',	'Day1Ab1.mp4',	'Day1Ab1.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 1', 'Day1Ab2.mp4',	'Day1Ab2.mp4',	'Day1Ab2.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 1', 'Day1Ab3.mp4',	'Day1Ab3.mp4',	'Day1Ab3.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 2', 'Day2Ab1.mp4',	'Day2Ab1.mp4',	'Day2Ab1.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 2', 'Day2Ab2.mp4',	'Day2Ab2.mp4',	'Day2Ab2.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 2', 'Day2Ab3.mp4',	'Day2Ab3.mp4',	'Day2Ab3.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 2', 'Day2Ab4.mp4',	'Day2Ab4.mp4',	'Day2Ab4.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 3', 'Day3Ab1.mp4',	'Day3Ab1.mp4',	'Day3Ab1.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 3', 'Day3Ab2.mp4',	'Day3Ab2.mp4',	'Day3Ab2.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 3', 'Day3Ab3.mp4',	'Day3Ab3.mp4',	'Day3Ab3.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 3', 'Day3Ab4.mp4',	'Day3Ab4.mp4',	'Day3Ab4.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 2', 'Day4Ab1.mp4',	'Day4Ab1.mp4',	'Day4Ab1.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 4', 'Day4Ab2.mp4',	'Day4Ab2.mp4',	'Day4Ab2.mp4')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 5', 'Day5Ab1.m4v',	'Day5Ab1.m4v',	'Day5Ab1.m4v')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 5', 'Day5Ab2.m4v',	'Day5Ab2.m4v',	'Day5Ab2.m4v')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 5', 'Day5Ab3.m4v',	'Day5Ab3.m4v',	'Day5Ab3.m4v')
INSERT INTO studentVideos (studentid,category,title,filename,description) VALUES (1,'DR Trip - Hitting Day 5', 'Day5Ab4.m4v',	'Day5Ab4.m4v',	'Day5Ab4.m4v')
GO

INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'Hitting', 'FrancisAtBat.JPG', 'FrancisAtBat.JPG', 'FrancisAtBat.JPG')
INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'Hitting', 'FrancisFoxLaneAtRenegades.JPG', 'FrancisFoxLaneAtRenegades.JPG', 'FrancisFoxLaneAtRenegades.JPG')
INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'Hitting', 'JustBeforeImpact.JPG', 'JustBeforeImpact.JPG', 'JustBeforeImpact.JPG')
INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'Hitting', 'TakingSigns.JPG', 'TakingSigns.JPG', 'TakingSigns.JPG')
INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'Boy Scount', 'FrancisBoyScoutsAtPodium.JPG',	'FrancisBoyScoutsAtPodium.JPG',	'FrancisBoyScoutsAtPodium.JPG')
INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'Cooperstown', 'FrancisCooperstownGrandSlam.JPG',	'FrancisCooperstownGrandSlam.JPG',	'FrancisCooperstownGrandSlam.JPG')
INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'Pitching', 'Pitching.JPG',	'Pitching.JPG',	'Pitching.JPG')
INSERT INTO studentPictures (studentid,category,title,filename,description) VALUES (1,'On the bases', 'ReadyToSteal.JPG',	'ReadyToSteal.JPG',	'ReadyToSteal.JPG')
GO


INSERT INTO studentExtraCurricular (studentid, ecName, ecDescription) VALUES (1, 'Boy Scouts','I''m a life scout with Troop 5 Bronxville')
INSERT INTO studentExtraCurricular (studentid, ecName, ecDescription) VALUES (1, 'Bat Making','As part of a project for my AP English class,  I''m learning to make baseball bats on a wood lathe.')
GO

INSERT INTO studentBaseball (studentid,statsPictureId,runningTime,bats,throws,travelTeam,travelUrl, runningtimelocation, runningtimelocationUrl)
VALUES (1, 2, 7.5, 'R', 'R', 'Evolution Baseball', 'http://www.evolutionbaseballny.com', 'NYACK College', 'http://athletics.nyack.edu/sports/bsb/coaches/index')
GO

INSERT INTO studentPositions (studentid,activityid,position,isprimary) VALUES (1, 1, '3B', 1)
INSERT INTO studentPositions (studentid,activityid,position,isprimary) VALUES (1, 1, 'SS', 0)
INSERT INTO studentPositions (studentid,activityid,position,isprimary) VALUES (1, 1, '2B', 0)
INSERT INTO studentPositions (studentid,activityid,position,isprimary) VALUES (1, 1, 'OF', 0)
INSERT INTO studentPositions (studentid,activityid,position,isprimary) VALUES (1, 1, 'RHP', 0)
GO

insert into studentBBHitting (studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases)
values (1,'Test Data Set 1','6/1/2017','Test Game 1',4,0,1,0,0,0,1,1,0,0,2,2,1)

insert into studentBBHitting (studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases)
values (1,'Test Data Set 1','6/1/2017','Test Game 2',4,0,1,0,0,0,1,1,0,0,2,2,1)

insert into studentBBHitting (studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases)
values (1,'Test Data Set 1','6/1/2017','Test Game 3',4,0,1,0,0,0,1,1,0,0,2,2,1)

insert into studentBBHitting (studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases)
values (1,'Test Data Set 2','6/1/2017','Test Game 4',4,0,1,0,0,0,1,1,0,0,2,2,1)

insert into studentBBHitting (studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases)
values (1,'Test Data Set 2','6/1/2017','Test Game 5',4,0,1,0,0,0,1,1,0,0,2,2,1)

insert into studentBBHitting (studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases)
values (1,'Test Data Set 2','6/1/2017','Test Game 6',4,0,1,0,0,0,1,1,0,0,2,2,1)
GO

insert into studentCoaches(studentid, sortorder, name, description, email, phone) values (1, 1, 'Joe Hackert', 'Carmel High School Varsity Coach', 'jhackert@carmelta.org', '')
insert into studentCoaches(studentid, sortorder, name, description, email, phone) values (1, 2, 'John Muller', 'Evolution Baseball 17U Showcase Team Head Coach', 'mullerbaseball@yahoo.com', '')
insert into studentCoaches(studentid, sortorder, name, description, email, phone) values (1, 3, 'Chris Hayes', 'Hitting Coach', 'chayes44@optonline.net', '')
insert into studentCoaches(studentid, sortorder, name, description, email, phone) values (1, 4, 'Rafael Rigueiro', 'Pitching Coach', 'rigueiro@gmail.com', '')
GO

insert into userRoles (role) values ('Guest')
insert into userRoles (role) values ('Student')
insert into userRoles (role) values ('Coach')
insert into userRoles (role) values ('Admin')
GO



*/