"use client";
import { UserLoginInterface } from '@/shared/@types/userLoginInterface'
import axios from 'axios'
import {createContext, useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/navigation'
interface ContextProps {
    children: React.ReactNode
}

const UserLoginContext = createContext<UserLoginInterface>({
    userPayload: null,
    UserLogin: () => {},
    UserLogout: () => {},
    UserLoggedIn: () => false
})

const UserLoginContextProvider: React.FC<ContextProps> = ({children}) => {
    const router = useRouter();
    const [userPayload, setUserPayload] = useState<any>(null);
    const UserLogin = async (data: UserLoginInterface) => {
        await axios.post("https://etbackapi-production.up.railway.app/user/login", data).then((response) => {
            const accessToken = response.data.token;
            if(accessToken){
                setUserPayload(accessToken);
                localStorage.setItem("userToken", accessToken);
                router.push("/home");
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    const UserLogout = () => {
        setUserPayload(0);
        localStorage.removeItem("userToken");
        router.push('/signIn')
    }

    const getUserFromLocalStorage = () => {
        return localStorage.getItem('userToken');
    }

    function UserLoggedIn(){
        return !!getUserFromLocalStorage();
    }
    useEffect(() => {
        const recoveredPayload = localStorage.getItem("userToken");
        recoveredPayload ? setUserPayload(recoveredPayload) : null;
    }, [])
    return (
        <UserLoginContext.Provider value={{userPayload, UserLogin, UserLogout, UserLoggedIn}}>
            {children}
        </UserLoginContext.Provider>
    )
} 

export default UserLoginContext
export {UserLoginContextProvider}