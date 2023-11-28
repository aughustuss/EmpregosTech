export interface CurriculumInfosCreate {
  ccrUserRole: string,
  ccrUserSeniority: CandidadeSeniority,
  linkPortifolio: string,
  linkGitHub: string,
  linkInstagram: string
  objetivo: string;
  profile: string;
}

enum CandidadeSeniority {
    "ESTAGIÁRIO",
    "JUNIOR",
    "PLENO",
    "SÊNIOR",
    "STAFF_ENGINEER"
}