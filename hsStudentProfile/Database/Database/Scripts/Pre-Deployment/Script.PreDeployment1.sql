﻿/*
 Pre-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be executed before the build script.	
 Use SQLCMD syntax to include a file in the pre-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the pre-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
/*
if exists(select name from sysobjects where name = 'studentVideos')
drop table [dbo].[studentVideos]
go

if exists(select name from sysobjects where name = 'studentPictures')
drop table [dbo].[studentPictures]
go

if exists(select name from sysobjects where name = 'studentSchedules')
drop table [dbo].[studentSchedules]
go

if exists(select name from sysobjects where name = 'studentLinks')
drop table [dbo].[studentLinks]
go

if exists(select name from sysobjects where name = 'studentClasses')
drop table [dbo].[studentClasses]
go

if exists(select name from sysobjects where name = 'studentActivities')
drop table [dbo].[studentActivities]
go

if exists(select name from sysobjects where name = 'studentBBHitting')
drop table [dbo].[studentBBHitting]
go

if exists(select name from sysobjects where name = 'studentCoaches')
drop table [dbo].[studentCoaches]
go

if exists(select name from sysobjects where name = 'studentBaseball')
drop table [dbo].[studentBaseball]
go

if exists(select name from sysobjects where name = 'studentContact')
drop table [dbo].[studentContact]
go

if exists(select name from sysobjects where name = 'studentExtracurricular')
drop table [dbo].[studentExtracurricular]
go

if exists(select name from sysobjects where name = 'studentPositions')
drop table [dbo].[studentPositions]
go

if exists(select name from sysobjects where name = 'student')
drop table [dbo].[student]
go

if exists(select name from sysobjects where name = 'highSchool')
drop table [dbo].[highSchool]
go

if exists(select name from sysobjects where name = 'activityType')
drop table [dbo].[activityType]
go

if exists(select name from sysobjects where name = 'activity')
drop table [dbo].[activity]
go

if exists(select name from sysobjects where name = 'siteFeedback')
drop table [dbo].[sitefeedback]
go
*/



