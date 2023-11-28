export interface CandidateExpsProps {
    ecrRxperienceRole: string;
    ecrExperienceEnterprise: string;
    ecrExperienceDescription:string;
    ecrExperienceType: CandidateExpsExpTypeProps
    ecrExperienceStartDate: Date;
    ecrExperienceEndDate: Date;
}

enum CandidateExpsExpTypeProps {
    ESTÁGIO,
    CLT,
    PJ
}