create view [dbo].[studentprofilepictures]
as
select 
cast (isnull(row_number() over(order by (select 0)), -1) as int) as id,
nullif(studentid,'') as studentid, 
isnull(pictureid, -1) as pictureid, 
nullif(picturetype,'') as picturetype, 
nullif(created,'') as created
from 
(
	select id as studentid, profilepictureid as pictureid, 'profilepicture' as picturetype, created
	from student where profilepictureid is not null
	union
	select studentid, statspictureid as pictureid,  'bbstatspicture' as picturetype, created 
	from studentbaseball where statspictureid is not null
) v