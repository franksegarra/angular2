CREATE VIEW [dbo].[StudentProfile] AS
SELECT s.id, s.profileName, s.firstName, s.lastName, s.primaryEmail, s.highSchoolId, h.highSchoolName,
		s.graduationYear, s.additionalInfo	
FROM student s left outer join highSchool h on s.highSchoolId = h.id