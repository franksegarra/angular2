import { IProfile } from './IProfile';

export class Profile implements IProfile {
	id: number;
    profilename: string;
    firstname: string;
    lastname: string;
    primaryemail: string;
    highschoolid: number;
    graduationyear: number;
    additionalinfo: string;
    gpa: number;
    sattestdate: Date;
    satscore: number;
    acttestdate: Date;
    actscore: number;
    ncaaid: string;
    phone: number;
    streetaddress1: string;
    streetaddress2: string;
    city: string;
    state: string;
    zip: string;
    displayaddrandphone: number;
    highschoolname: string;
    profilepictureid: number;
    profilepicturefilename: string;
    height: string;
    weight: string;
    collegemajor: string;
}