export interface IStudentSchedule {
    id: number;
    studentid: number;
    activityid: number; 
    activitytypeid: number; 
    activitydesc: string;
    venue: string;
    address: string;
    city: string;
    statecode: string;
    zipcode: string;
    activitydate: Date;
    starttime: string;
}