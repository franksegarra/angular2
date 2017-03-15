export interface IHittingStats {
    id: number;
    studentid: number;
    category: string;
    dateplayed: Date;
    teamplayed: string;
    plateappearances: number;
    strikeouts: number;
    walks: number;
    hitbypitch: number;
    sacflys: number;
    sacbunts: number;
    singles: number;
    doubles: number;
    triples: number;
    homeruns: number;
    runsbattediin: number;
    runsscored: number;
    stolenbases: number;
    atbats: number;
    totalbases: number;
    hits: number;
    battingaverage: number;
    onbasepercentage: number;
    slugging: number;
    onbaseplusslugging: number;
}