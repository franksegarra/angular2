CREATE VIEW [dbo].[studentProfilePictures]
AS
select NULLIF(id,'') as id, 
NULLIF(studentid,'') as studentid, 
ISNULL(pictureid, -1) as pictureid, 
NULLIF(picturetype,'') as picturetype, 
NULLIF(created,'') as created
from [dbo].[StudentProfilePicturesDummy]