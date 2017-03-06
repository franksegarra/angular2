CREATE VIEW [dbo].[studentBaseballProfile]
AS 
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
from studentBaseball sb
left outer join studentPositions sp1 on (sp1.studentid = sb.studentid and sp1.isprimary = 1)
left outer join studentPictures pics on (sb.statsPictureId = pics.id)
left outer join
(
	SELECT spOuter.studentid, STUFF((SELECT  ',' + position
				FROM studentPositions spInner
				WHERE isprimary = 0  
				and spInner.studentid=spOuter.studentid
				ORDER BY id
			FOR XML PATH('')), 1, 1, '') AS otherPositions
	FROM studentPositions spOuter
	GROUP BY spOuter.studentid
) op on (op.studentid = sb.studentid)