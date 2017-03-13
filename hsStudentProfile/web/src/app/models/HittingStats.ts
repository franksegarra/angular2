import { IHittingStats } from './IHittingStats';

export class HittingStats implements IHittingStats {
    id: number;
    studentid: number;
    category: string;
    dateplayed: Date;
    teamplayed: string;
    plateappearances: number = 0;
    strikeouts: number = 0;
    walks: number = 0;
    hitbypitch: number = 0;
    sacflys: number = 0;
    sacbunts: number = 0;
    singles: number = 0;
    doubles: number = 0;
    triples: number = 0;
    homeruns: number = 0;
    runsbattediin: number = 0;
    runsscored: number = 0;
    stolenbases: number = 0;
    atbats: number = 0;
    totalbases: number = 0;
    hits: number = 0;
    battingaverage: number = 0;
    onbasepercentage: number = 0;
    slugging: number = 0;
    onbaseplusslugging: number = 0;
}