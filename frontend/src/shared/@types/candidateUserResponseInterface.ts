import { CurriculumInfosCreate } from '@/shared/@types/curriculumInfos';
import { CandidateStackProps } from './candidateStackInterface';
import { UserResponseUser } from './userResponseInterface';
export interface CandidateUserResponse {
    cv?: CurriculumInfosCreate;
    stacks?: CandidateStackProps[];
    user: UserResponseUser
}