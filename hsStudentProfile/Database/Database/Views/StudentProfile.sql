create view [dbo].[studentprofile] as
select 
	s.id, 
	s.id as studentid, 
	u.profilename, 
	u.firstname, 
	u.lastname, 
	u.primaryemail, 
	s.highschoolid,
	s.graduationyear,
	s.additionalinfo, 
	s.gpa, 
	s.sattestdate, 
	s.satscore, 
	s.acttestdate, 
	s.actscore, 
	s.ncaaid, 
	u.phone, 
	u.streetaddress1, 
	u.streetaddress2, 
	u.city, 
	u.state, 
	u.zip, 
	u.displayaddrandphone, 
	h.highschoolname,
	s.profilepictureid,
	p.filename as profilepicturefilename,
	s.height,
	s.weight,
	s.created,
	s.collegemajor
from student s 
	left outer join users u on u.id = s.id
	left outer join highschool h on s.highschoolid = h.id
	left outer join studentpictures p on s.profilepictureid = p.id