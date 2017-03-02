CREATE VIEW StudentSchedWithActivity
	AS SELECT s.id, s.studentid, s.activitydate, s.starttime, s.activityid, s.activitydesc, s.activitytypeid, s.location, s.linkText,
	a.activitytype
FROM studentSchedules s	
	left outer join activityType a on s.activitytypeid = a.id
	
