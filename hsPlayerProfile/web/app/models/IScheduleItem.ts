export interface IScheduleItem {
    id: number;
    studentid: number;
    activitydate: Date;
    starttime: Date;
    activityid: number; 
    activitydesc: string;
    activitytypeid: number; 
    location: string;
}