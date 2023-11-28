import { CandidateCourseProps } from "./candidateCourseInterface";
import { CandidateExpsProps } from "./candidateExpsInterface";
import { CandidateLanguageProps } from "./candidateLanguageInterface";
import { CandidateStackProps } from "./candidateStackInterface";

export interface UserResponseInterface {
    curriculum: UserResponseCurriculum;
    user: UserResponseUser
}


interface UserResponseCurriculum {
    candidate?: UserResponseCandidate;
    candidateStacks?: CandidateStackProps[]
    courses?: CandidateCourseProps[]
    curriculumId: number;
    experiences?: CandidateExpsProps[]
    languages?: CandidateLanguageProps[]
    linkGithub?: string;
    linkInstagram?: string;
    linkPortifolio?: string;
    userCurriculumRole: string;
    userCurriculumSeniority: string;
    linkProfile: null | string;
    objetivo: null | string;
}

interface UserResponseCandidate {
    candidateCpf?: string;
    candidateGithubLink?: string;
    candidateInstagramLink?: string;
}

export interface UserResponseUser {
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    address: null | string;
    authorities: null | string[];
    credentialsNonExpired: boolean;
    enabled: boolean;
    password: string;
    userBirthDate: string;
    userConfirmEmailToken: string;
    userConfirmEmailTokenExpiration: string;
    userCreatedOn: string;
    userEmail: string;
    userEmailConfirmed: boolean;
    userFirstName: string;
    userId: number;
    userLastName: string;
    userMobilePhone: null | string;
    userPassword: string;
    userRole: string;
    userToken: null | string;
    userTokenExpiration: null | string;
    username: string;
}


