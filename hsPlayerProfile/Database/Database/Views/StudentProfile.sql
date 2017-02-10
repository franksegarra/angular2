CREATE VIEW [dbo].[StudentProfile] AS
SELECT s.id, s.lastName, s.firstName, s.profileName, s.primaryEmail,
		s.highSchoolId, h.highSchoolName
FROM student s left outer join highSchool h on s.highSchoolId = h.id