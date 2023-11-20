export interface CandidateExpsProps {
    experienceRole: string;
    experienceEnterprise: string;
    experienceDescription:string;
    experienceType: CandidateExpsExpTypeProps
    experienceStartDate: Date;
    experienceEndDate: Date;
}

enum CandidateExpsExpTypeProps {
    INTERNSHIP,
    CLT,
    FREELANCE
}