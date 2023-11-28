export interface CandidateLanguageProps {
    lcrLanguageName: string;
    lcrLanguageProficiency: LanguageInterfaceEnumProps
}

export enum LanguageInterfaceEnumProps {
    APRENDENDO,
    INICIANTE,
    INTERMEDIÁRIO,
    AVANÇADO,
    FLUENTE
}