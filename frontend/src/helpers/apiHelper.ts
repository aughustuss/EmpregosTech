import axios from 'axios'


type DataLogin ={
    email: string,
    password : string,
}

export type DataRegister = {
    ucFirstName: string,
    ucLastName: string,
    ucBirthDate: string,
    ucEmail: string,
    ucPassword: string,
}

export const UserRegister = async (data:DataRegister) =>{
    try{
       const response = await axios.post("https://assorted-rate-production.up.railway.app/users/create" , data)
       console.log(response.data)
    }catch(err:any){
        throw new Error(err.message)
    }
}

export const UserLogin = async (data: DataLogin) =>{
    try{
        const response = await axios.post("", data)
        console.log(response.data)
    }catch(err:any){
        throw new Error(err.message)
    }
}