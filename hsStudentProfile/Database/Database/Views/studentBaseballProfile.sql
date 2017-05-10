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
	case 
		when sb.p = 'p' then 'P'
		when sb.c = 'p' then 'C'
		when sb.b1 = 'p' then '1B'
		when sb.b2 = 'p' then '2B'
		when sb.b3 = 'p' then '3B'
		when sb.ss = 'p' then 'SS'
		when sb.lf = 'p' then 'LF'
		when sb.cf = 'p' then 'CF'
		when sb.rf = 'p' then 'RF'
		else null 
	end as primaryposition, 
	pics.filename as statspicturefilename,
	sb.runningtimelocation,
	sb.runningtimelocationurl,
	sb.p,
	sb.c,
	sb.b1,
	sb.b2,
	sb.b3,
	sb.ss,
	sb.lf,
	sb.cf,
	sb.rf,
	sb.created
from studentbaseball sb
left outer join studentpictures pics on (sb.statspictureid = pics.id)

/* 
left outer join studentpositions sp1 on (sp1.studentid = sb.studentid and sp1.isprimary = 1)
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
*/