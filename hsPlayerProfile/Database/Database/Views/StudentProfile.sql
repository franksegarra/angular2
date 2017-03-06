CREATE VIEW [dbo].[StudentProfile] AS
SELECT 
	s.id, 
	s.profileName, 
	s.firstName, 
	s.lastName, 
	s.primaryEmail, 
	s.highSchoolId,
	s.graduationYear,
	s.additionalInfo, 
	s.gpa, 
	s.satTestDate, 
	s.satScore, 
	s.actTestDate, 
	s.actScore, 
	s.ncaaid, 
	s.phone, 
	s.streetAddress1, 
	s.streetAddress2, 
	s.city, 
	s.state, 
	s.zip, 
	s.displayAddrAndPhone, 
	h.highSchoolName,
	s.profilePictureId,
	p.filename as profilePicturefilename,
	s.height,
	s.weight,
	s.created
FROM student s 
	left outer join highSchool h on s.highSchoolId = h.id
	left outer join studentPictures p on s.profilePictureId = p.id