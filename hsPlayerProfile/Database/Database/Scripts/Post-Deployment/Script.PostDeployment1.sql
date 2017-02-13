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

INSERT INTO highSchool (highSchoolName) VALUES ('Carmel High School')
GO

INSERT INTO student (lastName, firstName, highSchoolId, profileName, primaryEmail, graduationYear, additionalInfo) VALUES ('Segarra', 'Francis', 1, 'FrancisSegarra', 'segarraf18@gmail.com', 2018, 'I am offspring #2')
INSERT INTO student (lastName, firstName, highSchoolId, profileName, primaryEmail, graduationYear, additionalInfo) VALUES ('Segarra', 'Katherine', 1, 'KatherineSegarra', 'krsegarra@gmail.com', 2015, 'I am offspring #1')
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

insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,9,'Algebra I',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,9,'Global History I',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,9,'Earth Science',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,9,'English',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,9,'French III',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,9,'Design and Drawing I',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,9,'World of Technology',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,10,'Geometry',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,10,'Global History II',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,10,'Biology',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,10,'English 10',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,10,'French IV',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,10,'PLTW - Introduction to Engineering',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,10,'Architecture',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,11,'Algebra II',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,11,'US History',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,11,'Chemistry',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,11,'AP English Language',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,11,'*PLTW - Principals of Engineering',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,11,'*PLTW - Civil Engineering',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,12,'Pre Calculus',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,12,'Economics',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,12,'Physics',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,12,'**DCC English',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,12,'*PLTW - Project',92,'A')
insert into studentClasses (studentid,grade,className,finalAverage,letterGrade) values (1,12,'Health',92,'A')
GO

Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'03/25/2017','11:00 AM',1,'@Briarcliff High School',1,'Briarcliff High School, 444 Pleasantville Rd, Briarcliff Manor, NY 10510, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'03/31/2017','04:30 PM',1,'@Ramapo High School',1,'Ramapo High School, 400 Viola Rd, Spring Valley, NY 10977, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/03/2017','04:00 PM',1,'@Lakeland High School',1,'Lakeland High School, 1349 E Main St, Shrub Oak, NY 10588, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/04/2017','04:30 PM',1,'New Rochelle',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/06/2017','04:30 PM',1,'@Portchester High School',1,'Port Chester High School, 1 Tamarack Rd, Port Chester, NY 10573, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/08/2017','11:30 AM',1,'@Horace Greely',1,'Horace Greeley High School, 70 Roaring Brook Rd, Chappaqua, NY 10514, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/10/2017','11:00 AM',1,'Mahopac',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/12/2017','11:00 AM',1,'@Mahopac High School',1,'Mahopac High School, 421 Baldwin Place Rd, Mahopac, NY 10541, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/15/2017','11:00 AM',1,'Pawling High School',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/18/2017','04:30 PM',1,'Ketcham',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/20/2017','04:30 PM',1,'@Ketcham',1,'Roy C Ketcham Senior High School, 99 Myers Corners Rd, Wappingers Falls, NY 12590, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/22/2017','02:00 PM',1,'Croton Harmon',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/24/2017','04:00 PM',1,'Yorktown',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/26/2017','04:30 PM',1,'@John Jay East Fishkill',1,'John Jay Senior High School, 2012 NY-52, Hopewell Junction, NY 12533, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'04/28/2017','04:30 PM',1,'John Jay East Fishkill',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'05/02/2017','04:30 PM',1,'Arlington High School',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'05/04/2017','04:30 PM',1,'@Arlington High School',1,'Arlington High School, 1157 State Rte 55, Lagrangeville, NY 12540, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'05/06/2017','01:30 PM',1,'@Fox Lane',1,'Fox Lane High School, Mt Kisco, NY 10549, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'05/08/2017','04:30 PM',1,'@Brewster',1,'Brewster High School, 50 Foggintown Rd, Brewster, NY 10509, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'05/09/2017','04:00 PM',1,'@Somers',1,'Somers High School, 120 Primrose St, Lincolndale, NY 10540, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'05/11/2017','04:00 PM',1,'Walter Panas',1,'Carmel High School, County Center, Carmel, NY 10512, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'06/19/2017', null,1,'Diamond Nation',2,'Diamond Nation, 5 Bartles Corner Rd, Flemington, NJ 08822, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'06/26/2017', null,1,'Diamond Nation',2,'Diamond Nation, 5 Bartles Corner Rd, Flemington, NJ 08822, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'07/10/2017', null,1,'Boston Invitational - NorthBorough MA',2,'New England Baseball Complex, 333 SW Cutoff, Northborough, MA 01532, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'07/13/2017', null,1,'Boston Open Northborough, MA',2,'New England Baseball Complex, 333 SW Cutoff, Northborough, MA 01532, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'07/21/2017', null,1,'Fordham Showcase Camp',2,'Fordham University, Bronx, NY 10458, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'07/31/2017', null,1,'Blue Chip Wood Bat',2,'Diamond Nation, 5 Bartles Corner Rd, Flemington, NJ 08822, USA') 
Insert into studentSchedules (studentid, activityDate, startTime, activityid, activitydesc,activitytypeid,location) values (1,'08/15/2017', null,1,'Evolution Showcase',3,'TBD') 
GO

INSERT INTO studentLinks (studentid, activityid, linkDescription, linkUrl) VALUES (1, 1, 'Evolution Baseball', 'http://www.evolutionbaseballny.com')
INSERT INTO studentLinks (studentid, activityid, linkDescription, linkUrl) VALUES (1, 1, 'Sal Agostinelli', 'http://www.salsbaseball.com/index.html')
INSERT INTO studentLinks (studentid, activityid, linkDescription, linkUrl) VALUES (1, 1, 'Perfect Game Profile', 'http://www.perfectgame.org/Players/Playerprofile.aspx?ID=504429')
INSERT INTO studentLinks (studentid, activityid, linkDescription, linkUrl) VALUES (1, 1, 'Carmel High School Varsity Baseball Schedule', 'http://158927.digitalsports.com/pages/schedule/schedule.php?level_id=696828')
GO

insert into studentActivities (studentid, activityid) values (1, 1)
GO
