import { CandidateCourseProps } from '@/shared/@types/candidateCourseInterface';
import { CandidateExpsProps } from '@/shared/@types/candidateExpsInterface';
import { CandidateLanguageProps } from '@/shared/@types/candidateLanguageInterface';
import { CandidateStackProps } from '@/shared/@types/candidateStackInterface'
import { CurriculumInfosCreate } from '@/shared/@types/curriculumInfos';
import axios from 'axios'

const bearerToken = "Bearer " + localStorage.getItem("userToken");

export type DataLogin = {
    ucEmail: string,
    ucPassword: string,
}

export type DataRegister = {
    ucFirstName: string,
    ucLastName: string,
    ucBirthDate: string,
    ucMobilePhone: string;
    ucEmail: string,
    ucConfirmEmail: string,
    ucPassword: string,
    ucConfirmPassword: string,
}

export type DataRegisterToSend = {
    ucFirstName: string,
    ucLastName: string,
    ucBirthDate: string,
    ucEmail: string,
    ucPassword: string,
}

export type CandidateCompleteRegistration = {
    crrCandidateCpf: string;
};

export const CandidateComplete = async (data: CandidateCompleteRegistration) => {
    return await axios.post(`https://etbackapi-production.up.railway.app/candidate`, data, {
        headers:{
            Authorization: bearerToken
        }
    });

}

export const UserRegister = async (data: DataRegister) => {
    try {
        const res = axios.post("https://etbackapi-production.up.railway.app/user", data);
        return res;
    } catch (err: any) {
        throw new Error(err.message)
    }
}

export const GetAllCandidateUsers = async () => {
    try {
        const res = axios.get("https://etbackapi-production.up.railway.app/user/cv");
        return res;
    } catch (err: any) {
        throw err.message
    }
}

export const UserLogin = async (data: DataLogin) => {
    try {
        const response = await axios.post("https://etbackapi-production.up.railway.app/user/login", data);
        return response?.data?.token;
    } catch (err: any) {
        throw new Error(err.message)
    }
}


export const CurriculumCreate = async (data: CurriculumInfosCreate) => {
    try {
        await axios.post("https://etbackapi-production.up.railway.app/curriculum", data, {
            headers: {
                Authorization: bearerToken
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
        return true;
    } catch (err: any) {
        console.log(err);
    }
}

export const GetUserInfo = async (token: string) => {
    return await axios.get("https://etbackapi-production.up.railway.app/candidate", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const StackRegister = async (data: CandidateStackProps[]) => {
    try {
        await axios.post("https://etbackapi-production.up.railway.app/candidatestack", data, {
            headers: {
                Authorization: bearerToken
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
        return true;
    } catch (err: any) {
        console.log(err);
    }
}

export const LanguageRegister = async (data: CandidateLanguageProps[]) => {
    try {
        console.log(data)
        await axios.post("https://etbackapi-production.up.railway.app/language", data, {
            headers: {
                Authorization: bearerToken
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
        return true;
    } catch (err: any) {
        console.log(err);
    }
}

export const ExpRegister = async (data: CandidateExpsProps[]) => {
    try {
        console.log(data)
        await axios.post("https://etbackapi-production.up.railway.app/experience", data, {
            headers: {
                Authorization: bearerToken
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
        return true;
    } catch (err: any) {
        console.log(err);
    }
}

export const CourseRegister = async (data: CandidateCourseProps[]) => {
    try {
        console.log(data)
        await axios.post("https://etbackapi-production.up.railway.app/course", data, {
            headers: {
                Authorization: bearerToken
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
        return true;
    } catch (err: any) {
        console.log(err);
    }
}