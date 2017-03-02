export interface IScheduleItem {
    id: number;
    studentid: number;
    activitydate: Date;
    starttime: string;
    activityid: number; 
    activitydesc: string;
    activitytypeid: number; 
    location: string;
    linkText: string;
    activitytype: string;
}