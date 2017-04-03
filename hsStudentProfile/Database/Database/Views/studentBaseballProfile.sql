create view [dbo].[studentbaseballprofile]
as 
select 
	sb.id,
	sb.studentid, 
	sb.statspictureid as statspictureid,
	sb.runningtime,
	sb.bats,
	sb.throws,
	sb.travelteam,
	sb.travelurl,
	sp1.position, 
	op.otherpositions,
	pics.filename as statspicturefilename,
	sb.runningtimelocation,
	sb.runningtimelocationurl,
	sb.created
from studentbaseball sb
left outer join studentpositions sp1 on (sp1.studentid = sb.studentid and sp1.isprimary = 1)
left outer join studentpictures pics on (sb.statspictureid = pics.id)
left outer join
(
	select spouter.studentid, stuff((select  ',' + position
				from studentpositions spinner
				where isprimary = 0  
				and spinner.studentid=spouter.studentid
				order by id
			for xml path('')), 1, 1, '') as otherpositions
	from studentpositions spouter
	group by spouter.studentid
) op on (op.studentid = sb.studentid)