create view studentschedwithactivity
	as select s.id, s.studentid, s.activitydate, s.starttime, s.activityid, s.activitydesc, s.activitytypeid, s.location, s.linktext,
	a.activitytype, s.created
from studentschedules s	
	left outer join activitytype a on s.activitytypeid = a.id
	
