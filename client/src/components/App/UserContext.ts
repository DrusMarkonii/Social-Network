import React, { createContext, useContext } from "react";

export type UserContextType = {
    userLogin: any;
    setUserLogin:(str: string) => void;
    isAuth: boolean;
    setIsAuth:(bool: boolean) => void;
}

export const UserContext = React.createContext<UserContextType>({
    userLogin: {},
    setUserLogin: () => {},
    isAuth: false,
    setIsAuth: () => {},
})

