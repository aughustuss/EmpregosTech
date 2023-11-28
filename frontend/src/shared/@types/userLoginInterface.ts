export interface UserLoginInterface {
    userPayload: any;
    UserLogin: (val: UserLoginInterface) =>void
    UserLogout: () => void;
    UserLoggedIn: () => boolean
}
