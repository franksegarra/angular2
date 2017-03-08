CREATE VIEW [dbo].[studentProfilePictures]
AS
select 
CAST (ISNULL(ROW_NUMBER() OVER(ORDER BY (SELECT 0)), -1) as int) AS id,
NULLIF(studentid,'') as studentid, 
ISNULL(pictureid, -1) as pictureid, 
NULLIF(picturetype,'') as picturetype, 
NULLIF(created,'') as created
from 
(
	select id as studentid, profilepictureid as pictureid, 'ProfilePicture' as picturetype, created
	from student where profilePictureId is not null
	union
	select studentid, statspictureid as pictureid,  'BBStatsPicture' as picturetype, created 
	from studentBaseball where statspictureid is not null
) v