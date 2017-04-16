export interface IScheduleItem {
    id: number;
    studentid: number;
    activitydate: Date;
    starttime: string;
    activityid: number; 
    activitydesc: string;
    activitytypeid: number; 
    venue: string;
    address: string;
    city: string;
    statecode: string;
    zipcode: string;
    location: string;
    activitytype: string;
}