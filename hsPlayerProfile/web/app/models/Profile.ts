import { IProfile } from './IProfile';

export class Profile implements IProfile {
	public id: number;
    public profileName: string;
    public firstName: string;
    public lastName: string;
    public primaryEmail: string;
    public highSchoolId: number;
    public graduationYear: number;
    public additionalInfo: string;
    public gpa: number;
    public satTestDate: Date;
    public satScore: number;
    public actTestDate: Date;
    public actScore: number;
    public ncaaid: string;
    public phone: number;
    public streetAddress1: string;
    public streetAddress2: string;
    public city: string;
    public state: string;
    public zip: string;
    public displayAddrAndPhone: number;
    public highschoolname: string;
    public profilePictureId: number;
    public profilepicturefilename: string;
    public height: string;
    public weight: string;
    public collegemajor: string;
}