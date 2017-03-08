CREATE VIEW [dbo].[StudentProfilePicturesDummy]
AS
select CAST (ISNULL(ROW_NUMBER() OVER(ORDER BY (SELECT 0)), -1) as int) AS id, *
from 
(
	select id as studentid, profilepictureid as pictureid, 'ProfilePicture' as picturetype, created
	from student where profilePictureId is not null
	union
	select studentid, statspictureid as pictureid,  'BBStatsPicture' as picturetype, created 
	from studentBaseball where statspictureid is not null
) v