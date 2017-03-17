CREATE VIEW [dbo].[studentBBHittingStats]
AS 
SELECT id,studentid,category,dateplayed,teamplayed,plateappearances,strikeouts,walks,hitbypitch
      ,sacflys,sacbunts,singles,doubles,triples,homeruns,runsbattediin,runsscored,stolenbases,
	(plateappearances - walks - hitbypitch - sacflys - sacbunts) as atbats,
	((1 * singles) + (2 * doubles) + (3 * triples) + (4 * homeruns)) as totalbases,
	(singles + doubles + triples + homeruns) as hits,

	case (plateappearances - walks - hitbypitch - sacflys - sacbunts) 
		when 0 then 0
		else (cast(singles as float) + doubles + triples + homeruns)/(plateappearances - walks - hitbypitch - sacflys - sacbunts) 
	end as battingaverage,
	
	case (plateappearances - sacbunts) 
		when 0 then 0
		else (cast(singles as float) + doubles + triples + homeruns + walks + hitbypitch) / (plateappearances - sacbunts)  
	end as onbasepercentage,
	
	case (plateappearances - walks - hitbypitch - sacflys - sacbunts)
		when 0 then 0
		else ((1 * cast(singles as float)) + (2 * doubles) + (3 * triples) + (4 * homeruns))/(plateappearances - walks - hitbypitch - sacflys - sacbunts) 
	end as slugging,

	case (plateappearances - sacbunts)
		when 0 then 0
		else
			case (plateappearances - walks - hitbypitch - sacflys - sacbunts)
			when 0 then 0
			else (cast(singles as float) + doubles + triples + homeruns + walks + hitbypitch) / (plateappearances - sacbunts) + 
				((1 * cast(singles as float)) + (2 * doubles) + (3 * triples) + (4 * homeruns))/(plateappearances - walks - hitbypitch - sacflys - sacbunts) 
			end
	end as onbaseplusslugging,
	created
FROM studentBBHitting
