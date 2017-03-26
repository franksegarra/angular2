import { IHittingStats } from './IHittingStats';
import { HittingStats } from './HittingStats';

export class HittingCategory {
    category: string;
    categorylist: Array<IHittingStats> = [];
    categorytotals: IHittingStats;

    createStatsCategoryTotal () {
        var total: HittingStats = new HittingStats();

        this.categorylist.forEach(function(item) {

            //Calc stats for this row
            item.atbats = item.plateappearances - item.walks - item.hitbypitch - item.sacflys - item.sacbunts;
            item.totalbases = (1 * item.singles) + (2 * item.doubles) + (3 * item.triples) + (4 * item.homeruns)
            item.hits = (item.singles + item.doubles + item.triples + item.homeruns)
            item.battingaverage = item.atbats == 0 ? 0 : item.hits/item.atbats
            item.onbasepercentage = (item.atbats + item.walks + item.hitbypitch + item.sacflys) == 0 ? 0 : (item.hits + item.walks + item.hitbypitch) / (item.atbats + item.walks + item.hitbypitch + item.sacflys)
            item.slugging = item.atbats == 0 ? 0 : item.totalbases/item.atbats
            item.onbaseplusslugging = item.onbasepercentage + item.slugging

            //Accumulate
            total.plateappearances += item.plateappearances;
            total.strikeouts += item.strikeouts;
            total.walks += item.walks;
            total.hitbypitch += item.hitbypitch;
            total.sacflys += item.sacflys;
            total.sacbunts += item.sacbunts;
            total.singles += item.singles;
            total.doubles += item.doubles;
            total.triples += item.triples;
            total.homeruns += item.homeruns;
            total.runsbattediin += item.runsbattediin;
            total.runsscored += item.runsscored;
            total.stolenbases += item.stolenbases;
        });

        //Calc stats for total row
        total.atbats = total.plateappearances - total.walks - total.hitbypitch - total.sacflys - total.sacbunts;
        total.totalbases = (1 * total.singles) + (2 * total.doubles) + (3 * total.triples) + (4 * total.homeruns)
        total.hits = (total.singles + total.doubles + total.triples + total.homeruns)
        total.battingaverage = total.atbats == 0 ? 0 : total.hits/total.atbats
        total.onbasepercentage = (total.atbats + total.walks + total.hitbypitch + total.sacflys) == 0 ? 0 : (total.hits + total.walks + total.hitbypitch) / (total.atbats + total.walks + total.hitbypitch + total.sacflys)
        total.slugging = total.atbats == 0 ? 0 : total.totalbases/total.atbats
        total.onbaseplusslugging = total.onbasepercentage + total.slugging
        this.categorytotals = total;
    }
}