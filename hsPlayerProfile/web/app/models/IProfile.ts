export interface IProfile {
	id: number;
        profileName: string;
        firstName: string;
        lastName: string;
        primaryEmail: string;
        highSchoolId: number;
        graduationYear: number;
        additionalInfo: string;
        gpa: number;
        satTestDate: Date;
        satScore: number;
        actTestDate: Date;
        actScore: number;
        ncaaid: string;
        phone: number;
        streetAddress1: string;
        streetAddress2: string;
        city: string;
        state: string;
        zip: string;
        displayAddrAndPhone: number;
        highSchoolName: string;
}