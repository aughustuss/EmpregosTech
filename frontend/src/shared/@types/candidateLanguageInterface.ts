export interface CandidateLanguageProps {
    languageName: string;
    languageProficiency: LanguageInterfaceEnumProps
}

export enum LanguageInterfaceEnumProps {
    APRENDENDO,
    INICIANTE,
    INTERMEDIÁRIO,
    AVANÇADO,
    FLUENTE
}